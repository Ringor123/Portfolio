/**
 * Global state management for the cryptocurrency application using Zustand.
 * Manages cryptocurrency data, conversion rates, and loading states.
 * Includes actions for fetching cryptocurrencies and price data.
 */
import { create } from "zustand";
import { getCryptos, getPrice } from "./services/CryptoService";
import { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { devtools } from "zustand/middleware";

/**
 * Type definition for the cryptocurrency store state and actions.
 * @property cryptos - Array of available cryptocurrencies
 * @property cryptoPrice - Current price data for selected cryptocurrency pair
 * @property loading - Loading state for async operations
 * @property fetchCryptos - Action to fetch available cryptocurrencies
 * @property fetchPairData - Action to fetch price data for a currency pair
 */
type CryptoStore = {
  cryptos: CryptoCurrency[];
  cryptoPrice: CryptoPrice;
  loading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchPairData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptos: [],
    cryptoPrice: {},
    loading: false,
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptos: cryptocurrencies,
      }));
    },
    fetchPairData: async (pair) => {
      set(() => ({
        loading: true
      }))
      const result = await getPrice(pair)
      set(() => ({
        cryptoPrice: result,
        loading: false
      }))
    },
  }))
);
