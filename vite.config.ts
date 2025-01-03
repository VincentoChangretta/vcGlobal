import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'features': '/src/features',
      'entities': '/src/entities',
      'shared': '/src/shared',
      'widgets': '/src/widgets'
    },
  }
})
