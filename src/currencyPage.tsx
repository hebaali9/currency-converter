import { useEffect, useState } from "react";
import "./currencyPage.css";
import { Currency, mockCurrencyAPI, Rates } from "./api/mockCurrencyAPI";

function CurrencyPage() {
  const [currencies, setCurrencies] = useState<Partial<Rates>>({});
  const [fromCurrency, setFromCurrency] = useState<Currency>("USD");
  const [toCurreny, setToCurreny] = useState<Currency>("EUR");
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  useEffect(() => {
    mockCurrencyAPI().then((data: any) => {
      setCurrencies(data);
    });
  }, []);

  function handelSubmit(e: React.FormEvent) {
    e.preventDefault();
    // convert fromAmount to $
    setToAmount(
      (fromAmount * currencies[fromCurrency]!) / currencies[toCurreny]!
    );
  }

  return (
    <>
      <br></br>
      <form onSubmit={handelSubmit}>
        <input
          type="number"
          value={fromAmount}
          onChange={(e) => setFromAmount(Number(e.target.value))}
        ></input>

        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value as Currency)}
        >
          {Object.keys(currencies).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <h2>=</h2>
        <input
          type="number"
          value={toAmount}
          onChange={(e) => setToAmount(Number(e.target.value))}
        ></input>
        <select
          value={toCurreny}
          onChange={(e) => setToCurreny(e.target.value as Currency)}
        >
          {Object.keys(currencies).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <br />
        <button className="currenct-butt">convert mouny </button>
      </form>
      <h1>Amount</h1>
    </>
  );
}

export default CurrencyPage;
