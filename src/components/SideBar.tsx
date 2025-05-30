//import React from 'react';

const SideBar = () => {
  return (
    <aside className="hidden md:block text-center  bg-white text-black border-r border-gray-300 shadow-lg container w-[256px] h-full p-4">
      <div className="p-6 text-lg font-semibold font-quicksand border-b border-gray-300">
        Dashboard
      </div>
      <nav className="mt-6 flex flex-col space-y-4 px-6 text-sm font-quicksand">
        <a href="/dashboard" className="active:text-[#D63C42] p-2 rounded">
          Home
        </a>
        <a href="#history" className="active:text-[#D63C42] p-2 rounded">
          History
        </a>
        <a
          href="/dashboard/credit"
          className="active:text-[#D63C42] p-2 rounded"
        >
          Credits
        </a>
        <a href="/dashboard/profile" className="active:text-[#D63C42] p-2 rounded">
          Profile
        </a>
      </nav>
    </aside>
  );
};
export default SideBar;
