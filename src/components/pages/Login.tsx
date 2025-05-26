import { useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaChevronRight } from "react-icons/fa6";
import Frame from "../../assets/Images/Frame .png";
import Google from "../../assets/Images/Google.png";
import Apple from "../../assets/Images/Apple.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://ai-verify-core.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log("Login successful:", response.data);
      setShowError(false);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setShowError(true);
    }
  };

  return (
    <div className="flex flex-col items-center m-auto mt-10 h-fit container max-w-[800px] font-quicksand">
      <div className="bg-white md:w-[600px] w-[343px] max-w-[100%] rounded-lg p-8">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-2xl font-semibold">Log In</h1>
          <a
            href="signup"
            className="text-[#D63C42] text-sm font-semibold underline"
          >
            I don't have an account
          </a>
        </div>

        <div className="mt-10">
          <p className="text-sm">Email address</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
            className="border-2 border-gray-200 h-[44px] w-full rounded-md outline-none mt-2 p-4 bg-transparent focus:outline-none focus:ring-0"
          />
        </div>

        <div className="mt-4">
          <div className="flex flex-row justify-between items-center">
            <p className="text-sm">Password</p>
            <a href="/reset" className="text-[#D63C42] text-sm font-semibold">
              Forgot Password?
            </a>
          </div>

          <div className="flex flex-row justify-between items-center border-2 border-gray-200 h-[44px] w-full rounded-md mt-2">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
              className="h-[44px] w-full outline-0 p-4"
            />
            <span onClick={togglePasswordVisibility} className="cursor-pointer">
              {showPassword ? (
                <FaRegEye className="text-lg mr-2" />
              ) : (
                <FaRegEyeSlash className="text-lg mr-2" />
              )}
            </span>
          </div>

          {showError && (
            <div className="bg-red-100 mt-2 mb-4 rounded-2xl p-4">
              <p className="text-red-800">
                Username or password is incorrect. Please retry with correct
                details or reset your password.
              </p>
            </div>
          )}
        </div>

        <button
          onClick={handleLogin}
          className="w-full flex flex-col items-center text-center bg-[#D63C42] hover:bg-[#FF897F] py-[10px] px-[24px] font-semibold text-white rounded-lg mt-4"
        >
          <p>Continue</p>
        </button>

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

export default Login;
