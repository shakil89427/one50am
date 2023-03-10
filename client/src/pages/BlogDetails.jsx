import moment from "moment/moment";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import blogs from "../constants/blogsData";

const BlogDetails = () => {
  const { blogId } = useParams();
  const blog = useMemo(() => {
    return blogs.find((item) => item.blogId === blogId);
  }, [blogId]);

  useEffect(() => {
    if (!blog?.title) return;
    const script = document.createElement("script");
    script.id = "AV63dccb61526527b3d9037af6";
    script.type = "text/javascript";
    script.src =
      "https://tg1.ergadx.com/api/adserver/spt?AV_TAGID=63dccb61526527b3d9037af6&AV_PUBLISHERID=5fd9c7d93f2f4c6ef13a1ec7";
    script.onload = () => {
      const parent = document.getElementById("addiv");
      const element = document.querySelector(".AV63dccb61526527b3d9037af6");
      if (parent && element) {
        parent.appendChild(element);
      }
      if (!parent && element) {
        element.remove();
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [blog]);

  if (!blog) {
    return <p className="text-center mt-10 grow">Not found</p>;
  }

  return (
    <div className="pl-3 md:pl-6 lg:pl-9 xl:pl-12 grow h-full overflow-y-auto scroller pb-20">
      <div className="w-full max-w-[900px] mx-auto">
        <div style={{ lineHeight: "200%" }} className="flex flex-col gap-14 text-lg text-gray-600">
          <div className="font-medium text-sm">
            <p className="text-black">{Math.floor(blog.readTime / 60)} min read</p>
            <p>{moment(blog.creationDate).format("MMM DD YYYY")}</p>
          </div>
          <h1
            style={{ lineHeight: "150%" }}
            className="text-xl lg:text-2xl xl:text-4xl font-bold text-black"
          >
            {blog.title}
          </h1>
          <div id="addiv" className=""></div>
          {blog.content.map((item, index) => (
            <div key={index}>
              {item?.type === "image" && (
                <img
                  src={`${new URL(import.meta.url).origin}/blogsassets/${item.imgUrl}`}
                  alt=""
                  className="w-full aspect-[11/7] md:aspect-[11/5] object-cover object-center rounded-lg"
                />
              )}
              {item.type === "heading" && (
                <p className="text-xl font-semibold text-black">{item.title}</p>
              )}
              {item.type === "text" && (
                <p style={{ lineHeight: "200%" }} className="text-lg md:text-xl">
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

export default BlogDetails;
