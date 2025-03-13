![CI](https://github.com/Kaltsoon/rate-repository-api/workflows/CI/badge.svg)

# API de Calificación de Repositorios

Esta es una API GraphQL para la aplicación de Calificación de Repositorios.

## ✔️ Requisitos

Funciona al menos con la versión v20 de Node. Si no has instalado Node o npm, [nvm](https://github.com/nvm-sh/nvm) es una herramienta fácil de usar para instalar ambos. Nvm también es útil si quieres cambiar rápidamente entre diferentes versiones de Node.

## 🚀 Primeros pasos

0. Asegúrate de que estás utilizando la versión correcta de Node, por ejemplo:

```bash
$ node -v
v20.11.0
```

1. Clona este repositorio y ejecuta `npm install` en el directorio `rate-repository-api-backend`.

2. La API de Calificación de Repositorios utiliza la API de GitHub, que tiene un límite de tasa bastante pequeño (60 solicitudes por hora) para solicitudes no autorizadas. Por lo tanto, necesitamos registrarla como una aplicación OAuth para obtener credenciales de cliente. Registra tu aplicación OAuth [aquí](https://github.com/settings/applications/new) estableciendo "Application name" como "Rate Repository API", "Homepage URL" como https://github.com/Kaltsoon/rate-repository-api y "Authorization callback URL" como http://localhost:5000. Ahora deberías ver tu aplicación [aquí](https://github.com/settings/developers) y, al ir a la página de la aplicación, ver los valores de "Client ID" y "Client Secret".

3. Crea un archivo `.env` en el directorio `rate-repository-api-backend` y copia el contenido del archivo `.env.template` allí. En el archivo `.env`, reemplaza los valores de las variables `GITHUB_CLIENT_ID` y `GITHUB_CLIENT_SECRET` con las credenciales de tu aplicación OAuth recién registrada. Si lo deseas, también puedes usar un secreto diferente para la variable `JWT_SECRET`, que se utiliza para firmar los tokens de acceso.

4. Ejecuta `npm run build`. Esto configurará la base de datos SQLite y ejecutará las migraciones.

5. Para poblar la base de datos con algunos datos iniciales, ejecuta `npm run seed:run`. **Nota:** ejecutar este comando eliminará todos los datos existentes.

6. ¡Todo listo! Solo ejecuta `npm start` para iniciar el servidor. Después de que el servidor haya iniciado, deberías poder acceder a Apollo Sandbox en http://localhost:4000.

**NOTA** El puerto 5000 puede estar reservado en las nuevas versiones de macOS. Si ves este error:

```
Error: listen EADDRINUSE: address already in use :::5000
```

define un puerto alternativo en el archivo .env. Puedes elegir, por ejemplo, 5001:

```
PORT=5001
```

Cambia también la URL de callback de autorización [aquí](https://github.com/settings/developers) para que tenga el nuevo valor del puerto.

## 🔑 Autenticación

Para listar todos los usuarios registrados, puedes ejecutar esta consulta en Apollo Sandbox:

```javascript
{
  users {
    edges {
      node {
        username
      }
    }
  }
}
```

Puedes obtener un token de acceso realizando la mutación `authenticate`:

```javascript
mutation {
  authenticate(credentials: { username: "kalle", password: "password" }) {
    accessToken
  }
}
```

Todos los tokens de acceso expiran después de **siete días**. Si realizaste el paso 5 en la sección "Primeros pasos", los usuarios "kalle", "elina" y "matti" tienen todos la contraseña "password".

También puedes registrar un nuevo usuario realizando la mutación `createUser`:

```javascript
mutation {
  createUser(user: { username: "miusuario", password: "micontraseña" }) {
    id
    username
  }
}
```

### Autorizar solicitudes en Apollo Sandbox

Una forma práctica de autorizar solicitudes en Apollo Sandbox es obtener un token de acceso usando la mutación `authenticate` (ver arriba para más detalles) y luego agregar lo siguiente en la pestaña "Headers" debajo del editor de operaciones:

```json
{
  "Authorization": "Bearer <TOKEN_DE_ACCESO>"
}
```

Reemplaza la parte `<TOKEN_DE_ACCESO>` con tu token de acceso.

## 📖 Documentación

Apollo Sandbox ofrece documentación sobre cómo usar la API. Inicia el servidor ejecutando `npm start`, abre Apollo Sandbox en http://localhost:4000 y deberías poder ver la documentación junto al editor de operaciones.

## 🐛 ¿Encontraste un error?

Envía un issue con la descripción del error y una forma de reproducirlo. Si ya has encontrado una solución, aceptaremos con gusto un pull request.

## ❓ Preguntas frecuentes

- **¿Cómo reiniciar la base de datos?** Si estás absolutamente seguro de que deseas eliminar _todos_ los datos existentes, simplemente elimina el archivo `database.sqlite` en el directorio `rate-repository-api-backend` y ejecuta `npm run build`. Puedes ejecutar `npm run seed:run` para inicializar la nueva base de datos con datos iniciales.

- **¿Está listo para producción?** Casi. La versión actual de la API utiliza la base de datos SQLite, que no es muy adecuada para producción. Afortunadamente, todas las consultas a la base de datos se realizan con el ORM [Objection](https://vincit.github.io/objection.js/), y cambiar el controlador de base de datos subyacente es solo cuestión de [configuración](http://knexjs.org/#Installation-client).