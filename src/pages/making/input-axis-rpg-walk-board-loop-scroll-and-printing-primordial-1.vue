<template>

    <!-- ボタン機能拡張 -->
    <button-20250822 ref="button1Ref"/>

    <h4><span class="parent-header">ＲＰＧの歩行グラフィック　＞　</span>盤の循環スクロール、数字柄の原始的シフト</h4>
    <section class="sec-4">
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
                　…　印字を、上下左右キーの入力とは逆方向に動かすぜ！
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
                　…　印字の位置を最初に有ったところに戻すぜ。
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

        <!-- ストップウォッチ。デバッグに使いたいときは、 display: none; を消してください。 -->
        <stopwatch
            ref="stopwatch1Ref"
            v-on:countUp="(countNum) => { stopwatch1Count = countNum; }"
            style="display: none;" />

        <div :style="board1Style">

            <!--
                タイルのグリッド。
                NOTE: ループカウンターは 1 から始まるので、1～9の9個のセルを作成。
            -->
            <div v-for="i in board1Area" :key="i"
                :style="getSquareStyle(i - 1)">{{ getPrintingNumber(i - 1) }}</div>

            <!-- 自機１ -->
            <tile-animation
                :frames="player1Frames"
                tilemapUrl="/img/making/202508__warabenture__15-1612-kifuwarabe-o1o0.png"
                :slow="player1AnimationSlow"
                :time="stopwatch1Count"
                class="cursor"
                :style="player1Style"
                style="image-rendering: pixelated;" /><br/>
            
            <!-- 半透明のマスク -->
            <div
                :style="`
                    width:${board1WithMaskFileNum * board1SquareWidth}px;
                    height:${board1WithMaskRankNum * board1SquareHeight}px;
                    border-top: solid ${board1WithMaskSizeSquare * board1SquareHeight}px rgba(0,0,0,0.5);
                    border-right: solid ${(board1WithMaskSizeSquare + board1WithMaskBottomRightMargin) * board1SquareWidth}px rgba(0,0,0,0.5);
                    border-bottom: solid ${(board1WithMaskSizeSquare + board1WithMaskBottomRightMargin) * board1SquareHeight}px rgba(0,0,0,0.5);
                    border-left: solid ${board1WithMaskSizeSquare * board1SquareWidth}px rgba(0,0,0,0.5);
                    zoom:${commonZoom};
                `"
                style="position:absolute; left:0; top:0; image-rendering: pixelated;"></div>

        </div>

        <div>
            印字x={{ printing1Left }}　｜　人x={{ player1HomeRank * board1SquareHeight }}<br/>
            印字y={{ printing1Top  }}　｜　人y={{ player1HomeRank * board1SquareHeight  }}<br/>
        </div>
        <br/>

        <p>
        	👆 ヨコ：１０、タテ：１０のサイズのフィールドを歩いてみてくれだぜ（＾▽＾）！<br/>
        	盤より大きな数字柄がシフトしているのを見てくれだぜ（＾▽＾）！<br/>
        </p>
    </section>

    <br/>
    <h4><span class="parent-header-lights-out">ＲＰＧの歩行グラフィック　＞　</span><span class="parent-header">盤の循環スクロール、数字柄の原始的シフト　＞　</span>ソースコード</h4>
    <section class="sec-4">
        <source-link
            pagePath="/making/input-axis-rpg-walk-board-loop-scroll-and-printing-primordial-1"/>
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
    import Button20250822 from '../../components/Button20250822.vue';
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
    const commonSpriteMotionLeft = -1;  // モーション（motion）定数。左。
    const commonSpriteMotionTop = -1;
    const commonSpriteMotionRight = 1;
    const commonSpriteMotionBottom = 1;


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

    const button1Ref = ref<InstanceType<typeof Button20250822> | null>(null);

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
    // ※　盤およびその各タイルは、決まりきった位置でオーバーラッピングを繰り返すだけです。座標が移動することはありません。
    const board1WithMaskSizeSquare: number = 1;    // マスクの幅（単位：マス）
    const board1WithMaskBottomRightMargin: number = 1;          // マスクは右下に１マス分多く作ります。
    const board1WithMaskFileNum = board1FileNum + board1WithMaskBottomRightMargin   // マスク付きの場合の列数。右側の多めの１マスを含む。
    const board1WithMaskRankNum = board1RankNum + board1WithMaskBottomRightMargin
    const board1Style = computed<CompatibleStyleValue>(()=>{ // ボードとマスクを含んでいる領域のスタイル
        return {
            position: 'relative',
            left: "0",
            top: "0",
            width: `${commonZoom * board1WithMaskFileNum * board1SquareWidth}px`,
            height: `${commonZoom * board1WithMaskRankNum * board1SquareHeight}px`,
        };
    });
    const getSquareStyle = computed<
        (i:number)=>CompatibleStyleValue
    >(() => {
        return (i:number)=>{
            // プレイヤーが初期位置にいる場合の、マスの位置。
            const homeLeft = (i % board1FileNum) * board1SquareWidth;
            const homeTop = Math.floor(i / board1FileNum) * board1SquareHeight;
            const bwPx = (board1FileNum * board1SquareWidth);   // 盤の横幅（ピクセル）。右側と下側に余分に付いている１マス分のマスクを含まない。
            const bhPx = (board1RankNum * board1SquareHeight);

            // NOTE: 循環するだけなら、［剰余］を使えばいける。
            // 盤の左端列を、右端列へ移動させる。
            const offsetLeftLoop = euclideanMod(homeLeft + printing1Left.value + bwPx, bwPx) - homeLeft;
            const offsetTopLoop = euclideanMod(homeTop + printing1Top.value + bhPx, bhPx) - homeTop;

            return {
                position: 'absolute',
                left: `${homeLeft + offsetLeftLoop}px`,
                top: `${homeTop + offsetTopLoop}px`,
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

    const printing1FileNum = 10;    // 列数
    const printing1RankNum = 10;    // 行数
    // のちのち自機を１ドットずつ動かすことを考えると、 File, Rank ではデジタルになってしまうので、 Left, Top で指定したい。
    const printing1Left = ref<number>(0);
    const printing1Top = ref<number>(0);
    const printing1Speed = ref<number>(2);     // 移動速度（単位：ピクセル）
    const printing1Data = ref<string[]>([]);
    for (let i=0; i<printing1FileNum * printing1RankNum; i++) {
        printing1Data.value.push(i.toString().padStart(2, "0"));
    }
    const printing1Motion = ref<Record<string, number>>({  // 印字への入力
        wrapAroundRight: 0,   // 負なら左、正なら右
        wrapAroundBottom: 0,   // 負なら上、正なら下
    });
    const printing1FileDelta = computed<number>(()=>{     // 自機の移動量（単位：マス）
        return Math.round(-printing1Left.value / board1SquareWidth);
    });
    const printing1RankDelta = computed<number>(()=>{
        return Math.round(-printing1Top.value / board1SquareHeight);
    });


    /**
     * 変換
     * @param tileIndex マス番号
     * @returns [筋番号, 段番号]
     */
    function tileIndexToTileFileRank(tileIndex: number) : [number, number] {
        // プレイヤーが右へ１マス移動したら、印字は全行が左へ１つ移動する。
        const file = tileIndex % board1FileNum;
        const rank = Math.floor(tileIndex / board1FileNum);

        return [file, rank];
    }


    function printingFileRankToPrintingIndex(file: number, rank: number) : number {
        return rank * printing1FileNum + file;
    }


    /**
     * 👇 例えば以下のような 5x5 の盤があり、タイルにインデックスが振られているとき、
     * 
     *   +----------------+
     *   |  0  1  2  3  4 |
     *   |  5  6  7  8  9 |
     *   | 10 11 12 13 14 |
     *   | 15 16 17 18 19 |
     *   | 20 21 22 23 24 |
     *   +----------------+
     *
     * 👇 プレイヤーが右に移動すると、タイルは以下のようにラップアラウンド（wrap around）する。
     *
     *   +-------------+ +----+
     *   |  1  2  3  4 | |  0 |
     *   |  6  7  8  9 | |  5 |
     *   | 11 12 13 14 | | 10 |
     *   | 16 17 18 19 | | 15 |
     *   | 21 22 23 24 | | 20 |
     *   +-------------+ +----+
     *
     * 👇 同様に、同時に下方向に移動（右下への移動）であった場合、以下のようになるから、
     *
     *   +-------------+ +----+
     *   |  6  7  8  9 | |  5 |
     *   | 11 12 13 14 | | 10 |
     *   | 16 17 18 19 | | 15 |
     *   | 21 22 23 24 | | 20 |
     *   +-------------+ +----+
     *   +-------------+ +----+
     *   |  1  2  3  4 | |  0 |
     *   +-------------+ +----+
     *
     * 👇 元のテーブルに比べて、インデックスがずれてしまう。
     *
     *   +----------------+
     *   |  6  7  8  9  5 |
     *   | 11 12 13 14 10 |
     *   | 16 17 18 19 15 |
     *   | 21 22 23 24 20 |
     *   |  1  2  3  4  0 |
     *   +----------------+
     *
     * 👇 しかし、移動量から、元のインデックスに紐づけよう、というものだ。
     * 
     *   6→ 0   7→ 1   8→ 2   9→ 3  10→ 4
     *  11→ 5  12→ 6  13→ 7  14→ 8  15→ 9
     *  16→10  17→11  18→12  19→13  15→14
     *  21→15  22→16  23→17  24→18  20→19
     *   1→20   2→21   3→22   4→23   0→24
     */
    function getFixTileIndex(tileIndex: number) : number {
            //
            // 例えば、盤がヨコ、タテ 5×5 のとき、
            const bw = board1FileNum; // 幅 (例: 5)
            const bh = board1RankNum; // 高さ (例: 5)
            //
            // タイルのインデックスは下図のように振られるようにしたい。
            // +----------------+
            // |  0  1  2  3  4 |
            // |  5  6  7  8  9 |
            // | 10 11 12 13 14 |
            // | 15 16 17 18 19 |
            // | 20 21 22 23 24 |
            // +----------------+
            //
            // とりあえず、上下左右について、移動量は以下の変数に格納しているとする。
            const rotH = printing1FileDelta.value; // 水平シフト（単位：マス）
            const rotV = printing1RankDelta.value; // 垂直シフト

            // 移動量を、逆方向に使うことで、巻き戻したときの列、行位置を割り出します。
            // 補正された列
            const tileFile = tileIndex % bw;
            const previousTileFile = tileFile - rotH;
            const fixTileFile = euclideanMod(previousTileFile, bw);

            // 補正された行
            const tileRank = Math.floor(tileIndex / bw);
            const previousTileRank = tileRank - rotV;
            const fixTileRank = euclideanMod(previousTileRank, bh);

            // 列と行を、インデックスに変換します。
            const fixTileIndex = fixTileRank * bw + fixTileFile;
            return fixTileIndex;
    }

    /**
     * 印字。
     */
    const getPrintingNumber = computed(() => {
        return (tileIndex: number)=>{
            const virtualTileIndex = getFixTileIndex(tileIndex);    // 実際のタイル番号を、見た目上のタイルの位置に変換します。

            let [virtualTileFile, virtualTileRank] = tileIndexToTileFileRank(virtualTileIndex);
            const printingFile = virtualTileFile + printing1FileDelta.value;
            const printingRank = virtualTileRank + printing1RankDelta.value;
            const printingIndex = printingFileRankToPrintingIndex(printingFile, printingRank);

            // 印字のサイズの範囲外になるところには、"-" でも表示しておく
            if (printingFile < 0 || printing1FileNum <= printingFile || printingRank < 0 || printing1RankNum <= printingRank) {
                return "-";
            }

            return  printing1Data.value[printingIndex];
        };
    });

    // ++++++++++++++++++++++++++++
    // + オブジェクト　＞　自機１ +
    // ++++++++++++++++++++++++++++

    const player1HomeFile: number = 2;     // 基準位置
    const player1HomeRank: number = 2;
    // ※プレイヤーは移動しません。
    const player1Input = <Record<string, boolean>>{         // 入力
        " ": false, ArrowUp: false, ArrowRight: false, ArrowDown: false, ArrowLeft: false
    };
    const player1AnimationSlow = ref<number>(8);    // アニメーションのスローモーションの倍率の初期値
    const player1AnimationFacingFrames = 1;         // 振り向きフレーム数
    const player1AnimationWalkingFrames = 16;       // 歩行フレーム数
    const player1Style = computed<CompatibleStyleValue>(() => ({
        left: `${player1HomeFile * board1SquareWidth}px`,     // プレイヤーは移動しません。固定位置です。
        top: `${player1HomeRank * board1SquareHeight}px`,
        zoom: commonZoom,
    }));
    const player1SourceFrames = {   // キャラクターの向きと、歩行タイルの指定
        left:[  // 左向き
            {top:  3 * board1SquareHeight, left: 0 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
            {top:  3 * board1SquareHeight, left: 1 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
            {top:  3 * board1SquareHeight, left: 0 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
            {top:  3 * board1SquareHeight, left: 1 * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight },
        ],
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
    };
    const player1Frames = ref(player1SourceFrames["down"]);
    const player1MotionWait = ref(0);  // TODO: モーション入力拒否時間。入力キーごとに用意したい。
    const player1Motion = ref<Record<string, number>>({  // モーションへの入力
        lookRight: 0,     // 向きを変える
        lookBottom: 0,
    });


    // ##########
    // # 開始時 #
    // ##########

    onMounted(() => {
        // キーボードイベント
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
            player1MotionWait.value -= 1;           // モーション・タイマー

            if (player1MotionWait.value==0) {
                // モーションのクリアー
                player1Motion.value["lookRight"] = 0;	// 自機
                player1Motion.value["lookBottom"] = 0;
                printing1Motion.value["wrapAroundRight"] = 0;	// 印字
                printing1Motion.value["wrapAroundBottom"] = 0;
            }
            
            // キー入力をモーションに変換
            if (player1MotionWait.value<=0) {   // ウェイトが無ければ、入力を受け付ける。

                // 位置のリセット
                if (player1Input[" "]) {
                    // ※ 自機の位置は固定なので、自機の位置のリセットはありません。
                    printing1Left.value = 0;                                   // 印字
                    printing1Top.value = 0;
                }

                // 移動関連（単発）
                // 斜め方向の場合、左右を上下で上書きする。（左、右）→（上、下）の順。
                if (player1Input.ArrowLeft) {   // 左
                    player1Motion.value["lookRight"] = commonSpriteMotionLeft;
                    printing1Motion.value["wrapAroundRight"] = commonSpriteMotionRight;   // 印字は、キー入力とは逆向きへ進める
                }

                if (player1Input.ArrowRight) {  // 右
                    player1Motion.value["lookRight"] = commonSpriteMotionRight;
                    printing1Motion.value["wrapAroundRight"] = commonSpriteMotionLeft;    // 印字は、キー入力とは逆向きへ進める
                }

                if (player1Input.ArrowUp) {    // 上
                    player1Motion.value["lookBottom"] = commonSpriteMotionTop;
                    printing1Motion.value["wrapAroundBottom"] = commonSpriteMotionBottom; // 印字は、キー入力とは逆向きへ進める
                }

                if (player1Input.ArrowDown) {   // 下
                    player1Motion.value["lookBottom"] = commonSpriteMotionBottom;
                    printing1Motion.value["wrapAroundBottom"] = commonSpriteMotionTop;    // 印字は、キー入力とは逆向きへ進める
                }
            }

            // ++++++++++++++++++++
            // + 向き、移動を処理 +
            // ++++++++++++++++++++

            // 印字の移動量（単位：ピクセル）を更新、ピクセル単位。タテヨコ同時入力の場合、上下で上書きする：
            if (printing1Motion.value["wrapAroundRight"] == commonSpriteMotionLeft) {  // 左
                printing1Left.value -= printing1Speed.value;
            } else if (printing1Motion.value["wrapAroundRight"] == commonSpriteMotionRight) {   // 右
                printing1Left.value += printing1Speed.value;
            }

            if (printing1Motion.value["wrapAroundBottom"] == commonSpriteMotionTop) {  // 上
                printing1Top.value -= printing1Speed.value;
            } else if (printing1Motion.value["wrapAroundBottom"] == commonSpriteMotionBottom) {   // 下
                printing1Top.value += printing1Speed.value;
            }

            if (player1MotionWait.value <= 0) { // モーション開始時に１回だけ実行される
                // 自機の向きを更新、タテヨコ同時入力の場合、上下を優先する： ※ 自機の位置は固定です。
                if (player1Motion.value["lookBottom"] == commonSpriteMotionTop) {   // 上
                    player1Frames.value = player1SourceFrames["up"]
                } else if (player1Motion.value["lookBottom"] == commonSpriteMotionBottom) { // 下
                    player1Frames.value = player1SourceFrames["down"]
                } else if (player1Motion.value["lookRight"] == commonSpriteMotionLeft) {    // 左
                    player1Frames.value = player1SourceFrames["left"]
                } else if (player1Motion.value["lookRight"] == commonSpriteMotionRight) {  // 右
                    player1Frames.value = player1SourceFrames["right"]
                }

                // ++++++++++++++++
                // + ウェイト設定 +
                // ++++++++++++++++

                if (printing1Motion.value["wrapAroundRight"]!=0 || printing1Motion.value["wrapAroundBottom"]!=0) {
                    player1MotionWait.value = player1AnimationWalkingFrames;
                } else if (player1Motion.value["lookRight"]!=0 || player1Motion.value["lookBottom"]!=0) {
                    player1MotionWait.value = player1AnimationFacingFrames;
                }
            }

            // 次のフレーム
            requestAnimationFrame(update);
        };

        // 初回呼び出し
        requestAnimationFrame(update);
    }


    // /**
    //  * フォーカスを外すのが上手くいかないため、［何もしないボタン］にフォーカスを合わせます。
    //  */
    // function focusRemove() : void {
    //     if (noopButton.value) {
    //         noopButton.value.$el.focus();    // $el は、<v-btn> 要素の中の <button> 要素。
    //     }
    // }


    function onUpButtonPressed() : void {
        console.log(`↑ボタンを押し付けました。`)
        player1Input.ArrowUp = true;
    }


    function onUpButtonReleased() : void {
        console.log(`↑ボタンを放しました。`)
        player1Input.ArrowUp = false;
    }


    function onRightButtonPressed() : void {
        player1Input.ArrowRight = true;
    }


    function onRightButtonReleased() : void {
        player1Input.ArrowRight = false;
    }


    function onDownButtonPressed() : void {
        player1Input.ArrowDown = true;
    }


    function onDownButtonReleased() : void {
        player1Input.ArrowDown = false;
    }


    function onLeftButtonPressed() : void {
        player1Input.ArrowLeft = true;
    }


    function onLeftButtonReleased() : void {
        player1Input.ArrowLeft = false;
    }


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
