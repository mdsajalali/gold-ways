"use client";

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import 'tailwindcss/tailwind.css';

// Register the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Explore = () => {
  const [currencyInput, setCurrencyInput] = useState('');
  const [metalInput, setMetalInput] = useState('');
  const [output, setOutput] = useState('');

  // Sample data for market overview graphs
  const sampleData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Gold Price',
        data: [50, 55, 60, 62, 68, 70],
        borderColor: '#FFD700',
        fill: false,
      },
      {
        label: 'Silver Price',
        data: [30, 32, 34, 36, 38, 40],
        borderColor: '#C0C0C0',
        fill: false,
      },
    ],
  };

  // Handle input change for exchange rate calculation
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    if (name === 'currencyInput') setCurrencyInput(value);
    else if (name === 'metalInput') setMetalInput(value);
  };

  const handleExchange = () => {
    // Mock calculation logic
    setOutput(`Converted ${currencyInput} to ${metalInput}`);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 dark:bg-neutral-900 dark:text-neutral-100">
      {/* Market Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Market Overview</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200 mb-2">Gold Price Trend</h3>
            <Line data={sampleData} />
          </div>
          <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-200 mb-2">Silver Price Trend</h3>
            <Line data={sampleData} />
          </div>
        </div>
      </section>

      {/* User Portfolio Graph */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Portfolio</h2>
        <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md">
          <Line data={sampleData} />
        </div>
      </section>

      {/* Exchange Rate Calculator */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Exchange Rate Calculator</h2>
        <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="currencyInput"
              value={currencyInput}
              onChange={handleInputChange}
              placeholder="Amount in BDT"
              className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-400"
            />
            <input
              type="text"
              name="metalInput"
              value={metalInput}
              onChange={handleInputChange}
              placeholder="Metal Type (e.g., Gold 22k)"
              className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-600 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-400"
            />
          </div>
          <button
            onClick={handleExchange}
            className="bg-blue-600 dark:bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
          >
            Calculate Exchange
          </button>
          {output && (
            <div className="mt-4 text-green-700 dark:text-green-500 font-semibold">
              {output}
            </div>
          )}
        </div>
      </section>

      {/* Alerts & Watchlist */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Alerts & Watchlist</h2>
        <div className="grid gap-4">
          <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md flex items-center justify-between">
            <span className="font-semibold">BDT to Dollar</span>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Set Alert
            </button>
          </div>
          <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md flex items-center justify-between">
            <span className="font-semibold">Gold 22k to Silver 18k</span>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Set Alert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
