import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";
import Frame from "../../assets/Images/Frame .png";
import Google from "../../assets/Images/Google.png";
import Apple from "../../assets/Images/Apple.png";
import { FaChevronRight } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showValidationErrors, setShowValidationErrors] = useState(false);

  const hasNumber = /\d/.test(password);
  const hasMinLength = password.length >= 12;
  const hasUpperAndLower = /[a-z]/.test(password) && /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$]/.test(password);

  const isPasswordValid =
    hasNumber && hasMinLength && hasUpperAndLower && hasSpecialChar;

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowValidationErrors(true);
    setError(null);

    if (!isPasswordValid) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://ai-verify-core.onrender.com/api/auth/init-signup",
        { email, password }
      );

      console.log("Signup successful:", response.data);
      navigate("/verify");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Signup failed. Try again.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center m-auto mt-10 h-fit container max-w-[800px] font-quicksand">
        <div className="bg-white md:w-[600px] w-[343px] max-w-[100%] rounded-lg p-8 shadow-xl">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl font-semibold">Sign up</h1>
            <a
              href="/login"
              className="text-[#D63C42] text-sm font-semibold underline"
            >
              I have an account
            </a>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mt-10">
              <p className="text-sm">Email address</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                className="border-2 border-gray-200 h-[44px] w-full rounded-md outline-0 mt-2 p-4"
              />
            </div>

            <div className="mt-4">
              <div className="flex flex-row justify-between items-center">
                <p className="text-sm">Password</p>
                <a
                  href="/reset"
                  className="text-[#D63C42] text-sm font-semibold"
                >
                  Forgot Password?
                </a>
              </div>

              <div className="flex flex-row justify-between items-center border-2 border-gray-200 h-[44px] w-full rounded-md text-center mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-label="Password"
                  className="h-[44px] w-full outline-0 p-4"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="cursor-pointer"
                >
                  {!showPassword ? (
                    <FaRegEyeSlash className="text-lg mr-2" />
                  ) : (
                    <FaRegEye className="text-lg mr-2" />
                  )}
                </span>
              </div>

              <div className="mt-4">
                <div
                  className={`flex flex-row items-center mb-2 ${
                    showValidationErrors && !hasNumber
                      ? "text-red-500"
                      : "text-gray-700"
                  }`}
                >
                  <FaRegCheckCircle className="mr-2 text-sm" />
                  <p className="text-xs">Numbers</p>
                </div>
                <div
                  className={`flex flex-row items-center mb-2 ${
                    showValidationErrors && !hasMinLength
                      ? "text-red-500"
                      : "text-gray-700"
                  }`}
                >
                  <FaRegCheckCircle className="mr-2 text-sm " />
                  <p className="text-xs">Minimum of 12 characters</p>
                </div>
                <div
                  className={`flex flex-row items-center mb-2 ${
                    showValidationErrors && !hasUpperAndLower
                      ? "text-red-500"
                      : "text-gray-700"
                  }`}
                >
                  <FaRegCheckCircle className="mr-2 text-sm" />
                  <p className="text-xs">Uppercase and lowercase letter</p>
                </div>
                <div
                  className={`flex flex-row items-center mb-2 ${
                    showValidationErrors && !hasSpecialChar
                      ? "text-red-500"
                      : "text-gray-700"
                  }`}
                >
                  <FaRegCheckCircle className="mr-2 text-sm" />
                  <p className="text-xs">Special characters like !, @, #, $</p>
                </div>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#D63C42] hover:bg-[#FF897F] text-white font-semibold rounded-lg py-2 mt-4"
            >
              Continue
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
    </div>
  );
};

export default SignUp;
