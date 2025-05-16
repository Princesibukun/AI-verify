// import React from 'react'
import { MdDocumentScanner } from "react-icons/md";
import brain2 from "../assets/Images/brain2.png";
import file from "../assets/Images/file.png";
import coins from "../assets/Images/coins.png";
import { FaAngleDown } from "react-icons/fa";
import arrowup from "../assets/Images/arrowup.png";
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
    .split('')
    .filter((char) => /[a-zA-Z]/.test(char))
    .length;

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


  return (
    <>
      <div className="flex flex-col items-center bg-gray-50 w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12 lg:px-20">
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl text-center text-slate-900">
          Spot AI writing. Catch copied content.
        </h1>
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl text-center text-slate-900 mt-1">
          Stay Confident.
        </h1>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-center max-w-2xl">
          An AI detection and plagiarism checker built for accuracy, speed and simplicity.
        </p>

        <div className="flex flex-col bg-white rounded-2xl w-full max-w-[800px] mt-6 p-4 shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
            <div className="flex gap-4 items-start flex-wrap">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <img className="w-6" src={brain2} alt="" />
                  <h1 className="font-semibold text-sm sm:text-base">AI Detector</h1>
                </div>
                <div className="w-full h-[2px] bg-pink-700 mt-2 rounded-md"></div>
              </div>
              <div className="flex gap-2 items-center">
                <img className="w-6" src={file} alt="" />
                <h1 className="text-sm sm:text-base">Plagiarism Checker</h1>
              </div>
            </div>

            <fieldset className="border border-gray-300 p-1 w-full md:w-[250px] rounded-2xl">
              <legend className="text-sm text-gray-600 px-2">Analyzing Model</legend>
              <div className="flex items-center justify-between w-full mb-2 px-2">
                <span className="text-sm">Selection</span>
                <FaAngleDown className="text-gray-500" />
              </div>
            </fieldset>
          </div>

          <textarea
            className={`mt-4 h-56 w-full p-4 text-sm sm:text-base md:text-lg leading-relaxed outline-none focus:ring-0 focus:outline-none resize-none overflow-auto whitespace-pre-wrap transition-colors duration-300 rounded-lg ${loading ? "text-gray-300" : "text-black"}`}
            placeholder="Enter text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-4 w-full">
            <div className="flex items-center gap-4 flex-wrap">
              <p className="text-sm font-semibold">Word Count: {charCount}</p>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2 flex-wrap">
                <img className="w-5" src={coins} alt="coins" />
                <h2 className="text-sm font-semibold">2 credits left</h2>
                <button className="border-2 border-gray-200 rounded-xl px-4 py-1 text-sm font-semibold cursor-default">
                  Buy more credits
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <label
                htmlFor="fileUpload"
                title="Upload a .txt file"
                className="flex items-center gap-2 cursor-pointer"
              >
                <img className="w-4 h-5" src={arrowup} alt="Upload icon" />
                <p className="hidden sm:block">Upload</p>
              </label>
              <input
                id="fileUpload"
                type="file"
                accept=".txt"
                onChange={handleFileChange}
                className="hidden"
              />

              <button
                onClick={handleScan}
                className={`flex md:flex-row flex-col items-center justify-center font-nunito rounded-full md:rounded-md text-sm font-semibold text-center w-9 h-9 md:w-auto md:px-6 md:py-2 transition-all duration-300 ${loading
                  ? "bg-gray-500 text-black cursor-pointer"
                  : "bg-black text-white hover:text-slate-500 hover:bg-black cursor-pointer"
                  }`}
              >
                <MdDocumentScanner className="md:mr-2 block md:hidden" />
                <p className="hidden md:block">{loading ? "Scanning" : "Scan Content"}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
