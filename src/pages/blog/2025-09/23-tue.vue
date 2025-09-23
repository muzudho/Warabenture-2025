<!--
    src/router/page-map.ts も編集してください。
-->
<template>

    <!-- 機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <!-- 以降、ページ -->
    <h1><router-link to="/blog/2025-09/23-tue">[2025-09-23_Tue]</router-link></h1>
    <section class="sec-1 pt-6">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
                <span class="yellow-marker">五目並べ（Gomoku；ごもくならべ）</span>作ってるんだが。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
                あの石を５つ並べるやつ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            プログラミングする前に、名前を決めておきたいので決めるぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
                好きにしてくれだぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            このブログでは、<br/>
            <span class="yellow-marker">空点（Empty；エンプティ）</span>を <span class="code-w">.</span>、<br/>
            <span class="yellow-marker">黒石（Black；ブラック）</span>を <span class="code-w">x</span>、<br/>
            <span class="yellow-marker">白石（White；ホワイト）</span>を <span class="code-w">o</span> と書くことにするぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            人間対人間で通信対戦していた頃の<span class="yellow-marker">囲碁（Go；いご）</span>プログラミングで伝統的な記法よね。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
                五目並べと囲碁は似たような道具使うしな……。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            で、黒石と白石の総称を<span class="yellow-marker">石（Stone；ストーン）</span>と呼び、<br/>
            空点、黒石、白石の総称を<span class="yellow-marker">色（Color；カラー）</span>と呼ぶぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
                物が突然属性に変わるの面白。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            例えば <span class="code-w">......</span>とか、
            <span class="code-w">ox..xox.o.x..</span>みたいな、複数の石の一直線の並びを<span class="yellow-marker">バー（bar）</span>、<br/>
            <br/>
            <pre class="code-w">
......
..ox..</pre>
            みたいな、複数行の並びを<span class="yellow-marker">盤（Board；ボード）</span>と呼ぶことにするぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
                <pre class="code-w">
x....
.x...
..x..
...x.
....x
</pre>
                はボードだが、５つの石 x に着目すればバーだな。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
                そして、ボードの上に置かれたバーには４つの<span class="yellow-marker">方向（Direction；ディレクション）</span>がある。
                <br/>
                <pre class="code-w">
.....
.....
xxxxx
.....
.....
</pre>これは<span class="yellow-marker">ホリゾンタル（Horizontal；水平）</span>、<br/>
                <br/>
                <pre class="code-w">
..x..
..x..
..x..
..x..
..x..
</pre>これは<span class="yellow-marker">バーティカル（Vertical；垂直）</span>、<br/>
                <br/>
                <pre class="code-w">
....x
...x.
..x..
.x...
x....
</pre>これは<span class="yellow-marker">バロック・ダイアゴナル（Baroque Diagonal；右肩上がりの対角線）</span>、<br/>
                <br/>
                <pre class="code-w">
x....
.x..
..x..
...x.
....x
</pre>これは<span class="yellow-marker">シニスター・ダイアゴナル（Sinister Diagonal；右肩下がりの対角線）</span>、<br/>
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            囲碁には水平と垂直の２<span class="yellow-marker">ウェイ（Way；道, 路）</span>しかないけど、五目並べは４ウェイあるのよね。
        </talk-balloon>

        
        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            そうそう……、<br/>
            <pre class="code-w">
x.x.x
.xxx.
xx.xx
.xxx.
x.x.x
</pre>は、真ん中に黒石を置けば、４ウェイ決まるぜ。<br/>
            <br/>
            真ん中の空点をシューティング・ゲームの自機だと思うと８ウェイに見えるが、<br/>
            五目並べは盤面を見る指揮官の視点なんで……
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            囲碁の盤は１９路盤（19x19 Board；ろばん）、<br/>
            <span class="yellow-marker">連珠（Renju；れんじゅ）</span>の盤は１５道盤（15x15 Board；どうばん）と呼ぶそうだぜ、<br/>
            面白いよな。<br/>
            <br/>
            連珠ってのは競技五目並べだぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ロードは点と点を結ぶ主たる１本の線で、ウェイは点と点を結ぶ考えうる複数の線みたいだな。<br/>
            本書では使い分けないけど。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            次に、<span class="yellow-marker">向き（Orientation；オリエンテーション）</span>だぜ。<br/>
            <br/>
            日本語では：<br/>
            <pre class="code-w">
