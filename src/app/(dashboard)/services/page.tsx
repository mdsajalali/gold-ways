"use client";

import GoldTrading from "@/components/core/GoldTrading";
import React, { useState } from "react";

interface Loan {
  amount: number;
  status: string;
  collateral: string;
  interestRate: number;
  repaymentSchedule: string;
}

interface Rental {
  name: string;
  income: number;
  rentalPrice: number;
  duration: number;
  terms: string;
}

interface Payment {
  type: string;
  date: string;
  recurring: boolean;
  reminder: boolean;
}

const Services: React.FC = () => {
  const [loanStatus, setLoanStatus] = useState<Loan[]>([]);
  const [rentedAssets, setRentedAssets] = useState<Rental[]>([]);
  const [paymentHistory, setPaymentHistory] = useState<Payment[]>([]);
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
  const [selectedRental, setSelectedRental] = useState<Rental | null>(null);
  const [paymentType, setPaymentType] = useState<string>("Loan");
  const [paymentDate, setPaymentDate] = useState<string>("");
  const [recurring, setRecurring] = useState<boolean>(false);
  const [reminder, setReminder] = useState<boolean>(false);

  const handleLoanDetails = (loan: Loan) => {
    setSelectedLoan(loan);
  };

  const handleRentalAgreement = (rental: Rental) => {
    setSelectedRental(rental);
  };

  const handleSchedulePayment = () => {
    const newPayment: Payment = {
      type: paymentType,
      date: paymentDate,
      recurring,
      reminder,
    };
    setPaymentHistory([...paymentHistory, newPayment]);
    // Reset form fields after scheduling
    setPaymentDate("");
    setRecurring(false);
    setReminder(false);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Gold Trading */}
      <GoldTrading />
      {/* Loan Management Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Loan Management
        </h2>

        {/* Loan Status Overview Screen */}
        <div className="mb-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <h3 className="mb-4 text-xl font-semibold">Loan Status Overview</h3>
          <ul className="space-y-2">
            {loanStatus.map((loan, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b py-2"
              >
                <span className="text-gray-900 dark:text-white">
                  {loan.amount} - Status: {loan.status}
                </span>
                <button
                  onClick={() => handleLoanDetails(loan)}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Loan Details Screen */}
        {selectedLoan && (
          <div className="mb-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold">Loan Details</h3>
            <p className="text-gray-900 dark:text-white">
              Loan Amount: {selectedLoan.amount}
            </p>
            <p className="text-gray-900 dark:text-white">
              Collateral: {selectedLoan.collateral}
            </p>
            <p className="text-gray-900 dark:text-white">
              Status: {selectedLoan.status}
            </p>
            <p className="text-gray-900 dark:text-white">
              Interest Rate: {selectedLoan.interestRate}
            </p>
            <p className="text-gray-900 dark:text-white">
              Repayment Schedule: {selectedLoan.repaymentSchedule}
            </p>
            <button
              onClick={() => setSelectedLoan(null)}
              className="mt-2 rounded-lg bg-red-600 px-4 py-2 text-white shadow-lg hover:bg-red-500"
            >
              Close
            </button>
          </div>
        )}
      </section>

      {/* Rental Management Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Rental Management
        </h2>

        {/* Rental Overview Screen */}
        <div className="mb-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <h3 className="mb-4 text-xl font-semibold">Rental Overview</h3>
          <ul className="space-y-2">
            {rentedAssets.map((rental, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b py-2"
              >
                <span className="text-gray-900 dark:text-white">
                  {rental.name} - Income: {rental.income}
                </span>
                <button
                  onClick={() => handleRentalAgreement(rental)}
                  className="text-blue-500 hover:underline"
                >
                  View Agreement
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Rental Agreement Screen */}
        {selectedRental && (
          <div className="mb-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold">Rental Agreement</h3>
            <p className="text-gray-900 dark:text-white">
              Asset: {selectedRental.name}
            </p>
            <p className="text-gray-900 dark:text-white">
              Rental Price: {selectedRental.rentalPrice}
            </p>
            <p className="text-gray-900 dark:text-white">
              Duration: {selectedRental.duration} days
            </p>
            <p className="text-gray-900 dark:text-white">
              Terms: {selectedRental.terms}
            </p>
            <button
              onClick={() => setSelectedRental(null)}
              className="mt-2 rounded-lg bg-red-600 px-4 py-2 text-white shadow-lg hover:bg-red-500"
            >
              Close
            </button>
          </div>
        )}
      </section>

      {/* Payment Scheduling Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Payment Scheduling
        </h2>

        {/* Payment Schedule Setup Screen */}
        <div className="mb-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <h3 className="mb-4 text-xl font-semibold">Payment Schedule Setup</h3>
          <select
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            className="mb-4 w-full rounded border p-2"
          >
            <option value="Loan">Loan</option>
            <option value="Asset Purchase">Asset Purchase</option>
          </select>
          <input
            type="date"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            className="mb-4 w-full rounded border p-2"
          />
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              checked={recurring}
              onChange={() => setRecurring(!recurring)}
              className="mr-2"
            />
            <label>Recurring Payment</label>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              checked={reminder}
              onChange={() => setReminder(!reminder)}
              className="mr-2"
            />
            <label>Set Reminder</label>
          </div>
          <button
            onClick={handleSchedulePayment}
            className="mt-2 rounded-lg bg-yellow-500 px-4 py-2 text-black shadow-lg duration-300 hover:bg-yellow-600"
          >
            Schedule Payment
          </button>
        </div>

        {/* Payment History Screen */}
        <div className="mb-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <h3 className="mb-4 text-xl font-semibold">Payment History</h3>
          <ul className="space-y-2">
            {paymentHistory.map((payment, index) => (
              <li key={index} className="border-b py-2">
                <span className="text-gray-900 dark:text-white">
                  {payment.type} - Date: {payment.date} - Recurring:{" "}
                  {payment.recurring ? "Yes" : "No"} - Reminder:{" "}
                  {payment.reminder ? "Yes" : "No"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;
