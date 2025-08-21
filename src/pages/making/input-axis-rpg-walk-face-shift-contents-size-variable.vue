<template>

    <!-- ボタンの押しっぱなし機能 -->
    <button-repeat ref="buttonRepeat1Ref"/>

    <h4><span class="parent-header">ＲＰＧの歩行グラフィック　＞　</span>数字柄のシフト、数字柄のサイズ可変</h4>
    <section class="sec-4">
        <p>キーボード操作方法</p>
        <ul>
            <li>
                <v-btn class="code-key hidden"/>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="buttonRepeat1Ref?.start($event, onUpButtonPressed);"
                    @touchend="buttonRepeat1Ref?.stop(onUpButtonReleased);"
                    @touchcancel="buttonRepeat1Ref?.stop(onUpButtonReleased);"
                    @touchleave="buttonRepeat1Ref?.stop(onUpButtonReleased);"
                    @mousedown.prevent="buttonRepeat1Ref?.handleMouseDown($event, onUpButtonPressed)"
                    @mouseup="buttonRepeat1Ref?.stop(onUpButtonReleased);"
                    @mouseleave="buttonRepeat1Ref?.stop(onUpButtonReleased);"
                >↑</v-btn>
                <br/>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="buttonRepeat1Ref?.start($event, onLeftButtonPressed);"
                    @touchend="buttonRepeat1Ref?.stop(onLeftButtonReleased);"
                    @touchcancel="buttonRepeat1Ref?.stop(onLeftButtonReleased);"
                    @touchleave="buttonRepeat1Ref?.stop(onLeftButtonReleased);"
                    @mousedown.prevent="buttonRepeat1Ref?.handleMouseDown($event, onLeftButtonPressed)"
                    @mouseup="buttonRepeat1Ref?.stop(onLeftButtonReleased);"
                    @mouseleave="buttonRepeat1Ref?.stop(onLeftButtonReleased);"
                >←</v-btn>
                <v-btn class="code-key hidden"/>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="buttonRepeat1Ref?.start($event, onRightButtonPressed);"
                    @touchend="buttonRepeat1Ref?.stop(onRightButtonReleased);"
                    @touchcancel="buttonRepeat1Ref?.stop(onRightButtonReleased);"
                    @touchleave="buttonRepeat1Ref?.stop(onRightButtonReleased);"
                    @mousedown.prevent="buttonRepeat1Ref?.handleMouseDown($event, onRightButtonPressed)"
                    @mouseup="buttonRepeat1Ref?.stop(onRightButtonReleased);"
                    @mouseleave="buttonRepeat1Ref?.stop(onRightButtonReleased);"
                >→</v-btn>
                　…　上下左右に動かすぜ！
                <br/>
                <v-btn class="code-key hidden"/>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="buttonRepeat1Ref?.start($event, onDownButtonPressed);"
                    @touchend="buttonRepeat1Ref?.stop(onDownButtonReleased);"
                    @touchcancel="buttonRepeat1Ref?.stop(onDownButtonReleased);"
                    @touchleave="buttonRepeat1Ref?.stop(onDownButtonReleased);"
                    @mousedown.prevent="buttonRepeat1Ref?.handleMouseDown($event, onDownButtonPressed)"
                    @mouseup="buttonRepeat1Ref?.stop(onDownButtonReleased);"
                    @mouseleave="buttonRepeat1Ref?.stop(onDownButtonReleased);"
                >↓</v-btn>
                <br/>
            </li>
            <li>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="buttonRepeat1Ref?.start($event, onSpaceButtonPressed);"
                    @touchend="buttonRepeat1Ref?.stop(onSpaceButtonReleased);"
                    @touchcancel="buttonRepeat1Ref?.stop(onSpaceButtonReleased);"
                    @touchleave="buttonRepeat1Ref?.stop(onSpaceButtonReleased);"
                    @mousedown.prevent="buttonRepeat1Ref?.handleMouseDown($event, onSpaceButtonPressed)"
                    @mouseup="buttonRepeat1Ref?.stop(onSpaceButtonReleased);"
                    @mouseleave="buttonRepeat1Ref?.stop(onSpaceButtonReleased);"
                >（スペース）</v-btn>
                　…　位置を最初の状態に戻すぜ。
            </li>
        </ul>
        <br/>

        <!-- ストップウォッチ。デバッグに使いたいときは、 display: none; を消してください。 -->
        <stopwatch
            ref="stopwatch1Ref"
            v-on:countUp="(countNum) => { stopwatch1Count = countNum; }"
            style="display: none;" />

        <v-slider
            label="列数"
            v-model="printing1FileNum"
            :min="printing1FileMin"
            :max="printing1FileMax"
            step="1"
            showTicks="always"
            thumbLabel="always"
            @click="focusRemove()" />
        <v-slider
            label="行数"
            v-model="printing1RankNum"
            :min="printing1RankMin"
            :max="printing1RankMax"
            step="1"
            showTicks="always"
            thumbLabel="always"
            @click="focusRemove()" />
        <v-switch
            v-model="appIsLooping"
            :label="appIsLooping ? '端でループ中' : '端でループしていません'"
            color="green"
            inset
            @click="focusRemove()" />
        <!-- フォーカスを外すためのダミー・ボタンです -->
        <v-btn ref="noopButton">何もしないボタン</v-btn>

        <div :style="board1Style">

            <!--
                グリッド
                NOTE: ループカウンターは 1 から始まるので、1～9の9個のセルを作成。
            -->
            <div v-for="i in board1Area" :key="i"
                :style="getSquareStyle(i - 1)">{{ getFaceNumber(i - 1) }}</div>

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

        <p>👆 上にあるスライダーバーを動かして、タイルに表示される数字を広げたり縮めたりしてみようぜ（＾▽＾）！</p>

    </section>

    <br/>
    <h4><span class="parent-header-lights-out">ＲＰＧの歩行グラフィック　＞　</span><span class="parent-header">数字柄のシフト、数字柄のサイズ可変　＞　</span>ソースコード</h4>
    <section class="sec-4">
        <source-link
            pagePath="/making/input-axis-rpg-walk-face-shift-contents-size-variable"/>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, ref } from 'vue';
    // 👆 ［初級者向けのソースコード］では、 reactive は使いません。

    import { VBtn } from 'vuetify/components';


    // ++++++++++++++
    // + 互換性対応 +
    // ++++++++++++++

    import type { CompatibleStyleValue }  from '../../compatibles/compatible-style-value';


    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    // from の階層が上の順、アルファベット順
    import ButtonRepeat from '../../components/ButtonRepeat.vue';
    import SourceLink from '../../components/SourceLink.vue';
    import Stopwatch from '../../components/Stopwatch.vue';
    import TileAnimation from '../../components/TileAnimation.vue';


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


    // ############################
    // # アプリケーション・データ #
    // ############################
    //
    // 今動いているアプリケーションの状態を記録しているデータ。特に可変のもの。
    //

    const appIsLooping = ref<boolean>(false);    // ループ状態を管理（true: ループする, false: ループしない）


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　何もしないボタン +
    // ++++++++++++++++++++++++++++++++++++++

    const noopButton = ref<InstanceType<typeof VBtn> | null>(null);

    // ++++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ボタン押しっぱなし機能 +
    // ++++++++++++++++++++++++++++++++++++++++++++

    const buttonRepeat1Ref = ref<InstanceType<typeof ButtonRepeat> | null>(null);

    // ++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ストップウォッチ +
    // ++++++++++++++++++++++++++++++++++++++

    const stopwatch1Ref = ref<InstanceType<typeof Stopwatch> | null>(null); // Stopwatch のインスタンス
    const stopwatch1Count = ref<number>(0);   // カウントの初期値

    // ++++++++++++++++++++++++
    // + オブジェクト　＞　盤 +
    // ++++++++++++++++++++++++

    const board1SquareWidth = 32;
    const board1SquareHeight = 32;
    const board1FileNum = 5;
    const board1RankNum = 5;
    const board1Area = computed(()=> {  // 盤のマス数
        return board1FileNum * board1RankNum;
    });
    const board1Style = computed<CompatibleStyleValue>(()=>{ // ボードとマスクを含んでいる領域のスタイル
        return {
            position: 'relative',
            left: "0",
            top: "0",
            width: `${commonZoom * board1FileNum * board1SquareWidth}px`,
            height: `${commonZoom * board1RankNum * board1SquareHeight}px`,
        };
    });
    const getSquareStyle = computed<
        (i:number)=>CompatibleStyleValue
    >(() => {
        return (i:number)=>{
            // プレイヤーが初期位置にいる場合の、マスの位置。
            const homeLeft = (i % board1FileNum) * board1SquareWidth;
            const homeTop = Math.floor(i / board1RankNum) * board1SquareHeight;

            return {
                position: 'absolute',
                top: `${homeTop}px`,
                left: `${homeLeft}px`,
                width: `${board1SquareWidth}px`,
                height: `${board1SquareHeight}px`,
                zoom: 4,
                border: `solid 1px ${i % 2 == 0 ? 'darkgray' : 'lightgray'}`,
                textAlign: "center",
            };
        };
    });    

    // ++++++++++++++++++++++++++
    // + オブジェクト　＞　印字 +
    // ++++++++++++++++++++++++**
    //
    // 盤上に表示される数字柄、絵柄など。
    //

    const printing1FileMin = 0;
    const printing1RankMin = 0;
    const printing1FileMax = 10;
    const printing1RankMax = 10;
    const printing1FileNum = ref<number>(board1FileNum);       // 列数
    const printing1RankNum = ref<number>(board1RankNum);       // 行数
    const printing1File = ref<number>(0);    // 印字の左上隅のタイルは、盤タイルの左から何番目か。
    const printing1Rank = ref<number>(0);    // 印字の左上隅のタイルは、盤タイルの上から何番目か。
    const printing1Data = ref<string[]>([]);
    for (let i=0; i<printing1FileMax * printing1RankMax; i++) {
        printing1Data.value.push(i.toString().padStart(2, "0"));
    }

    /**
     * 変換
     * @param index マス番号
     * @returns [筋番号, 段番号]
     */
    function tileIndexToTileFileRank(index: number) : number[] {
        // プレイヤーが右へ１マス移動したら、印字は全行が左へ１つ移動する。
        const file = index % board1FileNum;
        const rank = Math.floor(index / board1RankNum);

        return [file, rank];
    }

    function contentsFileRankToContentsIndex(file: number, rank: number) : number {
        return rank * printing1FileNum.value + file;
    }

    const getFaceNumber = computed(() => {
        // 引数に渡されるのは、［盤のタイル番号］
        return (tileIndex: number)=>{
            let [tileFile, tileRank] = tileIndexToTileFileRank(tileIndex);

            // タイル上のインデックスを、印字上のインデックスへ変換：
            let contentsFile = tileFile - printing1File.value;
            let contentsRank = tileRank - printing1Rank.value;

            if (appIsLooping.value) {
                contentsFile = euclideanMod(contentsFile, printing1FileNum.value); // プレイヤーが右へ１マス移動したら、印字は全行が左へ１つ移動する。
                contentsRank = euclideanMod(contentsRank, printing1RankNum.value); // プレイヤーが下へ１マス移動したら、印字は全行が上へ１つ移動する。
            } else {
                // 印字のサイズの範囲外になるところには、"-" でも表示しておく
                if (contentsFile < 0 || printing1FileNum.value <= contentsFile || contentsRank < 0 || printing1RankNum.value <= contentsRank) {
                    return "-";
                }
            }

            // 印字上の位置が示すデータを返す
            const contentsIndex = contentsFileRankToContentsIndex(contentsFile, contentsRank);
            return  printing1Data.value[contentsIndex];
        };
    });    

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　プレイヤー +
    // ++++++++++++++++++++++++++++++++

    const player1Left: number = 2 * board1SquareWidth;       // スプライトのX座標
    const player1Top: number = 2 * board1SquareHeight;       // スプライトのY座標
    const player1Input = <Record<string, boolean>>{          // 入力
        " ": false, ArrowUp: false, ArrowRight: false, ArrowDown: false, ArrowLeft: false
    };
    const player1AnimationSlow = ref<number>(8);    // アニメーションのスローモーションの倍率の初期値
    const player1AnimationWalkingFrames = 16;       // 歩行フレーム数
    const player1Style = computed(() => ({
        top: `${player1Top}px`,
        left: `${player1Left}px`,
        zoom: commonZoom,
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
    const player1MotionWait = ref(0);  // TODO: モーション入力拒否時間。入力キーごとに用意したい。
    const player1Motion = ref<Record<string, number>>({  // モーションへの入力
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
        stopwatch1Ref.value?.timerStart();  // タイマーをスタート
    });


    // ################
    // # サブルーチン #
    // ################

    /**
     * ユークリッド剰余
     * 
     * NOTE: 負の剰余は数学の定義では［ユークリッド剰余］と、［トランケート剰余］の２種類あって、プログラム言語ごとにどっちを使ってるか違うから注意。
     * TypeScript では［トランケート剰余］なので、［ユークリッド剰余］を使いたいときはこれを使う。
     */
    function euclideanMod(a: number, b: number): number {
        return ((a % b) + b) % b;
    }


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
                    printing1File.value = 0;
                    printing1Rank.value = 0;
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
                    player1MotionWait.value = player1AnimationWalkingFrames;
                }

                // 移動処理
                // 斜め方向の場合、上下を優先する。
                if (player1Motion.value["xAxis"]==1) {   // 右
                    player1Frames.value = player1SourceFrames["right"]
                    printing1File.value -= 1;   // 印字の方をスクロールさせる
                } else if (player1Motion.value["xAxis"]==-1) {  // 左
                    player1Frames.value = player1SourceFrames["left"]
                    printing1File.value += 1;
                }

                if (player1Motion.value["yAxis"]==-1) {  // 上
                    player1Frames.value = player1SourceFrames["up"]
                    printing1Rank.value += 1;
                } else if (player1Motion.value["yAxis"]==1) {   // 下
                    player1Frames.value = player1SourceFrames["down"]
                    printing1Rank.value -= 1;
                }
            }

            // 次のフレーム
            requestAnimationFrame(update);
        };

        // 初回呼び出し
        requestAnimationFrame(update);
    }


    /**
     * フォーカスを外すのが上手くいかないため、［何もしないボタン］にフォーカスを合わせます。
     */
    function focusRemove() : void {
        if (noopButton.value) {
            noopButton.value.$el.focus();    // $el は、<v-btn> 要素の中の <button> 要素。
        }
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

</script>

<style scoped>
    div.cursor {
        position: relative; width:32px; height:32px;
    }
</style>
