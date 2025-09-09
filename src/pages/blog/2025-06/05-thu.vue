<template>

    <!-- デバイス互換機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <h3><router-link to="/blog/2025-06/05-thu">[2025-06-05_Thu]</router-link></h3>
    <section class="sec-3">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                今日は、家の掃除をしたいぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
                じゃあ、風呂桶を掃除してくれだぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">✅</span> 風呂と洗面所、便器を拭き掃除したぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            じゃあ、お父んはその風呂に入れだぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            <span class="font-x2">✅</span>風呂に入ってサッパリしたぜ。<br>
            <span class="font-x2">❌</span>お湯を入れていたはずなのに、ぬるま湯になっていたが……
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            ガス代の支払いが滞っているのかしらねえ？
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            じゃあ次は、お父んは昼飯を食べろだぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            <span class="font-x2">✅</span> 昼飯を食べたぜ。<br>
            １時間ぐらいかかった。わりと時間かかるな。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            生命の維持に必要な活動ですからね。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            じゃあ次は、コーヒーを飲んで、歯を磨けだぜ。歯間ブラシも使えよ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            <span class="font-x2">✅</span> コーヒーを飲んで歯を磨いたぜ。歯間ブラシも使った。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            じゃあ次は、フィットネスジムに行けだぜ。行きしなには漫画本をBook-Offに売ってきてくれだぜ。<br>
            帰りには明日の飯２食分を買ってこいだぜ。<br>
            余裕があればズボンの裾上げのための裁縫セットを買ってこいだぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            ズボンの裾上げのための裁縫セットってどこに売ってんの？
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            セブンイレブンや、ダイソーなどに売ってるだろ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            分かったぜ。行ってくるぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            帰宅なう。<br>
            <span class="font-x2">✅</span>フィットネスジムに行ってきたぜ。<br>
            <span class="font-x2">✅</span>行きしなに漫画本を売ってきたぜ。３０冊ぐらいで 2000 円ぐらいになったぜ。<br>
            <span class="font-x2">🤔</span>しかし、何巻まで買ったかのメモ書きをどこに保管しておくかが問題だぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            <span class="font-x2">✅</span>帰り際にはソーイングセットを買ってきたぜ。<br>
            ユザワヤでスヌーピーの絵柄が入ったやつだぜ、６，０００円。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            ６，０００円は高いなあ。元を取るために何本のズボンの裾を上げるつもりだぜ？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            ３本ぐらい……。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            １本２，０００円の裾上げねえ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            夜は集中力が落ちているんで、ズボンの裾上げは明日の朝にしろだぜ。<br>
            ひとまず、カフェインレス・ブラックコーヒーでも飲んで休めだぜ。
        </talk-balloon>

    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TalkBalloon from '../../../components/TalkBalloon.vue';

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
