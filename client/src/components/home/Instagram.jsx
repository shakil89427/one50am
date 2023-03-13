import millify from "millify";
import { useEffect, useState } from "react";
import redArrow from "../../assets/redArrow.png";
import greenArrow from "../../assets/greenArrow.png";
import moment from "moment";

const Instagram = ({ instagramData }) => {
  const [posts, setPosts] = useState([]);
  const [info, setInfo] = useState({
    followers: instagramData?.edge_followed_by?.count || 0,
    avgLikes: 0,
    avgComments: 0,
    postsPerWeek: 0,
    avgEngRate: 0,
    socialScore: 0,
  });

  const like = (avgLikes, { edge_liked_by: { count } }) => {
    let likes = count > avgLikes ? count - avgLikes : avgLikes - count;
    const likeStatus = count > avgLikes ? true : false;
    if (avgLikes > 0) {
      likes = (likes / avgLikes) * 100;
    }
    if (likes > 100) {
      likes = 100;
    }
    return { likes, likeStatus };
  };

  const comment = (avgComments, { edge_media_to_comment: { count } }) => {
    let comments = count > avgComments ? count - avgComments : avgComments - count;
    const commentStatus = count > avgComments ? true : false;
    if (avgComments > 0) {
      comments = (comments / avgComments) * 100;
    }
    if (comments > 100) {
      comments = 100;
    }
    return { comments, commentStatus };
  };

  const eng = (avgEngRate, { edge_liked_by: { count } }) => {
    const followers = instagramData?.edge_followed_by?.count || 0;
    let engRate = followers > 0 ? (count / followers) * 100 : 0;
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
    const data = instagramData.edge_owner_to_timeline_media.edges.map(({ node }) => {
      const { likes, likeStatus } = like(avgLikes, node);
      const { comments, commentStatus } = comment(avgComments, node);
      const { engRate, engStatus, engPercent } = eng(avgEngRate, node);
      return {
        ...node,
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
    const postsLength = instagramData.edge_owner_to_timeline_media.edges.length;
    const { allLikes, allComments, allDates } =
      instagramData?.edge_owner_to_timeline_media?.edges?.reduce(
        (prev, current) => ({
          allLikes: prev.allLikes + current.node.edge_liked_by.count,
          allComments: prev.allComments + current.node.edge_media_to_comment.count,
          allDates: [...prev.allDates, current.node.taken_at_timestamp],
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
    if (instagramData?.edge_owner_to_timeline_media?.edges?.length > 0) calculateInfo();
  }, [instagramData]);

  if (!instagramData) return null;
  if (instagramData === "not_found") {
    return <p className="text-center text-gray-500">No user found</p>;
  }
  return (
    <div>
      <div className="flex items-center justify-start gap-2">
        <img
          src={`data:image/png;base64, ${instagramData?.images?.profileImage}`}
          alt=""
          className="aspect-square w-20 object-cover object-center rounded-full border shrink-0"
        />
        <div className="mt-1">
          <p className="font-semibold text-lg">{instagramData?.full_name}</p>
          <p className="text-sm text-gray-500">{instagramData?.username}</p>
          <p className="mt-2">{instagramData?.biography}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mt-12 max-w-[1000px] mx-auto">
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{millify(info?.followers)}</p>
          <p className="text-xs text-center">Followers</p>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{millify(info?.avgLikes)}</p>
          <p className="text-xs text-center">Likes/Post</p>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{millify(info?.avgComments)}</p>
          <p className="text-xs text-center">Comments/Post</p>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{millify(info?.postsPerWeek)}</p>
          <p className="text-xs text-center">Posts/Week</p>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{info?.avgEngRate.toFixed(2)}%</p>
          <p className="text-xs text-center">Engagement rate</p>
        </div>
        <div className="bg-white aspect-square flex flex-col items-center justify-center rounded-full shadow-md border">
          <p className="text-xl font-semibold">{info.socialScore}</p>
          <p className="text-xs text-center">Social Score</p>
        </div>
      </div>
      <p className="text-lg md:text-xl font-semibold mt-12">Latest Posts</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
        {posts.map((post) => (
          <div key={post.id} className="rounded-xl overflow-hidden border">
            <img
              src={`data:image/png;base64, ${instagramData?.images[post.id]}`}
              alt=""
              className="w-full aspect-square"
            />
            <div className="px-2 py-5 flex items-center justify-between gap-2 text-xs flex-wrap">
              <div>
                <div className="flex items-center mb-1">
                  <p className="text-black font-semibold">
                    {millify(post.edge_liked_by?.count || 0)}
                  </p>
                  <img src={post?.likeStatus ? greenArrow : redArrow} alt="" className="w-4 mx-1" />
                  <p>{post?.likes?.toFixed(2)}%</p>
                </div>
                <p>Like</p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <p className="text-black font-semibold">
                    {millify(post.edge_media_to_comment?.count || 0)}
                  </p>
                  <img
                    src={post?.commentStatus ? greenArrow : redArrow}
                    alt=""
                    className="w-4 mx-1"
                  />
                  <p>{post?.comments?.toFixed(2)}%</p>
                </div>
                <p>Comment</p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <p className="text-black font-semibold">100</p>
                  <img src={post?.engStatus ? greenArrow : redArrow} alt="" className="w-4 mx-1" />
                  <p>{post?.engPercent?.toFixed(2)}%</p>
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

export default Instagram;
