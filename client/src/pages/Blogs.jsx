import moment from "moment";
import { useNavigate } from "react-router-dom";
import blogs from "../constants/blogsData";

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div className="pl-3 md:pl-6 lg:pl-9 xl:pl-12 grow h-full overflow-y-auto scroller pb-20">
      <p className="font-semibold text-lg md:text-xl xl:text-2xl">Blogs</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 mt-5">
        {blogs.map((blog) => (
          <div
            onClick={() => navigate(`/blogdetails/${blog.blogId}`)}
            key={blog.blogId}
            className="relative pb-7 cursor-pointer"
          >
            <img
              src={`${new URL(import.meta.url).origin}/blogs/${
                blog.blogId
              }1.png`}
              alt=""
              className="object-cover object-center rounded-xl w-full aspect-[16/12]"
            />
            <p className="font-semibold line-clamp-3 mt-3">{blog.title}</p>
            <p className="font-light line-clamp-3 mt-3">
              {blog.content.find((item) => item.type === "text").title}
            </p>
            <p className="text-[#2D2D2D] text-xs absolute bottom-0 left-0">
              {moment(blog.creationDate).fromNow()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
