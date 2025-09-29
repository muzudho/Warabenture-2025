<!--
    src/router/page-map.ts も編集してください。
-->
<template>

    <!-- 機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <!-- 以降、ページ -->
    <h1><router-link to="/blog/2025-09/29-mon">[2025-09-29_Mon]</router-link></h1>
    <section class="sec-1 pt-6 mb-6">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            今日はリバーシの開発日誌だぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            オセロは登録商標だからな。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            リバーシっつっても実質オセロを作るんでしょ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            じゃあ定義から。<br/>
            <br/>

            <pre class="code-w">
...xo...</pre><br/>
            👆 とりあえず、盤ではなくて、フィールドで考えるぜ。いわゆる１方向。<br/>
            <br/>

            <pre class="code-w">
...xo<span class="red-marker">X</span>...</pre><br/>
            👆 このリバーシのルール上、石を挟めるときは、必ず隙間なく石を挟むものとするぜ。だから置く場所はここしかない。<br/>
            <br/>

            <pre class="code-w">
...xo<span class="red-marker">X</span>...
    <span class="green-marker">&lt;</span>|</pre><br/>
            👆 どっちへでもいいが、どっちかを向いて順に盤上を読んでいくぜ。これをとりあえず<span class="green-marker">前送り（Forward；フォワード）</span><br/>と呼ぼうぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            どっちへでもいいのか……。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
...x<span class="green-marker">o</span>X...
    <span class="green-marker">&lt;</span>|</pre><br/>
            👆 ［前送り］は、<br/>
            ［相手番石］で始まれば［相手番石］を連続で読み進んでいくぜ。<br/>
            <br/>
            これらの石を、<span class="green-marker">跨いだ相手番石（Stepping over opposite turn stones）</span>と呼ぶことにするぜ。<br/>
            <br/>
            この場合は、［相手番石］があったマスは１個だけなので、１個だけマスを覚えておけだぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ひっくり返せるかどうかに関わらず、覚えるのね。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
...<span class="blue-marker">x</span>oX...
   <span class="blue-marker">&lt;</span>|</pre><br/>
            👆 ［跨いだ相手番石］が、何で途切れたか覚えておいてくれだぜ。<br/>
            <br/>
            ［手番石］によって途切れたら、［跨いだ相手番石］はひっくり返せるぜ。<br/>
            <br/>
            ［盤外］、［空きマス］によって途切れたら、［跨いだ相手番石］のことは忘れろだぜ。<br/>
            <br/>
            この途切れさせたマスを<span class="blue-marker">蓋（Cap；キャップ、ふた）</span>と呼ぶことにするぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            フタなんか覚えておいて、いいことあるのかだぜ？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
...xoX<span class="green-marker">.</span>..
     |<span class="green-marker">&gt;</span></pre><br/>
            👆 次は反対方向に読んでいくぜ。これを<span class="green-marker">後方送り（Backward；バックワード）</span>と呼ぶことにするぜ。<br/>
            <br/>
            とりあえずやることは前送りと同じだが、今回は［空マス］というキャップにぶつかったぜ。<br/>
            ［後方送り］での［跨いだ相手番石］は無しだぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            キャップを２つ覚えたわねえ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            キャップの組み合わせは、下表のようになる。
        </talk-balloon>


        <pre class="coding-paper">
      前送りのキャップ  後方送りのキャップ  コメント
----  ----------------  -------------------  -------
( 1)              盤外                 盤外  こうはならない。石をひっくり返せないとこには置けないから
( 2)              盤外               空マス  こうはならない。石をひっくり返せないとこには置けないから
( 3)              盤外               手番石  ［後方送り］で［跨いだ相手番石］はひっくり返せる
( 4)            空マス               空マス  こうはならない。石をひっくり返せないとこには置けないから
( 5)            空マス               手番石  ［後方送り］で［跨いだ相手番石］はひっくり返せる
( 6)            手番石               手番石  ［前送り］、［後方送り］のどちらの［跨いだ相手番石］もひっくり返せる
        </pre>
        
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
