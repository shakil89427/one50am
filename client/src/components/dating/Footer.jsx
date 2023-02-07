import { Link } from "react-router-dom";
import logo from "../../assets/dating/logo.png";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

const links = [
  { title: "About", path: "/dating" },
  { title: "Terms", path: "/dating/terms" },
  { title: "Blogs", path: "/dating" },
  { title: "Ads", path: "/dating" },
  { title: "Career", path: "/dating" },
  { title: "Privacy", path: "/dating/privacy" },
];

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-20">
        <div className="flex items-center sm:items-start justify-center">
          <div className="flex flex-col items-center justify-center sm:items-start">
            <div className="flex items-center justify-start gap-1">
              <img
                src={logo}
                alt=""
                className="w-5 sm:w-7 md:w-9 cursor-pointer"
                onClick={() => navigate("/")}
              />
              <p className="font-bold text-white text-lg sm:text-2xl md:text-3xl">DATING</p>
            </div>
            <p className="max-w-[22ch] sm:text-start lg:ml-10 text-center mt-3 text-sm">
              ©Copyright 2023 Dating App All Right Reserved
            </p>
          </div>
        </div>
        <div className="flex items-center sm:items-start justify-center">
          <div className="grid grid-cols-2 gap-x-7 gap-y-3">
            {links.map((link) => (
              <Link to={link.path}>{link.title}</Link>
            ))}
          </div>
        </div>
        <div className="flex items-center sm:items-start justify-center sm:col-span-2 lg:col-span-1">
          <div>
            <div className="bg-white text-black flex items-center justify-center gap-1 rounded w-48 h-11 cursor-pointer hover:scale-105 duration-300 font-medium">
              <IoLogoGooglePlaystore className="text-2xl" />
              <p>Download the app</p>
            </div>
            <p className="mt-5 text-center text-sm lg:text-start">Follow us</p>
            <div className="flex items-center justify-center lg:justify-start gap-1 text-2xl mt-1">
              <AiFillInstagram className="cursor-pointer" />
              <AiFillFacebook className="cursor-pointer" />
              <AiFillTwitterSquare className="cursor-pointer" />
              <IoMdMail className="cursor-pointer" />
              <AiFillYoutube className="cursor-pointer" />
              <AiFillLinkedin className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
