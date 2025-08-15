<template>
    <the-parent-header/>

    <h2>チームみらいサポーター活動の章だぜ！</h2>
    <section class="sec-2">
        <ul>
            <li>📖 <NuxtLink to="/team-mirai-supporter/heat-map" :style="getLinkHighlight('/team-mirai-supporter/heat-map')">Heat Map</NuxtLink></li>
        </ul>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TheParentHeader from '../the-header.vue';


    // ++++++++++++++++++
    // + コンポーザブル +
    // ++++++++++++++++++

    import { getLinkHighlight } from '../../composables/link-highlight';

</script>
