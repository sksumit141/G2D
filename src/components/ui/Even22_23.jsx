import React from "react";
const even2223 = [
  {
    course: "BCAD601A - Digital Image Processing",
  },
  {
    course: "BCAD691A - Digital Image Processing Lab",
  },
  {
    course: "MCAD201B - Digital Image Processing",
  },
  {
    course: "MCAD291B - Digital Image Processing Lab",
  },
  {
    course: "MITAI202 - Image Processing",
  },
  {
    course: "MITAI292 - Image Processing",
  },
];
const Even22_23 = () => {
  return (
    <>
      <details className="mb-4 border border-gray-300 rounded-lg px-4 sm:px-5 py-2 sm:py-3">
        <summary className="cursor-pointer text-blue-600 font-extrabold text-lg sm:text-xl md:text-2xl flex justify-between items-center">
          Even 2022-23
          <span className="text-gray-500">▼</span>
        </summary>
        <div className="mt-2 pl-3 sm:pl-5">
          <ul className="space-y-3 text-base sm:text-lg md:text-xl text-gray-700 font-medium list-disc">
            {even2223.map((topic, index) => (
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

export default Even22_23;
