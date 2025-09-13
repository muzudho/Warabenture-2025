<template>
    <section class="sec-1 sec-contents mt-6">
        <ul>
            <li>📖 <router-link to="/reference/making/page-layout" :class="getLinkHighlight('/reference/making/page-layout')">説明を始める前に、説明ページのレイアウトを決めておく章だぜ！</router-link></li>
            <li>📖 <router-link to="/reference/making/perspective-vertical-2-panes" :class="getLinkHighlight('/reference/making/perspective-vertical-2-panes')">画面を上下に分ける章だぜ！</router-link></li>
            <li>📖 <router-link to="/reference/making/perspective-vertical-3-panes" :class="getLinkHighlight('/reference/making/perspective-vertical-3-panes')">画面を３段に分ける章だぜ！</router-link></li>
            <li>📖 <router-link to="/reference/making/svg-arrow" :class="getLinkHighlight('/reference/making/svg-arrow')">グラフを描く章だぜ！</router-link></li>


            <li>📖 <router-link to="/reference/making/mount-practice" :class="getLinkHighlight('/reference/making/mount-practice')">ページを開いたとき、閉じたときに処理する章だぜ！</router-link></li>


            <li>📖 <router-link to="/reference/making/json-file-loading" :class="getLinkHighlight('/reference/making/json-file-loading')">JSONファイルを読込む章だぜ！</router-link></li>
            <li>📖 <router-link to="/reference/making/button-repeat-1" :class="getLinkHighlight('/reference/making/button-repeat-1')">ボタンの押しっぱなしが利くようにする章だぜ！</router-link></li>
            <li>📖 <router-link to="/reference/making/tile-crop" :class="getLinkHighlight('/reference/making/tile-crop')">タイル　＞　を画像から切り抜く章だぜ！</router-link></li>
            <li>📖 <router-link to="/reference/making/count-up" :class="getLinkHighlight('/reference/making/count-up')">カウントアップする章だぜ！</router-link></li>
            <li>📖 <router-link to="/reference/making/input-key" :class="getLinkHighlight('/reference/making/input-key')">キーボードのキー入力を受け取る章だぜ！</router-link></li>
            <li>📖 <router-link to="/reference/making/sfx-practice" :class="getLinkHighlight('/reference/making/sfx-practice')">効果音を鳴らす章だぜ！</router-link></li>

            <li>📖 <router-link to="/reference/making/tile-count-up" :class="getLinkHighlight('/reference/making/tile-count-up')">タイル　＞　でカウントアップのアニメーションするぜ！　の章</router-link></li>





            <li>📖 <router-link to="/reference/making/tile-count-up-rpg-walk" :class="getLinkHighlight('/reference/making/tile-count-up-rpg-walk')">タイル　＞　でカウントアップのアニメーションするぜ！　＞　ＲＰＧの歩行グラフィック　の章</router-link></li>

            <li>ＲＰＧの歩行グラフィック：
                <ul>
                    <li>📖 <router-link to="/reference/making/input-axis" :class="getLinkHighlight('/reference/making/input-axis')">ＲＰＧの歩行グラフィックを表示して、上下左右に移動する章だぜ！</router-link></li>
                    <li>📖 <router-link to="/reference/making/input-axis/perspective-rpg-walk-tiles-wraparound-projection-loop-outofsight-maptileimage-1" :class="getLinkHighlight('/reference/making/input-axis/perspective-rpg-walk-tiles-wraparound-projection-loop-outofsight-maptileimage-1')">🌟画面３分割テスト：　回り込むタイルへ投影・両端つながりの像・視野外マスク例示・マップタイル画像付き</router-link></li>

                </ul>
            </li>

            <li>📖 <router-link to="/reference/making/sprite-routine" :class="getLinkHighlight('/reference/making/sprite-routine')">スプライト　＞　ルーチンの章だぜ！</router-link></li>



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

    import { getLinkHighlight } from '../../../composables/link-highlight';

</script>
