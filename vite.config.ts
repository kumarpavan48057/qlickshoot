import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/qlickshoot/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
