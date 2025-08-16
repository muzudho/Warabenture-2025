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
    // # インポート #
    // ##############
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import { ref, onMounted } from 'vue';


    // ##############
    // # 共通データ #
    // ##############

    const desktopappPath = ref('');
    const webappPath = ref('');
    const warabenturePath = ref('');


    // ##############
    // # 起動時処理 #
    // ##############

    onMounted(() => {
        // ページがマウントされたときの処理
        // NOTE: window オブジェクトはブラウザー専用。サーバー側ではプリレンダリングできないので、マウント後に書く。
        const pagePath = window.location.pathname;  // ページのパス。 例： "/making/tile-count-up"

        desktopappPath.value = `https://github.com/muzudho/vue-tauri-desktopapp-sample/blob/main/src/pages${pagePath}.vue`;
        webappPath.value = `https://github.com/muzudho/vue-nuxt-webapp-sample/blob/main/src/pages${pagePath}.vue`;
        warabenturePath.value = `https://github.com/muzudho/Warabenture-2025/blob/main/src/pages${pagePath}.vue`;
    });

</script>
