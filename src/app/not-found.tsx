import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6"> Page not found</p>
      <Link
        href="/"
        className="px-6 text-[18px] outline-none py-2 duration-300 bg-yellow-300 text-black rounded-lg shadow-md hover:bg-yellow-500   focus:outline-none"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
