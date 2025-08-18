<template>

    <h4><span class="parent-header">ＲＰＧの歩行グラフィック　＞　</span>境界チェック</h4>
    <section class="sec-4">
        <p>キーボード操作方法</p>
        <ul>
            <li><span class="code-key">↑</span><span class="code-key">↓</span><span class="code-key">←</span><span class="code-key">→</span>キー　…　上下左右に動かすぜ！</li>
            <li><span class="code-key">（スペース）</span>キー　…　位置を最初の状態に戻すぜ。</li>
        </ul>
        <br/>

        <div :style="`position:relative; left: 0; top: 0; height: ${commonZoom * board1Ranks * board1SquareHeight}px;`">
            
            <!-- プレイヤー１の初期位置 -->
            <div :style="`position:absolute; left: ${4 * board1SquareWidth}px; top: ${4 * board1SquareHeight}px; width: ${4 * board1SquareWidth}px; height: ${4 * board1SquareHeight}px; background-color: lightpink;`">
            </div>

            <!--
                グリッド
                NOTE: ループカウンターは 1 から始まるので、1～9の9個のセルを作成。
            -->
            <div v-for="i in 9" :key="i"
                :style="`position:absolute; top: ${Math.floor((i - 1) / 3) * 32}px; left: ${((i - 1) % 3) * 32}px; width:32px; height:32px; zoom: ${commonZoom}; border: solid 1px lightgray;`"></div>

            <!-- プレイヤー１ -->
            <TileAnimation
                :frames="player1Frames"
                tilemapUrl="/img/making/202508__warabenture__15-1612-kifuwarabe-o1o0.png"
                :slow="player1AnimationSlow"
                :time="stopwatch1Count"
                class="cursor"
                :style="player1Style"
                style="image-rendering: pixelated;" /><br/>
        </div>

    </section>

    <br/>
    <h4><span class="parent-header-lights-out">ＲＰＧの歩行グラフィック　＞　</span><span class="parent-header">境界チェック　＞　</span>ソースコード</h4>
    <section class="sec-4">
        <source-link
            pagePath="/making/input-axis-rpg-walk-boundary-check"/>
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
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import SourceLink from '../../components/SourceLink.vue';
    import TileAnimation from '@/components/TileAnimation.vue';


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //

    const commonZoom = 4;
    const commonSpriteMotionLeft = -1;  // モーション（motion）定数。左に移動する
    const commonSpriteMotionRight = 1;
    const commonSpriteMotionUp = -1;
    const commonSpriteMotionDown = 1;


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ストップウォッチ +
    // ++++++++++++++++++++++++++++++++++++++

    const stopwatch1Count = ref<number>(0);   // カウントの初期値
    const stopwatch1TimerId = ref<number | null>(null);   // タイマーのIDを保持

    // ++++++++++++++++++++++++
    // + オブジェクト　＞　盤 +
    // ++++++++++++++++++++++++

    const board1SquareWidth = 32;
    const board1SquareHeight = 32;
    const board1Files = 3;
    const board1Ranks = 3;
    const board1lastFileIndex = board1Files - 1;
    const board1lastRankIndex = board1Ranks - 1;

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　プレイヤー +
    // ++++++++++++++++++++++++++++++++

    const player1Left = ref<number>(1 * board1SquareWidth);      // スプライトのX座標
    const player1Top = ref<number>(1 * board1SquareHeight);       // スプライトのY座標
    const player1Speed = ref<number>(2);     // 移動速度
    const player1Input = <Record<string, boolean>>{  // 入力
        " ": false, ArrowUp: false, ArrowRight: false, ArrowDown: false, ArrowLeft: false
    };
    const player1AnimationSlow = ref<number>(8);   // アニメーションのスローモーションの倍率の初期値
    const player1Style = computed(() => ({
        top: `${player1Top.value}px`,
        left: `${player1Left.value}px`,
        zoom: `${commonZoom}`,
    }));
    const player1SourceFrames = {   // キャラクターの向きと、歩行タイルの指定
        up:[    // 上向き
            {top:  0 * board1SquareHeight, left: 0 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
            {top:  0 * board1SquareHeight, left: 1 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
            {top:  0 * board1SquareHeight, left: 0 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
            {top:  0 * board1SquareHeight, left: 1 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
        ],
        right:[ // 右向き
            {top:  1 * board1SquareHeight, left: 0 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
            {top:  1 * board1SquareHeight, left: 1 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
            {top:  1 * board1SquareHeight, left: 0 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
            {top:  1 * board1SquareHeight, left: 1 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
        ],
        down:[  // 下向き
            {top:  2 * board1SquareHeight, left: 0 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
            {top:  2 * board1SquareHeight, left: 1 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
            {top:  2 * board1SquareHeight, left: 0 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
            {top:  2 * board1SquareHeight, left: 1 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
        ],
        left:[  // 左向き
            {top:  3 * board1SquareHeight, left: 0 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
            {top:  3 * board1SquareHeight, left: 1 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
            {top:  3 * board1SquareHeight, left: 0 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
            {top:  3 * board1SquareHeight, left: 1 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
        ]
    };
    const player1Frames = ref(player1SourceFrames["down"]);
    const player1MotionWait = ref(0);  // TODO 入力キーごとに用意したい。
    const player1Motion = ref<Record<string, number>>({  // 入力
        xAxis: 0,   // 負なら左、正なら右
        yAxis: 0,   // 負なら上、正なら下
    });

    
    // ##########
    // # 開始時 #
    // ##########

    onMounted(() => {
        // キーボードイベント
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            // ［スペース］［↑］［↓］キーの場合
            if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                // ブラウザーのデフォルトの上下スクロール動作をキャンセル
                e.preventDefault();
            }

            if (player1Input.hasOwnProperty(e.key)) {
                player1Input[e.key] = true;
            }
        });
        window.addEventListener('keyup', (e: KeyboardEvent) => {
            if (player1Input.hasOwnProperty(e.key)) {
                player1Input[e.key] = false;
            }
        });

        gameLoopStart();
        stopwatch1Start();
    });


    // ################
    // # サブルーチン #
    // ################

    /**
     * ゲームのメインループ開始
     */
    function gameLoopStart() : void {
        const update = () => {
            player1MotionWait.value -= 1;

            if (player1MotionWait.value==0) {
                player1Motion.value["xAxis"] = 0;    // クリアー
                player1Motion.value["yAxis"] = 0;
            }
            
            // 入力（上下左右への移動）をモーションに変換
            if (player1MotionWait.value<=0) {   // ウェイトが無ければ、入力を受け付ける。

                // 位置のリセット
                if (player1Input[" "]) {
                    player1Top.value = 1 * board1SquareHeight;
                    player1Left.value = 1 * board1SquareWidth;
                }

                // 移動
                if (player1Input.ArrowLeft) {
                    player1Motion.value["xAxis"] = commonSpriteMotionLeft; // 左
                }

                if (player1Input.ArrowRight) {
                    player1Motion.value["xAxis"] = commonSpriteMotionRight;  // 右
                }

                if (player1Input.ArrowUp) {
                    player1Motion.value["yAxis"] = commonSpriteMotionUp;   // 上
                }

                if (player1Input.ArrowDown) {
                    player1Motion.value["yAxis"] = commonSpriteMotionDown;   // 下
                }

                if (player1Motion.value["xAxis"]!=0 || player1Motion.value["yAxis"]!=0) {
                    player1MotionWait.value = 16;    // フレーム数を設定
                }
            }

            // 移動処理
            // 斜め方向の場合、上下を優先する。
            if (player1Motion.value["xAxis"]==1) {   // 右
                player1Frames.value = player1SourceFrames["right"]

                if (player1Left.value < board1lastFileIndex * board1SquareWidth) {    // 境界チェック
                    player1Left.value += player1Speed.value;
                }
            } else if (player1Motion.value["xAxis"]==-1) {  // 左
                player1Frames.value = player1SourceFrames["left"]

                if (0 < player1Left.value) {    // 境界チェック
                    player1Left.value -= player1Speed.value;
                }
            }

            if (player1Motion.value["yAxis"]==-1) {  // 上
                player1Frames.value = player1SourceFrames["up"]

                if (0 < player1Top.value) {    // 境界チェック
                    player1Top.value -= player1Speed.value;
                }
            } else if (player1Motion.value["yAxis"]==1) {   // 下
                player1Frames.value = player1SourceFrames["down"]

                if (player1Top.value < board1lastRankIndex * board1SquareHeight) {    // 境界チェック
                    player1Top.value += player1Speed.value;
                }
            }

            // 次のフレーム
            requestAnimationFrame(update);
        };

        // 初回呼び出し
        requestAnimationFrame(update);
    }


    /**
     * ストップウォッチ１開始
     */
    function stopwatch1Start() : void {
        // 既にタイマーが動いてたら何もしない
        if (stopwatch1TimerId.value) return;

        // requestAnimationFrameで約16.67ms（60fps）ごとにカウントアップ
        const tick = () => {
            stopwatch1Count.value += 1;
            stopwatch1TimerId.value = requestAnimationFrame(tick);
        };
        stopwatch1TimerId.value = requestAnimationFrame(tick);
    }

</script>

<style scoped>
    div.cursor {
        position: relative; width:32px; height:32px;
    }
</style>
