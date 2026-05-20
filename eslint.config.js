import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      pluginQuery.configs['flat/recommended-strict'],
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  // Apply react-refresh ONLY outside routes
  {
    files: ['**/*.{ts,tsx}', '!**/routes/**/*.{ts,tsx}'],
    extends: [reactRefresh.configs.vite],
  },
  // Routes: explicitly clean override
  {
    files: ['**/routes/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  // override react-refresh for shadcn/ui
  {
    files: ['**/components/ui/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    files: ['**/data-table/**/*.{ts,tsx}'],
    rules: {
      'react-hooks/incompatible-library': 'off',
    },
  },
]);
