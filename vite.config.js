import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      mixins: '/src/scss/_mixins.scss',
      shared: '/src/scss/_shared.scss',
      vars: '/src/scss/_vars.scss',
      components: '/src/components',
      assets: '/src/assets',
    }
  }
})
