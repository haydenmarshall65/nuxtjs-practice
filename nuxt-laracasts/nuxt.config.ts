export default defineNuxtConfig({
  devtools: { enabled: true },
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/tailwind.css'],
  typescript: {
    shim: false
  },
    modules: [
    '@nuxtjs/eslint-module',
  ]
})
