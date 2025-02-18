/**
 * Main application component for the Cryptocurrency Converter.
 * Serves as the root component that orchestrates the cryptocurrency conversion interface.
 * Uses Zustand for state management through useCryptoStore.
 */
import { useEffect } from "react";
import { useCryptoStore } from "../src/store";
import CryptoSearchForm from "./components/CryptoSearchForm";
import CryptoPriceDisplay from "./components/CryptoPriceDisplay";

function App() {
  // Access global crypto state and fetch function from the store
  const { fetchCryptos, cryptoPrice } = useCryptoStore();

  // Fetch available cryptocurrencies on component mount
  useEffect(() => {
    fetchCryptos()
  },[])

  return (
    <div className="container">
      <h1 className="app-title">
        <span>Cryptocurrency</span> Converter
      </h1>

      <div className="content">
        <CryptoSearchForm />
      </div>

    {(cryptoPrice && Object.keys(cryptoPrice).length > 0) && <CryptoPriceDisplay />}

    </div>
  );
}

export default App;
