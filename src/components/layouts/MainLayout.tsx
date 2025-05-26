//import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="sm:w-full overflow-y-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
