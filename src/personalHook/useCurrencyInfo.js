// now we make our own hooks - hook is nothing but a function
import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setdata] = useState({}); // data we got from an api , which is in object format
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setdata(res[currency]));
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
