<template>
    <the-header/>

    <h3>上下左右に移動しようぜ！</h3>
    <section class="sec-3">
        <p>カーソルキーでオブジェクトが動いてしまっていることがあるから、そのときはスペースキーを押して元の位置に戻してくれだぜ（＾▽＾）！</p>
        <br/>
    </section>

    <input-axis-target/><br/>
    <input-axis-rpg-walk/><br/>
    <input-axis-rpg-walk-grid/><br/>
    <input-axis-rpg-walk-boundary-check/><br/>
    <input-axis-rpg-walk-scroll-primordial/><br/>
    <input-axis-rpg-walk-scroll-loop/><br/>
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
    import InputAxisRpgWalk from './input-axis-rpg-walk.vue';
    import InputAxisRpgWalkBoundaryCheck from './input-axis-rpg-walk-boundary-check.vue';
    import InputAxisRpgWalkGrid from './input-axis-rpg-walk-grid.vue';
    import inputAxisRpgWalkScrollBackground from './input-axis-rpg-walk-scroll-background.vue';
    import inputAxisRpgWalkScrollLoop from './input-axis-rpg-walk-scroll-loop.vue';
    import InputAxisRpgWalkScrollPrimordial from './input-axis-rpg-walk-scroll-primordial.vue';
    import InputAxisTarget from './input-axis-target.vue';
    import TheFooter from './the-footer.vue';
    import TheHeader from './the-header.vue';

</script>

<style scoped>
</style>
