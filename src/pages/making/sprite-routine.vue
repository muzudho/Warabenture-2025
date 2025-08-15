<template>
    <the-header/>

    <h3>スプライト　＞　ルーチン</h3>
    <section class="sec-3">
        <p>スプライトに一定の動きをさせるぜ（＾▽＾）</p>
        <br/>

        <p>カウント: {{ count }}</p>
        <v-btn @click="startTimer">スタート</v-btn>
        <v-btn @click="stopTimer">ストップ</v-btn>
        <v-btn @click="resetTimer">リセット</v-btn><br/>
        <br/>

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

    import Tile from '../../components/Tile.vue';
    import TheFooter from './the-footer.vue';
    import TheHeader from './the-header.vue';

    // ##############
    // # 共有データ #
    // ##############

    // タイマー
    const count = ref<number>(0);   // カウントの初期値
    const timerId = ref<number | null>(null);   // タイマーのIDを保持

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


    // ####################
    // # イベントハンドラ #
    // ####################

    function startTimer() : void {
        // 既にタイマーが動いてたら何もしない
        if (timerId.value) return;

        // requestAnimationFrameで約16.67ms（60fps）ごとにカウントアップ
        const tick = () => {
            count.value += 1;
            timerId.value = requestAnimationFrame(tick);
        };
        timerId.value = requestAnimationFrame(tick);
    }

    function stopTimer() : void {
        // タイマーを停止
        if (timerId.value) {
            cancelAnimationFrame(timerId.value);
            timerId.value = null;
        }
    }

    function resetTimer() : void {
        // カウントをリセットしてタイマーも停止
        count.value = 0;
        stopTimer();
    }    

</script>
