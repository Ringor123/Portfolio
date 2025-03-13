# Aplicación de Calificación de Repositorios

Una aplicación full-stack para calificar y revisar repositorios de GitHub. Construida con React Native y GraphQL, esta aplicación permite a los usuarios navegar por repositorios, crear cuentas, iniciar sesión y dejar reseñas para los repositorios.

## Técnicas Interesantes

- **React Router Native**: Implementa [enrutamiento declarativo](https://reactrouter.com/en/main/start/overview) para aplicaciones React Native utilizando la última versión de React Router v6.
- **Apollo Client**: Utiliza [Apollo Client](https://www.apollographql.com/docs/react/) para la gestión de estado y la obtención de datos GraphQL con caché optimizado.
- **Formik & Yup**: Implementa [manejo de formularios](https://formik.org/) con Formik y [validación](https://github.com/jquense/yup) con Yup para una experiencia robusta de formularios.
- **Desplazamiento Infinito**: Utiliza el callback `onEndReached` de FlatList para implementar [desplazamiento infinito](https://reactnative.dev/docs/flatlist#onendreached) con paginación basada en cursores.
- **GraphQL**: Implementa [consultas y mutaciones GraphQL](https://graphql.org/learn/) para obtener datos de manera eficiente con solo los campos requeridos.
- **Hooks Personalizados**: Crea lógica reutilizable con hooks React personalizados para datos de repositorios, autenticación y manejo de formularios.

## Tecnologías y Bibliotecas

- **Frontend**:
  - [React Native](https://reactnative.dev/) - Framework de aplicaciones móviles
  - [Expo](https://expo.dev/) - Conjunto de herramientas para React Native
  - [@apollo/client](https://www.apollographql.com/docs/react/) - Cliente GraphQL
  - [React Router Native](https://reactrouter.com/en/main) - Biblioteca de enrutamiento
  - [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup) - Manejo y validación de formularios
  - [React Native Paper](https://callstack.github.io/react-native-paper/) - Componentes Material Design

- **Backend**:
  - [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - Servidor GraphQL
  - [Koa](https://koajs.com/) - Framework web
  - [Knex](https://knexjs.org/) - Constructor de consultas SQL
  - [Objection.js](https://vincit.github.io/objection.js/) - ORM
  - [SQLite](https://www.sqlite.org/index.html) - Base de datos
  - [JWT](https://jwt.io/) - Autenticación

## Instalación y Configuración

### Configuración del Backend

1. Asegúrate de tener Node.js v20 o posterior instalado:
   ```
   node -v
   ```

2. Clona el repositorio y navega al directorio del backend:
   ```
   cd rate-repository-api-backend
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

4. Registra una aplicación OAuth en GitHub:
   - Ve a [GitHub Developer Settings](https://github.com/settings/developers)
   - Establece "Application name" como "Rate Repository API"
   - Establece "Homepage URL" como https://github.com/Kaltsoon/rate-repository-api
   - Establece "Authorization callback URL" como http://localhost:5000
   - Anota tu "Client ID" y "Client Secret"

5. Crea un archivo `.env` en el directorio raíz copiando `.env.template`:
   ```
   cp .env.template .env
   ```

6. Actualiza el archivo `.env` con tus credenciales OAuth de GitHub:
   ```
   GITHUB_CLIENT_ID=tu_client_id
   GITHUB_CLIENT_SECRET=tu_client_secret
   JWT_SECRET=tu_jwt_secret
   PORT=4000  # Opcional, el valor predeterminado es 5000
   ```

7. Construye la aplicación (configura la base de datos SQLite y ejecuta las migraciones):
   ```
   npm run build
   ```

8. Puebla la base de datos con datos iniciales (opcional, eliminará los datos existentes):
   ```
   npm run seed:run
   ```

9. Inicia el servidor backend:
   ```
   npm start
   ```

   Después de iniciar, puedes acceder a Apollo Sandbox en http://localhost:4000 (o tu puerto personalizado).

   **Nota**: Si encuentras un error de conflicto de puerto en macOS:
   ```
   Error: listen EADDRINUSE: address already in use :::5000
   ```
   Cambia el puerto en tu archivo `.env` (por ejemplo, `PORT=5001`) y actualiza la URL de callback de autorización de GitHub en consecuencia.

### Configuración del Frontend

1. Navega al directorio del frontend:
   ```
   cd rate-repository-app
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Crea un archivo `.env` en el directorio raíz con el siguiente contenido:
   ```
   EXPO_PUBLIC_APOLLO_URI=http://localhost:4000/graphql
   ```
   Nota: Actualiza el puerto si lo cambiaste en la configuración del backend.

4. Inicia el servidor de desarrollo de Expo:
   ```
   npm start
   ```

5. Usa la aplicación Expo Go en tu dispositivo móvil para escanear el código QR, o presiona 'a' para abrir en un emulador de Android o 'i' para el simulador de iOS.

## Estructura del Proyecto

```
rate-repository-app/
├── assets/                # Activos estáticos como imágenes y fuentes
├── src/
│   ├── components/        # Componentes React
│   │   ├── AppBar/        # Barra de navegación de la aplicación
│   │   ├── Forms/         # Componentes de formulario (Inicio de sesión, Crear usuario, etc.)
│   │   ├── Repositories/  # Listado y detalles de repositorios
│   │   └── Reviews/       # Componentes de reseñas
│   ├── graphql/           # Consultas, mutaciones y fragmentos GraphQL
│   ├── hooks/             # Hooks React personalizados
│   ├── utils/             # Funciones de utilidad
│   └── theme.js           # Tematización de la aplicación
└── App.js                 # Punto de entrada de la aplicación

rate-repository-api-backend/
├── migrations/            # Archivos de migración de base de datos
├── seeds/                 # Datos iniciales para la base de datos
└── src/                   # Código fuente del backend
    ├── graphql/           # Esquema GraphQL y resolvers
    ├── models/            # Modelos de datos
    └── utils/             # Funciones de utilidad
```

El directorio `components` contiene todos los componentes de UI organizados por funcionalidad. El directorio `hooks` contiene hooks React personalizados para la obtención de datos y gestión de estado. Las consultas y mutaciones GraphQL están definidas en el directorio `graphql`.