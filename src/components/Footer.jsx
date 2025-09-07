import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import DotTitle from "./Dot_Title";
import Peerlist from '../assets/Peerlist.png'
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className="my_container bg-[#212121] border border-[#353434] mb-3 rounded-xl">
      <div className="mx-2 mt-4 rounded-xl flex flex-col gap-4 sm:flex-row justify-between items-center">
        <div className="mx-3">
          <DotTitle title="Follow Me" />
        </div>

        <div className="flex gap-3 items-center justify-center">
          <div
            onClick={() => navigate("/privacy")}
            style={{ fontFamily: "Instrument Serif, serif" }}
            className="cursor-pointer text-white/50 font-light text-lg"
          >
            Privacy Policy
          </div>

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

      <div className="mt-4 mb-3">
        <p class="text-sm sm:text-[17px] text-gray-500 text-center font-[poppins]">
          © 2025 Instantly. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer