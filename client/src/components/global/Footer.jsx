import { useNavigate } from "react-router-dom";
import logowhite from "../../assets/logowhite.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-black text-white mt-8 sm:mt-9 md:mt-10 py-20">
      <div className="container flex flex-col gap-10 md:flex-row items-center md:justify-between">
        <div>
          <img
            src={logowhite}
            alt=""
            className="w-[130px] md:w-[145px] lg:w-[160] xl:w-[175px] cursor-pointer block mx-auto md:mx-0"
            onClick={() => navigate("/")}
          />
          <p className="text-sm">©Copyright All Right Reserved</p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5 font-medium lg:text-lg">
          <p>Home</p>
          <p>Contact</p>
          <p>About</p>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
