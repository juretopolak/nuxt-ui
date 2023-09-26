// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/eslint-module'
  ],
  colorMode: {
    preference: 'dark' // dark / light
  },
  eslint: {
    fix: true
  },
  devtools: { enabled: true }
})
