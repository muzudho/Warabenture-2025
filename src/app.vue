<template>
    <v-app>
        <v-main>
            <NuxtLayout>

                <!-- /pages フォルダーの中にある .vue ファイル がここに埋め込まれます。 -->
                <NuxtPage />

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

</style>
