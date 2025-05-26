import { useState, useRef, useEffect } from "react";
import profile from "../assets/Images/Profile.png";
import { AiOutlineHome } from "react-icons/ai";
import { GrHistory } from "react-icons/gr";
import Logo from "../assets/Images/Logo.png";
import { RiUser3Line } from "react-icons/ri";

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left md:hidden" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-200 transition"
        aria-label="Open dropdown menu"
      >
        <img
          src={profile}
          alt="profile logo"
          className="w-[40px] h-[40px] cursor-pointer"
        />
      </button>

      <div
        className={`absolute -right-3 mt-4 w-48 text-center bg-white border border-gray-200 rounded-md shadow-lg z-50 transform transition-all duration-200 origin-top-right p-4 ${
          isOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-6 text-lg font-semibold font-quicksand border-b border-gray-300">
          Dashboard
        </div>
        <nav className="mt-6 flex flex-col space-y-4 px-6 text-sm font-quicksand">
          <a
            href="/dashboard"
            className="flex items-center active:text-[#D63C42] p-2 rounded"
          >
            <AiOutlineHome className="mr-2 w-[18px] h-[18px]" /> <p> Home</p>
          </a>
          <a
            href="#history"
            className="flex items-center active:text-[#D63C42] p-2 rounded"
          >
            <GrHistory className="mr-2 w-[18px] h-[18px]" /> <p>History</p>
          </a>
          <a
            href="#credits"
            className="flex items-center active:text-[#D63C42] p-2 rounded"
          >
            <img className="mr-2 h-[19px] w-[19px]" src={Logo} alt="logo" />
            <p>Credits</p>
          </a>
          <a
            href="#profile"
            className="flex items-center active:text-[#D63C42] p-2 rounded"
          >
            <RiUser3Line className="mr-2 w-[18px] h-[18px]" />
            <p>Profile</p>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default DropdownMenu;
