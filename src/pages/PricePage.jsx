import { CheckSquare, Heart, QrCode } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import qrCode from "../assets/qrcode.png";

const freePlan = {
  name: "Free",
  price: 0,
  features: [
    "Add unlimited subscriptions",
    "Smart renewal reminders",
    "Automatic updates",
    "Capture Subscriptions Using AI",
    "Works across all your devices",
    "Export and Import your subscription list",
    "Clean & simple user interface",
  ],
};

const PricePage = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <motion.div
      className="mt-20 mb-10"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="mb-[60px] font-[Geist] flex flex-col items-center justify-center sm:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-[Geist] font-medium leading-tight text-white">
          Simple pricing for{" "}
          <span className="font_instrument italic font-light text-blue-300">
            Subsync
          </span>{" "}
          💸
        </h1>
        <p className="text-gray-300 font-[Geist] mt-4 text-lg max-w-2xl">
          All features are completely{" "}
          <span className="bg-cyan-300/80 text-black text-shadow-amber-900 font-bold px-2 py- rounded-xl">
            free 🎉
          </span>{" "}
          no hidden costs, no limits
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col gap-8 items-center">
        {/* Price card */}
        <div className="font-[Geist] text-white border border-white/30 rounded-2xl px-5 py-6 flex flex-col items-center bg-white/5 backdrop-blur-sm w-full sm:w-[70%]">
          <p className="font-bold text-4xl mb-2 font-[Geist]">
            {freePlan.price === 0
              ? "Free Forever"
              : `$${freePlan.price}/month`}
          </p>

          <ul className="flex flex-col gap-4 w-full mt-6">
            {freePlan.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckSquare size={22} className="text-green-400" />
                <span className="text-base font-medium text-white">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Developer card */}
        <div className="text-center font-[Geist] border border-white/20 bg-white/5 backdrop-blur-md rounded-xl p-6 w-full sm:w-[70%]">
          {/* Gif */}
          <div className="flex justify-center mb-6">
            <img
              src="https://res.cloudinary.com/dxxeks4o5/image/upload/v1758970468/downloaded_2_mstcnb.gif"
              alt="coding gif"
              className="rounded-lg w-[280px] sm:w-[350px]"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center justify-center gap-2">
            <Heart className="text-pink-400" /> Support Developer
          </h2>
          <p className="text-gray-300 mt-3 text-base">
            This entire product is <span className="font-bold">free</span>, but
            running servers costs money 💸. If you find Subsync useful, consider
            supporting to keep it alive.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.buymeacoffee.com/paras19"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium shadow-md"
            >
              💻Buy Me a Mackbook
            </a>
            <button
              onClick={() => setShowQR(!showQR)}
              className="flex items-center gap-2 border border-white/40 px-4 py-2 rounded-lg text-white hover:bg-white/10"
            >
              <QrCode size={18} />
              {showQR ? "Hide UPI QR" : "Show UPI QR"}
            </button>
          </div>

          {showQR && (
            <div className="mt-5 flex justify-center">
              <img
                src={qrCode}
                alt="Payment QR"
                className="w-48 h-48 rounded-lg border border-white/20"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PricePage;
