import Image from "next/image";
import React from "react";

const AccountProfile = () => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-md md:hidden">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">John Doe</h1>
          <h3 className="text-sm text-gray-600">
            Balance: <span className="font-medium text-indigo-600">$1200</span>
          </h3>
        </div>
        <div className="relative">
          <Image
            src="/user.png"
            alt="Profile"
            className="h-14 w-14 transform rounded-full border-2 border-indigo-600 shadow-md transition-all duration-300 hover:scale-105"
            width={56}
            height={56}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;
