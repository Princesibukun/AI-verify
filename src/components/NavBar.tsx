// import React from "react";
import Logo from "../assets/Images/Logo.png";
//import login from "../assets/Images/login.png";
import menu from "../assets/Images/Menu.png";
import logo4 from "../assets/Images/logo4.png";

const NavBar = () => {
  return (
    <>
      <div className="md:px-10 px-4 py-4 flex flex-wrap items-center justify-between shadow-2xl w-full bg-white z-10">
        <a href="/" className="flex font-outfit text-nowrap items-center">
          <img
            className="md:text-2xl text-sm md:w-full w-[129.2941131591797px] md:h-10 h-[28px] md:ml-2 ml-1"
            src={logo4}
            alt="Logo"
          />
        </a>

        <div className="flex justify-between">
          <div className="flex">
            <a href="/view" className="hidden md:block">
              <div
                className="flex border border-gray-400 font-nunito bg-gray-100 hover:bg-gray-400 
                            p-2 md:rounded-md rounded-full text-sm cursor-pointer text-center w-auto h-9 text-nowrap"
              >
                <img
                  className="h-5 sm:w-5 w-auto md:mr-1 m-0 hidden md:block"
                  src={Logo}
                  alt="logo"
                />
                <p className=""> View Pricing Plans</p>
              </div>
            </a>
            <a href="/login" className="hidden md:block">
              <div
                className="flex items-center justify-center min-w-[95px] border border-gray-400 font-quicksand font-semibold bg-white text-[#D63C42] hover:bg-[#D63C42]
            hover:text-white px-2 md:rounded-md rounded-full text-sm cursor-pointer ml-2 md:ml-10 h-9 text-nowrapp"
              >
                <p className=""> Log In</p>
              </div>
            </a>

            <a
              href="/signup"
              className="flex items-center justify-center min-w-[100px] border border-pink-700 font-quicksand font-semibold bg-[#D63C42] text-white hover:bg-[#FF897F]
            hover:text-white px-2 rounded-lg text-sm cursor-pointer ml-2 md:ml-10 h-9 text-nowrap"
            >
              <p className="">Sign Up</p>
            </a>
            <img
              className="block md:hidden ml-[20px] cursor-pointer"
              src={menu}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
