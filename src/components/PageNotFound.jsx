import { useNavigate } from "react-router-dom";
import { Ban } from "lucide-react";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-none text-center px-6">
  
      <Ban className="w-20 h-20 text-red-500 mb-6 animate-pulse" />

      <h1
        style={{ fontFamily: "Instrument Serif, serif" }}
        className="text-4xl sm:text-5xl font-bold text-white mb-3"
      >
        404 - Page Not Found
      </h1>

      <p className="text-gray-400 max-w-md mb-8 text-sm sm:text-base">
        Sorry, the page you’re looking for doesn’t exist or has been moved.  
        Please go back to the home page.
      </p>

      <button
        onClick={() => navigate("/")}
        className="cursor-pointer bg-[#383838] hover:bg-[#4a4a4a] text-yellow-200 font-geist font-medium text-base px-6 py-2.5 rounded-lg transition-transform duration-150 active:scale-95"
      >
        Back to Home
      </button>
    </div>
  );
};

export default PageNotFound;
