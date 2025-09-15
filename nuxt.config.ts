// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {
        '#public': './public',
    },
    build: {
        transpile: ["vuetify"],
    },
    compatibilityDate: '2025-05-15',
    css: [
        //"vuetify/styles",
        'vuetify/lib/styles/main.sass',
        //"@mdi/font/css/materialdesignicons.css",
        '@mdi/font/css/materialdesignicons.min.css'
    ],
    devtools: { enabled: true },
    dir: {  // マッピングか？
        assets: 'assets', // src/assets
        //components: 'components', // src/components
        //composables: 'composables', // src/composables
        pages: 'pages', // src/pages
        plugins: 'plugins', // src/plugins
        public: '../public', // src から見て ../public
    },
    nitro: { // ワラベンチャー用。
        prerender: {    // プリレンダーの設定。処理が重たいから、軽くするために。
            crawlLinks: false, // クローラー無効化
            routes: [   // ワラベンチャー用。必要なルートだけ指定。重たいルートはコメントアウトしてください
                '/',
                '/about',
                '/blog',
                '/home',
                '/minigames',
                '/quiz',
                '/reference',
                //'/reference_warabenture',   // index.vue がない
                '/reference_warabenture/team-mirai-supporter',
                //'/reference_warabenture/wara-city', // index.vue がない
                '/reference_warabenture/wara-city/map',
            ],
            failOnError: false, // エラーで止まらない
        },
        routeRules: {
            '/data/**': { static: true },   // public/data ディレクトリー下を、静的配信強制
        },
    },
    runtimeConfig: {
        public: {
            baseUrl: process.env.VITE_BASE_URL || 'http://localhost:3000/', // デフォルト値として開発環境のURLを設定
        },
    },
    srcDir: 'src/', // srcフォルダをルートに設定
})
