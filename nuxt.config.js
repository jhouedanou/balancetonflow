export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY
  },

  head: {
    link: [
      { 
        rel: 'stylesheet', 
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' 
      }
    ]
  },
  supabase: {
    redirect: false
  },
  compatibilityDate: '2025-02-06'
})