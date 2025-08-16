<template>
    <the-header/>

    <h3>スプライト　＞　ルーチン</h3>
    <section class="sec-3">
        <p>スプライトに一定の動きをさせるぜ（＾▽＾）</p>
        <br/>

        <stopwatch-dev
            v-on:countUp="(countNum) => { count = countNum; }"
        /><br/>

        <p>ここに切り抜いたタイルを表示：</p>
        <div :style="`height: ${cellHeight}px`" style="position:relative;">
            <Tile
                :srcLeft="0"
                :srcTop="0"
                :srcWidth="cellWidth"
                :srcHeight="cellHeight"
                :tilemapUrl="'/img/making/sprite-objects-001.png'"
                style="position:absolute;"
                :style="o1Style" />
        </div>
        ：ここまで。<br/>
        <br/>

        元画像のタイルマップを表示：<br/>
        <v-img src="/img/making/sprite-objects-001.png" style="width:128px; height:128px; border: dashed 4px gray;"/>
        ：ここまで。
    </section>
    
    <br/>
    <h3>ソースコード</h3>
    <section class="sec-3">
        <source-link/>
    </section>

    <the-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

   import { computed, ref } from 'vue';

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import SourceLink from '../../components/SourceLink.vue';
    import StopwatchDev from '../../components/StopwatchDev.vue';
    import Tile from '../../components/Tile.vue';
    import TheFooter from './the-footer.vue';
    import TheHeader from './the-header.vue';

    // ##############
    // # 共有データ #
    // ##############

    // タイマー
    const count = ref<number>(0);   // カウントの初期値

    // タイル
    const cellWidth = 32;
    const cellHeight = 32;

    // オブジェクト１
    // プレイヤー１
    const o1Left = ref<number>(0);      // スプライトのX座標
    const o1Top = ref<number>(0);       // スプライトのY座標
    const o1Speed = ref<number>(2);     // 移動速度
    const o1Style = computed(() => ({
        top: `${o1Top.value}px`,
        left: `${o1Left.value + (count.value * o1Speed.value) % 256}px`,
    }));

</script>
