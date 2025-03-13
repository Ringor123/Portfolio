# Repository Rating App Frontend

A mobile application for rating and reviewing GitHub repositories built with React Native and Expo. This application allows users to browse repositories, create accounts, sign in, and leave reviews for repositories.

## Features

- Browse GitHub repositories with detailed information
- Search repositories by keyword
- Sort repositories by creation date or rating
- Create a user account
- Sign in with existing credentials
- View repository details
- Rate and review repositories
- View your own reviews
- Infinite scrolling for repository and review lists

## Technologies

- [React Native](https://reactnative.dev/) - Cross-platform mobile framework
- [Expo](https://expo.dev/) - React Native toolchain and platform
- [Apollo Client](https://www.apollographql.com/docs/react/) - GraphQL client for state management and data fetching
- [React Router Native](https://reactrouter.com/en/main) - Navigation and routing
- [Formik](https://formik.org/) - Form handling
- [Yup](https://github.com/jquense/yup) - Form validation
- [React Native Paper](https://callstack.github.io/react-native-paper/) - Material Design components
- [Async Storage](https://react-native-async-storage.github.io/async-storage/) - Data storage solution

## Installation

1. Ensure you have Node.js installed (v20 or later recommended):
   ```
   node -v
   ```

2. Install Expo CLI globally if you haven't already:
   ```
   npm install -g expo-cli
   ```

3. Clone the repository and navigate to the frontend directory:
   ```
   cd rate-repository-app
   ```

4. Install dependencies:
   ```
   npm install
   ```

5. Create a `.env` file in the root directory with the following content:
   ```
   EXPO_PUBLIC_APOLLO_URI=http://localhost:4000/graphql
   ```
   Note: Update the port if you changed it in the backend setup.

## Running the Application

1. Start the Expo development server:
   ```
   npm start
   ```

2. Use the Expo Go app on your mobile device to scan the QR code, or press 'a' to open in an Android emulator or 'i' for iOS simulator.

3. For different environments, you can use:
   ```
   npm run start:dev    # Development environment
   npm run start:test   # Test environment
   npm run start:prod   # Production environment
   ```

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
│   │   ├── fragments.js   # Reusable GraphQL fragments
│   │   ├── mutations.js   # GraphQL mutations
│   │   └── queries.js     # GraphQL queries
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   │   ├── apolloClient.js # Apollo client configuration
│   │   └── authStorage.js  # Authentication storage
│   └── theme.js           # Application theming
├── App.js                 # Application entry point
├── app.config.js          # Expo configuration
└── babel.config.js        # Babel configuration
```

## Testing

Run tests with:
```
npm test
```

## Linting

Check code quality with:
```
npm run lint
```

## Backend

This frontend application requires the [Repository Rating API](../rate-repository-api-backend/README.md) to be running. Please refer to the backend README for setup instructions.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request