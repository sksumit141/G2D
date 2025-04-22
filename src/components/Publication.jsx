import { useEffect, useState } from "react";

function publication() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:5000/publication");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const sortedArticles = data.articles.sort((a, b) => b.year - a.year);
        setArticles(sortedArticles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-lg text-gray-600">
        Loading articles...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-lg text-red-600">
        Error: {error}
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Scholar Articles
        </h1>
        <p className="text-lg text-gray-600">
          Total Articles: {articles.length}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {articles.map((article, index) => (
          <article
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              {article.title}
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700 text-sm">
                {article.authors.split(", ").map((author, i) => (
                  <span key={i}>
                    {author.includes("P Pal") ? (
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
              <p className="text-gray-600 text-sm italic">
                {article.publication}
              </p>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Year: {article.year}</span>
                <span>Citations: {article.cited_by?.value || 0}</span>
              </div>
            </div>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              View Article
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default publication;
