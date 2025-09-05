<template>
    <section class="sec-1">
        <v-btn @click="goBack" v-tooltip="'下の部を閉じる'">❌</v-btn>
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
        router.push('/');
    }

</script>
