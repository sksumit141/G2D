import React from "react";

const currentStudent = [
  {
    name: "Sachchidananda Jana (PhD, Co-Supervised by Dr. Ashim Mahadani, BUIE)",
    department: "(MCA 2024)",
    photo: "src/assets/student.png",
  },
  {
    name: "Amit Ruidas ( Co-Supervised by Dr. Ashim Mahadani, BUIE)",
    department: "(MTech)",
    photo: "src/assets/student.png",
  },
  {
    name: "Debolina Bhattacharya ( Co-Supervised by Dr. Ashim Mahadani, BUIE) ",
    department: "(MTech)",
    photo: "src/assets/student.png",
  },
  {
    name: "Saroj Manna (Co-supervised by Dr. Sayani Mondal, SNU)",
    department: "(MTech AI )",
    photo: "src/assets/student.png",
  },
  {
    name: "Sandipan Pal (Co-supervised by Dr. Sayani Mondal, SNU)",
    department: "(MTech AI )",
    photo: "src/assets/student.png",
  },
  {
    name: "Sattwik Roy Chowdhury (Co-supervised by Dr. Sayani Mondal, SNU)",
    department: "(MSc in DS )",
    photo: "src/assets/student.png",
  },
  {
    name: "Chitra Chattaraj (Co-supervised by Siddhartha Bhaumick)",
    department: "(MTech DS )",
    photo: "src/assets/student.png",
  },
  {
    name: "RAHAMAT SEKH",
    department: "(Image Processing)",
    photo: "src/assets/student.png",
  },
  {
    name: "KHUSHJIT KARMAKAR ",
    department: "(Quantum Computing)",
    photo: "src/assets/student.png",
  },
  {
    name: "SOUVIK SASMAL",
    department: "",
    photo: "src/assets/student.png",
  },
  {
    name: "ARNAB ROY ",
    department: "(MCA) Multimedia Security",
    photo: "src/assets/student.png",
  },
  {
    name: "SHUBHADIP CHAND 	",
    department: "(5G & IoT)",
    photo: "src/assets/student.png",
  },
  {
    name: "SOUVIK SHIL	",
    department: "(Quantum Computing)",
    photo: "src/assets/student.png",
  },
];
const graduatedStudent = [
  {
    name: "Riya Jana ",
    department: "(MCA 2024)",
    photo: "src/assets/student.png",
  },
  {
    name: "Ankan Ghosh ",
    department: "(MSc AI 2024)",
    photo: "src/assets/student.png",
  },
  {
    name: "Swapnil ",
    department: "(MSc DS 2024)",
    photo: "src/assets/student.png",
  },

  {
    name: "Ankan Ghosh ",
    department: "(MSc AI 2024)",
    photo: "src/assets/student.png",
  },
  {
    name: "Soumen Jana ",
    department: "(MSc DS 2023)",
    photo: "src/assets/student.png",
  },
];

const Students = () => {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-500 text-center pb-4 sm:pb-5 mt-10">
        Students
      </h1>
      <div className="w-full px-4 sm:px-6 lg:px-10 py-5 flex flex-col  md:justify-evenly gap-5  ">
        <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-5 sm:p-6 space-y-4 text-gray-800 transition hover:shadow-xl w-full max-h-[600px]  overflow-auto hover:overflow-y-auto ">
          <h1 className="text-2xl sm:text-3xl font-semibold text-blue-500 text-center pb-4">
            Current Students
          </h1>

          {/* Student Cards */}
          <div className="space-y-4  md:flex md:flex-wrap md:gap-10 ">
            {currentStudent.map((student, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition md:w-[45%]"
              >
                {/* Student Photo */}
                <img
                  src={student.photo}
                  alt={student.name}
                  className="w-16 h-16 object-cover rounded-full border"
                />

                {/* Student Info */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {student.name}
                  </h2>
                  <p className="text-sm text-gray-600">{student.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Graduated Student */}
        <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-5 sm:p-6 space-y-4 text-gray-800 transition hover:shadow-xl w-full  overflow-hidden hover:overflow-y-auto ">
          <h1 className="text-2xl sm:text-3xl font-semibold text-blue-500 text-center pb-4">
            Graduated Students
          </h1>

          {/* Student Cards */}
          <div className="space-y-4  md:flex md:flex-wrap md:gap-10 ">
            {graduatedStudent.map((student, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition md:w-[45%]"
              >
                {/* Student Photo */}
                <img
                  src={student.photo}
                  alt={student.name}
                  className="w-16 h-16 object-cover rounded-full border"
                />

                {/* Student Info */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {student.name}
                  </h2>
                  <p className="text-sm text-gray-600">{student.department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
