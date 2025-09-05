<template>
    <the-grand-parent-header/>
    <the-parent-header/>

    <h2>クイズだぜ！　の部　インデックス</h2>
    <section class="sec-2">
        勇者キフワラニャンは王様に呼ばれた。<v-btn style="visibility: hidden;"></v-btn><br/>
        <!-- 他のページと縦幅を揃えるために、何の働きもしない空ボタンを置いています。 -->

        <ul>
            <li>📖 <router-link to="/quiz/kings-room-tiles" :style="getPreviousLinkHighlight('/quiz/kings-room-tiles')">王の間のタイルを市松模様にしようぜ！</router-link></li>
        </ul>
    </section>

    <the-parent-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TheGrandParentHeader from '../../the-header.vue';
    import TheParentFooter from '../the-footer.vue';
    import TheParentHeader from '../the-header.vue';


    // ++++++++++++++++++
    // + コンポーザブル +
    // ++++++++++++++++++

    import { getPreviousLinkHighlight } from '../../composables/link-highlight';

</script>
