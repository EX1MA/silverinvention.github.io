import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Cambia esto por el nombre de tu repositorio entre barras
  // Ejemplo: base: '/mi-portafolio/',
  base: '/silverinvention.github.io/', 
  
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
})