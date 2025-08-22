<template>
    <the-header/>

    <h3>上下左右に移動しようぜ！</h3>
    <section class="sec-3">
        <p>カーソルキーでオブジェクトが動いてしまっていることがあるから、そのときはスペースキーを押して元の位置に戻してくれだぜ（＾▽＾）！</p>
        <br/>
    </section>

    <input-axis-target-1/><br/>
    <input-axis-rpg-walk-player-primordial-1/><br/>
    <input-axis-rpg-walk-player-primordial-grid-1/><br/>
    <input-axis-rpg-walk-player-boundary-check-1/><br/>
    <input-axis-rpg-walk-board-scroll-primordial-grid-1/><br/>
    <input-axis-rpg-walk-printing-shift-primordial-1/><br/>
    <input-axis-rpg-walk-printing-shift-boundary-1/><br/>
    <input-axis-rpg-walk-printing-shift-loop-1/><br/>
    <input-axis-rpg-walk-printing-shift-contents-size-variable-1/><br/>
    <input-axis-rpg-walk-board-scroll-loop-1/><br/>
    <input-axis-rpg-walk-board-scroll-loop-and-printing-primordial-1/><br/>
    <input-axis-rpg-walk-board-scroll-loop-and-printing-primordial-and-player-boundary-1/><br/>
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

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import SourceLink from '../../components/SourceLink.vue';
    import InputAxisRpgWalkPlayerPrimordial1 from './input-axis-rpg-walk-player-primordial-1.vue';
    import InputAxisRpgWalkPlayerBoundaryCheck1 from './input-axis-rpg-walk-player-boundary-check-1.vue';
    import InputAxisRpgWalkPlayerPrimordialGrid1 from './input-axis-rpg-walk-player-primordial-grid-1.vue';
    import InputAxisRpgWalkUsingBackgroundImage1 from './input-axis-rpg-walk-using-background-image-1.vue';
    import InputAxisRpgWalkBoardScrollLoop1 from './input-axis-rpg-walk-board-scroll-loop-1.vue';
    import InputAxisRpgWalkPrintingShiftPrimordial1 from './input-axis-rpg-walk-printing-shift-primordial-1.vue';
    import InputAxisRpgWalkBoardScrollLoopAndPrintingPrimordial1 from './input-axis-rpg-walk-board-scroll-loop-and-printing-primordial-1.vue';
    import InputAxisRpgWalkBoardScrollLoopAndPrintingPrimordialAndPlayerBoundary1 from './input-axis-rpg-walk-board-scroll-loop-and-printing-primordial-and-player-boundary-1.vue';
    import InputAxisRpgWalkPrintingShiftBoundary1 from './input-axis-rpg-walk-printing-shift-boundary-1.vue';
    import InputAxisRpgWalkPrintingShiftContentsSizeVariable1 from './input-axis-rpg-walk-printing-shift-contents-size-variable-1.vue';
    import InputAxisRpgWalkPrintingShiftLoop1 from './input-axis-rpg-walk-printing-shift-loop-1.vue';
    import InputAxisRpgWalkBoardScrollPrimordialGrid1 from './input-axis-rpg-walk-board-scroll-primordial-grid-1.vue';
    import InputAxisTarget1 from './input-axis-target-1.vue';
    import TheFooter from './the-footer.vue';
    import TheHeader from './the-header.vue';

</script>

<style scoped>
</style>
