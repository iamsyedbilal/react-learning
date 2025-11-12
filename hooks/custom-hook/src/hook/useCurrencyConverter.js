import { useEffect, useState } from "react";

function useCurrencyConverter(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchCurrency() {
      const res = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      );
      const result = await res.json();
      setData(result[currency]);
    }

    fetchCurrency();
  }, [currency]);

  return data;
}

export default useCurrencyConverter;
