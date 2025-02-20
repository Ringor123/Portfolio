import { getCategories, getRecipes } from "../services/DrinksService"
import { Categories, Pair, SearchFilter,  } from "../types"
import { StateCreator } from "zustand"

export type RecipesSliceType = {
  categories: Categories,
  recipes: SearchFilter,
  fetchCategories: () => Promise<void>,
  fetchRecipes: (pair: Pair) => Promise<void>
} 

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: []
  },

  recipes: {
    drinks: []
  },
  
  fetchCategories: async () =>  {
    const categories = await getCategories()
    set(() => ({
      categories
    }))
  },

  fetchRecipes: async (pair) => {
    const recipes = await getRecipes(pair)
    set(() => ({
      recipes
    }))
  }
})