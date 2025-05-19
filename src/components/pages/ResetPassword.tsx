//import React from 'react'
import Frame from "../../assets/Images/Frame .png";
import Google from "../../assets/Images/Google.png";
import Apple from "../../assets/Images/Apple.png";
import { FaChevronRight } from "react-icons/fa6";

const ResetPassword = () => {
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

          <div className="mt-8">
            <p className="text-sm text-gray-500">Email address</p>
            <input
              type="text"
              className="border-2 border-purple-300 h-[44px] w-full rounded-md outline-0 mt-2 p-4"
            />
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

export default ResetPassword;
