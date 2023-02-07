import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import bigspiral from "../../assets/dating/bigspiral.png";
import smallspiral from "../../assets/dating/smallspiral.png";

const Middle = () => {
  return (
    <div className="bg-gradient-to-b from-[#FF0364] to-[#FF4B90] lg:mt-10">
      <div className="container relative py-32 lg:py-36 xl:py-40 overflow-hidden">
        <img src={bigspiral} alt="" className="absolute top-0 left-0" />
        <img src={smallspiral} alt="" className="absolute bottom-0 right-0" />
        <Swiper
          speed={600}
          autoplay={{ delay: 3000 }}
          loop
          modules={[Autoplay]}
          className="w-full max-w-[600px] mx-auto"
        >
          {new Array(5).fill("Swipe & Make Connection").map((item, index) => (
            <SwiperSlide key={index}>
              <p className="text-center line-clamp-1 text-white text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-semibold">
                {item}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Middle;
