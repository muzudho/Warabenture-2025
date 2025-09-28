<!--
    src/router/page-map.ts も編集してください。
-->
<template>

    <!-- 機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <!-- 以降、ページ -->
    <h1><router-link to="/blog/2025-09/28-sun">[2025-09-28_Sun]</router-link></h1>
    <section class="sec-1 pt-6 mb-6">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <router-link to="/blog/2025-09/27-sat">[2025-09-27_Sat]</router-link>の記事から引き続き、<br/>
            五目並べ（Gomoku；ごもくならべ）の開発日誌だぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ［半開半径］という用語を、<span class="yellow-marker">非零半径（Non-zero radius）</span>に名称変更するぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ［非零］は便利だろ。
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
..ox.o..x.oox...</pre><br/>
            👆 こういうフィールドがあるとき……、<br/>
            <br/>


            <pre class="code-w">
..ox.o.<span class="red-marker">X</span>x.oox...</pre><br/>
            👆 真ん中に着手 <span class="red-marker">X</span> したら……、<br/>
            <br/>


            <pre class="code-w">
..ox.o<span class="green-marker">.</span><span class="red-marker">X</span><span class="green-marker">x.</span>oox...
      <span class="green-marker">|</span> <span class="green-marker">|&gt;</span></pre><br/>
            👆 １つ隣から、最初に出てくる相手番の石の手前までを、<span class="green-marker">手番野（This turn field；てばんや）</span>と呼ぶことにするぜ。<br/>
            ただし、手番野の長さは［非零半径］より大きくならない。<br/>
            <br/>
            手番野にある石を<span class="green-marker">手番野石（This turn field stones；てばんやいし）</span>、<br/>
            手番野にある空点を<span class="green-marker">手番野空点（This turn field squares；てばんやくうてん）</span><br/>
            と呼ぶことにするぜ。<br/>
            <br/>


            <pre class="code-w">
..ox<span class="blue-marker">.o</span><span class="green-marker">.</span><span class="red-marker">X</span><span class="green-marker">x.</span><span class="blue-marker">oo</span>x...
    <span class="blue-marker">&lt;|</span>    <span class="blue-marker">|&gt;</span></pre><br/>
            👆 続いて、相手番の石から、その次に最初に出てくる手番の石の手前までを、<span class="blue-marker">相手番野（opposite turn field；あいてばんや）</span>と呼ぶことにするぜ。<br/>
            ただし、手番野と相手番野を合わせた長さは［非零半径］より大きくならない。<br/>
            <br/>
            相手番野にある石を<span class="blue-marker">相手番野石（Opposite turn field stones；あいてばんやいし）</span>、<br/>
            相手番野にある空点を<span class="blue-marker">相手番野空点（Opposite turn field empties；あいてばんやくうてん）</span><br/>
            と呼ぶことにするぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ［非零直径ｎ］－［利きｎ］＝［補利きｎ］という式が気に入らなかったんだな。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            前方の半径と、後方の半径では長さが異なる可能性がありますからね。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            そして、<br/>
            <br/>

            <pre class="code-w">
..ox<span class="blue-marker">.o</span><span class="green-marker">.</span><span class="red-marker">X</span><span class="green-marker">x.</span><span class="blue-marker">oo</span>x... (1)
       <span class="red-marker">X</span>         (2)
        <span class="green-marker">x</span>        (3)
     <span class="blue-marker">o</span>    <span class="blue-marker">oo</span>     (4)
    <span class="blue-marker">.</span> <span class="green-marker">.</span>  <span class="green-marker">.</span>       (5)
..ox        x... (6)</pre><br/>
            👆 (1) は (2), (3), (4), (5), (6) に分解できるわけだが、<br/>
            <br/>

            (1) を与えたら、(3), (4), (5) を返すような関数を作りたい。<br/>
            <br/>
            (3) が手番野石、<br/>
            (4) が相手番野石、<br/>
            (5) は<span class="yellow-marker">両手番野空点（Both turn field empties）</span>とでも呼ぼうぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            関数名は parseControl でどうだぜ？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            じゃあそれで。<br/>
            <br/>
            いや、やめた。［交点］のリストを返す関数を locate で統一してるんで、  locateParseControl にするぜ。
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
