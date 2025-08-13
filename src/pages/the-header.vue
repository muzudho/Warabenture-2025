<template>
    <section class="sec-1">
        <v-btn @click="goToHome" v-tooltip="'下の章を閉じる'">❌</v-btn>
        <!--
            <router-link to="/">このサイトのホームへ戻る</router-link>
        -->
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
