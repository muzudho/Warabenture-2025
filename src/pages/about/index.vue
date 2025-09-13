<template>
    <the-app-header/>

    <the-about-body/>
    <button-to-go-to-top class="sec-0 pt-6"/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    import ButtonToGoToTop from '@/components/ButtonToGoToTop.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import TheAboutBody from '@/pages/about/the-body.vue';
    import TheAppHeader from '../the-app-header.vue';

</script>
