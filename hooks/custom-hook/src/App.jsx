import "./App.css";
import { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import useCurrencyConverter from "./hook/useCurrencyConverter";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyData = useCurrencyConverter(from);

  const currencyOptions = Object.keys(currencyData || {});

  // Automatically recalc when data, amount, or selected currency changes
  useEffect(() => {
    if (currencyData && currencyData[to]) {
      setConvertedAmount((amount * currencyData[to]).toFixed(2));
    }
  }, [amount, to, currencyData]);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(0);
  };

  return (
    <div className="app-container">
      <h1>Currency Converter 💱</h1>

      <InputBox
        label="From"
        amount={amount}
        currencyOption={currencyOptions}
        onAmountChange={setAmount}
        onCurrencyChange={setFrom}
        selectCurrency={from}
      />

      <div className="swap-button">
        <button type="button" onClick={handleSwap}>
          ⇅ Swap
        </button>
      </div>

      <InputBox
        label="To"
        amount={convertedAmount}
        currencyOption={currencyOptions}
        onCurrencyChange={setTo}
        selectCurrency={to}
        amountDisable
      />
    </div>
  );
}

export default App;
