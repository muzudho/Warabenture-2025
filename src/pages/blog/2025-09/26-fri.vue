<!--
    src/router/page-map.ts も編集してください。
-->
<template>

    <!-- 機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <!-- 以降、ページ -->
    <h1><router-link to="/blog/2025-09/26-fri">[2025-09-26_Fri]</router-link></h1>
    <section class="sec-1 pt-6 mb-6">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <router-link to="/blog/2025-09/25-thu">[2025-09-25_Thu]</router-link>の記事から引き続き、<br/>
            五目並べ（Gomoku；ごもくならべ）の開発日誌だぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            次に修正に取り掛かりたい不具合の内容を説明するぜ。<br/>
            <br/>
            <pre class="code-w">
.....<span class="green-marker">11111</span>.....</pre><br/>
            👆 このように、五目並べでは５つ隙間なく並んでいることを、５つ並んだと呼ぶが、<br/>
            <br/>
            <pre class="code-w">
....1<span class="red-marker">.</span>1111.....</pre><br/>
            👆 隙間があっても５つ並んでいると判定してしまう。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            もし、［最長］が 5 の石は、即ち［五］の構成要素の石なんだと早とちり判定しているんだったら、そうなるだろ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
.....<span class="green-marker">++x++</span>.....</pre><br/>
            👆 隙間なく５つ並んでいるかどうかは、半径３のフィールドに自石が５つあるか数えればいいんじゃない？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            えっ？　じゃあ、半径５のフィールドの［最長］が 5 であるかどうかとは別に、［五］であるかどうかの判定が必要ってことかだぜ？<br/>
            <br/>
            見た目上の表示を区別したいな。スライディング・ウィンドウを実装するより、そっちの方が大変だ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ここで定義を増やすぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
.....<span class="green-marker">++x</span><span class="yellow-marker">++</span>.....</pre><br/>
            👆 上図の石 x をコンパスの針の位置と見立てたとき、<br/>
            <span class="green-marker">半径（Radius；レイディアス）</span>は 3。<br/>
            <span class="blue-marker">直径（Diameter；ダイアメター）</span>は 5。<br/>
            そして造語だが、<span class="yellow-marker">半開半径（Half open radius）</span>は 2 とする。<br/>
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            原点は重なって不便なことがあるし、原点抜きの概念が欲しいときがあるからな。
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
