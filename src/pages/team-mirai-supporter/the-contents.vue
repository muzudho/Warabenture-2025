<template>
    <section class="sec-1 sec-contents mt-6">
        <ul>
            <li>📖 <NuxtLink to="/team-mirai-supporter/heat-map" :style="getPreviousLinkHighlight('/team-mirai-supporter/heat-map')">Heat Map</NuxtLink></li>
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
