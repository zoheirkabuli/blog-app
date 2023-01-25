import { ThemeProvider } from "@emotion/react";
import "normalize.css";
import "../styles/globals.css";
import localFont from "@next/font/local";
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

const iranYekan = localFont({
  src: [
    {
      path: "../assets/fonts/woff/iranyekanwebthin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff/iranyekanweblight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff/iranyekanwebregular.woff",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff/iranyekanwebmedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff/iranyekanwebbold.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff/iranyekanwebextrabold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff/iranyekanwebblack.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff/iranyekanwebextrablack.woff",
      weight: "950",
      style: "normal",
    },
  ],
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <style jsx global>{`
          body {
            font-family: ${iranYekan.style.fontFamily};
          }
        `}</style>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
