<template>
    <the-header/>

    <h3>JSONファイルの読込だぜ！　の章</h3>
    <section class="sec-3">
        <p>ここに読み込んだJSONデータを表示：</p>
        <pre>{{ jsonStr }}</pre>
        <p>：ここまで。</p>
        <br/>
        元のJSONファイルは、<a target="_blank" :href="jsonFilePath">public{{jsonFilePath}}</a> に置いてあるぜ！<br/>
    </section>

    <br/>
    <h3>ソースコード</h3>
    <section class="sec-3">
        <source-link/>
    </section>

    <the-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted, ref } from 'vue';

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import SourceLink from '../../components/SourceLink.vue';
    import TheFooter from './the-footer.vue';
    import TheHeader from './the-header.vue';


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
