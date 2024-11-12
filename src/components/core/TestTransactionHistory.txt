"use client";
import { useState } from "react";
import { ArrowDownLeft, ChevronLeft } from "lucide-react";
import Link from "next/link";

const TransactionHistory = () => {
  const [selected, setSelected] = useState("last30");

  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <Link href="/account" className="rounded-full bg-gray-100 p-2">
          <ChevronLeft />
        </Link>
        <h1 className="text-[18px] font-medium">Loan Management</h1>
      </div>

      <div className="flex items-center gap-2 py-5">
        {/* Last 30 Days */}
        <div
          className={`cursor-pointer rounded-full border px-3 py-1 ${
            selected === "last30" ? "border-2 bg-gray-300 text-black" : "border"
          }`}
          onClick={() => setSelected("last30")}
        >
          <h1 className="text-[14px] font-medium">Last 30 Days</h1>
        </div>

        {/* Last 7 Days */}
        <div
          className={`cursor-pointer rounded-full border px-3 py-1 ${
            selected === "last7" ? "border-2 bg-gray-300 text-black" : "border"
          }`}
          onClick={() => setSelected("last7")}
        >
          <h1 className="text-[14px] font-medium">Last 7 Days</h1>
        </div>

        {/* Yesterday */}
        <div
          className={`cursor-pointer rounded-full border px-3 py-1 ${
            selected === "yesterday"
              ? "border-2 bg-gray-300 text-black"
              : "border"
          }`}
          onClick={() => setSelected("yesterday")}
        >
          <h1 className="text-[14px] font-medium">Yesterday</h1>
        </div>
      </div>
      <div>
        {/* Header Section */}
        <div className="my-5 flex items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-md">
          <h1 className="text-xl font-semibold text-gray-800">Transactions</h1>
          <span className="text-lg font-medium text-green-600">$12,001</span>
        </div>

        {/* Transaction List */}
        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Icon and Text */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                  <ArrowDownLeft size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">#00000007</h3>
                  <p className="text-sm text-gray-500">
                    Oct 29, 2024 . 5:33 PM
                  </p>
                </div>
              </div>
              {/* Amount */}
              <div className="text-lg font-semibold text-red-600">$100</div>
            </div>
          </div>
        </div>
        {/* Transaction List */}
        <div className="space-y-4 py-5">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Icon and Text */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                  <ArrowDownLeft size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">#00000007</h3>
                  <p className="text-sm text-gray-500">
                    Oct 29, 2024 . 5:33 PM
                  </p>
                </div>
              </div>
              {/* Amount */}
              <div className="text-lg font-semibold text-red-600">$100</div>
            </div>
          </div>
        </div>

        {/* Transaction List */}
        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Icon and Text */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                  <ArrowDownLeft size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">#00000007</h3>
                  <p className="text-sm text-gray-500">
                    Oct 29, 2024 . 5:33 PM
                  </p>
                </div>
              </div>
              {/* Amount */}
              <div className="text-lg font-semibold text-red-600">$100</div>
            </div>
          </div>
        </div>

        {/* Transaction List */}
        <div className="space-y-4 py-5">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Icon and Text */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                  <ArrowDownLeft size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">#00000007</h3>
                  <p className="text-sm text-gray-500">
                    Oct 29, 2024 . 5:33 PM
                  </p>
                </div>
              </div>
              {/* Amount */}
              <div className="text-lg font-semibold text-red-600">$100</div>
            </div>
          </div>
        </div>

        {/* Transaction List */}
        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Icon and Text */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                  <ArrowDownLeft size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">#00000007</h3>
                  <p className="text-sm text-gray-500">
                    Oct 29, 2024 . 5:33 PM
                  </p>
                </div>
              </div>
              {/* Amount */}
              <div className="text-lg font-semibold text-red-600">$100</div>
            </div>
          </div>
        </div>

        {/* Transaction List */}
        <div className="space-y-4 pb-20 pt-5">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Icon and Text */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                  <ArrowDownLeft size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">#00000007</h3>
                  <p className="text-sm text-gray-500">
                    Oct 29, 2024 . 5:33 PM
                  </p>
                </div>
              </div>
              {/* Amount */}
              <div className="text-lg font-semibold text-red-600">$100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
