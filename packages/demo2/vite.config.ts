import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './Button': './src/components/Button/index.tsx',
      }
    })
  ]
})
