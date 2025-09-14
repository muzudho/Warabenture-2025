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
    nitro: {
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
                //'/reference_warabenture',   // index がない
                '/reference_warabenture/team-mirai-supporter',
                '/reference_warabenture/wara-city',
            ],
            failOnError: false, // エラーで止まらない
        },
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.VITE_BASE_URL || 'http://localhost:3000/', // デフォルト値として開発環境のURLを設定
        },
    },
})
