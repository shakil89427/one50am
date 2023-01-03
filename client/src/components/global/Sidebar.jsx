import home from "../../assets/sidebar/home.png";
import homeactive from "../../assets/sidebar/homeactive.png";
import news from "../../assets/sidebar/news.png";
import newsactive from "../../assets/sidebar/newsactive.png";
import stories from "../../assets/sidebar/stories.png";
import storiesactive from "../../assets/sidebar/storiesactive.png";
import blogs from "../../assets/sidebar/blogs.png";
import blogsactive from "../../assets/sidebar/blogsactive.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const routes = useMemo(() => {
    return [
      {
        title: "Home",
        path: "/",
        active: homeactive,
        inactive: home,
      },
      {
        title: "News",
        path: "/news",
        active: newsactive,
        inactive: news,
      },
      {
        title: "Stories",
        path: "/stories",
        active: storiesactive,
        inactive: stories,
      },
      {
        title: "Blogs",
        path: "/blogs",
        active: blogsactive,
        inactive: blogs,
      },
    ];
  }, []);

  return (
    <div className="pr-2 md:pr-5 w-[50px] lg:w-[200px] shrink-0 border-r h-full overflow-y-auto scroller">
      <div className="w-full flex flex-col items-start gap-8">
        {routes.map((route) => (
          <div
            onClick={() => navigate(route.path)}
            className="flex items-center gap-8 relative cursor-pointer h-8 pl-2"
          >
            {pathname === route.path && (
              <span className="absolute w-1 bg-black h-full top-0 left-0" />
            )}
            <img
              src={pathname === route.path ? route.active : route.inactive}
              className="w-7 md:w-8 aspect-square"
              alt=""
            />
            <p
              className={`hidden lg:block text-lg ${
                pathname === route.path ? "font-bold" : "font-medium"
              }`}
            >
              {route.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
