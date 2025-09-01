<template>

    <!-- デバイス互換機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <h3>[2025-06-03_Tue]</h3>
    <section class="sec-3">


        <talker-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            昨日と話しは変わって、課題No.2だぜ。<br>
            ディレクトリーを指定したら、その直下のファイル名を一覧してくれるアプリを作ってくれだぜ。
        </talker-balloon>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            じゃあ、ファイルパスを入れるテキストボックスと、ファイル選択ダイアログボックスを開くボタン、<br>
            ［ファイルの一覧］と、その表示を更新する［表示］ボタンがあればいいかだぜ。
        </talker-balloon>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            今日のキャパシティ（作業に使える時間）は 6 とするぜ。
        </talker-balloon>


        <talker-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            昨日作ったアプリから［Save］機能を削除して、テキストボックスをリストボックスへ付け替え、<br>
            あとは、ファイル名を一覧する機能が作れるかどうかの調査と実装だから、<br>
            調査を重めに見て、エフォート（作業にかかる時間見積）は 2 ってところねえ。
        </talker-balloon>


        <a target="_blank" href="/img/journal/2025-06//202506__program__03-1049-tauri-o2o1o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03-1049-tauri-o2o1o0.png">
        </a><br/>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 昨日作ったプログラムから、<span class="code-b">.git</span>と<span class="code-b">node_modules</span>以外のフォルダーとファイルをコピーするぜ。
        </talker-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__program__03-1056-tauri-o2o2o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03-1056-tauri-o2o2o0-mark.png">
        </a><br/>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 📁<span class="code-b">file-list-on-tauri</span>を作って、中身を貼り付け。
        </talker-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__program__03-1109-tauri-o2o3o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03-1109-tauri-o2o3o0-mark.png">
        </a><br/>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 そのフォルダーを VSCode で開くぜ。
        </talker-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__program__03-1127-tauri-o2o4o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03-1127-tauri-o2o4o0-mark.png">
        </a><br/>


        <div class="code-b">git init</div><br>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 （パワーシェルではなくて）コマンドプロンプトを開いて、上記のコマンドを打鍵するぜ。<br>
            これにより、カレントディレクトリーに 📁<span class="code-b">.git</span>っていう隠しフォルダーが作成されるぜ。<br>
            これでローカルＰＣに［ローカル・リポジトリー］を作った。
        </talker-balloon>


        <div class="code-b">git add .</div><br>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 続いて、上記のコマンドを打鍵するぜ。<br>
            LF を CRLF に変更するぞ、とか改行の変更の警告も出ているがまあいいだろう。<br>
            これで、全てのファイルを［ステージ］に上げた。
        </talker-balloon>


        <div class="code-b">git commit -m "Initial commit"</div><br>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 続いて、上記のコマンドを打鍵するぜ。<br>
            ［ステージ］にあったファイルを［ローカル・リポジトリー］へコミットした。<br>
            コミットってのはファイルを置いたぐらいの感覚を持っていればいい。
        </talker-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__program__03-1140-tauri-o2o5o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03-1140-tauri-o2o5o0-mark.png">
        </a><br/>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 続いて、Git Hub で、初期ファイルは何もなしで<span class="code-w">file-list-on-tauri</span>リモート・リポジトリーを新規作成、<br>
            ［ローカル・リポジトリー］との紐付け方法の説明が書いてあるぜ。
        </talker-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__program__03-1146-tauri-o2o6o0-mark.png">
            <img class="scr-shot" src="/img/journal/2025-06/202506__program__03-1146-tauri-o2o6o0-mark.png">
        </a><br/>


        <div class="code-b">
            git remote add origin https://github.com/muzudho/file-list-on-tauri.git<br>
            git branch -M main<br>
            git push -u origin main<br>
        </div><br>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👆 上記のコマンドを打鍵するぜ。［ローカル・リポジトリー］に［リモート・リポジトリー］の場所を教えて、<br>
                ［ブランチ］を選び、そこへ［ローカル・リポジトリー］のファイルをプッシュしたぜ。
        </talker-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__program__03-1150-tauri-o2o7o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03-1150-tauri-o2o7o0.png">
        </a><br/>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 これで、［リモート・リポジトリー］にソースコードを置けたぜ。
        </talker-balloon>


        <div class="code-b">
        pnpm install
        </div><br>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 続いて、上記のコマンドを打鍵。<br>
            📁<span class="code-b">node_modules</span> が自動生成されるぜ。
        </talker-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__program__03-1215-tauri-o2o8o0-mark.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03-1215-tauri-o2o8o0-mark.png">
        </a><br/>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 続いて、📄<span class="code-w">src-tauri/tauri.conf.json</span>ファイルの内容を編集するぜ。
        </talker-balloon>

        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            また、 📄<span class="code-w">src/App.vue</span>ファイルから［Save］機能を削除し、<br>
            ［Load］ボタンは［Refresh］とラベルを変えておくぜ。
        </talker-balloon>


        <div class="code-b">
        pnpm tauri dev
        </div><br>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 続いて、上記のコマンドを打鍵。<br>
            数分待てだぜ。<br>
            開発モードでデスクトップアプリが起動するぜ。
        </talker-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__program__03-1221-tauri-o2o9o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03-1221-tauri-o2o9o0.png">
        </a><br/>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 こんな感じで、デスクトップアプリのベースをコピーする方法は確立できたな。
        </talker-balloon>


        <talker-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            じゃあ、とりあえず、そのテキストボックスに<br>
            指定のディレクトリーの直下にあるファイル名を一覧してくれだぜ。
        </talker-balloon>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            ファイル名を調べるのとか、フロントの機能じゃないだろうから、<br>
            バックエンドの Tauri フレームワークを使うんだろな、なら言語は Rust か？
        </talker-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__program__03-1922-tauri-o2oA10o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03-1922-tauri-o2oA10o0.png">
        </a><br/>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 とりあえず、テンプレートを上記のように変更。<br>
            Rust で定義している、ファイル一覧を読取る<span class="code-b">get_file_names</span>関数を TpyeScript 側から呼び出しているぜ。
        </talker-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__program__03-1928-tauri-o2oA11o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03-1928-tauri-o2oA11o0.png">
        </a><br/>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 Rust 言語の方に、ファイル名一覧を読取る関数を追加。<br>
            <span class="code-b">invoke_handler</span>ってあたりに関数の名前を追加するのを忘れてはいけないぜ。
        </talker-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__program__03-1937-tauri-o2oA12o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03-1937-tauri-o2oA12o0.png">
        </a><br/>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 ファイル名の一覧をカンマ区切りで取れたぜ。
        </talker-balloon>


        <talker-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            リストボックスに入れてくれだぜ。
        </talker-balloon>


        <talker-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            キャパシティ（作業に使える時間）をもう 4 は消費してるわよ。<br>
            残りは 2 よ。
        </talker-balloon>


        <talker-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            なんでそんなに速く消費してしまったんだぜ？
        </talker-balloon>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            まあ、コード書いたが動かないとか、動かない理由の調査とか、思ったよりしてるしな。
        </talker-balloon>


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


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 リストボックスに項目を並べる考え方は、上記のコードで示したぜ。
        </talker-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__program__03-2035-tauri-o2oA13o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03-2035-tauri-o2oA13o0.png">
        </a><br/>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 じゃあ、ソースコードは上記な感じで更新。
        </talker-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__program__03-2049-tauri-o2oA14o0.png">
        <img class="scr-shot" src="/img/journal/2025-06/202506__program__03-2049-tauri-o2oA14o0.png">
        </a><br/>


        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 よし、リストボックスにファイル名が入ったぜ。
        </talker-balloon>


        <talker-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            やったな！　これで課題No.2 もクリアーだぜ！
        </talker-balloon>


        <talker-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            かかった時間は 5 ってところねえ。<br>
            見積りでは 2 ぐらいだったから、調査に 1.5 倍は取られるってとこねえ。
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
