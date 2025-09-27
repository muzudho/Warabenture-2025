<!--
    src/router/page-map.ts も編集してください。
-->
<template>

    <!-- 機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <!-- 以降、ページ -->
    <h1><router-link to="/blog/2025-09/27-sat">[2025-09-27_Sat]</router-link></h1>
    <section class="sec-1 pt-6 mb-6">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <router-link to="/blog/2025-09/26-fri">[2025-09-26_Fri]</router-link>の記事から引き続き、<br/>
            五目並べ（Gomoku；ごもくならべ）の開発日誌だぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            今まで、 putStone() という関数に石を置いた時の処理を書いていたが、これを細分化するぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            putStoneOneDirection() という関数を作る。こいつは……、
            <br/>
        </talk-balloon>


        <pre class="coding-paper mb-6">
putStoneOneDirection(水平);
putStoneOneDirection(垂直);
putStoneOneDirection(バロック対角線);
putStoneOneDirection(シニスター対角線);
        </pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            のように、方向で分けたものだぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            １つの方向だけ考えていればいいようにするわけだな。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            if 文を４つ読まされるの見づらかったですからね
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ここで次の定義。<br/>
            <br/>

            <pre class="code-w">
..<span class="green-marker">x</span>..<span class="green-marker">xx</span>...<span class="green-marker">x</span>....</pre><br/>
            👆 上図のように左から 2, 5, 6, 10 の交点に自石があるとき、<br/>
            <br/>
            stones、または turnStones と呼ぶことにするぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            手番を turn と訳すの気持ち悪いよな。手番は turn ではないよな。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            this turn とでも呼びますか。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            じゃあ、<span class="yellow-marker">石配置（Stones）</span>、または <span class="yellow-marker">自石配置（This turn stones）</span> で。<br/>
            要は空点を除いた交点だぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            次の定義。<br/>
            <br/>

            <pre class="code-w">
....o.....x....</pre><br/>
            👆 こういうフィールドがあるとき……、<br/>
            <br/>


            <pre class="code-w">
....o..X..x....</pre><br/>
            👆 真ん中に着手 X したら……、<br/>
            <br/>


            <pre class="code-w">
....o<span class="green-marker">..</span>X<span class="green-marker">..x.</span>...</pre><br/>
            👆 真ん中からスタートして最初に見つかる相手の石の手前までの半開半径４、ここで両サイドの半径を含めて<span class="green-marker">利き（Control）</span>と呼ぶのは以前定義したが……、<br/>
            <br/>


            <pre class="code-w">
..<span class="yellow-marker">..</span>o..X..x....</pre><br/>
            👆 両サイドの半開半径４のうち、利きの外側の、つまり相手の石を含むその残りを<span class="yellow-marker">補利き（Complementary Control；ほきき）</span>と呼ぶことにするぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            サルの鳴き声みたいだな。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            以上により、<br/>
            <pre class="code-w">
...<span class="blue-marker">.o</span><span class="green-marker">..</span><span class="red-marker">X</span><span class="green-marker">..x.</span>...
   <span class="yellow-marker">&lt;-------&gt;</span>
</pre><br/>
            👆 <span class="red-marker">着手点</span>、<span class="green-marker">利き</span>、<span class="blue-marker">補利き</span>を合わせて<span class="yellow-marker">直径９（Diameter Nine）</span>という用語を定義することができた。
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
