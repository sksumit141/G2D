import React from "react";
const odd2425 = [
  {
    course: "MIBCA1101 - Computer Fundamental and Programming Concept",
  },
  {
    course: "MIBCA1191 - Computer Fundamental and Programming Concept Lab",
  },
  {
    course: "MJBCA1101 - Computer Fundamental and Programming Concept",
  },
  {
    course: "MJBCA1191 - Computer Fundamental and Programming Concept Lab",
  },
  {
    course: "BITAIC502 - Image Processing",
  },
  {
    course: "BITAIC592 - Image Processing Lab",
  },
  {
    course: "SEBCA3281 - Software Tools and Technology - II",
  },
  {
    course: "SEBAI3281 - Software Tools and Technology - II",
  },
  {
    course: "SEBCS3281 - Software Tools and Technology - II",
  },
  {
    course: "SEBDS3281 - Software Tools and Technology - II",
  },
  {
    course: "SEBCA3281 - Software Tools and Technology - II",
  },
];
const Odd24_25 = () => {
  return (
    <>
      <details className="mb-4 border border-gray-300 rounded-lg px-4 sm:px-5 py-2 sm:py-3">
        <summary className="cursor-pointer text-blue-600 font-extrabold text-lg sm:text-xl md:text-2xl flex justify-between items-center">
          Odd 24-25
          <span className="text-gray-500">▼</span>
        </summary>
        <div className="mt-2 pl-3 sm:pl-5">
          <ul className="space-y-3 text-base sm:text-lg md:text-xl text-gray-700 font-medium list-disc">
            {odd2425.map((topic, index) => (
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

export default Odd24_25;
