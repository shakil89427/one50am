import { Outlet } from "react-router-dom";
import Header from "../components/global/Header";
import Sidebar from "../components/global/Sidebar";
import Footer from "../components/global/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <div className="container contentview flex items-start">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
