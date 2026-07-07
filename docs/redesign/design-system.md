# Design System — Figueiró Advocacia

> **Autora:** Marina (Design) · **Status:** proposta (Fase 1) · **Direção:** modernizar mantendo a marca atual
> Base herdada: sistema de tokens Material 3 já presente em `src/styles/globals.css` (seed `#291C1D`).

## 1. Princípios

1. **Uma fonte de verdade.** Hoje há três sistemas de estilo sobrepostos (Bootstrap 5.3-alpha global + SCSS Modules + tokens M3). Consolidamos em **tokens + CSS Modules**. Bootstrap sai (ver §7).
2. **Tokens, não valores mágicos.** Nenhum `14px`/`#6C5A5B` solto em componente — tudo referencia um token semântico.
3. **Confiança acima de novidade.** Advocacia vende credibilidade. Layout arejado, tipografia legível, contraste AA.
4. **Mobile-first e acessível** por padrão (contraste ≥ 4.5:1, foco visível, alvos ≥ 44px).

## 2. Marca — marrom amadeirado + dourado (decidido)

A seed do sistema (`#291C1D`) sempre foi um **marrom-escuro neutro**, não um vinho. Direção aprovada: **marrom walnut/espresso** como autoridade + **dourado** como acento (com parcimônia) + **creme quente** de fundo. Marrom transmite tradição, confiança e formalidade — sem o "apetite"/energia do vermelho. Fundamentado em psicologia da cor jurídica e no padrão de mercado (azul-marinho+dourado é o clichê; marrom+dourado diferencia com sobriedade).

| Papel | Token | Valor | Uso |
|---|---|---|---|
| Marca / primária | `--brand` | `#4E3B2F` (walnut) | Links, ênfase, botões |
| Autoridade | `--brand-strong` | `#2E2119` (espresso) | Títulos de seção, footer, hero |
| Hover | `--brand-hover` | `#6B5443` | Estados hover/ativo |
| Acento | `--accent` / `--accent-strong` | `#A07E4C` / `#7A5E34` (bronze p/ texto) | Ícones, detalhes, acento |
| Dourado pálido | `--accent-soft` | `#E7D4B5` | Decorativo apenas (não passa AA em texto) |
| Superfícies | `--surface` / `--surface-2` | `#FBF8F4` / `#F1E9DE` (bege) | Fundo / blocos e cards |
| Tinta | `--ink` / `--ink-muted` | `#2A211C` / `#6B5F55` | Corpo / secundário |
| Estados | `--error` / `--success` | `#B3261E` / `#3E6B3A` | Validação |

Valores completos em [`src/styles/tokens.css`](../../src/styles/tokens.css).

## 3. Tipografia

- **Charm** (cursiva) → **somente acento de marca** (logotipo, uma palavra de destaque no hero). Nunca em corpo ou títulos longos.
- **Libre Franklin** → toda a UI e corpo. Já é a fonte principal; formalizamos a escala.
- **Carregamento:** migrar de `<link>` render-blocking (em `_document.tsx`) para **`next/font`** (self-host, `display: swap`, zero requisição externa) — ganho direto de LCP.

**Escala modular (1.25 · base 16px):**

| Token | Tamanho / linha | Peso | Uso |
|---|---|---|---|
| `--fs-display` | 48–57px / 1.1 | 600 | Hero |
| `--fs-h1` | 39px / 1.15 | 600 | Título de página |
| `--fs-h2` | 31px / 1.2 | 600 | Seção |
| `--fs-h3` | 25px / 1.3 | 500 | Subseção |
| `--fs-body` | 16px / 1.6 | 400 | Corpo |
| `--fs-small` | 14px / 1.5 | 400 | Legendas |

## 4. Espaçamento, raio, elevação

- **Espaçamento** — escala 4/8pt: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`. Elimina o `margin-top:100px` mágico do body (o offset do header fixo vira `scroll-padding`/layout dedicado).
- **Raio** — `--r-sm 6px` (inputs/botões), `--r-md 12px` (cards), `--r-full 999px` (pill/avatar).
- **Elevação** — 2 níveis: `--e-1` (card em repouso, sombra sutil) e `--e-2` (hover/dropdown). Sombras suaves, nada dramático.

## 5. Componentes base (specs)

- **Botão** — `primary` (fundo `--brand-strong`, texto branco), `secondary` (contorno `--brand`), `ghost` (texto). Altura 44px, raio `--r-sm`, foco com anel de 2px `--accent`.
- **Card** — superfície `--surface`, raio `--r-md`, `--e-1`; hover → `--e-2` + leve translate. Usado em áreas de atuação e no blog.
- **Input/Form** — label sempre visível, mensagem de erro com `--error` + `aria-describedby`. Máscara de telefone mantida (`react-input-mask` → avaliar substituto mantido na migração).
- **Header** — fixo, altura fixa via token, links com estado ativo, CTA "Fale conosco" à direita, OffCanvas no mobile.
- **Footer** — 3 colunas (áreas, contato/NAP, redes), tom `--brand-strong`. Onde entram os dados NAP que o SEO local precisa.
- **WhatsApp Button** — flutuante, `--accent`, com `aria-label`.

## 6. Acessibilidade (não negociável)

- Contraste texto/fundo ≥ 4.5:1 (o par marrom/creme passa com folga; o dourado claro **não** passa em texto pequeno — usar só em elementos grandes/decorativos, e o bronze `--accent-strong` para acento em texto).
- Foco visível em tudo que é interativo. Navegação por teclado no OffCanvas e no carrossel.
- `prefers-reduced-motion` respeitado no carrossel e nas transições de card.

## 7. Estratégia de consolidação

1. **Remover** `bootstrap/dist/css/bootstrap.min.css` do import global (`_app.tsx`). Onde o grid do Bootstrap é usado, substituir por CSS Grid/Flex nos Modules.
2. **Centralizar** os tokens num único `tokens.css` (semânticos no topo, referência M3 embaixo) — limpar duplicatas/typos do `globals.css` atual (`--charm: ...;;` tem `;` duplo).
3. Componentes consomem **só tokens semânticos** (`--brand`, `--ink`…), nunca `--ref--*` diretamente.

## 8. Entregável da Fase 2

`tokens.css` consolidado + `next/font` configurado + componentes base (Botão, Card, Input, Header, Footer) prontos para o redesign página a página da Fase 4.
