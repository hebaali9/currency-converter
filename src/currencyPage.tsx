import { useEffect, useState } from "react";
import "./currencyPage.css";
import { Currency, mockCurrencyAPI, Rates } from "./api/mockCurrencyAPI";
import { Input, Select } from "antd";

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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const numValue = Number(e.target.value);
    setFromAmount(numValue);
    setToAmount(
      (fromAmount * currencies[fromCurrency]!) / currencies[toCurreny]!
    );
  }

  return (
    <>
      <br></br>
      <form>
        <Input
          className="antd-input"
          type="number"
          value={fromAmount.toString()}
          onChange={handleChange}
          //onChange={(e) => setFromAmount(Number(e.target.value))}
        ></Input>

        <Select
          value={fromCurrency}
          // @ts-ignore
          onChange={(e) => setFromCurrency(e.target.value as Currency)}
        >
          {Object.keys(currencies).map((currency) => (
            <Select.Option key={currency} value={currency}>
              {currency}
            </Select.Option>
          ))}
        </Select>

        <h2>=</h2>

        <Input
          className="antd-input"
          type="number"
          value={Math.floor(toAmount)}
          onChange={(e) => setToAmount(Number(e.target.value))}
        ></Input>

        <Select
          className="antd-select "
          value={toCurreny}
          // @ts-ignore
          onChange={(e) => setToCurreny(e.target.value as Currency)}
        >
          {Object.keys(currencies).map((currency) => (
            <Select.Option key={currency} value={currency}>
              {currency}
            </Select.Option>
          ))}
        </Select>
        <br />
      </form>
    </>
  );
}

export default CurrencyPage;
