import { ApolloClient, InMemoryCache } from "@apollo/client";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "network-only",
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  uri: process.env.BASE_URL,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

export default client;
