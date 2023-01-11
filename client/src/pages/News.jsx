import moment from "moment";
import { useState } from "react";
import NewsCard from "../components/NewsCard";
import newses from "../constants/newsData";

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="pl-3 md:pl-6 lg:pl-9 xl:pl-12 grow h-full overflow-y-auto scroller pb-20">
      {selectedNews && (
        <NewsCard
          selectedNews={selectedNews}
          setSelectedNews={setSelectedNews}
        />
      )}
      <p className="font-semibold text-lg md:text-xl xl:text-2xl">News</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 mt-5">
        {newses.map((news) => (
          <div
            key={news.newsId}
            className="relative pb-7 cursor-pointer"
            onClick={() => setSelectedNews(news)}
          >
            <img
              src={`${new URL(import.meta.url).origin}/news/${news.newsId}.png`}
              alt=""
              className="object-cover object-center rounded-xl w-full aspect-[16/12]"
            />
            <p className="font-semibold line-clamp-3 mt-3">{news.title}</p>
            <p className="font-light line-clamp-3 mt-3">{news.description}</p>
            <div className="absolute bottom-0 left-0 text-xs text-gray-500 flex items-center justify-between w-full">
              <p>{moment(news.creationDate).fromNow()}</p>
              <p>{Math.floor(news.readTime / 60)} min read</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
