import React from "react";
const even2324 = [
  {
    course: "BCAD601A - Digital Image Processing",
  },
  {
    course: "BCAD691A - Digital Image Processing Lab",
  },
  {
    course: "SEBCA2191 - Software Tools and Technology - I Lab",
  },
  {
    course: "SEBCA2191 - Software Tools and Technology - I Lab",
  },
  {
    course: "SEBAI2191 - Software Tools and Technology - I Lab",
  },
  {
    course: "SEBCS2191 - Software Tools and Technology - I Lab",
  },
  {
    course: "SEBDS2191 - Software Tools and Technology - I Lab",
  },
  {
    course: "MCAD201B - Digital Image Processing",
  },
  {
    course: "MCAD291B - Digital Image Processing Lab",
  },
];
const Even23_24 = () => {
  return (
    <>
      <details className="mb-4 border border-gray-300 rounded-lg px-4 sm:px-5 py-2 sm:py-3">
        <summary className="cursor-pointer text-blue-600 font-extrabold text-lg sm:text-xl md:text-2xl flex justify-between items-center">
          Even 23-24
          <span className="text-gray-500">▼</span>
        </summary>
        <div className="mt-2 pl-3 sm:pl-5">
          <ul className="space-y-3 text-base sm:text-lg md:text-xl text-gray-700 font-medium list-disc">
            {even2324.map((topic, index) => (
              <li key={index} className="pl-2">
                {topic.course}
              </li>
            ))}
          </ul>
        </div>
      </details>
    </>
  );
};

export default Even23_24;
