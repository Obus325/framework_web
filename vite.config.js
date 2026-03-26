import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      // how and what folders to scan for files
      routesFolder: [
        {
          src: 'src/Components',
          /*path: '',
          // override globals
          exclude: (excluded) => excluded,
          filePatterns: (filePatterns) => filePatterns,
          extensions: (extensions) => extensions,*/
        },
      ],

      /// what files should be considered as a pages
      //extensions: ['.vue'],

      // what files to include
      //filePatterns: ['**/*'],

      // files to exclude from the scan
      //exclude: [],

    }),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
