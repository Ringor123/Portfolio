# API de Gestión de Productos

Una API RESTful construida con Express y TypeScript para la gestión de inventario de productos. Este servicio backend proporciona endpoints para crear, leer, actualizar y eliminar productos.

## Tecnologías

- [Express](https://expressjs.com/) - Framework web minimalista, rápido y sin opiniones para Node.js
- [TypeScript](https://www.typescriptlang.org/) - Lenguaje de programación fuertemente tipado que se basa en JavaScript
- [Sequelize](https://sequelize.org/) - ORM basado en promesas para Node.js y PostgreSQL
- [PostgreSQL](https://www.postgresql.org/) - Base de datos relacional de objetos potente y de código abierto
- [Express Validator](https://express-validator.github.io/) - Middleware para validación de entradas
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) - Documentación de API autogenerada
- [Jest](https://jestjs.io/) - Framework de pruebas para JavaScript

## Características de la API

- **Arquitectura RESTful** - Sigue los principios REST para endpoints predecibles
- **Validación de Entradas** - Validación completa utilizando Express Validator
- **Documentación Swagger** - Documentación de API autogenerada con JSDoc
- **Integración de Base de Datos** - PostgreSQL con Sequelize ORM
- **Manejo de Errores** - Respuestas de error consistentes
- **Pruebas** - Pruebas unitarias y de integración con Jest

## Endpoints de la API

| Método | Endpoint           | Descripción                      |
|--------|-------------------|----------------------------------|
| GET    | /api/products     | Obtener todos los productos      |
| GET    | /api/products/:id | Obtener un producto por ID       |
| POST   | /api/products     | Crear un nuevo producto          |
| PUT    | /api/products/:id | Actualizar un producto           |
| PATCH  | /api/products/:id | Actualizar disponibilidad        |
| DELETE | /api/products/:id | Eliminar un producto             |
| DELETE | /api/products     | Eliminar todos los productos     |

## Estructura del Proyecto

```bash
server/
├── src/
│   ├── config/           # Archivos de configuración y configuración de base de datos
│   ├── data/             # Scripts de población de datos
│   ├── handlers/         # Manejadores de solicitudes para cada endpoint
│   ├── middlewares/      # Middlewares de Express
│   ├── models/           # Modelos de Sequelize
│   ├── routers/          # Rutas de Express
│   ├── __tests__/        # Archivos de prueba
│   ├── index.ts          # Punto de entrada de la aplicación
│   └── server.ts         # Configuración del servidor Express
├── package.json          # Dependencias y scripts
└── tsconfig.json         # Configuración de TypeScript
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar pruebas
npm test

# Ejecutar pruebas con cobertura
npm run test:coverage
```

## Documentación de la API

Cuando el servidor está en ejecución, la documentación de la API está disponible en:

```http
http://localhost:4000/docs
```

La documentación se genera utilizando Swagger y comentarios JSDoc en los archivos de rutas.
