import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Peerlist from "../assets/Peerlist.png";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.svg'

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <footer className="relative text-white overflow-hidden py-8">
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 text-sm mb-20 sm:mb-30">
        <div className="mx-2 flex flex-col gap-4 sm:flex-row justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer mx-3 font_instrument italic flex gap-2 items-center justify-center"
          >
            <img src={logo} alt="logo image" className='w-7 h-7'/>
            <span className="text-white font-bold text-[17px] sm:text-[21px]"> Subsync</span>
          </div>

          <div className="flex gap-3 items-center justify-center">
            {/* Privacy Policy */}
            <div
              onClick={() => navigate("/privacy")}
              className="font_instrument cursor-pointer text-white font-light text-lg"
            >
              Privacy Policy
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 text-white mx-3">
              <a
                href="https://x.com/Paras_tsx"
                target="blank"
                className="relative group bg-black px-2 py-2 rounded-full"
              >
                <FaXTwitter className="w-[15px] h-[15px] sm:w-[16px] sm:h-[16px]" />
                <span className="absolute bottom-full mb-1 bg-[#484848] text-white font-inter text-xs rounded px-2 py-1 left-1/2 -translate-x-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out whitespace-nowrap">
                  Twitter
                </span>
              </a>

              <a
                href="https://github.com/parasss19"
                target="blank"
                className="relative group bg-black px-2 py-2 rounded-full"
              >
                <FiGithub className="w-[15px] h-[15px] sm:w-[16px] sm:h-[16px]" />
                <span className="absolute bottom-full mb-1 bg-[#484848] text-white font-inter text-xs rounded px-2 py-1 left-1/2 -translate-x-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out whitespace-nowrap">
                  GitHub
                </span>
              </a>

              <a
                href="https://peerlist.io/paras19"
                target="blank"
                className="relative group bg-black p-1.5 rounded-full"
              >
                <img
                  src={Peerlist}
                  alt="peerlist icon"
                  className="w-[20px] h-[20px]"
                />
                <span className="absolute bottom-full mb-1 bg-[#484848] text-white font-inter text-xs rounded px-2 py-1 left-1/2 -translate-x-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out whitespace-nowrap">
                  Peerlist
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="absolute inset-0 z-0">
        {/* Gradient background covering whole footer */}
        <div className="w-full h-full bg-gradient-to-t from-[#050505] via-[#FF8C00] to-transparent opacity-90"></div>

        {/* Watermark text */}
        <div className="absolute bottom-[-10px] sm:bottom-[-2rem] left-1/2 -translate-x-1/2
                  text-[5rem] sm:text-[9rem] md:text-[11rem] 
                  font-bold text-white/10 select-none pointer-events-none leading-none">
          Subsync
        </div>
      </div>

    </footer>

  );
};

export default Footer;
