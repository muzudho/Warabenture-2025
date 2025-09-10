<template>
    <the-grand-parent-header/>
    <the-parent-header/>

    <h2>ブログだぜ！　の部　インデックス</h2>
    <section class="sec-2">
        上の方の記事が新しいぜ（＾▽＾）！<br/>
    </section>

    <!--
        ページが見つかりませんの練習。
        JavaScript では、 null は falsy。 !null （直接は書けないが）は true。
    <div
        v-if="!getPageMap('2025-09/32-wed')"
    >
        ページが見つかりませんの練習。
    </div>
    -->

    🌟1: 2025-09/10-wed
    <component
        :is="getPageMap('2025-09/10-wed')"
        v-if="getPageMap('2025-09/10-wed')"
    />

    🌟2: 2025-08/11-mon
    <component
        :is="getPageMap('2025-08/11-mon')"
        v-if="getPageMap('2025-08/11-mon')"
    />

    🌟3: 2025-07/25-fri
    <component
        :is="getPageMap('2025-07/25-fri')"
        v-if="getPageMap('2025-07/25-fri')"
    />

    🌟4: 2025-07/12-sat
    <component
        :is="getPageMap('2025-07/12-sat')"
        v-if="getPageMap('2025-07/12-sat')"
    />

    🌟5: 2025-06/19-thu
    <component
        :is="getPageMap('2025-06/19-thu')"
        v-if="getPageMap('2025-06/19-thu')"
    />

    🌟6: 2025-06/15-sun
    <component
        :is="getPageMap('2025-06/15-sun')"
        v-if="getPageMap('2025-06/15-sun')"
    />

    🌟7: 2025-06/12-thu
    <component
        :is="getPageMap('2025-06/12-thu')"
        v-if="getPageMap('2025-06/12-thu')"
    />

    🌟8: 2025-06/05-thu
    <component
        :is="getPageMap('2025-06/05-thu')"
        v-if="getPageMap('2025-06/05-thu')"
    />

    🌟9: 2025-06/04-wed
    <component
        :is="getPageMap('2025-06/04-wed')"
        v-if="getPageMap('2025-06/04-wed')"
    />

    🌟10: 2025-06/03-tue
    <component
        :is="getPageMap('2025-06/03-tue')"
        v-if="getPageMap('2025-06/03-tue')"
    />

    🌟11: 2025-06/02-mon
    <component
        :is="getPageMap('2025-06/02-mon')"
        v-if="getPageMap('2025-06/02-mon')"
    />

    🌟12: 2025-06/01-sun
    <component
        :is="getPageMap('2025-06/01-sun')"
        v-if="getPageMap('2025-06/01-sun')"
    />

    🌟13: 2025-05/24-sat
    <component
        :is="getPageMap('2025-05/24-sat')"
        v-if="getPageMap('2025-05/24-sat')"
    />

    <the-parent-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    import TheGrandParentHeader from '../../the-header.vue';
    import TheParentFooter from '../the-footer.vue';
    import TheParentHeader from '../the-header.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　その他 +
    // ++++++++++++++++++++++++++

    import { getPageMap } from './page-map';

</script>
