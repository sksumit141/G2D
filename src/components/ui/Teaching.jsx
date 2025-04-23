import React from "react";
import Odd24_25 from "./Odd24_25";
import Even23_24 from "./Even23_24";
import Odd23_24 from "./Odd23_24";
import Even22_23 from "./Even22_23";
import Odd22_23 from "./Odd22_23";
const Teaching = () => {
  return (
    <>
      <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-5 sm:p-6 space-y-4 text-gray-800 transition hover:shadow-xl w-[96%] overflow-hidden hover:overflow-y-auto m-4 sm:m-5 lg:m-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-500 text-center pb-4 sm:pb-5">
          Teaching
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium text-center mb-4 sm:mb-5">
          I am teaching three courses this coming semester at Maulana Abul Kalam
          Azad University of Technology, West Bengal. Please sign up for courses
          on the University website. If you have any specific questions about
          course topics, feel free to message my office, and I will respond as
          soon as possible.
        </p>
        <Odd24_25 />
        <Even23_24 />
        <Odd23_24 />
        <Even22_23 />
        <Odd22_23 />
      </div>
    </>
  );
};

export default Teaching;
