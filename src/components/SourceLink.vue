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


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################

    interface Props {
        pagePath?: string | null;  // ページのパス。指定しなければ現在のページのパス。 例： "/making/tile-count-up"
    }
    // デフォルト値を設定
    const props = defineProps<Props>();


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
        let pagePathWithExtension: string;
        if (props.pagePath == null) {
            // NOTE: window オブジェクトはブラウザー専用。サーバー側ではプリレンダリングできないので、マウント後に書く。
            pagePathWithExtension = `${window.location.pathname}.vue`;  // ページのパス。 例： "/making/tile-count-up"
        } else {
            pagePathWithExtension = `${props.pagePath}.vue`;
        }

        desktopappPath.value = `https://github.com/muzudho/vue-tauri-desktopapp-sample/blob/main/src/pages${pagePathWithExtension}`;
        webappPath.value = `https://github.com/muzudho/vue-nuxt-webapp-sample/blob/main/src/pages${pagePathWithExtension}`;
        warabenturePath.value = `https://github.com/muzudho/Warabenture-2025/blob/main/src/pages${pagePathWithExtension}`;
    });

</script>
