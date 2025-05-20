//import React from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import Frame from "../../assets/Images/Frame .png";
import Google from "../../assets/Images/Google.png";
import Apple from "../../assets/Images/Apple.png";
import { FaChevronRight } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

const Reset = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showPass, setShowPass] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePassVisibility = () => {
    setShowPass(!showPass);
  };

  return (
    <div>
      <div className="flex flex-col items-center m-auto mt-10 h-fit container max-w-[800px] font-quicksand">
        <div className="bg-white md:w-[600px] h-fit w-[343px] max-w-[100%] rounded-lg p-8">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl font-bold">Reset password</h1>
            <a
              href="/login"
              className="text-[#D63C42] text-sm font-semibold underline"
            >
              Back to login
            </a>
          </div>

          <div className="mt-4">
            <div className="flex flex-row justify-between items-center">
              <p className="text-sm">New password</p>
            </div>

            <div className="flex flex-row justify-between items-center border-2 border-purple-300 h-[44px] w-full rounded-md text-center mt-2">
              <input
                type={showPassword ? "text" : "password"}
                 aria-label="Email address"
                className=" h-[44px] w-full outline-0 p-4"
              />
              <span
                onClick={togglePasswordVisibility}
                className="cursor-default"
              >
                {!showPassword ? (
                  <FaRegEyeSlash className="text-lg mr-2" />
                ) : (
                  <FaRegEye className="text-lg mr-2" />
                )}
              </span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-row justify-between items-center">
              <p className="text-sm">Confirm password</p>
            </div>

            <div className="flex flex-row justify-between items-center border-2 border-purple-300 h-[44px] w-full rounded-md text-center mt-2">
              <input
                type={showPassword ? "text" : "password"}
                 aria-label="Email address"
                className=" h-[44px] w-full outline-0 p-4"
              />
              <span
                onClick={togglePassVisibility}
                className="cursor-default"
              >
                {!showPass ? (
                  <FaRegEyeSlash className="text-lg mr-2" />
                ) : (
                  <FaRegEye className="text-lg mr-2" />
                )}
              </span>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-row items-center">
              <FaRegCheckCircle className="mr-2 text-sm" />
              <p className="text-xs">Numbers</p>
            </div>
            <div className="flex flex-row items-center">
              <FaRegCheckCircle className="mr-2 text-sm" />
              <p className="text-xs">Minimum of 12 characters</p>
            </div>

            <div className="flex flex-row items-center">
              <FaRegCheckCircle className="mr-2 text-sm" />
              <p className="text-xs">Uppercase and lowercase letter</p>
            </div>

            <div className="flex flex-row items-center">
              <FaRegCheckCircle className="mr-2 text-sm" />
              <p className="text-xs">Special characters like !, @, #, $</p>
            </div>
          </div>

          <a
            href="/verifylog"
            className="w-full flex flex-col
               items-center text-center bg-[#D63C42]
               hover:bg-[#FF897F] py-[10px] px-[24px]
               font-semibold text-white rounded-lg mt-3"
          >
            <p> Continue</p>
          </a>
          <div className="w-full mt-8">
            <img src={Frame} alt="" className="w-full" />
          </div>
          <div className="flex flex-row justify-between items-center w-full border cursor-pointer p-[10px] border-purple-300 rounded-lg mt-4">
            <img src={Google} alt="" />
            <FaChevronRight />
          </div>
          <div className="flex flex-row justify-between items-center w-full p-[10px] border cursor-pointer border-purple-300 rounded-lg mt-4">
            <img src={Apple} alt="" />
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
