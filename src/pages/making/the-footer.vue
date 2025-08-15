<template>
    <br/>
    <section class="sec-2">
        <v-btn @click="goToMaking" v-tooltip="'上の節を閉じる'">❌</v-btn>
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

    function goToMaking() : void {
        router.push('/making');
    }
</script>
