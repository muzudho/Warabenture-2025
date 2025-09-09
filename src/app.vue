<template>
    <v-app>
        <v-main>

            <!-- Nuxt + Vue ウェブアプリ用：
                <v-container> は：
                    スマホでのレイアウトの崩れを防止します。
                    ただし、どんなに画面の横幅が広くても、コンテンツはセンタリングされてしまうという欠点はあります
                <NuxtPage> は：
                    この部分に、pages フォルダーの中にある Vue コンポーネント（.vue ファイル）がレンダリングされます。
            -->
            <NuxtLayout>
                <v-container>
                    <NuxtPage />
                </v-container>
            </NuxtLayout>

            <!-- Tauri + Vue デスクトップアプリ用：
                <router-view> は：
                    Nuxt の <NuxtPage> に相当し、この部分にコンポーネントがレンダリングされます。

            <router-view />
            -->

        </v-main>
    </v-app>
</template>

<style>
    @import '@/styles/application.css';
    @import '@/styles/talk-scene.css';

    /**
     * NOTE: Vuetify がテーマの機能を持っているので、 plugins/vuetify.ts でもスタイルを設定すること。
     */
    :root {
        /** ハイフン２つで始まる名前は、スタイルシートに渡す引数名 */
        /*
        --warabenture-sec-1-header-bgcolor: darkmagenta;
        --warabenture-sec-1-header-fgcolor: khaki;
        */
        --warabenture-sec-1-header-bgcolor: skyblue;
        --warabenture-sec-1-header-fgcolor: darkorchid;
        --warabenture-sec-2-header-bgcolor: skyblue;
        --warabenture-sec-2-header-fgcolor: darkorchid;
        --warabenture-sec-3-header-bgcolor: skyblue;
        --warabenture-sec-3-header-fgcolor: darkorchid;
        --warabenture-sec-4-header-bgcolor: skyblue;
        --warabenture-sec-4-header-fgcolor: darkorchid;
        --warabenture-sec-5-header-bgcolor: skyblue;
        --warabenture-sec-5-header-fgcolor: darkorchid;
        --warabenture-sec-6-header-bgcolor: skyblue;
        --warabenture-sec-6-header-fgcolor: darkorchid;

        /* until:2025-09-09
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
         */

        --warabenture-img-six-sharps: url('/img/warabenture/six-sharps-light-white.png');
    }

</style>
