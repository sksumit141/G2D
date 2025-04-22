import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from "../assets/a1.png";
import pic2 from "../assets/a2.png";
import pic3 from "../assets/a3.png";
import pic4 from "../assets/a4.png";
import pic5 from "../assets/a5.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper/modules";

const Glimps = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 p-6 bg-white rounded-xl shadow-xl border border-gray-200">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-blue-800 mb-6 border-b-2 border-blue-500 pb-2">
        Glimpses
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {[pic1, pic2, pic3, pic4, pic5].map((pic, index) => (
          <SwiperSlide key={index}>
            <img
              src={pic}
              alt={`Glimpse ${index + 1}`}
              className="mx-auto h-auto w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] rounded-lg shadow-md object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Glimps;
