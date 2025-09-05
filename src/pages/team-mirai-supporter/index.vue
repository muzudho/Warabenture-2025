<template>
    <the-grand-parent-header/>
    <the-parent-header/>

    <h2>チームみらいサポーター活動の章だぜ！　の部　インデックス</h2>
    <section class="sec-2">
        <ul>
            <li>📖 <NuxtLink to="/team-mirai-supporter/heat-map" :style="getPreviousLinkHighlight('/team-mirai-supporter/heat-map')">Heat Map</NuxtLink></li>
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
