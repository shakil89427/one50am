import moment from "moment";
import { useNavigate } from "react-router-dom";
import stories from "../../constants/storiesData";

const Stories = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg md:text-xl xl:text-2xl">
          Stories
        </h1>
        <span
          onClick={() => navigate("/stories")}
          className="cursor-pointer font-medium text-sm md:text-md"
        >
          View all
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 mt-5">
        {stories.slice(0, 4).map((story) => (
          <div
            onClick={() => navigate(`/storydetails/${story.storyId}`)}
            key={story.storyId}
            className="grid grid-cols-1 xl:grid-cols-2 gap-3 cursor-pointer"
          >
            <img
              src={`${new URL(import.meta.url).origin}/stories/${
                story.storyId
              }1.png`}
              alt=""
              className="object-cover object-center rounded-lg w-full h-full aspect-[5/3] sm:aspect-[5/4] xl:aspect-auto"
            />
            <div>
              <p className="font-semibold line-clamp-2">{story.title}</p>
              <p className="font-light my-3 line-clamp-3">
                {story.content.find((item) => item.type === "text").title}
              </p>
              <p className="text-[#2D2D2D] text-xs">
                {moment(story.creationDate).fromNow()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
