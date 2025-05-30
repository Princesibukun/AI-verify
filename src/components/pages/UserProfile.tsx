//import React from 'react'
import Name from "../../assets/Images/name.png";
import Profile from "../../assets/Images/Profile.png";
import Mark from "../../assets/Images/Mark.png";
import pen from "../../assets/Images/pen.png";
import { BiLockAlt } from "react-icons/bi";

const UserProfile = () => {
  return (
    <div>
      <div className="mt-14 px-16">
        <img src={Name} alt="" className="h-8" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={Profile} alt="" />
        <div className="mt-2 text-center">
          <h2 className="text-3xl">Peter Divine</h2>
          <p className="mt-1">peterdivine@gmail.com</p>
        </div>
        <div className="border-2 border-gray-200 rounded-2xl p-8 w-full max-w-3xl mx-auto space-y-5 mt-10 mb-25">
          <div className="flex items-center flex-wrap gap-22">
            {/* Verified Email */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium">Verified Email</p>
                <img src={Mark} alt="verified" className="w-4 h-4" />
              </div>
              <p className="text-gray-400">peterdivine@gmail.com</p>
            </div>

            {/* Edit Icon */}
            <div>
              <img src={pen} alt="edit" className="w-5 h-5 mt-7" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Password</p>
              <div className="flex items-center gap-2">
                <BiLockAlt className="text-red-500" />
                <a href="#" className="border-b-2 border-red-500 text-red-500 hover:text-red-700">
                  Change password
                </a>
              </div>
            </div>
          </div>
          {/* Delete Button */}
            <div className="flex justify-center">
              <button className="bg-gray-100 w-40 hover:bg-gray-100 text-black mt-2 py-2 px-4 rounded-lg  transition duration-300">
                Delete Account
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;