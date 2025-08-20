<template>

    <h4><span class="parent-header">ＲＰＧの歩行グラフィック　＞　</span>盤の循環スクロール、数字柄の原始的シフト</h4>
    <section class="sec-4">
        <p>キーボード操作方法</p>
        <ul>
            <li><span class="code-key">↑</span><span class="code-key">↓</span><span class="code-key">←</span><span class="code-key">→</span>キー　…　上下左右に動かすぜ！</li>
            <li><span class="code-key">（スペース）</span>キー　…　位置を最初の状態に戻すぜ。</li>
        </ul>
        <br/>

        <!-- ストップウォッチ。デバッグに使いたいときは、 display: none; を消してください。 -->
        <stopwatch
            ref="stopwatch1Ref"
            v-on:countUp="(countNum) => { stopwatch1Count = countNum; }"
            style="display: none;" />

        <div :style="board1Style">

            <!--
                グリッド
                NOTE: ループカウンターは 1 から始まるので、1～9の9個のセルを作成。
            -->
            <div v-for="i in board1Area" :key="i"
                :style="getSquareStyle(i - 1)">{{ getFaceNumber(i - 1) }}</div>

            <!-- プレイヤー１ -->
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
                :style="`width:${board1WithMaskFileNum * board1SquareWidth}px; height:${board1WithMaskRankNum * board1SquareHeight}px; border-top: solid ${board1SquareHeight}px rgba(0,0,0,0.5); border-right: solid ${2 * board1SquareWidth}px rgba(0,0,0,0.5); border-bottom: solid ${2 * board1SquareHeight}px rgba(0,0,0,0.5); border-left: solid ${board1SquareWidth}px rgba(0,0,0,0.5); zoom:${commonZoom};`"
                style="position:absolute; left:0; top:0; image-rendering: pixelated;"></div>

        </div>

        <p>👆 ヨコ：１０、タテ：１０のサイズのフィールドを歩いてみてくれだぜ（＾▽＾）！</p>
        <p>フェースはループしていないぜ（＾▽＾）！</p>
    </section>

    <br/>
    <h4><span class="parent-header-lights-out">ＲＰＧの歩行グラフィック　＞　</span><span class="parent-header">盤の循環スクロール、数字柄の原始的シフト　＞　</span>ソースコード</h4>
    <section class="sec-4">
        <source-link
            pagePath="/making/input-axis-rpg-walk-scroll-loop"/>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, ref } from 'vue';
    // 👆 ［初級者向けのソースコード］では、 reactive は使いません。


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
    const commonSpriteMotionToTop = -1;  // モーション（motion）定数。上に移動する
    const commonSpriteMotionToRight = 1;
    const commonSpriteMotionToBottom = 1;
    const commonSpriteMotionToLeft = -1;


    // ################
    // # オブジェクト #
    // ################

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
    // アニメーションのことを考えると、 File, Rank ではデジタルになってしまうので、 Left, Top で指定したい。
    const board1Top = ref<number>(0);
    const board1Left = ref<number>(0);
    const board1FileNum = 5;
    const board1RankNum = 5;
    const board1Area = computed(()=> {  // 盤のマス数
        return board1FileNum * board1RankNum;
    });
    const board1WithMaskFileNum = board1FileNum + 1   // マスク付きの場合の列数
    const board1WithMaskRankNum = board1RankNum + 1
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
            const homeTop = Math.floor(i / board1RankNum) * board1SquareHeight;
            const boardWidth = (board1FileNum * board1SquareWidth);
            const boardHeight = (board1RankNum * board1SquareHeight);

            // NOTE: 循環するだけなら、［剰余］を使えばいける。
            // 盤の左端列を、右端列へ移動させる。
            const boardLeftLoop = euclideanMod(homeLeft + board1Left.value + boardWidth, boardWidth) - homeLeft;
            const boardTopLoop = euclideanMod(homeTop + board1Top.value + boardHeight, boardHeight) - homeTop;

            return {
                position: 'absolute',
                top: `${homeTop + boardTopLoop}px`,
                left: `${homeLeft + boardLeftLoop}px`,
                width: `${board1SquareWidth}px`,
                height: `${board1SquareHeight}px`,
                zoom: 4,
                border: "solid 1px lightgray",
                textAlign: "center",
            };
        };
    });    
    const board1Motion = ref<Record<string, number>>({  // モーションへの入力
        toRight: 0,   // 負なら左、正なら右
        toBottom: 0,   // 負なら上、正なら下
    });

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　盤コンテンツ +
    // ++++++++++++++++++++++++**++++++++
    //
    // 盤上に表示されるもの。
    //

    const contents1FileNum = 10;       // 列数
    const contents1RankNum = 10;       // 行数

    /**
     * 変換
     * @param tileIndex マス番号
     * @returns [筋番号, 段番号]
     */
    function tileIndexToTileFileRank(tileIndex: number) : number[] {
        // プレイヤーが右へ１マス移動したら、盤コンテンツは全行が左へ１つ移動する。
        const file = tileIndex % board1FileNum;
        const rank = Math.floor(tileIndex / board1RankNum);

        return [file, rank];
    }

    function contentsFileRankToContentsIndex(contentsFile: number, contentsRank: number) : number {
        return contentsRank * contents1FileNum + contentsFile;
    }

    // コンテンツはシフトするので、 File, Rank しかない。 Left, Top は無い。
    const contents1FileInit = -3;
    const contents1RankInit = -3;
    const contents1File = ref<number>(contents1FileInit);    // 盤コンテンツの左上隅のタイルは、盤タイルの左から何番目か。
    const contents1Rank = ref<number>(contents1RankInit);    // 盤コンテンツの左上隅のタイルは、盤タイルの上から何番目か。
    const contents1Data = ref<string[]>([]);
    for (let i=0; i<contents1FileNum * contents1RankNum; i++) {
        contents1Data.value.push(i.toString().padStart(2, "0"));
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
            const rotH = player1FileDelta.value; // 水平シフト
            const rotV = player1RankDelta.value; // 垂直シフト

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

    const getFaceNumber = computed(() => {
        return (tileIndex: number)=>{
            const fixTileIndex = getFixTileIndex(tileIndex);
            //return fixTileIndex;   // デバッグに使えます。

            let [tileFile, tileRank] = tileIndexToTileFileRank(fixTileIndex);
            const contentsFile = tileFile + player1FileDelta.value;
            const contentsRank = tileRank + player1RankDelta.value;
            const contentsIndex = contentsFileRankToContentsIndex(contentsFile, contentsRank);

            // コンテンツのサイズの範囲外になるところには、"-" でも表示しておく
            if (contentsFile < 0 || contents1FileNum <= contentsFile || contentsRank < 0 || contents1RankNum <= contentsRank) {
                return "-";
            }

            return  contents1Data.value[contentsIndex];
        };
    });    
    const contents1Motion = ref<Record<string, number>>({  // モーションへの入力
        toRight: 0,   // 負なら左、正なら右
        toBottom: 0,   // 負なら上、正なら下
    });

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　プレイヤー +
    // ++++++++++++++++++++++++++++++++

    // アニメーションのことを考えると、 File, Rank ではデジタルになってしまうので、 Left, Top で指定したい。
    const player1FileHome: number = 2;  // 盤の真ん中をホーム・ポジションとする
    const player1RankHome: number = 2;
    const player1Left = ref<number>(player1FileHome * board1SquareWidth);    // スプライトのX座標
    const player1Top = ref<number>(player1RankHome * board1SquareHeight);       // スプライトのY座標
    // 移動量を記録しておく。
    const player1FileDelta = ref<number>(0);
    const player1RankDelta = ref<number>(0);
    const player1Speed = ref<number>(2);     // 移動速度
    const player1File = computed<number>(()=>{
        return Math.round(player1Left.value / board1SquareWidth);
    });
    const player1Rank = computed<number>(()=>{
        return Math.round(player1Top.value / board1SquareHeight);
    });
    
    const player1Input = <Record<string, boolean>>{         // 入力
        " ": false, ArrowUp: false, ArrowRight: false, ArrowDown: false, ArrowLeft: false
    };
    const player1AnimationSlow = ref<number>(8);    // アニメーションのスローモーションの倍率の初期値
    const player1AnimationWalkingFrames = 16;       // 歩行フレーム数
    const player1Style = computed(() => ({
        top: `${player1Top.value}px`,
        left: `${player1Left.value}px`,
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
        toRight: 0,   // 負なら左、正なら右
        toBottom: 0,   // 負なら上、正なら下
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
            player1MotionWait.value -= 1;           // モーション・タイマー

            if (player1MotionWait.value==0) {
                // モーションのクリアー
                board1Motion.value["toRight"] = 0;
                board1Motion.value["toBottom"] = 0;
                contents1Motion.value["toRight"] = 0;
                contents1Motion.value["toBottom"] = 0;
                player1Motion.value["toRight"] = 0;
                player1Motion.value["toBottom"] = 0;
            }
            
            // キー入力をモーションに変換
            if (player1MotionWait.value<=0) {   // ウェイトが無ければ、入力を受け付ける。

                // 位置のリセット
                if (player1Input[" "]) {
                    board1Left.value = 0;
                    board1Top.value = 0;
                    contents1File.value = contents1FileInit;
                    contents1Rank.value = contents1RankInit;
                    player1Left.value = player1FileHome * board1SquareWidth;
                    player1Top.value = player1RankHome * board1SquareHeight;
                    player1FileDelta.value = 0;
                    player1RankDelta.value = 0;
                }

                // 移動関連（単発）
                // 斜め方向の場合、左右を上下で上書きする。（右、左）→（上、下）の順。
                if (player1Input.ArrowRight) {  // 右
                    player1Frames.value = player1SourceFrames["right"]    // 向きを変える

                    // ホーム・ポジションより左に居ればホームに近づける。
                    if (player1File.value < player1FileHome) {
                        player1Motion.value["toRight"] = commonSpriteMotionToRight;
                    } else {
                        contents1Motion.value["toRight"] = commonSpriteMotionToLeft;
                        board1Motion.value["toRight"] = commonSpriteMotionToRight;
                    }
                }

                if (player1Input.ArrowLeft) { // 左
                    player1Frames.value = player1SourceFrames["left"]    // 向きを変える

                    // ホーム・ポジションより右に居ればホームに近づける。
                    if (player1File.value > player1FileHome) {
                        player1Motion.value["toRight"] = commonSpriteMotionToLeft;
                    } else {
                        contents1Motion.value["toRight"] = commonSpriteMotionToRight;
                        board1Motion.value["toRight"] = commonSpriteMotionToLeft;
                    }
                }

                if (player1Input.ArrowUp) {   // 上
                    player1Frames.value = player1SourceFrames["up"]    // 向きを変える

                    // ホーム・ポジションより下に居ればホームに近づける。
                    if (player1Rank.value > player1RankHome) {
                        player1Motion.value["toBottom"] = commonSpriteMotionToTop;
                    } else {
                        contents1Motion.value["toBottom"] = commonSpriteMotionToBottom;
                        board1Motion.value["toBottom"] = commonSpriteMotionToTop;
                    }
                }

                if (player1Input.ArrowDown) {   // 下
                    player1Frames.value = player1SourceFrames["down"]   // 向きを変える

                    // ホーム・ポジションより上に居ればホームに近づける。
                    if (player1Rank.value < player1RankHome) {
                        player1Motion.value["toBottom"] = commonSpriteMotionToBottom;
                    } else {
                        contents1Motion.value["toBottom"] = commonSpriteMotionToTop;
                        board1Motion.value["toBottom"] = commonSpriteMotionToBottom;
                    }
                }
            }

            // スクロール
            // 盤の方をスクロールさせる
            // 斜め方向の場合、上下を優先する。
            if (board1Motion.value["toRight"] == commonSpriteMotionToRight) {
                board1Left.value -= player1Speed.value;
            } else if (board1Motion.value["toRight"] == commonSpriteMotionToLeft) {
                board1Left.value += player1Speed.value;
            }

            if (board1Motion.value["toBottom"] == commonSpriteMotionToTop) {
                board1Top.value += player1Speed.value;
            } else if (board1Motion.value["toBottom"] == commonSpriteMotionToBottom) {
                board1Top.value -= player1Speed.value;
            }

            // プレイヤーが歩くのは、盤の端を歩いているときだけ。このとき、画面スクロールは起こらない。
            if (player1Motion.value["toBottom"] == commonSpriteMotionToTop) {
                player1Top.value -= player1Speed.value;
            } else if (player1Motion.value["toBottom"] == commonSpriteMotionToBottom) {
                player1Top.value += player1Speed.value;
            }

            if (player1Motion.value["toRight"] == commonSpriteMotionToRight) {
                player1Left.value += player1Speed.value;
            } else if (player1Motion.value["toRight"] == commonSpriteMotionToLeft) {
                player1Left.value -= player1Speed.value;
            }
            
            if (player1MotionWait.value <= 0) { // モーション開始時に１回だけ実行される
                if (board1Motion.value["toRight"]!=0 || board1Motion.value["toBottom"]!=0) {
                    // 移動量を記録しておく。シフト。
                    if (board1Motion.value["toBottom"] == commonSpriteMotionToTop) { // 上
                        player1RankDelta.value -= 1;
                    } else if (board1Motion.value["toBottom"] == commonSpriteMotionToBottom) {   // 下
                        player1RankDelta.value += 1;
                    }

                    if (board1Motion.value["toRight"] == commonSpriteMotionToRight) {    // 右
                        player1FileDelta.value += 1;
                    } else if (board1Motion.value["toRight"] == commonSpriteMotionToLeft) {  // 左
                        player1FileDelta.value -= 1;
                    }
                    //console.log(`移動量を記録しておく。シフト。 player1FileDelta.value=${player1FileDelta.value} player1RankDelta.value=${player1RankDelta.value} player1Motion.value["toBottom"]=${player1Motion.value["toBottom"]} player1Motion.value["toRight"]=${player1Motion.value["toRight"]}`);
                }

                if (board1Motion.value["toRight"]!=0 || board1Motion.value["toBottom"]!=0 || contents1Motion.value["toRight"]!=0 || contents1Motion.value["toBottom"]!=0 || player1Motion.value["toRight"]!=0 || player1Motion.value["toBottom"]!=0) {
                    player1MotionWait.value = player1AnimationWalkingFrames;    // ウェイト設定
                }
            }

            // 次のフレーム
            requestAnimationFrame(update);
        };

        // 初回呼び出し
        requestAnimationFrame(update);
    }

</script>

<style scoped>
    div.cursor {
        position: relative; width:32px; height:32px;
    }
</style>