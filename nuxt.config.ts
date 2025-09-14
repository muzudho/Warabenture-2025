// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
    build: {
        transpile: ["vuetify"],
    },
    srcDir: 'src/', // srcフォルダをルートに設定
    dir: {  // マッピングか？
        assets: 'assets', // src/assets
        //components: 'components', // src/components
        //composables: 'composables', // src/composables
        pages: 'pages', // src/pages
        plugins: 'plugins', // src/plugins
        public: '../public', // src から見て ../public
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.VITE_BASE_URL || 'http://localhost:3000/', // デフォルト値として開発環境のURLを設定
        },
    },
})
