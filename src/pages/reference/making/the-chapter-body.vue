<template>
    <section class="sec-3">
        アプリケーション製作の練習だぜ（＾▽＾）！
        <!-- 他のページと縦幅を揃えるために、何の働きもしない空ボタンを置いています。 -->
        <v-btn style="visibility: hidden;"></v-btn><br/>

        <ul>
            <li>📖 <router-link to="/reference/making/page-layout" :style="getPreviousLinkHighlight('/making/page-layout')">説明を始める前に、説明ページのレイアウトを決めておこうぜ！　の章</router-link></li>
            <li>📖 <router-link to="/reference/making/perspective-vertical-2-panes" :style="getPreviousLinkHighlight('/making/perspective-vertical-2-panes')">画面を上下に分けようぜ！　の章</router-link></li>
            <li>📖 <router-link to="/reference/making/perspective-vertical-3-panes" :style="getPreviousLinkHighlight('/making/perspective-vertical-3-panes')">画面を３段に分けようぜ！　の章</router-link></li>

            <li>📖 <router-link to="/reference/making/svg-arrow" :style="getPreviousLinkHighlight('/making/svg-arrow')">グラフを描こうぜ！　の章</router-link></li>
            <li>📖 <router-link to="/reference/making/mount-practice" :style="getPreviousLinkHighlight('/making/mount-practice')">ページを開いたとき、閉じたときに処理するぜ！　の章</router-link></li>
            <li>📖 <router-link to="/reference/making/json-file-loading" :style="getPreviousLinkHighlight('/making/json-file-loading')">JSONファイルの読込だぜ！　の章</router-link></li>

            <li>📖 <router-link to="/reference/making/button-repeat-1" :style="getPreviousLinkHighlight('/making/button-repeat-1')">ボタンの押しっぱなしが利くようにしようぜ？　の章</router-link></li>

            <li>📖 <router-link to="/reference/making/tile-crop" :style="getPreviousLinkHighlight('/making/tile-crop')">タイル　＞　を画像から切り抜くぜ！　の章</router-link></li>
            <li>📖 <router-link to="/reference/making/count-up" :style="getPreviousLinkHighlight('/making/count-up')">カウントアップするぜ！　の章</router-link></li>
            <li>📖 <router-link to="/reference/making/input-key" :style="getPreviousLinkHighlight('/making/input-key')">キーボードのキー入力を受け取ろうぜ！　の章</router-link></li>
            <li>📖 <router-link to="/reference/making/sfx-practice" :style="getPreviousLinkHighlight('/making/sfx-practice')">効果音を鳴らそうぜ！　の章</router-link></li>
            <li>📖 <router-link to="/reference/making/tile-count-up" :style="getPreviousLinkHighlight('/making/tile-count-up')">タイル　＞　でカウントアップのアニメーションするぜ！　の章</router-link></li>
            <li>📖 <router-link to="/reference/making/tile-count-up-rpg-walk" :style="getPreviousLinkHighlight('/making/tile-count-up-rpg-walk')">タイル　＞　でカウントアップのアニメーションするぜ！　＞　ＲＰＧの歩行グラフィック　の章</router-link></li>

            <li>ＲＰＧの歩行グラフィック：
                <ul>
                    <li>📖 <router-link to="/reference/making/input-axis" :style="getPreviousLinkHighlight('/making/input-axis')">ＲＰＧの歩行グラフィックを表示して、上下左右に移動しようぜ！　の章</router-link></li>
                    <li>📖 <router-link to="/reference/making/input-axis/perspective-rpg-walk-tiles-wraparound-projection-loop-outofsight-maptileimage-1" :style="getPreviousLinkHighlight('/making/input-axis/perspective-rpg-walk-tiles-wraparound-projection-loop-outofsight-maptileimage-1')">🌟画面３分割テスト：　回り込むタイルへ投影・両端つながりの像・視野外マスク例示・マップタイル画像付き</router-link></li>
                </ul>
            </li>

            <li>📖 <router-link to="/reference/making/sprite-routine" :style="getPreviousLinkHighlight('/making/sprite-routine')">スプライト　＞　ルーチン　の章</router-link></li>

        </ul>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーザブル +
    // ++++++++++++++++++++++++++++++++++

    import { getPreviousLinkHighlight } from '../../../composables/link-highlight';

</script>
