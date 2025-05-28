// import React from 'react'

import brain2 from "../assets/Images/brain2.png";
import "../index.css";
import file from "../assets/Images/file.png";
import coins from "../assets/Images/coins.png";
import { HiChevronDown } from "react-icons/hi";
import arrowup from "../assets/Images/arrowup.png";
import herobg from "../assets/Images/heroBg.jpeg";
import { useState } from "react";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState<string>("");

  const handleScan = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const charCount: number = inputText
    .split("")
    .filter((char) => /[a-zA-Z]/.test(char)).length;

  console.log("Input:", inputText);
  console.log("Letter Count:", charCount);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "text/plain") {
        const reader = new FileReader();
        reader.onload = () => {
          setInputText(reader.result as string);
        };
        reader.readAsText(file);
      } else {
        alert("Only .txt files are currently supported for preview.");
      }
    }
  };

  const [activeTab, setActiveTab] = useState("ai");

  return (
    <>
      <div
        className="flex flex-col items-center font-quicksand md:h-[550px] h-[900px] w-full py-12 overflow-hidden mt-24"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <h1 className="font-bold text-3xl text-slate-900 text-center">
          Spot AI writing. Catch copied content. <br /> Stay confident.
        </h1>
        <p className=" mt-4 text-md text-center font-quicksand">
          An AI detection and plagarism checker built for accuracy, speed and
          simplicity.
        </p>

        <div className="flex flex-col bg-white rounded-2xl md:w-[800px] w-[343px] max-w-[100%] md:h-[700px] h-[484px] mt-4 p-4 shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex mb-10 space-x-6 text-sm font-medium">
              <button
                className={`flex flex-row pb-2 border-b-2 transition-all duration-700 ease-in-out  ${
                  activeTab === "ai"
                    ? "border-[#D63C42] text-[#031B4E] font-semibold "
                    : "border-transparent text-gray-500"
                }`}
                onClick={() => setActiveTab("ai")}
              >
                <img
                  className="font-semibold text-sm font-quicksand h-6 w-6 mr-2"
                  src={brain2}
                  alt=""
                />
                AI Detector
              </button>
              <button
                className={`flex flex-row pb-2 border-b-2 transition-all duration-700 ease-in-out  ${
                  activeTab === "plagiarism"
                    ? "border-[#D63C42] text-[#031B4E] font-semibold "
                    : "border-transparent text-gray-500"
                }`}
                onClick={() => setActiveTab("plagiarism")}
              >
                <img
                  className="font-semibold text-sm font-quicksand h-6 w-6 mr-2"
                  src={file}
                  alt=""
                />
                Plagiarism Checker
              </button>
            </div>
            <div className="relative w-64">
              <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500 z-10 font-quicksand">
                Analyzing Model
              </label>
              <select className="w-full appearance-none border border-gray-300 rounded-md px-3 py-2 text-[#031B4E] font-medium text-sm focus:outline-none font-quicksand">
                <option>Select </option>
                <option>Model 1</option>
                <option>Model 2</option>
                <option>Model 3</option>
              </select>
              {/* Dropdown Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-3 -top-8 flex items-center text-[#031B4E]">
                <HiChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>

          {loading ? (
            <div className="mt-4 w-full p-2 rounded-lg bg-white overflow-auto animate-pulse h-56">
              {Array.from({
                length: Math.max(inputText.split("\n").length, 5),
              }).map((_, i) => (
                <div
                  key={i}
                  className={`bg-gray-100 rounded w-full h-5 mt-4 ${
                    i === Math.max(inputText.split("\n").length, 5) - 1
                      ? ""
                      : "mb-1.5"
                  }`}
                />
              ))}
            </div>
          ) : (
            <textarea
              className="mt-4 h-56 w-full p-4 text-sm sm:text-base md:text-lg leading-relaxed outline-none resize-none overflow-auto whitespace-pre-wrap rounded-lg text-black bg-white"
              placeholder="Enter text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          )}

          <div className="flex md:flex-row flex-col text-center mt-6 gap-4 w-full">
            <div className="flex flex-row items-center gap-4 md:p-2 md:border-r md:border-r-gray-300 text-nowrap h-auto ">
              <p className="font-quicksand text-sm text-black font-semibold">
                Word Count: {charCount}
              </p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-5 md:gap-2 items-center ">
                <button className="flex ">
                  <img
                    className="w-5 h-5 md:mr-1 mr-2"
                    src={coins}
                    alt="coins"
                  />
                  <h2 className="hidden md:block text-sm font-semibold">
                    2 credits left
                  </h2>
                  <h2 className="block md:hidden text-sm font-semibold">2</h2>
                </button>

                <div className="">
                  <button className="border-2 border-gray-200 rounded-xl px-4 py-1 text-sm font-semibold font-quicksand cursor-default md:ml-4">
                    <p className="hidden md:block"> Buy more credits</p>
                    <p className="block md:hidden">Buy</p>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 text-center md:ml-28 ml-20">
                <div className="w-10 md:w-auto">
                  <label
                    htmlFor="fileUpload"
                    title="Upload a .txt file"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <img className="w-4 h-5" src={arrowup} alt="Upload icon" />
                    <p className="hidden md:block">Upload</p>
                  </label>
                  <input
                    id="fileUpload"
                    type="file"
                    accept=".txt"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                <button
                  onClick={handleScan}
                  className={`flex flex-row items-center font-quicksand bg-black text-white hover:text-slate-500 hover:bg-black rounded-lg text-sm font-semibold cursor-pointer text-center h-auto w-auto px-3 py-2 md:px-6 md:py-2 md:ml-4 ml-2transition-all duration-300 ${
                    loading
                      ? "bg-gray-100 text-black cursor-pointer"
                      : "bg-black text-white hover:text-slate-400 hover:bg-gray-100 cursor-pointer"
                  }`}
                >
                  <p className="hidden md:block">
                    {loading ? "Scanning" : "Scan Content"}
                  </p>
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
