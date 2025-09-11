<template>
    <component :is="ThePartHeader"/>
    <component :is="ThePartBody"/>
    <component :is="ThePartFooter"/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import ThePartBody from '@/pages/quiz/the-part-body.vue';
    import ThePartFooter from '@/pages/quiz/the-part-footer.vue';
    import ThePartHeader from '@/pages/quiz/the-part-header.vue';

</script>
