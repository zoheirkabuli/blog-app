import { ThemeProvider } from "@emotion/react";
import "normalize.css";
import "../styles/globals.css";

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
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default MyApp;
