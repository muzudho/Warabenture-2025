<template>
    <the-header/>

    <h3>JSONファイルの読込だぜ！</h3>
    <section class="sec-3">
        <p>{{ jsonStr }}</p>
    </section>
    <hr/>
    <router-link to="/making">メイキングの先頭に戻る</router-link>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted, ref } from 'vue';

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TheHeader from './the-header.vue';

    // ##############
    // # 共有データ #
    // ##############

    const jsonStr = ref("読み込み中...");

    // ##############
    // # 起動時処理 #
    // ##############

    onMounted(async () => {
        try {
            const response = await fetch("/sample.json");   // publicフォルダに置いたファイルにアクセスできる。
            if (!response.ok) throw new Error("Failed to fetch JSON");
            const data: any = await response.json();

            jsonStr.value = JSON.stringify(data, null, 4);

        } catch (error) {
            alert(`ERROR: sample.jsonファイル読込時。 ${error}`);
        }
    });

</script>
