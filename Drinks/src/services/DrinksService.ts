import axios from "axios";
import { CategoriesAPIResponseSchema, SearchFilterSchema,  } from "../schemas/drinks-schema";
import { Pair } from "../types";

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


export const getRecipes = async (pair: Pair) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${pair.category}&i=${pair.ingredient}`
    const {data} = await axios.get(url)
    const result = SearchFilterSchema.safeParse(data)
    
    if(result.success) {
      const recipes = result.data
      return recipes
    }

    if(result.error) {
      console.log('error al recibir las recetas')
      return
    }

  } catch (error) {
    console.log(error)
  }
}