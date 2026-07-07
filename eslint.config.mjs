import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';

/**
 * ESLint 9 flat config. O Next 16 removeu `next lint`; usamos o ESLint CLI com
 * o plugin do Next diretamente (FlatCompat + eslint-config-next dá "circular
 * JSON" nesta combinação de versões).
 */
const eslintConfig = [
  { ignores: ['.next/**', 'node_modules/**', 'public/**'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    plugins: { '@next/next': nextPlugin, react: reactPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
];

export default eslintConfig;
