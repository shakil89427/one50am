import React, { useMemo } from "react";
import instagramLogo from "../../assets/home/instagramLogo.png";
import youtubeLogo from "../../assets/home/youtubeLogo.png";
import twitterLogo from "../../assets/home/twitterLogo.png";
import { BsSearch } from "react-icons/bs";
import analyticsbg from "../../assets/home/analyticsbg.png";
import Instagram from "./Instagram";
import Youtube from "./Youtube";
import Twitter from "./Twitter";
import useAnalytics from "../../store/useAnalytics";

const Analytics = () => {
  const currentState = useAnalytics();

  const { username, updateUsername, search } = useMemo(() => {
    if (currentState.selected === "Instagram") {
      return {
        username: currentState.instagramUsername,
        updateUsername: currentState.updateInstagramUsername,
        search: currentState.instagramSearch,
      };
    }
    if (currentState.selected === "Youtube") {
      return {
        username: currentState.youtubeUsername,
        updateUsername: currentState.updateYoutubeUsername,
        search: currentState.youtubeSearch,
      };
    }
    return {
      username: currentState.twitterUsername,
      updateUsername: currentState.updateTwitterUsername,
      search: currentState.twitterSearch,
    };
  }, [currentState]);

  return (
    <div>
      <div className="mx-auto pb-20">
        <p className="font-semibold text-xl md:text-2xl">Analyze Influencers</p>
        <div className="grid grid-cols-1 md:grid-cols-3 my-14 rounded-md overflow-hidden font-medium">
          <div
            className={`select-none flex items-center md:justify-center gap-2 pl-3 pb-2 pt-3 ${
              currentState.selected === "Instagram"
                ? "text-white bg-black rounded-md"
                : "text-gray-500 bg-[#F3F3F3] cursor-pointer"
            }`}
            onClick={() =>
              currentState.selected !== "Instagram" && currentState.updateSelected("Instagram")
            }
          >
            <img src={instagramLogo} alt="" className="max-w-[35px]" />
            <p>Instagram</p>
          </div>
          <div
            className={`select-none flex items-center md:justify-center gap-2 pl-3 pb-2 pt-3 ${
              currentState.selected === "Youtube"
                ? "text-white bg-black rounded-md"
                : "text-gray-500 bg-[#F3F3F3] cursor-pointer"
            }`}
            onClick={() =>
              currentState.selected !== "Youtube" && currentState.updateSelected("Youtube")
            }
          >
            <img src={youtubeLogo} alt="" className="max-w-[35px]" />
            <p>Youtube</p>
          </div>
          <div
            className={`select-none flex items-center md:justify-center gap-2 pl-3 pb-2 pt-3 ${
              currentState.selected === "Twitter"
                ? "text-white bg-black rounded-md"
                : "text-gray-500 bg-[#F3F3F3] cursor-pointer"
            }`}
            onClick={() =>
              currentState.selected !== "Twitter" && currentState.updateSelected("Twitter")
            }
          >
            <img src={twitterLogo} alt="" className="max-w-[35px]" />
            <p>Twitter</p>
          </div>
        </div>
        <form className="grid grid-cols-12 gap-3" onSubmit={search}>
          <div className="col-span-8 md:col-span-9 border rounded-md border-black flex items-center justify-start pl-3 gap-2 overflow-hidden">
            <BsSearch />
            <input
              disabled={currentState.loading}
              value={username}
              onChange={(e) => updateUsername(e.target.value)}
              required
              placeholder="Type username"
              type="text"
              className="w-full py-2 md:py-3 outline-none"
            />
          </div>
          <button
            disabled={currentState.loading}
            type="submit"
            className="col-span-4 md:col-span-3 bg-black text-white rounded-md font-medium"
          >
            Analyze
          </button>
        </form>
      </div>
      {currentState.loading ? (
        <div className="w-7 aspect-square rounded-full border-[5px] border-black border-b-gray-400 animate-spin mx-auto" />
      ) : (
        <div>
          {currentState.selected === "Instagram" && <Instagram />}
          {currentState.selected === "Youtube" && <Youtube />}
          {currentState.selected === "Twitter" && <Twitter />}
        </div>
      )}
      <div className="mt-20">
        <img src={analyticsbg} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Analytics;
