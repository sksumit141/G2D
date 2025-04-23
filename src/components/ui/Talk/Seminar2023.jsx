import React from "react";
const seminar23 = [
  {
    title:
      "Goodwill, Sam. 2023. “Article Name Here.” Publication Name, January 1, 2023. Article Link.",
  },
  {
    title:
      "Goodwill, Sam. 2023. “Article Name Here.” Publication Name, January 1, 2023. Article Link.",
  },
  {
    title:
      "Goodwill, Sam. 2023. “Article Name Here.” Publication Name, January 1, 2023. Article Link.",
  },
  {
    title:
      "Goodwill, Sam. 2023. “Article Name Here.” Publication Name, January 1, 2023. Article Link.",
  },
  {
    title:
      "Goodwill, Sam. 2023. “Article Name Here.” Publication Name, January 1, 2023. Article Link.",
  },
];
const Seminar2023 = () => {
  return (
    <>
      <details className="mb-4 border border-gray-300 rounded-lg px-4 sm:px-5 py-2 sm:py-3">
        <summary className="cursor-pointer text-blue-600 font-extrabold text-lg sm:text-xl md:text-2xl flex justify-between items-center">
          2023
          <span className="text-gray-500">▼</span>
        </summary>
        <div className="mt-2 pl-3 sm:pl-5">
          <ul className="space-y-3 text-base sm:text-lg md:text-xl text-gray-700 font-medium list-disc">
            {seminar23.map((topic, index) => (
              <li key={index} className="pl-2">
                {topic.title}
              </li>
            ))}
          </ul>
        </div>
      </details>
    </>
  );
};

export default Seminar2023;
