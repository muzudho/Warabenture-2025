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


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            あっ、ダメだ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
...<span class="green-marker">++++x</span>.......</pre><br/>
            👆 上図のような、［五］の端に着手点があたるとき、半開半径 2 では、最長 3 しか拾えないぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
.......<span class="green-marker">x++++</span>...
   &lt;-------&gt;</pre><br/>
            <pre class="code-w">
......<span class="green-marker">+x+++</span>....
   &lt;-------&gt;</pre><br/>
            <pre class="code-w">
.....<span class="green-marker">++x++</span>.....
   &lt;-------&gt;</pre><br/>
            <pre class="code-w">
....<span class="green-marker">+++x+</span>......
   &lt;-------&gt;</pre><br/>
            <pre class="code-w">
...<span class="green-marker">++++x</span>.......
   &lt;-------&gt;</pre><br/>
            👆 じゃあ、<span class="yellow-marker">スライディング・ウィンドウ（Sliding Window）</span>を使ったらいいんじゃない？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
...<span class="green-marker">++++x++++</span>...</pre><br/>
            👆 任意の点 x を中心として半開半径 4 、つまり直径 9 のフィールドを inputArray として、<br/>
            そのスライディング・ウィンドウのうち１つでも石５つを満たせば［五］かだぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            任意の点 x の位置と、 inputArray の半開半径と、ウィンドウの半開半径を指定すると、<br/>
            ウィンドウの各マスの位置が入った配列を複数返すような関数が要るかだぜ？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            フム、ぱっと見た感じ前後への振り幅の片側は inputArray の半径 - window の半径って感じかな。<br/>
            んで、ウィンドウの数は 2 × 振り幅 + 1 だな。<br/>
            疑似コードは以下みたいな感じになるかな。
        </talk-balloon>


        <pre class="coding-paper">
スライディング・ウィンドウ作成関数(
    着手点,
    inputArrayの半開半径,
    windowの半開半径,
    foreOf関数,
    backOf関数,
)
{
    振り幅の片側 = inputArrayの半開半径 - windowの半開半径
    ウィンドウ数 = 2 * 振り幅の片側 + 1;

    for (let i: number=0; i < ウィンドウ数; i++) {
        ウィンドウの配列.push(
            ウィンドウ作成関数(
                着手点,
                inputArrayの半開半径 - i,
                i,
                foreOf関数,
                backOf関数
            )
        )
    }
    return ウィンドウの配列
}

ウィンドウ作成関数(
    着手点,
    前方の長さ,
    後方の長さ,
    foreOf関数,
    backOf関数,
) : number[] {

    // ウィンドウの前方（起点を含まない）
    let backSq = startSq;
    for (let i=0; i&gt;前方の長さ; i++) {
        backSq = backOf関数(backSq);
        if (盤外か判定関数(backSq)) {
            break;
        }

        後方配列.push(backSq);
    }

    // ウィンドウの後方（起点を含まない）
    let foreSq = startSq;
    for(let i=0; i&lt;後方の長さ; i++){
        foreSq = foreOf関数(foreSq);
        if (盤外か判定関数(foreSqは)) {
            break;
        }

        前方配列.push(foreSq);
    }

    return [
        ...後方配列.reverse(),
        着手点,
        ...前方配列
    ];
}
        </pre>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            じゃあ、スライディング・ウィンドウの配列を与えたら、<br/>
            ウィンドウが全て自石でできているか確認し、<br/>
            そのようなウィンドウが１つでも有れば真となるような関数を作ってくれだぜ。<br/>
            <br/>
            関数名は containsAnyBingoWindow とかでどうだぜ？
        </talk-balloon>

        
        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            （カタカタカタカタ　※ＰＣのキーボードを打鍵する音）<br/>
            <br/>
            あれっ？　隅に置いただけでビンゴになってしまう、何故……？<br/>
            <br/>
            盤の端はウィンドウが飛び出るぜ。<br/>
            ナナメは１交点で全部満たすのか。<br/>
            そこを修正して。<br/>
            <br/>
            あれっ、修正できね。何故……？<br/>
            盤外にはマス番号が振ってないから……？　フーム
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ウィンドウを全て埋めているかどうかではなく、自石が５つあるかで判定したらどうだぜ？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            それはそう。<br/>
            <br/>
            （カタカタカタカタ　※ＰＣのキーボードを打鍵する音）<br/>
            <br/>
            よし直した、次。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
