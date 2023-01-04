import Banner from "../components/home/Banner";
import News from "../components/home/News";
import Stories from "../components/home/Stories";
import Blogs from "../components/home/Blogs";

const Home = () => {
  return (
    <div className="pl-3 md:pl-6 lg:pl-9 xl:pl-12 grow h-full overflow-y-auto scroller flex flex-col items-start gap-y-16">
      <Banner />
      <News />
      <Stories />
      <Blogs />
    </div>
  );
};

export default Home;
