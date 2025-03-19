import { Router } from "express";
import { body, param } from "express-validator";
import {
  createProduct,
  deleteAllProducts,
  deleteProductById,
  getProductById,
  getProducts,
  updateAvailability,
  updateProduct,
} from "../handlers/product";
import { handleInputErrors } from "../middlewares";

const productsRouter = Router();
/**
 * @swagger
 * components:
 *    schemas:
 *      Product:
 *        type: object
 *        properties:
 *            id:
 *              type: integer
 *              description: The product ID
 *              example: 1
 *            name:
 *              type: string
 *              description: The product name
 *              example: Mechanical keyboard
 *            price:
 *              type: number
 *              description: The product price
 *              example: 39.99
 *            availability:
 *              type: boolean
 *              description: The product availability
 *              example: true
 */

//Routing

/**
 * @swagger
 * /api/products:
 *    get:
 *      summary: Get a list of products
 *      tags: [Products]
 *      description: Return a list of products
 *      responses: 
 *         200:
 *          description: Successful response
 *          content: 
 *            application/json:
 *              schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 */
productsRouter.get("/", getProducts);


/**
 * @swagger
 * /api/products/{id}:
 *    get:
 *      summary: Get a product by its ID
 *      tags: [Products]
 *      description: Return a single product by its ID
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Product ID
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: Product found
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                     $ref: '#/components/schemas/Product'
 *        404:
 *          description: Product not found
 *        400:
 *          description: Bad request - invalid ID
 */
productsRouter.get(
  "/:id",
  param("id").isInt().withMessage("Wrong Id"),
  handleInputErrors,
  getProductById
);

/**
 * @swagger
 * /api/products:
 *    post:
 *      summary: Creates a new Product
 *      tags: [Products]
 *      description: Create and returns a new product
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  example: "Mechanical keyboard"
 *                price:
 *                  type: number
 *                  example: "39.99"
 *      responses:
 *          201:
 *            description: Product created
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    data:
 *                      $ref: '#/components/schemas/Product'
 *          400:
 *            description: Bad input
 */
productsRouter.post(
  "/",
  body("name")
    .notEmpty()
    .withMessage("Product name cannot be empty")
    .isString()
    .withMessage("Product name must be text"),

  body("price")
    .isFloat()
    .withMessage("Price must be a number")
    .notEmpty()
    .withMessage("Price cannot be empty")
    .custom((value) => value > 0)
    .withMessage("Price cannot be negative"),

  handleInputErrors,

  createProduct
);

/**
 * @swagger
 * /api/products/{id}:
 *    put:
 *      summary: Update Product
 *      tags: [Products]
 *      description: Update and returns the updated product
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Product ID
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  example: "Mechanical keyboard"
 *                price:
 *                  type: number
 *                  example: "39.99"
 *                availability:
 *                  type: boolean
 *                  example: "true"
 *      responses:
 *          200:
 *            description: Product updated
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    data:
 *                      $ref: '#/components/schemas/Product'
 *          404:
 *            description: Product not found
 *          400:
 *            description: Bad request - invalid ID or invalid input data
 */
productsRouter.put(
  "/:id",
  param("id").isInt().withMessage("Invalid ID"),
  body("name")
    .notEmpty()
    .withMessage("Product name cannot be empty")
    .isString()
    .withMessage("Product name must be text"),

  body("price")
    .isFloat()
    .withMessage("Price must be a number")
    .notEmpty()
    .withMessage("Price cannot be empty")
    .custom((value) => value > 0)
    .withMessage("Price cannot be negative"),

  body("availability")
    .isBoolean()
    .withMessage("Invalid value for availability"),

  handleInputErrors,
  updateProduct
);


/**
 * @swagger
 * /api/products/{id}:
 *    patch:
 *      summary: Update Product availabilty
 *      tags: [Products]
 *      description: Changes product availability
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Product ID
 *          schema:
 *            type: integer
 *      responses:
 *          200:
 *            description: Product updated
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    data:
 *                      $ref: '#/components/schemas/Product'
 *          404:
 *            description: Product not found
 *          400:
 *            description: Bad request - invalid ID
 */
productsRouter.patch(
  "/:id",
  param("id").isInt().withMessage("Wrong Id"),
  handleInputErrors,
  updateAvailability
);


/**
 * @swagger
 * /api/products:
 *    delete:
 *      summary: Delete all products
 *      tags: [Products]
 *      description: Removes all product from database
 *      responses:
 *          200:
 *            description: All products deleted
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    message: 
 *                      type: string
 *                      example: 'All products deleted'
 */
productsRouter.delete("/", deleteAllProducts);

/**
 * @swagger
 * /api/products/{id}:
 *    delete:
 *      summary: Deletes a product by ID
 *      tags: [Products]
 *      description: Removes a product by its ID 
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Product ID
 *          schema:
 *            type: integer
 *      responses:
 *          200:
 *            description: All products deleted
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    message: 
 *                      type: string
 *                      example: 'Product deleted'
 *          404:
 *            description: Product not found
 *          400:
 *            description: Bad request - invalid ID
 */
productsRouter.delete(
  "/:id",
  param("id").isInt().withMessage("Wrong Id"),
  handleInputErrors,
  deleteProductById
);

export default productsRouter;
