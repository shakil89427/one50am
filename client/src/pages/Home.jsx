import Banner from "../components/home/Banner";
import News from "../components/home/News";
import Stories from "../components/home/Stories";
import Blogs from "../components/home/Blogs";

const Home = () => {
  return (
    <div className="pl-2 md:pl-5 grow h-full overflow-y-auto scroller flex flex-col items-start gap-y-16">
      <Banner />
      <News />
      <Stories />
      <Blogs />
    </div>
  );
};

export default Home;
