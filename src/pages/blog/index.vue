<template>
    <the-grand-parent-header/>
    <the-parent-header/>

    <h2>ブログだぜ！　の部　インデックス</h2>
    <section class="sec-2">
        上の方の記事が新しいぜ（＾▽＾）！<br/>
    </section>

    <!--
        FIXME: 非同期処理は、サーバー側でプリレンダリングできないのではないか？ 動的インポートは template 内に書かない方がよい？
    -->

    <!-- FIXME: 静的インポート -->
    <!--
    -->
    <Blog20250910Wed />
    <Blog20250811Mon />
    <Blog20250725Fri />
    <Blog20250712Sat />
    <Blog20250619Thu />
    <Blog20250615Sun />
    <Blog20250612Thu />
    <Blog20250605Thu />
    <Blog20250604Wed />
    <Blog20250603Tue />
    <Blog20250602Mon />
    <Blog20250601Sun />
    <Blog20250524Sat />

    <!-- TODO: 以下、静的インポート・動的コンポーネント -->
    <!--
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

    // 静的インポート
    import Blog20250524Sat from './2025-05/24-sat.vue';
    import Blog20250601Sun from './2025-06/01-sun.vue';
    import Blog20250602Mon from './2025-06/02-mon.vue';    
    import Blog20250603Tue from './2025-06/03-tue.vue';
    import Blog20250604Wed from './2025-06/04-wed.vue';
    import Blog20250605Thu from './2025-06/05-thu.vue';
    import Blog20250612Thu from './2025-06/12-thu.vue';
    import Blog20250615Sun from './2025-06/15-sun.vue';
    import Blog20250619Thu from './2025-06/19-thu.vue';
    import Blog20250712Sat from './2025-07/12-sat.vue';
    import Blog20250725Fri from './2025-07/25-fri.vue';
    import Blog20250811Mon from './2025-08/11-mon.vue';
    import Blog20250910Wed from './2025-09/10-wed.vue';

    //import BlogArticle from '@/components/BlogArticle.vue';
    import TheGrandParentHeader from '../../the-header.vue';
    import TheParentFooter from '../the-footer.vue';
    import TheParentHeader from '../the-header.vue';

</script>
