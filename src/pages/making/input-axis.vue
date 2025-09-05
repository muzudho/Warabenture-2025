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

    <input-axis-rpg-walk-tiles-immovable-projection-moveaway-1/><br/>

    <section class="sec-3">
        <br/>
        
        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            👆　上記は、何にも動いてないぜ。<br/>
            <br/>
            タイルが並べてあって、そのタイルに何か表示されてるだけだぜ。<br/>
        </talk-balloon>
        <talk-balloon
            :src="commonHiyoko2Src"
            :alt="commonHiyoko2Alt"
            :name="commonHiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            それでも盤上を動いてるように見えるわよね。<br/>
        </talk-balloon>
        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            タイルは動いてないから［不動タイル］、<br/>
            どこに保存されてるのか、数字の並びが、まるで本当に有るみたいにタイルに映ってるの、［像］だぜ。<br/>
            ［像］はどっかに本体のデータが保存されてるのな、その本体のデータは［実物］。<br/>
            実物をタイルに［投影］して、［像］を見てるわけだぜ。<br/>
        </talk-balloon>
        <talk-balloon
            :src="commonOton2Src"
            :alt="commonOton2Alt"
            :name="commonOton2Name"
            :device="compatibleDevice1Ref?.device">
            何言ってるか分かんないよな。
        </talk-balloon>
    </section>

    <input-axis-rpg-walk-tiles-immovable-projection-boundary-1/><br/>

    <section class="sec-3">
        <br/>
        
        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            👆　上記は、盤の端まで行くと、自機がホームポジションを離れて、盤上を移動するぜ。<br/>
        </talk-balloon>
    </section>

    <input-axis-rpg-walk-tiles-immovable-projection-loop-1/><br/>

    <section class="sec-3">
        <br/>
        
        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            👆　上記は、像の右端と左端、上端と下端がくっついているから、<br/>
            いつまでもぐるぐると回れるぜ。<br/>
        </talk-balloon>
    </section>

    <input-axis-rpg-walk-tiles-immovable-projection-moveaway-size-variable-1/><br/>

    <section class="sec-3">
        <br/>
        
        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            👆　上記は、盤より狭い像、広い像を扱えるという例だぜ。<br/>
        </talk-balloon>
    </section>

    <input-axis-rpg-walk-tiles-wraparound-projection-loop-outofsight-1/><br/>

    <section class="sec-3">
        <br/>
        
        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            👆　今度のタイルはスライドするぜ。<br/>
            溢れ出たタイルは反対側へ回り込み（ラップアラウンド）をするぜ。<br/>
        </talk-balloon>
        <talk-balloon
            :src="commonHiyoko2Src"
            :alt="commonHiyoko2Alt"
            :name="commonHiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            回り込んでいるところを隠せば、無限にタイルがスライドしているように見えるわねぇ。<br/>
        </talk-balloon>
        <talk-balloon
            :src="commonOton2Src"
            :alt="commonOton2Alt"
            :name="commonOton2Name"
            :device="compatibleDevice1Ref?.device">
            裏画面でこっそり描いてるというやつだな。
        </talk-balloon>
        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            ［設定を表示］ボタンから、スライダーバーを動かして、像を広げたり狭めたり、いろいろ試してみてくれだぜ。<br/>
            ループのチェックを外して、盤の端を歩いてみるのもいいな。<br/>
        </talk-balloon>
    </section>

    <input-axis-rpg-walk-tiles-wraparound-projection-loop-outofsight-maptileimage-1/><br/>

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
    import InputAxisRpgWalkTilesWraparoundProjectionLoopOutofsightMaptileimage1 from './input-axis/rpg-walk-tiles-wraparound-projection-loop-outofsight-maptileimage-1.vue';
    import InputAxisRpgWalkBoardGridMoveaway1 from './input-axis/rpg-walk-board-grid-moveaway-1.vue';
    import InputAxisRpgWalkTilesWraparoundProjectionLoopOutofsight1 from './input-axis/rpg-walk-tiles-wraparound-projection-loop-outofsight-1.vue';
    import InputAxisRpgWalkPlayerAccumulateMoveaway1 from './input-axis/rpg-walk-player-accumulate-moveaway-1.vue';
    import InputAxisRpgWalkPlayerGridBounded1 from './input-axis/rpg-walk-player-grid-bounded-1.vue';
    import InputAxisRpgWalkPlayerGridMoveaway1 from './input-axis/rpg-walk-player-grid-moveaway-1.vue';
    import InputAxisRpgWalkTilesImmovableProjectionBoundary1 from './input-axis/rpg-walk-tiles-immovable-projection-boundary-1.vue';
    import InputAxisRpgWalkTilesImmovableProjectionLoop1 from './input-axis/rpg-walk-tiles-immovable-projection-loop-1.vue';
    import InputAxisRpgWalkTilesImmovableProjectionMoveaway1 from './input-axis/rpg-walk-tiles-immovable-projection-moveaway-1.vue';
    import InputAxisRpgWalkTilesImmovableProjectionMoveawaySizeVariable1 from './input-axis/rpg-walk-tiles-immovable-projection-moveaway-size-variable-1.vue';
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
