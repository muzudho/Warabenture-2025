<template>
    <the-app-header/>
    <button-to-close-pane
        class="sec-0"
        direction="down"
        pagePath="/reference"
    />

    <h1>JSONファイルを読込む章だぜ！</h1>
    <section class="sec-1">
        <p>ここに読み込んだJSONデータを表示：</p>
        <pre>{{ jsonStr }}</pre>
        <p>：ここまで。</p>
        <br/>
        元のJSONファイルは、<a target="_blank" :href="jsonFilePath">public{{jsonFilePath}}</a> に置いてあるぜ！<br/>
    </section>

    <br/>
    <h2>ソースコード</h2>
    <section class="sec-2">
        <source-link/>
    </section>

    <button-to-close-pane
        class="sec-0"
        direction="up"
        pagePath="/reference"
    />
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted, ref } from 'vue';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import SourceLink from '../../../components/SourceLink.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import ButtonToClosePane from '@/components/ButtonToClosePane.vue';
    import TheAppHeader from '../../the-app-header.vue';


    // ##############
    // # 共有データ #
    // ##############

    const jsonFilePath = "/sample.json";
    const jsonStr = ref("読み込み中...");


    // ##############
    // # 起動時処理 #
    // ##############

    onMounted(async () => {
        try {
            const response = await fetch(jsonFilePath);   // publicフォルダに置いたファイルにアクセスできる。
            if (!response.ok) throw new Error("Failed to fetch JSON");
            const data: any = await response.json();

            jsonStr.value = JSON.stringify(data, null, 4);

        } catch (error) {
            alert(`ERROR: sample.jsonファイル読込時。 ${error}`);
        }
    });

</script>
