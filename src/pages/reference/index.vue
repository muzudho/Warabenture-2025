<template>
    <the-app-header/>
    <the-welcome/>

    <div class="contents-header-1 mt-6">さくらのVPS設定</div>
    <the-sakura-vps-contents/>
    <button-to-back-to-top class="sec-1 pt-6"/>

    <div class="contents-header-1 mt-6">Nuxtの設定</div>
    <the-nuxt-config-contents/>
    <button-to-back-to-top class="sec-1 pt-6"/>

    <div class="contents-header-1">コーディング・スタイル</div>
    <the-coding-style-contents/>
    <button-to-back-to-top class="sec-1 pt-6"/>

    <div class="contents-header-1 mt-6">メイキング</div>
    <the-making-contents class="mb-6"/>
    <button-to-back-to-top class="sec-1 pt-6"/>
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

    import TheAppHeader from '@/pages/the-app-header.vue';
    import TheCodingStyleContents from '@/pages/reference/coding-style/the-contents.vue';
    import TheMakingContents from '@/pages/reference/making/the-contents.vue';
    import TheNuxtConfigContents from '@/pages/reference/nuxt-config/the-contents.vue';
    import TheSakuraVpsContents from '@/pages/reference/sakura-vps/the-contents.vue';
    import TheWelcome from '@/pages/reference/the-welcome.vue';
</script>
