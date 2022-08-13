import { defineConfig } from 'vite';
const path = require('path')

export default defineConfig({
  // Define `base` because this deploys to user.github.io/repo-name/
  base: './',
  build: {
    // Do not inline images and assets to avoid the phaser error
    // "Local data URIs are not supported"
    assetsInlineLimit: 0
  },
  resolve:{
    alias:{
      '@src' : path.resolve(__dirname, './src'),
      '@assets' : path.resolve(__dirname, './assets'),
    },
  },
})