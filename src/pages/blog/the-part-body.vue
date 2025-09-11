<template>
    <section class="sec-2">
        上の方の記事が新しいぜ（＾▽＾）！<br/>
    </section>

    <!--
        静的インポート・動的コンポーネント
        router/page-map.ts, router/articles.json も編集してください（TODO: ここらへん自動生成化したい）
    -->
    <blog-article page="2025-09/12-fri"/>
    <blog-article page="2025-09/11-thu"/>
    <blog-article page="2025-09/10-wed"/>
    <blog-article page="2025-08/11-mon"/>
    <blog-article page="2025-07/25-fri"/>
    <blog-article page="2025-07/12-sat"/>
    <blog-article page="2025-06/19-thu"/>
    <blog-article page="2025-06/15-sun"/>
    <blog-article page="2025-06/12-thu"/>
    <blog-article page="2025-06/05-thu"/>
    <blog-article page="2025-06/04-wed"/>
    <blog-article page="2025-06/03-tue"/>
    <blog-article page="2025-06/02-mon"/>
    <blog-article page="2025-06/01-sun"/>
    <blog-article page="2025-05/24-sat"/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    import BlogArticle from '@/components/BlogArticle.vue';

</script>
