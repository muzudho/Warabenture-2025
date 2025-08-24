<template>
    <the-grand-parent-header/>

    <h2>ミニゲームの部だぜ！</h2>
    <section class="sec-2">
        <v-btn @click="goBack" v-tooltip="'下の節を閉じる'">❌</v-btn>
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

    function goBack() : void {
        router.push('/minigames');
    }
</script>
