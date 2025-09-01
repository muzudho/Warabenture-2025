<template>

    <!-- デバイス互換機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <h3>[2025-06-12_Thu]</h3>
    <section class="sec-3">


        <talker-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                データをクリーニングするツールが欲しいぜ。
        </talker-balloon>


        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                全くだぜ。
            </div>
        </div>


        <talker-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                文字列を入力し、［埼玉県新座市］という文字列があれば［埼玉県,新座市］と分割するような、<br>
                ４７都道府県に対応した変換アプリを作ってくれだぜ。
        </talker-balloon>


        <a target="_blank" href="/img/journal/2025-06/202506__tauri__12-2156-csvCleaning-o1o0.png">
            <img class="scr-shot" src="/img/journal/2025-06/202506__tauri__12-2156-csvCleaning-o1o0.png">
        </a><br/>


        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span> じゃあ 📄<span class="code-w">file-list-on-tauri</span>リポジトリーから自動生成ファイルを削除して、それ以外をコピーした、<br>
                📄<span class="code-w">csv-cleaning-on-tauri</span>リポジトリーを作るぜ。
            </div>
        </div>


        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="code-b">git init</span>コマンドを使った操作は、[2025-06-03_Tue] の日記を読んでくれだぜ。
            </div>
        </div>


        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                今日は途中で終了。
            </div>
        </div>

        
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
