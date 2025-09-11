<template>
    <the-section-header/>

    <h4>キーボードのキー入力を受け取る章だぜ！</h4>
    <section class="sec-4">
        <p>キーボードのキーを押してくれだぜ！</p>
        <pre class="key" style="display: inline;">{{ key }}</pre><!-- スペースキーを押下すると半角スペースが返ってくるので、preタグで隙間を表示させます。 -->
        <span class="text">{{ text }}</span>
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

    const key = ref<string>("");    // 押下されたキー
    const text = ref<string>("");   // 入力テキスト


    // ##########
    // # 開始時 #
    // ##########

    onMounted(() => {
        // キーボード操作の設定
        //
        //      window はブラウザーのオブジェクトなので、（サーバー側ではプリレンダリングできないので）マウント後にアクセスします。
        //
        window.addEventListener('keydown', (e) => {
            key.value = e.key;
            text.value = "キーを押下したぜ（＾▽＾）！"; // キーを入力テキストに追加
        });
        window.addEventListener('keyup', (e) => {
            key.value = e.key;
            text.value = "キーを放したぜ（＾▽＾）！"; // キーを入力テキストに追加
        });

    });

</script>

<style scoped>
    span.key {
        font-weight: bold;
        color: blue;
    }
    span.text {
        color: green;
    }
</style>
