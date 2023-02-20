import reviewimg1 from "../../assets/landing1/reviewimg1.png";
import reviewimg2 from "../../assets/landing1/reviewimg2.png";
import reviewimg3 from "../../assets/landing1/reviewimg3.png";
import star1 from "../../assets/landing1/star1.png";
import star2 from "../../assets/landing1/star2.png";

const Review = () => {
  return (
    <div>
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center">
        1 Million+ Gamers Playing
      </p>
      <p className="text-center mt-5 text-[#323232] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        Collect Coins and Unlock next level to Earn
      </p>
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-5 text-center">
        <div className="bg-white px-5 py-10 rounded-lg flex flex-col items-center justify-center gap-5">
          <img src={reviewimg1} alt="" />
          <p className="text-2xl font-semibold">Kristin Watson</p>
          <div className="flex items-center justify-center gap-1">
            <img src={star1} alt="" />
            <img src={star1} alt="" />
            <img src={star1} alt="" />
            <img src={star1} alt="" />
            <img src={star2} alt="" />
          </div>
          <p>
            This game is a huge stress reliever, I earned coins and withdrawn them. Really satisfied
            with the game play.
          </p>
        </div>

        <div className="bg-white px-5 py-10 rounded-lg flex flex-col items-center justify-center gap-5 relative">
          <div className="hidden lg:block absolute bg-white h-full w-[102%] scale-y-110 rounded-lg" />
          <img src={reviewimg2} alt="" className="relative lg:scale-110" />
          <p className="text-2xl font-semibold relative">Cameron Williamson</p>
          <div className="flex items-center justify-center gap-1 relative">
            <img src={star1} alt="" />
            <img src={star1} alt="" />
            <img src={star1} alt="" />
            <img src={star1} alt="" />
            <img src={star1} alt="" />
          </div>
          <p className="relative">
            This game helped me make real coins and I used the coins to withdraw in email. Amazing
            Game to earn and also addictive to play.
          </p>
        </div>

        <div className="bg-white px-5 py-10 rounded-lg flex flex-col items-center justify-center gap-5">
          <img src={reviewimg3} alt="" />
          <p className="text-2xl font-semibold">Jacob Jones</p>
          <div className="flex items-center justify-center gap-1">
            <img src={star1} alt="" />
            <img src={star1} alt="" />
            <img src={star1} alt="" />
            <img src={star1} alt="" />
            <img src={star2} alt="" />
          </div>
          <p>
            My friend referred me to play this. And since then I play daily 1 hour and withdraw
            coins and earn. Highly recommended.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Review;
