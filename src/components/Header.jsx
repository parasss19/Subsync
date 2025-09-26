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
        {/* Price Page */}
        <div className="flex items-center gap-2 sm:gap-4 text-gray-400 cursor-pointer font_instrument">
          <span onClick={() => navigate('/use')} className=" text-white font-semibold font-[Geist] text-xs sm:text-lg bg-black/20 rounded-xl px-3 py-1 hover:scale-110 duration-200">Use</span>
          <span onClick={() => navigate('/price')} className=" text-white font-semibold font-[Geist] text-xs sm:text-lg bg-black/20 rounded-xl px-3 py-1 hover:scale-110 duration-200">Price</span>
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