北西　北　北東
　西　　　　東
南西　南　南東</pre><br/>
            <br/>
            英語では：<br/>
            <pre class="code-w">
northwest  north  northeast
     west              east
southwest  south  southeast</pre>
            <br/>
            と書き、進むべき<span class="yellow-marker">前方（Forward；フォワード）</span>がどちらかを表す。</br>
            つながっている隣の石の向きを示すときに使う。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            五目並べは８ウェイだけでいいよな。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            また、前方の反対の向きを<span class="yellow-marker">後方（Backward；バックワード）</span>と呼ぶ。<br/>
            <br/>
            <span class="yellow-marker">～の前（fore of；フォワ　オブ）</span>とか、<span class="yellow-marker">～の後ろ（back of；バック　オブ）</span>という言い回しもよく使う。<br/>
            <br/>
            前方と後方を総称して<span class="yellow-marker">次（Next；ネクスト）</span>と呼ぶ。<br/>
            <br/>
            向きに注目せず、単に真横にあるなら<span class="yellow-marker">隣（Adjacent；アジェイセント）</span>と呼ぶこともある。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            将棋には、引（ひき）、寄（より）、上（あがる）、左（ひだり）、直（すぐ）、右（みぎ）、打（うつ）、成（なり）、成（ならず）の９ウェイがあるのよ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            次に、盤があるとして……、<br/>
            <pre class="code-w">
.....
.....
.....
.....
.....</pre><br/>
<br/>
            下図のように石を１個置くことを、<br/>
            <pre class="code-w">
.....
.....
..x..
.....
.....</pre><br/>
            <span class="yellow-marker">着手（Move；ちゃくしゅ、ムーブ）</span>と呼ぶ。<br/>
            <br/>
            着手した交点は、<span class="yellow-marker">着手点（Move Point）</span>。<br/>
            <br/>
            プログラミング上の都合で、平易に<span class="yellow-marker">石を置く（Put a stone）</span>と呼ぶこともある。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            石は動かないのに、なんでムーブなの？
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
                チェスで駒を動かすことをムーブと呼ぶから、<br/>
                コンピューターゲームの方でもムーブという言葉が使われるようになったんじゃないかな。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            次に、石を１個置いたとして……、<br/>
            <pre class="code-w">
.....
.....
..x..
.....
.....</pre><br/>
<br/>
            五目並べの盤上では、下図の、着手点を含まない４ウェイ上の数で表した場所になんらかの影響がある。<br/>
            <pre class="code-w">
...........
.4...4...4.
..3..3..3..
...2.2.2...
....111....
.4321.1234.
....111....
...2.2.2...
..3..3..3..
.4...4...4.
...........</pre><br/>
            本書ではチェスに倣ってこの位置を<span class="yellow-marker">駒の動き（Piece movement；ピース・ムーブメント）</span>と呼ぶことにするぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
                <span class="yellow-marker">駒（Piece；こま、ピース）</span>は動くが、石は動かないけどな。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            数字は読む順を表す。つまり、途中に石が置いてあったら、その先には駒の動きは届かないぜ。<br/>
            <pre class="code-w">
...........
.........o.
..x.....3..
...2...2...
....1o1....
.4321.1x...
....111....
...2.2.2...
..o..3..3..
.....4...4.
...........</pre><br/>
            本書ではこの不定な形で表される数の位置を<span class="yellow-marker">利き（Control；きき、コントロール）</span>と呼ぶことにするぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
                チェスではコントロール、<br/>
                コンピューター将棋ではエフェクトと呼ぶな。誰かが効きと誤字ったのを直訳したんだろうな。
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

    import journal1png from '@/assets/img/journal/2025-09/202509__warabenture__15-2213-blogUpdate-o1o0.png';


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
