<template>

    <!-- ボタン機能拡張 -->
    <button-20250822 ref="button1Ref"/>

    <h5><span class="parent-header">ＲＰＧの歩行グラフィック　＞　</span>自機ウォーキング・遠ざかるグリッド吸着</h5>
    <section class="sec-5">
        <br/>

        <!-- ストップウォッチ。デバッグに使いたいときは、 display: none; を消してください。 -->
        <stopwatch
            ref="stopwatch1Ref"
            v-on:countUp="(countNum: number) => { stopwatch1Count = countNum; }"
            style="display: none;" />

        <!-- 盤領域
            自機より３倍角ぐらい大きく。
        -->
        <div
            class="board"
            :style="board1Style">

            <!-- 自機のホーム１ -->
            <div
                class="playerHome"
                :style="playerHome1Style">
            </div>

            <!-- スクウェアのグリッド -->
            <div
                v-for="i in board1Area"
                :key="i"
                class="square"
                :style="getSquareStyle(i - 1)">
            </div>

            <!-- 自機１ -->
            <tile-animation
                :frames="player1Frames"
                tilemapUrl="/img/making/202508__warabenture__15-1612-kifuwarabe-o1o0.png"
                :slow="player1AnimationSlow"
                :time="stopwatch1Count"
                class="player"
                :style="player1Style" />
        </div>
        <br/>

        <!-- タッチパネルでも操作できるように、ボタンを置いておきます。キーボードの操作説明も兼ねます。 -->
        <p>キーボード操作方法</p>
        <ul>
            <li>
                <v-btn class="code-key hidden"/>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="button1Ref?.press($event, onUpButtonPressed, {repeat: true});"
                    @touchend="button1Ref?.release(onUpButtonReleased);"
                    @touchcancel="button1Ref?.release(onUpButtonReleased);"
                    @touchleave="button1Ref?.release(onUpButtonReleased);"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, onUpButtonPressed, {repeat: true})"
                    @mouseup="button1Ref?.release(onUpButtonReleased);"
                    @mouseleave="button1Ref?.release(onUpButtonReleased);"
                >↑</v-btn>
                <br/>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="button1Ref?.press($event, onLeftButtonPressed, {repeat: true});"
                    @touchend="button1Ref?.release(onLeftButtonReleased);"
                    @touchcancel="button1Ref?.release(onLeftButtonReleased);"
                    @touchleave="button1Ref?.release(onLeftButtonReleased);"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, onLeftButtonPressed, {repeat: true})"
                    @mouseup="button1Ref?.release(onLeftButtonReleased);"
                    @mouseleave="button1Ref?.release(onLeftButtonReleased);"
                >←</v-btn>
                <v-btn class="code-key hidden"/>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="button1Ref?.press($event, onRightButtonPressed, {repeat: true});"
                    @touchend="button1Ref?.release(onRightButtonReleased);"
                    @touchcancel="button1Ref?.release(onRightButtonReleased);"
                    @touchleave="button1Ref?.release(onRightButtonReleased);"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, onRightButtonPressed, {repeat: true})"
                    @mouseup="button1Ref?.release(onRightButtonReleased);"
                    @mouseleave="button1Ref?.release(onRightButtonReleased);"
                >→</v-btn>
                <br/>
                <v-btn class="code-key hidden"/>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="button1Ref?.press($event, onDownButtonPressed, {repeat: true});"
                    @touchend="button1Ref?.release(onDownButtonReleased);"
                    @touchcancel="button1Ref?.release(onDownButtonReleased);"
                    @touchleave="button1Ref?.release(onDownButtonReleased);"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, onDownButtonPressed, {repeat: true})"
                    @mouseup="button1Ref?.release(onDownButtonReleased);"
                    @mouseleave="button1Ref?.release(onDownButtonReleased);"
                >↓</v-btn>
                　…　上下左右に動かすぜ！
                <br/>
            </li>
            <li>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="button1Ref?.press($event, onSpaceButtonPressed, {repeat: true});"
                    @touchend="button1Ref?.release(onSpaceButtonReleased);"
                    @touchcancel="button1Ref?.release(onSpaceButtonReleased);"
                    @touchleave="button1Ref?.release(onSpaceButtonReleased);"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, onSpaceButtonPressed, {repeat: true})"
                    @mouseup="button1Ref?.release(onSpaceButtonReleased);"
                    @mouseleave="button1Ref?.release(onSpaceButtonReleased);"
                >（スペース）</v-btn>
                　…　自機をホームに戻すぜ。
            </li>
            <li>
                <!-- フォーカスを外すためのダミー・ボタンです -->
                <v-btn
                    class="noop-key"
                    ref="noopButton"
                    v-tooltip="'PCでのマウス操作で、フォーカスがコントロールに残って邪魔になるときは、このボタンを押してくれだぜ'"
                >何もしないボタン</v-btn><br/>
            </li>
        </ul>

        <br/>
        <!-- 設定パネル１ -->
        <v-btn
            class="code-key"
            @touchstart.prevent="button1Ref?.press($event, onConfig1ButtonPressed);"
            @touchend="button1Ref?.release();"
            @touchcancel="button1Ref?.release();"
            @touchleave="button1Ref?.release();"
            @mousedown.prevent="button1Ref?.handleMouseDown($event, onConfig1ButtonPressed)"
            @mouseup="button1Ref?.release();"
            @mouseleave="button1Ref?.release();"
        >{{ config1IsShowing ? '⚙️設定を終わる' : '⚙️設定を表示' }}</v-btn>
        <section v-if="config1IsShowing" class="sec-1">
            <br/>
            <v-slider
                label="ズーム"
                v-model="appZoom"
                :min="0.5"
                :max="4"
                step="0.5"
                showTicks="always"
                thumbLabel="always" />
            <v-slider
                label="スローモーション"
                v-model="player1AnimationSlow"
                :min="1"
                :max="16"
                step="1"
                showTicks="always"
                thumbLabel="always" />
            <v-slider
                label="自機のホーム　＞　筋"
                v-model="playerHome1File"
                :min="0"
                :max="2"
                step="1"
                showTicks="always"
                thumbLabel="always" />
            <v-slider
                label="自機のホーム　＞　段"
                v-model="playerHome1Rank"
                :min="0"
                :max="2"
                step="1"
                showTicks="always"
                thumbLabel="always" />
            <v-slider
                label="水平方向のタイル数"
                v-model="board1FileNum"
                :min="0"
                :max="6"
                step="1"
                showTicks="always"
                thumbLabel="always" />
            <v-slider
                label="垂直方向のタイル数"
                v-model="board1RankNum"
                :min="0"
                :max="6"
                step="1"
                showTicks="always"
                thumbLabel="always" />
            <br/>
        </section>
    </section>

    <br/>
    <h6><span class="parent-header-lights-out">ＲＰＧの歩行グラフィック　＞　</span><span class="parent-header">自機ウォーキング・遠ざかるグリッド吸着　＞　</span>ソースコード</h6>
    <section class="sec-6">
        <source-link
            pagePath="/reference/making/input-axis/rpg-walk-player-grid-moveaway-1"/>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, ref } from 'vue';
    // 👆 ［初級者向けのソースコード］では、 reactive は使いません。
    import type { Ref } from 'vue';

    // ++++++++++++++
    // + 互換性対応 +
    // ++++++++++++++

    import type { CompatibleStyleValue }  from '../../../../compatibles/compatible-style-value';

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    // from の階層が上の順、アルファベット順
    import Button20250822 from '@/components/Button20250822.vue';
    import SourceLink from '@/components/SourceLink.vue';
    import Stopwatch from '@/components/Stopwatch.vue';
    import TileAnimation from '@/components/TileAnimation.vue';

    // ++++++++++++++++++++++++++++++++++++
    // + インポート　＞　インターフェース +
    // ++++++++++++++++++++++++++++++++++++

    import type Rectangle from '../../../../interfaces/Rectangle';


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //

    const commonSpriteMotionLeft = -1;  // モーション（motion）定数。左。
    const commonSpriteMotionUp = -1;
    const commonSpriteMotionRight = 1;
    const commonSpriteMotionDown = 1;


    // ############################
    // # アプリケーション・データ #
    // ############################
    //
    // 今動いているアプリケーションの状態を記録しているデータ。特に可変のもの。
    //

    const appZoom = ref<number>(4);    // ズーム


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ボタン機能拡張 +
    // ++++++++++++++++++++++++++++++++++++

    const button1Ref = ref<InstanceType<typeof Button20250822> | null>(null);

    // ++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ストップウォッチ１ +
    // ++++++++++++++++++++++++++++++++++++++++

    const stopwatch1Ref = ref<InstanceType<typeof Stopwatch> | null>(null); // Stopwatch のインスタンス
    const stopwatch1Count = ref<number>(0);   // カウントの初期値

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　設定パネル１ +
    // ++++++++++++++++++++++++++++++++++

    const config1IsShowing = ref<boolean>(false);    // 設定を表示中

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　タイル盤１ +
    // ++++++++++++++++++++++++++++++++

    const tileBoard1TileWidth = 32;
    const tileBoard1TileHeight = 32;
    const board1FileNum = ref<number>(3);    // 筋の数
    const board1RankNum = ref<number>(3);    // 段の数
    const board1Area = computed(()=> {  // 盤のマス数
        return board1FileNum.value * board1RankNum.value;
    });
    const board1Style = computed<CompatibleStyleValue>(()=>{ // ボードとマスクを含んでいる領域のスタイル
        const boardWidth = board1FileNum.value * tileBoard1TileWidth;
        const boardHeight = board1RankNum.value * tileBoard1TileHeight;
        const boardWidthContainsPlayer = (playerHome1File.value + 1) * tileBoard1TileWidth;
        const boardHeightContainsPlayer = (playerHome1Rank.value + 1) * tileBoard1TileHeight;
        const width = boardWidth >= boardWidthContainsPlayer ? boardWidth : boardWidthContainsPlayer;
        const height = boardHeight >= boardHeightContainsPlayer ? boardHeight : boardHeightContainsPlayer;
        return {
            width: `${width}px`,
            height: `${height}px`,
            zoom: appZoom.value,
        };
    });
    const getSquareStyle = computed<
        (i:number)=>CompatibleStyleValue
    >(() => {
        return (i:number)=>{
            return {
                left: `${(i % board1FileNum.value) * tileBoard1TileWidth}px`,
                top: `${Math.floor(i / board1FileNum.value) * tileBoard1TileHeight}px`,
                width: `${tileBoard1TileWidth}px`,
                height: `${tileBoard1TileHeight}px`,
                border: `solid 1px ${i % 2 == 0 ? 'darkgray' : 'lightgray'}`,
            };
        };
    });

    // ++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　自機のホーム１ +
    // ++++++++++++++++++++++++++++++++++++
    //
    // このサンプルでは、ピンク色に着色しているマスです。
    //

    const playerHome1File = ref<number>(1);    // ホーム
    const playerHome1Rank = ref<number>(1);
    const playerHome1Left = computed(()=>{
        return playerHome1File.value * tileBoard1TileWidth;
    });
    const playerHome1Top = computed(()=>{
        return playerHome1Rank.value * tileBoard1TileHeight;
    });
    const playerHome1Style = computed<CompatibleStyleValue>(()=>{
        return {
            left: `${playerHome1Left.value}px`,
            top: `${playerHome1Top.value}px`,
            width: `${tileBoard1TileWidth}px`,
            height: `${tileBoard1TileHeight}px`,
        };
    });

    // ++++++++++++++++++++++++++++
    // + オブジェクト　＞　自機１ +
    // ++++++++++++++++++++++++++++

    const player1Width = tileBoard1TileWidth;
    const player1Height = tileBoard1TileHeight;
    const player1Left = ref<number>(playerHome1Left.value);    // スプライトの位置
    const player1Top = ref<number>(playerHome1Top.value);
    const player1Speed = ref<number>(2);    // 移動速度
    const player1Input = <Record<string, boolean>>{    // 入力
        " ": false, ArrowUp: false, ArrowRight: false, ArrowDown: false, ArrowLeft: false
    };
    const player1AnimationSlow = ref<number>(8);    // アニメーションを何倍遅くするか
    const player1Style = computed<CompatibleStyleValue>(() => ({
        left: `${player1Left.value}px`,
        top: `${player1Top.value}px`,
        width: `${player1Width}px`,
        height: `${player1Height}px`,
    }));
    const player1SourceFrames = {   // キャラクターの向きと、歩行タイルの指定
        left:[  // 左向き
            {top:  3 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  3 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  3 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  3 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
        ],
        up:[    // 上向き
            {top:  0 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  0 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  0 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  0 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
        ],
        right:[ // 右向き
            {top:  1 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  1 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  1 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  1 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
        ],
        down:[  // 下向き
            {top:  2 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  2 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  2 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  2 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
        ],
    };
    const player1Frames : Ref<Rectangle[]> = ref(player1SourceFrames["down"]);
    const player1AnimationWalkingFrames = 16;       // 歩行フレーム数
    const player1MotionWait = ref<number>(0);   // 排他的モーション時間。
    const player1Motion = ref<Record<string, number>>({    // モーションへの入力
        goToRight: 0,   // 負なら左、正なら右
        goToBottom: 0,   // 負なら上、正なら下
    });


    // ##########
    // # 開始時 #
    // ##########

    onMounted(() => {
        // キーボード操作の設定
        //
        //      window はブラウザーのオブジェクトなので、（サーバー側ではプリレンダリングできないので）マウント後にアクセスします。
        //
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            // ［↑］［↓］キーの場合
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
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
        stopwatch1Ref.value?.timerStart();  // タイマーをスタート
    });


    // ################
    // # サブルーチン #
    // ################

    /**
     * ゲームのメインループ開始
     */
    function gameLoopStart() : void {
        const update = () => {
            player1MotionWait.value -= 1;    // モーション・タイマー

            if (player1MotionWait.value==0) {
                player1Motion.value["goToRight"] = 0;    // クリアー
                player1Motion.value["goToBottom"] = 0;
            }

            // ++++++++++++++++++++++++++++++
            // + キー入力をモーションに変換 +
            // ++++++++++++++++++++++++++++++
            if (player1MotionWait.value<=0) {   // ウェイトが無ければ、入力を受け付ける。

                // 位置のリセット
                if (player1Input[" "]) {
                    player1Top.value = 1 * tileBoard1TileHeight;
                    player1Left.value = 1 * tileBoard1TileWidth;
                }

                // 移動
                if (player1Input.ArrowLeft) {
                    player1Motion.value["goToRight"] = commonSpriteMotionLeft; // 左
                }

                if (player1Input.ArrowRight) {
                    player1Motion.value["goToRight"] = commonSpriteMotionRight;  // 右
                }

                if (player1Input.ArrowUp) {
                    player1Motion.value["goToBottom"] = commonSpriteMotionUp;   // 上
                }

                if (player1Input.ArrowDown) {
                    player1Motion.value["goToBottom"] = commonSpriteMotionDown;   // 下
                }

                if (player1Motion.value["goToRight"]!=0 || player1Motion.value["goToBottom"]!=0) {
                    player1MotionWait.value = player1AnimationWalkingFrames;
                }
            }

            // ++++++++++++++
            // + 移動を処理 +
            // ++++++++++++++

            // 斜め方向の場合、上下を優先する。
            if (player1Motion.value["goToRight"]==1) {    // 右
                player1Frames.value = player1SourceFrames["right"]    // 向きを変える
                player1Left.value += player1Speed.value;
            } else if (player1Motion.value["goToRight"]==-1) {    // 左
                player1Frames.value = player1SourceFrames["left"]
                player1Left.value -= player1Speed.value;
            }

            if (player1Motion.value["goToBottom"]==-1) {    // 上
                player1Frames.value = player1SourceFrames["up"]
                player1Top.value -= player1Speed.value;
            } else if (player1Motion.value["goToBottom"]==1) {    // 下
                player1Frames.value = player1SourceFrames["down"]
                player1Top.value += player1Speed.value;
            }

            // 次のフレーム
            requestAnimationFrame(update);
        };

        // 初回呼び出し
        requestAnimationFrame(update);
    }


    /**
     * 左。
     */
    function onLeftButtonPressed() : void {
        player1Input.ArrowLeft = true;
    }


    function onLeftButtonReleased() : void {
        player1Input.ArrowLeft = false;
    }


    /**
     * 上。
     */
    function onUpButtonPressed() : void {
        player1Input.ArrowUp = true;
    }


    function onUpButtonReleased() : void {
        player1Input.ArrowUp = false;
    }


    /**
     * 右。
     */
    function onRightButtonPressed() : void {
        player1Input.ArrowRight = true;
    }


    function onRightButtonReleased() : void {
        player1Input.ArrowRight = false;
    }


    /**
     * 下。
     */
    function onDownButtonPressed() : void {
        player1Input.ArrowDown = true;
    }


    function onDownButtonReleased() : void {
        player1Input.ArrowDown = false;
    }


    /**
     * スペース・キー。
     */
    function onSpaceButtonPressed() : void {
        player1Input[" "] = true;
    }


    function onSpaceButtonReleased() : void {
        player1Input[" "] = false;
    }


    /**
     * ［設定パネル１］を開くボタン。
     */
    function onConfig1ButtonPressed() : void {
        config1IsShowing.value = !config1IsShowing.value;
    }

</script>

<style scoped>
    div.board { /* 盤１ */
        position: relative;
    }
    div.square {    /* スクウェア */
        position: absolute;
    }
    div.playerHome {    /* 自機のホーム１ */
        position: absolute;
        background-color: lightpink;
    }
    div.player {    /* 自機１ */
        position: relative;
        image-rendering: pixelated;
    }
</style>
