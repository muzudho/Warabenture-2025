<template>
    <the-section-header/>

    <h4>JSONファイルを読込む章だぜ！</h4>
    <section class="sec-4">
        <p>ここに読み込んだJSONデータを表示：</p>
        <pre>{{ jsonStr }}</pre>
        <p>：ここまで。</p>
        <br/>
        元のJSONファイルは、<a target="_blank" :href="jsonFilePath">public{{jsonFilePath}}</a> に置いてあるぜ！<br/>
    </section>

    <br/>
    <h5>ソースコード</h5>
    <section class="sec-5">
        <source-link/>
    </section>

    <the-section-footer/>
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

    import TheSectionFooter from './the-section-footer.vue';
    import TheSectionHeader from './the-section-header.vue';


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
