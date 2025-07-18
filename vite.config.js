import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, './'),
  base: './',  // Using relative paths for GitHub Pages deployment
  build: {
    outDir: '',
  },
  server: {
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
});