/**
 * Zustand store slice for managing drink recipes and search functionality.
 * Handles:
 * - Fetching and storing drink categories
 * - Managing search filters and results
 * - Storing selected recipe details
 * - Controlling recipe modal visibility
 */

import { getCategories, getDrinks, getRecipeById } from "../services/DrinksService"
import { Categories, Drink, Drinks, Recipe, SearchFilter,  } from "../types"
import { StateCreator } from "zustand"

/**
 * Type definition for the recipes slice state and actions.
 * Includes state for categories, search results, selected recipe,
 * and modal visibility, along with actions to modify them.
 */
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

/**
 * Creates the recipes slice with state and actions.
 * Implements fetching data from the Drinks API and managing
 * the local state of recipes, categories, and search filters.
 */
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

  /**
   * Fetches available drink categories from the API
   * and updates the store state.
   */
  fetchCategories: async () =>  {
    const categories = await getCategories()
    set(() => ({
      categories
    }))
  },

  /**
   * Updates the last used search filter values in the store.
   * These values are used for displaying current search criteria
   * and making new API requests.
   */
  setSearchValues: (lastSearchValues) => {
    set(() => ({
      lastSearchValues
    }))
  },

  /**
   * Fetches drinks matching the current search filters
   * and updates the store with the results.
   */
  fetchRecipes: async () => {
    const drinks = await getDrinks(get().lastSearchValues)
    set(() => ({
      drinks
    }))
  },

  /**
   * Fetches detailed recipe information for a specific drink
   * and updates the store state. Used when opening the recipe modal.
   */
  selectRecipe: async (id) => {
    const recipe = await getRecipeById(id)
    set(() => ({
      recipe
    }))
  },

  /**
   * Controls the visibility of the recipe detail modal.
   * When closing the modal, also clears the selected recipe
   * to prevent stale data on next open.
   */
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