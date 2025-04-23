import React from "react";
import Essay2023 from "./ui/Talk/Essay2023";
import Essay2022 from "./ui/Talk/Essay2022";
import Essay2021 from "./ui/Talk/Essay2021";
const Essay = () => {
  return (
    <>
      <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-5 sm:p-6 space-y-4 text-gray-800 transition hover:shadow-xl w-[96%] overflow-hidden hover:overflow-y-auto m-4 sm:m-5 lg:m-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-500 text-center pb-4 sm:pb-5">
          Essay
        </h2>
        <Essay2023 />
        <Essay2022 />
        <Essay2021 />
      </div>
    </>
  );
};

export default Essay;
