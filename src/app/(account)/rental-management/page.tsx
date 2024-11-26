"use client";

import { useState } from "react";

export default function GoldRentals() {
  const [quantity, setQuantity] = useState("");
  const [estimatedEarnings, setEstimatedEarnings] = useState(0);

  const rentalRate = 0.02; // Example: 2% rental rate

const calculateEarnings = () => {
  if (!quantity || isNaN(Number(quantity))) return;
  setEstimatedEarnings(Number((Number(quantity) * rentalRate).toFixed(2)));
};

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Rental Calculator */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Rental Calculator
          </h2>
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Quantity (in grams)
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter gold quantity"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={calculateEarnings}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Calculate Earnings
            </button>
          </div>
          {quantity && (
            <div className="mt-4 text-gray-800">
              <p>
                Estimated Earnings:{" "}
                <span className="font-bold text-green-600">
                  {estimatedEarnings} (per month)
                </span>
              </p>
            </div>
          )}
        </section>

        {/* Active Rentals */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Active Rentals
          </h2>
          <div className="space-y-4">
            {/* Example Active Rentals */}
            <div className="border p-4 rounded-lg bg-gray-100">
              <p className="text-sm font-medium text-gray-700">
                Rental Amount: <span className="font-bold">50 grams</span>
              </p>
              <p className="text-sm font-medium text-gray-700">
                Monthly Income: <span className="font-bold text-green-600">
                  1.00
                </span>
              </p>
              <p className="text-sm font-medium text-gray-700">
                Rental Status:{" "}
                <span className="font-bold text-blue-600">Active</span>
              </p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-100">
              <p className="text-sm font-medium text-gray-700">
                Rental Amount: <span className="font-bold">20 grams</span>
              </p>
              <p className="text-sm font-medium text-gray-700">
                Monthly Income: <span className="font-bold text-green-600">
                  0.40
                </span>
              </p>
              <p className="text-sm font-medium text-gray-700">
                Rental Status:{" "}
                <span className="font-bold text-blue-600">Active</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
