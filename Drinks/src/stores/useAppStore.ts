import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { createFavoriteSlice, FavoriteSliceType } from "./favoriteSlice";

export const useAppStore = create<RecipesSliceType & FavoriteSliceType>()(
  devtools(
      (...a) => ({
        ...createRecipesSlice(...a),
        ...createFavoriteSlice(...a)
      }),
  )
);