<template>

    <compatible-device ref="compatibleDevice1Ref"/>

    <!-- TODO: ［設定を表示］の内容説明をここに並べたい。 -->
    <talk-balloon
        :src="commonHiyoko2Src"
        :alt="commonHiyoko2Alt"
        :name="commonHiyoko2Name"
        :device="compatibleDevice1Ref?.device">
        ［ズーム］ってのは？<br/>
    </talk-balloon>
    <talk-balloon
        :src="commonOton2Src"
        :alt="commonOton2Alt"
        :name="commonOton2Name"
        :device="compatibleDevice1Ref?.device">
        ゲーム画面を拡大縮小させるぜ。
    </talk-balloon>
    <talk-balloon
        :src="commonHiyoko2Src"
        :alt="commonHiyoko2Alt"
        :name="commonHiyoko2Name"
        :device="compatibleDevice1Ref?.device">
        ［スローモーション］ってのは？<br/>
    </talk-balloon>
    <talk-balloon
        :src="commonOton2Src"
        :alt="commonOton2Alt"
        :name="commonOton2Name"
        :device="compatibleDevice1Ref?.device">
        ゲーム内の時計を遅くするぜ。これも好みで。
    </talk-balloon>
    <talk-balloon
        :src="commonHiyoko2Src"
        :alt="commonHiyoko2Alt"
        :name="commonHiyoko2Name"
        :device="compatibleDevice1Ref?.device">
        ［自機のホーム］ってのは？<br/>
    </talk-balloon>
    <talk-balloon
        :src="commonOton2Src"
        :alt="commonOton2Alt"
        :name="commonOton2Name"
        :device="compatibleDevice1Ref?.device">
        画面上で、自機がずっと守ってる位置だな。<br/>
        画面端になると、自機はホームから離れるよう設定することもできるぜ。
    </talk-balloon>
    <talk-balloon
        :src="commonHiyoko2Src"
        :alt="commonHiyoko2Alt"
        :name="commonHiyoko2Name"
        :device="compatibleDevice1Ref?.device">
        ［水平（垂直）方向のタイル数］ってのは？<br/>
    </talk-balloon>
    <talk-balloon
        :src="commonOton2Src"
        :alt="commonOton2Alt"
        :name="commonOton2Name"
        :device="compatibleDevice1Ref?.device">
        盤のヨコ（タテ）サイズだな。<br/>
        画面で見えてないところも含めたサイズだぜ。
    </talk-balloon>
    <talk-balloon
        :src="commonHiyoko2Src"
        :alt="commonHiyoko2Alt"
        :name="commonHiyoko2Name"
        :device="compatibleDevice1Ref?.device">
        ［マスク枠の幅］ってのは？<br/>
    </talk-balloon>
    <talk-balloon
        :src="commonOton2Src"
        :alt="commonOton2Alt"
        :name="commonOton2Name"
        :device="compatibleDevice1Ref?.device">
        盤の端っこを隠している黒い半透明のやつの幅だな。<br/>
        右側と下側は、１マス余分に多めに付くぜ。
    </talk-balloon>
    <talk-balloon
        :src="commonHiyoko2Src"
        :alt="commonHiyoko2Alt"
        :name="commonHiyoko2Name"
        :device="compatibleDevice1Ref?.device">
        ［像の端と端がつながって（ループして）］いますってのは？<br/>
    </talk-balloon>
    <talk-balloon
        :src="commonOton2Src"
        :alt="commonOton2Alt"
        :name="commonOton2Name"
        :device="compatibleDevice1Ref?.device">
        例えば、右へ歩いて行ったら、盤の左から出てくる、みたいなやつだぜ。
    </talk-balloon>
    <talk-balloon
        :src="commonHiyoko2Src"
        :alt="commonHiyoko2Alt"
        :name="commonHiyoko2Name"
        :device="compatibleDevice1Ref?.device">
        ［画面外を見せない］をしていませんってのは？<br/>
    </talk-balloon>
    <talk-balloon
        :src="commonOton2Src"
        :alt="commonOton2Alt"
        :name="commonOton2Name"
        :device="compatibleDevice1Ref?.device">
        像がないところまでは歩いていけないようなガードは、掛けていません、ってことだぜ。
    </talk-balloon>
    <talk-balloon
        :src="commonHiyoko2Src"
        :alt="commonHiyoko2Alt"
        :name="commonHiyoko2Name"
        :device="compatibleDevice1Ref?.device">
        ［盤の端まで歩ける］を可能にしていませんってのは？<br/>
    </talk-balloon>
    <talk-balloon
        :src="commonOton2Src"
        :alt="commonOton2Alt"
        :name="commonOton2Name"
        :device="compatibleDevice1Ref?.device">
        像の端っこが見えたとき、自機がホームポジションを離れて画面端まで歩くような動きを、やらせていませんってことだぜ。
    </talk-balloon>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { ref } from 'vue';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import CompatibleDevice from '@/components/CompatibleDevice.vue'
    import TalkBalloon from '@/components/TalkBalloon.vue';


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //    

    import commonOton2Src from "@/assets/img/talk/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png";
    const commonOton2Alt = "お父ん";
    const commonOton2Name = "お父ん";
    // import commonKifuwarabe2Src from "@/assets/img/talk/202506__character__01-2013-kifuwarabe-o1o1o0.png";
    // const commonKifuwarabe2Alt = "きふわらべ";
    // const commonKifuwarabe2Name = "きふわらべ";
    import commonHiyoko2Src from "@/assets/img/talk/202506__character__01-2025-hiyoko-o1o1o0.png";
    const commonHiyoko2Alt = "ひよこ";
    const commonHiyoko2Name = "ひよこ";


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

</script>