/**
 * Zod schemas for validating cryptocurrency data structures.
 * These schemas ensure type safety and data consistency throughout the application.
 */
import { z } from "zod";

/**
 * Schema for fiat currency data.
 * Validates currency code and full name.
 */
export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

/**
 * Schema for individual cryptocurrency response from the API.
 * Validates basic cryptocurrency information.
 */
export const CryptocurrencyResponseSchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
  }),
});

/**
 * Schema for the array of cryptocurrencies returned by the API.
 */
export const CryptocurrenciesResponseSchema = z.array(
  CryptocurrencyResponseSchema
);

/**
 * Schema for currency pair selection.
 * Validates the combination of fiat currency and cryptocurrency.
 */
export const PairSchema = z.object({
  currency: z.string(),
  cryptocurrency: z.string(),
});

/**
 * Schema for cryptocurrency price data.
 * Validates price information and related statistics.
 */
export const CryptoPriceSchema = z.object({
  PRICE: z.string(),
  IMAGEURL: z.string(),
  HIGHDAY: z.string(),
  LOWDAY: z.string(),
  CHANGEPCT24HOUR: z.string(),
  LASTUPDATE: z.string()
})