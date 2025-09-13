<template>
    <section class="sec-1 sec-contents mt-6">
        <ul>
            <li>📖 <router-link to="/reference/coding-style/inline-style" :class="getLinkHighlight('/reference/coding-style/inline-style')">インライン・スタイルの書き方を決めておくの節だぜ！</router-link></li>
            <li>📖 <router-link to="/reference/coding-style/slot" :class="getLinkHighlight('/reference/coding-style/slot')">スロットの書き方を決めておくの節だぜ！</router-link></li>
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

    import { getLinkHighlight } from '../../../composables/link-highlight';

</script>
