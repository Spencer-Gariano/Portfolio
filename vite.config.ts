import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { analyzer } from 'vite-bundle-analyzer';
import path from 'path';

const shouldAnalyze = process.env.ANALYZE === 'true';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), shouldAnalyze && analyzer()].filter(Boolean),
  server: {
    host: true,
    hmr: {
      host: 'local.spencergariano.dev',
      protocol: 'wss',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
