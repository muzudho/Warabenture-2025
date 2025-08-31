<template>

    <!-- 実行環境互換 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <h3>[2025-06-01_Sun]</h3>
    <section class="sec-3">
        <talker-balloon
            :src="oton1Src"
            :alt="oton1Alt"
            :name="oton1Name"
            :device="compatibleDevice1Ref?.device">
            文字は出せるかだぜ？
        </talker-balloon>
        <talker-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            出せてるぜ。
        </talker-balloon>
        <talker-balloon
            :src="hiyoko1Src"
            :alt="hiyoko1Alt"
            :name="hiyoko1Name"
            :device="compatibleDevice1Ref?.device">
            なんか画像がボヤけてない？<br/>サイズもマチマチだし。<br/>グレードダウンしてない？
        </talker-balloon>
        <talker-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            まあ、そこはゆくゆくは修正だな。
        </talker-balloon>
        <talker-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            さっそくイラストを新調したか、<br/>
            グレードダウンしてないかだぜ？
        </talker-balloon>
        <talker-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            Grok に描かせようと、Super Grok にプラン変更しようとしたら、<br/>
            クレジットカードを拒否されたので、あんたのお父んの手描きになったのよ。<br/>
            何でクレジットカードが拒否されたのか知らんけど。
        </talker-balloon>
        <talker-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            このトップページは近況を書く日記かだぜ？<br/>
            メインのコンテンツは何かないのかだぜ？
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
