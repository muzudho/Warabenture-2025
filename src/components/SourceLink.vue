<template>
    <p>ソースコードはこちら（＾▽＾）！</p>
    <ul>
        <li>📖 <a target="_blank" :href="desktopappPath">デスクトップアプリ版のソースコード</a></li>
        <li>📖 <a target="_blank" :href="webappPath">ウェブアプリ版のソースコード</a></li>
        <li>📖 <a target="_blank" :href="warabenturePath">このワラベンチャーのソースコード</a></li>
    </ul>    
</template>

<script setup lang="ts">

    // ##############
    // # 共通データ #
    // ##############

    const pagePath = window.location.pathname;  // ページのパス。 例： "/making/tile-count-up"

    const desktopappPath = `https://github.com/muzudho/vue-tauri-desktopapp-sample/blob/main/src/pages${pagePath}.vue`;
    const webappPath = `https://github.com/muzudho/vue-nuxt-webapp-sample/blob/main/src/pages${pagePath}.vue`;
    const warabenturePath = `https://github.com/muzudho/Warabenture-2025/blob/main/src/pages${pagePath}.vue`;

</script>
