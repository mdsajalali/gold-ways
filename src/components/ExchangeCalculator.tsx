"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ExchangeCalculator() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("BDT");
  const [grams, setGrams] = useState("");
  const [result, setResult] = useState("");

  const currencies = [
    { value: "BDT", label: "BDT" },
    { value: "USD", label: "USD" },
  ];

  const handleExchange = () => {
    // This is a placeholder calculation. Replace with actual exchange rate logic.
    const exchangeRate = currency === "BDT" ? 12008 : 140; // Assuming 1g = 12008 BDT or 140 USD
    const calculatedResult =
      parseFloat(amount) / (parseFloat(grams) * exchangeRate);
    setResult(calculatedResult.toFixed(2));
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="amount" className="text-sm font-medium">
          Amount
        </label>
        <Input
          id="amount"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border-[#D3BA89]"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="currency" className="text-sm font-medium">
          Currency
        </label>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger id="currency" className="border-[#D3BA89]">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            {currencies.map((curr) => (
              <SelectItem key={curr.value} value={curr.value}>
                {curr.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="grams" className="text-sm font-medium">
          Grams
        </label>
        <Input
          id="grams"
          type="number"
          placeholder="Enter grams"
          value={grams}
          onChange={(e) => setGrams(e.target.value)}
          className="border-[#D3BA89]"
        />
      </div>

      <Button
        onClick={handleExchange}
        className="w-full bg-[#D3BA89] text-white hover:bg-[#C1A677]"
      >
        Exchange
      </Button>

      <div className="space-y-2">
        <label htmlFor="result" className="text-sm font-medium">
          Total Price
        </label>
        <Input
          id="result"
          type="text"
          value={result}
          readOnly
          className="border-[#D3BA89] bg-gray-100"
        />
      </div>
    </div>
  );
}
