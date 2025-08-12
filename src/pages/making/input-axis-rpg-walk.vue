<template>
    <the-header/>

    <h3>上下左右に移動しようぜ！　＞　ＲＰＧの歩行グラフィック</h3>
    <section class="sec-3">
        <p>キーボードの上下左右キーを押してくれだぜ！</p>

        <!-- プレイヤー１ -->
        <TileAnimation
            :frames="p1Frames"
            tilemapUrl="/img/making/202508__warabenture__12--2149-kifuwarabe-o1o0.png"
            :slow="slow"
            :time="count"
            class="cursor"
            :style="p1Style"
            style="zoom:4; image-rendering: pixelated;" /><br/>

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
                // 移動処理
                if (p1Input.ArrowUp) {
                    p1Top.value -= p1Speed.value;
                    p1Frames.value = sourceFrames["up"]
                }

                if (p1Input.ArrowRight) {
                    p1Left.value += p1Speed.value;
                    p1Frames.value = sourceFrames["right"];
                }

                if (p1Input.ArrowDown) {
                    p1Top.value += p1Speed.value;
                    p1Frames.value = sourceFrames["down"];
                }

                if (p1Input.ArrowLeft) {
                    p1Left.value -= p1Speed.value;
                    p1Frames.value = sourceFrames["left"];
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
