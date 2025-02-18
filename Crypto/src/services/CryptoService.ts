/**
 * Service layer for interacting with the CryptoCompare API.
 * Handles data fetching and validation using Zod schemas.
 */
import axios from "axios";
import {
  CryptocurrenciesResponseSchema,
  CryptoPriceSchema,
} from "../schema/crypto-schema";
import { Pair } from "../types";

/**
 * Fetches top 20 cryptocurrencies by market cap.
 * Data is validated using CryptocurrenciesResponseSchema.
 * @returns Promise containing validated cryptocurrency data
 */
export const getCryptos = async () => {
  try {
    const cryptoUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
    const {
      data: { Data },
    } = await axios.get(cryptoUrl);
    const result = CryptocurrenciesResponseSchema.safeParse(Data);

    if (result.success) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetches current price and statistics for a specific cryptocurrency pair.
 * @param pair - Object containing the cryptocurrency and fiat currency codes
 * @returns Promise containing validated price data
 */
export const getPrice = async (pair: Pair) => {
  try {
    const cryptoUrl = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;
    const {
      data: { DISPLAY },
    } = await axios.get(cryptoUrl);
    const result = CryptoPriceSchema.safeParse(
      DISPLAY[pair.cryptocurrency][pair.currency]
    );
    if (result.success) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
  }
};
