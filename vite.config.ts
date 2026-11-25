import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative assets let the same build work at a custom domain or /repository/.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { license: { fileName: 'licenses.md' } },
})
