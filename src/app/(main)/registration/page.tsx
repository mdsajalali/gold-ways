"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div
      className="relative px-5 flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/login_banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="relative z-10 w-full md:w-1/2 lg:w-1/3 mx-auto bg-white/40 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Registration</h1>
        <form className="flex flex-col">
          <input
            type="text"
            name="text"
            className="px-4 py-3 w-full mt-4 outline-none rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Enter Your Name"
          />
          <input
            type="number"
            name="phone"
            className="px-4 py-3 w-full mt-4 outline-none rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Phone Number"
          />
          <div className="relative mt-4">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="px-4 py-3 w-full outline-none rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-500" />
              ) : (
                <Eye className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          <Link href={"/registration"}>
            <button
              type="submit"
              className="mt-4 hover:bg-yellow-500 hover:text-black px-4 py-3 leading-6 text-base rounded-md border border-transparent bg-black text-amber-100  duration-300 focus:ring-2 focus:ring-black focus:ring-offset-2 cursor-pointer inline-flex w-full justify-center items-center font-medium focus:outline-none"
            >
              Registration
            </button>
          </Link>
          <div className="flex flex-col items-center mt-5">
            <p className="mt-1 text-xs font-light">
              Already have an account?
              <Link
                href={"/login"}
                className="ml-1 font-medium hover:underline text-black"
              >
                Login now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
