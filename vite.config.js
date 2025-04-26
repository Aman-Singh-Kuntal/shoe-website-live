import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config
export default defineConfig({
  base: '/shoe-website-live/',  // <- Correct base path
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // <- Add this line
      }
    }
  }
})
