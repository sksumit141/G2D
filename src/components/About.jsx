import React from "react";
import Students from "./ui/Student";
import Teaching from "./ui/Teaching";
import Book from "./ui/Book";

const About = () => {
  return (
    <div className="">
      <div className="mt-10 mb-5 ">
        <h1 className=" m-5 text-3xl font-bold text-blue-600 text-center">
          Students
        </h1>
      </div>
      <Students />
      
      <Teaching />
      <Book />
    </div>
  );
};

export default About;
