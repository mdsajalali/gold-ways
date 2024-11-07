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
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-5"
      style={{ backgroundImage: "url('/images/login_banner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="relative z-10 mx-auto w-full rounded-lg bg-white/40 p-6 shadow-md md:w-1/2 lg:w-1/3">
        <h1 className="mb-4 text-center text-2xl font-bold">Login</h1>
        <form className="flex flex-col">
          <input
            type="number"
            name="phone"
            className="mt-4 w-full rounded-md border-transparent bg-gray-100 px-4 py-3 text-sm outline-none focus:border-gray-500 focus:bg-white focus:ring-0"
            placeholder="Phone Number"
          />
          <div className="relative mt-4">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full rounded-md border-transparent bg-gray-100 px-4 py-3 text-sm outline-none focus:border-gray-500 focus:bg-white focus:ring-0"
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
          <Link href={"/dashboard"}>
            <button
              type="submit"
              className="mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-md border border-transparent bg-black px-4 py-3 text-base font-medium leading-6 text-amber-100 duration-300 hover:bg-yellow-500 hover:text-black"
            >
              Login
            </button>
          </Link>
          <div className="mt-5 flex flex-col items-center">
            <p className="mt-1 text-xs font-light">
              New to Here?
              <Link
                href={"/registration"}
                className="ml-1 font-medium text-black hover:underline"
              >
                Sign up now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
