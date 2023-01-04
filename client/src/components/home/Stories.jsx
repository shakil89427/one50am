import { useNavigate } from "react-router-dom";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
        {new Array(4).fill("").map((item, index) => (
          <div key={index} className="grid grid-cols-1 xl:grid-cols-2 gap-3">
            <img
              src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
              alt=""
              className="object-cover object-center rounded-lg w-full h-full"
            />
            <div className="">
              <p className="font-semibold line-clamp-3">
                New Market Strategy for Influencer Is becoming best before
                Influencers Worth it?
              </p>
              <p className="font-light my-2 line-clamp-3">
                New Market Strategy for Influencer Is becoming best before
                Influencers Worth it?
              </p>
              <p className="text-[#2D2D2D]">Dec 2,2021</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
