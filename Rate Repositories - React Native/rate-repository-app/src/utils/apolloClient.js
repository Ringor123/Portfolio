import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";

const uri = Constants.expoConfig?.extra?.apolloUri;

// console.log('ExpoConfig:', Constants.expoConfig);
// console.log('Apollo URI from config:', uri);

const httpLink = createHttpLink({
  uri,
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      console.log("Access token:", accessToken);
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      };
    } catch (e) {
      console.log("Authentication error:", e.message);
      return {
        headers: {
          ...headers,
        },
      }
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
