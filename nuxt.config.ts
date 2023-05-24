import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  imports: {
    autoImport: false,
  },
  modules: [['@nuxtjs/eslint-module', { lintOnStart: false }], '@nuxtjs/tailwindcss', '@pinia/nuxt'],
})
