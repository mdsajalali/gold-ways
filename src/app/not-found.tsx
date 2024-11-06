import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-red-500">404</h1>
      <p className="mb-6 text-lg text-gray-700"> Page not found</p>
      <Link
        href="/"
        className="rounded-lg bg-yellow-300 px-6 py-2 text-[18px] text-black shadow-md outline-none duration-300 hover:bg-yellow-500 focus:outline-none"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
