import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react(),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        presets: ["@babel/preset-react", "@babel/preset-env"],
        plugins: [
          [
            "@babel/plugin-proposal-decorators",
            { loose: true, version: "2022-03" },
          ],
        ],
      },
    })],
})
