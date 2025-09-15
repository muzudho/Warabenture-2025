<template>
    <section class="sec-1 sec-contents mt-6">
        <ul>
            <li>📖 <router-link to="/reference/nuxt-config/nitro-config" :class="getLinkHighlight('/reference/nuxt-config/nitro-config')">ニトロのプリレンダーの負荷を下げる設定をしようぜ！</router-link></li>
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
