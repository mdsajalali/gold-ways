"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ArrowLeftCircleIcon, BellAlertIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BuyDropdown } from "@/components/core/BuyDropdown";
import { useState } from "react";
import Image from "next/image";
import LivePrice from "@/components/core/LivePrice";

const assetName = "Digital GOLD";

const Gift = () => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");
  const [userId, setUserId] = useState("");
  const [otp, setOtp] = useState("");

  const assetType = "pursuit";
  const assetQuantity = 2434;

  const handleGift = () => {
    if (!userId || !otp) {
      console.log("Please provide both User ID and OTP.");
      return;
    }

    console.log("Gift details:", {
      assetName,
      assetType,
      quantity,
      userId,
      otp,
    });
    setQuantity(1);
    setPrice("");
    setUserId("");
    setOtp("");
  };

  return (
    <>
      {/* Stock Info */}
      <section className="container mx-auto p-4">
        <div className="mb-4 flex items-center justify-between">
          <Link href={"/dashboard"}>
            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-yellow-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              <ArrowLeftCircleIcon
                aria-hidden="true"
                className="-ml-0.5 h-5 w-5"
              />
              Back
            </button>
          </Link>

          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-yellow-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            <BellAlertIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 rounded-lg bg-white p-4 shadow-md">
          {/* Asset Image and Name */}
          <div className="flex items-center gap-x-4">
            <Image src="/user.png" width={50} height={50} alt="user" />
            <div>
              <p className="text-xl font-medium text-gray-800">{assetName}</p>
              <p className="text-sm text-gray-500">
                {assetQuantity}k, {assetType}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex flex-col items-center justify-between gap-2 py-2 sm:flex-row">
              <div className="flex w-full gap-x-4 sm:w-auto">
                <BuyDropdown />
              </div>
              <div className="w-full sm:w-auto">
                <Input
                  type="text"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="w-full text-right sm:w-auto sm:text-left">
                <Label>= 0.11123g</Label>
              </div>
            </div>
            {/* Live Price */}
            <LivePrice />

            {/* User ID and OTP input fields */}
            <div className="mt-4">
              <div className="mb-2">
                <Label htmlFor="userId">User ID</Label>
                <Input
                  id="userId"
                  type="text"
                  placeholder="Enter your User ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <Label htmlFor="otp">OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            </div>
            <Link href="/dashboard/checkout">
              <Button className="mt-4 w-full" onClick={handleGift}>
                Gift
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gift;
