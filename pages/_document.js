import Document, { Html, Main, NextScript, Head } from "next/document";
import { useRouter } from "next/router";

class MyDocument extends Document {
  hostName = "";
  static async getInitialProps(ctx) {
    const { req, query, res, asPath, pathname } = ctx;
    this.hostName = req.headers.host;

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html dir="rtl" lang="fa">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${this.hostName}/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${this.hostName}//favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${this.hostName}//favicon-16x16.png`}
          />
          <link
            rel="manifest"
            href={`${this.hostName}/site.webmanifest`}
          ></link>
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
