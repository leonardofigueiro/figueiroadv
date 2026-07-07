import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/tokens.css';
import '@/styles/globals.css';
import { Charm, Libre_Franklin } from 'next/font/google';
import Layout from 'components/Commons/layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

// Auto-hospedagem via next/font — elimina o <link> render-blocking do Google Fonts.
const charm = Charm({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-charm',
  display: 'swap',
});

const libre = Libre_Franklin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-libre',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-TTSSRNW' });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${libre.className} ${libre.variable} ${charm.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
