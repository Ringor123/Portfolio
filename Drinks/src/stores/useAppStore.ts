/**
 * Main application store using Zustand for state management.
 * Combines multiple slices to handle different aspects of the application:
 * - Recipes: Manages drink recipes, categories, and search functionality
 * - Favorites: Handles user's favorite drinks
 * - Notifications: Manages toast notifications
 * 
 * Uses devtools middleware for better debugging experience in development.
 */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { createFavoriteSlice, FavoriteSliceType } from "./favoriteSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";

export const useAppStore = create<RecipesSliceType & FavoriteSliceType & NotificationSliceType>()(
  devtools(
      (...a) => ({
        ...createRecipesSlice(...a),
        ...createFavoriteSlice(...a),
        ...createNotificationSlice(...a)
      }),
  )
);