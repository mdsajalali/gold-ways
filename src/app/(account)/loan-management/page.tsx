"use client";

import { useState } from "react";

export default function GoldLoans() {
  const [holdings, setHoldings] = useState(100); // Example holdings in grams
  const [loanEligibility, setLoanEligibility] = useState(0);
  const [emiSchedule, setEmiSchedule] = useState([
    { date: "2024-12-01", amount: 5000 },
    { date: "2025-01-01", amount: 5000 },
    { date: "2025-02-01", amount: 5000 },
    { date: "2025-03-01", amount: 5000 },
  ]);

  const loanRate = 0.6; // Loan eligibility: 60% of holdings' value
  const goldRatePerGram = 5000; // Example: 1 gram = 5000 Taka

  // Calculate loan eligibility
const calculateEligibility = () => {
  const loanableValue = holdings * goldRatePerGram * loanRate;
  setLoanEligibility(Number(loanableValue.toFixed(2)));
  };
  
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Eligibility Card */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Loan Eligibility
          </h2>
          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-700">
              Current Holdings:{" "}
              <span className="font-bold">{holdings} grams</span>
            </p>
            <p className="text-sm font-medium text-gray-700">
              Gold Rate:{" "}
              <span className="font-bold">{goldRatePerGram} Taka/gram</span>
            </p>
            <button
              onClick={calculateEligibility}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Calculate Loan Eligibility
            </button>
            {loanEligibility > 0 && (
              <div className="mt-4 text-gray-800">
                <p>
                  Loanable Amount:{" "}
                  <span className="font-bold text-green-600">
                    {loanEligibility} Taka
                  </span>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Repayment Schedule */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Repayment Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left text-sm font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="p-3 text-left text-sm font-semibold text-gray-700">
                    Amount (Taka)
                  </th>
                </tr>
              </thead>
              <tbody>
                {emiSchedule.map((emi, index) => (
                  <tr key={index} className="even:bg-gray-50">
                    <td className="p-3 text-sm text-gray-700">{emi.date}</td>
                    <td className="p-3 text-sm text-gray-700">
                      {emi.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
