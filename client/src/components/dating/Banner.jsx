import { useState } from "react";
import bannerimage from "../../assets/dating/bannerimage.png";
import bannerbg from "../../assets/dating/bannerbg.png";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Banner = () => {
  const [play, setPlay] = useState(false);

  return (
    <div
      style={{ backgroundImage: `url(${bannerbg})` }}
      className="bg-[#FF0364] pt-5 md:pt-8 xl:pt-12 pb-8 md:pb-12 xl:pb-16 bg-cover bg-center"
    >
      <div className="container text-white grid grid-cols-1 sm:grid-cols-2 lg:gap-x-5 gap-y-7 lg:gap-y-0 bg-cover bg-center bg-no-repeat lg:max-w-[900px] xl:max-w-[1150px] 2xl:max-w-[1300px]">
        <div className="lg:p-8 flex items-center justify-start">
          <div>
            <h1
              style={{ lineHeight: "130%" }}
              className="text-3xl sm:text-2xl lg:text-3xl xl:text-[48px] font-medium max-w-[13ch]"
            >
              Connect With Your Sorrounding Soulmates
            </h1>
            <p className="text-md my-4 sm:my-2 lg:my-4 max-w-[35ch] text-white">
              It’s Only you and your soulmate. Make Flame Connection with people around you.
            </p>

            <div
              className="flex mt-8 sm:mt-5 lg:mt-8 items-center justify-center gap-2 w-52 h-11 rounded-full bg-white text-[#FF0364] select-none cursor-pointer"
              onClick={() => navigate("/createcampaign")}
            >
              <IoLogoGooglePlaystore className="text-3xl" />
              <p className="font-semibold">Download App</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:p-8 relative">
          {play ? (
            <iframe
              className="w-full aspect-video rounded-2xl"
              src="https://www.youtube.com/embed/9S_m6kO-jfc"
              title="Flytant"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <img
                src={bannerimage}
                alt=""
                className="w-full rounded-xl aspect-video object-cover object-top"
              />
              <AiFillPlayCircle
                className="absolute text-5xl text-white/60 cursor-pointer"
                onClick={() => setPlay(true)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Banner;
