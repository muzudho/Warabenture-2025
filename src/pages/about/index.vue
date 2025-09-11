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

    import ThePartBody from '@/pages/about/the-part-body.vue';
    import ThePartFooter from '@/pages/about/the-part-footer.vue';
    import ThePartHeader from '@/pages/about/the-part-header.vue';

</script>
