import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

export default function CargoOrderCard({data}) {
  console.log(data, "ahah")
  const [a, setA] = useState([])
  useEffect(() => {
    setA(data)
  }, [data]);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper p-4"
      >
        {
          a.map((i, index) =>{
            return(
              <SwiperSlide key={index}>
                <a href={i.link} target="_blank">
                  <img className="mb-10 h-10" src={i.logo}/>
                </a>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}
