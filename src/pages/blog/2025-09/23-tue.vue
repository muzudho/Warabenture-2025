<!--
    src/router/page-map.ts も編集してください。
-->
<template>

    <!-- 機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <!-- 以降、ページ -->
    <h1><router-link to="/blog/2025-09/23-tue">[2025-09-23_Tue]</router-link></h1>
    <section class="sec-1 pt-6 mb-6">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <span class="yellow-marker">五目並べ（Gomoku；ごもくならべ）</span>作ってるんだが……。<br/>
            重要な用語には黄色いマーカーを引いていくぜ。
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
            プログラミングする前に、用語を決めておきたいので決めるぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            好きにしてくれだぜ。
        </talk-balloon>


    </section>

    <h2>石から色</h2>
    <section class="sec-2 pt-6 mb-6">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            五目並べでは盤上の線が交わっているところに石を置くことから、<br/>
            石を置く場所のことを<span class="yellow-marker">交点（Node；こうてん、ノード）</span>とも呼ぶ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            チェスでは正方形の線で囲まれた内側に駒を置くことから<span class="yellow-marker">ます（Square；スクウェア）</span>って呼ぶぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            将棋のますは正方形ではなくて長方形だそうよ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            プログラミングでは、Node という用語を使うのが都合が悪いときは、 Square という用語で代用する。
        </talk-balloon>
        

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            また、このブログでは、盤の絵を描くのが大変なため、テキストで盤を書く。<br/>
            <br/>
            交点に石を置いていないところを<span class="yellow-marker">空点（Empty；エンプティ）</span>と呼び <span class="code-w">.</span>を、<br/>
            黒石を置いているとき<span class="yellow-marker">黒石（Black；ブラック）</span>と呼び <span class="code-w">x</span>を、<br/>
            白石を置いているとき<span class="yellow-marker">白石（White；ホワイト）</span>と呼び <span class="code-w">o</span> を書くことにするぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            人間対人間で通信対戦していた頃の<span class="blue-marker">囲碁（Go；いご）</span>プログラミングで伝統的な記法よね。<br/>
            重要ではない用語には青いマーカーを引いていくわよ。
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
    
    
    </section>

    <h2>対局者から手番</h2>
    <section class="sec-2 pt-6 mb-6">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            五目並べは２人で石を置いて遊ぶ<span class="yellow-marker">対局（Game；ゲーム）</span>で、遊ぶ人のことを<span class="yellow-marker">対局者（Player；プレイヤー）</span>と呼ぶぜ。<br/>
            <br/>
            先に石を置く対局者を<span class="yellow-marker">先手（Earlier move；せんて）</span>、<br/>
            後に石を置く対局者を<span class="yellow-marker">後手（Later move；ごて）</span>と呼ぶぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            Sente、 Gote で通じるみたいよ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            先手は黒石、後手は白石を持つことが決まってるから、<br/>
            <br/>
            先手を<span class="yellow-marker">黒番（Black；くろばん）</span>、<br/>
            後手を<span class="yellow-marker">白番（White；しろばん）</span>という呼び方もするぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            チェスでは白番が先手のようよ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            将棋には<span class="blue-marker">上手（White;うわて）</span>、<span class="blue-marker">下手（Black;したて）</span>もあるぜ。</br>
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            先手と後手を総称して、これも色と呼ぶことにするぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            また、自分から見て、反対側のプレイヤーを<span class="blue-marker">相手（Opponent；あいて、オポネント）</span>と呼ぶぜ。<br/>
            <br/>
            そこからさらにひっくり返って、オポネントと対局しているプレイヤー自身を<span class="blue-marker">味方（Friend；みかた、フレンド）</span>と呼ぶこともあるぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            黒番と白番は対局の間に変わることはないが、<br/>
            <br/>
            自分が黒白どちらの側を指すかは、対局の間に変わらないプログラムと、石を１回置くたびにひっくり返るプログラムがあるぜ。</br>
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            罪深い……。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            これから石を置くプレイヤーの側を<span class="yellow-marker">手番（Turn；てばん、ターン）</span>と呼ぶぜ。<br/>
            <br/>
            <span class="blue-marker">私の番（My turn；マイ・ターン）</span>や、<span class="blue-marker">あなたの番（Your turn；ユワ・ターン）</span>という言い回しもあるが、<br/>
            わたしはマイ・ターンと呼び、相手はわたしのことをユワ・ターンと呼ぶので、どちらも同じ意味だぜ<br/>
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            対義語同意というレアケース。</br>
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            フレンドは常にターンなの？
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            手番を持ってない方のプレイヤーから見たら、オポネントがターンだぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            度し難い……。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            関西弁ではあなたと自分は対義語同意だしな。<br/>
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            <span class="yellow-marker">ログインした利用者（Log-in user）</span>、<br/>
            <span class="yellow-marker">その他の利用者（Other user）</span>、<br/>
            黒番（Black）、<br/>
            白番（White）、<br/>
            手番（Turn）、<br/>
            <span class="yellow-marker">相手番（Opposite turn）</span>の６つでカバーできるはずだぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            フレンドとオポネントはいつ使うの？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ターンとフレンドが一致していれば、ターンの代わりにフレンドを使えばいいし、<br/>
            <br/>
            ログイン・ユーザーとフレンドが一致してれば、ログイン・ユーザーの代わりにフレンドを使えばいいぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            フレンドがターンと一致しているか、ログイン・ユーザーと一致しているかはどうやって調べるの？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            ソースコードの雰囲気から気付けだぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            解せない……。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            相手の相手は自分だろ。<br/>
            じゃあ、ソースコードに相手と書いてある箇所は、ログイン・ユーザー、またはその他のユーザーのどちらかだぜ。<br/>
            <br/>
            そんな相反する言葉がトグルになって入っている概念をソースコードの中で使うなだぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            自分（Friend）、相手（Opponent）という言葉は廃止よ廃止！<br/>
            手番（Turn）か、相手番（Opposite turn）を使いなさい！
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            手番と相手番を総称して、これも色と呼ぶことにするぜ。
        </talk-balloon>


    </section>

    <h2>並びと盤</h2>
    <section class="sec-2 pt-6 mb-6">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            次に、五目並べは石を並べるゲームだが、<br/>
            <br/>
            例えば左から右へ空点を並べた <span class="code-w">......</span>とか、<br/>
            <br/>
            石と空点を混ぜて並べた <span class="code-w">ox..xox.o.x..</span>といった並びを<br/>
            <br/>
            本書では<span class="yellow-marker">フィールド（Field）</span>と呼ぶことにするぜ。<br/>
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            コンピューター・チェスには<span class="blue-marker">ビット・フィールド（Bit Field）</span>っていう似たものがあって、そこからの用語の借用ねえ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            特に、<br/>
            <br/>
            同じ色の石と空点だけでできた<span class="code-w">...<span class="red-marker">x..xx.x</span>...</span>とか、<br/>
            <br/>
            <span class="code-w">...<span class="red-marker">ooo.....oo.o</span>....</span> のようなフィールドのうち、<br/>
            <br/>
            端と端の石を結ぶ区間を本書では<span class="blue-marker">ランズ（Runs）</span>と呼ぶことにするぜ。<br/>
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            お父ん、定義しておいて、後からやっぱ要らねって使わない用語あるよな。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            そして、<br/>
            <pre class="code-w">
