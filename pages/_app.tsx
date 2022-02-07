import Analytics from '@/components/analytics';
import { ClientReload } from '@/components/ClientReload';
import LayoutWrapper from '@/components/LayoutWrapper';
import '@/css/prism.css';
import '@/css/tailwind.css';
import siteMetadata from '@/data/siteMetadata';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const isDevelopment = process.env.NODE_ENV === 'development';
const isSocket = process.env.SOCKET;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
