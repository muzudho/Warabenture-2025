<template>
    <the-app-header/>
    <div class="contents-header-1">チームみらいサポーター活動</div>
    <the-contents/>
    <button-to-back-to-top class="sec-0 pt-6"/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    import ButtonToBackToTop from '@/components/ButtonToBackToTop.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import TheAppHeader from '../../the-app-header.vue';
    import TheContents from '@/pages/reference_warabenture/team-mirai-supporter/the-contents.vue';

</script>
