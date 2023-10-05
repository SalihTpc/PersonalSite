// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/main.scss"],
  alias: {
    "@": resolve(__dirname, "/"),
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts",
    customRoutes: "page",
    pages: {
      about: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
    langDir: "locales",
    lazy: true,
    locales: [
      {
        code: "en",
        iso: "en",
        name: "EN",
        file: "en.json",
      },
      {
        code: "tr",
        iso: "tr",
        name: "TR",
        file: "tr.json",
      },
    ],
    defaultLocale: "en",
  },
});
