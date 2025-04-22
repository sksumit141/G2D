import React from "react";

const Book = () => {
  return (
    <>
      <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-6 space-y-4 text-gray-800 transition hover:shadow-xl w-[96%] overflow-hidden hover:overflow-y-auto m-5 flex flex-col md:flex-row gap-10">
        <div className="flex-shrink-0">
          <img
            src="src/assets/book.jpeg"
            alt=""
            className="w-full md:w-64 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-blue-500 text-3xl sm:text-4xl font-semibold">
              CRACK JECA
            </h1>
            <h2 className="text-xl font-semibold">
              (Entrance Exam Book for MCA Aspirants)
            </h2>
            <p>
              by-{" "}
              <span className="text-blue-600">
                Dr. Pabitra Pal, Dr. Partha Chowdhuri, & Mr. Prabhash Kumar
                Singh
              </span>
            </p>
            <p>
              <span className="font-semibold">Edition:</span> First Edition
            </p>
            <p>
              <span className="font-semibold">ISBN-13:</span> 978-9355968074
            </p>
            <p>
              <span className="font-semibold">Publisher:</span> Himalaya
              Publishing House
            </p>
            <p>
              <span className="font-semibold">Publication date:</span> 12
              October 2022
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold">Available:</p>
            <p className="font-semibold">
              Flipkart:
              <a
                href="https://www.flipkart.com/crack-jeca-entrance-exam-book-mca-aspirants/p/itm048ec8892e4e9"
                target="_blank"
                className="text-blue-600 underline"
              >
                Flipkart Link
              </a>
            </p>

            <p className="font-semibold">
              Amazon:{" "}
              <a
                href="https://www.amazon.in/CRACK-JECA-Entrance-Exam-Aspirants/dp/9355968078"
                target="_blank"
                className="text-blue-600 underline"
              >
                Amazon Link
              </a>
            </p>
            <p className="font-semibold">
              Himalaya Publishing House:{" "}
              <a
                href="https://ebooks.himpub.com/product/crack-jeca"
                target="_blank"
                className="text-blue-600 underline"
              >
                Himalaya Publishers
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
