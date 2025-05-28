import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import Frame from "../../assets/Images/Frame .png";
import Google from "../../assets/Images/Google.png";
import Apple from "../../assets/Images/Apple.png";
import { FaChevronRight } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showPass, setShowPass] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const togglePassVisibility = () => setShowPass(!showPass);

  const validatePassword = (password: string): boolean => {
    const hasNumber = /\d/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasSpecial = /[!@#$]/.test(password);
    const minLength = password.length >= 12;
    return hasNumber && hasUpper && hasLower && hasSpecial && minLength;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!validatePassword(newPassword)) {
      setError(
        "Password must contain numbers, uppercase and lowercase letters, special characters and be at least 12 characters."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://ai-verify-core.onrender.com/api/auth/reset-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newPassword, confirmPassword }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to reset password");
      } else {
        navigate("/login");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center m-auto mt-10 h-fit container max-w-[800px] font-quicksand">
      <div className="bg-white md:w-[600px] h-fit w-[343px] max-w-[100%] rounded-lg p-8 shadow-xl mt-20">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-2xl font-bold">Reset password</h1>
          <a
            href="/login"
            className="text-[#D63C42] text-sm font-semibold underline"
          >
            Back to login
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <p className="text-sm">New password</p>
            <div className="flex flex-row justify-between items-center border-2 border-gray-200 h-[44px] w-full rounded-md text-center mt-2">
              <input
                type={showPassword ? "text" : "password"}
                aria-label="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="h-[44px] w-full outline-0 p-4"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="cursor-pointer"
              >
                {showPassword ? (
                  <FaRegEye className="text-lg mr-2" />
                ) : (
                  <FaRegEyeSlash className="text-lg mr-2" />
                )}
              </span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm">Confirm password</p>
            <div className="flex flex-row justify-between items-center border-2 border-gray-200 h-[44px] w-full rounded-md text-center mt-2">
              <input
                type={showPass ? "text" : "password"}
                aria-label="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-[44px] w-full outline-0 p-4"
                required
              />
              <span onClick={togglePassVisibility} className="cursor-pointer">
                {showPass ? (
                  <FaRegEye className="text-lg mr-2" />
                ) : (
                  <FaRegEyeSlash className="text-lg mr-2" />
                )}
              </span>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex flex-row items-center">
              <FaRegCheckCircle className="mr-2 text-sm" />
              <p className="text-xs">Numbers</p>
            </div>
            <div className="flex flex-row items-center">
              <FaRegCheckCircle className="mr-2 text-sm" />
              <p className="text-xs">Minimum of 12 characters</p>
            </div>
            <div className="flex flex-row items-center">
              <FaRegCheckCircle className="mr-2 text-sm" />
              <p className="text-xs">Uppercase and lowercase letter</p>
            </div>
            <div className="flex flex-row items-center">
              <FaRegCheckCircle className="mr-2 text-sm" />
              <p className="text-xs">Special characters like !, @, #, $</p>
            </div>
          </div>

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#D63C42] hover:bg-[#FF897F] py-[10px] px-[24px] font-semibold text-white rounded-lg mt-3"
          >
            continue
          </button>
        </form>

        <div className="w-full mt-8">
          <img src={Frame} alt="frame" className="w-full" />
        </div>
        <div className="flex flex-row justify-between items-center w-full border cursor-pointer p-[10px] border-gray-200 rounded-lg mt-4">
          <img src={Google} alt="Google login" />
          <FaChevronRight />
        </div>
        <div className="flex flex-row justify-between items-center w-full p-[10px] border cursor-pointer border-gray-200 rounded-lg mt-4">
          <img src={Apple} alt="Apple login" />
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Reset;
