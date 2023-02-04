import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const MainWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container contentview flex items-start">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainWrapper;
