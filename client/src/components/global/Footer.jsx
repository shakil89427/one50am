import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import logowhite from "../../assets/logowhite.png";

const Footer = () => {
  const navigate = useNavigate();
  const routes = useMemo(() => {
    return [
      { title: "Home", path: "/" },
      { title: "Contact", path: "/" },
      { title: "Privacy", path: "/privacy" },
      { title: "Terms", path: "/terms" },
    ];
  }, []);
  return (
    <footer className="bg-black text-white py-20">
      <div className="container flex flex-col gap-10 md:flex-row md:gap-20 lg:gap-32 xl:gap-40 items-center justify-center">
        <div>
          <a href="https://flytant.com">
            <img
              src={logowhite}
              alt=""
              className="w-[130px] md:w-[145px] lg:w-[160] xl:w-[175px] cursor-pointer block mx-auto md:mx-0"
            />
          </a>
          <a href="https://flytant.com">
            <p className="text-sm">©All Right Reserved</p>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 font-medium lg:text-lg">
          <p onClick={() => navigate("/")} className="cursor-pointer select-none">
            Home
          </p>
          <p
            onClick={() => window.open("mailto:contact@one50am.com")}
            className="cursor-pointer select-none"
          >
            Contact
          </p>
          <p onClick={() => navigate("/privacy")} className="cursor-pointer select-none">
            Privacy
          </p>
          <p onClick={() => navigate("/terms")} className="cursor-pointer select-none">
            Terms
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