....xxx...x....</pre><br/>
            👆 こういう風に石を置いてみたんだが、石の［最長］を見てみると、<br/>
            <br/>

            <pre class="code-w">
....333...2....</pre><br/>
            👆 こうなることを期待しているんだが、<br/>
            <br/>

            <pre class="code-w">
....33<span class="red-marker">4</span>...2....</pre><br/>
            👆 ４つ隣の石までカウントに入れてるみたいなんだぜ。<br/>
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            じゃあ、カウントに入れてるんじゃないか？
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            石の［最長］を調べるのも、スライディング・ウィンドウを使う必要があるんじゃない？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            スライディング・ウィンドウを使うように変えてみるぜ。<br/>
            <br/>
            （カタカタカタカタ　※ＰＣのキーボードを打鍵する音）<br/>
            <br/>
            よし直った。
        </talk-balloon>

        
        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            直ったんだ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            でもまた別の不具合が出てきた。<br/>
            <br/>

            <pre class="code-w">
x..............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............</pre><br/>
            👆 左上隅に石を置いたんだが、<br/>
            <br/>

            <pre class="code-w">
x1111..........
11.............
1.1............
1..1...........
1...1..........
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............</pre><br/>
            👆 空点の［最長］は上図のように期待しているんだが、<br/>
            <br/>

            <pre class="code-w">
x<span class="red-marker">-1</span>111..........
<span class="red-marker">-1-1</span>............
1.1............
1..1...........
1...1..........
...............
...............
...............
...............
...............
...............
...............
...............
...............
...............</pre><br/>
            👆 着手点からチェビシェフ距離が１つ分隣の空点の［最長］が -1 になってしまうんだぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            着手点からチェビシェフ距離が１つだけ離れたところの空点の［最長］を［死に石］判定しているのかだぜ？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            隅から１つ離れたところに石を置くと、<br/>
            <br/>

            <pre class="code-w">
<span class="red-marker">-1-1-1</span>............
<span class="red-marker">-1</span>x1111.........
<span class="red-marker">-1</span>11............
.1.1...........
.1..1..........
.1...1.........
...............
...............
...............
...............
...............
...............
...............
...............
...............</pre><br/>
            👆 盤の内側に向かっている方は、ちゃんと［最長］が 1 になってるぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            左上隅のバロック・ダイアゴナルは［五］にならないから、［死に石］判定の -1 になってるんじゃないの？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            それはそう……、［死に石］判定の実行順を下げてみるか。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            実行順は関係ないか。スライディング・ウィンドウは［利き］ではないから［死に石］判定には使えないなあ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ［スライディング利き］が要るのでは？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            じゃあ、［スライディング利き］の仕様を固めるかだぜ。<br/>
            <br/>

            <pre class="code-w">
.......x.......</pre><br/>
            👆 石を置くとするだろ。<br/>
            <br/>

            <pre class="code-w">
...<span class="green-marker">++++</span>x<span class="green-marker">++++</span>...
   &lt;--| |--&gt;   </pre><br/>
            👆 ［最長］が更新される交点は半開半径４のところだぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            そこが inputArray だな。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
 ...++++<span class="green-marker">x+++</span><span class="yellow-marker">+</span><span class="green-marker">... </span>
        &lt;---+---&gt;   </pre><br/>
            <pre class="code-w">
 ...+++<span class="green-marker">+x++</span><span class="yellow-marker">+</span><span class="green-marker">+...</span>
       &lt;---+---&gt;   </pre><br/>
            <pre class="code-w">
 ...++<span class="green-marker">++x+</span><span class="yellow-marker">+</span><span class="green-marker">++..</span>.
      &lt;---+---&gt;   </pre><br/>
            <pre class="code-w">
 ...+<span class="green-marker">+++x</span><span class="yellow-marker">+</span><span class="green-marker">+++.</span>..
     &lt;---+---&gt;   </pre><br/>
            <!--
            <pre class="code-w">
 ...<span class="green-marker">++++</span><span class="yellow-marker">x</span><span class="green-marker">++++</span>...
    &lt;---+---&gt;   </pre><br/>
            -->
            <pre class="code-w">
 ..<span class="green-marker">.+++</span><span class="yellow-marker">+</span><span class="green-marker">x+++</span>+...
   &lt;---+---&gt;   </pre><br/>
            <pre class="code-w">
 .<span class="green-marker">..++</span><span class="yellow-marker">+</span><span class="green-marker">+x++</span>++...
  &lt;---+---&gt;   </pre><br/>
            <pre class="code-w">
 <span class="green-marker">...+</span><span class="yellow-marker">+</span><span class="green-marker">++x+</span>+++...
 &lt;---+---&gt;   </pre><br/>
            <pre class="code-w">
