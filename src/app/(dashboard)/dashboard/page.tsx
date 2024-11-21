import AccountProfile from "@/components/core/AccountProfile";
import Converter from "@/components/core/Converter";
import Header from "@/components/core/Header";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="px-4 md:flex md:items-center md:justify-between md:space-x-5">
        {/* Header */}
        <Header title="Welcome" />

        {/* Account Profile */}
        <div className="py-7">
          <AccountProfile />
        </div>
      </div>

      {/* Converter */}
      <Converter />

      {/* Stock Info */}
      <section className="rounded-lg bg-gradient-to-r from-white via-gray-100 to-gray-200 p-6 shadow-lg">
        {/* Offers Section */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-indigo-800">Offers</h2>
          <button className="text-blue-500 hover:underline">See all</button>
        </div>

        {/* Stock Cards */}
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-xl bg-white p-6 shadow-md transition-transform duration-300">
            <p className="text-lg font-bold text-yellow-500">22k 10gm Gold</p>
            <p className="text-2xl font-extrabold text-gray-900">৳7000</p>
            <p className="font-medium text-green-600">(-0.72%)</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md transition-transform duration-300">
            <p className="text-lg font-bold text-yellow-500">
              Traditional 10gm Gold
            </p>
            <p className="text-2xl font-extrabold text-gray-900">৳5000</p>
            <p className="font-medium text-green-600">(-0.72%)</p>
          </div>
        </div>

        {/* Market Price */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-indigo-800">
            Today Market Price (in GRAM)
          </h2>
          <p className="mt-4 text-sm font-medium text-gray-600">
            CADMIUM (HALLMARKED)
          </p>
          <hr className="my-4 border-gray-300" />

          {/* Market Price List */}
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
              className="my-6 flex flex-col items-center justify-center gap-6 rounded-xl border bg-white p-6 shadow-md transition-transform duration-300 md:flex-row md:items-start md:justify-between"
            >
              <div className="flex md:gap-6 gap-3">
                <p className="w-full text-[16px] text-center md:text-lg font-semibold text-yellow-500   sm:text-left">
                  {item.product}
                </p>
                
                <div className="flex gap-6">
                  <p className="w-full text-center text-lg font-bold text-gray-900 sm:w-1/3 sm:text-left">
                    {item.price}
                  </p>
                  <p className="w-full text-center text-lg font-medium text-green-600 sm:w-1/3 sm:text-left">
                    {item.value}
                  </p>
                </div>
              </div>
              <div className="mt-4 w-full sm:mt-0 sm:flex sm:w-auto sm:justify-end">
                <button className="flex w-full items-center justify-center space-x-3 text-lg font-medium text-blue-500 sm:space-x-8">
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
