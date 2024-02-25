import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

const extensions = [
  '.mjs',
  '.web.tsx',
  '.tsx',
  '.web.ts',
  '.ts',
  '.web.jsx',
  '.jsx',
  '.web.js',
  '.js',
  '.css',
  '.json',
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    extensions,
    alias: {
      'src/': path.resolve(__dirname, 'src') + '/',
      'react-native': 'react-native-web',
    },
  },
});
