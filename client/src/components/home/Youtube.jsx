import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import moment from "moment";
import millify from "millify";
import redArrow from "../../assets/redArrow.png";
import greenArrow from "../../assets/greenArrow.png";
import useAnalytics from "../../store/useAnalytics";

const Youtube = () => {
  const youtubeData = useAnalytics((state) => state.youtubeData);
  const [info, setInfo] = useState({
    subscribers: parseInt(youtubeData?.statistics?.subscriberCount || 0),
    avgViews: 0,
    videosPerWeek: 0,
    avgComments: 0,
    avgEngRate: 0,
    socialScore: 0,
  });
  const [posts, setPosts] = useState([]);

  const like = (avgLikes, { statistics }) => {
    const likeCount = parseInt(statistics?.likeCount || 0);
    let likes = likeCount > avgLikes ? likeCount - avgLikes : avgLikes - likeCount;
    const likeStatus = likeCount > avgLikes ? true : false;
    if (avgLikes > 0) {
      likes = (likes / avgLikes) * 100;
    }
    if (likes > 100) {
      likes = 100;
    }
    return { likes, likeStatus };
  };

  const comment = (avgComments, { statistics }) => {
    const commentCount = parseInt(statistics?.commentCount || 0);
    let comments =
      commentCount > avgComments ? commentCount - avgComments : avgComments - commentCount;
    const commentStatus = commentCount > avgComments ? true : false;
    if (avgComments > 0) {
      comments = (comments / avgComments) * 100;
    }
    if (comments > 100) {
      comments = 100;
    }
    return { comments, commentStatus };
  };

  const eng = (avgEngRate, { statistics }) => {
    const likeCount = parseInt(statistics?.likeCount || 0);
    const subscriber = parseInt(youtubeData?.statistics?.subscriberCount || 0);
    const engRate = subscriber > 0 ? (likeCount / subscriber) * 100 : 0;
    let engPercent = engRate > avgEngRate ? engRate - avgEngRate : avgEngRate - engRate;
    let engStatus = engRate > avgEngRate ? true : false;
    if (avgEngRate > 0) {
      engPercent = (engPercent / avgEngRate) * 100;
    }
    if (engPercent > 100) {
      engPercent = 100;
    }
    return { engRate, engStatus, engPercent };
  };

  const calculatePostData = (avgLikes, avgComments, avgEngRate) => {
    const data = youtubeData.videos.map((video) => {
      const { likes, likeStatus } = like(avgLikes, video);
      const { comments, commentStatus } = comment(avgComments, video);
      const { engRate, engStatus, engPercent } = eng(avgEngRate, video);
      return {
        ...video,
        likes,
        likeStatus,
        comments,
        commentStatus,
        engRate,
        engStatus,
        engPercent,
      };
    });
    setPosts(data);
  };

  const calculateInfo = () => {
    const subscribers = parseInt(youtubeData?.statistics?.subscriberCount || 0);
    const videosLength = youtubeData.videos.length;
    const { allViews, allLikes, allComments, allDates } = youtubeData.videos.reduce(
      (prev, current) => ({
        allViews: prev.allViews + parseInt(current?.statistics?.viewCount || 0),
        allLikes: prev.allLikes + parseInt(current?.statistics?.likeCount || 0),
        allComments: prev.allComments + parseInt(current?.statistics?.commentCount || 0),
        allDates: [...prev.allDates, current?.snippet?.publishedAt],
      }),
      { allViews: 0, allLikes: 0, allComments: 0, allDates: [] }
    );
    const avgViews = allViews / videosLength;
    const avgLikes = Math.floor(allLikes / videosLength);
    const avgComments = allComments / videosLength;
    let avgEngRate = avgViews / subscribers / 100;
    let socialScore = Math.ceil(avgEngRate);
    if (avgEngRate === Infinity) {
      avgEngRate = 0;
      socialScore = 0;
    }
    if (avgEngRate > 100) {
      avgEngRate = 100;
      socialScore = 100;
    }
    if (videosLength === 1) {
      setInfo({
        ...info,
        avgViews,
        avgComments,
        avgEngRate,
        socialScore,
        videosPerWeek: 1,
      });
      return calculatePostData(avgLikes, avgComments, avgEngRate);
    }
    const a = allDates[0];
    const b = allDates[allDates?.length - 1];
    const timeFrame = moment(a).diff(moment(b), "days");
    let videosPerWeek = Math.round((videosLength * 7) / timeFrame);
    if (videosPerWeek > videosLength) {
      videosPerWeek = videosLength;
    }
    setInfo({
      ...info,
      avgViews,
      avgComments,
      avgEngRate,
      socialScore,
      videosPerWeek,
    });
    calculatePostData(avgLikes, avgComments, avgEngRate);
  };

  useEffect(() => {
    if (youtubeData?.videos?.length > 0) calculateInfo();
  }, [youtubeData]);

  if (!youtubeData) return null;

  if (youtubeData === "not_found") {
    return <p className="text-center text-gray-500">No user found</p>;
  }

  return (
    <div>
      <div className="flex items-start justify-start gap-2">
        <img
          src={youtubeData?.snippet?.thumbnails?.medium?.url}
          alt=""
          className="aspect-square w-20 object-cover object-center rounded-full border shrink-0"
        />
        <div className="mt-1">
          <p className="font-semibold text-lg">{youtubeData?.snippet?.title}</p>
          <p className="text-sm text-gray-500">{youtubeData?.snippet?.title}</p>
          <p className="mt-2">{youtubeData?.snippet?.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mt-12 max-w-[1000px] mx-auto">
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{millify(info?.subscribers || 0)}</p>
          <p className="text-xs text-center">Subscribers</p>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{millify(info?.avgViews || 0)}</p>
          <p className="text-xs text-center">Avg/Views</p>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{millify(info?.avgComments || 0)}</p>
          <p className="text-xs text-center">Avg/Comments</p>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{millify(info?.videosPerWeek || 0)}</p>
          <p className="text-xs text-center">Videos/Week</p>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{info.avgEngRate.toFixed(2)}%</p>
          <p className="text-xs text-center">Engagement rate</p>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{info?.socialScore}</p>
          <p className="text-xs text-center">Social Score</p>
        </div>
      </div>
      <p className="text-lg md:text-xl font-semibold mt-12">Latest Posts</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
        {posts?.map((video) => (
          <div key={video.id} className="rounded-xl overflow-hidden border">
            <img
              src={
                video?.snippet?.thumbnails?.maxres?.url ||
                video?.snippet?.thumbnails?.standard?.url ||
                video?.snippet?.thumbnails?.high?.url ||
                video?.snippet?.thumbnails?.medium?.url ||
                video?.snippet?.thumbnails?.default?.url
              }
              alt=""
              className="w-full aspect-square"
            />
            <div className="px-2 py-5 flex items-center justify-between gap-2 text-xs flex-wrap">
              <div>
                <div className="flex items-center mb-1">
                  <p className="text-black font-semibold">
                    {millify(parseInt(video?.statistics?.likeCount || 0))}
                  </p>
                  <img
                    src={video?.likeStatus ? greenArrow : redArrow}
                    alt=""
                    className="w-4 mx-1"
                  />
                  <p>{video?.likes?.toFixed(2)}%</p>
                </div>
                <p>Like</p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <p className="text-black font-semibold">
                    {millify(parseInt(video?.statistics?.commentCount || 0))}
                  </p>
                  <img
                    src={video?.commentStatus ? greenArrow : redArrow}
                    alt=""
                    className="w-4 mx-1"
                  />
                  <p>{video?.comments?.toFixed(2)}%</p>
                </div>
                <p>Comment</p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <p className="text-black font-semibold">
                    {video?.engRate > 100 ? "100" : video?.engRate?.toFixed(2)}
                  </p>
                  <img src={video?.engStatus ? greenArrow : redArrow} alt="" className="w-4 mx-1" />
                  <p>{video?.engPercent?.toFixed(2)}%</p>
                </div>
                <p>Engagement</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Youtube;
