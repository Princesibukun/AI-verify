//import React from 'react'
import Frame from "../../assets/Images/Frame .png";
import Google from "../../assets/Images/Google.png";
import Apple from "../../assets/Images/Apple.png";
import { FaChevronRight } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await fetch(
        "https://ai-verify-core.onrender.com/api/auth/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong");
      }

      setMessage("Reset link sent. Please check your email.");
      setEmail("");

      navigate("/verifylog");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to send reset link.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center m-auto mt-10 h-fit container max-w-[800px] font-quicksand">
      <div className="bg-white md:w-[600px] h-fit w-[343px] max-w-[100%] rounded-lg p-8 shadow-xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">Reset password</h1>
          <a
            href="/login"
            className="text-[#D63C42] text-sm font-semibold underline"
          >
            Back to login
          </a>
        </div>
        <form onSubmit={handleResetPassword}>
          <div className="mt-8">
            <p className="text-sm text-gray-500">Email address</p>
            <input
              type="email"
              aria-label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-200 h-[44px] w-full rounded-md outline-0 mt-2 p-4"
              required
            />
          </div>
          {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full flex flex-col items-center text-center bg-[#D63C42] hover:bg-[#FF897F] py-[10px] px-[24px] font-semibold text-white rounded-lg mt-3"
            disabled={loading}
          >
            <p>Continue</p>
          </button>
        </form>

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
  );
};

export default ResetPassword;
