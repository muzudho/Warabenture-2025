<template>
    <the-grand-parent-header/>

    <section class="sec-1">
        <v-btn @click="goBackToTopOf1" v-tooltip="'下の部を閉じる'">❌</v-btn>
    </section>

    <h2>チームみらいサポーター活動の章だぜ！</h2>
    <section class="sec-2">
        <v-btn @click="goBackToTopOf2" v-tooltip="'下の節を閉じる'">❌</v-btn>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TheGrandParentHeader from '../the-app-header.vue';


    // ############
    // # ルーチン #
    // ############
    
    const router = useRouter();

    
    function goBackToTopOf1() : void {
        router.push('/');
    }


    function goBackToTopOf2() : void {
        router.push('/team-mirai-supporter');
    }

</script>
