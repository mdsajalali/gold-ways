import React from "react";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  GiftIcon,
  RepeatIcon,
  PlusIcon,
  CalculatorIcon,
  TagIcon,
} from "lucide-react";
import ExchangeCalculator from "./ExchangeCalculator";
import TodaysMarketPrice from "./TodaysMarketPrice";
import ShadcnChart from "./core/ShadcnCharts";
const GoldWalletDashboard = () => {
  return (
    <div className="mb-20 min-h-screen bg-white px-2 py-4 font-sans text-[#333333]">
      {/* Profile Section */}
      <section className="mb-8 flex items-center justify-between rounded-md bg-neutral-50 p-4 shadow-md">
        <div className="mr-4 h-16 w-16 rounded-full bg-[#D3BA89]"></div>
        <div>
          <h1 className="text-2xl font-bold">Aakib Hasan</h1>
          <p className="text-sm text-gray-600">Gold Member</p>
        </div>
      </section>

      {/* Current Assets Section */}
      <section className="mb-8 rounded-lg bg-[#EDD7AE] p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Your Assets</h2>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-2xl font-bold">22 KARAT Gold</span>
          <span className="text-xl">10.5 gm</span>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-lg">Current Value</span>
          <span className="text-lg font-semibold">৳126,084</span>
        </div>
        <div className="text-sm text-green-600">+0.25% (৳315.21) Today</div>
      </section>

      {/* Quick Actions */}
      <section className="mb-8 grid grid-cols-2 gap-4">
        <button className="flex flex-col items-center rounded-lg bg-[#D3BA89] p-4 text-white shadow-md">
          <ArrowUpIcon className="mb-2 h-6 w-6" />
          <span>Buy</span>
        </button>
        <button className="flex flex-col items-center rounded-lg bg-[#D3BA89] p-4 text-white shadow-md">
          <ArrowDownIcon className="mb-2 h-6 w-6" />
          <span>Sell</span>
        </button>
        <button className="flex flex-col items-center rounded-lg bg-[#D3BA89] p-4 text-white shadow-md">
          <GiftIcon className="mb-2 h-6 w-6" />
          <span>Gift</span>
        </button>
        <button className="flex flex-col items-center rounded-lg bg-[#D3BA89] p-4 text-white shadow-md">
          <RepeatIcon className="mb-2 h-6 w-6" />
          <span>Exchange</span>
        </button>
      </section>

      {/* Exchange Rate Calculator */}
      <section className="mb-8 rounded-lg bg-[#EDD7AE] p-6 shadow-md">
        <h2 className="mb-4 flex items-center text-xl font-semibold">
          <CalculatorIcon className="mr-2 h-6 w-6" />
          Exchange Rate Calculator
        </h2>
        <ExchangeCalculator />
      </section>

      {/* Graph Section*/}
      <ShadcnChart />

      {/* Offers Section */}
      <section className="mb-8 rounded-lg bg-[#EDD7AE] p-6 shadow-md">
        <h2 className="mb-4 flex items-center text-xl font-semibold">
          <TagIcon className="mr-2 h-6 w-6" />
          Offers
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg bg-white p-4 shadow">
            <h3 className="font-semibold">Special Eid Offer</h3>
            <p className="text-sm">
              Get 1% extra on gold purchases above 10 grams
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow">
            <h3 className="font-semibold">Referral Bonus</h3>
            <p className="text-sm">Refer a friend and get ৳500 worth of gold</p>
          </div>
        </div>
      </section>

      {/* Today's Market Price */}
      <TodaysMarketPrice />
    </div>
  );
};

export default GoldWalletDashboard;
