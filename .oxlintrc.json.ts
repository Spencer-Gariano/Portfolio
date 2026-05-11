import { defineConfig } from 'oxlint';

export default defineConfig({
  categories: {
    correctness: 'warn',
  },
  rules: {
    'eslint/no-unused-vars': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'always', children: 'ignore', propElementValues: 'always' },
    ],
  },
  ignorePatterns: ['src/routes/**'],
});
