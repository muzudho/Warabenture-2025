<template>
    <h3>[2025-06-02_Mon]</h3>
    <section class="sec-3">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--1159-tauri-o1o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--1159-tauri-o1o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--1205-tauri-o1o1o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--1205-tauri-o1o1o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--1209-tauri-o1o2o0.png">
        <img src="/img/journal/2025-06/202506__program__02--1209-tauri-o1o2o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--1212-tauri-o1o3o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--1212-tauri-o1o3o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--1216-tauri-o1o4o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--1216-tauri-o1o4o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--1220-tauri-o1o5o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--1220-tauri-o1o5o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--1225-tauri-o1o6o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--1225-tauri-o1o6o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--1229-tauri-o1o7o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--1229-tauri-o1o7o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--1847-tauri-o1o8o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--1847-tauri-o1o8o0-mark.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--2004-tauri-o1o9o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--2004-tauri-o1o9o0-mark.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--2010-tauri-o1oA10o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--2010-tauri-o1oA10o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--2024-tauri-o1oA11o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--2024-tauri-o1oA11o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--2116-tauri-o1oA12o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--2116-tauri-o1oA12o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--2119-tauri-o1oA13o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--2119-tauri-o1oA13o0-mark.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--2124-tauri-o1oA14o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--2124-tauri-o1oA14o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--2135-tauri-o1oA15o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--2135-tauri-o1oA15o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--2142-tauri-o1oA16o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--2142-tauri-o1oA16o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--2148-tauri-o1oA17o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--2148-tauri-o1oA17o0-mark.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--2212-tauri-o1oA18o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--2212-tauri-o1oA18o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--2309-tauri-o1oA19o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--2309-tauri-o1oA19o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__02--2342-tauri-o1oA20o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02--2342-tauri-o1oA20o0.png">
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
    </section>
</template>
