"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const AccountNav = () => {
  const [isToggle, setIsToggle] = useState(true);
  const [isEnglish, setIsEnglish] = useState(true);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };
  return (
    <section className="flex items-center justify-between px-4 py-5 md:hidden">
      <h1 className="text-[18px] font-medium">My Account</h1>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 rounded-full bg-gray-200">
          {/* English Language Option */}
          <div
            className={`${
              isEnglish ? "bg-gray-400" : "bg-transparent"
            } cursor-pointer rounded-full px-4 py-2 transition-colors`}
            onClick={toggleLanguage}
          >
            <h2 className={`${isEnglish ? "text-white" : "text-gray-600"}`}>
              English
            </h2>
          </div>

          {/* বাংলা Language Option */}
          <div
            className={`${
              !isEnglish ? "bg-gray-400" : "bg-transparent"
            } cursor-pointer rounded-full px-4 py-2 transition-colors`}
            onClick={toggleLanguage}
          >
            <h2 className={`${!isEnglish ? "text-white" : "text-gray-600"}`}>
              বাংলা
            </h2>
          </div>
        </div>

        <div
          className="cursor-pointer rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={handleToggle}
        >
          {isToggle ? (
            <Moon className="text-xl text-gray-800 dark:text-gray-100" />
          ) : (
            <Sun className="text-xl text-yellow-500" />
          )}
        </div>
      </div>
    </section>
  );
};

export default AccountNav;
