import React from "react";
import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const id = useId();

  return (
    <div className="bg-white/70 backdrop-blur-md p-5 rounded-xl shadow-md flex items-end gap-4 text-sm transition-all duration-300">
      {/* Amount Input */}
      <div className="w-1/2">
        <label htmlFor={id} className="text-gray-600 font-medium block mb-1">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 font-semibold bg-white shadow-sm"
          placeholder="Enter amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>

      {/* Currency Dropdown */}
      <div className="w-1/2 text-right">
        <label className="text-gray-600 font-medium block mb-1">
          Currency
        </label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none bg-white text-gray-800 font-semibold shadow-sm cursor-pointer focus:ring-2 focus:ring-blue-400"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
