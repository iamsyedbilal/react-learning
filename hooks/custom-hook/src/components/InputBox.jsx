import "../App.css";

function InputBox({
  label,
  className,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "usd",
  currencyOptions = [],
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div className={`input-box ${className || ""}`}>
      <div>
        <label htmlFor="">{label}</label>
        <input
          type="number"
          placeholder="Enter Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div>
        <p>Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.length > 0 ? (
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))
          ) : (
            <option>Loading...</option>
          )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
