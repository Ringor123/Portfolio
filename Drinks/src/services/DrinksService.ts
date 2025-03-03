/**
 * Service module for interacting with TheCocktailDB API.
 * Provides functions to fetch drink categories, search drinks by filters,
 * and get detailed recipe information.
 * 
 * All API responses are validated using Zod schemas to ensure type safety
 * and data consistency throughout the application.
 */

import axios from "axios";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponseSchema,
  RecipeAPIResponseSchema,
} from "../schemas/drinks-schema";
import { Drink, SearchFilter } from "../types";

/**
 * Fetches available drink categories from the API.
 * @returns Promise resolving to the categories data or undefined if error occurs
 */
export const getCategories = async () => {
  try {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    const { data } = await axios.get(url);
    const result = CategoriesAPIResponseSchema.safeParse(data);

    if (result.success) {
      const categories = result.data;
      return categories;
    }

    if (result.error) {
      console.log("error al recibir las categorias de la API");
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * Searches for drinks that match both the ingredient and category filters.
 * Performs two API calls:
 * 1. Fetches drinks by ingredient
 * 2. Fetches drinks by category
 * Then intersects the results to find drinks that match both criteria.
 * 
 * @param filters Object containing ingredient and category search criteria
 * @returns Promise resolving to filtered drinks array or undefined if error occurs
 */
export const getDrinks = async (filters: SearchFilter) => {
  try {
    const ingredientUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filters.ingredient}`;
    const { data: ingredientData } = await axios.get(ingredientUrl);
    const ingredientResult = DrinksAPIResponseSchema.safeParse(ingredientData);

    const categoryUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}`;
    const { data: categoryData } = await axios.get(categoryUrl);
    const categoryResult = DrinksAPIResponseSchema.safeParse(categoryData);

    if (!ingredientResult.success || !categoryResult.success) {
      console.log("Error al recibir los datos");
      return;
    }

    const filteredDrinks = ingredientResult.data.drinks.filter((drink) =>
      categoryResult.data.drinks.some(
        (catDrink) => catDrink.idDrink === drink.idDrink
      )
    );

    return {
      drinks: filteredDrinks,
    };
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetches detailed recipe information for a specific drink by its ID.
 * Includes full ingredient list, measures, and preparation instructions.
 * 
 * @param id The unique identifier of the drink
 * @returns Promise resolving to the recipe data or undefined if error occurs
 */
export const getRecipeById = async (id: Drink["idDrink"]) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const { data } = await axios.get(url);
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);

    if (result.success) {
      const recipe = result.data;
      return recipe;
    }

    if (result.error) {
      console.log("error al recibir la receta");
    }
  } catch (error) {
    console.log(error);
  }
};