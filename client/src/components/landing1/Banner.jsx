import bannerbg from "../../assets/landing1/bannerbg.png";
import deviderbg from "../../assets/landing1/deviderbg.png";

const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 pt-10 sm:pt-14 lg:pt-20 xl:pt-28 gap-14 sm:gap-0">
        <div className="lg:pt-20 lg:col-span-2 ">
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
            Play 2 Earn
          </p>
          <p className="text-lg lg:text-xl font-medium text-white mt-6 max-w-[32ch]">
            Play the all new Hyper Casual game to Earn Coins and Withdraw
          </p>
          <a
            href="#"
            className="flex items-center justify-center w-full max-w-[200px] h-12 rounded-md mt-12 text-white font-semibold bg-[#FF5C00]"
          >
            Play Now
          </a>
        </div>
        <div className="lg:col-span-3">
          <img src={bannerbg} alt="" />
        </div>
      </div>
      <img
        src={deviderbg}
        alt=""
        className="w-full md:w-[80%] mx-auto my-20 sm:my-24 lg:my-28 xl:my-32"
      />
    </>
  );
};
export default Banner;
