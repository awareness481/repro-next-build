import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import { theme } from '@styles';
import { BasicLayout } from '@layouts';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

const App: NextPage<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>NextUI & Next.js</title>
        <meta content="" name="keywords" />
        <meta content="" name="description" />
        <meta
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <ThemeProvider attribute="class" {...theme}>
        <NextUIProvider>
          <BasicLayout>
            <Component {...pageProps} />
          </BasicLayout>
        </NextUIProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
