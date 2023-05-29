// import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  srcDir: 'src/',
  // alias: {
  //   assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
  //   '@': fileURLToPath(new URL('./src', import.meta.url)),
  //   '~': fileURLToPath(new URL('./src', import.meta.url)),
  // },
  // dir: {
  //   assets: '@/assets',
  //   layouts: '@/layouts',
  //   pages: '@/pages',
  //   plugins: '@/plugins',
  // },
  imports: {
    autoImport: true,
  },
  plugins: ['~/plugins/primevue.ts', '~/plugins/api.ts'],
  build: {
    transpile: ['primevue'],
  },
  modules: [['@nuxtjs/eslint-module', { lintOnStart: false }], '@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-swiper'],
  css: [
    '@/assets/style/primevue-theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'swiper/css',
    'swiper/css/navigation',
    'tailwindcss/tailwind.css',
    '@/assets/style/main.scss',
  ],
})
