import { ThemeProvider } from "@emotion/react";
import "normalize.css";
import "../styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

import MainLayout from "../components/layout/MainLayout";

const theme = {
  colors: {
    primary: "#a5525f",
    secondary: "#d4af37",
    accent: "#2b2b2b",
    body: "#232323",
    heading: "#0f0f0f",
    meta: "#757575",
    border: "#BDBDBD",
    bg: "#fafafa",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
