# Auditoria SEO & Técnica — Figueiró Advocacia

> **Autor:** Rafael (SEO) · **Status:** Fase 1 · Prioridade por impacto × esforço.
> Domínio: `figueiroadvocacia.com.br` · CMS: WordPress em `figueiroadvocacia.x10.mx`.

## Prioridades

| # | Achado | Onde | Correção | Prioridade |
|---|---|---|---|---|
| 1 | **Conflito de canonicalização** — sitemap usa raiz (`figueiroadvocacia.com.br`), canonical da home usa `www.` | `next-sitemap.config.js` vs `index.tsx` | Escolher **uma** forma, aplicar em canonical + sitemap + redirect 301 | 🔴 P0 |
| 2 | **Zero dados estruturados (JSON-LD)** | todo o site | `LegalService` + `LocalBusiness` (NAP), `Attorney`, `BreadcrumbList`, `Article` no blog | 🔴 P0 |
| 3 | **Sem Open Graph / Twitter Cards** | todas as páginas | OG (title/description/image/url/type) + Twitter `summary_large_image` | 🔴 P0 |
| 4 | **`getStaticProps` retorna `undefined` em erro** → risco de página quebrada / não indexada | `index.tsx`, `blog.tsx`, `blog/[id].tsx` | Fallback com `props` vazias + `revalidate`; nunca retornar `undefined` | 🔴 P0 |
| 5 | **Conteúdo above-the-fold em `React.lazy` + Carrossel gated por `innerWidth`** | `index.tsx` | Renderizar server-side; hero indexável e sem layout shift | 🟠 P1 |
| 6 | **Fontes render-blocking** via `<link>` Google Fonts | `_document.tsx` | `next/font` (self-host) — melhora LCP | 🟠 P1 |
| 7 | **`next.config` images:** `domains` deprecado, `remotePatterns` malformado (hostname com protocolo, pathname com `)`), imagem via **HTTP** | `next.config.js` | Corrigir `remotePatterns`; servir CMS por **HTTPS** (mixed content) | 🟠 P1 |
| 8 | **`meta keywords`** (ignorado pelo Google desde 2009) | `index.tsx` etc. | Remover | 🟡 P2 |
| 9 | **`next-sitemap` com `priority`/`changefreq` null** | `next-sitemap.config.js` | Definir por tipo de página; garantir todas as rotas | 🟡 P2 |
| 10 | GTM via `useEffect`/`react-gtm-module` | `_app.tsx` | `@next/third-parties` (`GoogleTagManager`) — carregamento otimizado | 🟡 P2 |

## Dados estruturados propostos (JSON-LD)

- **Global (layout):** `LegalService` + `LocalBusiness` — nome, `image`/logo, `address` (NAP), `telephone`, `areaServed`, `openingHours`, `sameAs` (redes), `priceRange`.
- **Página de área:** `Service` (ex.: Direito Trabalhista) referenciando o `LegalService`.
- **Blog (`/blog/[id]`):** `Article` — `headline`, `datePublished`, `author`, `image`, `publisher`.
- **Navegação:** `BreadcrumbList` em áreas e posts.

> ℹ️ Um `LocalBusiness` correto depende de **NAP real** (nome, endereço, telefone). Preciso desses dados de você — e do link do **Google Business Profile** para o `sameAs` e o SEO local.

## Metadata por página (padrão)

`title` único (≤ 60 car.) · `description` (≤ 155 car.) · `canonical` absoluto e consistente · OG/Twitter completos · `lang="pt-BR"` (já ok) · sem `keywords`.

## Performance / Core Web Vitals (metas)

- **LCP < 2.5s** — hero server-side, `next/font`, `next/image` com `priority` no herói.
- **CLS < 0.1** — dimensões reservadas para imagens e carrossel (hoje há shift do carrossel).
- **INP** — reduzir JS de terceiros (GTM otimizado).
- Medir com **Lighthouse + Search Console** antes/depois (baseline na Fase 5).

## SEO Local (advocacia)

Google Business Profile consistente com o NAP do site; página de contato com endereço + mapa; schema `LocalBusiness`; avaliações (se houver, dentro das regras da OAB).

## Decisões pra você

1. **www ou raiz?** Recomendo **raiz** (`figueiroadvocacia.com.br`) — mais curto, e alinha com o sitemap atual.
2. **NAP + Google Business Profile:** me passe nome jurídico, endereço, telefone e o link do perfil.
