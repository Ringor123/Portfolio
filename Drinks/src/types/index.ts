import { z } from 'zod'
import { CategoriesAPIResponseSchema, SearchFilterSchema } from '../schemas/drinks-schema'

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>

export type Pair = {
  ingredient: string,
  category: string
}

export type SearchFilter = z.infer<typeof SearchFilterSchema>