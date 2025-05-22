// import React from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import Frame from "../../assets/Images/Frame .png";
import Google from "../../assets/Images/Google.png";
import Apple from "../../assets/Images/Apple.png";
import { FaChevronRight } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="flex flex-col items-center m-auto mt-10 h-fit container max-w-[800px] font-quicksand">
        <div className="bg-white md:h-[510px] md:w-[600px] w-[343px] h-[610px] max-w-[100%] rounded-lg p-8">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl font-semibold">Log In</h1>
            <a
              href="signup"
              className="text-[#D63C42] text-sm font-semibold underline"
            >
              I don't have an account
            </a>
          </div>
          <div className="mt-10">
            <p className="text-sm">Email address</p>
            <input
              type="email"
              aria-label="Email address"
              className="border-2 border-gray-200 h-[44px] w-full rounded-md outline-0 mt-2 p-4"
            />
          </div>
          <div className="mt-4">
            <div className="flex flex-row justify-between items-center">
              <p className="text-sm">Password</p>
              <a href="/reset" className="text-[#D63C42] text-sm font-semibold">
                Forgot Password?
              </a>
            </div>

            <div className="flex flex-row justify-between items-center border-2 border-gray-200 h-[44px] w-full rounded-md text-center mt-2">
              <input
                type={showPassword ? "text" : "password"}
                aria-label="password"
                className=" h-[44px] w-full outline-0 p-4"
              />
              <span
                onClick={togglePasswordVisibility}
                className="cursor-pointer"
              >
                {!showPassword ? (
                  <FaRegEyeSlash className="text-lg mr-2" />
                ) : (
                  <FaRegEye className="text-lg mr-2" />
                )}
              </span>
            </div>
          </div>
          <button
            className="w-full flex flex-col
           items-center text-center bg-[#D63C42]
           hover:bg-[#FF897F] py-[10px] px-[24px]
           font-semibold text-white rounded-lg mt-3"
          >
            <p> Continue</p>
          </button>
          <div className="w-full mt-8">
            <img src={Frame} alt="" className="w-full" />
          </div>
          <div className="flex flex-row justify-between items-center w-full border cursor-pointer p-[10px] border-gray-200 rounded-lg mt-4">
            <img src={Google} alt="" />
            <FaChevronRight />
          </div>
          <div className="flex flex-row justify-between items-center w-full p-[10px] border cursor-pointer border-gray-200 rounded-lg mt-4">
            <img src={Apple} alt="" />
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
