<template>
    <the-app-header/>

    <the-quiz-body class="mt-6 mb-6" />
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

    import TheAppHeader from '../the-app-header.vue';
    import TheQuizBody from '@/pages/quiz/the-body.vue';

</script>
