import { createResolver } from 'nuxt/kit'

const { resolve } = createResolver(import.meta.url)

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
  runtimeConfig: {
    dbDir: resolve('./server/db'),
  }
})
