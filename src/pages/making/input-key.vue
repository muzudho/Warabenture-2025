<template>
    <the-header/>

    <h3>キーボードのキー入力を受け取ろうぜ！　の章</h3>
    <section class="sec-3">
        <p>キーボードのキーを押してくれだぜ！</p>
        <pre class="key" style="display: inline;">{{ key }}</pre><!-- スペースキーを押下すると半角スペースが返ってくるので、preタグで隙間を表示させます。 -->
        <span class="text">{{ text }}</span>
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
