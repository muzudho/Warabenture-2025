<template>
    <the-header/>

    <h3>上下左右に移動しようぜ！　＞　ＲＰＧの歩行グラフィック　＞　グリッド吸着</h3>
    <section class="sec-3">
        <p>キーボードの上下左右キーを押してくれだぜ！</p>

        <div style="position:relative; left: 0; top: 0;">
            
            <!-- グリッド -->
            <div style="position:absolute; top: 0px; left: 0px; width:32px; height:32px; zoom: 4; border: solid 1px lightgray;"></div>
            <div style="position:absolute; top: 0px; left:32px; width:32px; height:32px; zoom: 4; border: solid 1px lightgray;"></div>
            <div style="position:absolute; top: 0px; left:64px; width:32px; height:32px; zoom: 4; border: solid 1px lightgray;"></div>

            <div style="position:absolute; top:32px; left: 0px; width:32px; height:32px; zoom: 4; border: solid 1px lightgray;"></div>
            <div style="position:absolute; top:32px; left:32px; width:32px; height:32px; zoom: 4; border: solid 1px lightgray;"></div>
            <div style="position:absolute; top:32px; left:64px; width:32px; height:32px; zoom: 4; border: solid 1px lightgray;"></div>

            <div style="position:absolute; top:64px; left: 0px; width:32px; height:32px; zoom: 4; border: solid 1px lightgray;"></div>
            <div style="position:absolute; top:64px; left:32px; width:32px; height:32px; zoom: 4; border: solid 1px lightgray;"></div>
            <div style="position:absolute; top:64px; left:64px; width:32px; height:32px; zoom: 4; border: solid 1px lightgray;"></div>

            <!-- プレイヤー１ -->
            <TileAnimation
                :frames="p1Frames"
                tilemapUrl="/img/making/202508__warabenture__12--2149-kifuwarabe-o1o0.png"
                :slow="slow"
                :time="count"
                class="cursor"
                :style="p1Style"
                style="zoom:4; image-rendering: pixelated;" /><br/>
        </div>


    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, ref } from 'vue';

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TileAnimation from '@/components/TileAnimation.vue'; // Tauri だと明示的にインポートを指定する必要がある。
    import TheHeader from './the-header.vue';


    // ##############
    // # 共有データ #
    // ##############

    // プレイヤー１
    const p1Left = ref<number>(0);      // スプライトのX座標
    const p1Top = ref<number>(0);       // スプライトのY座標
    const p1Speed = ref<number>(2);     // 移動速度
    const p1Input = <Record<string, boolean>>{  // 入力
        ArrowUp: false, ArrowRight: false, ArrowDown: false, ArrowLeft: false
    };
    const p1Style = computed(() => ({
        top: `${p1Top.value}px`,
        left: `${p1Left.value}px`,
    }));

    const count = ref<number>(0);   // カウントの初期値
    const slow = ref<number>(8);   // スローモーションの倍率の初期値
    const timerId = ref<number | null>(null);   // タイマーのIDを保持

    const sourceFrames = {
        up:[    // 上向き
            {top:   0, left:    0, width: 32, height: 32 },
            {top:   0, left:   32, width: 32, height: 32 },
            {top:   0, left:    0, width: 32, height: 32 },
            {top:   0, left:   32, width: 32, height: 32 },
        ],
        right:[ // 右向き
            {top:  32, left:    0, width: 32, height: 32 },
            {top:  32, left:   32, width: 32, height: 32 },
            {top:  32, left:    0, width: 32, height: 32 },
            {top:  32, left:   32, width: 32, height: 32 },
        ],
        down:[  // 下向き
            {top:  64, left:    0, width: 32, height: 32 },
            {top:  64, left:   32, width: 32, height: 32 },
            {top:  64, left:    0, width: 32, height: 32 },
            {top:  64, left:   32, width: 32, height: 32 },
        ],
        left:[  // 左向き
            {top:  96, left:    0, width: 32, height: 32 },
            {top:  96, left:   32, width: 32, height: 32 },
            {top:  96, left:    0, width: 32, height: 32 },
            {top:  96, left:   32, width: 32, height: 32 },
        ]
    };
    const p1Frames = ref(sourceFrames["down"]);
    const p1MotionWait = ref(0);  // TODO 入力キーごとに用意したい。
    const p1Motion = ref<Record<string, number>>({  // 入力
        xAxis: 0,   // 負なら左、正なら右
        yAxis: 0,   // 負なら上、正なら下
    });


    // ##########
    // # 開始時 #
    // ##########

    onMounted(() => {
        startGameLoop();
        startTimer();

        // キーボードイベント
        window.addEventListener('keydown', (e) => {
            if (p1Input.hasOwnProperty(e.key)) {
                p1Input[e.key] = true;
            }
        });
        window.addEventListener('keyup', (e) => {
            if (p1Input.hasOwnProperty(e.key)) {
                p1Input[e.key] = false;
            }
        });


        // ################
        // # サブルーチン #
        // ################

        function startGameLoop() : void {
            const update = () => {
                p1MotionWait.value -= 1;

                if (p1MotionWait.value==0) {
                    p1Motion.value["xAxis"] = 0;    // クリアー
                    p1Motion.value["yAxis"] = 0;
                }
                
                // 入力（上下左右への移動）をモーションに変換
                if (p1MotionWait.value<=0) {   // ウェイトが無ければ、入力を受け付ける。
                    if (p1Input.ArrowLeft) {
                        p1Motion.value["xAxis"] = -1; // 左
                    }

                    if (p1Input.ArrowRight) {
                        p1Motion.value["xAxis"] = 1;  // 右
                    }

                    if (p1Input.ArrowUp) {
                        p1Motion.value["yAxis"] = -1;   // 上
                    }

                    if (p1Input.ArrowDown) {
                        p1Motion.value["yAxis"] = 1;   // 下
                    }

                    if (p1Motion.value["xAxis"]!=0 || p1Motion.value["yAxis"]!=0) {
                        p1MotionWait.value = 16;    // フレーム数を設定
                    }
                }

                // 移動処理
                // 斜め方向の場合、上下を優先する。
                if (p1Motion.value["xAxis"]==1) {   // 右
                    p1Left.value += p1Speed.value;
                    p1Frames.value = sourceFrames["right"]
                } else if (p1Motion.value["xAxis"]==-1) {  // 左
                    p1Left.value -= p1Speed.value;
                    p1Frames.value = sourceFrames["left"]
                }

                if (p1Motion.value["yAxis"]==-1) {  // 上
                    p1Top.value -= p1Speed.value;
                    p1Frames.value = sourceFrames["up"]
                } else if (p1Motion.value["yAxis"]==1) {   // 下
                    p1Top.value += p1Speed.value;
                    p1Frames.value = sourceFrames["down"]
                }

                // 次のフレーム
                requestAnimationFrame(update);
            };

            // 初回呼び出し
            requestAnimationFrame(update);
        }

    });

    // ################
    // # サブルーチン #
    // ################

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

</script>

<style scoped>
    div.cursor {
        position: relative; width:32px; height:32px;
    }
</style>
