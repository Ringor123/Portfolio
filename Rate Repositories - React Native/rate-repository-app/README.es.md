# Frontend de la Aplicación de Calificación de Repositorios

Una aplicación móvil para calificar y revisar repositorios de GitHub construida con React Native y Expo. Esta aplicación permite a los usuarios navegar por repositorios, crear cuentas, iniciar sesión y dejar reseñas para los repositorios.

## Características

- Explorar repositorios de GitHub con información detallada
- Buscar repositorios por palabra clave
- Ordenar repositorios por fecha de creación o calificación
- Crear una cuenta de usuario
- Iniciar sesión con credenciales existentes
- Ver detalles de repositorios
- Calificar y revisar repositorios
- Ver tus propias reseñas
- Desplazamiento infinito para listas de repositorios y reseñas

## Tecnologías

- [React Native](https://reactnative.dev/) - Framework móvil multiplataforma
- [Expo](https://expo.dev/) - Conjunto de herramientas y plataforma para React Native
- [Apollo Client](https://www.apollographql.com/docs/react/) - Cliente GraphQL para gestión de estado y obtención de datos
- [React Router Native](https://reactrouter.com/en/main) - Navegación y enrutamiento
- [Formik](https://formik.org/) - Manejo de formularios
- [Yup](https://github.com/jquense/yup) - Validación de formularios
- [React Native Paper](https://callstack.github.io/react-native-paper/) - Componentes Material Design
- [Async Storage](https://react-native-async-storage.github.io/async-storage/) - Solución de almacenamiento de datos

## Instalación

1. Asegúrate de tener Node.js instalado (se recomienda v20 o posterior):
   ```
   node -v
   ```

2. Instala Expo CLI globalmente si aún no lo has hecho:
   ```
   npm install -g expo-cli
   ```

3. Clona el repositorio y navega al directorio del frontend:
   ```
   cd rate-repository-app
   ```

4. Instala las dependencias:
   ```
   npm install
   ```

5. Crea un archivo `.env` en el directorio raíz con el siguiente contenido:
   ```
   EXPO_PUBLIC_APOLLO_URI=http://localhost:4000/graphql
   ```
   Nota: Actualiza el puerto si lo cambiaste en la configuración del backend.

## Ejecutando la Aplicación

1. Inicia el servidor de desarrollo de Expo:
   ```
   npm start
   ```

2. Usa la aplicación Expo Go en tu dispositivo móvil para escanear el código QR, o presiona 'a' para abrir en un emulador de Android o 'i' para el simulador de iOS.

3. Para diferentes entornos, puedes usar:
   ```
   npm run start:dev    # Entorno de desarrollo
   npm run start:test   # Entorno de pruebas
   npm run start:prod   # Entorno de producción
   ```

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
│   │   ├── fragments.js   # Fragmentos GraphQL reutilizables
│   │   ├── mutations.js   # Mutaciones GraphQL
│   │   └── queries.js     # Consultas GraphQL
│   ├── hooks/             # Hooks React personalizados
│   ├── utils/             # Funciones de utilidad
│   │   ├── apolloClient.js # Configuración del cliente Apollo
│   │   └── authStorage.js  # Almacenamiento de autenticación
│   └── theme.js           # Tematización de la aplicación
├── App.js                 # Punto de entrada de la aplicación
├── app.config.js          # Configuración de Expo
└── babel.config.js        # Configuración de Babel
```

## Pruebas

Ejecuta las pruebas con:
```
npm test
```

## Linting

Verifica la calidad del código con:
```
npm run lint
```

## Backend

Esta aplicación frontend requiere que la [API de Calificación de Repositorios](../rate-repository-api-backend/README.es.md) esté en ejecución. Consulta el README del backend para obtener instrucciones de configuración.

## Contribuir

1. Haz un fork del repositorio
2. Crea tu rama de características (`git checkout -b feature/caracteristica-increible`)
3. Haz commit de tus cambios (`git commit -m 'Añadir alguna característica increíble'`)
4. Haz push a la rama (`git push origin feature/caracteristica-increible`)
5. Abre un Pull Request