import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Esto obliga a Vite a preparar esta librería explícitamente
    include: ['react/jsx-runtime'],
  },
})