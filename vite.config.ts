/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [react()],
  test: {
    coverage: {
      reporter: ['html', 'json', 'text'],
    },
    environment: 'jsdom',
    exclude: ['lib', 'dist', 'node_modules'],
    globals: true,
    setupFiles: 'src/setup-tests.ts',
  },
});
