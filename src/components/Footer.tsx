// import React from 'react'
import AiLogo02 from "../assets/Images/AiLogo02.png";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiCopyright } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-white mt-24 h-[280px]">
        <div className="relative flex flex-col md:flex-row justify-between bg-[#FEF7FF] p-8 w-[1200px] max-w-[100%] h-[180px] mt-10 rounded-lg">
          <div className="flex flex-row justify-between">
            <div className="absolute top-6s left-2 flex font-outfit text-nowrap">
              <img className="h-5 w-auto" src={AiLogo02} alt="logo" />
              <h1 className="text-md font-semibold text-purple-700 ml-2">
                AI Detector
              </h1>
            </div>
            <div className="absolute md:right-9 right-2 flex justify-between">
              <a className="mr-4 md:text-lg text-xs" href="#">
                {" "}
                Pricing{" "}
              </a>
              <a className="mr-4 md:text-lg text-xs" href="#">
                {" "}
                Privacy Policy{" "}
              </a>
              <a className=" md:text-lg text-xs" href="#">
                {" "}
                Terms of Use{" "}
              </a>
            </div>
          </div>

          <div className="absolute md:right-9 right-19 top-20 flex justify-between gap-7">
            <FaFacebook className="text-3xl text-purple-600" />
            <PiInstagramLogoFill className="text-3xl text-purple-600" />
            <FaLinkedin className="text-3xl text-purple-600" />
            <FaTelegram className="text-3xl text-purple-600" />
            <AiFillTwitterCircle className="text-3xl text-purple-600" />
          </div>
        </div>
        <div className=" flex flex-col items-center bg-white w-[1200px] max-w-[100%] h-[50px] border-t border-t-slate-300 mt-7">
          <p className="flex mt-5">
            <PiCopyright className=" mt-1 mr-1" /> 2025 AI Detector - All Rights
            Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
