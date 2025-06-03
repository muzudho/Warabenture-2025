<template>
  <!--
  <div>
      <NuxtRouteAnnouncer />
      <NuxtWelcome />
  </div>
  -->
  <div>
    <h1># ワラベンチャー</h1>
    <div class="div1">
      今さら、手作りのホームページ。（Created by むずでょ）
    </div>


    <h2>## [2025-06-03_Tue]</h2>
    <div class="div2">
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          昨日と話しは変わって、課題No.2だぜ。<br>
          ディレクトリーを指定したら、その直下のファイル名を一覧してくれるアプリを作ってくれだぜ。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          じゃあ、ファイルパスを入れるテキストボックスと、ファイル選択ダイアログボックスを開くボタン、<br>
          ［ファイルの一覧］と、その表示を更新する［表示］ボタンがあればいいかだぜ。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          今日のキャパシティ（作業に使える時間）は 6 とするぜ。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          昨日作ったアプリから［Save］機能を削除して、テキストボックスをリストボックスへ付け替え、<br>
          あとは、ファイル名を一覧する機能が作れるかどうかの調査と実装だから、<br>
          調査を重めに見て、エフォート（作業にかかる時間見積）は 2 ってところねえ。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__03--1049-tauri-o2o1o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1049-tauri-o2o1o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 昨日作ったプログラムから、<span class="code-b">.git</span>と<span class="code-b">node_modules</span>以外のフォルダーとファイルをコピーするぜ。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__03--1056-tauri-o2o2o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1056-tauri-o2o2o0-mark.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 📁<span class="code-b">file-list-on-tauri</span>を作って、中身を貼り付け。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__03--1109-tauri-o2o3o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1109-tauri-o2o3o0-mark.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 そのフォルダーを VSCode で開くぜ。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__03--1127-tauri-o2o4o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1127-tauri-o2o4o0-mark.png">
      </a><br/>
      <div class="code-b">git init</div><br>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 （パワーシェルではなくて）コマンドプロンプトを開いて、上記のコマンドを打鍵するぜ。<br>
          これにより、カレントディレクトリーに 📁<span class="code-b">.git</span>っていう隠しフォルダーが作成されるぜ。<br>
          これでローカルＰＣに［ローカル・リポジトリー］を作った。
        </div>
      </div>
      <div class="code-b">git add .</div><br>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 続いて、上記のコマンドを打鍵するぜ。<br>
          LF を CRLF に変更するぞ、とか改行の変更の警告も出ているがまあいいだろう。<br>
          これで、全てのファイルを［ステージ］に上げた。
        </div>
      </div>
      <div class="code-b">git commit -m "Initial commit"</div><br>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 続いて、上記のコマンドを打鍵するぜ。<br>
          ［ステージ］にあったファイルを［ローカル・リポジトリー］へコミットした。<br>
          コミットってのはファイルを置いたぐらいの感覚を持っていればいい。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__03--1140-tauri-o2o5o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1140-tauri-o2o5o0-mark.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 続いて、Git Hub で、初期ファイルは何もなしで<span class="code-w">file-list-on-tauri</span>リモート・リポジトリーを新規作成、<br>
          ［ローカル・リポジトリー］との紐付け方法の説明が書いてあるぜ。
        </div>
      </div>
      <div class="code-b">
        git remote add origin https://github.com/muzudho/file-list-on-tauri.git
        git branch -M main
        git push -u origin main
      </div><br>
      <a target="_blank" href="/img/journal/202506/202506__program__03--1146-tauri-o2o6o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1146-tauri-o2o6o0-mark.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 上記のコマンドを打鍵するぜ。［ローカル・リポジトリー］に［リモート・リポジトリー］の場所を教えて、<br>
          ［ブランチ］を選び、そこへ［ローカル・リポジトリー］のファイルをプッシュしたぜ。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__03--1150-tauri-o2o7o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1150-tauri-o2o7o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 これで、［リモート・リポジトリー］にソースコードを置けたぜ。
        </div>
      </div>
      <div class="code-b">
        pnpm install
      </div><br>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 続いて、上記のコマンドを打鍵。<br>
          📁<span class="code-b">node_modules</span> が自動生成されるぜ。
        </div>
      </div>
      <div class="code-b">
        pnpm tauri dev
      </div><br>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 続いて、上記のコマンドを打鍵。<br>
          数分待てだぜ。<br>
          開発モードでデスクトップアプリが起動するぜ。
        </div>
      </div>

      

    </div>


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
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1159-tauri-o1o0.png">
      </a><br/>
      <div class="code-b">pnpm create tauri-app</div>
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
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1205-tauri-o1o1o0.png">
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
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1212-tauri-o1o3o0.png">
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
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1216-tauri-o1o4o0.png">
      </a><br/>
      <div class="code-b">pnpm install</div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 （パワーシェルではなく）コマンドプロンプトで開いて、<br>
          上記のコマンドを打鍵。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--1220-tauri-o1o5o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1220-tauri-o1o5o0.png">
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
      <div class="code-b">pnpm tauri dev</div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          上記のコマンドを打鍵。<br>
          わたしのケースでは、 379 個の大量のプログラムのコンパイルが走るので数分かかる。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--1225-tauri-o1o6o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1225-tauri-o1o6o0.png">
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
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1229-tauri-o1o7o0.png">
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
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          じゃあ、テキストボックスと、［保存］ボタン、［開く］ボタンを置いてくれだぜ。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--1847-tauri-o1o8o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1847-tauri-o1o8o0-mark.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 📄 <span class="code-w">src/App.vue</span>ファイルの <span class="code-b">&lt;template&gt;</span>タグの中に、いわゆる HTMLタグを打ち込んでいけばいいはずだぜ。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--2004-tauri-o1o9o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2004-tauri-o1o9o0-mark.png">
      </a><br/>      
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 ひとまず、こんな感じか。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--2010-tauri-o1oA10o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2010-tauri-o1oA10o0.png">
      </a><br/>      
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 スタイルを除くと、ソースはたったの 24 行だぜ。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          ファイルパスを入れるテキストボックスと、ファイルを選択するダイアログボックスが出てくるボタンが欲しいぜ。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--2024-tauri-o1oA11o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2024-tauri-o1oA11o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 テキストボックスと、ボタンの見た目に違いが小さいのイケてないが、<br>
          スタイルの修正は後回しにしよう。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          ダイアログボックスを出すには、何か設定が要るんだよな。<br>
          調べるか。<br>
          📖 <a target="_blank" href="https://v2.tauri.app/plugin/dialog/">TAURI　＞　Dialog</a>
        </div>
      </div>
      <div class="code-b">pnpm tauri add dialog</div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--2116-tauri-o1oA12o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2116-tauri-o1oA12o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 なんか知らんけどエラー出た。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--2119-tauri-o1oA13o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2119-tauri-o1oA13o0-mark.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 えーと、つまり、<span class="code-b">"permissions": []</span>に<span class="code-b">"dialog:default"</span>を追加しようとしたら、<br>
          もう追加されてたからエラーってことかだぜ？<br>
          じゃあ<span class="code-b">"dialog:default"</span>を消しといたれ。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--2124-tauri-o1oA14o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2124-tauri-o1oA14o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 多分、通ったか？
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--2135-tauri-o1oA15o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2135-tauri-o1oA15o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 こんな感じで改造して……。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--2142-tauri-o1oA16o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2142-tauri-o1oA16o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 ファイル選択ダイアログボックスが出たぜ、オッケー。<br>
          アンドロイドやアイフォンでは、ファイル選択ダイアログボックスは出せないそうだぜ。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          ファイル選択ダイアログボックスで最初に開いているフォルダーは、<br>
          テキストボックスに書いてあったパスにしてくれだぜ。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👇 API は以下のページに書いてあるから……。<br>
          📖 <a target="_blank" href="https://v2.tauri.app/reference/javascript/dialog/#opendialogoptions">OpenDialogOptions</a><br>
          これ読んで直しておくかだぜ。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--2148-tauri-o1oA17o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2148-tauri-o1oA17o0-mark.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 １行追加するだけでいけた。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          あとは、ファイルの書込みと読込みねぇ。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👇 ファイルの読み書きの API は以下のページに書いてあるから……。<br>
          📖 <a target="_blank" href="https://v2.tauri.app/plugin/file-system/">File System</a><br>
          ページの上から順番に読んで実装しようぜ。
        </div>
      </div>
      <div class="code-b">pnpm tauri add fs</div><br>
      <a target="_blank" href="/img/journal/202506/202506__program__02--2212-tauri-o1oA18o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2212-tauri-o1oA18o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 テキストを読み込む方は上記の通りでいけた。
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--2309-tauri-o1oA19o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2309-tauri-o1oA19o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 テキストを書き込む方はイケてない。何かパーミッション設定でも足りてないのか？
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👇 説明書はあるけど。<br>
          📖 <a target="_blank" href="https://tauri.app/plugin/file-system/#examples">Examples</a>
        </div>
      </div>
      <a target="_blank" href="/img/journal/202506/202506__program__02--2342-tauri-o1oA20o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2342-tauri-o1oA20o0.png">
      </a><br/>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          👆 なんか分かってないけど、このように書いたらファイルへのテキスト書き込みはでけた。
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          やったな！　微速微進、遅々前進だぜ！
        </div>
      </div>
      <div class="talk">
        <div class="face-container">
          <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
          Git Hub のリポジトリーへのリンクも貼っておきましょう。<br>
          📖 <a target="_blank" href="https://github.com/muzudho/notepad-on-tauri">muzudho / notepad-on-tauri</a>
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
  background-color: hotpink;  /*ショッキングピンク*/
  /*background-color: pink;*/  /*ピンク*/
  /* background-color: #DDDDDD; */  /*白っぽいグレー*/
}

