import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();
  const [swiper, setSwiper] = useState({});

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg md:text-xl xl:text-2xl">News</h1>
        <span
          onClick={() => navigate("/news")}
          className="cursor-pointer font-medium text-sm md:text-md"
        >
          View all
        </span>
      </div>
      <div className="mt-5 relative">
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
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {new Array(20).fill("").map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
                alt=""
                className="object-cover object-center rounded-lg w-full aspect-[16/12]"
              />
              <p className="font-semibold line-clamp-3 mt-2">
                New Market Strategy for Influencer Is becoming best before
                Influencers Worth it?
              </p>
              <p className="font-light my-2 line-clamp-3">
                New Market Strategy for Influencer Is becoming best before
                Influencers Worth it?
              </p>
              <p className="text-[#2D2D2D]">Dec 2,2021</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          onClick={() => swiper?.slidePrev()}
          className="hidden md:block absolute bg-white top-[25%] left-0 z-10 w-14 px-1 text-5xl shadow-xl rounded-tr-3xl rounded-br-3xl cursor-pointer select-none"
        >
          <MdNavigateBefore />
        </div>
        <div
          onClick={() => swiper?.slideNext()}
          className="hidden md:block absolute bg-white top-[25%] right-0 z-10 w-14 px-1 text-5xl shadow-xl rounded-tl-3xl rounded-bl-3xl cursor-pointer select-none"
        >
          <MdNavigateNext />
        </div>
      </div>
    </div>
  );
};

export default News;
