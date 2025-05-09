// import React from "react";
import AiLogo from "../assets/Images/AiLogo.png";
import Logo from "../assets/Images/Logo.png";
import login from "../assets/Images/login.png";
import adduser from "../assets/Images/add-user.png";

const NavBar = () => {
  return (
    <>
      <div className="sticky top-0 md:px-10 px-4 py-4 flex justify-between shadow-2xl w-full bg-white z-10">
        <a href="/" className="flex font-outfit text-nowrap">
          <img className="h-7 w-auto" src={AiLogo} alt="logo" />
          <h1 className="md:text-2xl text-md font-semibold text-purple-700 md:ml-2 ml-1">
            AI Detector
          </h1>
        </a>

        <div className="flex justify-between">
          <div className="flex">
            <a
              href="/resetpass"
              className="flex border border-gray-400 font-nunito bg-purple-200 hover:bg-purple-700 
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
              href="/login"
              className="border border-purple-700 font-nunito bg-white text-purple-700 hover:bg-purple-700 
                          hover:text-white p-2 md:rounded-md rounded-full text-sm cursor-pointer w-auto ml-2 md:ml-10 h-9 text-nowrap"
            >
              <img className="block md:hidden h-5 w-5" src={login} alt="" />
              <p className="hidden md:block"> Log In</p>
            </a>
            <a
              href="/signup"
              className="border border-purple-700 font-nunito bg-purple-700 text-white hover:bg-purple-200 
                          hover:text-purple-700 p-2 md:rounded-md rounded-full text-sm cursor-pointer ml-2 md:ml-10 w-auto text-nowrap"
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
