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
            👆 どっちへでもいいが、どっちかを向いて順に盤上を読んでいくぜ。この向きを<span class="green-marker">左翼手（Left fielder；レフト・フィルダー、さよくしゅ）</span><br/>と呼ぼうぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            野球みたいだな。
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
            👆 ［左翼手］は、<br/>
            ［相手番石］で始まれば［相手番石］を連続で読み進んでいくぜ。<br/>
            <br/>
            この連続で読み進んでいく［相手番石］を、<span class="green-marker">内野（Infield；インフィールド）</span>と呼ぶことにするぜ。<br/>
            <br/>
            この場合は、［相手番石］があったマスは１個だけなので、１個だけマスを覚えておけだぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            左翼で内野なんだったらショート（遊撃手）なんじゃないの？
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
            👆 ［内野］が、何にぶつかって途切れたか覚えておいてくれだぜ。<br/>
            <br/>
            ［手番石］によって［内野］が途切れたら、［内野］の石はひっくり返せるぜ。<br/>
            <br/>
            ［盤外］、［空きマス］によって［内野］が途切れたら、［内野］の石はそのまんまだぜ。<br/>
            <br/>
            この何にぶつかって途切れさせたかのマスを<span class="blue-marker">外野（Outfield；アウトフィールド）</span>と呼ぶことにするぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ［内野］は［非手番石］、［外野］は［非相手番石］だな。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
..<span class="yellow-marker">.</span>xoX...
  <span class="yellow-marker">&lt;</span>|</pre><br/>
            👆 そして、［外野］が［手番石］だったケースでは、［外野］を続けて読んでくれだぜ。<br/>
            <br/>
            そして、次に違うものとぶつかったところを<span class="yellow-marker">観客席（Stand；スタンド）</span>とでも呼ぶことにするぜ。<br/>
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ［内野］が［相手番石］で、［外野］が［手番石］だったときだけ、［観客席］まで進めるわねぇ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ［スタンド］は［非手番石］だな。
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
            👆 次は反対方向に読んでいくぜ。こっちの向きを<span class="green-marker">右翼手（Right fielder；ライト・フィルダー、うよくしゅ）</span>と呼ぶことにするぜ。<br/>
            <br/>
            とりあえずやることは［左翼手］と同じだぜ。<br/>
            <br/>
            今回の例では［空マス］というキャップにぶつかったぜ。<br/>
            ［右翼手］での［内野］は無しだぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            左と右の［内野］、［外野］、［観客席］を覚えればいいのね。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ［内野］、［外野］、［観客席］の組み合わせは、下表のようになる。<br/>
            ［左翼手］、［右翼手］で違いは無いぜ。
        </talk-balloon>


        <pre class="coding-paper mb-6">
        内野    外野        観客席               コメント
----  --------  ----------  -------------------  --------
( 1)  盤外                                       盤端だ。ひっくり返る石は無い
( 2)  空マス                                     ひっくり返る石は無い
( 3)  相手番石  盤外                             盤端だ。ひっくり返る石は無い。また、逆側の［ｘ翼手］にはひっくり返る石がある必要がある
( 4)  相手番石  空マス                           ひっくり返る石は無い。また、逆側の［ｘ翼手］にはひっくり返る石がある必要がある
( 5)  相手番石  手番石      盤外                 盤端だ。内野はひっくり返る。盤端なので、この方向では相手番に挟み返される心配がない
( 6)  相手番石  手番石      空マス               内野はひっくり返る。この方向には相手番に挟み返される空マスがある
( 7)  相手番石  手番石      相手番石             内野はひっくり返る。観客席は既に相手番石で埋まっているので、この方向では外野は相手番に挟み返される心配がない</pre>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            オセロを［内野］、［外野］、［観客席］で分けて何が嬉しいんだぜ？
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
