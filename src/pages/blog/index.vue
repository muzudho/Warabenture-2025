<template>
    <the-grand-parent-header/>
    <the-parent-header/>

    <h2>ブログだぜ！　の部　インデックス</h2>
    <section class="sec-2">
        上の方の記事が新しいぜ（＾▽＾）！<br/>
    </section>

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

    <the-parent-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

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
    import TheGrandParentHeader from '../../the-header.vue';
    import TheParentFooter from '../the-footer.vue';
    import TheParentHeader from '../the-header.vue';

</script>