......
..ox..</pre>
            みたいな、縦横に格子状に並んだものを<span class="yellow-marker">盤（Board；ボード）</span>と呼ぶことにするぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            コンピューター・チェスには<span class="blue-marker">ビット・ボード（Bit Board）</span>っていう似たものがあって、そこから用語を借用するまでもなく、一般名詞ねえ。
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
                はボードだが、５つの石 x に着目すればフィールドだな。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
                そして、ボードの上に見立てたフィールドには４つの<span class="yellow-marker">方向（Direction；ディレクション）</span>がある。
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
            将棋には、引（ひき）、寄（より）、上（あがる）、左（ひだり）、直（すぐ）、右（みぎ）、打（うつ）、成（なり）、成（ならず）の９ウェイがあって、その一部には組み合わせがあるのよ。
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
                コンピューター囲碁の方でもムーブという言葉が使われるようになったんじゃないかな。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            次に、石を１個置いたとして……、<br/>
            <pre class="code-w">
...........
...........
...........
...........
...........
.....x.....
...........
...........
...........
...........
...........</pre><br/>
            五目並べの盤上では、下図の、着手点を含まない４ウェイ上の数で表した <span class="code-w">+</span> 場所になんらかの影響がある。<br/>
            <pre class="code-w">
...........
.+...+...+.
..+..+..+..
...+.+.+...
....+++....
.++++.++++.
....+++....
...+.+.+...
..+..+..+..
.+...+...+.
...........</pre><br/>
            これをもうちょっと細かく分解して見ていこう。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            着手点から外側に向かって、フィールドが８つ伸びているとしよう。８ウェイだぜ。<br/>
            <pre class="code-w">
