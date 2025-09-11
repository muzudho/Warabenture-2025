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

    import TheChaptersBody from '@/pages/team-mirai-supporter/the-part-body.vue';
    import TheChaptersFooter from '@/pages/team-mirai-supporter/the-part-footer.vue';
    import TheChaptersHeader from '@/pages/team-mirai-supporter/the-part-header.vue';

</script>
