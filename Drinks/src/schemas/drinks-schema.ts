import { z } from 'zod'

export const CategoriesAPIResponseSchema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string()
    })
  )
})

export const SearchFilterSchema =  z.object({
  drinks: z.array(
    z.object({
      strDrink: z.string(),
      strDrinkThumb: z.string(),
      idDrink: z.string()
    })
  )
})