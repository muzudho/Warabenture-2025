<template>
    <the-app-header/>
    <button-to-close-pane
        class="sec-0"
        direction="down"
        pagePath="/reference"
    />

    <h1>キーボードのキー入力を受け取る章だぜ！</h1>
    <section class="sec-1">
        <p>キーボードのキーを押してくれだぜ！</p>
        <pre class="key" style="display: inline;">{{ key }}</pre><!-- スペースキーを押下すると半角スペースが返ってくるので、preタグで隙間を表示させます。 -->
        <span class="text">{{ text }}</span>
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
