//import React from 'react'
import { Outlet } from "react-router-dom";
import DashNav from "../DashNav";
import SideBar from "../SideBar";
import DashFooter from "../DashFooter";

const DashboardLayout = () => {
  return (
    <div className="w-full">
      <DashNav />
      <div
        id="content-area"
        className="flex flex-row justify-between overflow-hidden h-[100vh] w-full pt-20"
      >
        <SideBar />
        <div className="sm:w-full h-full px-4 py-6 overflow-y-auto bg-white">
          <Outlet />
          <DashFooter />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
