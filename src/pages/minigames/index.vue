<template>
    <the-app-header/>

    <the-minigames-body class="mt-6 mb-6"/>
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

    import TheAppHeader from '../the-app-header.vue';
    import TheMinigamesBody from '@/pages/minigames/the-body.vue';

</script>
