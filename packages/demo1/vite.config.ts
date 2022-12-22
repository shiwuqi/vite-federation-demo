import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    cors: true
  },
  plugins: [
    react(),
    federation({
      remotes: {
        siva: "http://localhost:4002/assets/remoteEntry.js",
      },
    }),
  ],
  build: {
    target: 'esnext'
  }
})
