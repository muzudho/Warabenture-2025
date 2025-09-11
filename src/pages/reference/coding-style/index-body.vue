<template>
    <h3>コーディング・スタイルの章だぜ！</h3>
    <section class="sec-3">
        コーディングの練習だぜ（＾▽＾）！
        <!-- 他のページと縦幅を揃えるために、何の働きもしない空ボタンを置いています。 -->
        <v-btn style="visibility: hidden;"></v-btn><br/>

        <ul>
            <li>📖 <router-link to="/reference/coding-style/inline-style" :style="getPreviousLinkHighlight('/reference/coding-style/inline-style')">インライン・スタイルの書き方を決めておくの節だぜ！</router-link></li>
            <li>📖 <router-link to="/reference/coding-style/slot" :style="getPreviousLinkHighlight('/reference/coding-style/slot')">スロットの書き方を決めておくの節だぜ！</router-link></li>
        </ul>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++
    // + コンポーザブル +
    // ++++++++++++++++++

    import { getPreviousLinkHighlight } from '../../../composables/link-highlight';

</script>
