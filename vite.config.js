import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@stripe/stripe-js', '@stripe/react-stripe-js']
  },
  build: {
    rollupOptions: {
      external: ['@stripe/stripe-js', '@stripe/react-stripe-js']
    }
  }
});
