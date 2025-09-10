<template>
    <the-grand-parent-header/>
    <the-parent-header/>

    <h2>ブログだぜ！　の部　インデックス</h2>
    <section class="sec-2">
        上の方の記事が新しいぜ（＾▽＾）！<br/>
    </section>

    <!-- １記事だけ静的インポート -->
    <Blog20250910Wed />

    <!-- 以下、動的インポート -->
    <!--
    <blog-article page="2025-09/10-wed"/>
    -->
    <!--
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
    -->

    <the-parent-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    // １記事だけ静的インポート
    import Blog20250910Wed from '@/pages/blog/2025-09/10-wed.vue';
    import BlogArticle from '@/components/BlogArticle.vue';
    import TheGrandParentHeader from '../../the-header.vue';
    import TheParentFooter from '../the-footer.vue';
    import TheParentHeader from '../the-header.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　その他 +
    // ++++++++++++++++++++++++++

    import { getPageMapAsync } from './page-map';

</script>
