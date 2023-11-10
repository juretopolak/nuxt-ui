// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/eslint-module',
    'nuxt-scheduler'
  ],
  colorMode: {
    preference: 'dark' // dark / light
  },
  eslint: {
    fix: true
  }
})
