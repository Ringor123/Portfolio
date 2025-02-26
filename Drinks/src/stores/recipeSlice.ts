import { getCategories, getDrinks, getRecipeById } from "../services/DrinksService"
import { Categories, Drink, Drinks, Recipe, SearchFilter,  } from "../types"
import { StateCreator } from "zustand"

export type RecipesSliceType = {
  categories: Categories,
  drinks: Drinks,
  lastSearchValues: SearchFilter,
  recipe: Recipe,
  modal: boolean,
  fetchCategories: () => Promise<void>,
  setSearchValues: (searchValues: SearchFilter) => void
  fetchRecipes: (searchFilter: SearchFilter) => Promise<void>
  selectRecipe: (id: Drink['idDrink']) => Promise<void>
  setModal: (modal: boolean) => void
} 

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set, get) => ({
  categories: {
    drinks: []
  },

  drinks: {
    drinks: []
  },

  lastSearchValues: {
    ingredient: '',
    category: ''
  },

  recipe: {} as Recipe,
  
  modal: false,

  fetchCategories: async () =>  {
    const categories = await getCategories()
    set(() => ({
      categories
    }))
  },

  setSearchValues: (lastSearchValues) => {
    set(() => ({
      lastSearchValues
    }))
  },

  fetchRecipes: async () => {
    const drinks = await getDrinks(get().lastSearchValues)
    set(() => ({
      drinks
    }))
  },

  selectRecipe: async (id) => {
    const recipe = await getRecipeById(id)
    set(() => ({
      recipe
    }))
  },

  setModal: (modal) => {
    set(() => ({
      modal,
    }))
    if (modal === false) {
      set(() => ({
        recipe: {} as Recipe
      }))
    }
  }
})