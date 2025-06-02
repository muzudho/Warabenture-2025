<template>
  <!--
  <div>
      <NuxtRouteAnnouncer />
      <NuxtWelcome />
  </div>
  -->
  <div>
    <h1># ワラベンチャー</h1>

    <h2>## [2025-06-02_Mon]</h2>
    <div class="div2">
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          フロントエンドに Vue、バックエンドに Tauri を使って、デスクトップアプリ制作を練習してみようぜ？<br>
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          さっそく、このブログを有効的に使い始めたか。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          これはブログじゃないのよ。<br>
          タグの直打ちで、文章載せるだけにしてはすごい労力……。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          プログラミング練習の最初の課題でよくあるのはメモ帳だな。<br>
          テキストボックスに文章を入力して、［保存］ボタンを押したらファイルに保存できて、<br>
          ［読込］ボタンを押したらテキストファイルを読込むんだぜ。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          Tauri の公式ホームページはここにあるぜ。<br>
          📖 <a target="_blank" href="https://v2.tauri.app/">Tauri 2.0</a><br>
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          Tauri の Get Started を読んでいけだぜ。<br>
          インストールの説明は省くからな。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--1159-tauri-o1o0.png">
        <img src="/img/journal/202506/202506__program__02--1159-tauri-o1o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 こんな感じでコマンドを打鍵すればいいはず。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--1205-tauri-o1o1o0.png">
        <img src="/img/journal/202506/202506__program__02--1205-tauri-o1o1o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 色々尋ねられるので、こんな感じで進めたぜ。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--1209-tauri-o1o2o0.png">
        <img src="/img/journal/202506/202506__program__02--1209-tauri-o1o2o0.png">
      </a><br/>      
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 Git Hub と連携しておいた。フォルダーの中身はこうなった。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--1212-tauri-o1o3o0.png">
        <img src="/img/journal/202506/202506__program__02--1212-tauri-o1o3o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 VSCode で開く。 下側のステータスバーを見ると cargo がディレクトリーをチェックしてるので<br>
          わたしの PC はCPU処理がビジーだとフリーズすることがあるので、終わるまで待って……。<br>
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--1216-tauri-o1o4o0.png">
        <img src="/img/journal/202506/202506__program__02--1216-tauri-o1o4o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 （パワーシェルではなく）コマンドプロンプトで開いて、<br>
          コマンド［pnpm install］を打鍵。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--1220-tauri-o1o5o0.png">
        <img src="/img/journal/202506/202506__program__02--1220-tauri-o1o5o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 📁［node_modules］というバカでかいフォルダーが自動生成される。  
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          続いて［pnpm tauri dev］というコマンドを打鍵。<br>
          わたしのケースでは、 379 個の大量のプログラムのコンパイルが走るので数分かかる。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--1225-tauri-o1o6o0.png">
        <img src="/img/journal/202506/202506__program__02--1225-tauri-o1o6o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 途中で［http://localhost:1420/］という URL が出てくるが、気にしないでほしい。<br>
          ウェブブラウザーでは、フロントエンドの画面表示のテストはできるが、バックエンドのテストはできない。<br>
          動作確認に使うには不完全。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--1229-tauri-o1o7o0.png">
        <img src="/img/journal/202506/202506__program__02--1229-tauri-o1o7o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 コンパイルが終わると、デスクトップアプリが出てくる。<br>
          動作確認はこれに対して行う。
        </div>
      </div>

      

    </div>

    <h2>## [2025-06-01_Sun]</h2>
    <div class="div2">
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202101__character__24-o2o2o3o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          文字は出せるかだぜ？
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202101__character__28--kifuwarabe-futsu-o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          出せてるぜ。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202108__character__12--ohkina-hiyoko-futsu2-o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          なんか画像がボヤけてない？<br/>サイズもマチマチだし。<br/>グレードダウンしてない？
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          まあ、そこはゆくゆくは修正だな。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          さっそくイラストを新調したか、<br/>
          グレードダウンしてないかだぜ？
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          Grok に描かせようと、Super Grok にプラン変更しようとしたら、<br/>
          クレジットカードを拒否されたので、あんたのお父んの手描きになったのよ。<br/>
          何でクレジットカードが拒否されたのか知らんけど。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          このトップページは近況を書く日記かだぜ？<br/>
          メインのコンテンツは何かないのかだぜ？
        </div>
      </div>
    </div>

    <h2>## [2025-05-24_Sat]</h2>
    <div class="div2">
      Grok の助けを得て、ホームページ作成中（＾ｑ＾）<br/>
      <img src="@/assets/img/202505__grok__25-warabenture-2.png" />
      <img src="@/assets/img/202505__grok__25-warabenture-1.png" /><br/>
    </div>

  </div>
</template>

<style>
body{
  background-color: pink;
}

h1 {
  background-color: #111111;
  color: #EEEEEE;
}

/* スマホ向けスタイル (画面幅が768px以下) */
@media screen and (max-width: 768px) {
  h2 {
    background-color: #111111;
    color: #EEEEEE;
    margin-left: 20px;
    padding-left: 4px;
  }

  div.div2 {
    color: #111111;
    margin-left: 30px;
  }
}

/* パソコン向けスタイル (画面幅が769px以上) */
@media screen and (min-width: 769px) {
  h2 {
    background-color: #111111;
    color: #EEEEEE;
    margin-left: 60px;
    padding-left: 4px;
  }

  div.div2 {
    color: #111111;
    margin-left: 90px;
  }
}

div.talk{
  display: flex;
  align-items: center;
  margin-top: 1px;
  margin-bottom: 1px;
}

div.face-container{
  width:100px;
}

div.baloon{
  padding-left:16px;
  padding-top: 12px;
  padding-bottom:16px;
  padding-right:16px;
  background-color: white;
  border-radius: 16px;
}

/**
 *       | 0%   100%
 *   ----+----------
 *     0%|         2
 *    50%|  1
 *   100%|         3
 */
div.baloon-tail {
  width: 20px;
  height: 15px;
  background-color: white; /* 白い背景 */
  clip-path: polygon(0% 50%, 100% 0%, 100% 100%); /* 上頂点、下底の三角形 */
}
</style>