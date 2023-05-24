import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  alias: {
    assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
    '@': fileURLToPath(new URL('./src', import.meta.url)),
    '~': fileURLToPath(new URL('./src', import.meta.url)),
  },
  imports: {
    autoImport: true,
  },
  plugins: ['~/plugins/primevue.ts', '~/plugins/api.ts'],
  build: {
    transpile: ['primevue'],
  },
  modules: [['@nuxtjs/eslint-module', { lintOnStart: false }], '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: [
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
    '@/assets/style/main.css',
  ],
})
