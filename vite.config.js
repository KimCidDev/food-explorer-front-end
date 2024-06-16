import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'build'
  },
  server: {
    watch: {
      usePolling: true // Use polling for file changes, useful in some environments
    },
    hmr: {
      overlay: true // Enable HMR overlay for showing errors in the browser
    }
  }
});
