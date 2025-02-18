import { z } from 'zod'
import { CryptocurrenciesResponseSchema, CryptocurrencyResponseSchema, CryptoPriceSchema, CurrencySchema, PairSchema } from "../schema/crypto-schema"

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptocurrencyResponseSchema>
export type CryptoCurrencies = z.infer<typeof CryptocurrenciesResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>