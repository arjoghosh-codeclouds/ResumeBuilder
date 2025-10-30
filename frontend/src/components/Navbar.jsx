import { Link, useNavigate } from "react-router-dom";
import { FileUser, LayoutTemplate } from "lucide-react";
import { ProfileInfoCard } from "./Cards";

const Navbar = () => {
  
  const navigate = useNavigate();

  return (
  <div
    className="
      flex flex-wrap items-center justify-between
      h-auto bg-white backdrop-blur-xl
      py-3 px-4 md:px-8
      sticky top-0 z-50 w-full
    "
  >
    <div className="flex flex-wrap ml-4 items-center justify-between w-full">
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-3 mb-3 md:mb-0 ml:10">
        <FileUser color="#e40101" />
        <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
          ResumeBuilder
        </span>
      </Link>

      {/* Nav Links */}
      <div className="flex flex-wrap items-center gap-4 md:gap-6">
        <Link to="/">
          <span
            className="
              inline-flex items-center
              text-lg md:text-xl font-bold
              px-3 py-2 md:px-4 md:py-2 rounded-lg
              text-black
              transition-all duration-300 ease-in-out
              cursor-pointer
              hover:text-red-500
              relative group
              max-md:hidden
            "
          >
            Home
          </span>
        </Link>

        <button
          className="
            inline-flex items-center
            text-lg md:text-xl font-bold
            px-3 py-2 md:px-4 md:py-2 rounded-lg
            text-black
            transition-all duration-300 ease-in-out
            cursor-pointer
            hover:text-red-500
            relative group
            max-md:hidden"
          onClick={() => {
            
            navigate("/about");
          }}
        >
          About
        </button>

        {/* Profile */}
        <div className="ml-auto mr-10 md:ml-0">
          <ProfileInfoCard />
        </div>
      </div>
    </div>

   
    
  </div>
);

};

export default Navbar;