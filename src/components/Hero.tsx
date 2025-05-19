// import React from 'react'

import brain2 from "../assets/Images/brain2.png";
import "../index.css";
import file from "../assets/Images/file.png";
import coins from "../assets/Images/coins.png";
import { FaAngleDown } from "react-icons/fa";
import arrowup from "../assets/Images/arrowup.png";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center font-quicksand bg-gray-50 md:h-[550px] h-[900px] w-full py-12 overflow-hidden">
        <h1 className="font-bold text-3xl text-slate-900 text-center">
          Spot AI writing. Catch copied content. Stay confident.
        </h1>
        {/* <h1 className="font-bold text-3xl text-nowrap text-slate-900">
         
        </h1> */}
        <p className=" mt-4 text-md text-center font-quicksand">
          An AI detection and plagarism checker built for accuracy, speed and
          simplicity.
        </p>

        <div className="relative flex flex-col bg-white rounded-2xl md:w-[800px] w-[343px] max-w-[100%] md:h-[700px] h-[484px] mt-4 p-4 shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-row items-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 border-b-2 border-b-[#D63C42] pb-2 px-2">
                  <img
                    className="font-semibold text-sm font-quicksand w-6"
                    src={brain2}
                    alt=""
                  />
                  <h1 className="text-sm font-quicksand">AI Detector</h1>
                </div>
              </div>
              <div className="flex gap-2 items-center ml-10 text-nowrap ">
                <img
                  className="font-semibold text-sm font-quicksand w-6"
                  src={file}
                  alt=""
                />
                <h1 className="block md:hidden text-sm font-quicksand">
                  Plagiarism
                </h1>
                <h1 className="hidden md:block text-sm font-quicksand">
                  Plagiarism Checker
                </h1>
              </div>
            </div>
            <fieldset className="border border-gray-300 p-1 md:w-[250px] w-full rounded-2xl mt-5">
              <legend className="text-sm text-gray-600 px-2 font-quicksand">
                Analyzing Model
              </legend>
              <div className="flex items-center justify-between font-quicksand w-full mb-2">
                <span className="font-quicksand text-sm ml-2">Select</span>
                <FaAngleDown className="text-gray-500 mr-2" />
              </div>
            </fieldset>
          </div>
          <textarea
            className="mt-2 h-56 md:w-[490px] p-2 outline-none focus:ring-0 focus:outline-none resize-none"
            placeholder="Enter text"
          ></textarea>

          <div className="flex md:flex-row flex-col md:items-center mt-14 gap-2 w-full">
            <div className="flex items-center gap-4">
              <p className="font-quicksand text-sm text-slate-400 font-semibold">
                Word Count: 0
              </p>
            </div>

            <div className="hidden md:block h-6 w-px bg-gray-300"></div>

            <div className="flex">
              <div className="flex items-center flex-row">
                <div className="flex items-center ml-2">
                  <img className="w-5 md:mr-1 mr-2" src={coins} alt="coins" />
                  <h2 className="hidden md:block text-sm font-semibold">
                    2 credits left
                  </h2>
                  <h2 className="block md:hidden text-sm font-semibold">2</h2>
                </div>

                <button className="border-2 border-gray-200 rounded-xl px-4 py-1 text-sm font-semibold font-quicksand cursor-default md:ml-4 ml-5">
                  <p className="hidden md:block"> Buy more credits</p>
                  <p className="block md:hidden">Buy</p>
                </button>
              </div>
              <div className="flex items-center md:ml-40 ml-20 justify-between">
                <div className="flex gap-2 text-black font-quicksand text-sm font-semibold text-nowrap">
                  <img className="w-4 h-4" src={arrowup} alt="" />
                  <p className="hidden md:block">Upload</p>
                </div>

                <button className="bg-black rounded-lg text-white p-2 text-sm font-quicksand font-semibold cursor-pointer md:ml-8 ml-7">
                  <p className="hidden md:block">Scan Content</p>
                  <p className="block md:hidden">Scan</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
