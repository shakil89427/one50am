import Banner from "../components/dating/Banner";
import Footer from "../components/dating/Footer";
import Header from "../components/dating/Header";
import Middle from "../components/dating/Middle";

const Dating = () => {
  return (
    <div className="rubik bg-[#FF0364]">
      <div className="lg:min-h-screen flex flex-col items-center justify-start">
        <Header />
        <Banner />
      </div>
      <Middle />
      <Footer />
    </div>
  );
};
export default Dating;
