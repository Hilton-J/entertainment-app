import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
    proxy: {
      //'/api': 'http://localhost:9001', // Ensure that Vite forwards `/api` to your backend
      '/api': 'https://entertainment-app-amber.vercel.app', // Ensure that Vite forwards `/api` to your backend
    },
  },
  optimizeDeps: {
    include: ['react-multi-carousel'],
  },
})