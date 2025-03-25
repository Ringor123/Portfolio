# Product Management System

A full-stack web application for managing product inventory with a modern React frontend and Express TypeScript backend. This system allows users to create, read, update, and delete products while tracking their availability status.

## Interesting Techniques

- **React Router Data APIs** - Utilizes the [React Router's Data APIs](https://reactrouter.com/en/main/start/overview) (loaders and actions) for efficient data fetching and mutations
- **Optimistic UI Updates** - Implements [fetcher Forms](https://reactrouter.com/en/main/components/form) for immediate UI feedback before server confirmation
- **TypeScript Decorators** - Uses [TypeScript decorators](https://www.typescriptlang.org/docs/handbook/decorators.html) with Sequelize for elegant model definitions
- **Swagger Documentation** - Auto-generates API documentation using [JSDoc comments](https://jsdoc.app/) with Swagger
- **Responsive Design** - Implements a fully responsive design using [Tailwind CSS](https://tailwindcss.com/) utility classes

## Technologies

- **Frontend**:
  - [React 19](https://react.dev/) - Latest version of React with improved rendering and performance
  - [TypeScript](https://www.typescriptlang.org/) - Type safety throughout the application
  - [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
  - [React Router 7](https://reactrouter.com/) - Modern client-side routing with data APIs
  - [React Toastify](https://fkhadra.github.io/react-toastify/) - Toast notifications
  - [Zod](https://zod.dev/) - TypeScript-first schema validation

- **Backend**:
  - [Express](https://expressjs.com/) - Node.js web application framework
  - [Sequelize](https://sequelize.org/) with TypeScript - ORM for PostgreSQL
  - [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) - API documentation
  - [Express Validator](https://express-validator.github.io/) - Input validation middleware
  - [Jest](https://jestjs.io/) - Testing framework

## Project Structure

```bash
Product_Management/
├── client/                   # Frontend React application
│   ├── src/
│   │   ├── actions/          # React Router action functions
│   │   ├── components/       # Reusable UI components
│   │   ├── layouts/          # Layout components with Outlet
│   │   ├── pages/            # Page components
│   │   ├── services/         # API service functions
│   │   ├── types/            # TypeScript type definitions
│   │   └── utils/            # Utility functions
│   ├── public/               # Static assets
│   └── package.json          # Frontend dependencies
│
└── server/                   # Backend Express application
    ├── src/
    │   ├── config/           # Configuration files
    │   ├── data/             # Data seeding scripts
    │   ├── handlers/         # Request handlers
    │   ├── middlewares/      # Express middlewares
    │   ├── models/           # Sequelize models
    │   ├── routers/          # Express routes
    │   └── __tests__/        # Test files
    └── package.json          # Backend dependencies
```

The [`client`](./client) directory contains a modern React application built with TypeScript and Tailwind CSS, organized into components, pages, and services. The [`server`](./server) directory houses an Express API with TypeScript, Sequelize ORM, and comprehensive API documentation using Swagger.