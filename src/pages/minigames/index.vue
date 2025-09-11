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

    import TheChaptersBody from '@/pages/minigames/the-part-body.vue';
    import TheChaptersFooter from '@/pages/minigames/the-part-footer.vue';
    import TheChaptersHeader from '@/pages/minigames/the-part-header.vue';

</script>
