import axios from "axios";
import { CategoriesAPIResponseSchema, DrinksAPIResponseSchema, RecipeAPIResponseSchema } from "../schemas/drinks-schema";
import { Drink, SearchFilter } from "../types";

export const getCategories = async () => {
  try {
    const url =
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    const { data } = await axios.get(url);
    const result = CategoriesAPIResponseSchema.safeParse(data);

    if (result.success) {
      const categories = result.data;
      return categories;
    }

    if (result.error) {
      console.log("error al recibir las categorias de la API");
      return
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDrinks = async (filters: SearchFilter) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const {data} = await axios.get(url)
    const result = DrinksAPIResponseSchema.safeParse(data)
    
    if(result.success) {
      const drinks = result.data
      return drinks
    }

    if(result.error) {
      console.log('error al recibir las recetas')
      return
    }

  } catch (error) {
    console.log(error)
  }
}

export const getRecipeById = async (id: Drink['idDrink']) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios.get(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    
    if(result.success) {
      const recipe = result.data
      return recipe
    }

    if(result.error) {
      console.log('error al recibir la receta')
    }
  } catch (error) {
    console.log(error)
  }
}