import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./personalHook/useCurrencyInfo.js";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  //use of our hook
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  // console.log(options)
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]); // as to genrally set as inr
  };

  const swap = () => {
    setto(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
   <div
  className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat px-4 py-10"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}
>
  <div className="w-full max-w-md mx-auto">
    <div className="border border-white/20 rounded-2xl p-6 backdrop-blur-md bg-white/20 shadow-2xl space-y-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
        className="space-y-4"
      >
        {/* From Input */}
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          onAmountChange={(amount) => setAmount(amount)}
          selectedCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}
        />

        {/* Swap Button */}
        <div className="relative w-full h-10">
          <button
            type="button"
            onClick={swap}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border mt-5 border-white/30 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md shadow-md transition"
          >
            🔄 Swap
          </button>
        </div>

        {/* To Input */}
        <InputBox
          label="To"
          amount={convertedAmount}
          amountDisabled={true}
          currencyOptions={options}
          onCurrencyChange={(currency) => setto(currency)}
          onAmountChange={(amount) => setAmount(amount)}
          selectedCurrency={to}
        />

        {/* Convert Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-semibold tracking-wide shadow-lg transition"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  </div>
</div>

  );
}

export default App;
