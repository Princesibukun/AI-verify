//import React from 'react'
import { Outlet } from "react-router-dom";
import DashNav from "../DashNav";
import Footer from "../Footer";

const DashboardLayout = () => {
  return (
    <div>
      <DashNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DashboardLayout;
