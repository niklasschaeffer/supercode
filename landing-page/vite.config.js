import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: '../docs',
    rollupOptions: {
      input: './index.html'
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
