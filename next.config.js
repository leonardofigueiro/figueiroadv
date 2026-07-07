/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // domains[] foi removido no Next 16 — usar remotePatterns (agora em HTTPS,
    // corrigindo o mixed-content e o hostname/pathname malformados).
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'figueiroadvocacia.x10.mx',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },

  // SVG como componente React (SVGR) — Turbopack é o padrão de dev/build no Next 16.
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Fallback para builds em webpack.
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
