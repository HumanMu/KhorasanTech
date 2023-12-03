import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfig from './tsconfig.json';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [react()],
})
