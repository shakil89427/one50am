import { useNavigate } from "react-router-dom";
import logo from "../../assets/dating/logo.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-[#FF0364]">
      <div className="container headerview mb-0 flex items-center justify-between">
        <div className="flex items-center justify-start gap-1">
          <img
            src={logo}
            alt=""
            className="w-5 sm:w-7 md:w-9 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <p className="font-bold text-white text-lg sm:text-2xl md:text-3xl">DATING</p>
        </div>
        <a
          href="mailto:contact@one50am.com"
          style={{ letterSpacing: "1.2px" }}
          className="bg-white text-[#FF0364] font-medium px-5 py-2 rounded text-lg hidden lg:block"
        >
          Download
        </a>
      </div>
    </header>
  );
};

export default Header;
