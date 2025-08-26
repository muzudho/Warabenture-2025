<template>
    <br/>
    <section class="sec-1">
        <v-btn @click="goToHome" v-tooltip="'上の部を閉じる'">❌</v-btn>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { useRouter } from 'vue-router';


    // ############
    // # ルーチン #
    // ############
    const router = useRouter();

    function goToHome() : void {
        router.push('/');
    }
</script>
