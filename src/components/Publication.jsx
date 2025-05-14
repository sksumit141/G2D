import { useEffect, useState } from "react";
import Toggle from './Toggle';

function Publication() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rawArticles, setRawArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:5000/publication", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRawArticles(data.articles);
        setArticles(data.articles.sort((a, b) => b.year - a.year));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleSortChange = (isCitation) => {
    const sortedArticles = [...rawArticles].sort((a, b) => 
      isCitation 
        ? (b.cited_by?.value || 0) - (a.cited_by?.value || 0)
        : b.year - a.year
    );
    setArticles(sortedArticles);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-base sm:text-lg text-gray-600 px-4 text-center">
        Loading articles...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-base sm:text-lg text-red-600 px-4 text-center">
        Error: {error}
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 max-w-7xl">
      <header className="mb-8 sm:mb-12 flex flex-col items-center gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center">
          Scholar Articles
        </h1>

        <div className="flex flex-col items-center gap-2">
          <div className="flex justify-center w-full">
            <p className="text-base sm:text-lg text-gray-600 text-center">
              Total Articles: {articles.length}
            </p>
          </div>
          <Toggle onSortChange={handleSortChange} />
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
        {articles.map((article, index) => (
          <article
            key={index}
            className="bg-white rounded-lg shadow-md sm:shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full"
          >
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-blue-600 mb-2 sm:mb-4">
              {article.title}
            </h2>
            <div className="space-y-2 sm:space-y-3 flex-grow">
              <p className="text-sm sm:text-base text-gray-700">
                {article.authors.split(", ").map((author, i) => (
                  <span key={i}>
                    {author.includes("P Pal") || author.includes("PK Pal") ? (
                      <span className="text-blue-600 font-semibold [text-shadow:0_1px_2px_rgb(30_58_138/_30%)]">
                        {author}
                      </span>
                    ) : (
                      author
                    )}
                    {i < article.authors.split(", ").length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              <p className="text-sm text-gray-600 italic">{article.publication}</p>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Year: {article.year}</span>
                <span>Citations: {article.cited_by?.value || 0}</span>
              </div>
            </div>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-sm sm:text-base text-center bg-blue-600 text-white py-2 px-3 sm:px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              View Article
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Publication;
