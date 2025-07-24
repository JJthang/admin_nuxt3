import tailwindcss from "@tailwindcss/vite";
import { I18N_REDIRECT } from "./utils/cookies";
import { LOCALES_OBJ } from "./utils/constants";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/image",
  ],
  app: {
    head: {
      title:
        "MYSTAYS Hotels & Resorts | Your Hotel in Japan| Official Booking Website",
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },
  imports: {
    autoImport: true,
    dirs: ["composables/**", "utils/**", "modules/**"],
  },
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
    {
      path: "~/modules",
      extensions: [".vue"],
    },
  ],
  i18n: {
    vueI18n: "./utils/i18n/i18n.config.ts",
    strategy: "prefix",
    locales: LOCALES_OBJ,
    restructureDir: "",
    langDir: "locales/",
    lazy: true, // Only load language files when needed (increase performance, reduce initial bundle size).
    compilation: {
      strictMessage: false,
      escapeHtml: true, // If true, HTML characters will be escaped to avoid XSS.
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: I18N_REDIRECT,
      redirectOn: "root", // Just Direct when user go to root /
    },
  },
  runtimeConfig: {
    public: {
      BASE_API: process.env.BASE_API || "http://localhost:3000/",
    },
  },
  image: {
    domains: ["d2ahiw9kb7is19.cloudfront.net", "cdn0.tripla.ai"],
    alias: {
      cloudfront: "https://d2ahiw9kb7is19.cloudfront.net",
      cdn0: "https://cdn0.tripla.ai",
    },
  },
  tailwindcss: {
    configPath: "tailwind.config.ts",
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/styleResource.scss" as *;',
        },
      },
    },
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
});
