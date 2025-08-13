<template>
    <the-parent-header/>

    <h2>メイキングの章だぜ！</h2>
    <section class="sec-2">
        アプリケーション製作の練習だぜ（＾▽＾）！<v-btn style="visibility: hidden;"></v-btn><br/>
        <!-- 他のページと縦幅を揃えるために、何の働きもしない空ボタンを置いています。 -->

        <ul>
            <li>📖 <router-link to="/making/page-layout">説明を始める前に、説明ページのレイアウトを決めておこうぜ！</router-link></li>
            <li>📖 <router-link to="/making/mount-practice">onMounted を使う練習だぜ！</router-link></li>
            <li>📖 <router-link to="/making/json-file-loading">JSONファイルの読込だぜ！</router-link></li>
            <li>📖 <router-link to="/making/tile-crop">タイル　＞　を画像から切り抜くぜ！</router-link></li>
            <li>📖 <router-link to="/making/count-up">カウントアップするぜ！</router-link></li>
            <li>📖 <router-link to="/making/tile-count-up">タイル　＞　でカウントアップのアニメーションするぜ！</router-link></li>
            <li>📖 <router-link to="/making/tile-count-up-rpg-walk">タイル　＞　でカウントアップのアニメーションするぜ！　＞　ＲＰＧの歩行グラフィック</router-link></li>
            <li>📖 <router-link to="/making/input-axis">上下左右に移動しようぜ！</router-link></li>
            <li>📖 <router-link to="/making/input-axis-rpg-walk">上下左右に移動しようぜ！　＞　ＲＰＧの歩行グラフィック</router-link></li>
            <li>📖 <router-link to="/making/input-axis-rpg-walk-grid">上下左右に移動しようぜ！　＞　ＲＰＧの歩行グラフィック　＞　グリッド吸着</router-link></li>
            <li>📖 <router-link to="/making/input-axis-rpg-walk-boundary-check">上下左右に移動しようぜ！　＞　ＲＰＧの歩行グラフィック　＞　境界チェック</router-link></li>
            <li>📖 <router-link to="/making/input-axis-rpg-walk-scroll-primordial">上下左右に移動しようぜ！　＞　ＲＰＧの歩行グラフィック　＞　原始的スクロール</router-link></li>
            <li>📖 <router-link to="/making/input-axis-rpg-walk-scroll-loop">上下左右に移動しようぜ！　＞　ＲＰＧの歩行グラフィック　＞　循環的スクロール</router-link></li>
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
