"use client";

import { color } from "motion/react";
import { TypewriterEffect } from "./ui/Typewritter"; // or TypewriterEffectSmooth

const ResearchTopic = () => {
  const topics = [
    { name: "Watermarking" },
    { name: "Steganography" },
    { name: "Data hiding" },
    { name: "Multimedia Security" },
    { name: "Image processing" },
    { name: "Cryptography" },
    { name: "5G & IoT" },
  ];

  const words = [
    {
      text: "Research",
      className: "text-blue-800",
    },
    {
      text: "Interests",
      className: "text-black",
    },
    {
      text: ":",
      className: "text-black",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-10 py-5">
      <div className="max-w-5xl mx-auto bg-white shadow-lg border border-gray-200 rounded-xl p-6 transition hover:shadow-xl">
        <div className="flex flex-col justify-start items-start space-y-12">
          <div className="space-y-3">
            <h2 className="ml-7 text-3xl sm:text-4xl font-semibold text-blue-500  ">
              <TypewriterEffect words={words} />
            </h2>
          </div>

          <div className="w-full max-w-md bg-white   p-6 s space-y-4">
            <ul className="ml-7 space-y-3 text-lg sm:text-xl text-gray-700 font-medium pl-5">
              {topics.map((topic, index) => (
                <li key={index} className="list-disc pl-3">
                  {topic.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchTopic;
