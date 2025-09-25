<!--
    src/router/page-map.ts も編集してください。
-->
<template>

    <!-- 機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <!-- 以降、ページ -->
    <h1><router-link to="/blog/2025-09/25-thu">[2025-09-25_Thu]</router-link></h1>
    <section class="sec-1 pt-6 mb-6">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <router-link to="/blog/2025-09/24-wed">[2025-09-24_Wed]</router-link>の記事に引き続いて、<br/>
            五目並べ（Gomoku；ごもくならべ）を作っていくぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ひとまず、水平方向だけ考えよう。<br/>
            <pre class="code-w">
...............</pre><br/>
            👆 こういうフィールドがあるとして、<br/>
            <br/>

            <pre class="code-w">
.......x.......</pre><br/>
            👆 真ん中に石を置くと、<br/>
            <br/>

            <pre class="code-w">
...<span class="green-marker">1111</span>x<span class="green-marker">1111</span>...</pre><br/>
            👆 <span class="green-marker">利き</span>には、着手点の石の最長である 1 を入れるぜ。<br/>
            <br/>
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            最長は 9 なんじゃないのか？
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            盤の端までいけるから 15 なんじゃないの？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            任意の交点について、そこを中心点として、半径にある自石の数と考えてくれだぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <span class="blue-marker">４近傍自石数（Number of stones in the 4 neighborhoods）</span>だな。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            名前が長い。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            まあ、最長（マックス・レングス）と呼ぶことにしようぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
......x.x......</pre><br/>
            👆 真ん中を開けて両サイドに石を置くと、<br/>
            <br/>

            <pre class="code-w">
..<span class="green-marker">1122</span>x<span class="green-marker">2</span>x<span class="green-marker">2211</span>..</pre><br/>
            👆 <span class="green-marker">利き</span>の各空点の最長は上図のようになるぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
......xox......</pre><br/>
            👆 ここで相手の石が真ん中に割り打たれると、<br/>
            <br/>

            <pre class="code-w">
..<span class="green-marker">1111</span>xox<span class="green-marker">1111</span>..</pre><br/>
            👆 <span class="green-marker">利き</span>の各空点の最長が更新されて、上図のようになってほしいんだぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            しかし今、利きの各交点の最長が更新されてなくて、<br/>
            <pre class="code-w">
..<span class="green-marker">11</span><span class="red-marker">22</span>xox<span class="red-marker">22</span><span class="green-marker">11</span>..</pre><br/>
            👆 更新前の値が残ってるんだぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            直せだぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ［利き］の各交点の最長を更新するんじゃなくて、［フィールド］の各交点の最長を更新する必要があるんじゃないの？
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
