import logo from "../../assets/landing1/logo.png";

const Header = () => {
  return (
    <div className="h-20 lg:h-24 flex items-center justify-between">
      <img src={logo} alt="" className="w-40 md:w-48 lg:w-56" />
      <span className="flex items-center gap-5">
        <a
          href="#"
          className="w-32 h-11 bg-[#FF5C00] flex items-center justify-center text-white rounded-lg font-medium text-lg"
        >
          Download
        </a>
        <a
          href="#"
          className="hidden w-32 h-11 border border-white lg:flex items-center justify-center text-white rounded-lg font-medium text-lg"
        >
          Contact
        </a>
      </span>
    </div>
  );
};
export default Header;
