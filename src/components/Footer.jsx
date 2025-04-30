import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className=" w-full">
        <div className="w-full bg-blue-600 border-2 border-gray-200 shadow-lg text-white flex flex-col md:flex-row justify-between px-6 md:px-40 py-10 gap-6">
          <div className="flex flex-col gap-1 ">
            <h3>Contact:</h3>
            <p>Mobile: +91-9647080303</p>
            <a href="mailto:pabitra.pal@makaut.ac.in" id="email">
              pabitra.pal@makautwb.ac.in
            </a>
            <a href="mailto:pabipaltra@gmail.com">
              pabipaltra@gmail.com <sup>*</sup>
            </a>
          </div>

          <div className="max-w-md">
            <p>For speaking and inquiries, please contact:</p>
            <p className="text-amber-300">
              Address: Room: 211, Academic Building, Dept. of Computer
              Applications, Maulana Abul Kalam Azad University Of Technology,
              WB, Haringhata, Nadia 741249, West Bengal, India
            </p>
          </div>
        </div>

        <hr className="border-black border" />

        <div className="flex flex-row justify-center md:justify-center pr-0 md:pr-10 bg-white border-2 border-gray-200 shadow-lg text-black">
          {/* <p>@ 2025 &lt; Gen2De / &gt;</p> */}
          <p className="flex justify-center items-center gap-5">
            @ 2025
            <span>
              <img src={logo} alt="" className="w-20" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
