import React, { useEffect, useState } from "react";
import instagramLogo from "../../assets/home/instagramLogo.png";
import youtubeLogo from "../../assets/home/youtubeLogo.png";
import twitterLogo from "../../assets/home/twitterLogo.png";
import { BsSearch } from "react-icons/bs";
import analyticsbg from "../../assets/home/analyticsbg.png";

const Analytics = () => {
  const [selected, setSelected] = useState("Instagram");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;
    const reset = setTimeout(() => setLoading(false), 300000);
    return () => clearTimeout(reset);
  }, [loading]);

  return (
    <div className="w-full">
      <div className="pb-20">
        <p className="font-semibold text-xl md:text-2xl">Analyze Influencers</p>
        <div className="grid grid-cols-1 md:grid-cols-3 my-14 rounded-md overflow-hidden font-medium">
          <div
            className={`select-none flex items-center md:justify-center gap-2 pl-3 pb-2 pt-3 ${
              selected === "Instagram"
                ? "text-white bg-black rounded-md"
                : "text-gray-500 bg-[#F3F3F3] cursor-pointer"
            }`}
            onClick={() => selected !== "Instagram" && setSelected("Instagram")}
          >
            <img src={instagramLogo} alt="" className="max-w-[35px]" />
            <p>Instagram</p>
          </div>
          <div
            className={`select-none flex items-center md:justify-center gap-2 pl-3 pb-2 pt-3 ${
              selected === "Youtube"
                ? "text-white bg-black rounded-md"
                : "text-gray-500 bg-[#F3F3F3] cursor-pointer"
            }`}
            onClick={() => selected !== "Youtube" && setSelected("Youtube")}
          >
            <img src={youtubeLogo} alt="" className="max-w-[35px]" />
            <p>Youtube</p>
          </div>
          <div
            className={`select-none flex items-center md:justify-center gap-2 pl-3 pb-2 pt-3 ${
              selected === "Twitter"
                ? "text-white bg-black rounded-md"
                : "text-gray-500 bg-[#F3F3F3] cursor-pointer"
            }`}
            onClick={() => selected !== "Twitter" && setSelected("Twitter")}
          >
            <img src={twitterLogo} alt="" className="max-w-[35px]" />
            <p>Twitter</p>
          </div>
        </div>
        <form
          className="grid grid-cols-12 gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
          }}
        >
          <div className="col-span-8 md:col-span-9 border rounded-md border-black flex items-center justify-start pl-3 gap-2 overflow-hidden">
            <BsSearch />
            <input
              disabled={loading}
              required
              placeholder="Type username"
              type="text"
              className="w-full py-2 md:py-3 outline-none"
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="col-span-4 md:col-span-3 bg-black text-white rounded-md font-medium flex items-center justify-center"
          >
            {loading ? (
              <span className="w-6 aspect-square rounded-full border-4 border-white border-b-gray-500 animate-spin" />
            ) : (
              <span>Analyze</span>
            )}
          </button>
        </form>
      </div>
      <div className="mt-20">
        <img src={analyticsbg} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Analytics;
