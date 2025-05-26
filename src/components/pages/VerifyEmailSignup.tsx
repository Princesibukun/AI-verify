import { useEffect, useState } from "react";
import Frame from "../../assets/Images/Frame .png";
import Google from "../../assets/Images/Google.png";
import Apple from "../../assets/Images/Apple.png";
import { FaChevronRight } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [countdown, setCountdown] = useState(46);
  const [otp, setOtp] = useState("");
  const [isOtpValid, setIsOtpValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown === 0) return;
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  useEffect(() => {
    const verifyOtp = async () => {
      try {
        const response = await axios.post(
          "https://ai-verify-core.onrender.com/api/auth/verify-otp",
          { otp }
        );
        console.log("OTP verified:", response.data);
        setIsOtpValid(true);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.log(
            "OTP verification failed:",
            error.response?.data?.message || error.message
          );
        } else {
          console.log("An unexpected error occurred.");
        }
        setIsOtpValid(false);
      }
    };

    if (otp.length === 6) {
      verifyOtp();
    }
  }, [otp]);

  return (
    <div>
      <div className="flex flex-col items-center m-auto mt-10 h-fit container max-w-[800px] font-quicksand">
        <div className="bg-white md:w-[600px] w-[343px] h-fit max-w-[100%] rounded-lg p-8 shadow-xl">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl font-bold">Verify email</h1>
            <a
              href="/signup"
              className="text-[#D63C42] text-sm font-semibold underline"
            >
              Back to signup
            </a>
          </div>
          <p className="mt-4">
            Enter the verification code sent to{" "}
            <span className="font-bold">useremail@gmail.com.</span>
            <span className="font-semibold">
              {" "}
              This code expires in 15 minutes
            </span>
          </p>
          <div className="mt-10">
            <p className="text-sm text-gray-500">Verification code</p>
            <input
              type="text"
              aria-label="verification code"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border-2 border-gray-200 h-[44px] w-full rounded-md outline-0 mt-2 p-4"
            />
          </div>

          <p
            onClick={() => isOtpValid && navigate("/login")}
            className={`w-full flex flex-col items-center text-center py-[10px] px-[24px] font-semibold mt-10 ${
              isOtpValid ? "text-red-500 cursor-pointer" : "text-gray-400"
            }`}
          >
            {isOtpValid ? "Resend code" : ` {countdown}`}
          </p>

          <div className="w-full mt-8">
            <img src={Frame} alt="" className="w-full" />
          </div>
          <div className="flex flex-row justify-between items-center w-full border cursor-pointer p-[10px] border-gray-200 rounded-lg mt-4">
            <img src={Google} alt="" />
            <FaChevronRight />
          </div>
          <div className="flex flex-row justify-between items-center w-full p-[10px] border cursor-pointer border-gray-200 rounded-lg mt-4">
            <img src={Apple} alt="" />
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
