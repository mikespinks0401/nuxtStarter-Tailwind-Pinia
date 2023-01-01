// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr:false,
    srcDir: "src",
    modules:[
        "@nuxtjs/tailwindcss",
        "@pinia/nuxt"
    ],
    runtimeConfig:{
        public:{
            apiBase: process.env.API_BASE || ''
        }
    }
})
