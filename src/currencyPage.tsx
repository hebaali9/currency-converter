import { useEffect } from "react";
import "./currencyPage.css";

const Base_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";
function CurrencyPage() {
  useEffect(() => {
    fetch(Base_URL)
      .then((res) => res.json)
      .then((data) => console.log("err"));
  }, []);
  return (
    <>
      <p>convert</p>
      <div className="currenyPage">
        <input type="number"></input>
        <select>
          <option value="hi"></option>
        </select>
        <h2>=</h2>
        <input type="number"></input>
        <select>
          <option value={"hi"}></option>
        </select>
      </div>
    </>
  );
}

export default CurrencyPage;
