import React from "react";
import Seminar2023 from "../components/ui/Talk/Seminar2023";
import Seminar2022 from "../components/ui/Talk/Seminar2022";
import Seminar2021 from "../components/ui/Talk/Seminar2021";
const Seminar = () => {
  return (
    <>
      <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-5 sm:p-6 space-y-4 text-gray-800 transition hover:shadow-xl w-[96%] overflow-hidden hover:overflow-y-auto m-4 sm:m-5 lg:m-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-500 text-center pb-4 sm:pb-5">
          Seminar
        </h2>
        <Seminar2023 />
        <Seminar2022 />
        <Seminar2021 />
      </div>
    </>
  );
};

export default Seminar;
