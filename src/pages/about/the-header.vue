<template>
    <the-grand-parent-header/>

    <section class="sec-1">
        <v-btn @click="goBackToTopOf1" v-tooltip="'下の部を閉じる'">❌</v-btn>
    </section>

    <h2>このサイトについてだぜ！　の部</h2>
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

    
    function goBackToTopOf1() : void {
        router.push('/');
    }

</script>
