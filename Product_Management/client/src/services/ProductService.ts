import axios from "axios";
import { newProductSchema, Product, ProductSchema, ProductsSchema } from "../types";

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export const addProduct = async (data: ProductData) => {
  try {
    const validatedData = newProductSchema.parse({
      name: data.name,
      price: Number(data.price),
    });

    if (validatedData) {
      const url = `${import.meta.env.VITE_API_URL}/api/products`;
      await axios.post(url, data);
    } else {
      throw new Error("Validation error on post operation");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async () => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products`;
    const { data } = await axios.get(url);

    const validatedData = ProductsSchema.parse(data.data);

    if (validatedData) {
      return validatedData;
    } else {
      throw new Error("Error getting data");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: Product['id']) => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    const { data } = await axios.get(url);

    console.log(data.data);

    const validatedData = ProductSchema.parse(data.data);

    if (validatedData) {
      return validatedData;
    } else {
      throw new Error("Error getting data");
    }
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (data: ProductData, id: Product['id']) => {
  try {
    const validatedData = ProductSchema.parse({
      id,
      name: data.name,
      price: Number(data.price),
      availability: Boolean(data.availability)
    });

    if (validatedData) {
      const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
      await axios.put(url, data);
    } else {
      throw new Error("Validation error on put operation");
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id: Product['id']) => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    await axios.delete(url)
  } catch (error) {
    console.log(error)
  }
}

export const updateAvailability = async (id: Product['id']) => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    await axios.patch(url)
  } catch (error) {
    console.log(error)
  }
}
