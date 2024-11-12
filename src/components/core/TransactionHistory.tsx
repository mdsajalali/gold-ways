"use client";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
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
    </div>
  );
};

export default TransactionHistory;
