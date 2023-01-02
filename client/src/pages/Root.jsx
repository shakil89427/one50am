import { Outlet } from "react-router-dom";
import Header from "../components/global/Header";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
