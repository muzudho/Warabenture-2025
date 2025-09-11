<template>
    <component :is="TheChaptersHeader"/>
    <component :is="TheChaptersBody"/>
    <component :is="TheChaptersFooter"/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import TheChaptersBody from '@/pages/quiz/the-part-body.vue';
    import TheChaptersFooter from '@/pages/quiz/the-part-footer.vue';
    import TheChaptersHeader from '@/pages/quiz/the-part-header.vue';

</script>
