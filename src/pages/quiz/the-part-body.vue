<template>
    <section class="sec-0 sec-contents">
        勇者キフワラニャンは王様に呼ばれた。<v-btn style="visibility: hidden;"></v-btn><br/>
        <!-- 他のページと縦幅を揃えるために、何の働きもしない空ボタンを置いています。 -->

        <ul>

            <li>📖 <router-link to="/quiz/kings-room-tiles" :style="getPreviousLinkHighlight('/quiz/kings-room-tiles')">王の間のタイルを市松模様にしようぜ！</router-link></li>
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

    import { getPreviousLinkHighlight } from '../../composables/link-highlight';

</script>
