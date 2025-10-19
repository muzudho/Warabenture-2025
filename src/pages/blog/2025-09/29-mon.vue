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


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            👇 以下のように説明を付けたろ。
        </talk-balloon>


        <pre class="coding-paper mb-6">
      フィールド        内野      外野    観客席               コメント
----  ----------------  --------  ------  -------------------  --------
( 1)  ..............X   盤外                                   盤端で空きスペースが無いので、この方向では、挟み返される心配がない
                    |&gt;
( 2)  .............X<span class="red-marker">.</span>   空マス                                 逆側の［ｎ翼手］の配置によっては、［内野］の直近に［相手番石］を置かれたときに<span class="red-marker">挟まれるかも</span>
                   |&gt;
( 3)  ............Xoo   相手番石  盤外                         盤端で空きスペースが無いので、この方向では、挟み返される心配がない
                  |--&gt;
( 4)  ...........Xoo.   相手番石  空マス                       既に相手番石で挟まれているので、挟み返される心配がない
                 |--&gt;
( 5)  ..........X<span class="green-marker">oo</span>xx   <span class="green-marker">相手番石</span>  手番石  盤外                 この［相手番石］はひっくり返る。盤端で空きスペースが無いので、この方向では、挟み返される心配がない
                |-&gt;|-&gt;
( 6)  .........X<span class="green-marker">oo</span>xx<span class="red-marker">.</span>   <span class="green-marker">相手番石</span>  手番石  空マス               この［相手番石］はひっくり返る。逆側の［ｎ翼手］の配置によっては、［観客席］の直近に［相手番石］を置かれたときに<span class="red-marker">挟まれるかも</span>
               |-&gt;|-&gt;
( 7)  ........X<span class="green-marker">oo</span>xxoo   <span class="green-marker">相手番石</span>  手番石  相手番石             この［相手番石］はひっくり返る。既に相手番石で挟まれているので、挟み返される心配がない
              |-&gt;|-&gt;</pre><br/>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            👆 １つの方向に限ってみると、取ったつもりで取り返される可能性がある空マスがあるのは (2) と (6) のケースなんだ。            
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            X の反対側の［ｘ翼手］が (3)、(4)、(7) だった場合、そうだな。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            じゃあ、 (1) と (5) だけが、１方向に限っての話しでは、 X が取り返されないことが確定で、それ以外は取り返される可能性があるんだ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            端まで［手番石］で詰まってるからな。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            組み合わせを見てみようぜ？
        </talk-balloon>


        <pre class="coding-paper mb-6">
  左    右  フィールド         コメント
----  ----  -----------------  --------
( 1)  ( 1)   X                 １マス・フィールドでしか起こりえない。挟まれず
( 1)  ( 2)   X..............   挟まれず
( 1)  ( 3)   Xoooooooooooooo   挟まれず
( 1)  ( 4)   Xooooooooooooo.   挟まれず
( 1)  ( 5)   X<span class="green-marker">oooooooooooo</span>xx   挟まれず
( 1)  ( 6)   X<span class="green-marker">ooooooooooo</span>xx.   挟まれず
( 1)  ( 7)   X<span class="green-marker">oooooooooo</span>xxoo   挟まれず
( 2)  ( 2)   .......X.......   ただちには挟まれず
( 2)  ( 3)   ......<span class="red-marker">.</span><span class="yellow-marker">X</span><span class="red-marker">o</span>oooooo   挟み返される
( 2)  ( 4)   ......<span class="red-marker">.</span><span class="yellow-marker">X</span><span class="red-marker">o</span>ooooo.   挟み返される
( 2)  ( 5)   .......X<span class="green-marker">ooooo</span>xx   挟まれず
( 2)  ( 6)   .......X<span class="green-marker">oooo</span>xx.   ただちには挟まれず
( 2)  ( 7)   ......<span class="red-marker">.</span><span class="yellow-marker">X</span><span class="green-marker">ooo</span><span class="yellow-marker">xx</span><span class="red-marker">o</span>o   挟み返される
( 3)  ( 3)   oooooooXooooooo   挟まれず
( 3)  ( 4)   oooooooXoooooo.   挟まれず
( 3)  ( 5)   oooooooX<span class="green-marker">ooooo</span>xx   挟まれず
( 3)  ( 6)   oooooo<span class="red-marker">o</span><span class="yellow-marker">X</span><span class="green-marker">oooo</span><span class="yellow-marker">xx</span><span class="red-marker">.</span>   挟み返される
( 3)  ( 7)   oooooooX<span class="green-marker">ooo</span>xxoo   挟まれず
( 4)  ( 4)   .ooooooXoooooo.   ただちには挟まれず
( 4)  ( 5)   .ooooooX<span class="green-marker">ooooo</span>xx   挟まれず
( 4)  ( 6)   .ooooo<span class="red-marker">o</span><span class="yellow-marker">X</span><span class="green-marker">oooo</span><span class="yellow-marker">xx</span><span class="red-marker">.</span>   挟み返される
( 4)  ( 7)   .ooooooX<span class="green-marker">ooo</span>xxoo   挟まれず
( 5)  ( 5)   xx<span class="green-marker">ooooo</span>X<span class="green-marker">ooooo</span>xx   挟まれず
( 5)  ( 6)   xx<span class="green-marker">ooooo</span>X<span class="green-marker">oooo</span>xx.   挟まれず
( 5)  ( 7)   xx<span class="green-marker">ooooo</span>X<span class="green-marker">ooo</span>xxoo   挟まれず
( 6)  ( 6)   <span class="red-marker">.</span><span class="yellow-marker">xx</span><span class="green-marker">oooo</span><span class="yellow-marker">X</span><span class="green-marker">oooo</span><span class="yellow-marker">xx</span><span class="red-marker">.</span>   挟み返される
( 6)  ( 7)   <span class="red-marker">.</span><span class="yellow-marker">xx</span><span class="green-marker">oooo</span><span class="yellow-marker">X</span><span class="green-marker">ooo</span><span class="yellow-marker">xx</span><span class="red-marker">o</span>o   挟み返される
( 7)  ( 7)   ooxx<span class="green-marker">ooo</span>X<span class="green-marker">ooo</span>xxoo   挟まれず
</pre><br/>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            うわっ、なんだこりゃ　むずっ！
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            こんな定理作って何が嬉しいの？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            相手番が次に石を置ける場所が分かるわけだぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            (2), (3) の (2) 側の空点、<br/>
            (2), (4) の (2) 側の空点、<br/>
            (2), (7) の (2) 側の空点、<br/>
            (3), (6) の (6) 側の空点、<br/>
            (4), (6) の (6) 側の空点、<br/>
            (6), (6) の両側の空点、<br/>
            (6), (7) の (6) 側の空点、<br/>
            <br/>
            の７ケースがあるな。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            先に石をひっくり返してから、ひっくり返した石１個１個について［手番石］［相手番石］が置ける場所を更新した方がシンプルじゃない？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            それをやってるんだぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
