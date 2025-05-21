import Logo from "../assets/Images/Logo.png";
import logo4 from "../assets/Images/logo4.png";
import Profile from "../assets/Images/Profile.png";

const DashNav = () => {
  return (
    <>
      <div className="md:px-10 px-4 py-4 flex flex-wrap items-center justify-between shadow-2xl w-full bg-white z-10">
        <a href="/" className="flex font-outfit text-nowrap items-center">
          <img
            className="md:text-2xl text-sm md:w-full w-[129.2941131591797px] md:h-10 h-[28px] md:ml-2 ml-1"
            src={logo4}
            alt="Logo"
          />
        </a>

        <div className="flex justify-between">
          <div className="flex items-center justify-between gap-[8px]">
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
              className="w-[40px] h-[40px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashNav;
