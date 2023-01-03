import { useNavigate } from "react-router-dom";
import logoblack from "../../assets/logoblack.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="container headerview flex items-center justify-between">
      <img
        src={logoblack}
        alt=""
        className="w-[130px] md:w-[145px] lg:w-[160] xl:w-[175px] cursor-pointer"
        onClick={() => navigate("/")}
      />
      <button
        style={{ letterSpacing: "1.2px" }}
        className="border border-black text-black font-medium px-5 py-1.5 rounded-lg text-lg hidden lg:block"
      >
        Contact
      </button>
    </header>
  );
};

export default Header;
