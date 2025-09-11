<template>
    <component :is="ThePartHeader"/>
    <component :is="ThePartBody"/>
    <!-- ホームにフッターの閉じるボタンはありません。 -->
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import ThePartBody from '@/pages/home/the-part-body.vue';
    import ThePartHeader from '@/pages/home/the-part-header.vue';

</script>
