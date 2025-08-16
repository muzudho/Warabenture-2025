<template>
    <br/>
    <section class="sec-2">
        <v-btn @click="goToMinigames" v-tooltip="'上の節を閉じる'">❌</v-btn>
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

    function goToMinigames() : void {
        router.push('/minigames');
    }
</script>
