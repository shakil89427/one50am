import { Routes, Route } from "react-router-dom";
import Global from "./components/global/Global";
import Home from "./pages/Home";
import News from "./pages/News";
import Stories from "./pages/Stories";
import StoryDetails from "./pages/StoryDetails";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Global />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="stories" element={<Stories />} />
        <Route path="stories/:storyId" element={<StoryDetails />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:blogId" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
