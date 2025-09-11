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

    import ThePartBody from '@/pages/blog/the-part-body.vue';
    import ThePartFooter from '@/pages/blog/the-part-footer.vue';
    import ThePartHeader from '@/pages/blog/the-part-header.vue';

</script>
