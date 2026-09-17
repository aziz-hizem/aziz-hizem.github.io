import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Deployed as a GitHub Pages user site (aziz-hizem.github.io), so assets live at the root.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
