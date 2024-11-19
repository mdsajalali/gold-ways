import Buy from "@/app/(dashboard)/dashboard/buy/page";
import Checkout from "@/app/(dashboard)/dashboard/checkout/page";
import Header from "@/components/core/Header";
import RecurringBuyTable from "@/components/core/RecurringBuyTable";
import React from "react";

const page = () => {
  return (
    <>
      <div className="p-4 md:hidden">
        <Header title="Payment Scheduling" />
      </div>
      {/* Buy */}
      <Buy />
      {/* Checkout */}
      <Checkout />
      {/* Recurring Buy */}
      <RecurringBuyTable />
    </>
  );
};

export default page;
