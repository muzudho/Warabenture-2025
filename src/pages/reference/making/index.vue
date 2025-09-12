<template>
    <the-part-header/>

    <section class="sec-2">
        <v-btn @click="openAllChapters" v-tooltip="'全章を開く'">🟩</v-btn>
    </section>

    <the-chapter-header/>
    <the-chapter-body/>
    <the-chapter-footer/>

    <the-part-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { useRouter } from 'vue-router';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import TheChapterBody from '@/pages/reference/making/the-chapter-body.vue';
    import TheChapterFooter from '@/pages/reference/making/the-chapter-footer.vue';
    import TheChapterHeader from '@/pages/reference/making/the-chapter-header.vue';
    import ThePartFooter from '@/pages/reference/the-part-footer.vue';
    import ThePartHeader from '@/pages/reference/the-part-header.vue';


    // ############
    // # ルーチン #
    // ############
    
    const router = useRouter();

    
    function openAllChapters() : void {
        router.push('/reference');
    }

</script>