h1 {
  background-color: darkmagenta;
  color: khaki;
}

/* スマホ向けスタイル (画面幅が768px以下) */
@media screen and (max-width: 768px) {
  h2 {
    background-color: darkorchid;
    color: skyblue;
    margin-left: 20px;
    padding-left: 4px;
  }

  div.div1 {
    color: midnightblue;
    margin-left: 20px;
  }

  div.div2 {
    color: midnightblue;
    margin-left: 30px;
  }

  .div2 img {
    max-width: 300px;
    max-height: 300px;
    object-fit: contain; /* 画像が枠に収まるように調整 */
  }
}

/* パソコン向けスタイル (画面幅が769px以上) */
@media screen and (min-width: 769px) {
  h2 {
    background-color: darkorchid;
    color: skyblue;
    margin-left: 60px;
    padding-left: 4px;
  }

  div.div1 {
    color: midnightblue;
    margin-left: 60px;
  }

  div.div2 {
    color: midnightblue;
    margin-left: 90px;
  }
}

/** スクリーンショットの引用 */
img.scr-shot {
  margin-top: 8px;
  margin-bottom: 8px;
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
  background-color: #F8F8F8;
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
  background-color: #F8F8F8; /* 白い背景 */
  clip-path: polygon(0% 50%, 100% 0%, 100% 100%); /* 上頂点、下底の三角形 */
}

