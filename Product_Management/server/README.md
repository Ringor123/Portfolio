# Product Management API

A RESTful API built with Express and TypeScript for managing product inventory. This backend service provides endpoints for creating, reading, updating, and deleting products.

## Technologies

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language that builds on JavaScript
- [Sequelize](https://sequelize.org/) - Promise-based Node.js ORM for PostgreSQL
- [PostgreSQL](https://www.postgresql.org/) - Powerful, open source object-relational database
- [Express Validator](https://express-validator.github.io/) - Middleware for input validation
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) - Auto-generated API documentation
- [Jest](https://jestjs.io/) - JavaScript testing framework

## API Features

- **RESTful Architecture** - Follows REST principles for predictable endpoints
- **Input Validation** - Comprehensive validation using Express Validator
- **Swagger Documentation** - Auto-generated API documentation with JSDoc
- **Database Integration** - PostgreSQL with Sequelize ORM
- **Error Handling** - Consistent error responses
- **Testing** - Unit and integration tests with Jest

## API Endpoints

| Method | Endpoint           | Description                   |
|--------|-------------------|-------------------------------|
| GET    | /api/products     | Get all products              |
| GET    | /api/products/:id | Get a product by ID           |
| POST   | /api/products     | Create a new product          |
| PUT    | /api/products/:id | Update a product              |
| PATCH  | /api/products/:id | Update product availability   |
| DELETE | /api/products/:id | Delete a product              |
| DELETE | /api/products     | Delete all products           |

## Project Structure

```bash
server/
├── src/
│   ├── config/           # Configuration files and database setup
│   ├── data/             # Data seeding scripts
│   ├── handlers/         # Request handlers for each endpoint
│   ├── middlewares/      # Express middlewares
│   ├── models/           # Sequelize models
│   ├── routers/          # Express routes
│   ├── __tests__/        # Test files
│   ├── index.ts          # Application entry point
│   └── server.ts         # Express server configuration
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## API Documentation

When running the server, API documentation is available at:

```http
http://localhost:4000/docs
```

The documentation is generated using Swagger and JSDoc comments in the router files.
