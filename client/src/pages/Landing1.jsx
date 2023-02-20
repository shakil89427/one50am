import Banner from "../components/landing1/Banner";
import Header from "../components/landing1/Header";
import Review from "../components/landing1/Review";

const Landing1 = () => {
  return (
    <div className="bg-gradient-to-r from-[#E8BC01] to-[#FFCE01] pb-40">
      <div className="container">
        <Header />
        <Banner />
        <Review />
      </div>
    </div>
  );
};
export default Landing1;
