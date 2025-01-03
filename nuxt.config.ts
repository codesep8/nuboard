// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
})
