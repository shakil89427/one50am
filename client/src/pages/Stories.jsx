import moment from "moment";
import { useNavigate } from "react-router-dom";
import stories from "../constants/storiesData";

const Stories = () => {
  const navigate = useNavigate();

  return (
    <div className="pl-3 md:pl-6 lg:pl-9 xl:pl-12 grow h-full overflow-y-auto scroller pb-20">
      <p className="font-semibold text-lg md:text-xl xl:text-2xl">Stories</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-5">
        {stories.map((story) => (
          <div
            onClick={() => navigate(`/stories/${story.storyId}`)}
            key={story.storyId}
            className="relative pb-7 cursor-pointer"
          >
            <img
              src={`${new URL(import.meta.url).origin}/storiesassets/${
                story.storyId
              }1.png`}
              alt=""
              className="object-cover object-center rounded-xl w-full aspect-[16/12]"
            />
            <p className="font-semibold line-clamp-3 mt-3">{story.title}</p>
            <p className="font-light line-clamp-3 mt-3">
              {story.content.find((item) => item.type === "text").title}
            </p>
            <div className="absolute bottom-0 left-0 text-xs text-gray-500 flex items-center justify-between w-full">
              <p>{moment(story.creationDate).fromNow()}</p>
              <p>{Math.floor(story.readTime / 60)} min read</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
