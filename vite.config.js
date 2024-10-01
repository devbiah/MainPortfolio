import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MainPortfolio/', // ajuste para o nome do seu repositório
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
  server: {
    sourcemap: true,
  },
});
