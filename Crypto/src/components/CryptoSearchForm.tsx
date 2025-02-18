/**
 * Form component for selecting currency pairs to convert.
 * Allows users to select a fiat currency and a cryptocurrency for conversion.
 * Handles form validation and submission to fetch conversion rates.
 */
import { useState } from "react";
import { currencies } from "../data";
import { Pair } from "../types";
import { useCryptoStore } from "../store";
import ErrorMessage from "./ErrorMessage";

// Initial state for the currency pair selection
const INITIAL_STATE = {
  currency: "",
  cryptocurrency: "",
};

export default function CryptoSearchForm() {
  // State for managing form data and validation
  const [pair, setPair] = useState<Pair>(INITIAL_STATE);
  const [error, setError] = useState("");

  const { cryptos, fetchPairData } = useCryptoStore();

  /**
   * Handles changes in select inputs and updates the pair state
   */
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Handles form submission, validates input, and fetches conversion rates
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(pair).includes("")) {
      setError("All fields are required");
      return;
    } else {
      setError("");
      fetchPairData(pair);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Select Currency</label>
        <select
          name="currency"
          id="currency"
          onChange={handleChange}
          value={pair.currency}
        >
          <option value="">Select a currency</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cryptocurrency">Select Cryptocurrency</label>
        <select
          name="cryptocurrency"
          id="cryptocurrency"
          onChange={handleChange}
          value={pair.cryptocurrency}
        >
          <option value="">Select a cryptocurrency</option>
          {cryptos.map((crypto) => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Convert" />
    </form>
  );
}
