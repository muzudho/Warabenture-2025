<template>

    <!-- デバイス互換機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <h3>[2025-06-02_Mon]</h3>
    <section class="sec-3">
        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            フロントエンドに Vue、バックエンドに Tauri を使って、デスクトップアプリ制作を練習してみようぜ？<br>
        </talker-balloon>

        <talker-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            さっそく、このブログを有効的に使い始めたか。
        </talker-balloon>

        <talker-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            これはブログじゃないのよ。<br>
            タグの直打ちで、文章載せるだけにしてはすごい労力……。
        </talker-balloon>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            プログラミング練習の最初の課題でよくあるのはメモ帳だな。<br>
            テキストボックスに文章を入力して、［保存］ボタンを押したらファイルに保存できて、<br>
            ［読込］ボタンを押したらテキストファイルを読込むんだぜ。
        </talker-balloon>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            Tauri の公式ホームページはここにあるぜ。<br>
            📖 <a target="_blank" href="https://v2.tauri.app/">Tauri 2.0</a><br>
        </talker-balloon>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            Tauri の Get Started を読んでいけだぜ。<br>
            インストールの説明は省くからな。
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-1159-tauri-o1o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-1159-tauri-o1o0.png">
        </a><br/>

        <div class="code-b">pnpm create tauri-app</div>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 こんな感じでコマンドを打鍵すればいいはず。
        </talker-balloon>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 色々尋ねられるので、こんな感じで進めたぜ。
        </talker-balloon>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 Git Hub と連携しておいた。フォルダーの中身はこうなった。
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-1212-tauri-o1o3o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-1212-tauri-o1o3o0.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 VSCode で開く。 下側のステータスバーを見ると cargo がディレクトリーをチェックしてるので<br>
            わたしの PC はCPU処理がビジーだとフリーズすることがあるので、終わるまで待って……。<br>
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-1216-tauri-o1o4o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-1216-tauri-o1o4o0.png">
        </a><br/>

        <div class="code-b">pnpm install</div>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 （パワーシェルではなく）コマンドプロンプトで開いて、<br>
            上記のコマンドを打鍵。
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-1220-tauri-o1o5o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-1220-tauri-o1o5o0.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 📁［node_modules］というバカでかいフォルダーが自動生成される。  
        </talker-balloon>

        <div class="code-b">pnpm tauri dev</div>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            上記のコマンドを打鍵。<br>
            わたしのケースでは、 379 個の大量のプログラムのコンパイルが走るので数分かかる。
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-1225-tauri-o1o6o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-1225-tauri-o1o6o0.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 途中で［http://localhost:1420/］という URL が出てくるが、気にしないでほしい。<br>
            ウェブブラウザーでは、フロントエンドの画面表示のテストはできるが、バックエンドのテストはできない。<br>
            動作確認に使うには不完全。
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-1229-tauri-o1o7o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-1229-tauri-o1o7o0.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 コンパイルが終わると、デスクトップアプリが出てくる。<br>
            動作確認はこれに対して行う。
        </talker-balloon>

        <talker-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            じゃあ、テキストボックスと、［保存］ボタン、［開く］ボタンを置いてくれだぜ。
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-1847-tauri-o1o8o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-1847-tauri-o1o8o0-mark.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 📄 <span class="code-w">src/App.vue</span>ファイルの <span class="code-b">&lt;template&gt;</span>タグの中に、いわゆる HTMLタグを打ち込んでいけばいいはずだぜ。
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-2004-tauri-o1o9o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-2004-tauri-o1o9o0-mark.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 ひとまず、こんな感じか。
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-2010-tauri-o1oA10o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-2010-tauri-o1oA10o0.png">
        </a><br/>      

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 スタイルを除くと、ソースはたったの 24 行だぜ。
        </talker-balloon>

        <talker-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            ファイルパスを入れるテキストボックスと、ファイルを選択するダイアログボックスが出てくるボタンが欲しいぜ。
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-2024-tauri-o1oA11o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-2024-tauri-o1oA11o0.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 テキストボックスと、ボタンの見た目に違いが小さいのイケてないが、<br>
            スタイルの修正は後回しにしよう。
        </talker-balloon>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            ダイアログボックスを出すには、何か設定が要るんだよな。<br>
            調べるか。<br>
            📖 <a target="_blank" href="https://v2.tauri.app/plugin/dialog/">TAURI　＞　Dialog</a>
        </talker-balloon>

        <div class="code-b">pnpm tauri add dialog</div>
        <a target="_blank" href="/img/journal/2025-06/202506__program__02-2116-tauri-o1oA12o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-2116-tauri-o1oA12o0.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 なんか知らんけどエラー出た。
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-2119-tauri-o1oA13o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-2119-tauri-o1oA13o0-mark.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 えーと、つまり、<span class="code-b">"permissions": []</span>に<span class="code-b">"dialog:default"</span>を追加しようとしたら、<br>
            もう追加されてたからエラーってことかだぜ？<br>
            じゃあ<span class="code-b">"dialog:default"</span>を消しといたれ。
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-2124-tauri-o1oA14o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-2124-tauri-o1oA14o0.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 多分、通ったか？
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-2135-tauri-o1oA15o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-2135-tauri-o1oA15o0.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 こんな感じで改造して……。
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-2142-tauri-o1oA16o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-2142-tauri-o1oA16o0.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 ファイル選択ダイアログボックスが出たぜ、オッケー。<br>
            アンドロイドやアイフォンでは、ファイル選択ダイアログボックスは出せないそうだぜ。
        </talker-balloon>

        <talker-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            ファイル選択ダイアログボックスで最初に開いているフォルダーは、<br>
            テキストボックスに書いてあったパスにしてくれだぜ。
        </talker-balloon>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👇 API は以下のページに書いてあるから……。<br>
            📖 <a target="_blank" href="https://v2.tauri.app/reference/javascript/dialog/#opendialogoptions">OpenDialogOptions</a><br>
            これ読んで直しておくかだぜ。
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-2148-tauri-o1oA17o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-2148-tauri-o1oA17o0-mark.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 １行追加するだけでいけた。
        </talker-balloon>

        <talker-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            あとは、ファイルの書込みと読込みねぇ。
        </talker-balloon>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👇 ファイルの読み書きの API は以下のページに書いてあるから……。<br>
            📖 <a target="_blank" href="https://v2.tauri.app/plugin/file-system/">File System</a><br>
            ページの上から順番に読んで実装しようぜ。
        </talker-balloon>

        <div class="code-b">pnpm tauri add fs</div><br>
        <a target="_blank" href="/img/journal/2025-06/202506__program__02-2212-tauri-o1oA18o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-2212-tauri-o1oA18o0.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 テキストを読み込む方は上記の通りでいけた。
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-2309-tauri-o1oA19o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-2309-tauri-o1oA19o0.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 テキストを書き込む方はイケてない。何かパーミッション設定でも足りてないのか？
        </talker-balloon>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👇 説明書はあるけど。<br>
            📖 <a target="_blank" href="https://tauri.app/plugin/file-system/#examples">Examples</a>
        </talker-balloon>

        <a target="_blank" href="/img/journal/2025-06/202506__program__02-2342-tauri-o1oA20o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__02-2342-tauri-o1oA20o0.png">
        </a><br/>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 なんか分かってないけど、このように書いたらファイルへのテキスト書き込みはでけた。
        </talker-balloon>

        <talker-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            やったな！　微速微進、遅々前進だぜ！
        </talker-balloon>

        <talker-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                Git Hub のリポジトリーへのリンクも貼っておきましょう。<br>
                📖 <a target="_blank" href="https://github.com/muzudho/notepad-on-tauri">muzudho / notepad-on-tauri</a>
        </talker-balloon>

    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TalkerBalloon from '../../../components/TalkerBalloon.vue';

    // ++++++++++++++++++++++++++++++++++
    // + コンポーネント　＞　互換性対応 +
    // ++++++++++++++++++++++++++++++++++

    import CompatibleDevice from '../../../components/CompatibleDevice.vue'


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //

    import oton1Src from "@/assets/img/202101__character__24-o2o2o3o0.png";
    const oton1Alt = "きふわらべのお父ん１";
    const oton1Name = "きふわらべのお父ん";
    import oton2Src from "@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png";
    const oton2Alt = "きふわらべのお父ん２";
    const oton2Name = "きふわらべのお父ん";
    import kifuwarabe1Src from "@/assets/img/202101__character__28-kifuwarabe-futsu-o2o0.png";
    const kifuwarabe1Alt = "きふわらべ１";
    const kifuwarabe1Name = "きふわらべ";
    import kifuwarabe2Src from "@/assets/img/202506__character__01-2013-kifuwarabe-o1o1o0.png";
    const kifuwarabe2Alt = "きふわらべ２";
    const kifuwarabe2Name = "きふわらべ";
    import hiyoko1Src from "@/assets/img/202108__character__12-ohkina-hiyoko-futsu2-o2o0.png";
    const hiyoko1Alt = "ひよこ１";
    const hiyoko1Name = "ひよこ";
    import hiyoko2Src from "@/assets/img/202506__character__01-2025-hiyoko-o1o1o0.png";
    const hiyoko2Alt = "ひよこ２";
    const hiyoko2Name = "ひよこ";


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

</script>
