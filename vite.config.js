import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React — always needed, tiny initial payload
          'vendor-react': ['react', 'react-dom'],
          // Framer Motion — needed for Hero animations (above fold)
          'vendor-framer': ['framer-motion'],
          // Heavy UI libs — deferred below-fold chunks will reference these
          'vendor-github': ['react-github-calendar'],
          'vendor-email':  ['@emailjs/browser'],
          'vendor-ui':     ['lucide-react', 'react-parallax-tilt', 'react-type-animation'],
        },
      },
    },
  },
})