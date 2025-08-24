<template>
    <br/>
    <section class="sec-2">
        <v-btn @click="goBack" v-tooltip="'上の章を閉じる'">❌</v-btn>
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

    function goBack() : void {
        router.push('/making');
    }
</script>
