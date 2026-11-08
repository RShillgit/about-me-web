import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Served from https://rshillgit.github.io/about-me-web/, so assets need the repo prefix.
export default defineConfig({
  base: '/about-me-web/',
  plugins: [react(), tailwindcss()],
});
