<template>
    <the-header/>

    <h3>上下左右に移動しようぜ！　＞　ＲＰＧの歩行グラフィック　＞　原始的スクロール</h3>
    <section class="sec-3">
        <p>キーボードの上下左右キーを押してくれだぜ！</p>

        <div :style="`position:relative; left: 0; top: 0; height:${zoom * tableRows * cellHeight}px;`">

            <!--
                グリッド
                NOTE: ループカウンターは 1 から始まるので、1～9の9個のセルを作成。
            -->
            <div v-for="i in tableArea" :key="i"
                :style="getCellStyle(i - 1)"></div>

            <!-- プレイヤー１ -->
            <TileAnimation
                :frames="p1Frames"
                tilemapUrl="/img/making/202508__warabenture__15-1612-kifuwarabe-o1o0.png"
                :slow="slow"
                :time="count"
                class="cursor"
                :style="p1Style"
                style="image-rendering: pixelated;" /><br/>
        </div>

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

    import { computed, onMounted, ref } from 'vue';

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

    // 表示データ
    const zoom = 4;

    // 盤データ
    const cellWidth = 32;
    const cellHeight = 32;

    // プレイヤー１
    const p1Left = ref<number>(2 * cellWidth);      // スプライトのX座標
    const p1Top = ref<number>(2 * cellHeight);       // スプライトのY座標
    const p1Speed = ref<number>(2);     // 移動速度
    const p1Input = <Record<string, boolean>>{  // 入力
        ArrowUp: false, ArrowRight: false, ArrowDown: false, ArrowLeft: false
    };
    const p1Style = computed(() => ({
        top: `${p1Top.value}px`,
        left: `${p1Left.value}px`,
        zoom: `${zoom}`,
    }));

    const count = ref<number>(0);   // カウントの初期値
    const slow = ref<number>(8);   // スローモーションの倍率の初期値
    const timerId = ref<number | null>(null);   // タイマーのIDを保持

    // キャラクターの向きと、歩行タイルの指定
    const sourceFrames = {
        up:[    // 上向き
            {top:  0 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  0 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  0 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  0 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
        ],
        right:[ // 右向き
            {top:  1 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  1 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  1 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  1 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
        ],
        down:[  // 下向き
            {top:  2 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  2 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  2 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  2 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
        ],
        left:[  // 左向き
            {top:  3 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  3 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  3 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  3 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
        ]
    };

    const p1Frames = ref(sourceFrames["down"]);
    const p1MotionWait = ref(0);  // TODO 入力キーごとに用意したい。
    const moLeft = -1;  // モーション（motion）定数。左に移動する
    const moRight = 1;
    const moUp = -1;
    const moDown = 1;
    const p1Motion = ref<Record<string, number>>({  // 入力
        xAxis: 0,   // 負なら左、正なら右
        yAxis: 0,   // 負なら上、正なら下
    });

    const tableColumns = 5;
    const tableRows = 5;
    const tableArea = tableColumns * tableRows; // 盤のセル数

    // ボードの表示位置
    const boardTop = ref<number>(0);
    const boardLeft = ref<number>(0);
    const getCellStyle = computed(() => {
        return (i:number)=>{
            // プレイヤーが初期位置にいる場合の、セルの top 位置。
            const homeLeft = (i % tableColumns) * cellWidth;
            const homeTop = Math.floor(i / tableRows) * cellHeight;

            return {
                position: 'absolute',
                top: `${homeTop + boardTop.value}px`,
                left: `${homeLeft + boardLeft.value}px`,
                width: `${cellWidth}px`,
                height: `${cellHeight}px`,
                zoom: 4,
                border: "solid 1px lightgray",
            };
        };
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
                        p1Motion.value["xAxis"] = moLeft; // 左
                    }

                    if (p1Input.ArrowRight) {
                        p1Motion.value["xAxis"] = moRight;  // 右
                    }

                    if (p1Input.ArrowUp) {
                        p1Motion.value["yAxis"] = moUp;   // 上
                    }

                    if (p1Input.ArrowDown) {
                        p1Motion.value["yAxis"] = moDown;   // 下
                    }

                    if (p1Motion.value["xAxis"]!=0 || p1Motion.value["yAxis"]!=0) {
                        p1MotionWait.value = 16;    // フレーム数を設定
                    }
                }

                // 移動処理
                // 斜め方向の場合、上下を優先する。
                if (p1Motion.value["xAxis"]==1) {   // 右
                    p1Frames.value = sourceFrames["right"]
                    boardLeft.value -= p1Speed.value;   // 盤の方をスクロールさせる
                } else if (p1Motion.value["xAxis"]==-1) {  // 左
                    p1Frames.value = sourceFrames["left"]
                    boardLeft.value += p1Speed.value;
                }

                if (p1Motion.value["yAxis"]==-1) {  // 上
                    p1Frames.value = sourceFrames["up"]
                    boardTop.value += p1Speed.value;
                } else if (p1Motion.value["yAxis"]==1) {   // 下
                    p1Frames.value = sourceFrames["down"]
                    boardTop.value -= p1Speed.value;
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
