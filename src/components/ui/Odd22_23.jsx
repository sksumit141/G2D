import React from "react";

const odd2022_23 = [
  {
    course: "MCAC101 - Programming for problem solving",
  },
  {
    course: "MCAC191 - Programming for problem solving",
  },
  {
    course: "BITAIC502 - Image Processing",
  },
  {
    course: "BITAIC592 - Image Processing Lab",
  },
  {
    course: "BCAD501A - Information Security",
  },
  {
    course: "BITAIC101 - Programming Fundamentals",
  },
  {
    course: "BITAIC191 - Programming Fundamentals Lab",
  },
  {
    course: "BITCSC101 - Programming Fundamentals",
  },
  {
    course: "BITCSC191 - Programming Fundamentals",
  },
  {
    course: "BITDSC101 - Programming Fundamentals",
  },
  {
    course: "BITDSC191 - Programming Fundamentals Lab",
  },
];
const Odd22_23 = () => {
  return (
    <div>
      <details className="mb-4 border border-gray-300 rounded-lg px-4 sm:px-5 py-2 sm:py-3">
        <summary className="cursor-pointer text-blue-600 font-extrabold text-lg sm:text-xl md:text-2xl flex justify-between items-center">
          Odd 2022-23
          <span className="text-gray-500">▼</span>
        </summary>
        <div className="mt-2 pl-3 sm:pl-5">
          <ul className="space-y-3 text-base sm:text-lg md:text-xl text-gray-700 font-medium list-disc">
            {odd2022_23.map((topic, index) => (
              <li key={index} className="pl-2">
                {topic.course}
              </li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
};

export default Odd22_23;
