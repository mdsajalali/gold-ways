"use client";

import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

export default function UploadFile() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-black/95 px-5">
        <div className="mx-auto w-full rounded-lg bg-white p-6 shadow-md md:w-1/2 lg:w-1/3">
          <h1 className="mb-4 text-center text-2xl font-bold">
            Upload your Id Proof
          </h1>

          <form className="flex w-full flex-col space-y-6">
            <div>
              <div className="flex w-full items-center justify-center">
                <label
                  htmlFor="dropzone-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>

            <Link
              href={"/pin"}
              className={`${buttonVariants({
                variant: "default",
              })} duration-300 hover:bg-yellow-500 hover:text-black`}
            >
              Continue
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
