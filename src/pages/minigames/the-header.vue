<template>
    <the-grand-parent-header/>

    <h2>ミニゲームの章だぜ！</h2>
    <section class="sec-2">
        <v-btn @click="goToMinigames" v-tooltip="'下の節を閉じる'">❌</v-btn>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { useRouter } from 'vue-router';

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TheGrandParentHeader from '../../the-header.vue';


    // ############
    // # ルーチン #
    // ############
    const router = useRouter();

    function goToMinigames() : void {
        router.push('/minigames');
    }
</script>
