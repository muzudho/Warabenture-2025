<template>
    <the-grand-parent-header/>

    <h2>メイキングの章だぜ！</h2>
    <section class="sec-2">
        アプリケーション製作の練習だぜ（＾▽＾）！<v-btn style="visibility: hidden;"></v-btn><br/>
        <!-- 他のページと縦幅を揃えるために、何の働きもしない空ボタンを置いています。 -->

        <ul>
            <li>📖 <router-link to="/making/page-layout" :style="getPreviousLinkHighlight('/making/page-layout')">説明を始める前に、説明ページのレイアウトを決めておこうぜ！</router-link></li>
            <li>📖 <router-link to="/making/svg-arrow" :style="getPreviousLinkHighlight('/making/svg-arrow')">グラフを描こうぜ！</router-link></li>
            <li>📖 <router-link to="/making/mount-practice" :style="getPreviousLinkHighlight('/making/mount-practice')">ページを開いたとき、閉じたときに処理するぜ！</router-link></li>
            <li>📖 <router-link to="/making/json-file-loading" :style="getPreviousLinkHighlight('/making/json-file-loading')">JSONファイルの読込だぜ！</router-link></li>
            <li>📖 <router-link to="/making/tile-crop" :style="getPreviousLinkHighlight('/making/tile-crop')">タイル　＞　を画像から切り抜くぜ！</router-link></li>
            <li>📖 <router-link to="/making/count-up" :style="getPreviousLinkHighlight('/making/count-up')">カウントアップするぜ！</router-link></li>
            <li>📖 <router-link to="/making/input-key" :style="getPreviousLinkHighlight('/making/input-key')">キーボードのキー入力を受け取ろうぜ！</router-link></li>
            <li>📖 <router-link to="/making/sfx-practice" :style="getPreviousLinkHighlight('/making/sfx-practice')">効果音を鳴らそうぜ！</router-link></li>
            <li>📖 <router-link to="/making/tile-count-up" :style="getPreviousLinkHighlight('/making/tile-count-up')">タイル　＞　でカウントアップのアニメーションするぜ！</router-link></li>
            <li>📖 <router-link to="/making/tile-count-up-rpg-walk" :style="getPreviousLinkHighlight('/making/tile-count-up-rpg-walk')">タイル　＞　でカウントアップのアニメーションするぜ！　＞　ＲＰＧの歩行グラフィック</router-link></li>
            <li>📖 <router-link to="/making/input-axis" :style="getPreviousLinkHighlight('/making/input-axis')">上下左右に移動しようぜ！</router-link></li>
            <li>📖 <router-link to="/making/sprite-routine" :style="getPreviousLinkHighlight('/making/sprite-routine')">スプライト　＞　ルーチン</router-link></li>
        </ul>
    </section>

    <the-grand-parent-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TheGrandParentFooter from '../../the-footer.vue';
    import TheGrandParentHeader from '../../the-header.vue';


    // ++++++++++++++++++
    // + コンポーザブル +
    // ++++++++++++++++++

    import { getPreviousLinkHighlight } from '../../composables/link-highlight';

</script>
