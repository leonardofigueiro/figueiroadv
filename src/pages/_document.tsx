import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="shortcut icon" href="/logos/favicon.svg"></link>
        <link rel="apple-touch-icon" href="/logos/favicon.svg"></link>
        {/* Fontes agora via next/font (auto-hospedadas em _app.tsx) — sem <link> render-blocking. */}
      </Head>


      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  );
}
