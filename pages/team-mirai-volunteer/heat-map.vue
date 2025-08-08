<template>
    <NuxtLink to="/">ワラベンチャー</NuxtLink>　＞　<NuxtLink to="/team-mirai-volunteer">チームみらいボランティア</NuxtLink><br>
    <h1>ヒートマップ</h1>
    <section class="sec-1">
        <ul>
            <li><NuxtLink to="#functions">機能紹介</NuxtLink></li>
            <li><NuxtLink to="#download">ダウンロードはこちらから</NuxtLink></li>
            <li><NuxtLink to="#chatting">雑談</NuxtLink></li>
        </ul>
    </section>
    <h2 id="functions">機能紹介</h2>
    <section class="sec-2">

        <a target="_blank" href="/img/journal/202506/202506__teamMirai__09--1610-heatMap16-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__teamMirai__09--1610-heatMap16-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                👆 ヒートマップを作れる。<br>
                右上の凡例にあるように［以上］での比較だけ利用可能。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__teamMirai__09--1730-heatMap23-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__teamMirai__09--1730-heatMap23-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                👆 もちろん、表示内容を替えれる。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__teamMirai__10--0814-heatMap28-o2o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__teamMirai__10--0814-heatMap28-o2o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                👆 もちろん、ワークブックを新しく作って一から編集すれば、別の地図でヒートマップを表示することも可能。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__teamMirai__09--1729-heatMap22-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__teamMirai__09--1729-heatMap22-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                👆 ごく短い文字数のメモにも使える。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__teamMirai__09--1750-heatMap25-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__teamMirai__09--1750-heatMap25-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                👆 仕込みとして、<br>
                この<span class="font-x2">地図</span>を描くとこは、罫線とセル結合を駆使して神エクセル、頑張ってくれだぜ。<br>
                本来、この市区町村は東西南北に隣り合わせではないんだとか、<br>
                つながりにおかしなところは出てくるが、それでも切った貼ったしてグリッドに押し込んで並べろだぜ。<br>
                <br/>
                正確さが損なわれる代わりに、それによって、地形の取扱いがシンプルになって、その後の作業の簡便性向上が得られる。<br>
                トレードオフだぜ。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__teamMirai__09--1619-heatMap16-o3o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__teamMirai__09--1619-heatMap16-o3o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                👆 地図と<span class="font-x2">データ</span>はワークシートを分けている。<br>
                データは［e-Stat］の［国勢調査］とかから持ってきてくれだぜ。<br>
                <a target="_blank" href="https://www.e-stat.go.jp/">https://www.e-stat.go.jp/</a>
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__teamMirai__09--1740-heatMap24-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__teamMirai__09--1740-heatMap24-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                👆 地図とデータを紐づける、いわゆる<span class="font-x2">制御</span>もワークシートが分かれているから、<br>
                コピペで横展開しやすいように作ってある。<br>
                使い方はワークブックの中に［手順書_XXXX］ワークシートを入れてあるから、それを読んでくれだぜ。
            </div>
        </div>
    </section>
    <h2 id="download">ダウンロードはこちらから</h2>
    <section class="sec-2">
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                ［ヒートマップ］神エクセルのダウンロードはこちらから。<br>
                <br>
                ↑ New:<br>
                （Ver 4.1.2）日本国：<a href="/products/202506/Heat Map 4_1_2 - Japan[20250615-0050].xlsm"><span class="font-x2">⏬</span>Heat Map 4_1_2 - Japan[20250615-0050].xlsm</a><br>
                （Ver 4.1.2）埼玉県：<a href="/products/202506/Heat Map 4_1_2 - Saitama[20250614-2352].xlsm"><span class="font-x2">⏬</span>Heat Map 4_1_2 - Saitama[20250614-2352].xlsm</a><br>
                （Ver 4.1.2）埼玉県新座市：<a href="/products/202506/Heat Map 4_1_2 - Saitama_Niiza[20250614-2352].xlsm"><span class="font-x2">⏬</span>Heat Map 4_1_2 - Saitama_Niiza[20250614-2352].xlsm</a><br>
                <br>
                （Ver 4.1.1）埼玉県新座市（交通追加）：<a href="/products/202506/Heat Map 4_1_1 - Saitama_Niiza[20250611-0956] - AddedAccess.xlsm"><span class="font-x2">⏬</span>Heat Map 4_1_1 - Saitama_Niiza[20250611-0956] - AddedAccess.xlsm</a><br>
                （Ver 4.1.0）埼玉県新座市：<a href="/products/202506/Heat Map 4_1_0 - Saitama_Niiza[20250611-0754] - VersionUp.xlsm"><span class="font-x2">⏬</span>Heat Map 4_1_0 - Saitama_Niiza[20250611-0754] - VersionUp.xlsm</a><br>
                （Ver 4.0.0）埼玉：<a href="/products/202506/Heat Map 4_0_0 - Saitama[20250611-0502] - VersionUp.xlsm"><span class="font-x2">⏬</span>Heat Map 4_0_0 - Saitama[20250611-0502] - VersionUp.xlsm</a><br>
                <br>
                （Ver 3.0.1）日本：<a href="/products/202506/Heat Map 3_0_1 - Japan[20250610-0806].xlsm"><span class="font-x2">⏬</span>Heat Map 3_0_1 - Japan[20250610-0806].xlsm</a><br>
                （Ver 3.0.1）埼玉：<a href="/products/202506/Heat Map 3_0_1 - Saitama[20250610-0726] - BugFix.xlsm"><span class="font-x2">⏬</span>Heat Map 3_0_1 - Saitama[20250610-0726] - BugFix.xlsm</a><br>
                <br>
                （Ver 2.0.0）埼玉：<a href="/products/202506/Heat Map 2_0_0 - Saitama[20250609-1638].xlsm"><span class="font-x2">⏬</span>Heat Map 2_0_0 - Saitama[20250609-1638].xlsm</a><br>
                ↓ Old
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                オープンソースだぜ。本文書いてないが MIT ライセンスとでもしておいてくれだぜ。<br>
                ［国勢調査］のデータを含んでるが、あれのライセンスは何なんだろな？
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__teamMirai__09--1657-heatMap20-o1o0-mark.png">
            <img class="scr-shot" src="/img/journal/202506/202506__teamMirai__09--1657-heatMap20-o1o0-mark.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                👆 マクロの入っているエクセル（上図）は、<br>
                インターネットからダウンロードするとブロックされてるから……。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__teamMirai__09--1700-heatMap21-o1o0-mark.png">
            <img class="scr-shot" src="/img/journal/202506/202506__teamMirai__09--1700-heatMap21-o1o0-mark.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                👆 ✅チェックしてブロックを外してくれだぜ。
            </div>
        </div>
    </section>
    <h2 id="chatting">雑談</h2>
    <section class="sec-2">
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                神エクセルだぜ。<br>
                <br>
                ヒートマップって何で作るかというと、計画段階でも、末端の現場でも、どちらでも、そこでの判断を助けるためだぜ。<br>
                <br>
                そもそも生のデータってのは複雑だからな。<br>
                正確さを損ねてでもやる大幅なシンプル化は、時間が有限の中で何かを決断しなければいけない瞬間に<br>
                結局やることになる。<br>
                ここまでシンプルにすると、ボードゲームみたいになる。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                神エクセルは作ってはいかんのに……。<br>
                エクセルは表計算ソフトなのに……。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                エクセルを GUI と割り切っている人もいるのよ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                作業効率化や、コミュニケーションのためのスマホを使ったナウいツールは公式の人が用意してくれるだろうから、<br>
                <span class="font-x2">神エクセルで何でもできるんだ！</span>という人を補助するツールにしていくぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                だからそんなやつ、<br>
                お父んしかいないのに……。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                デスクトップ版のエクセル、現代的に言うと Office 360 を購入してしまえば、<br>
                あとは VBA だけで完結するから、<br>
                もう、神エクセルにハマった人は、他の環境が進化しててでも神エクセルをやるのよ。<br>
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                死んだ巻貝の殻に入るヤドカリみたいだな。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">巻貝が良いんだ！</span>スマホにはついていけないんだ！
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                分かった分かった。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                最新の AI を提供する公式スタッフと、<br>
                わたしの熟練した神エクセルでバトルな。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                しかしこんなツール、要らんのでは？<br>
                お父んだけ使っていればいいのでは？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                案外、そんじょそこらに熟練度の上限に達してしまったヤドカリがいっぱいいて<br>
                集まってくるかも知れないわよ？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                うわあ
            </div>
        </div>
    </section>
</template>

<script setup>
  // スクリプト（必要ならロジックをここに）
</script>

<style scoped>
  h1 {
    color: #86DFCB; /* 前の質問の色を入れてみたぜ！ */
  }
</style>
