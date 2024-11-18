import Link from "next/link";

export default function Page() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-5">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="relative z-10 mx-auto w-full rounded-lg bg-white/40 p-6 shadow-md md:w-1/2 lg:w-1/3">
        <h1 className="mb-4 text-center text-2xl font-bold">Forgot password</h1>
        <p className="text-center text-[14px]">
          Enter the email associated with your account to reset <br /> your
          password.
        </p>
        <form className="flex flex-col">
          <input
            type="email"
            name="email"
            className="mt-4 w-full rounded-md border-transparent bg-gray-100 px-4 py-3 text-sm outline-none focus:border-gray-500 focus:bg-white focus:ring-0"
            placeholder="Email"
          />

          <Link href={"/dashboard"}>
            <button
              type="submit"
              className="mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-md border border-transparent bg-black px-4 py-3 text-base font-medium leading-6 text-amber-100 duration-300 hover:bg-yellow-500 hover:text-black"
            >
              Continue
            </button>
          </Link>
          <div className="mt-5 flex flex-col items-center">
            <Link
              href={"/support-contact"}
              className="ml-1 text-[14px] font-medium text-black  underline"
            >
              Contact customer support
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
