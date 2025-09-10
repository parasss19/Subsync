import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from '../components/ScrollToTop'

const AppLayout = () => {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="fixed inset-0 z-0"
        style={{
            backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(58, 175, 169, 0.6) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(255, 140, 0, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(238, 130, 238, 0.3) 0%, transparent 80%)
        `,
          backgroundSize: "100% 100%",
        }}
      />
      {/* Layout */}
      <div className="relative my_container">
        <div className="px-6 pt-4">
          <ScrollToTop/>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>

    </div>
  );
};

export default AppLayout;

