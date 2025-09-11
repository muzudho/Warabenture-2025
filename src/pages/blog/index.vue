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

    import TheChaptersBody from '@/pages/blog/the-part-body.vue';
    import TheChaptersFooter from '@/pages/blog/the-part-footer.vue';
    import TheChaptersHeader from '@/pages/blog/the-part-header.vue';

</script>
