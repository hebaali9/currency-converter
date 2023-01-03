import { useEffect, useState } from "react";
import "./currencyPage.css";
import { Currency, mockCurrencyAPI, Rates } from "./api/mockCurrencyAPI";

function CurrencyPage() {
  //to put the currencies inside option
  const [currencies, setCurrencies] = useState<Partial<Rates>>({});
  //for the from select to save the value the user select
  const [fromCurrency, setFromCurrency] = useState<Currency>("USD");
  //for the To select to save the value the user select
  const [toCurreny, setToCurreny] = useState<Currency>("EUR");
  //for the from input to save the value the user entered
  const [fromAmount, setFromAmount] = useState(0);
  //for the To input to save the value the user entered
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

  function handelAmountChange() {
    // setToAmount(
    //   (fromAmount * dolar / Object.values(data)[fromCurrency]
    // )
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
