import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccountSettings = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = () => {
    // Handle password change logic here
    console.log("Password changed");
  };

  return (
    <div className="w-full h-[calc(100vh)] flex md:justify-center md:items-center">
      <div className="w-full md:w-1/3 mx-auto bg-white p-8 rounded-md shadow">
        <h2 className="text-lg md:text-2xl font-semibold mb-4">Change Password</h2>
        <div className="mb-4 text-sm: md:text-base">
          <label htmlFor="old-password" className="block text-gray-700">
            Old Password
          </label>
          <input
            id="old-password"
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  focus:outline-primaryBlue focus:border-primaryBlue sm:text-sm"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="mb-4 text-sm md:text-base">
          <label htmlFor="new-password" className="block text-gray-700">
            New Password
          </label>
          <input
            id="new-password"
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  focus:outline-primaryBlue focus:border-primaryBlue sm:text-sm"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-gray-700">
            Confirm New Password
          </label>
          <input
            id="confirm-password"
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  focus:outline-primaryBlue focus:border-primaryBlue sm:text-sm"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 text-xs md:text-sm">
          <button
            onClick={handlePasswordChange}
            className="w-full md:w-auto mt-4 bg-primaryBlue text-white py-2 px-3 rounded-md hover:bg-primaryBlue/90 focus:outline focus:ring-primaryBlue"
          >
            Update Password
          </button>

          <Link
            to="/account/dashboard"
            className="w-full md:w-auto mt-4 text-center border text-gray-700 py-2 px-3 rounded-md hover:bg-gray-200"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
