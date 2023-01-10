import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import blogs from "../../constants/blogsData";

const Blogs = () => {
  const navigate = useNavigate();
  const [swiper, setSwiper] = useState({});

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg md:text-xl xl:text-2xl">Blogs</h1>
        <span
          onClick={() => navigate("/blogs")}
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
            768: {
              slidesPerView: 2.2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          className="grid grid-cols-1"
        >
          {blogs.map((blog) => (
            <SwiperSlide
              onClick={() => navigate(`/blogdetails/${blog.blogId}`)}
              key={blog.blogId}
              className="cursor-pointer relative pb-7"
            >
              <img
                src={`${new URL(import.meta.url).origin}/blogs/${
                  blog.blogId
                }1.png`}
                alt=""
                className="object-cover object-center aspect-[5/4] rounded-xl"
              />
              <p className="font-semibold mt-3 line-clamp-2">{blog.title}</p>
              <p className="mt-3 font-light line-clamp-2">
                {blog.content.find((item) => item.type === "text").title}
              </p>
              <p className="absolute bottom-0 left-0 text-xs text-gray-500">
                {blog.creationDate}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          onClick={() => swiper?.slidePrev()}
          className="hidden xl:block absolute bg-white top-[30%] left-0 z-10 w-12 p-1 text-4xl shadow-xl rounded-tr-3xl rounded-br-3xl cursor-pointer select-none"
        >
          <MdNavigateBefore />
        </div>
        <div
          onClick={() => swiper?.slideNext()}
          className="hidden xl:block absolute bg-white top-[30%] right-0 z-10 w-12 p-1 text-4xl shadow-xl rounded-tl-3xl rounded-bl-3xl cursor-pointer select-none"
        >
          <MdNavigateNext />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
