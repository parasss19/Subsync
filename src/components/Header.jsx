import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import logoIcon from '../assets/logoIcon.svg';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-5 z-10 mt-5 mb-4 py-2 px-4 rounded-xl bg-[#212121] flex items-center justify-between border border-[#353434]">
      
      {/* Left - Logo */}
      <div
        onClick={() => navigate("/")}
        style={{ fontFamily: "Instrument Serif, serif" }}
        className="flex gap-1 items-center justify-center cursor-pointer italic text-lg font-medium px-[8px] py-1.5 text-white "
      >
        <img src={logoIcon} alt="logo image" />
        Instantly
      </div>

      {/* Right */}
      <div className="flex gap-3 justify-center items-center">
        {/* How to use */}
          <div className="flex items-center gap-1 text-gray-400 cursor-pointer">
            <div
              onClick={() => navigate("#")}
              className="relative group rounded-full hover:bg-[#2b2b2b] hover:text-gray-200 px-1.5 rounded-fdivl py-1.5"
            >
              <span className="text-2xl">🧑🏻‍💻</span>            
              <span className="absolute bottom-full mb-0.5 bg-[#484848] text-white font-[poppins] text-xs rounded px-2 py-1 left-1/2 -translate-x-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out whitespace-nowrap">How to use</span>
            </div>
          </div>

        {/* How to install btn */}
        <div className="flex gap-3 items-center ">
          <div
            onClick={() => navigate("/contact")}
            className="rounded-[6px] bg-[#383838] active:scale-95 transition-transform duration-150"
          >
            <button
              style={{ fontFamily: "Instrument Serif, serif" }}
              className="tracking-wider cursor-pointer text-[18px] font-medium px-[8px] py-1.5 text-yellow-200 font-geist"
            >
              Install
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header