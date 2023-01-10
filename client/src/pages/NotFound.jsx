import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
        Sorry Page Not Found
      </p>
      <Link
        to="/"
        replace={true}
        className="bg-black text-white border px-3 py-2 mt-5 rounded-md text-xs md:text-sm"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
