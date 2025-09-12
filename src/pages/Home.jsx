import Accordian from '../components/Accordian'
import Chrome from '../assets/chrome.svg';
import netflix from '../assets/netflix.svg';
import notion from '../assets/notion.svg'
// import { ArcadeEmbed } from '../components/ArcadeEmbed';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from 'react';
import gpt from '../assets/gpt.svg'
import spotify from '../assets/spotify.svg'
import cursor from '../assets/cursor.svg'
import claude from '../assets/claude.svg'
import FeaturesBento from '../components/FeaturesBento';
import HowToUse from '../components/HowToUse';

const Home = () => {
  //tracking cursor
  const mouseX = useMotionValue(0.5); //default center
  const mouseY = useMotionValue(0.5);

  //smooth values
  const springX = useSpring(mouseX, { stiffness: 60, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 30 });

  //parallax transforms
  const x1 = useTransform(springX, [0, 1], ["-30px", "30px"]);
  const y1 = useTransform(springY, [0, 1], ["-30px", "30px"]);

  const x2 = useTransform(springX, [0, 1], ["-50px", "50px"]);
  const y2 = useTransform(springY, [0, 1], ["-50px", "50px"]);

  const x3 = useTransform(springX, [0, 1], ["-70px", "70px"]);
  const y3 = useTransform(springY, [0, 1], ["-70px", "70px"]);

  //listen to mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);



  return (
    <>
      {/* floating icons */}
      <motion.img
        src={gpt}
        alt="chatgpt"
        className="w-10 h-10 hidden sm:block opacity-50 absolute sm:top-40 sm:left-20 md:top-50 md:left-10"
        style={{ x: x1, y: y1 }}
      />
      <motion.img
        src={spotify}
        alt="spotify"
        className="w-10 h-10 hidden sm:block opacity-50 absolute sm:top-50 sm:right-10 md:top-60 md:right-10"
        style={{ x: x2, y: y2 }}
      />
      <motion.img
        src={claude}
        alt="claude"
        className="w-10 h-10 hidden sm:block opacity-50 absolute sm:top-96 sm:left-20 md:top-96 md:left-16 "
        style={{ x: x3, y: y3 }}
      />
      <motion.img
        src={cursor}
        alt="cursor"
        className="w-10 h-10 hidden sm:block opacity-50 absolute sm:top-80 sm:right-16 md:top-96 md:right-16 smd:top-80"
        style={{ x: x3, y: y3 }}
      />


      {/* Hero Section */}
      <motion.div
        className="mt-14 mb-8 font-[Geist] flex flex-col items-center justify-center sm:px-8 text-center"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative sm:my- px-4 sm:px-8 flex flex-col items-center font-[Geist]">
          {/* badge */}
          <div className="font-custom-font inline-flex items-center mb-3 py-0.5 px-3 border border-white/40 rounded-full  shadow-md hover:shadow-lg hover:-translate-y-1 transition group sm:px-4 sm:py-1">
            <p className="text-xs sm:text-sm text-white font-light flex gap-2 items-center justify-center">
               Manage Subscriptions in minutes 
              <img className='inline' width="20" height="20" src="https://img.icons8.com/3d-fluency/50/clock.png" alt="clock"/>
            </p>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-3xl sm:text-5xl font-medium leading-tight text-white">
            Track every {" "}
            <span className='font_instrument italic font-light text-blue-300'>Subscription</span>{" "}
            with AI Skip unwanted renewals ✨
          </h1>

          {/* Subheading */}
          <div className="text-center">
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white max-w-2xl mx-auto">
              From {" "} 
              <img className='inline' width="35" height="35" src={netflix} alt="netflix"/>
              to {" "}
              <img className='inline' width="35" height="35" src={notion} alt="notion"/>{" "}
              see all your subscriptions in a single, smart dashboard.
              {" "} It Automatically capture subscription details with AI and get smart, timely reminders so renewals never slip by
            </p>
          </div>

          {/* CTA btn*/}
          <div className="mt-8">
            <button
              onClick={() => navigate("#")}
              className="cursor-pointer bg-black/60  text-yellow-300 text-sm sm:text-lg px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-md transition-transform duration-150 active:scale-95"
            >
              <span className='tracking-wider flex items-center font-medium justify-center gap-2'>
                Add to <img src={Chrome} alt="chrome" className='w-5 h-5'/> its's Free
              </span>
            </button>
          </div>

          {/* Product Preview demo video */}
          <div className="mt-12 flex justify-center items-center w-full max-w-[95%] sm:max-w-[95%] md:max-w-[90%] mx-auto">
            {/* <ArcadeEmbed /> */}
          </div>

        </div>
      </motion.div>

      {/* How to use video*/}
      {/* <div className='flex flex-col gap-4 '>
        <ArcadeEmbed/>
        <span className='text-sm font-bold text-white/90 bg-gray-600 w-fit mx-auto rounded-lg px-2 py-1'>Interactive Tutorial</span>
      </div> */}

      {/* Features */}
      <FeaturesBento/>

      {/* How to use steps */}
      <HowToUse/>
      
      {/* Accordian */}
      <Accordian/>
    </>

  )
}

export default Home