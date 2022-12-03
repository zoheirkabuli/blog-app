import Document, { Html, Main, NextScript, Head } from "next/document";
import { useRouter } from "next/router";

class MyDocument extends Document {
  render() {
    return (
      <Html dir="rtl" lang="fa">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/blog-app/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/blog-app/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/blog-app/favicon-16x16.png"
          />
          <link rel="manifest" href="/blog-app/site.webmanifest"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
