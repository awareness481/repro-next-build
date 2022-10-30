import { Children } from 'react';
import Document, { Html, Main, Head, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { globalStyles } from '@styles';
import type { DocumentContext, DocumentProps } from 'next/document';

const Doc = (props: DocumentProps) => {
  const { locale } = props;

  return (
    <Html dir="ltr" lang={locale}>
      <Head>
        <base href="/" />
        <meta charSet="utf-8" />
        <link href="/favicon.ico" rel="icon" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="IE=edge, chrome=1" httpEquiv="X-UA-Compatible" />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/asset/font/Inter.var.woff2"
          rel="preload"
          type="font/woff2"
        />
        <meta content="" name="twitter:site" />
        <meta content="" property="og:title" />
        <meta content="" property="twitter:title" />
        <meta content="" property="og:description" />
        <meta content="" property="twitter:description" />
        <meta content="" property="og:url" />
        <meta content="" name="twitter:image" />
        <meta content="" property="og:image" />
        <meta content="summary_large_image" name="twitter:card" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

Doc.getInitialProps = async (context: DocumentContext) => {
  globalStyles();

  const initialProps = await Document.getInitialProps(context);

  return {
    ...initialProps,
    styles: Children.toArray([initialProps.styles, CssBaseline.flush()])
  };
};

export default Doc;
