import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.zip'],
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  base: '/vite-deploy-demo/'
});