<span class="green-marker"> ...</span><span class="yellow-marker">+</span><span class="green-marker">+++x</span>++++...
&lt;---+---&gt;   </pre><br/>
            👆 スライディング・ウィンドウはこんな感じ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ウィンドウと違って、［利き］を見る必要があるのよ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
 .<span class="red-marker">o</span>.++++x+<span class="red-marker">o</span>++...</pre><br/>
            👆 例えば、相手の石が置いてるとする。 + はまあ、空点としよう。<br/>
            <br/>

            <pre class="code-w">
 .o.++++x+o<span class="green-marker">+</span><span class="yellow-marker">+</span><span class="green-marker">... </span>
           <span class="black-marker">&lt;+---&gt;</span>
 .o.++++x<span class="green-marker">+o+</span><span class="yellow-marker">+</span><span class="green-marker">... </span>
         <span class="white-marker">&lt;--+---&gt;</span></pre><br/>

            <pre class="code-w">
 .o.++++x+o<span class="yellow-marker">+</span><span class="green-marker">+...</span>
           <span class="black-marker">|---&gt;</span>
 .o.++++x<span class="green-marker">+o</span><span class="yellow-marker">+</span><span class="green-marker">+...</span>
         <span class="white-marker">&lt;-|---&gt;</span></pre><br/>

            <pre class="code-w">
 .o.++++x+<span class="yellow-marker">o</span>++...
          0
 .o.++++x<span class="green-marker">+</span><span class="yellow-marker">o</span><span class="green-marker">++..</span>.
         <span class="white-marker">&lt;|---&gt;</span></pre><br/>

            <pre class="code-w">
 .o.+<span class="green-marker">+++x</span><span class="yellow-marker">+</span>o++...
     <span class="black-marker">&lt;---|</span>
 .o.++++x<span class="yellow-marker">+</span><span class="green-marker">o++.</span>..
         <span class="white-marker">|---&gt;</span></pre><br/>

            <pre class="code-w">
 .o<span class="green-marker">.+++</span><span class="yellow-marker">+</span><span class="green-marker">x+</span>o++...
   <span class="black-marker">&lt;---|-&gt;</span>
 .o<span class="green-marker">.+++</span><span class="yellow-marker">+</span>x+o++...
   <span class="white-marker">&lt;---|</span></pre><br/>

            <pre class="code-w">
 .o<span class="green-marker">.++</span><span class="yellow-marker">+</span><span class="green-marker">+x+</span>o++...
   <span class="black-marker">&lt;--|--&gt;</span>
 .<span class="green-marker">o.++</span><span class="yellow-marker">+</span><span class="green-marker">+</span>x+o++...
  <span class="white-marker">&lt;---|&gt;</span></pre><br/>

            <pre class="code-w">
 .o<span class="green-marker">.+</span><span class="yellow-marker">+</span><span class="green-marker">++x+</span>o++...
   <span class="black-marker">&lt;-|---&gt;</span>
 <span class="green-marker">.o.+</span><span class="yellow-marker">+</span><span class="green-marker">++</span>x+o++...
 <span class="white-marker">&lt;---|-&gt;</span></pre><br/>

            <pre class="code-w">
 .o<span class="green-marker">.</span><span class="yellow-marker">+</span><span class="green-marker">+++x</span>+o++...
   <span class="black-marker">&lt;|---&gt;</span>
<span class="green-marker"> .o.</span><span class="yellow-marker">+</span><span class="green-marker">+++</span>x+o++...
<span class="white-marker">&lt;---|--&gt;</span></pre><br/>

            👆 ［スライディング利き］はこんな感じで、<span class="black-marker">手番</span>と<span class="white-marker">相手番</span>で利きの範囲が違う。
        </talk-balloon>

        
        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            うわ、めんどくさそうだ。実装にまだ数日かかりそうだ。
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
