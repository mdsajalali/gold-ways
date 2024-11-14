import AccountProfile from "@/components/core/AccountProfile";
import Converter from "@/components/core/Converter";
import { AlignJustify, Bell } from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="px-4 md:flex md:items-center md:justify-between md:space-x-5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-start space-x-5">
            <div className="pt-1.5">
              <h1 className="text-2xl font-bold text-gray-900">Welcome</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href="/notification">
              <Bell />
            </Link>
            <AlignJustify />
          </div>
        </div>

        {/* Account Profile */}
        <div className="py-7">
          <AccountProfile />
        </div>
      </div>

      {/* Converter */}
      <Converter />

      {/* Stock Info */}
      <section className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-zinc-950">Offers</h2>
          <button className="text-blue-400">See all</button>
        </div>

        {/* Stock Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-white p-4 shadow-md">
            <p className="text-md font-bold text-yellow-500">22k 10gm Gold</p>
            <p className="text-lg font-bold">৳7000</p>
            <p className="text-green-500">(-0.72%)</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-md">
            <p className="text-md font-bold text-yellow-500">
              Traditional 10gm Gold
            </p>
            <p className="text-lg font-bold">৳5000</p>
            <p className="text-green-500">(-0.72%)</p>
          </div>
        </div>

        {/* Market Price */}
        <div className="mt-4">
          <h2 className="text-lg font-medium text-zinc-950">
            Today Market Price (in GRAM)
          </h2>

          {/* <div className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
            <p className="text-lg">Product</p>
            <p className="text-lg">Price</p>
            <p className="text-lg">Value</p>
          </div> */}
          <br />
          <p className="text-sm">CADMIUM (HALLMARKED)</p>
          <hr />
          <br />
          {[
            { product: "22 KARAT Gold", price: "৳12,008", value: "+0.25%" },
            { product: "21 KARAT Gold", price: "৳11,463", value: "+0.25%" },
            { product: "18 KARAT Gold", price: "৳9,825", value: "+0.25%" },
            { product: "22 KARAT Silver", price: "৳180", value: "+0.25%" },
            { product: "21 KARAT Silver", price: "৳172", value: "+0.25%" },
            { product: "18 KARAT Silver", price: "৳147", value: "+0.25%" },
          ].map((item, index) => (
            <div
              key={index}
              className="my-5 flex flex-col items-center justify-center gap-4 rounded border bg-white px-4 py-3 md:flex-row md:items-start md:justify-between md:p-6"
            >
              <div className="flex gap-5">
                <p className="w-full text-center text-sm font-semibold text-yellow-500 sm:w-1/3 sm:text-left">
                  {item.product}
                </p>
                <div className="flex gap-5">
                  <p className="w-full text-center text-sm sm:w-1/3 sm:text-left">
                    {item.price}
                  </p>
                  <p className="w-full text-center text-sm text-green-500 sm:w-1/3 sm:text-left">
                    {item.value}
                  </p>
                </div>
              </div>

              <div className="mt-3 w-full sm:mt-0 sm:flex sm:w-auto sm:justify-end">
                <button className="mx-auto flex w-full items-center justify-center space-x-3 text-sm text-blue-400 sm:space-x-4">
                  <Link href={"/dashboard/buy"} className="hover:underline">
                    Buy
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link href={"/dashboard/sell"} className="hover:underline">
                    Sell
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link href={"/dashboard/gift"} className="hover:underline">
                    Gift
                  </Link>
                  <span className="text-gray-400">|</span>
                  <Link
                    href={"/dashboard/exchange"}
                    className="hover:underline"
                  >
                    Exchange
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
