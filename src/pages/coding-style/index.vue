<template>
    <the-grand-parent-header/>
    <the-parent-header/>

    <h2>コーディング・スタイルだぜ！　の部　インデックス</h2>
    <section class="sec-2">
        コーディングの練習だぜ（＾▽＾）！<v-btn style="visibility: hidden;"></v-btn><br/>
        <!-- 他のページと縦幅を揃えるために、何の働きもしない空ボタンを置いています。 -->

        <ul>
            <li>📖 <router-link to="/coding-style/inline-style" :style="getPreviousLinkHighlight('/coding-style/inline-style')">インライン・スタイルの書き方を決めておこうぜの章だぜ！</router-link></li>
            <li>📖 <router-link to="/coding-style/slot" :style="getPreviousLinkHighlight('/coding-style/slot')">スロットの書き方を決めておこうぜの章だぜ！</router-link></li>
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
