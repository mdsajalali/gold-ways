import ShadcnChart from "@/components/core/ShadcnCharts";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="px-4 md:flex md:items-center md:justify-between md:space-x-5">
        <div className="flex items-start space-x-5">
          <div className="flex-shrink-0">
            <div className="relative">
              <Image src="/user.png" width={50} height={50} alt="user" />
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full shadow-inner"
              />
            </div>
          </div>

          <div className="pt-1.5">
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome, Tech Sand
            </h1>
            <p className="text-sm font-medium text-gray-500">
              something is there
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse py-10 sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
          <div className="mt-4 rounded-lg bg-white p-4 shadow-md">
            <p className="text-lg font-medium text-zinc-950">
              Your total balance
            </p>
            <div className="my-2 flex items-center justify-between rounded-lg bg-zinc-50 p-4">
              <p className="text-sm text-amber-500">
                <span className="font-medium text-black">24k</span> Gold
              </p>
              <p className="text-lg font-bold">৳800</p>
            </div>
            <div className="my-2 flex items-center justify-between rounded-lg bg-zinc-50 p-4">
              <p className="text-sm text-amber-500">
                <span className="font-medium text-black">18k</span> Gold
              </p>
              <p className="text-lg font-bold">৳600</p>
            </div>
          </div>
        </div>
      </div>

      <ShadcnChart />

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
              className="my-5 flex flex-col items-center justify-center gap-4 rounded bg-white px-4 py-3 shadow-md md:flex-row md:items-start md:justify-between md:p-6"
            >
              <p className="w-full text-center text-sm font-semibold text-yellow-500 sm:w-1/3 sm:text-left">
                {item.product}
              </p>
              <p className="w-full text-center text-sm sm:w-1/3 sm:text-left">
                {item.price}
              </p>
              <p className="w-full text-center text-sm text-green-500 sm:w-1/3 sm:text-left">
                {item.value}
              </p>

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

          <br />
          <p className="text-sm">(NO HALLMARKED)</p>
          <hr />
          <br />
          {[
            { product: "TRADITIONAL Gold", price: "৳8,069", value: "+0.25%" },
            { product: "TRADITIONAL Silver", price: "৳110", value: "+0.25%" },
          ].map((item, index) => (
            <div
              key={index}
              className="my-5 flex flex-col items-center justify-center gap-4 rounded bg-white p-3 shadow-md md:flex-row md:items-start md:justify-between md:p-4"
            >
              <p className="w-full text-center text-sm font-semibold text-yellow-500 sm:w-1/3 sm:text-left">
                {item.product}
              </p>
              <p className="w-full text-center text-sm sm:w-1/3 sm:text-left">
                {item.price}
              </p>
              <p className="w-full text-center text-sm text-green-500 sm:w-1/3 sm:text-left">
                {item.value}
              </p>

              <div className="mt-3 w-full sm:mt-0 sm:flex sm:w-auto sm:justify-end">
                <button className="flex w-full mx-auto sm:pb-0 pb-10 items-center justify-center space-x-3 text-sm text-blue-400 sm:space-x-4">
                  <span className="hover:underline">Buy</span>
                  <span className="text-gray-400">|</span>
                  <span className="hover:underline">Sell</span>
                  <span className="text-gray-400">|</span>
                  <span className="hover:underline">Gift</span>
                  <span className="text-gray-400">|</span>
                  <span className="hover:underline">Exchange</span>
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
