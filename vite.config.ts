import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'app': '/src/app',
      'entities': '/src/entities',
      'features': '/src/features',
      'pages': '/src/pages',
      'shared': '/src/shared',
      'widgets': '/src/widgets',
    },
  }
})
