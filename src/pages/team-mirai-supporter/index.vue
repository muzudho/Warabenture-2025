<template>
    <the-app-header/>
    <button-to-close-pane
        class="sec-0"
        direction="down"
        pagePath="/"
    />
    <div class="contents-header-1">チームみらいサポーター活動</div>
    <the-contents/>
    <button-to-close-pane
        class="sec-0"
        direction="up"
        pagePath="/"
    />
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import ButtonToClosePane from '@/components/ButtonToClosePane.vue';
    import TheAppHeader from '../the-app-header.vue';
    import TheContents from '@/pages/team-mirai-supporter/the-contents.vue';

</script>
