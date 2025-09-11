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

    import ThePartBody from '@/pages/minigames/the-part-body.vue';
    import ThePartFooter from '@/pages/minigames/the-part-footer.vue';
    import ThePartHeader from '@/pages/minigames/the-part-header.vue';

</script>
