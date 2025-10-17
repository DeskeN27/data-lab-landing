import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// База ставим './', чтобы сайт корректно открывался на Pages из любого репозитория
export default defineConfig({
  plugins: [react()],
  base: './'
})
