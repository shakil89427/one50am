import { Routes, Route } from "react-router-dom";
import MainWrapper from "./components/global/MainWrapper";
import SecondaryWrapper from "./components/global/SecondaryWrapper";
// import Home from "./pages/Home";
// import News from "./pages/News";
// import Stories from "./pages/Stories";
// import StoryDetails from "./pages/StoryDetails";
// import Blogs from "./pages/Blogs";
// import BlogDetails from "./pages/BlogDetails";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Dating from "./pages/Dating";
import Landing1 from "./pages/Landing1";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing1 />} />
      {/* <Route
        path="/news"
        element={
          <MainWrapper>
            <News />
          </MainWrapper>
        }
      />
      <Route
        path="/stories"
        element={
          <MainWrapper>
            <Stories />
          </MainWrapper>
        }
      />
      <Route
        path="/stories/:storyId"
        element={
          <MainWrapper>
            <StoryDetails />
          </MainWrapper>
        }
      />
      <Route
        path="/blogs"
        element={
          <MainWrapper>
            <Blogs />
          </MainWrapper>
        }
      />
      <Route
        path="/blogs/:blogId"
        element={
          <MainWrapper>
            <BlogDetails />
          </MainWrapper>
        }
      />
      <Route
        path="/privacy"
        element={
          <SecondaryWrapper>
            <Privacy />
          </SecondaryWrapper>
        }
      />
      <Route
        path="/terms"
        element={
          <SecondaryWrapper>
            <Terms />
          </SecondaryWrapper>
        }
      />
      <Route path="/dating" element={<Dating />} />
      <Route
        path="/dating/privacy"
        element={
          <SecondaryWrapper>
            <Privacy />
          </SecondaryWrapper>
        }
      />
      <Route
        path="/dating/terms"
        element={
          <SecondaryWrapper>
            <Terms />
          </SecondaryWrapper>
        }
      /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
