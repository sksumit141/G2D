const express = require("express");
const cors = require("cors");
const { getJson } = require("serpapi");

const app = express();
const PORT = 5000;

app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept'],
}));
app.use(express.json());

const apiKey = "158e9360b057d7ad9fcb36024486901836faed8efd0e4aade663348d1a209058";
const authorId = "5ZbrGfUAAAAJ&hl";

const fetchAllArticles = async () => {
    try {
        const params = {
            engine: "google_scholar_author",
            author_id: authorId,
            api_key: apiKey,
            num: 100 // Request maximum number of results
        };

        const json = await getJson(params);

        if (!json.articles) {
            throw new Error("No articles found");
        }

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