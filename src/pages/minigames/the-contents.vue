<template>
    <section class="sec-0 sec-contents">
        ミニゲームだぜ（＾▽＾）！<v-btn style="visibility: hidden;"></v-btn><br/>
        <!-- 他のページと縦幅を揃えるために、何の働きもしない空ボタンを置いています。 -->

        <ul>
            <li>📖 <router-link to="/minigames/shooting-star-naive" :class="getLinkHighlight('/minigames/shooting-star-naive')">シューティングスター</router-link> - 一瞬流れる星に狙いを付けろだぜ！</li>
            <!--
            <ul>
                <li>📖 <router-link to="/minigames/shooting-star-reactive" :class="getLinkHighlight('/minigames/shooting-star-reactive')">同上</router-link> - ソースコードにリアクティブを用いた書き方</li>
            </ul>
            -->
            <!--
            <li>📖 <router-link to="/minigames/maze" :class="getLinkHighlight('/minigames/maze')">迷路</router-link> - ただ歩くだけ！</li>
            -->
            <li>📖 <router-link to="/minigames/reversi" :class="getLinkHighlight('/minigames/reversi')">リバーシ</router-link> - 挟んだ石をひっくり返すぜ！</li>
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

    import { getLinkHighlight } from '../../composables/link-highlight';

</script>
