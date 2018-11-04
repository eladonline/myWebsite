// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <title>אתר בנוי למכירה we factor</title>
          <meta name="description" content="אתר בנוי דף נחיתה אתר תדמית למכירה ע'י חברת we factor בניית אתרים עיצוב אתרים אתר למכירה" />
          <meta name="author" content="we factor" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>{`body { margin: 0 }`}</style>
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
