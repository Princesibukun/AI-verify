// import React from "react";
import Logo from "../assets/Images/Logo.png";
import login from "../assets/Images/login.png";
import adduser from "../assets/Images/add-user.png";
import logo4 from "../assets/Images/logo4.png"

const NavBar = () => {
  return (
    <>
      <div className="md:px-10 px-4 py-4 flex justify-between shadow-2xl w-full bg-white z-10">
        <a href="/" className="flex font-outfit text-nowrap">
          <img
            className="md:text-2xl text-md w-full h-10 md:ml-2 ml-1"
            src={logo4}
            alt="Logo"
          />
        </a>

        <div className="flex justify-between">
          <div className="flex">
            <a
              href="/"
              className="flex border border-gray-400 font-nunito bg-gray-100 hover:bg-gray-400 
                            p-2 md:rounded-md rounded-full text-sm cursor-pointer text-center w-auto h-9 text-nowrap"
            >
              <img
                className="h-5 sm:w-5 w-auto md:mr-1 m-0"
                src={Logo}
                alt="logo"
              />
              <p className="hidden md:block"> View Pricing Plans</p>
            </a>
            <a
              href="/"
              className="flex items-center justify-center min-w-[95px] border border-gray-400 font-nunito bg-white text-pink-700 hover:bg-pink-700 
            hover:text-white p-2 md:rounded-md rounded-full text-sm cursor-pointer ml-2 md:ml-10 h-9 text-nowrapp"
            >
              <img className="block md:hidden h-5 w-5" src={login} alt="" />
              <p className="hidden md:block"> Log In</p>
            </a>
            <a
              href="/"
              className="flex items-center justify-center min-w-[100px] border border-pink-700 font-nunito bg-pink-700 text-white hover:bg-pink-700 
            hover:text-white p-2 md:rounded-md rounded-full text-sm cursor-pointer ml-2 md:ml-10 h-9 text-nowrap"
            >
              <img className="h-5 w-5 md:hidden" src={adduser} alt="" />
              <p className=" sm:hidden md:block">Sign Up</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
