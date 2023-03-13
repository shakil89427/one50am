import millify from "millify";
import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";
import redArrow from "../../assets/redArrow.png";
import greenArrow from "../../assets/greenArrow.png";
import useAnalytics from "../../store/useAnalytics";

const Twitter = () => {
  const twitterData = useAnalytics((state) => state.twitterData);
  const [info, setInfo] = useState({
    followers: twitterData?.public_metrics?.followers_count || 0,
    avgLikes: 0,
    avgComments: 0,
    postsPerWeek: 0,
    avgEngRate: 0,
    socialScore: 0,
  });
  const [posts, setPosts] = useState([]);

  const like = (avgLikes, { public_metrics: { like_count } }) => {
    let likes = like_count > avgLikes ? like_count - avgLikes : avgLikes - like_count;
    const likeStatus = like_count > avgLikes ? true : false;
    if (avgLikes > 0) {
      likes = (likes / avgLikes) * 100;
    }
    if (likes > 100) {
      likes = 100;
    }
    return { likes, likeStatus };
  };

  const comment = (avgComments, { public_metrics: { retweet_count } }) => {
    let comments =
      retweet_count > avgComments ? retweet_count - avgComments : avgComments - retweet_count;
    const commentStatus = retweet_count > avgComments ? true : false;
    if (avgComments > 0) {
      comments = (comments / avgComments) * 100;
    }
    if (comments > 100) {
      comments = 100;
    }
    return { comments, commentStatus };
  };

  const eng = (avgEngRate, { public_metrics: { like_count } }) => {
    const followers = twitterData?.public_metrics?.followers_count || 0;
    let engRate = followers > 0 ? (like_count / followers) * 100 : 0;
    const engStatus = engRate > avgEngRate ? true : false;
    let engPercent = engRate > avgEngRate ? engRate - avgEngRate : avgEngRate - engRate;
    if (avgEngRate > 0) {
      engPercent = (engPercent / avgEngRate) * 100;
    }
    if (engPercent > 100) {
      engPercent = 100;
    }
    return { engRate, engStatus, engPercent };
  };

  const calculatePostData = (avgLikes, avgComments, avgEngRate) => {
    const data = twitterData.tweets.map((tweet) => {
      const { likes, likeStatus } = like(avgLikes, tweet);
      const { comments, commentStatus } = comment(avgComments, tweet);
      const { engRate, engStatus, engPercent } = eng(avgEngRate, tweet);
      return {
        ...tweet,
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
    const postsLength = twitterData.tweets.length;
    const { allLikes, allComments, allDates } = twitterData.tweets.reduce(
      (prev, current) => ({
        allLikes: prev.allLikes + current.public_metrics.like_count,
        allComments: prev.allComments + current.public_metrics.retweet_count,
        allDates: [...prev.allDates, current.created_at],
      }),
      { allLikes: 0, allComments: 0, allDates: [] }
    );
    const avgLikes = allLikes / postsLength;
    const avgComments = Math.floor(allComments / postsLength);
    let avgEngRate = allComments / postsLength / 100;
    let socialScore = Math.ceil(avgEngRate);
    if (avgEngRate === Infinity) {
      avgEngRate = 0;
      socialScore = 0;
    }
    if (avgEngRate > 100) {
      avgEngRate = 100;
      socialScore = 100;
    }
    if (postsLength === 1) {
      setInfo({
        ...info,
        avgLikes,
        avgComments,
        avgEngRate,
        socialScore,
        postsPerWeek: 1,
      });
      return calculatePostData(avgLikes, avgComments, avgEngRate);
    }
    const a = allDates[0];
    const b = allDates[allDates?.length - 1];
    const timeFrame = moment(a).diff(moment(b), "days");
    let postsPerWeek = Math.round((postsLength * 7) / timeFrame);
    if (postsPerWeek > postsLength) {
      postsPerWeek = postsLength;
    }
    setInfo({
      ...info,
      avgLikes,
      avgComments,
      avgEngRate,
      socialScore,
      postsPerWeek,
    });
    calculatePostData(avgLikes, avgComments, avgEngRate);
  };
  useEffect(() => {
    if (twitterData?.tweets?.length > 0) calculateInfo();
  }, [twitterData]);

  if (!twitterData) return null;

  if (twitterData === "not_found") {
    return <p className="text-center text-gray-500">No user found</p>;
  }

  return (
    <div>
      <div className="flex items-start justify-start gap-2">
        <img
          src={twitterData?.profile_image_url}
          alt=""
          className="aspect-square w-20 object-cover object-center rounded-full border shrink-0"
        />
        <div className="mt-1">
          <p className="font-semibold text-lg">{twitterData?.name}</p>
          <p className="text-sm text-gray-500">{twitterData?.username}</p>
          <p className="mt-2">{twitterData?.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mt-12 max-w-[1000px] mx-auto">
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{millify(info.followers || 0)}</p>
          <p className="text-xs text-center">Followers</p>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{millify(Math.floor(info.avgLikes || 0))}</p>
          <p className="text-xs text-center">Likes/Post</p>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{millify(info.avgComments || 0)}</p>
          <p className="text-xs text-center">Comments/Post</p>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{millify(info.postsPerWeek || 0)}</p>
          <p className="text-xs text-center">Posts/Week</p>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{info.avgEngRate.toFixed(2)}%</p>
          <p className="text-xs text-center">Engagement rate</p>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{info.socialScore}</p>
          <p className="text-xs text-center">Social Score</p>
        </div>
      </div>
      <p className="text-lg md:text-xl font-semibold mt-12">Latest Posts</p>
      {posts.map((tweet) => (
        <div
          key={tweet.id}
          className="mt-5 lg:max-w-[500px] shadow border rounded-xl overflow-hidden"
        >
          {tweet?.attachments?.media_keys?.length > 0 &&
            twitterData?.media?.map(
              (item, index) =>
                item?.media_key === tweet?.attachments?.media_keys[0] && (
                  <img key={index} src={item.url} className="w-full" alt="" />
                )
            )}
          {tweet?.text && <p className="p-5">{tweet?.text}</p>}
          <div className="p-5 flex items-center justify-between gap-2 text-xs">
            <div>
              <div className="flex items-center mb-1">
                <p className="text-black font-semibold">
                  {millify(tweet?.public_metrics?.like_count || 0)}
                </p>
                <img src={tweet?.likeStatus ? greenArrow : redArrow} alt="" className="w-4 mx-1" />
                <p>{tweet?.likes?.toFixed(2)}%</p>
              </div>
              <p>Like</p>
            </div>
            <div>
              <div className="flex items-center mb-1">
                <p className="text-black font-semibold">
                  {millify(tweet?.public_metrics?.retweet_count || 0)}
                </p>
                <img
                  src={tweet?.commentStatus ? greenArrow : redArrow}
                  alt=""
                  className="w-4 mx-1"
                />
                <p>{tweet?.comments?.toFixed(2)}%</p>
              </div>
              <p>Comment</p>
            </div>
            <div>
              <div className="flex items-center mb-1">
                <p className="text-black font-semibold">
                  {tweet.engRate > 100 ? "100" : tweet?.engRate?.toFixed(2)}
                </p>
                <img src={tweet?.engStatus ? greenArrow : redArrow} alt="" className="w-4 mx-1" />
                <p>{tweet?.engPercent?.toFixed(2)}%</p>
              </div>
              <p>Engagement rate</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Twitter;
