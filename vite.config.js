<<<<<<< HEAD
<<<<<<< HEAD
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
=======
=======
>>>>>>> f623155edb0cf72a4d09896c1207c679f17fd1e1
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
<<<<<<< HEAD
import vueJsx from '@vitejs/plugin-vue-jsx'
=======
>>>>>>> f623155edb0cf72a4d09896c1207c679f17fd1e1

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
<<<<<<< HEAD
    vueJsx(),
=======
>>>>>>> f623155edb0cf72a4d09896c1207c679f17fd1e1
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
<<<<<<< HEAD
>>>>>>> e15ae26e7842a023720f268029335e8442152353
=======
>>>>>>> f623155edb0cf72a4d09896c1207c679f17fd1e1
})
