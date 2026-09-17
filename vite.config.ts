import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    // No sourcemaps in the deployed bundle: they doubled dist size (2.1 MB index-*.js.map)
    // and shipped readable source to the public site. Turn on locally when debugging.
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 4174,
    host: '0.0.0.0',
    allowedHosts: true
  },
})
