import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg'

const Header = () => {
  const navigate = useNavigate();

  const handleScroll = () => {
    const section = document.getElementById("howToUse");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="sticky top-5 z-20 mt-5 mb-4 py-[5px] px-3 rounded-xl bg-[#212121] flex items-center justify-between border border-[#353434]">
      {/* Left - Logo */}
      <div
        onClick={() => navigate("/")}
        className="font_instrument flex gap-2 items-center justify-center cursor-pointer italic text-lg font-medium text-white "
      >
        {/* <CalendarSync/>  */}
        <img src={logo} alt="logo image" className='w-7 h-7'/>
        <span className="font-medium tracking-wider text-xl">Subsync</span> 
      </div>

      {/* Right */}
      <div className="flex gap-5 justify-center items-center">
        {/* How to use */}
        <div className="flex items-center gap-1 text-gray-400 cursor-pointer">
          <div
            onClick={handleScroll}
            className="relative group rounded-full hover:bg-[#2b2b2b] hover:text-gray-200 px-1.5 rounded-fdivl py-1.5"
          >
            <span className="text-xl sm:text-3xl">🧑🏻‍💻</span>
            <span className="absolute bottom-full mb-0.5 bg-[#484848] text-white font-[poppins] text-xs rounded px-2 py-1 left-1/2 -translate-x-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out whitespace-nowrap">
              How to use
            </span>
          </div>
        </div>

        {/* install btn */}
        <div className="">
          <button
            onClick={() => navigate("/auth")}
            className="cursor-pointer bg-black/60 text-yellow-300 text-sm sm:text-lg px-2 py-1.5 sm:px-4 sm:py-1.5 rounded-lg shadow-md transition-transform duration-150 active:scale-95"
          >
            <span className="font_instrument tracking-wider flex items-center font-medium justify-center gap-1">
              Install
            </span>
          </button>
        </div>
      </div>

    </div>
  );
}

export default Header