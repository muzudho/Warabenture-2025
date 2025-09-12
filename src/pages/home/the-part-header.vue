<template>
    <the-app-header/>
    <section class="sec-1">
        <!-- 他のページと縦幅を揃えるために、何の働きもしない空ボタンを置いています。 -->
        <v-btn style="visibility: hidden;"></v-btn>
    </section>

    <!-- ［ホーム］に閉じるボタンはありません。 -->
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import TheAppHeader from '../the-app-header.vue';

</script>
