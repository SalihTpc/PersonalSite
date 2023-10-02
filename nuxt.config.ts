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
});
