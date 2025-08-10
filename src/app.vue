<template>
    <v-app>
        <v-main>
            <NuxtLayout>

                <!-- ナビゲーション -->
                <nav>
                    <!--
                        pages/ フォルダー下のページのファイル名は、
                        Nuxt 公式では kebab-case、
                            📖 https://nuxt.com/docs/3.x/guide/directory-structure/pages
                        Tauri では PascalCase が習慣的に使われています。異なるので注意。
                    -->
                    <router-link to="/">ホーム</router-link> |
                    <router-link to="/about">このサイトについて</router-link> |
                    <router-link to="/blog">ブログ</router-link> |
                    <router-link to="/team-mirai-supporter">チームみらいサポーター活動</router-link> |
                    <router-link to="/wara-city/map">わらシティ</router-link> |
                    <router-link to="/making">メイキング</router-link>
                </nav>

                <h1>ワラベンチャー</h1>

                <!-- /pages フォルダーの中にある .vue ファイル がここに埋め込まれます。 -->
                <NuxtPage />

            </NuxtLayout>
        </v-main>
    </v-app>
</template>

<style>
    @import '@/styles/warabenture.css';

    /**
     * NOTE: Vuetify がテーマの機能を持っているので、 plugins/vuetify.ts でもスタイルを設定すること。
     */
    :root {
        /** ハイフン２つで始まる名前は、スタイルシートに渡す引数名 */
        /*
        --warabenture-sec-1-header-bgcolor: darkmagenta;
        --warabenture-sec-1-header-fgcolor: khaki;
        */
        --warabenture-sec-1-header-bgcolor: darkorchid;
        --warabenture-sec-1-header-fgcolor: skyblue;
        --warabenture-sec-2-header-bgcolor: darkorchid;
        --warabenture-sec-2-header-fgcolor: skyblue;
        --warabenture-sec-3-header-bgcolor: darkorchid;
        --warabenture-sec-3-header-fgcolor: skyblue;
        --warabenture-sec-4-header-bgcolor: darkorchid;
        --warabenture-sec-4-header-fgcolor: skyblue;
        --warabenture-sec-5-header-bgcolor: darkorchid;
        --warabenture-sec-5-header-fgcolor: skyblue;
        --warabenture-sec-6-header-bgcolor: darkorchid;
        --warabenture-sec-6-header-fgcolor: skyblue;

        --warabenture-img-six-sharps: url('/img/warabenture/six-sharps-light-skyblue.png');
    }

    /** スクリーンショットの引用 */
    img.scr-shot {
        margin-top: 8px;
        margin-bottom: 8px;
    }

    div.talk{
        display: flex;
        align-items: center;
        margin-top: 1px;
        margin-bottom: 1px;
        color: #101010;
    }

    div.face-container{
        width:100px;
    }

    div.baloon{
        padding-left:16px;
        padding-top: 12px;
        padding-bottom:16px;
        padding-right:16px;
        background-color: #F8F8F8;
        border-radius: 16px;
    }

    /**
    *       | 0%   100%
    *   ----+----------
    *     0%|         2
    *    50%|  1
    *   100%|         3
    */
    div.baloon-tail {
        width: 20px;
        height: 15px;
        background-color: #F8F8F8; /* 白い背景 */
        clip-path: polygon(0% 50%, 100% 0%, 100% 100%); /* 上頂点、下底の三角形 */
    }

    div.code-b, pre.code-b {
        display:inline-block;
        background-color: #222222;
        color:#DDD;
        margin-top: 12px;
        margin-bottom: 12px;
        padding-left: 20px;
        padding-top: 16px;
        padding-right: 20px;
        padding-bottom: 20px;
        border: 1px solid;
        border-color: #888888 #DDDDDD #DDDDDD #888888;
        box-shadow: inset 1px 1px 0px #111111, inset -1px -1px 0px #DDDDDD;
    }

    span.code-b {
        background-color: #111111;
        color:#EEEEEE;
        margin-left: 6px;
        margin-right: 6px;
        padding-left: 8px;
        padding-right: 8px;
        box-shadow: inset 1px 1px 4px rgba(255,255,255,1.0);
    }

    div.code-w {
        background-color: #EEEEEE;
        color:#111111;
        border-radius: 8px;
        padding-left: 8px;
        padding-right: 8px;
        box-shadow: inset 2px 2px 5px rgba(0,0,0,.5);
    }

    span.code-w {
        background-color: #EEEEEE;
        color:#111111;
        border-radius: 8px;
        margin-left: 6px;
        margin-right: 6px;
        padding-left: 8px;
        padding-right: 8px;
        box-shadow: inset 2px 2px 5px rgba(0,0,0,.5);
    }

    span.font-x2 {
        font-size: 200%;
    }
</style>