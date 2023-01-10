import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

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
