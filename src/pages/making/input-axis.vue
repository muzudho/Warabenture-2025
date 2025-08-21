<template>
    <the-header/>

    <h3>上下左右に移動しようぜ！</h3>
    <section class="sec-3">
        <p>カーソルキーでオブジェクトが動いてしまっていることがあるから、そのときはスペースキーを押して元の位置に戻してくれだぜ（＾▽＾）！</p>
        <br/>
    </section>

    <input-axis-target/><br/>
    <input-axis-rpg-walk-player-primordial/><br/>
    <input-axis-rpg-walk-player-grid/><br/>
    <input-axis-rpg-walk-player-boundary-check/><br/>
    <input-axis-rpg-walk-board-scroll-primordial/><br/>
    <input-axis-rpg-walk-board-scroll-loop/><br/>
    <input-axis-rpg-walk-face-shift-primordial/><br/>
    <input-axis-rpg-walk-face-shift-boundary/><br/>
    <input-axis-rpg-walk-face-shift-loop/><br/>
    <input-axis-rpg-walk-face-shift-contents-size-variable/><br/>
    <input-axis-rpg-walk-board-scroll-loop-and-face-shift-primordial/><br/>
    <input-axis-rpg-walk-board-scroll-loop-and-face-shift-boundary/><br/>
    <input-axis-rpg-walk-scroll-background/><br/>

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
    import InputAxisRpgWalkPlayerPrimordial from './input-axis-rpg-walk-player-primordial.vue';
    import InputAxisRpgWalkPlayerBoundaryCheck from './input-axis-rpg-walk-player-boundary-check.vue';
    import InputAxisRpgWalkPlayerGrid from './input-axis-rpg-walk-player-grid.vue';
    import InputAxisRpgWalkScrollBackground from './input-axis-rpg-walk-scroll-background.vue';
    import InputAxisRpgWalkBoardScrollLoop from './input-axis-rpg-walk-board-scroll-loop.vue';
    import InputAxisRpgWalkFaceShiftPrimordial from './input-axis-rpg-walk-face-shift-primordial.vue';
    import InputAxisRpgWalkBoardScrollLoopAndFaceShiftBoundary from './input-axis-rpg-walk-board-scroll-loop-and-face-shift-boundary.vue';
    import InputAxisRpgWalkBoardScrollLoopAndFaceShiftPrimordial from './input-axis-rpg-walk-board-scroll-loop-and-face-shift-primordial.vue';
    import InputAxisRpgWalkFaceShiftBoundary from './input-axis-rpg-walk-face-shift-boundary.vue';
    import InputAxisRpgWalkFaceShiftContentsSizeVariable from './input-axis-rpg-walk-face-shift-contents-size-variable.vue';
    import InputAxisRpgWalkFaceShiftLoop from './input-axis-rpg-walk-face-shift-loop.vue';
    import InputAxisRpgWalkBoardScrollPrimordial from './input-axis-rpg-walk-board-scroll-primordial.vue';
    import InputAxisTarget from './input-axis-target.vue';
    import TheFooter from './the-footer.vue';
    import TheHeader from './the-header.vue';

</script>

<style scoped>
</style>
