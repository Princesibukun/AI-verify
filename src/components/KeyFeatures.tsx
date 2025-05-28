// import React from 'react'
import { FaBoltLightning } from "react-icons/fa6";
import { FaCloudArrowUp } from "react-icons/fa6";
import { BiSolidLock } from "react-icons/bi";
import { TbCoinFilled } from "react-icons/tb";

const KeyFeatures = () => {
  return (
    <>
      <div className="flex flex-col items-center m-auto mt-24 h-fit container max-w-[1000px] font-quicksand">
        <div className="border border-gray-300 rounded-full p-1 px-2 font-semibold text-sm w-fit">
          Key Features
        </div>
        <h1 className="font-semibold text-4xl mt-2 text-center">
          What You Get Using AI Verify
        </h1>
        <div className="flex md:flex-row flex-col items-center justify-between mt-10 w-full gap-5">
          <div className="bg-white h-[224px] w-[300px] max-w-[100%] rounded-lg border border-purple-200 p-4 flex flex-col items-center">
            <FaBoltLightning className="text-3xl text-orange-700" />
            <h6 className="text-sm font-semibold mt-4">
              Fast,accurate detection
            </h6>
            <p className="text-sm mt-4 text-center">
              Quickly analyze content with reliable, research-grade precision.
            </p>
          </div>
          <div className="bg-white h-[224px] w-[300px] max-w-[100%] rounded-lg border border-purple-200 p-4 flex flex-col items-center">
            <FaCloudArrowUp className="text-3xl  text-orange-700" />
            <h6 className="text-sm font-semibold mt-4 text-center">
              Upload support for .txt and .docx
            </h6>
            <p className="text-sm mt-4 text-center">
              Easily upload documents for streamlined analysis.
            </p>
          </div>
          <div className="bg-white h-[224px] w-[300px] max-w-[100%] rounded-lg border border-purple-200 p-4 flex flex-col items-center">
            <BiSolidLock className="text-3xl  text-orange-700" />
            <h6 className="text-sm font-semibold mt-4">
              Private and secure by design
            </h6>
            <p className="text-sm mt-4 text-center">
              Your text stays confidential - we never store or share your data.
            </p>
          </div>
          <div className="bg-white h-[224px] w-[300px] max-w-[100%] rounded-lg border border-purple-200 p-4 flex flex-col items-center">
            <TbCoinFilled className="text-3xl  text-orange-700" />
            <h6 className="text-sm font-semibold mt-4">
              Flexible, transparent pricing
            </h6>
            <p className="text-sm mt-4 text-center">
              Only pay for what you need, with clear usage-based billing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
