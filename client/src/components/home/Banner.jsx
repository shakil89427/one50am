import bannerbg from "../../assets/home/bannerbg.png";
import bannerbgimg from "../../assets/home/bannerbgimg.png";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerbg})` }}
      className="text-white w-full bg-cover bg-center bg-no-repeat rounded-xl grid grid-cols-12 sm:gap-x-10 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 pt-5 sm:pt-0"
    >
      <div className="flex items-center justify-start col-span-12 sm:col-span-7 md:col-span-8">
        <div className="md:ml-10 lg:ml-14 xl:ml-20">
          <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold">
            One50am
          </h1>
          <h2 className="sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2">One Stop Platform</h2>
          <p
            style={{ lineHeight: "150%" }}
            className="sm:text-sm md:text-base lg:text-lg xl:text-xl mt-1"
          >
            For Social Media Analytics
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center sm:justify-start col-span-12 sm:col-span-5 md:col-span-4 pt-5 md:pt-14">
        <img src={bannerbgimg} alt="" className="w-full sm:max-w-[350px]" />
      </div>
    </div>
  );
};

export default Banner;
