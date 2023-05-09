// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  server: {
    host: '0.0.0.0', // Allow connections from outside the host
    https: true, // Enable HTTPS for the server
    proxy: {
      '/api': 'http://api.example.com', // Proxy requests to /api to http://api.example.com
    },
    // timing: false, // Disable server timing middleware
    // compress: false, // Disable response compression middleware
    cors: {
      // origin: 'https://www.example.com' // Allow cross-origin requests from https://www.example.com
    },
  },
  imports: {
    autoImport: false,
    components: true,
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/axios',
  ],
  eslint: {
    extends: 'eslint:recommended',
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
}
export default defineNuxtConfig(config)
