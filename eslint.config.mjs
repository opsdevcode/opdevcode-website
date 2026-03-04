import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.astro/**',
      '*.config.mjs',
      '*.config.cjs',
      'scripts/**',
    ],
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      'astro/no-unused-css-selector': 'warn',
      'astro/semi': ['error', 'never'],
    },
  },
];
