// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtAppConfig } from '@nuxt/schema';

const head: NuxtAppConfig['head'] = {
  title: 'Phone Book',
  htmlAttrs: { translate: 'no', lang: 'en' },
};

export default defineNuxtConfig({
  devtools: false,

  css: [
    '@/assets/styles/main.scss',
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    '@/assets/styles/primevue/index.scss',
  ],
  modules: [
    '@pinia/nuxt',
    'nuxt-lodash',
    'nuxt-viewport',
  ],

  //@ts-ignore-next-line
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.NUXT_PUBLIC_API_BASE_URL,
      },
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/breakpoints.scss" as *;
            `,
        },
      },
    },
    optimizeDeps: {
      include: ['vue-toastification'],
    },
  },
  nitro: {
    routeRules: {
      '/**/*.png': { headers: { 'Content-Type': 'image/png' } },
      '/**/*.jpeg': { headers: { 'Content-Type': 'image/jpeg' } },
      '/**/*.jpg': { headers: { 'Content-Type': 'image/jpeg' } },
      '/**/*.webp': { headers: { 'Content-Type': 'image/webp' } },
    },
  },
  app: {
    head,
  },
  experimental: {
    viteServerDynamicImports: false,
  },
  build: {
    transpile: ['primevue'],
  },

  runtimeConfig: {
    apiUrl: process.env.NUXT_PUBLIC_API_URL,

    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL
    }
  },

  devServer: {
    port: 3000,
  },

  viewport: {
    breakpoints: {
      desktopWide: 1600,
      desktopMedium: 1230,
      desktop: 1150,
      tabletWide: 1050,
      tabletMedium: 900,
      tablet: 768,
      mobileWide: 599,
      mobileMedium: 464,
      mobile: 320,
    },
    defaultBreakpoints: {
      desktop: 'desktop',
      mobile: 'mobile',
      tablet: 'tablet',
    },
    fallbackBreakpoint: 'desktop',
  },
})
