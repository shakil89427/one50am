import { Outlet } from "react-router-dom";
import Header from "../components/global/Header";
import Sidebar from "../components/global/Sidebar";

const Root = () => {
  return (
    <>
      <Header />
      <div className="container contentview flex items-start">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Root;
