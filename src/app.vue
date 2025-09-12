<!--
    Nuxt ウェブ・アプリケーションでは：
        src/app.vue がルートコンポーネントです。
        ここで、アプリ全体のレイアウトを定義します。
        例えば、ヘッダーやフッター、サイドバーなど、全ページに共通する部分を配置します。

    Tauri デスクトップ・アプリケーションでは：
        src/router/index.ts で src/app.vue をルートコンポーネントとして指定しています。
-->

<template>
    <v-app>
        <v-app-bar app density="compact">
            <img
                src="@/assets/img/reference/application/202509__warabenture__12-1833-logo-since20220507.png"
                class="ml-2"
                style="
                    width: 32px;
                    height: 32px;
                "
            />
            <v-toolbar-title style="display: inline;">ワラベンチャー</v-toolbar-title>
        </v-app-bar>
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
     * ワラベンチャー用の設定：
     *
     *      NOTE: Vuetify がテーマの機能を持っているので、 plugins/vuetify.ts でもスタイルを設定すること。
     */
    :root {
        /** ハイフン２つで始まる名前は、スタイルシートに渡す引数名 */
        /*
        --myapplication-sec-1-header-bgcolor: darkmagenta;
        --myapplication-sec-1-header-fgcolor: khaki;
        */
        --myapplication-sec-1-header-bgcolor: skyblue;
        --myapplication-sec-1-header-fgcolor: darkorchid;
        --myapplication-sec-2-header-bgcolor: skyblue;
        --myapplication-sec-2-header-fgcolor: darkorchid;
        --myapplication-sec-3-header-bgcolor: skyblue;
        --myapplication-sec-3-header-fgcolor: darkorchid;
        --myapplication-sec-4-header-bgcolor: skyblue;
        --myapplication-sec-4-header-fgcolor: darkorchid;
        --myapplication-sec-5-header-bgcolor: skyblue;
        --myapplication-sec-5-header-fgcolor: darkorchid;
        --myapplication-sec-6-header-bgcolor: skyblue;
        --myapplication-sec-6-header-fgcolor: darkorchid;

        /* until:2025-09-09
        --myapplication-sec-1-header-bgcolor: darkorchid;
        --myapplication-sec-1-header-fgcolor: skyblue;
        --myapplication-sec-2-header-bgcolor: darkorchid;
        --myapplication-sec-2-header-fgcolor: skyblue;
        --myapplication-sec-3-header-bgcolor: darkorchid;
        --myapplication-sec-3-header-fgcolor: skyblue;
        --myapplication-sec-4-header-bgcolor: darkorchid;
        --myapplication-sec-4-header-fgcolor: skyblue;
        --myapplication-sec-5-header-bgcolor: darkorchid;
        --myapplication-sec-5-header-fgcolor: skyblue;
        --myapplication-sec-6-header-bgcolor: darkorchid;
        --myapplication-sec-6-header-fgcolor: skyblue;
         */

        --myapplication-img-six-sharps: url('/img/application/six-sharps-light-white.png');
    }

</style>
