import Image from "next/image";
import Link from "next/link";
import React from "react";

const AccountProfile = () => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-md md:hidden">
        <div className="relative">
          <Image
            src="/user.png"
            alt="Profile"
            className="h-14 w-14 transform rounded-full border-2 border-indigo-600 shadow-md transition-all duration-300 hover:scale-105"
            width={56}
            height={56}
          />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-800">John Doe</h1>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
        <div className="mt-4 rounded-lg bg-white p-4 shadow-md">
          <div className="my-2 flex items-center justify-between rounded-lg bg-zinc-50 p-4">
            <p className="text-sm text-amber-500">
              <span className="font-medium text-black">24k</span> Gold
            </p>
            <p className="text-lg font-bold">2 Gram</p>
          </div>
          <div className="my-2 flex items-center justify-between rounded-lg bg-zinc-50 p-4">
            <p className="text-sm text-amber-500">
              <span className="font-medium text-black">18k</span> Gold
            </p>
            <p className="text-lg font-bold">2 Gram</p>
          </div>
          <p className="flex items-center gap-2 text-lg font-medium text-zinc-950">
            Your total balance : ৳5000
            <Link href="/market-rate">
              <svg width="16" height="16" fill="currentColor">
                <path d="M9 11a1 1 0 11-2 0 1 1 0 012 0zM10.443 4.8A2.3 2.3 0 007.3 3.96L5.136 5.21l.8 1.385L8.1 5.345a.7.7 0 01.7 1.212l-2.165 1.25.8 1.386L9.6 7.943a2.3 2.3 0 00.842-3.142z"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-1.6A6.4 6.4 0 108 1.6a6.4 6.4 0 000 12.8z"
                ></path>
              </svg>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;
