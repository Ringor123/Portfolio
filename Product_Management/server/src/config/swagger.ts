import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.2",
    tags: [
      {
        name: "Products",
        description: "API operations related to products",
      }
    ],
    info: {
      title: "REST API Node.js / Express / TypeScript",
      version: "1.0.0",
      description: "API Docs for Products",
    }
  },
  apis: ['./src/routers/productsRouter.ts']
};

const swaggerSpec = swaggerJSDoc(options)

export const swaggerUiOptions : SwaggerUiOptions = {
  customCss: `
    .swagger-ui .topbar {
      background-color:#2b3c45
    }
  `,
  customSiteTitle: "REST API Documentation"
}

export default swaggerSpec
