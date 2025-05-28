//import React from 'react'
import Frame from "../../assets/Images/Frame .png";
import Google from "../../assets/Images/Google.png";
import Apple from "../../assets/Images/Apple.png";
import { FaChevronRight } from "react-icons/fa6";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmailLogin = () => {
  const [countdown, setCountdown] = useState(46);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown === 0) {
      navigate("/login");
      return;
    }

    const timerId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [countdown, navigate]);


  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
      setError(null);
    }
  };

  const verifyOtp = useCallback(async (otpCode: string) => {
    setError(null);
    try {
      const response = await fetch("https://ai-verify-core.onrender.com/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: otpCode }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        navigate("/login");
      } else {
        setError(data.message || "Invalid OTP. Please try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    }
  }, [navigate]);


  useEffect(() => {
    if (otp.length === 6) {
      verifyOtp(otp);
    }
  }, [otp, verifyOtp]);


  return (
    <div>
      <div className="flex flex-col items-center m-auto mt-10 h-fit container max-w-[800px] font-quicksand">
        <div className="bg-white md:w-[600px] w-[343px] h-fit max-w-[100%] rounded-lg p-8 shadow-xl">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl font-bold">Verify email</h1>
            <a
              href="/login"
              className="text-[#D63C42] text-sm font-semibold underline"
            >
              Back to login
            </a>
          </div>
          <p className="mt-4">
            Enter the verification code sent to{" "}
            <span className="font-bold">useremail@gmail.com.</span>
            <span className="font-semibold">
              This code expires in 15 minutes
            </span>
          </p>
          <div className="mt-10">
            <p className="text-sm text-gray-500">Verification code</p>
            <input
              type="text"
              aria-label="verification"
              className="border-2 border-gray-200 h-[44px] w-full rounded-md outline-0 mt-2 p-4"
              value={otp}
              onChange={handleOtpChange}
              maxLength={6}
              inputMode="numeric"
              pattern="[0-9]*"
            />
            {error && (
              <p className="text-red-500 text-sm mt-2">
                {error}
              </p>
            )}
          </div>

          <p
            className="w-full flex flex-col
                     items-center text-center
                     py-[10px] px-[24px]
                     font-semibold mt-10 text-gray-400"
          >
            Resend code in 46s
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

export default VerifyEmailLogin;
