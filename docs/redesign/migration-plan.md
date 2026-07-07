# Plano de Migração — Next 13 (Pages) → App Router

> **Autor:** Bruno (Arquitetura) · **Status:** Fase 1 · **Estratégia:** incremental, rota a rota, build sempre verde.

## Situação atual

- Next **13.1.5**, **Pages Router** (`src/pages/`), React 18.2, TypeScript.
- Dados: `getStaticProps` + ISR (`revalidate: 600`) consumindo WordPress (`x10.mx`).
- Estilos: Bootstrap 5.3-alpha global + SCSS Modules + tokens M3.
- Deps de 2023, `@next/font` (nome deprecado), GTM via `react-gtm-module`.

## Alvo

- Next **atual (14/15)**, **App Router** (`app/`), **React Server Components** por padrão.
- Metadata API nativa (resolve OG/canonical/JSON-LD sem `<Head>` manual).
- `next/font` (self-host), `next/image` corrigido, GTM via `@next/third-parties`.

## Por que migrar (e não só maquiar)

App Router entrega **de graça** o que hoje é remendo: renderização server-side real do conteúdo (melhor LCP/SEO), `generateMetadata` (metadata + OG + canonical tipados por rota), streaming, e `next/font`. Resolve de uma vez os achados #5 e #6 da auditoria SEO.

## Sequência incremental (Pages e App coexistem)

> App Router e Pages Router **rodam juntos** no mesmo projeto. Migramos uma rota por vez; se algo quebrar, a rota antiga em `pages/` ainda responde. A home vai por **último**.

**Etapa 0 — Preparação**
- Upgrade Next 13 → 14 → 15 (incremental), `@next/font` → `next/font`, atualizar deps e rodar `next lint`/`build`.
- Corrigir `next.config.js` (`images.remotePatterns` válido, HTTPS no CMS, `dangerouslyAllowSVG` revisado).
- Criar `app/layout.tsx` (root) com `<html lang="pt-BR">`, fontes, `metadata` base, JSON-LD global, GTM.

**Etapa 1 — Rotas estáticas simples** (menor risco)
- `sobre` (`about.tsx`), `contato.tsx` → `app/sobre/page.tsx`, `app/contato/page.tsx`.
- Formulário de contato: Client Component (`'use client'`) isolado.

**Etapa 2 — Áreas de atuação**
- `areas/*` → `app/areas/[...]/page.tsx` (ou páginas explícitas). Server Components + `generateMetadata` + schema `Service`.

**Etapa 3 — Blog (dados dinâmicos)**
- `blog.tsx` → `app/blog/page.tsx` (Server Component com `fetch` + revalidate).
- `blog/[id].tsx` → `app/blog/[id]/page.tsx` com `generateStaticParams` + `generateMetadata` + `Article` JSON-LD.
- **Camada de dados resiliente:** wrapper de `fetch` com timeout, retry e fallback (elimina o `getStaticProps` que retorna `undefined`).

**Etapa 4 — Home** (por último, maior visibilidade)
- `index.tsx` → `app/page.tsx`. Hero **server-side** (sem `React.lazy`), carrossel como Client Component com dimensões reservadas (sem gate por `innerWidth`).

**Etapa 5 — Limpeza**
- Remover `src/pages/` residual, `_app.tsx`/`_document.tsx`, Bootstrap global. `next build` + Lighthouse final.

## Mapeamento de conceitos

| Pages Router (hoje) | App Router (alvo) |
|---|---|
| `getStaticProps` + `revalidate` | Server Component `async` + `fetch(..., { next: { revalidate }})` |
| `getStaticPaths` | `generateStaticParams` |
| `<Head>` por página | `export const metadata` / `generateMetadata()` |
| `_app.tsx` / `_document.tsx` | `app/layout.tsx` |
| `react-gtm-module` (useEffect) | `<GoogleTagManager>` (`@next/third-parties`) |
| `@next/font` | `next/font/google` |

## Riscos & mitigação

- **CMS em hospedagem grátis (x10.mx) instável** → camada de fetch com timeout/retry/fallback + ISR; considerar cache/backup dos posts.
- **`react-input-mask` desatualizado** → validar compatibilidade com React 18/19; substituir se necessário.
- **Regressão visual durante a coexistência** → tudo na branch `redesign/modernizacao`, revisão por etapa, `build` verde como gate.
- **SVG via `@svgr/webpack`** → confirmar funcionamento com Turbopack/config nova.

## Ordem vs. o roadmap geral

Design System (Fase 2) vem **antes** da migração de UI para que cada rota migrada já nasça no visual novo. A Etapa 0 (upgrade + config) pode começar em paralelo ao Design System, pois não depende dele.
