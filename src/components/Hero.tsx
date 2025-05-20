// import React from 'react'
import { MdDocumentScanner } from "react-icons/md";
import brain2 from "../assets/Images/brain2.png";
import "../index.css";
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

        <div className="flex flex-col bg-white rounded-2xl md:w-[800px] w-[343px] max-w-[100%] md:h-[700px] h-[484px] mt-4 p-4 shadow-2xl overflow-hidden">
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
            <fieldset className="border border-gray-300 p-1 w-[250px] rounded-2xl">
              <legend className="text-sm text-gray-600 px-2">
                Analyzing Model
              </legend>
              <div className="flex items-center justify-between w-full mb-2">
                <span className="ml-2">Selection</span>
                <FaAngleDown className="text-gray-500 mr-2" />
              </div>
            </fieldset>
          </div>

          <textarea
            className={`mt-4 h-56 w-full p-4 text-sm sm:text-base md:text-lg leading-relaxed outline-none focus:ring-0 focus:outline-none resize-none overflow-auto whitespace-pre-wrap transition-colors duration-300 rounded-lg ${
              loading ? "text-gray-300" : "text-black"
            }`}
            placeholder="Enter text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-4 w-full">
            <div className="flex items-center gap-4 flex-wrap">
              <p className="font-quicksand text-sm text-slate-400 font-semibold">
                Word Count: {charCount}
              </p>
              <div className="hidden md:block  h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2 flex-wrap">
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
              className={`flex md:flex-row flex-col items-center justify-center font-nunito bg-black text-white hover:text-slate-500 hover:bg-black rounded-full md:rounded-md text-sm font-semibold cursor-pointer text-center w-9 h-9 md:w-auto md:px-6 md:py-2 md:ml-4 ml-2transition-all duration-300 ${
                loading
                  ? "bg-gray-500 text-black cursor-pointer"
                  : "bg-black text-white hover:text-slate-500 hover:bg-black cursor-pointer"
              }`}
            >
              <MdDocumentScanner className="md:mt-1 md:mr-2 block md:hidden" />
              <p className="hidden md:block">
                {loading ? "Scanning" : "Scan Content"}
              </p>
              <p className="block md:hidden">Scan</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