........
...x....
.x.x.x..
..xxx...
xoooooo.
..xxx...
.x.x.x..
o..o..o.
</pre><br/>
            👆 仮に上図のような盤があったとして……
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
........
...x....
.x.x.x..
..xxx...
xoooooo<span class="red-marker">X</span>
..xxx...
.x.x.x..
o..o..o.
</pre><br/>
            👆 上図のように着手したら……
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
........
...x....
.x.x.x..
..xxx...
x<span class="green-marker">xxxxxx</span>X
..xxx...
.x.x.x..
o..o..o.
</pre><br/>
            👆 上図のように石がひっくり返って……
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
...<span class="blue-marker">+</span>....
<span class="blue-marker">+</span>..x..<span class="blue-marker">+</span>.
.x.x.x..
..xxx...
xxxxxxxX
..xxx...
.x.x.x..
o..o..o.
</pre><br/>
            👆 石が置ける箇所が増えるけど、この動きには対応してないわよね。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            その動きだけあればいいのか……。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            そのとか、このとかではなく、名前を付けてくれだぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <span class="yellow-marker">指し手生成（Move Generation；ムーブ・ジェネレーション）</span>かな。<br/>
            関数の名前にするなら generateMove。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
oxx.xxx.
</pre><br/>
            👆 上図のようなフィールドがあるとして、
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
oxx<span class="red-marker">X</span>xxx.
</pre><br/>
            👆 ［手番石］の隙間に着手して、
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <pre class="code-w">
oxxXxxx<span class="blue-marker">+</span>
</pre><br/>
            👆 相手番の着手点が増える、という振る舞いが要るのよ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            お父んの［内野］、［外野］、［観客席］という分け方にはこの動きは無かったな。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            端っこまで行って、また返ってくるソナー（sonar）みたいな動きすればいいのか。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ひとまず、ひっくり返す石の見分け方を、まとめ直そう。
        </talk-balloon>


        <pre class="coding-paper mb-6">
locateTargetStones 関数
=======================

・着手点から、［前方］へ読み進める
・ループ
    ・［盤外］に突き当たったらループから抜ける。覚えた［相手番石］のリストはクリアー
    ・［空マス］に突き当たってもループから抜ける。覚えた［相手番石］のリストはクリアー
    ・［手番石］に突き当たってもループから抜ける。覚えた［相手番石］のリストは保持する
    ・［相手番石］に突き当たったら、その場所を覚える
着手点                      前方      コメント
------      ----------      --------  --------
手番石  →  盤外                      対象無し
手番石  →  空マス                    対象無し
手番石  →  手番石                    対象無し
手番石  →  相手番石    →  盤端      対象無し
手番石  →  相手番石    →  空マス    対象無し
手番石  →  相手番石Ａ  →  手番石    ［相手番石Ａ］は対象
        </pre>


        <pre class="coding-paper mb-6">
reverseStones 関数
==================

指定したマス番号の石をひっくり返す。
        </pre>


        <pre class="coding-paper mb-6">
generateMoveOnDirection 関数
============================

・着手点から、［前方］へ読み進める
・［前向きループ］処理
    ・［着手点］の前方からスタート
    ・［盤外］に突き当たったら、処理終了
    ・［空マス］に突き当たったら、［前方キャップ］に［空マス］とそのマス番号を記録して［後ろ向きループ］処理へ
    ・［手番石］に突き当たったら、続行
    ・［相手番石］に突き当たったら、［前方キャップ］に［相手番石］とそのマス番号を記録して［後ろ向きループ］処理へ
・［後ろ向きループ］処理
    ・［着手点］の後方からスタート
    ・［盤外］に突き当たったら、処理終了
    ・［空マス］に突き当たったら、［後方キャップ］に［空マス］とそのマス番号を記録して処理終了
    ・［手番石］に突き当たったら、続行
    ・［相手番石］に突き当たったら、［後方キャップ］に［相手番石］とそのマス番号を記録して処理終了

組み合わせ：

前方キャップ  後方キャップ  コメント
------------  ------------  --------
空マス        空マス        指し手変更無し
空マス        相手番石      ［前方キャップ］のマスを指し手に追加
相手番石      相手番石      指し手変更無し
        </pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            👆 これって指し手が追加されるパターンなんだが、<br/>
            逆に、指し手が削除されるパターンってないのかだぜ？
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            手番が石をひっくり返すことで、相手番の石が置けるマスが減るケースか。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            そりゃ、有るんじゃないの？　ひっくり返されて石が消えてくんだから。
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
