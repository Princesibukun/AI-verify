import Logo from "../assets/Images/Logo.png";
import verify from "../assets/Images/Verify.png";
import Profile from "../assets/Images/Profile.png";
import DropdownMenu from "./DropDownMenu";

const DashNav = () => {
  return (
    <div className="fixed top-0 md:px-10 px-4 py-4 flex flex-wrap items-center justify-between shadow-md w-full bg-white z-10 h-20">
      <a href="/" className="flex font-outfit text-nowrap items-center">
        <img
          className="md:text-2xl text-sm md:w-[200px] w-[129.2941131591797px] md:h-[40px] h-[28px] md:ml-2 ml-1"
          src={verify}
          alt="Logo"
        />
      </a>

      <div className="flex justify-between">
        <div className="flex items-center justify-between md:gap-[8px]">
          <a
            href="/view"
            className="flex items-center justify-center w-[112px] h-[20px] font-quicksand font-[600] bg-[#F4F6F7B2] text-white
                hover:text-white px-2 rounded-lg text-[14px] leading-[20px] tracking-[0.1] cursor-pointer ml-2 md:ml-10 text-nowrap"
          >
            <img
              className="h-[18px] sm:w-5 w-[18px] md:mr-1 m-0 hidden md:block"
              src={Logo}
              alt="logo"
            />
            <p className="text-[#072B43]">Pricing Plans</p>
          </a>
          <img
            src={Profile}
            alt="profile logo"
            className="w-[40px] h-[40px] cursor-pointer hidden md:block"
          />
          <DropdownMenu />
        </div>
      </div>
    </div>
  );
};

export default DashNav;
