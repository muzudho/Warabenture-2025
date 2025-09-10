<template>
    <the-grand-parent-header/>
    <the-parent-header/>

    <h2>ブログだぜ！　の部　インデックス</h2>
    <section class="sec-2">
        上の方の記事が新しいぜ（＾▽＾）！<br/>
    </section>

    🌟1: 2025-09/10-wed
    <component
        :is="pageMap['2025-09/10-wed']"
        v-if="pageMap['2025-09/10-wed']"
    />
    <!--
    <Blog20250910Wed />
    -->

    🌟2: 2025-08/11-mon
    <component
        :is="pageMap['2025-08/11-mon']"
        v-if="pageMap['2025-08/11-mon']"
    />
    <!--
    <Blog20250811Mon />
    -->

    🌟3: 2025-07/25-fri
    <component
        :is="pageMap['2025-07/25-fri']"
        v-if="pageMap['2025-07/25-fri']"
    />
    <!--
    <Blog20250725Fri />
    -->

    🌟4: 2025-07/12-sat
    <component
        :is="pageMap['2025-07/12-sat']"
        v-if="pageMap['2025-07/12-sat']"
    />
    <!--
    <Blog20250712Sat />
    -->

    🌟5: 2025-06/19-thu
    <component
        :is="pageMap['2025-06/19-thu']"
        v-if="pageMap['2025-06/19-thu']"
    />
    <!--
    <Blog20250619Thu />
    -->

    🌟6: 2025-06/15-sun
    <component
        :is="pageMap['2025-06/15-sun']"
        v-if="pageMap['2025-06/15-sun']"
    />
    <!--
    <Blog20250615Sun />
    -->

    🌟7: 2025-06/12-thu
    <component
        :is="pageMap['2025-06/12-thu']"
        v-if="pageMap['2025-06/12-thu']"
    />
    <!--
    <Blog20250612Thu />
    -->

    🌟8: 2025-06/05-thu
    <component
        :is="pageMap['2025-06/05-thu']"
        v-if="pageMap['2025-06/05-thu']"
    />
    <!--
    <Blog20250605Thu />
    -->

    🌟9: 2025-06/04-wed
    <component
        :is="pageMap['2025-06/04-wed']"
        v-if="pageMap['2025-06/04-wed']"
    />
    <!--
    <Blog20250604Wed />
    -->

    🌟10: 2025-06/03-tue
    <component
        :is="pageMap['2025-06/03-tue']"
        v-if="pageMap['2025-06/03-tue']"
    />
    <!--
    <Blog20250603Tue />
    -->

    🌟11: 2025-06/02-mon
    <component
        :is="pageMap['2025-06/02-mon']"
        v-if="pageMap['2025-06/02-mon']"
    />
    <!--
    <Blog20250602Mon />
    -->

    🌟12: 2025-06/01-sun
    <component
        :is="pageMap['2025-06/01-sun']"
        v-if="pageMap['2025-06/01-sun']"
    />
    <!--
    <Blog20250601Sun />
    -->

    🌟13: 2025-05/24-sat
    <component
        :is="pageMap['2025-05/24-sat']"
        v-if="pageMap['2025-05/24-sat']"
    />
    <!--
    <Blog20250524Sat />
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

    // import Blog20250524Sat from './2025-05/24-sat.vue';
    // import Blog20250601Sun from './2025-06/01-sun.vue';
    // import Blog20250602Mon from './2025-06/02-mon.vue';    
    // import Blog20250603Tue from './2025-06/03-tue.vue';
    // import Blog20250604Wed from './2025-06/04-wed.vue';
    // import Blog20250605Thu from './2025-06/05-thu.vue';
    // import Blog20250612Thu from './2025-06/12-thu.vue';
    // import Blog20250615Sun from './2025-06/15-sun.vue';
    // import Blog20250619Thu from './2025-06/19-thu.vue';
    // import Blog20250712Sat from './2025-07/12-sat.vue';
    // import Blog20250725Fri from './2025-07/25-fri.vue';
    // import Blog20250811Mon from './2025-08/11-mon.vue';
    // import Blog20250910Wed from './2025-09/10-wed.vue';
    import TheGrandParentHeader from '../../the-header.vue';
    import TheParentFooter from '../the-footer.vue';
    import TheParentHeader from '../the-header.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　その他 +
    // ++++++++++++++++++++++++++

    import { pageMap } from './page-map';

</script>
