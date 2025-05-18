import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Cambiá el nombre del repositorio por el tuyo exacto
export default defineConfig({
  base: '/Irregulares',
  plugins: [react()]
})
