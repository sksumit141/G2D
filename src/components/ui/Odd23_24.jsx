import React from "react";
const odd2324 = [
  {
    course: "BCAC501 - Internet Technology",
  },
  {
    course: "BCAC591 - Internet Technology Lab",
  },
  {
    course: "BCAC502 - Computer Networking",
  },
  {
    course: "BCAC592 - Computer Networking Lab",
  },
  {
    course: "BITAIC502 - Image Processing",
  },
  {
    course: "BITAIC592 - Image Processing Lab",
  },
  {
    course: "MJBCS1101 - Computer Fundamental and Programming Concept",
  },
  {
    course: "MJBCS1191 - Computer Fundamental and Programming Concept Lab",
  },
  {
    course: "MJBDS1101 - Computer Fundamental and Programming Concept",
  },
  {
    course: "MJBDS1191 - Computer Fundamental and Programming Concept Lab",
  },
  {
    course: "MIBDS1101 - Computer Fundamental and Programming Concept",
  },
  {
    course: "MIBAI1191 - Computer Fundamental and Programming Concept Lab",
  },
  {
    course: "MJBAI1191 - Computer Fundamental and Programming Concept Lab",
  },
];
const Odd23_24 = () => {
  return (
    <>
      <details className="mb-4 border border-gray-300 rounded-lg px-4 sm:px-5 py-2 sm:py-3">
        <summary className="cursor-pointer text-blue-600 font-extrabold text-lg sm:text-xl md:text-2xl flex justify-between items-center">
          Odd 2023-24
          <span className="text-gray-500">▼</span>
        </summary>
        <div className="mt-2 pl-3 sm:pl-5">
          <ul className="space-y-3 text-base sm:text-lg md:text-xl text-gray-700 font-medium list-disc">
            {odd2324.map((topic, index) => (
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

export default Odd23_24;
