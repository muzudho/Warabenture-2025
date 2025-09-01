<template>

    <!-- デバイス互換機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <h3>[2025-08-11_Mon]</h3>
    <section class="sec-3">

        <a target="_blank" href="/img/journal/2025-08/202508__warabenture__11-2209-pieChart-o1o0.png">
            <img class="scr-shot" src="/img/journal/2025-08/202508__warabenture__11-2209-pieChart-o1o0.png">
        </a><br/>

        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>グロックにコードの書き方を教えてもらって、このウェブサイトのホームページ（起点となるページ）に円グラフを置いてみたぜ。
            </div>
        </div>

        <talker-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                第１レベルの見出しの色を変えたんだな。<br/>
                見出しの頭の # も、文字から画像に変更したんだな。<br/>
                あと、うざいぐらいヘッダーのインデントがネストしてるな。
        </talker-balloon>

        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                美的センスが狂うわね。
            </div>
        </div>

        <talker-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                このデザインはグロックではなくて、お父んがやったんだな。
        </talker-balloon>

        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                人間の感性か、あるいは日本人の感性か、こういうネストした見出しに表されるような現在位置情報って、<br/>
                頭の片隅に追いやって見ないようにした方が美しいと感じるのかもしれないな。
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
