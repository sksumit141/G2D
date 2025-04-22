import React from "react";
const currentStudent = [
  {
    name: "Sachchidananda Jana (PhD, Co-Supervised by Dr. Ashim Mahadani, BUIE)",
  },
  { name: "Amit Ruidas (MTech, Co-Supervised by Dr. Ashim Mahadani, BUIE)" },
  {
    name: "Debolina Bhattacharya (MTech, Co-Supervised by Dr. Ashim Mahadani, BUIE) ",
  },
  { name: "Saroj Manna (MTech AI, Co-supervised by Dr. Sayani Mondal, SNU)" },
  {
    name: "Sandipan Pal (MTech AI, Co-supervised by Dr. Sayani Mondal, SNU)",
  },
  {
    name: "Sattwik Roy Chowdhury (MSc in DS, Co-supervised by Dr. Sayani Mondal, SNU)",
  },
  {
    name: "Chitra Chattaraj (MTech DS, Co-supervised by Siddhartha Bhaumick)",
  },
  {
    name: "RAHAMAT SEKH: Image Processing",
  },
  {
    name: "KHUSHJIT KARMAKAR (Quantum Computing)",
  },
  {
    name: "SOUVIK SASMAL",
  },
  {
    name: "ARNAB ROY (MCA) Multimedia Security",
  },
  {
    name: "SHUBHADIP CHAND (5G & IoT)	",
  },
  {
    name: "SOUVIK SHIL	(Quantum Computing)",
  },
];
const graduatedStudent = [
  { name: "Riya Jana (MCA 2024)" },
  { name: "Ankan Ghosh (MSc AI 2024)" },
  { name: "Swapnil (MSc DS 2024)" },
  { name: "Ankan Ghosh (MSc AI 2024)" },
  { name: "Soumen Jana (MSc DS 2023)" },
];
const Students = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-10 py-5 flex flex-col md:flex-row md:justify-evenly gap-5 ">
        <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-5 sm:p-6 space-y-4 text-gray-800 transition hover:shadow-xl w-full md:w-[48%] max-h-[600px] overflow-hidden hover:overflow-y-auto">
          <h1 className="text-2xl sm:text-3xl font-semibold text-blue-500  text-center pb-4 ">
            Current Student
          </h1>
          <ul className="space-y-3 text-base sm:text-lg text-gray-700 font-medium pl-5">
            {currentStudent.map((topic, index) => (
              <li key={index} className="list-disc pl-3">
                {topic.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Graduated Student */}
        <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-5 sm:p-6 space-y-4 text-gray-800 transition hover:shadow-xl w-full md:w-[48%] max-h-[600px] overflow-hidden hover:overflow-y-auto">
          <h1 className="text-2xl sm:text-3xl font-semibold text-blue-500 text-center pb-4">
            Graduated Student
          </h1>
          <ul className="space-y-3 text-base sm:text-lg text-gray-700 font-medium pl-5">
            {graduatedStudent.map((topic, index) => (
              <li key={index} className="list-disc pl-3">
                {topic.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Students;
