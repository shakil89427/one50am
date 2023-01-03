import { Routes, Route } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import News from "./pages/News";
import Stories from "./pages/Stories";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="stories" element={<Stories />} />
        <Route path="blogs" element={<Blogs />} />
      </Route>
    </Routes>
  );
};

export default App;
