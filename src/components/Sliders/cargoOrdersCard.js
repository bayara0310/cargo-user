import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function CargoOrderCard() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper p-4"
      >
        <SwiperSlide>
            <img className="h-20 mb-8" src="https://www.prolinecargo.mn/images/onlineshop/taobao.png"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-20" src="https://www.prolinecargo.mn/images/onlineshop/nike.png"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-20" src="https://www.prolinecargo.mn/images/onlineshop/1688.png"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-20" src="https://www.prolinecargo.mn/images/onlineshop/tmall.png"/>
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-20" src="https://www.prolinecargo.mn/images/onlineshop/taobao.png"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
