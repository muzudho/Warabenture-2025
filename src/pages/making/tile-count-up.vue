<template>
    <the-header/>

    <h3>タイル　＞　でカウントアップのアニメーションするぜ！</h3>
    <section class="sec-3">
        ここに切り抜いたタイルを表示：<br/>
        <TileAnimation
                :frames="[
                    {top:   0, left:    0, width: 32, height: 32 },     // 0フレーム目
                    {top:   0, left:   32, width: 32, height: 32 },
                    {top:   0, left:   64, width: 32, height: 32 },
                    {top:   0, left:   96, width: 32, height: 32 },
                    {top:   0, left:  128, width: 32, height: 32 },
                    {top:   0, left:  160, width: 32, height: 32 },
                    {top:   0, left:  192, width: 32, height: 32 },
                    {top:   0, left:  224, width: 32, height: 32 },
                    {top:   0, left:  256, width: 32, height: 32 },
                    {top:   0, left:  288, width: 32, height: 32 },
                    {top:  32, left:    0, width: 32, height: 32 },     // 10フレーム目
                    {top:  32, left:   32, width: 32, height: 32 },
                    {top:  32, left:   64, width: 32, height: 32 },
                    {top:  32, left:   96, width: 32, height: 32 },
                    {top:  32, left:  128, width: 32, height: 32 },
                    {top:  32, left:  160, width: 32, height: 32 },
                    {top:  32, left:  192, width: 32, height: 32 },
                    {top:  32, left:  224, width: 32, height: 32 },
                    {top:  32, left:  256, width: 32, height: 32 },
                    {top:  32, left:  288, width: 32, height: 32 },
                    {top:  64, left:    0, width: 32, height: 32 },     // 20フレーム目
                    {top:  64, left:   32, width: 32, height: 32 },
                    {top:  64, left:   64, width: 32, height: 32 },
                    {top:  64, left:   96, width: 32, height: 32 },
                    {top:  64, left:  128, width: 32, height: 32 },
                    {top:  64, left:  160, width: 32, height: 32 },
                    {top:  64, left:  192, width: 32, height: 32 },
                    {top:  64, left:  224, width: 32, height: 32 },
                    {top:  64, left:  256, width: 32, height: 32 },
                    {top:  64, left:  288, width: 32, height: 32 },
                    {top:  96, left:    0, width: 32, height: 32 },     // 30フレーム目
                    {top:  96, left:   32, width: 32, height: 32 },
                    {top:  96, left:   64, width: 32, height: 32 },
                    {top:  96, left:   96, width: 32, height: 32 },
                    {top:  96, left:  128, width: 32, height: 32 },
                    {top:  96, left:  160, width: 32, height: 32 },
                    {top:  96, left:  192, width: 32, height: 32 },
                    {top:  96, left:  224, width: 32, height: 32 },
                    {top:  96, left:  256, width: 32, height: 32 },
                    {top:  96, left:  288, width: 32, height: 32 },
                    {top: 128, left:    0, width: 32, height: 32 },     // 40フレーム目
                    {top: 128, left:   32, width: 32, height: 32 },
                    {top: 128, left:   64, width: 32, height: 32 },
                    {top: 128, left:   96, width: 32, height: 32 },
                    {top: 128, left:  128, width: 32, height: 32 },
                    {top: 128, left:  160, width: 32, height: 32 },
                    {top: 128, left:  192, width: 32, height: 32 },
                    {top: 128, left:  224, width: 32, height: 32 },
                    {top: 128, left:  256, width: 32, height: 32 },
                    {top: 128, left:  288, width: 32, height: 32 },
                    {top: 160, left:    0, width: 32, height: 32 },     // 50フレーム目
                    {top: 160, left:   32, width: 32, height: 32 },
                    {top: 160, left:   64, width: 32, height: 32 },
                    {top: 160, left:   96, width: 32, height: 32 },
                    {top: 160, left:  128, width: 32, height: 32 },
                    {top: 160, left:  160, width: 32, height: 32 },
                    {top: 160, left:  192, width: 32, height: 32 },
                    {top: 160, left:  224, width: 32, height: 32 },
                    {top: 160, left:  256, width: 32, height: 32 },
                    {top: 160, left:  288, width: 32, height: 32 },
                ]"
                tilemapUrl="/img/making/timer_square.png"
                :slow="slow"
                :time="count"
                style="zoom:4; image-rendering: pixelated;" /><br/>
        <!--
            NOTE: Tauri では left="64" のように数字を渡せるが、 Nuxt では :left="64" のように書かないと数字で渡せないようだ。
        -->
        ：ここまで。<br/>
        <br/>
        <p>カウント: {{ count }}</p>
        <v-btn @click="startTimer">スタート</v-btn>
        <v-btn @click="stopTimer">ストップ</v-btn>
        <v-btn @click="resetTimer">リセット</v-btn>

        <div class="text-caption">
            Slow
        </div>
        <v-slider
                v-model="slow"
                min="1"
                max="10"
                step="1"
                showTicks="always"
                thumbLabel="always" />
        <br/>
        元画像のタイルマップを表示：<br/>
        <v-img src="/img/making/timer_square.png" style="width:320px; height:192px; zoom: 4; image-rendering: pixelated;"/>
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

    import { ref } from 'vue';

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import SourceLink from '../../components/SourceLink.vue';
    import TileAnimation from '@/components/TileAnimation.vue';
    import TheFooter from './the-footer.vue';
    import TheHeader from './the-header.vue';


    // ##############
    // # 共有データ #
    // ##############

    const count = ref<number>(0);   // カウントの初期値
    const timerId = ref<number | null>(null);   // タイマーのIDを保持
    const slow = ref<number>(1);   // スローモーションの倍率の初期値


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
