<template>
    <h3>[2025-06-03_Tue]</h3>
    <section class="sec-3">
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
        <a target="_blank" href="/img/journal/2025-06//202506__program__03--1049-tauri-o2o1o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03--1049-tauri-o2o1o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__03--1056-tauri-o2o2o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03--1056-tauri-o2o2o0-mark.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__03--1109-tauri-o2o3o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03--1109-tauri-o2o3o0-mark.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__03--1127-tauri-o2o4o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03--1127-tauri-o2o4o0-mark.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__03--1140-tauri-o2o5o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03--1140-tauri-o2o5o0-mark.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__03--1146-tauri-o2o6o0-mark.png">
            <img class="scr-shot" src="/img/journal/2025-06/202506__program__03--1146-tauri-o2o6o0-mark.png">
        </a><br/>
        <div class="code-b">
            git remote add origin https://github.com/muzudho/file-list-on-tauri.git<br>
            git branch -M main<br>
            git push -u origin main<br>
        </div><br>
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__03--1150-tauri-o2o7o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03--1150-tauri-o2o7o0.png">
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__03--1215-tauri-o2o8o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03--1215-tauri-o2o8o0-mark.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 続いて、📄<span class="code-w">src-tauri/tauri.conf.json</span>ファイルの内容を編集するぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            また、 📄<span class="code-w">src/App.vue</span>ファイルから［Save］機能を削除し、<br>
            ［Load］ボタンは［Refresh］とラベルを変えておくぜ。
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
        <a target="_blank" href="/img/journal/2025-06/202506__program__03--1221-tauri-o2o9o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03--1221-tauri-o2o9o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 こんな感じで、デスクトップアプリのベースをコピーする方法は確立できたな。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            じゃあ、とりあえず、そのテキストボックスに<br>
            指定のディレクトリーの直下にあるファイル名を一覧してくれだぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ファイル名を調べるのとか、フロントの機能じゃないだろうから、<br>
            バックエンドの Tauri フレームワークを使うんだろな、なら言語は Rust か？
        </div>
        </div>
        <a target="_blank" href="/img/journal/2025-06/202506__program__03--1922-tauri-o2oA10o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03--1922-tauri-o2oA10o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 とりあえず、テンプレートを上記のように変更。<br>
            Rust で定義している、ファイル一覧を読取る<span class="code-b">get_file_names</span>関数を TpyeScript 側から呼び出しているぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/2025-06/202506__program__03--1928-tauri-o2oA11o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03--1928-tauri-o2oA11o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 Rust 言語の方に、ファイル名一覧を読取る関数を追加。<br>
            <span class="code-b">invoke_handler</span>ってあたりに関数の名前を追加するのを忘れてはいけないぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/2025-06/202506__program__03--1937-tauri-o2oA12o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03--1937-tauri-o2oA12o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 ファイル名の一覧をカンマ区切りで取れたぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            リストボックスに入れてくれだぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            キャパシティ（作業に使える時間）をもう 4 は消費してるわよ。<br>
            残りは 2 よ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            なんでそんなに速く消費してしまったんだぜ？
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            まあ、コード書いたが動かないとか、動かない理由の調査とか、思ったよりしてるしな。
        </div>
        </div>
        <div class="code-b">
        &lt;script setup lang="ts"&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;const itemsVM = ref(["apple", "banana", "cherry"]);<br>
        &lt;/script&gt;<br>
        <br>
        &lt;template&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;select size="5"&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option v-for="item in itemsVM" :key="item" :value="item"&gt;&lbrace;&lbrace; item &rbrace;&rbrace;&lt;/option&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/select&gt;<br>
        &lt;/template&gt;<br>
        </div><br>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 リストボックスに項目を並べる考え方は、上記のコードで示したぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/2025-06/202506__program__03--2035-tauri-o2oA13o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03--2035-tauri-o2oA13o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 じゃあ、ソースコードは上記な感じで更新。
        </div>
        </div>
        <a target="_blank" href="/img/journal/2025-06/202506__program__03--2049-tauri-o2oA14o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03--2049-tauri-o2oA14o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 よし、リストボックスにファイル名が入ったぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            やったな！　これで課題No.2 もクリアーだぜ！
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            かかった時間は 5 ってところねえ。<br>
            見積りでは 2 ぐらいだったから、調査に 1.5 倍は取られるってとこねえ。
        </div>
        </div>
    </section>
</template>
