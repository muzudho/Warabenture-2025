<template>
    <!--
        静的インポート・動的コンポーネント
        router/page-map.ts, router/articles.json も編集してください（TODO: ここらへん自動生成化したい）
    -->
    <template
        v-for="pageKey in pageList"
        :key="pageKey"
    >
        <blog-article :page="pageKey"/>
        <button-to-go-to-top class="sec-1 pt-6"/>
    </template>

    <!--
    <blog-article page="2025-09/13-sat"/>
    <button-to-go-to-top class="sec-1 pt-6"/>

    <blog-article page="2025-09/12-fri"/>
    <button-to-go-to-top class="sec-1 pt-6"/>

    <blog-article page="2025-09/11-thu"/>
    <button-to-go-to-top class="sec-1 pt-6"/>

    <blog-article page="2025-09/10-wed"/>
    <button-to-go-to-top class="sec-1 pt-6"/>

    <blog-article page="2025-08/11-mon"/>
    <button-to-go-to-top class="sec-1 pt-6"/>

    <blog-article page="2025-07/25-fri"/>
    <button-to-go-to-top class="sec-1 pt-6"/>

    <blog-article page="2025-07/12-sat"/>
    <button-to-go-to-top class="sec-1 pt-6"/>

    <blog-article page="2025-06/19-thu"/>
    <button-to-go-to-top class="sec-1 pt-6"/>

    <blog-article page="2025-06/15-sun"/>
    <button-to-go-to-top class="sec-1 pt-6"/>

    <blog-article page="2025-06/12-thu"/>
    <button-to-go-to-top class="sec-1 pt-6"/>

    <blog-article page="2025-06/05-thu"/>
    <button-to-go-to-top class="sec-1 pt-6"/>

    <blog-article page="2025-06/04-wed"/>
    <button-to-go-to-top class="sec-1 pt-6"/>

    <blog-article page="2025-06/03-tue"/>
    <button-to-go-to-top class="sec-1 pt-6"/>

    <blog-article page="2025-06/02-mon"/>
    <button-to-go-to-top class="sec-1 pt-6"/>

    <blog-article page="2025-06/01-sun"/>
    <button-to-go-to-top class="sec-1 pt-6"/>

    <blog-article page="2025-05/24-sat"/>
    <button-to-go-to-top class="sec-1 pt-6"/>
    -->

</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    import BlogArticle from '@/components/BlogArticle.vue';
    import ButtonToGoToTop from '@/components/ButtonToGoToTop.vue';


    // ################
    // # オブジェクト #
    // ################

    // 日付が新しい順：
    const pageList = [
        '2025-09/14-sun',
        '2025-09/13-sat',
        '2025-09/12-fri',
        '2025-09/11-thu',
        '2025-09/10-wed',
        '2025-08/11-mon',
        '2025-07/25-fri',
        '2025-07/12-sat',
        '2025-06/19-thu',
        '2025-06/15-sun',
        '2025-06/12-thu',
        '2025-06/05-thu',
        '2025-06/04-wed',
        '2025-06/03-tue',
        '2025-06/02-mon',
        '2025-06/01-sun',
        '2025-05/24-sat',
    ];

</script>
