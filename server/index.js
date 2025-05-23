const express = require("express");
const cors = require("cors");
const { getJson } = require("serpapi");
const helmet = require('helmet');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 5000;
const CACHE_FILE = path.join(__dirname, 'cache', 'articles.json');
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:"]
    }
}));

app.use(cors({
    origin: [process.env.FRONTEND_URL, 'https://gdfrontend.netlify.app', 'http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept'],
}));
app.use(express.json());

const apiKey = process.env.API_KEY;
const authorId = process.env.AUTHOR_ID;

const ensureCacheDirectory = async () => {
    const cacheDir = path.dirname(CACHE_FILE);
    try {
        await fs.access(cacheDir);
    } catch {
        await fs.mkdir(cacheDir, { recursive: true });
    }
};

const getCachedArticles = async () => {
    try {
        const data = await fs.readFile(CACHE_FILE, 'utf8');
        const cache = JSON.parse(data);
        
        if (Date.now() - cache.timestamp < CACHE_DURATION) {
            console.log('Using cached articles');
            return cache.articles;
        }
    } catch (error) {
        console.log('No valid cache found');
    }
    return null;
};

const updateCache = async (articles) => {
    try {
        await ensureCacheDirectory();
        await fs.writeFile(
            CACHE_FILE,
            JSON.stringify({
                articles,
                timestamp: Date.now()
            }, null, 2)
        );
        console.log('Cache updated');
    } catch (error) {
        console.error('Failed to update cache:', error);
    }
};

const fetchAllArticles = async () => {
    try {
        // Try to get cached articles first
        const cachedArticles = await getCachedArticles();
        if (cachedArticles) {
            return cachedArticles;
        }

        // If no cache, fetch from API
        console.log('Fetching from API...');
        const params = {
            engine: "google_scholar_author",
            author_id: authorId,
            api_key: apiKey,
            num: 100
        };

        const json = await getJson(params);

        if (!json.articles) {
            throw new Error("No articles found");
        }

        // Update cache with new data
        await updateCache(json.articles);
        return json.articles;
    } catch (error) {
        console.error("Error in fetchAllArticles:", error);
        throw error;
    }
};

app.get("/publication", async (req, res) => {
    try {
        const articles = await fetchAllArticles();
        console.log(`Total articles fetched: ${articles.length}`);
        res.json({ articles });
    } catch (err) {
        console.error("Error fetching articles:", err.message);
        res.status(500).json({ error: "Failed to fetch scholar data" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Backend running at http://localhost:${PORT}`);
});