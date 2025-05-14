//import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import view from "../assets/Images/view.png";
import save from "../assets/Images/save.png";
import aiLogo from "../assets/Images/getAi.png";
import paste from "../assets/Images/paste.png";

const HowItWorks = () => {
  return (
    <>
      <div className="flex flex-col items-center  m-auto mt-20 h-fit container max-w-[800px]">
        <div className="border border-gray-300 rounded-full p-1 px-2 font-semibold text-sm w-fit">
          How it works
        </div>
        <h1 className="font-semibold text-4xl mt-2 text-center">
          Detect AI-Generated Content in 
        </h1>
        <h1 className="font-semibold text-4xl mt-2 text-center">Seconds</h1>
        <div className="flex md:flex-row flex-col items-center justify-between mt-20 w-full gap-2 md:gap-3">
          <div className="flex flex-col items-center">
            <div className="bg-red-400 hover:bg-red-300 rounded-full flex items-center justify-center cursor-pointer w-[104px] h-[104px]">
              <img className="w-20"  src={paste} alt="" />
            </div>
            <p className="text-xl mt-3 text-center">Paste Or Upload Text</p>
          </div>

          <FaArrowRight className="hidden md:block text-2xl  translate-x-2" />
          <div className="flex flex-col items-center">
            <div className="bg-yellow-300 hover:bg-yellow-200  rounded-full flex items-center justify-center cursor-pointer w-[104px] h-[104px]">
              <img className="w-16" src={aiLogo} alt="" />
            </div>
            <p className="text-xl mt-3 text-center">Get AI Detection</p>
          </div>

          <FaArrowRight className="hidden md:block text-2xl  translate-x-2" />
          <div className="flex flex-col items-center">
            <div className="bg-blue-400 hover:bg-blue-300  rounded-full flex items-center justify-center cursor-pointer w-[104px] h-[104px]">
              <img className="w-16" src={view} alt="" />
            </div>
            <p className="text-xl mt-3 text-center">View Result</p>
          </div>

          <FaArrowRight className="hidden md:block text-2xl  translate-x-2" />
          <div className="flex flex-col items-center ml-4">
            <div className="bg-purple-400 hover:bg-purple-300  rounded-full flex items-center justify-center cursor-pointer w-[104px] h-[104px]">
              <img className="w-16" src={save} alt="" />
            </div>
            <p className="text-xl mt-3 text-center">Save History</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
