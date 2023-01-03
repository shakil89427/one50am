import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const NewsSlider = () => {
  const [swiper, setSwiper] = useState({});
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg md:text-xl xl:text-2xl">News</h1>
        <span className="cursor-pointer font-medium text-sm md:text-md">
          View all
        </span>
      </div>
      <div className="my-5 relative w-full">
        <Swiper
          modules={[Navigation]}
          onInit={setSwiper}
          onSwiper={setSwiper}
          initialSlide={0}
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            576: {
              slidesPerView: 2.3,
            },
            1024: {
              slidesPerView: 3.3,
            },
            1366: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>1</SwiperSlide>
          <SwiperSlide>2</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
        </Swiper>
        <div
          onClick={() => swiper?.slidePrev()}
          className="hidden md:block absolute bg-white top-[25%] -left-3 z-10 w-14 px-1 text-5xl shadow-xl rounded-tr-3xl rounded-br-3xl cursor-pointer select-none"
        >
          <MdNavigateBefore />
        </div>
        <div
          onClick={() => swiper?.slidePrev()}
          className="hidden md:block absolute bg-white top-[25%] -right-3 z-10 w-14 px-1 text-5xl shadow-xl rounded-tl-3xl rounded-bl-3xl cursor-pointer select-none"
        >
          <MdNavigateNext />
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;
