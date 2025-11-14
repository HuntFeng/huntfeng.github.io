// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    baseURL: "/",
  },
  modules: ["@nuxt/ui", "@nuxt/content", "nuxt-gtag"],
  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
    },
  },
  ui: {
    colorMode: false,
  },
  css: ["~/assets/css/main.css"],
  gtag: {
    id: "G-KN2RYR6L1W",
  },
});
