<template>
    <the-header/>

    <h3>タイル　＞　でカウントアップのアニメーションするぜ！　＞　ＲＰＧの歩行グラフィック</h3>
    <section class="sec-3">
        ここに切り抜いたタイルを表示：<br/>
        <TileAnimation
                :frames="[
                    // 上向き
                    {top:   0, left:    0, width: 32, height: 32 },
                    {top:   0, left:   32, width: 32, height: 32 },
                    {top:   0, left:    0, width: 32, height: 32 },
                    {top:   0, left:   32, width: 32, height: 32 },

                    // 右向き
                    {top:  32, left:    0, width: 32, height: 32 },
                    {top:  32, left:   32, width: 32, height: 32 },
                    {top:  32, left:    0, width: 32, height: 32 },
                    {top:  32, left:   32, width: 32, height: 32 },

                    // 下向き
                    {top:  64, left:    0, width: 32, height: 32 },
                    {top:  64, left:   32, width: 32, height: 32 },
                    {top:  64, left:    0, width: 32, height: 32 },
                    {top:  64, left:   32, width: 32, height: 32 },

                    // 左向き
                    {top:  96, left:    0, width: 32, height: 32 },
                    {top:  96, left:   32, width: 32, height: 32 },
                    {top:  96, left:    0, width: 32, height: 32 },
                    {top:  96, left:   32, width: 32, height: 32 },
                ]"
                tilemapUrl="/img/making/202508__warabenture__12--2149-kifuwarabe-o1o0.png"
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
                min="2"
                max="32"
                step="2"
                showTicks="always"
                thumbLabel="always" />
        <br/>
        元画像のタイルマップを表示：<br/>
        <v-img src="/img/making/202508__warabenture__12--2149-kifuwarabe-o1o0.png" style="width:64px; height:128px; zoom: 4; image-rendering: pixelated;"/>
        ：ここまで。
    </section>
    <hr/>
    <router-link to="/making">メイキングの先頭に戻る</router-link>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted, ref } from 'vue';

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TileAnimation from '@/components/TileAnimation.vue';
    import TheHeader from './the-header.vue';

    // ##############
    // # 共有データ #
    // ##############

    const count = ref<number>(0);   // カウントの初期値
    const timerId = ref<number | null>(null);   // タイマーのIDを保持
    const slow = ref<number>(8);   // スローモーションの倍率の初期値

    onMounted(() => {
        // コンポーネントがマウントされたときの処理
    });

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
