<template>
    <section class="sec-1 sec-contents mt-6">
        <ul>
            <li>📖 <router-link to="/reference/sakura-vps/swap-memory" :class="getLinkHighlight('/reference/coding-style/swap-memory')">スワップ・メモリー、アベイラブル・メモリーを増やそうぜ！</router-link></li>
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
