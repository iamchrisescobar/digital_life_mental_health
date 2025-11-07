import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use relative asset paths so it works on GitHub Pages (docs folder)
export default defineConfig({
  plugins: [react()],
  base: '/digital_life_mental_health/',
  build: { outDir: 'docs' }
})
