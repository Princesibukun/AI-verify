import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

import logo5 from "../assets/Images/logo5.png";

const DashFooter = () => {
  return (
    <footer className="bg-white py-10 px-4 w-full">
      <div className="bg-[#FFF8F7] max-w-6xl mx-auto rounded-xl px-8 py-10 flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        <div className="text-center md:text-left max-w-sm">
          <img src={logo5} alt="" className="h-[30px] w-[196px]" />
          <p className="text-gray-700 text-sm mt-2 font-quicksand">
            Lorem ipsum dolor sit amet consectetur.
            <br />
            Habitant cursus odio fringilla id tellus faucibus fermentum felis
            risus.
          </p>
        </div>

        <div className="flex flex-col md:items-end space-y-4">
          <div className="flex space-x-6 text-sm font-medium text-[#031B4E]">
            <a href="#" className="hover:underline">
              Pricing
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
          </div>

          <div className="flex space-x-4">
            <div className="bg-[#D63C42] text-white p-2 rounded-full w-[32px] h-[32px]">
              <FaFacebookF />
            </div>
            <div className="bg-[#D63C42] text-white p-2 rounded-full w-[32px] h-[32px]">
              <FaInstagram />
            </div>
            <div className="bg-[#D63C42] text-white p-2 rounded-full w-[32px] h-[32px]">
              <FaLinkedinIn />
            </div>
            <div className="bg-[#D63C42] text-white p-2 rounded-full w-[32px] h-[32px]">
              <FaTelegramPlane />
            </div>
            <div className="bg-[#D63C42] text-white p-2 rounded-full w-[32px] h-[32px]">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t mt-8 pt-4 text-center text-sm text-[#031B4E] flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-2">
          <p>
            {" "}
            &copy; {new Date().getFullYear()} AI Detector - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DashFooter;
