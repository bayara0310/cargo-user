import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

const HomeSlider = () => {
  return (
    <>
     <div className="container mt-2">
      <Swiper pagination={true} modules={[Pagination, Autoplay]}  
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }} className="mySwiper rounded-xl">
        <SwiperSlide>
            <img src="https://cdn.cody.mn/img/157569/1920x0xwebp/Mbank_x_Shoppy_2640x760_1_WebBanner_copy.jpg?h=4ef1aa3a49ec22862e90935a08f476f976e741b4"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://cdn.cody.mn/img/158342/1920x0xwebp/Melhii_gunj_header_banner_web.jpg?h=4ef1aa3a49ec22862e90935a08f476f976e741b4"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://cdn.cody.mn/img/158763/1920x0xwebp/iPhone_NA_header_banner_web.jpg?h=4ef1aa3a49ec22862e90935a08f476f976e741b4"/>
        </SwiperSlide>
      </Swiper>
     </div>
    </>
  )
}

export default HomeSlider