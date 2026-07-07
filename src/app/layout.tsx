import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/tokens.css';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import { Charm, Libre_Franklin } from 'next/font/google';
import Header from 'components/Commons/Header';
import Footer from 'components/Commons/Footer';

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

const SITE_URL = 'https://figueiroadvocacia.com.br';
const GTM_ID = 'GTM-TTSSRNW';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Figueiró Advocacia — Advocacia de confiança',
    template: '%s | Figueiró Advocacia',
  },
  description:
    'Soluções jurídicas em Direito Civil, Contratos, Sucessões e Trabalhista. Atendimento próximo e técnico. Agende uma avaliação.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Figueiró Advocacia',
    url: SITE_URL,
    title: 'Figueiró Advocacia',
    description:
      'Soluções jurídicas em Direito Civil, Contratos, Sucessões e Trabalhista.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Figueiró Advocacia',
    description:
      'Soluções jurídicas em Direito Civil, Contratos, Sucessões e Trabalhista.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/logos/favicon.svg', apple: '/logos/favicon.svg' },
};

// JSON-LD global. TODO(NAP): preencher `address` real (logradouro, cidade, UF,
// CEP) e o `hasMap`/Google Business Profile para SEO local completo.
const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Figueiró Advocacia',
  url: SITE_URL,
  telephone: '+55-65-99275-0512',
  areaServed: 'BR',
  knowsLanguage: 'pt-BR',
  sameAs: [
    'https://www.instagram.com/leonardofigueiro/',
    'https://www.facebook.com/figueiroadvocacia',
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${libre.className} ${libre.variable} ${charm.variable}`}>
      <body>
        {/* Google Tag Manager (substitui react-gtm-module por next/script) */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />
        <main>{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
        />
      </body>
    </html>
  );
}
