# Repository Rating App

A full-stack application for rating and reviewing GitHub repositories. Built with React Native and GraphQL, this application allows users to browse repositories, create accounts, sign in, and leave reviews for repositories.

## Interesting Techniques

- **React Router Native**: Implements [declarative routing](https://reactrouter.com/en/main/start/overview) for React Native applications using the latest React Router v6.
- **Apollo Client**: Utilizes [Apollo Client](https://www.apollographql.com/docs/react/) for state management and GraphQL data fetching with optimized caching.
- **Formik & Yup**: Implements [form handling](https://formik.org/) with Formik and [validation](https://github.com/jquense/yup) with Yup for a robust form experience.
- **Infinite Scrolling**: Uses the FlatList `onEndReached` callback to implement [infinite scrolling](https://reactnative.dev/docs/flatlist#onendreached) with cursor-based pagination.
- **GraphQL**: Implements [GraphQL queries and mutations](https://graphql.org/learn/) for efficient data fetching with only the required fields.
- **Custom Hooks**: Creates reusable logic with custom React hooks for repository data, authentication, and form handling.

## Technologies & Libraries

- **Frontend**:
  - [React Native](https://reactnative.dev/) - Mobile application framework
  - [Expo](https://expo.dev/) - React Native toolchain
  - [@apollo/client](https://www.apollographql.com/docs/react/) - GraphQL client
  - [React Router Native](https://reactrouter.com/en/main) - Routing library
  - [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup) - Form handling and validation
  - [React Native Paper](https://callstack.github.io/react-native-paper/) - Material Design components

- **Backend**:
  - [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - GraphQL server
  - [Koa](https://koajs.com/) - Web framework
  - [Knex](https://knexjs.org/) - SQL query builder
  - [Objection.js](https://vincit.github.io/objection.js/) - ORM
  - [SQLite](https://www.sqlite.org/index.html) - Database
  - [JWT](https://jwt.io/) - Authentication

## Installation & Setup

### Backend Setup

1. Ensure you have Node.js v20 or later installed:
   ```
   node -v
   ```

2. Clone the repository and navigate to the backend directory:
   ```
   cd rate-repository-api-backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Register an OAuth application on GitHub:
   - Go to [GitHub Developer Settings](https://github.com/settings/developers)
   - Set "Application name" as "Rate Repository API"
   - Set "Homepage URL" as https://github.com/Kaltsoon/rate-repository-api
   - Set "Authorization callback URL" as http://localhost:5000
   - Note your "Client ID" and "Client Secret"

5. Create a `.env` file in the root directory by copying `.env.template`:
   ```
   cp .env.template .env
   ```

6. Update the `.env` file with your GitHub OAuth credentials:
   ```
   GITHUB_CLIENT_ID=your_client_id
   GITHUB_CLIENT_SECRET=your_client_secret
   JWT_SECRET=your_jwt_secret
   PORT=4000  # Optional, default is 5000
   ```

7. Build the application (sets up SQLite database and runs migrations):
   ```
   npm run build
   ```

8. Populate the database with seed data (optional, will remove existing data):
   ```
   npm run seed:run
   ```

9. Start the backend server:
   ```
   npm start
   ```

   After starting, you can access the Apollo Sandbox at http://localhost:4000 (or your custom port).

   **Note**: If you encounter a port conflict error on macOS:
   ```
   Error: listen EADDRINUSE: address already in use :::5000
   ```
   Change the port in your `.env` file (e.g., `PORT=5001`) and update the GitHub Authorization callback URL accordingly.

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd rate-repository-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```
   EXPO_PUBLIC_APOLLO_URI=http://localhost:4000/graphql
   ```
   Note: Update the port if you changed it in the backend setup.

4. Start the Expo development server:
   ```
   npm start
   ```

5. Use the Expo Go app on your mobile device to scan the QR code, or press 'a' to open in an Android emulator or 'i' for iOS simulator.

## Project Structure

```
rate-repository-app/
├── assets/                # Static assets like images and fonts
├── src/
│   ├── components/        # React components
│   │   ├── AppBar/        # Application navigation bar
│   │   ├── Forms/         # Form components (SignIn, CreateUser, etc.)
│   │   ├── Repositories/  # Repository listing and details
│   │   └── Reviews/       # Review components
│   ├── graphql/           # GraphQL queries, mutations, and fragments
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   └── theme.js           # Application theming
└── App.js                 # Application entry point

rate-repository-api-backend/
├── migrations/            # Database migration files
├── seeds/                 # Seed data for the database
└── src/                   # Backend source code
    ├── graphql/           # GraphQL schema and resolvers
    ├── models/            # Data models
    └── utils/             # Utility functions
```

The `components` directory contains all the UI components organized by feature. The `hooks` directory contains custom React hooks for data fetching and state management. The GraphQL queries and mutations are defined in the `graphql` directory.