// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: [
    '~/assets/styles/fonts.css',
    '~/assets/styles/variables.css',
    '~/assets/styles/base.css'
  ],
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  app: {
    baseURL: '/nft-landing/',
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/nft-landing/favicon.ico' }
      ]
    }
  },
  runtimeConfig: {
    app: {
      baseURL: '/nft-landing/'
    }
  },
  experimental: {
    payloadExtraction: false
  }
})
