<template>
    <the-parent-header/>

    <h2>メイキングの章だぜ！</h2>
    <section class="sec-2">
        アプリケーション製作の練習だぜ（＾▽＾）！<br/>

        <ul>
            <li>📖 <router-link to="/making/page-layout">説明を始める前に、説明ページのレイアウトを決めておこうぜ！</router-link></li>
            <li>📖 <router-link to="/making/mount-practice">onMounted を使う練習だぜ！</router-link></li>
            <li>📖 <router-link to="/making/json-file-loading">JSONファイルの読込だぜ！</router-link></li>
            <li>📖 <router-link to="/making/tile-crop">タイル　＞　を画像から切り抜くぜ！</router-link></li>
            <li>📖 <router-link to="/making/count-up">カウントアップするぜ！</router-link></li>
            <li>📖 <router-link to="/making/tile-count-up">タイル　＞　でカウントアップのアニメーションするぜ！</router-link></li>
            <li>📖 <router-link to="/making/tile-count-up-rpg-walk">タイル　＞　でカウントアップのアニメーションするぜ！　＞　ＲＰＧの歩行グラフィック</router-link></li>
        </ul>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TheParentHeader from '../the-header.vue';

</script>
