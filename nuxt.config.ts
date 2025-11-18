import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
  compatibilityDate: '2025-11-18',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  typescript: {
    strict: true
  },
  app: {
    head: {
      titleTemplate: '%s · nano banana',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#111827' }
      ]
    }
  },
  ui: {
    icons: ['heroicons'],
    primary: 'indigo',
    gray: 'cool'
  },
  runtimeConfig: {
    nanoBananaApiKey: '',
    public: {
      siteName: 'nano banana'
    }
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'zh-CN', name: '简体中文', file: 'zh-CN.json' }
    ],
    defaultLocale: 'zh-CN',
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'nb_lang',
      redirectOn: 'no_redirect'
    }
  }
})