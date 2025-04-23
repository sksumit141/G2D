import React from "react";
import Opinion2023 from "../components/ui/Talk/Opinion2023";
import Opinion2022 from "../components/ui/Talk/Opinion2022";
import Opinion2021 from "../components/ui/Talk/Opinion2021";
const Opinion = () => {
  return (
    <>
      <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-5 sm:p-6 space-y-4 text-gray-800 transition hover:shadow-xl w-[96%] overflow-hidden hover:overflow-y-auto m-4 sm:m-5 lg:m-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-500 text-center pb-4 sm:pb-5">
          Opinion
        </h2>
        <Opinion2023 />
        <Opinion2022 />
        <Opinion2021 />
      </div>
    </>
  );
};

export default Opinion;
