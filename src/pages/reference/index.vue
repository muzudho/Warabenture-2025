<template>
    <the-app-header/>
    <the-welcome/>
    <div class="contents-header-1">コーディング・スタイル</div>
    <the-coding-style-contents/>
    <div class="contents-header-1 mt-6">メイキング</div>
    <the-making-contents class="mb-6"/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import TheAppHeader from '@/pages/the-app-header.vue';
    import TheCodingStyleContents from '@/pages/reference/coding-style/the-contents.vue';
    import TheMakingContents from '@/pages/reference/making/the-contents.vue';
    import TheWelcome from '@/pages/reference/the-welcome.vue';
</script>