div.code-b {
  display:inline-block;
  background-color: #222222;
  color:#DDD;
  margin-top: 12px;
  margin-bottom: 12px;
  padding-left: 20px;
  padding-top: 16px;
  padding-right: 20px;
  padding-bottom: 20px;
  border: 1px solid;
  border-color: #888888 #DDDDDD #DDDDDD #888888;
  box-shadow: inset 1px 1px 0px #111111, inset -1px -1px 0px #DDDDDD;
}

span.code-b {
  background-color: #111111;
  color:#EEEEEE;
  margin-left: 6px;
  margin-right: 6px;
  padding-left: 8px;
  padding-right: 8px;
  box-shadow: inset 1px 1px 4px rgba(255,255,255,1.0);
}

div.code-w {
  background-color: #EEEEEE;
  color:#111111;
  border-radius: 8px;
  padding-left: 8px;
  padding-right: 8px;
  box-shadow: inset 2px 2px 5px rgba(0,0,0,.5);
}

span.code-w {
  background-color: #EEEEEE;
  color:#111111;
  border-radius: 8px;
  margin-left: 6px;
  margin-right: 6px;
  padding-left: 8px;
  padding-right: 8px;
  box-shadow: inset 2px 2px 5px rgba(0,0,0,.5);
}

</style>