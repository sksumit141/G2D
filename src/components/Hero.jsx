import React from "react";
import pabitraphoto from "../assets/p1.png";

const Hero = () => {
  return (
    <section className="px-6 md:px-20 py-14 ">
      <div className="max-w-1000 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-3 flex justify-center items-center transition hover:shadow-xl">
          <img
            src={pabitraphoto}
            alt="Dr. Pabitra Pal"
            className="w-60 h-60 md:w-90 object-center md:h-110 md:object-cover rounded-xl shadow-md ring-4 ring-blue-100 transition duration-300"
          />
        </div>

        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-6 space-y-4 text-gray-800 transition hover:shadow-xl">
            <h1 className="text-3xl font-bold text-blue-600 tracking-tight text-center ">
              Dr. Pabitra Pal
            </h1>
            <h2 className="text-xl leading-relaxed text-gray-600 text-center font-semibold">
              <span className="text-purple-500">
                Assistant Professor and Head
              </span>
              <br />
              <span className="text-purple-500">
                Department of Computer Applications,
              </span>
              <br />
              <span className="text-orange-700">
                Head, Department of Information Science (Undergraduate),
              </span>
              <br />
              <span className="text-orange-700">
                Head, Department of Information Science (Postgraduate),
              </span>
              <br />
              <span className="text-blue-500">
                School of Information Science and Technology
              </span>
              <br />
              <span className="text-amber-800">
                Maulana Abul Kalam Azad University of Technology
              </span>
            </h2>
          </div>

          <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-6 text-gray-700 text-sm leading-7 text-justify transition hover:shadow-xl">
            <p className="text-lg font-semibold">
              Dr. Pabitra Pal is currently an Assistant Professor in the
              Department of Computer Applications at MAKAUT (formerly WBUT). He
              previously served as a Post-Doctoral Research Associate and
              Project Scientist at IIT Delhi. He holds a Ph.D. in Computer
              Science from Vidyasagar University, along with M.Tech., MCA, M.Sc
              (Maths), and M.A. (Education). His research spans Watermarking,
              Steganography, Image Processing, and Cryptography. Dr. Pal has
              authored 20+ papers in reputed journals and serves as a reviewer
              for journals indexed in Scopus and Web of Science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
