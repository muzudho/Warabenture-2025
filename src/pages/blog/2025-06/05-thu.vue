<template>

    <!-- デバイス互換機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <h3>[2025-06-05_Thu]</h3>
    <section class="sec-3">


        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                今日は、家の掃除をしたいぜ。
            </div>
        </div>


        <talker-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
                じゃあ、風呂桶を掃除してくれだぜ。
        </talker-balloon>


        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">✅</span> 風呂と洗面所、便器を拭き掃除したぜ。
            </div>
        </div>


        <talker-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            じゃあ、お父んはその風呂に入れだぜ。
        </talker-balloon>


        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            <span class="font-x2">✅</span>風呂に入ってサッパリしたぜ。<br>
            <span class="font-x2">❌</span>お湯を入れていたはずなのに、ぬるま湯になっていたが……
        </div>
        </div>


        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01-2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ガス代の支払いが滞っているのかしらねえ？
        </div>
        </div>


        <talker-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            じゃあ次は、お父んは昼飯を食べろだぜ。
        </talker-balloon>


        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            <span class="font-x2">✅</span> 昼飯を食べたぜ。<br>
            １時間ぐらいかかった。わりと時間かかるな。
        </div>
        </div>


        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01-2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            生命の維持に必要な活動ですからね。
        </div>
        </div>


        <talker-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            じゃあ次は、コーヒーを飲んで、歯を磨けだぜ。歯間ブラシも使えよ。
        </talker-balloon>


        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            <span class="font-x2">✅</span> コーヒーを飲んで歯を磨いたぜ。歯間ブラシも使った。
        </div>
        </div>


        <talker-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            じゃあ次は、フィットネスジムに行けだぜ。行きしなには漫画本をBook-Offに売ってきてくれだぜ。<br>
            帰りには明日の飯２食分を買ってこいだぜ。<br>
            余裕があればズボンの裾上げのための裁縫セットを買ってこいだぜ。
        </talker-balloon>


        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ズボンの裾上げのための裁縫セットってどこに売ってんの？
        </div>
        </div>


        <talker-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            セブンイレブンや、ダイソーなどに売ってるだろ。
        </talker-balloon>


        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            分かったぜ。行ってくるぜ。
        </div>
        </div>


        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            帰宅なう。<br>
            <span class="font-x2">✅</span>フィットネスジムに行ってきたぜ。<br>
            <span class="font-x2">✅</span>行きしなに漫画本を売ってきたぜ。３０冊ぐらいで 2000 円ぐらいになったぜ。<br>
            <span class="font-x2">🤔</span>しかし、何巻まで買ったかのメモ書きをどこに保管しておくかが問題だぜ。
        </div>
        </div>


        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            <span class="font-x2">✅</span>帰り際にはソーイングセットを買ってきたぜ。<br>
            ユザワヤでスヌーピーの絵柄が入ったやつだぜ、６，０００円。
        </div>
        </div>


        <talker-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            ６，０００円は高いなあ。元を取るために何本のズボンの裾を上げるつもりだぜ？
        </talker-balloon>


        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ３本ぐらい……。
        </div>
        </div>


        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01-2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            １本２，０００円の裾上げねえ。
        </div>
        </div>


        <talker-balloon
            :src="kifuwarabe1Src"
            :alt="kifuwarabe1Alt"
            :name="kifuwarabe1Name"
            :device="compatibleDevice1Ref?.device">
            夜は集中力が落ちているんで、ズボンの裾上げは明日の朝にしろだぜ。<br>
            ひとまず、カフェインレス・ブラックコーヒーでも飲んで休めだぜ。
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
