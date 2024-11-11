"use client";
import { useState } from "react";
import ShadcnChart from "./ShadcnCharts";

const Converter = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="mx-auto w-full px-4 space-y-4">
      <div className="  text-sm text-gray-600">
        <p>
          Nov 11, 12:20 PM UTC ·{" "}
          <span className="cursor-pointer text-amber-500">Disclaimer</span>
        </p>
      </div>
      {/* Input Field */}
      <div className="gap-5 md:flex">
        <div className="flex-1">
          <input
            id="input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 md:py-[5px]"
          />
        </div>

        {/* Select Box */}
        <div className="flex-1 pt-2 sm:pt-0">
          <select
            id="select"
            value={selectedOption}
            onChange={handleSelectChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="bdt">BDT</option>
            <option value="gold">GOLD</option>
          </select>
        </div>
      </div>

      <div className="gap-5 md:flex">
        <div className="flex-1">
          <input
            id="input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 md:py-[5px]"
          />
        </div>

        {/* Select Box */}
        <div className="flex-1 pt-2 sm:pt-0">
          <select
            id="select"
            value={selectedOption}
            onChange={handleSelectChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="grams">In Grams</option>
          </select>
        </div>
      </div>

      <ShadcnChart />
    </div>
  );
};

export default Converter;
