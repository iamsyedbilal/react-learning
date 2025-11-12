import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyConverter from "./hook/useCurrencyConverter";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyData = useCurrencyConverter(from);
  const currencyOptions = Object.keys(currencyData || {});

  function convert() {
    if (!currencyData || !currencyData[to]) return;
    setConvertedAmount((amount * currencyData[to]).toFixed(2));
  }

  function handleSwap() {
    setFrom(to);
    setTo(from);
    setConvertedAmount(0);
  }

  return (
    <div className="app-container">
      <h1>Currency Converter 💱</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <InputBox
          label="From"
          amount={amount}
          selectCurrency={from}
          onCurrencyChange={setFrom}
          onAmountChange={setAmount}
          currencyOptions={currencyOptions}
        />

        <div className="swap-button">
          <button type="button" onClick={handleSwap}>
            ⇅ Swap
          </button>
        </div>

        <InputBox
          label="To"
          amount={convertedAmount}
          selectCurrency={to}
          onCurrencyChange={setTo}
          currencyOptions={currencyOptions}
          amountDisable
        />

        <button type="submit" className="convert-btn">
          Convert
        </button>
      </form>
    </div>
  );
}

export default App;
