<template>
    <the-app-header/>

    <the-part-body/>
    <button-to-go-to-top class="sec-1 pt-6"/>
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

    import TheAppHeader from '../the-app-header.vue';
    import ThePartBody from '@/pages/about/the-part-body.vue';

</script>
