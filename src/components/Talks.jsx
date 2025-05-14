import React from "react";
import Seminar from "./Seminar";
import Essay from "./Essay";
import Opinion from "./Opinion";

const Talks = () => {
  return (
    <>
      <div className="mt-10 mb-5 ">
        <h1 className=" m-5 text-5xl font-bold text-blue-600 text-center">
          Students
        </h1>
      </div>
      <Seminar />
      <Essay />
      <Opinion />
    </>
  );
};

export default Talks;
