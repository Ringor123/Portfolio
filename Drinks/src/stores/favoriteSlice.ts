import { Recipe } from "../types"
import { StateCreator } from "zustand"




export type FavoriteSliceType = {
  favorites: Recipe[],
  addToFavorites: (recipe: Recipe) => void,
  removeFromFavorites: (recipe: Recipe) => void
}

export const createFavoriteSlice : StateCreator<FavoriteSliceType> = (set, get) => ({
  favorites: JSON.parse(localStorage.getItem('drinks-storage') || '[]'),

  addToFavorites: (recipe) => {
    set(() => ({
      favorites: [...get().favorites, recipe]
    }))
    localStorage.setItem('drinks-storage', JSON.stringify(get().favorites))
  },

  removeFromFavorites: (recipe) => {
    const favorites = get().favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
    set(() => ({
      favorites
    }))
    localStorage.setItem('drinks-storage', JSON.stringify(get().favorites))
  }
})