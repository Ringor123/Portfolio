/**
 * Zod schema definitions for the Cocktail DB API responses and application data structures.
 * These schemas provide runtime type validation and TypeScript type inference.
 */

import { z } from 'zod'

/**
 * Schema for the API response when fetching drink categories.
 * Each category contains a string name in strCategory field.
 */
export const CategoriesAPIResponseSchema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string()
    })
  )
})

/**
 * Schema for the search filter form data.
 * Used to validate user inputs when searching for drinks.
 */
export const SearchFilterSchema = z.object({
  ingredient: z.string(),
  category: z.string()
})

/**
 * Schema for basic drink information returned by search endpoints.
 * Contains essential drink details for displaying in the drink cards.
 */
export const DrinkAPIResponseSchema = z.object({
  strDrink: z.string(),
  strDrinkThumb: z.string(),
  idDrink: z.string()
})

/**
 * Schema for the API response when searching drinks.
 * Returns an array of basic drink information.
 */
export const DrinksAPIResponseSchema =  z.object({
  drinks: z.array(DrinkAPIResponseSchema)
})

/**
 * Schema for detailed drink recipe information.
 * Used when fetching individual drink details for the modal view.
 * Includes ingredients, measures, and preparation instructions.
 * Note: API returns up to 10 ingredient/measure pairs, all nullable.
 */
export const RecipeAPIResponseSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strIngredient7: z.string().nullable(),
    strIngredient8: z.string().nullable(),
    strIngredient9: z.string().nullable(),
    strIngredient10: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
    strMeasure7: z.string().nullable(),
    strMeasure8: z.string().nullable(),
    strMeasure9: z.string().nullable(),
    strMeasure10: z.string().nullable(),
});