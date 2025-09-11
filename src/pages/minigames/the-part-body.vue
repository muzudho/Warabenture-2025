<template>
    <section class="sec-2">
        ミニゲームだぜ（＾▽＾）！<v-btn style="visibility: hidden;"></v-btn><br/>
        <!-- 他のページと縦幅を揃えるために、何の働きもしない空ボタンを置いています。 -->

        <ul>
            <li>📖 <router-link to="/minigames/shooting-star" :style="getPreviousLinkHighlight('/minigames/shooting-star')">シューティングスター</router-link> - 一瞬流れる星に狙いを付けろだぜ！</li>
            <ul>
                <li>📖 <router-link to="/minigames/shooting-star-naive" :style="getPreviousLinkHighlight('/minigames/shooting-star-naive')">同上</router-link> - ソースコードが初級者向けの書き方版</li>
            </ul>
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

    import { getPreviousLinkHighlight } from '../../composables/link-highlight';

</script>
