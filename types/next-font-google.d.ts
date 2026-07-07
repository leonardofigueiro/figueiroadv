/**
 * Shim de tipos para `next/font/google` no Next 13.1.5.
 *
 * O submódulo `next/font/google` não expõe `.d.ts` nesta versão — o plugin do
 * Next resolve os tipos em build, mas o `tsc` puro (CI/verificação) não os
 * enxerga. Este shim tipa exatamente o uso do projeto.
 *
 * TODO(Fase 3): REMOVER ao atualizar o Next — versões novas já tipam nativamente.
 */
declare module 'next/font/google' {
  interface NextFont {
    className: string;
    style: { fontFamily: string; fontWeight?: number; fontStyle?: string };
  }
  interface NextFontWithVariable extends NextFont {
    variable: string;
  }
  interface GoogleFontOptions {
    weight?: string | string[];
    style?: string | string[];
    subsets?: string[];
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
    variable?: string;
    preload?: boolean;
    fallback?: string[];
    adjustFontFallback?: boolean;
    axes?: string[];
  }
  export function Charm(options: GoogleFontOptions): NextFontWithVariable;
  export function Libre_Franklin(options: GoogleFontOptions): NextFontWithVariable;
}
