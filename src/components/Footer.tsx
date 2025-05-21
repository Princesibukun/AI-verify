// import React from 'react'
import logo5 from "../assets/Images/logo5.png";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiCopyright } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-10 bg-white h-[280px]">
        <div className="relative flex flex-col md:flex-row justify-between bg-[#FFF8F7] p-8 w-[1200px] max-w-[100%] h-[180px] mt-10 rounded-lg">
          <div className="flex flex-row justify-between">
            <div className="absolute top-6 left-9 font-outfit text-nowrap">
              <img className="h-5 w-auto bg-[#FFF8F7]" src={logo5} alt="logo" />
            </div>
            <div className="mt-8 text-sm font-quicksand">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Habitant cursus odio fringilla id tellus faucibus</p>
              <p>fermentum felis risus</p>
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
            <FaFacebook className="text-3xl text-[#D63C42]" />
            <PiInstagramLogoFill className="text-3xl text-[#D63C42]" />
            <FaLinkedin className="text-3xl text-[#D63C42]" />
            <FaTelegram className="text-3xl text-[#D63C42]" />
            <AiFillTwitterCircle className="text-3xl text-[#D63C42]" />
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
