// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    fs: {
      strict: false,
    },
  },
  build: {
    outDir: "dist",
  },
  base: "/", // ini penting
})
