"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const CarrousselRoom = ({ musics }) => {
  console.log(musics);
  return (
    <main className="min-h-screen">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 5,
          },
        }}
        initialSlide={musics.length - 1}
        centeredSlides={true}
        spaceBetween={20}
        className="mySwiper w-full h-[65vw] sm:h-[25vw] flex"
      >
        {musics.map((music) => (
          <SwiperSlide key={music.name}>
            <img src={music.img} alt={music.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};
