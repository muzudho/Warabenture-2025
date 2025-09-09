<template>

    <!-- デバイス互換機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <h3><router-link to="/blog/2025-06/15-sun">[2025-06-15_Sun]</router-link></h3>
    <section class="sec-3">


        <a target="_blank" href="/img/journal/2025-06/202506__tauri__15-0059-CsvCleaningOnTauri-o1o0.png">
            <img class="scr-shot" src="/img/journal/2025-06/202506__tauri__15-0059-CsvCleaningOnTauri-o1o0.png">
        </a><br/>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👆</span>前（2025-06-12_Thu）言ってたツールを作ったぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                おつ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                じゃあ次の課題だぜ。<br>
                埼玉県新座市内の丁目、番地の形を図形として切り出して表示するソフトを作ってくれだぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                Grok に尋ねてみると、日本の地図データを無料公開しているのは以下の２つで、<br>
                <ul>
                    <li><a target="_blank" href="https://www.geospatial.jp/">G空間情報センター</a></li>
                    <li><a target="_blank" href="https://www.gsi.go.jp/">国土地理院の電子国土基本図</a></li>
                </ul>
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                ［国土地理院］の方は丁目の精度までだから、残るのは［G空間情報センター］の一択だぜ。<br>
                ［G空間情報センター］の地図データは、精度や形式が揃ったものではなく、バラバラだそうだぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                この <span class="code-w">.geojson</span> ってファイルは、どんなアプリで開けるの？<br>
                <a target="_blank" href="https://www.geospatial.jp/ckan/dataset/aigid-moj-11230/resource/00e54419-fb2a-4ea1-aac1-00c8675d9787">11230_新座市_公共座標9系_筆R_2022.geojson</a>
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                Grok がいくつか知ってたが、とりあえず <a target="_blank" href="https://qgis.org/">QGIS</a> を使ってみるかだぜ。
        </talk-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__screenshot__15-1901-QGIS-o1o0.png">
            <img class="scr-shot" src="/img/journal/2025-06/202506__screenshot__15-1901-QGIS-o1o0.png">
        </a><br/>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👆</span>あれっ、思ったような地図と違う……。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                不動産屋が登記した土地しか入ってないんじゃないの？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                使えねー。じゃあ［国土地理院］の方を見てみるか……。
        </talk-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__screenshot__15-1928-国土地理院-o1o0.png">
            <img class="scr-shot" src="/img/journal/2025-06/202506__screenshot__15-1928-国土地理院-o1o0.png">
        </a><br/>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👆</span>この地図をどうやって <span class="code-w">.geojson</span> 形式に変換するんだぜ？
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                とりあえず左のサイドメニューの保存ボタンを押してみろだぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="code-w">.json</span> 形式では保存できるが、<span class="code-w">.geojson</span> 形式ではなかったぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                じゃあ地図表示は諦めて、データ・クリーニングの方に重点的に取り掛かるかだぜ。
        </talk-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__screenshot__15-2046-埼玉県_市区町村別_世帯数-o1o0.png">
            <img class="scr-shot" src="/img/journal/2025-06/202506__screenshot__15-2046-埼玉県_市区町村別_世帯数-o1o0.png">
        </a><br/>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👆</span>左の表は令和7年5月1日現在の［埼玉県］の<a target="_blank" href="https://www.pref.saitama.lg.jp/a0206/03suikei/index.html">市区町村別世帯数・人口</a>だぜ。<br>
                右の表はお父んが［国勢調査］から持ってきて編集している表だぜ。<br>
                <br>
                このように、カテゴリー分けや、個々の項目名が揃っていないが、同じものを表しているはずの２つの表を、<br>
                行を揃えてデータを見せてくれるツールを作ってくれだぜ。
        </talk-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__screenshot__15-2109-２表のJoin-o1o0.png">
            <img class="scr-shot" src="/img/journal/2025-06/202506__screenshot__15-2109-２表のJoin-o1o0.png">
        </a><br/>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👆</span>じゃあとりあえず、左表から１列取って［名前2］、右表から１列取って［名前1］として、市区町村名を以下の３つのグループに分けるかだぜ。<br>
                <ul>
                    <li>両表に含まれる市区町村名</li>
                    <li>左表にだけ含まれる市区町村名</li>
                    <li>右表にだけ含まれる市区町村名</li>
                </ul>
        </talk-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__screenshot__15-2113-２表のJoin2-o1o0.png">
            <img class="scr-shot" src="/img/journal/2025-06/202506__screenshot__15-2113-２表のJoin2-o1o0.png">
        </a><br/>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👆</span>２列を独立して昇順ソートするかだぜ。<br>
                浦和の浦がひらがなより文字コードが小さいのが意味わからんが……。
        </talk-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__screenshot__15-2121-２表のJoin3-o1o0.png">
            <img class="scr-shot" src="/img/journal/2025-06/202506__screenshot__15-2121-２表のJoin3-o1o0.png">
        </a><br/>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👆</span>手で振り分けたぜ。
        </talk-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__screenshot__15-2128-２表のJoin4-o1o0.png">
            <img class="scr-shot" src="/img/journal/2025-06/202506__screenshot__15-2128-２表のJoin4-o1o0.png">
        </a><br/>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👆</span>手で名前の表記揺れを修正して２行を１行にまとめたりして、<br>
                そして、［二表仮番］という名前で列を作って、連番を振るぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                変更前の列名は残しておかないと、あとでどの行だったのかわからなくなるんじゃないの？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                そうか、古い列名は残しておいてくれだぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                じゃあ、今回手で行った操作を自動化するアプリを作ってくれだぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                アプリケーションの名前は <span class="code-w">column-names-sync-on-tauri</span> とかでいいかな。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                あれっ？ Cドライブの残り容量が 5 GB しかない！？
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                Tauri は debug フォルダーがバカでかいそうだぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                Grok に対策を聞いてみるか。<br>
                以下のコードをさくっと実行。
        </talk-balloon>


        <div class="code-b">
<pre>
cd src-tauri
cargo clean
</pre>
        </div>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                リリースもデバッグもどちらも含めて 14.3 GiB もファイルが消えた……。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                Tauri 恐ろしいな……。
        </talk-balloon>


    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    import CompatibleDevice from '@/components/CompatibleDevice.vue'
    import TalkBalloon from '@/components/TalkBalloon.vue';


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //

    import oton1Src from "@/assets/img/202101__character__24-o2o2o3o0.png";
    const oton1Alt = "きふわらべのお父ん１";
    const oton1Name = "きふわらべのお父ん";
    import oton2Src from "@/assets/img/talk/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png";
    const oton2Alt = "きふわらべのお父ん２";
    const oton2Name = "きふわらべのお父ん";
    import kifuwarabe1Src from "@/assets/img/202101__character__28-kifuwarabe-futsu-o2o0.png";
    const kifuwarabe1Alt = "きふわらべ１";
    const kifuwarabe1Name = "きふわらべ";
    import kifuwarabe2Src from "@/assets/img/talk/202506__character__01-2013-kifuwarabe-o1o1o0.png";
    const kifuwarabe2Alt = "きふわらべ２";
    const kifuwarabe2Name = "きふわらべ";
    import hiyoko1Src from "@/assets/img/202108__character__12-ohkina-hiyoko-futsu2-o2o0.png";
    const hiyoko1Alt = "ひよこ１";
    const hiyoko1Name = "ひよこ";
    import hiyoko2Src from "@/assets/img/talk/202506__character__01-2025-hiyoko-o1o1o0.png";
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