(4)    (3)    (2)
   ...........
   .4...4...4.
   ..3..3..3..
   ...2.2.2...
   ....111....
(5).4321.1234.(1)
   ....111....
   ...2.2.2...
   ..3..3..3..
   .4...4...4.
   ...........
(6)    (7)    (8)</pre><br/>
            本書ではチェスに倣ってこの位置を<span class="yellow-marker">駒の動き（Piece movement；ピース・ムーブメント）</span>と呼ぶことにするぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
                <span class="blue-marker">駒（Piece；こま、ピース）</span>は動くが、石は動かないけどな。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            数字は読む順を表す。つまり、途中に相手の石<span class="code-w">o</span>が置いてあったら、その先には駒の動きは届かないぜ。<br/>
            <pre class="code-w">
(4)    (3)    (2)
   ...........
   .....<span class="green-marker">4</span>...o.
   ..o..<span class="green-marker">3</span>..<span class="blue-marker">3</span>..
   ...<span class="yellow-marker">2</span>.<span class="green-marker">2</span>.<span class="blue-marker">x</span>...
   ....<span class="yellow-marker">1</span><span class="green-marker">x</span><span class="blue-marker">1</span>....
(5).<span class="red-marker">4</span><span class="red-marker">3</span><span class="red-marker">2</span><span class="red-marker">1</span>.<span class="red-marker">1</span><span class="red-marker">2</span><span class="red-marker">3</span><span class="red-marker">4</span>. (1)
   ....<span class="blue-marker">1</span><span class="green-marker">1</span>o....
   ...<span class="blue-marker">2</span>.<span class="green-marker">2</span>.....
   ..<span class="blue-marker">x</span>..<span class="green-marker">3</span>.....
   .<span class="blue-marker">4</span>...<span class="green-marker">4</span>.....
   ...........
(6)    (7)    (8)</pre><br/>
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


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            将棋の利きは<span class="blue-marker">相手の駒も含む</span>けど、本書では利きに<span class="yellow-marker">相手の石を含まない</span>の？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            含まないぜ。<br/>
            <br/>
            新しい用語を造語してもいいのかもしれないが、ひとまず、必要になるまでは、既に有るものを借用しようぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            さっきの図の利きを、着手点を含まずに、ウェイごとにフィールドに分解すると以下の通り。<br/>
            <br/>
            (1)<span class="code-w"><span class="red-marker">1234</span></span>水平に東へ<br/>
            (2)<span class="code-w"><span class="blue-marker">1x3</span></span>バロック・ダイアゴナルに北東へ<br/>
            (3)<span class="code-w"><span class="green-marker">x234</span></span>垂直に北へ<br/>
            (4)<span class="code-w"><span class="yellow-marker">12</span></span>シニスター・ダイアゴナルに北西へ<br/>
            (5)<span class="code-w"><span class="red-marker">1234</span></span>水平に西へ<br/>
            (6)<span class="code-w"><span class="blue-marker">12x4</span></span>バロック・ダイアゴナルに南西へ<br/>
            (7)<span class="code-w"><span class="green-marker">1234</span></span>垂直に南へ<br/>
            (8)<span class="code-w"><span class="yellow-marker"></span></span>シニスター・ダイアゴナルに南東へ<br/>
            <br/>
            とりあえず、左から右へ、<br/>それが無理なら上から下へ並べた。</br>
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
