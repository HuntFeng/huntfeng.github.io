// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    baseURL: "/",
  },
  modules: ["@nuxt/ui", "@nuxt/content"],
  css: ["~/assets/css/main.css"],
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
});
