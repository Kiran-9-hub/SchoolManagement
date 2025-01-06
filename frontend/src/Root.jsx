import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Asidebar from "./components/Asidebar/Asidebar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const Root = () => {
  return (
    <>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <div className="fixed top-0 left-0 h-screen w-[16%] z-20">
          <Asidebar />
        </div>

        {/* Main Content */}
        <div className="ml-[16%] w-[84%] flex flex-col relative">
          {/* Navbar */}
          <div className="fixed top-0 left-[16%] w-[84%] z-30">
            <Navbar />
          </div>

          {/* Content */}
          <div className="mt-16 mb-16 p-4">
            <Outlet />
          </div>

          {/* Footer */}
          <div className=" left-[16%] w-[84%] z-20">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
