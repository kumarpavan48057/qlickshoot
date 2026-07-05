import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Qlickshootpage/', // Replace if your repository name changes
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
