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

    import TheChaptersBody from '@/pages/making/the-part-body.vue';
    import TheChaptersFooter from '@/pages/making/the-part-footer.vue';
    import TheChaptersHeader from '@/pages/making/the-part-header.vue';

</script>
