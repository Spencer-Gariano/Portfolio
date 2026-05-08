import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: 'local.spencergariano.io',
    port: 5172,
    https: {
      key: '../certs/local.spencergariano.io-key.pem',
      cert: '../certs/local.spencergariano.io.pem',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
