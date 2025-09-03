<template>
    <the-header/>

    <h3>上下左右に移動しようぜ！</h3>
    <section class="sec-3">
        <br/>

        <talk-balloon
            :src="commonOton2Src"
            :alt="commonOton2Alt"
            :name="commonOton2Name"
            :device="compatibleDevice1Ref?.device">
            こんなホームページ見てる読者、座学嫌いだろ、<br/>
            動いてるもの見ないとなんも分かんないだろ。<br/>
            <br/>
            コントローラーを触らせながら覚えていってもらおうぜ？
        </talk-balloon>
        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            そこで、この記事では、ゲームパッドの十字キーを使って<br/>
            オブジェクトを動かせる例をいろいろ並べていくぜ。
        </talk-balloon>
    </section>

    <input-axis-target-accumulate-moveaway-1/><br/>

    <section class="sec-3">
        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            おっと、動かしたあとは［スペース・キー］を押して、オブジェクトを元の位置に戻してくれだぜ。<br/>
            <br/>
            ［遠ざかる］というのは、［十字キー］を押しっぱにしたらどこまでも行ってしまうということだぜ。<br/>
            <br/>
            ［累積］というのは、キーを押している間、数ドットずつ動くことだぜ。<br/>
        </talk-balloon>
    </section>
    <section class="sec-3">
        <talk-balloon
            :src="commonHiyoko2Src"
            :alt="commonHiyoko2Alt"
            :name="commonHiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            でも［累積］ってあんま使わないから覚えなくていいわよね。<br/>
        </talk-balloon>
    </section>

    <input-axis-rpg-walk-player-accumulate-moveaway-1/><br/>

    <section class="sec-3">
        <br/>
        
        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            👆　上記は、表的をキャラクターに変えただけだな。<br/>
            歩行のアニメをしてたり、向きが変わるだけで雰囲気出るだろ。
        </talk-balloon>
    </section>

    <input-axis-rpg-walk-player-grid-moveaway-1/><br/>

    <section class="sec-3">
        <br/>
        
        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            👆　上記は、［累積］から［グリッド吸着］へ変わっているぜ。<br/>
            <br/>
            キーをちょいっと押しても、次のグリッドまで残っている分を勝手に動いてくれるのが違いだな。
        </talk-balloon>
    </section>

    <input-axis-rpg-walk-player-grid-bounded-1/><br/>

    <section class="sec-3">
        <br/>
        
        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            👆　上記は、［遠ざかる］から［境界のある］へ変わっているぜ。<br/>
            <br/>
            盤の端っこから先には、出ていけなくなっているのが違いだぜ。
        </talk-balloon>
    </section>

    <input-axis-rpg-walk-board-grid-moveaway-1/><br/>

    <section class="sec-3">
        <br/>
        
        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            👆　上記は、動くのが［自機］から［盤］へ変わっているぜ。<br/>
            <br/>
            自機が動いてなくても、盤が動いていると、自機が前に進んでいる感じがするだろ。
        </talk-balloon>
    </section>

    <input-axis-rpg-walk-printing-shift-primordial-1/><br/>
    <input-axis-rpg-walk-printing-shift-boundary-1/><br/>
    <input-axis-rpg-walk-printing-shift-loop-1/><br/>
    <input-axis-rpg-walk-printing-shift-contents-size-variable-1/><br/>
    <input-axis-rpg-walk-board-wraparound-scroll-loop-1/><br/>
    <input-axis-rpg-walk-board-wraparound-scroll-and-printing-loop-1/><br/>
    <input-axis-rpg-walk-board-wraparound-scroll-and-printing-primordial-and-player-boundary-1/><br/>
    <input-axis-rpg-walk-using-background-image-1/><br/>

    <br/>
    <h3><span class="parent-header">上下左右に移動しようぜ！　＞　</span>ソースコード</h3>
    <section class="sec-3">
        <source-link/>
    </section>

    <the-footer/>
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

    import SourceLink from '../../components/SourceLink.vue';
    import InputAxisRpgWalkUsingBackgroundImage1 from './input-axis-rpg-walk-using-background-image-1.vue';
    import InputAxisRpgWalkBoardGridMoveaway1 from './input-axis/rpg-walk-board-grid-moveaway-1.vue';
    import InputAxisRpgWalkBoardWraparoundScrollAndPrintingPrimordialAndPlayerBoundary1 from './input-axis-rpg-walk-board-wraparound-scroll-and-printing-primordial-and-player-boundary-1.vue';
    import InputAxisRpgWalkBoardWraparoundScrollLoop1 from './input-axis-rpg-walk-board-wraparound-scroll-loop-1.vue';
    import InputAxisRpgWalkBoardWraparoundScrollAndPrintingLoop1 from './input-axis-rpg-walk-board-wraparound-scroll-and-printing-loop-1.vue';
    import InputAxisRpgWalkPlayerAccumulateMoveaway1 from './input-axis/rpg-walk-player-accumulate-moveaway-1.vue';
    import InputAxisRpgWalkPlayerGridBounded1 from './input-axis/rpg-walk-player-grid-bounded-1.vue';
    import InputAxisRpgWalkPlayerGridMoveaway1 from './input-axis/rpg-walk-player-grid-moveaway-1.vue';
    import InputAxisRpgWalkPrintingShiftPrimordial1 from './input-axis-rpg-walk-printing-shift-primordial-1.vue';
    import InputAxisRpgWalkPrintingShiftBoundary1 from './input-axis-rpg-walk-printing-shift-boundary-1.vue';
    import InputAxisRpgWalkPrintingShiftContentsSizeVariable1 from './input-axis-rpg-walk-printing-shift-contents-size-variable-1.vue';
    import InputAxisRpgWalkPrintingShiftLoop1 from './input-axis-rpg-walk-printing-shift-loop-1.vue';
    import InputAxisTargetAccumulateMoveaway1 from './input-axis/target-accumulate-moveaway-1.vue';
    import TalkBalloon from '../../components/TalkBalloon.vue';
    import TheFooter from './the-footer.vue';
    import TheHeader from './the-header.vue';

    // ++++++++++++++++++++++++++++++++++
    // + コンポーネント　＞　互換性対応 +
    // ++++++++++++++++++++++++++++++++++

    import CompatibleDevice from '@/components/CompatibleDevice.vue'


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //    

    import commonOton2Src from "@/assets/img/talk/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png";
    const commonOton2Alt = "お父ん";
    const commonOton2Name = "お父ん";
    import commonKifuwarabe2Src from "@/assets/img/talk/202506__character__01-2013-kifuwarabe-o1o1o0.png";
    const commonKifuwarabe2Alt = "きふわらべ";
    const commonKifuwarabe2Name = "きふわらべ";
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

<style scoped>

    @import '../../styles/talk-scene.css';

</style>
