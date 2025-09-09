<template>
    <v-app>
        <v-main>
            <NuxtLayout>
                <!--
                    v-container は、レイアウトの崩れを防止します。
                    どんなに画面の横幅が広くても、コンテンツはセンタリングされてしまうという欠点はあります
                -->
                <v-container>

                    <!-- /pages フォルダーの中にある .vue ファイル がここに埋め込まれます。 -->
                    <NuxtPage />

                </v-container>
            </NuxtLayout>
        </v-main>
    </v-app>
</template>

<style>
    @import '@/styles/talk-scene.css';
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
