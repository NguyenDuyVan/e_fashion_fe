import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  imports: {
    autoImport: false,
  },
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
})
