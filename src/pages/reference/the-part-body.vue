<template>

    <!-- デバイス互換機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <section class="sec-2">
        <br/>

        <talk-image
            :href="reference1Png"
            alt="書庫"
        />

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                ここは調べものの部屋だぜ。<br/>
                面白いものは何もないぜ。用が無いなら帰った帰った！
        </talk-balloon>
    </section>

    <component :is="TheCodingStyleHeader"/>
    <component :is="TheCodingStyleBody"/>
    <br/>

    <component :is="TheMakingHeader"/>
    <component :is="TheMakingBody"/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { ref } from 'vue';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    import CompatibleDevice from '@/components/CompatibleDevice.vue'
    import TalkBalloon from '@/components/TalkBalloon.vue';
    import TalkImage from '@/components/TalkImage.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import TheCodingStyleBody from '@/pages/reference/coding-style/the-chapter-body.vue';
    import TheCodingStyleHeader from '@/pages/reference/coding-style/the-chapter-header.vue';
    import TheMakingBody from '@/pages/reference/making/the-chapter-body.vue';
    import TheMakingHeader from '@/pages/reference/making/the-chapter-header.vue';


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //

    import kifuwarabe2Src from "@/assets/img/talk/202506__character__01-2013-kifuwarabe-o1o1o0.png";
    const kifuwarabe2Alt = "きふわらべ２";
    const kifuwarabe2Name = "きふわらべ";
    import reference1Png from "@/assets/img/journal/2025-09/202509__grok__11-1719-reference-o1o0.png";


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

</script>
