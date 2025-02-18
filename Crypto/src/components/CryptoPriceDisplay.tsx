/**
 * Component for displaying cryptocurrency price information and statistics.
 * Shows current price, 24h high/low, percentage change, and last update time.
 * Includes loading state handling with a spinner component.
 */
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {
  // Access price data and loading state from the global store
  const { cryptoPrice, loading } = useCryptoStore();

  return (
    <div className="crypto-price-container">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="crypto-price-header">
            <img
              src={`https://www.cryptocompare.com${cryptoPrice.IMAGEURL}`}
              alt="Cryptocurrency icon"
              className="crypto-icon"
            />
            <div className="price-main">
              <h2>Current Price</h2>
              <p className="price-value">{cryptoPrice.PRICE}</p>
            </div>
          </div>

          <div className="crypto-stats-grid">
            <div className="stat-item">
              <span className="stat-label">24h Highest</span>
              <span className="stat-value">{cryptoPrice.HIGHDAY}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">24h Lowest</span>
              <span className="stat-value">{cryptoPrice.LOWDAY}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">24h Change</span>
              <span
                className={`stat-value ${
                  parseFloat(cryptoPrice.CHANGEPCT24HOUR) >= 0
                    ? "positive"
                    : "negative"
                }`}
              >
                {cryptoPrice.CHANGEPCT24HOUR}%
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Last Updated</span>
              <span className="stat-value">{cryptoPrice.LASTUPDATE}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
