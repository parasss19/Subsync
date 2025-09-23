import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Chrome from '../assets/chrome.svg';
import extension1 from "../assets/extension1.webp";
import extension2 from "../assets/extension2.webp";
import extension3 from "../assets/extension3.webp";
import extension4 from "../assets/extension4.webp";

const images = [
    { src: extension1, label: "Dashboard View" },
    { src: extension2, label: "Subscription List" },
    { src: extension3, label: "Add Subscription View" },
    { src: extension4, label: "Settings View" },
];

const ExtensionCarousel = () => {
    const [index, setIndex] = useState(0);

    const prevSlide = () => setIndex((index - 1 + images.length) % images.length);
    const nextSlide = () => setIndex((index + 1) % images.length);

    return (
        <section className="my-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">

                {/* Left: Carousel */}
                {/* Left: Carousel */}
                <div className="flex justify-center w-full px-4 sm:px-6">
                    <div className="relative flex items-center justify-center px-6 py-6 rounded-3xl border border-white/10 shadow-lg bg-white/[0.02] w-full max-w-[420px]">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={index}
                                src={images[index].src}
                                alt={images[index].label}
                                loading="lazy"
                                decoding="async"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="w-full max-h-[420px] object-contain rounded-xl"
                            />
                        </AnimatePresence>

                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute rounded-xl bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4"
                        >
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="text-white text-sm sm:text-base font-medium text-center"
                            >
                                {images[index].label}
                            </motion.p>
                        </motion.div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full shadow-md"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full shadow-md"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Right: Text content */}
                <div className="space-y-4 sm:space-y-6 md:space-y-6 flex flex-col justify-center text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug">
                        Manage Your Subscriptions Smarter
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-lg leading-relaxed max-w-md md:max-w-full mx-auto md:mx-0">
                        Subsync helps you capture subscriptions instantly, manage all your
                        payments in one place, and set up reminders so you never miss a
                        renewal again.
                    </p>

                    {/* CTA Button */}
                    <button
                        onClick={() => navigate("#")}
                        className="cursor-pointer bg-black/60 hover:bg-black/70 text-yellow-300 text-sm sm:text-base md:text-lg px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-md transition-transform duration-150 active:scale-95 mx-auto md:mx-0"
                    >
                        <span className="tracking-wider flex items-center font-[Geist] text-base sm:text-lg md:text-xl font-medium justify-center gap-2">
                            Add to <img src={Chrome} alt="chrome" className="w-4 h-4 sm:w-5 sm:h-5" /> it’s Free
                        </span>
                    </button>
                </div>


            </div>
        </section>
    );
};

export default ExtensionCarousel;
