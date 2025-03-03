/**
 * Type definitions for the application.
 * Uses Zod schema inference to ensure type safety with API responses.
 */

import { z } from 'zod'
import { CategoriesAPIResponseSchema, DrinkAPIResponseSchema, DrinksAPIResponseSchema, RecipeAPIResponseSchema, SearchFilterSchema } from '../schemas/drinks-schema'

/** Type for the drink categories response from the API */
export type Categories = z.infer<typeof CategoriesAPIResponseSchema>

/** Type for the search form data and API parameters */
export type SearchFilter = z.infer<typeof SearchFilterSchema>

/** Type for the drinks search response from the API */
export type Drinks = z.infer<typeof DrinksAPIResponseSchema>

/** Type for basic drink information in search results */
export type Drink = z.infer<typeof DrinkAPIResponseSchema>

/** Type for detailed recipe information */
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>

/** Type for toast notification state and content */
export type Notification = {
  text: string,
  error: boolean,
  show: boolean
}