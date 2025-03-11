import { Request, Response } from "express";
import Product from "../models/Product.model";

export const getProducts = async (req: Request, res: Response) => {
    const products = await Product
      .findAll
      //   {
      //   order: [["id", "DESC"]],
      //   attributes: { exclude: ["createdAt", "updatedAt"] },
      // }
      ();
    res.json({ data: products });
};

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return
    }

    res.status(200).json({ data: product });
};

export const createProduct = async (req: Request, res: Response) => {
    const product = await Product.create(req.body);
    res.status(201).json({ data: product });
};

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return
    }

    const productUpdated = await product.update(req.body);
    res.json({ data: productUpdated });
};

export const updateAvailability = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({ error: "Product not found" });
    }
    
    product.availability = !product.dataValues.availability
    await product.save()
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllProducts = async (req: Request, res: Response) => {
    await Product.destroy({
      where: {},
    });
    res.json({ message: "All products deleted" });
};

export const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      res.status(404).json({ error: "Product not found" });
    }
    
    await product.destroy()
    res.json({ message: "Product deleted" });
  } catch (error) {
    console.log(error);
  }
};
