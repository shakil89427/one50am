import moment from "moment/moment";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import stories from "../constants/storiesData";

const StoryDetails = () => {
  const { storyId } = useParams();
  const story = useMemo(() => {
    return stories.find((item) => item.storyId === storyId);
  }, [storyId]);

  return (
    <div className="pl-3 md:pl-6 lg:pl-9 xl:pl-12 grow h-full overflow-y-auto scroller pb-20">
      <div className="w-full max-w-[900px] mx-auto">
        <div
          style={{ lineHeight: "200%" }}
          className="flex flex-col gap-14 text-lg text-gray-600"
        >
          <div className="font-medium text-sm">
            <p className="text-black">
              {Math.floor(story.readTime / 60)} min read
            </p>
            <p>{moment(story.creationDate).format("MMM DD YYYY")}</p>
          </div>
          <h1
            style={{ lineHeight: "150%" }}
            className="text-xl lg:text-2xl xl:text-4xl font-bold text-black"
          >
            {story.title}
          </h1>

          {story.content?.map((item, index) => (
            <div key={index}>
              {item?.type === "image" && (
                <img
                  src={`${new URL(import.meta.url).origin}/stories/${
                    item.imgUrl
                  }`}
                  alt=""
                  className="w-full aspect-[11/7] md:aspect-[11/5] object-cover object-center rounded-lg"
                />
              )}
              {item.type === "heading" && (
                <p className="text-xl font-semibold text-black">{item.title}</p>
              )}
              {item.type === "text" && (
                <p
                  style={{ lineHeight: "200%" }}
                  className="text-lg md:text-xl"
                >
                  {item.title}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
