const Blogs = () => {
  return (
    <div className="pl-3 md:pl-6 lg:pl-9 xl:pl-12 grow h-full overflow-y-auto scroller">
      <p className="font-semibold text-lg md:text-xl xl:text-2xl">Blogs</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 mt-5">
        {new Array(20).fill("").map((item, index) => (
          <div key={index}>
            <img
              src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
              alt=""
              className="object-cover object-center rounded-lg w-full aspect-[16/9]"
            />
            <p className="font-semibold line-clamp-3 mt-2">
              New Market Strategy for Influencer Is becoming best before
              Influencers Worth it?
            </p>
            <p className="font-light my-2 line-clamp-3">
              New Market Strategy for Influencer Is becoming best before
              Influencers Worth it?
            </p>
            <p className="text-[#2D2D2D]">Dec 2,2021</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
