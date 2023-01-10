import { Routes, Route } from "react-router-dom";
import Global from "./pages/Global";
import Home from "./pages/Home";
import News from "./pages/News";
import Stories from "./pages/Stories";
import Blogs from "./pages/Blogs";
import StoryDetails from "./pages/StoryDetails";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Global />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="stories" element={<Stories />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="storydetails/:storyId" element={<StoryDetails />} />
        <Route path="blogdetails/:blogId" element={<BlogDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
