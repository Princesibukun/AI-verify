// import React from "react";
import Logo from "../assets/Images/Logo.png";
import login from "../assets/Images/login.png";
import adduser from "../assets/Images/add-user.png";
import logo4 from "../assets/Images/logo4.png"

const NavBar = () => {
  return (
    <>
      <div className="md:px-10 px-4 py-4 flex flex-wrap items-center justify-between shadow-4xl w-full bg-white z-10">
        <a href="/" className="flex font-outfit text-nowrap items-center">
          <img
            className="h-8 md:h-10 w-auto"
            src={logo4}
            alt="Logo"
          />
        </a>

        <div className="flex flex-wrap justify-end mt-2 md:mt-0 w-full md:w-auto">
          <div className="flex flex-wrap gap-2 md:gap-4">
            <a
              href="/reset"
              className="flex items-center gap-1 border border-gray-400 font-nunito bg-gray-100 hover:bg-gray-400 
                        px-2 md:px-4 py-1 md:rounded-md rounded-full text-sm cursor-pointer text-center h-9 whitespace-nowrap"
            >
              <img
                className="h-5 w-5"
                src={Logo}
                alt="logo"
              />
              <p className="hidden md:block">View Pricing Plans</p>
            </a>

            <a
              href="/login"
              className="flex items-center justify-center min-w-[80px] border border-gray-400 font-nunito bg-white text-pink-700 hover:bg-pink-700 
              hover:text-white px-2 md:px-4 py-1 md:rounded-md rounded-full text-sm cursor-pointer h-9"
            >
              <img className="block md:hidden h-5 w-5" src={login} alt="login" />
              <p className="hidden md:block">Log In</p>
            </a>

            <a
              href="/signup"
              className="flex items-center justify-center min-w-[90px] border border-[#D63c42] font-nunito bg-[#D63c42] text-white hover:bg-pink-600 
              hover:text-white px-2 md:px-4 py-1 md:rounded-md rounded-full text-sm cursor-pointer h-9"
            >
              <img className="block md:hidden h-5 w-5" src={adduser} alt="signup" />
              <p className="sm:hidden md:block">Sign Up</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
