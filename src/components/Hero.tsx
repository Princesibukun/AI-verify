// import React from 'react'
import { FaBoltLightning, FaUpload, FaRegCircle } from "react-icons/fa6";
import { MdDocumentScanner } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-linear-65 from-purple-300 to-amber-200 md:h-[550px] h-[900px] w-full py-10">
        <h1 className="font-extrabold md:text-2xl text-md text-nowrap">
          Redefining Authenticity in the Age of AI
        </h1>
        <p className="font-bold mt-4 text-sm">
          AI text detection mode fast, easy, and reliable.
        </p>

        <div className="relative bg-white rounded-lg h-80 md:w-[750px] w-[510px] max-w-[100%] mx-96 mt-8 p-4">
          <textarea
            className="p2 outline-0 h-56 md:w-[490px] w-[300px] border-r border-r-gray-200"
            placeholder="Enter text"
          ></textarea>
          <div className="flex max-w-[100%]">
            <p className="text-sm font-semibold mt-2">0/10,000 Characters</p>
            <button
              className="flex md:flex-row flex-col items-center justify-center border border-green-400 font-nunito bg-white text-green-400 hover:text-white  hover:bg-green-400 
                           md:rounded-md rounded-full md:ml-4 ml-2 text-sm font-semibold cursor-pointer text-center w-9 h-9 md:w-auto md:px-2 md:py-2"
            >
              <FaBoltLightning className="md:mt-1 md:mr-2" />
              <p className="hidden md:block">Upgrade</p>
            </button>
            <button
              className="flex md:flex-row flex-col items-center justify-center font-nunito bg-white text-purple-700  hover:bg-purple-200 
                            md:rounded-md rounded-full md:ml-4 ml-2 text-sm border-1 md:border-0 font-semibold cursor-pointer text-center md:w-auto w-9 h-9 md:px-2 md:py-2"
            >
              <FaUpload className="md:mt-1 md:mr-2" />
              <p className="hidden md:block">Upload</p>
            </button>
            <button
              className="flex md:flex-row flex-col items-center justify-center font-nunito bg-purple-700 text-white hover:text-slate-500  hover:bg-purple-200 
                            md:rounded-md rounded-full md:ml-4 ml-2 text-sm font-semibold cursor-pointer text-center h-9 w-9 md:w-auto md:px-2 md:py-2"
            >
              <MdDocumentScanner className="md:mt-1 md:mr-2 block md:hidden" />
              <p className="hidden md:block">Scan Content</p>
            </button>
          </div>
          <div className="absolute grid grid-cols-2 gap-4 top-[90px] right-[20px] invisible md:visible">
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">Open AI</p>
            </div>
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">GPT Zero</p>
            </div>
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">Quillbot</p>
            </div>
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">Writer</p>
            </div>
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">Sapling</p>
            </div>
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">Copyleaks</p>
            </div>
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">Zero GPT</p>
            </div>
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">Grammarly</p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center bg-white rounded-lg h-80 md:w-[750px] w-[510px] max-w-[100%] mx-96 mt-8 p-4 md:invisible visible">
          <div className="absolute bottom-10 grid grid-cols-2 gap-5 gap-x-8 ">
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">Open AI</p>
            </div>
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">GPT Zero</p>
            </div>
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">Quillbot</p>
            </div>
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">Writer</p>
            </div>
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">Sapling</p>
            </div>
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">Copyleaks</p>
            </div>
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">Zero GPT</p>
            </div>
            <div className="flex">
              <FaRegCircle className="mt-0.5" />
              <p className="ml-2 text-sm">Grammarly</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
