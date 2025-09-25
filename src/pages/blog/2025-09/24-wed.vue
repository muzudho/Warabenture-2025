<!--
    src/router/page-map.ts も編集してください。
-->
<template>

    <!-- 機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <!-- 以降、ページ -->
    <h1><router-link to="/blog/2025-09/24-wed">[2025-09-24_Wed]</router-link></h1>
    <section class="sec-1 pt-6 mb-6">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <router-link to="/blog/2025-09/23-tue">[2025-09-23_Tue]</router-link>の記事に引き続いて、<br/>
            五目並べ（Gomoku；ごもくならべ）を作っていくぜ。
        </talk-balloon>


        <talk-image
            expandable
            :src="journal1png"
            alt="制作中の五目並べ"
        />


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            どこでつまづいているんだぜ？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            できていないところはまだあるが、直面しているのは<br/>
            あと石１個で上がり、みたいなリーチの判定とか、そういうのだな。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            そのあたりを話していきましょう。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            例えば、以下のような盤面があるとしよう。<br/>
            <pre class="code-w mb-6">
...........
...........
...........</pre><br/>
            ここで、<br/>

            <pre class="code-w mb-6">
...........
.<span class="red-marker">....</span><span class="green-marker">x</span><span class="blue-marker">....</span>.
...........</pre><br/>
            真ん中に石を置くと、１つの方向、ここでは水平方向としよう、仮に東向きだとして、<br/>
            前方と後方それぞれ最大４交点分のフィールドを伸ばすぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            昨日、着手点（緑）と両腕（青と赤）をまとめて、利きと呼ぶことにしたのだった。<br/>
            <br/>
            利きの交点の数を数えると、この例では９交点あるな。<br/>
            五目並べは石を<span class="yellow-marker">五（Five；ご）</span>個ならべたいので、９交点あれば［五］を作れるかもしれないな。<br/>
            <br/>
            ここで、９を、石 x の<span class="yellow-marker">最長（Max length；マックス・レングス）</span>とでも呼ぶことにしようぜ。
        </talk-balloon>


    </section>
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


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //

    import oton2Src from "@/assets/img/talk/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png";
    const oton2Alt = "きふわらべのお父ん２";
    const oton2Name = "きふわらべのお父ん";
    import kifuwarabe2Src from "@/assets/img/talk/202506__character__01-2013-kifuwarabe-o1o1o0.png";
    const kifuwarabe2Alt = "きふわらべ２";
    const kifuwarabe2Name = "きふわらべ";
    import hiyoko2Src from "@/assets/img/talk/202506__character__01-2025-hiyoko-o1o1o0.png";
    const hiyoko2Alt = "ひよこ２";
    const hiyoko2Name = "ひよこ";

    import journal1png from '@/assets/img/journal/2025-09/202509__warabenture__24-1312-gomoku-o1o0.png';


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

</script>

<style scoped>

    @import '@/styles/notebook.css';
    @import '@/styles/talk-pen.css';

</style>
