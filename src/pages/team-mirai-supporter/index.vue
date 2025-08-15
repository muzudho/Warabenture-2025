<template>
    <the-grand-parent-header/>

    <h2>チームみらいサポーター活動の章だぜ！</h2>
    <section class="sec-2">
        <ul>
            <li>📖 <NuxtLink to="/team-mirai-supporter/heat-map" :style="getPreviousLinkHighlight('/team-mirai-supporter/heat-map')">Heat Map</NuxtLink></li>
        </ul>
    </section>

    <the-grand-parent-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TheGrandParentFooter from '../../the-footer.vue';
    import TheGrandParentHeader from '../../the-header.vue';


    // ++++++++++++++++++
    // + コンポーザブル +
    // ++++++++++++++++++

    import { getPreviousLinkHighlight } from '../../composables/link-highlight';

</script>
