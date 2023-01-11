import cross from "../assets/cross.svg";

const NewsCard = ({ selectedNews, setSelectedNews }) => {
  return (
    <div className="fixed inset-0 top-0 left-0 bg-[#030303f6] z-30 flex items-center justify-center select-none">
      <img
        onClick={() => setSelectedNews(null)}
        className="bg-[#ffffff86] absolute top-3 right-3 lg:top-8 lg:right-8 w-5 md:w-7 lg:w-9 rounded-full cursor-pointer hover:bg-white"
        src={cross}
        alt=""
      />
      <div className="w-[95%] max-w-[400px] h-[70vh] bg-white rounded-lg overflow-hidden flex flex-col items-start justify-start">
        <div className="shrink-0">
          <img
            src={`${new URL(import.meta.url).origin}/newsassets/${
              selectedNews.newsId
            }.png`}
            alt=""
            className="object-cover object-center w-full aspect-[7/4]"
          />
          <p className="font-semibold mt-2 text-lg px-2">
            {selectedNews.title}
          </p>
        </div>
        <p
          style={{ lineHeight: "200%" }}
          className="mt-2 mb-3 text-sm px-3 grow overflow-y-auto scroller"
        >
          {selectedNews.description}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
