// import React from 'react'
import { MdDocumentScanner } from "react-icons/md";
import brain2 from "../assets/Images/brain2.png";
import file from "../assets/Images/file.png";
import coins from "../assets/Images/coins.png";
import { FaAngleDown } from "react-icons/fa";
import arrowup from "../assets/Images/arrowup.png";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-gray-50 md:h-[550px] h-[900px] w-full py-12 overflow-hidden">
        <h1 className="font-bold md:text-4xl text-md text-nowrap text-slate-900">
          Spot AI writing. Catch copied content.
        </h1>
        <h1 className="font-bold md:text-4xl text-md text-nowrap text-slate-900">Stay Confident.</h1>
        <p className=" mt-4 text-sm">
          An AI detection and plagarism checker built for accuracy, speed and simplicity.
        </p>

        <div className="flex flex-col bg-white rounded-2xl w-full max-w-[800px] h-[700px] mt-4 p-4 shadow-2xl overflow-hidden">
          <div className="flex flex-nowrap justify-between items-center w-full gap-4">
            <div className="flex gap-6 items-center flex-wrap">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <img className="w-6" src={brain2} alt="" />
                  <h1 className="font-semibold">AI Detector</h1>
                </div>
                <div className="w-full h-[2px] bg-pink-700 mt-2 rounded-md"></div>
              </div>
              <div className="flex gap-2 items-center">
                <img className="w-6" src={file} alt="" />
                <h1>Plagiarism Checker</h1>
              </div>
            </div>
            <fieldset className="border border-gray-300 p-1 w-[250px] rounded-2xl">
              <legend className="text-sm text-gray-600 px-2">Analyzing Model</legend>
              <div className="flex items-center justify-between w-full mb-2">
                <span className="ml-2">Selection</span>
                <FaAngleDown className="text-gray-500 mr-2" />
              </div>
            </fieldset>
          </div>
          <textarea
            className="mt-2 h-56 md:w-[490px] p-2 outline-none focus:ring-0 focus:outline-none resize-none"
            placeholder="Enter text"
          ></textarea>

          <div className="flex flex-wrap items-center justify-between mt-14 gap-2 w-full">
            <div className="flex items-center gap-4">
              <p className="text-sm font-semibold">Word Count: 0</p>

              <div className="h-6 w-px bg-gray-300"></div>

              <div className="flex items-center gap-2">
                <img className="w-5" src={coins} alt="coins" />
                <h2 className="text-sm font-semibold">2 credits left</h2>
                <button className="border-2 border-gray-200 rounded-xl px-4 py-1 text-sm font-semibold cursor-default">
                  Buy more credits
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <div className="flex gap-2 text-black">
              <img className="w-4 h-5" src={arrowup} alt="" />
              <p className="hidden md:block">Upload</p>
            </div>

            <button className="flex md:flex-row flex-col items-center justify-center font-nunito bg-black text-white hover:text-slate-500 hover:bg-black rounded-full md:rounded-md text-sm font-semibold cursor-pointer text-center w-9 h-9 md:w-auto md:px-6 md:py-2 md:ml-4 ml-2">
              <MdDocumentScanner className="md:mt-1 md:mr-2 block md:hidden" />
              <p className="hidden md:block">Scan Content</p>
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
