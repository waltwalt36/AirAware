// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This configuration helps React communicate with the Flask backend
export default defineConfig({
  plugins: [react()],
  
  server: {
    port: 5173,
  },

  preview: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    host: '0.0.0.0',
  }
})