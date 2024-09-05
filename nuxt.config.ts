// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/': {prerender: true},
    // '/login': {prerender: true},
  },
  compatibilityDate: '2024-08-11',
  devtools: { enabled: true }
})
