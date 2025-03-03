/**
 * Zustand store slice for managing favorite drinks.
 * Features:
 * - Persists favorites in localStorage
 * - Provides actions to add and remove favorites
 * - Maintains synchronization between state and localStorage
 */

import { Recipe } from "../types";
import { StateCreator } from "zustand";

/**
 * Type definition for the favorites slice state and actions.
 * Includes the favorites array and methods to modify it.
 */
export type FavoriteSliceType = {
  /** Array of favorite drink recipes */
  favorites: Recipe[];
  /** Adds a recipe to favorites and updates localStorage */
  addToFavorites: (recipe: Recipe) => void;
  /** Removes a recipe from favorites and updates localStorage */
  removeFromFavorites: (recipe: Recipe) => void;
};

export const createFavoriteSlice: StateCreator<FavoriteSliceType> = (
  set,
  get
) => ({
  favorites: JSON.parse(localStorage.getItem("drinks-storage") || "[]"),

  addToFavorites: (recipe) => {
    set(() => ({
      favorites: [...get().favorites, recipe],
    }));
    localStorage.setItem("drinks-storage", JSON.stringify(get().favorites));
  },

  removeFromFavorites: (recipe) => {
    const favorites = get().favorites.filter(
      (favorite) => favorite.idDrink !== recipe.idDrink
    );
    set(() => ({
      favorites,
    }));
    localStorage.setItem("drinks-storage", JSON.stringify(get().favorites));
  },
});
