<template>

    <h4><span class="parent-header">ＲＰＧの歩行グラフィック　＞　</span>盤の循環スクロール、数字柄の非循環シフト、盤の端処理</h4>
    <section class="sec-4">
        <p>キーボード操作方法</p>
        <ul>
            <li>
                <v-btn class="code-key hidden"/><v-btn class="code-key" @mousedown="onUpButtonPressed()" @mouseup="onUpButtonReleased()">↑</v-btn><br/>
                <v-btn class="code-key" @mousedown="onLeftButtonPressed()" @mouseup="onLeftButtonReleased()">←</v-btn><v-btn class="code-key hidden"/><v-btn class="code-key" @mousedown="onRightButtonPressed()" @mouseup="onRightButtonReleased()">→</v-btn>　…　登場人物を上下左右に動かすぜ！<br/>
                <v-btn class="code-key hidden"/><v-btn class="code-key" @mousedown="onDownButtonPressed()" @mouseup="onDownButtonReleased()">↓</v-btn><br/>
            </li>
            <li><v-btn class="code-key" @mousedown="onSpaceButtonPressed()" @mouseup="onSpaceButtonReleased()">（スペース）</v-btn>　…　位置を最初の状態に戻すぜ。</li>
            <li>
                <!-- フォーカスを外すためのダミー・ボタンです -->
                <v-btn
                    class="noop-key"
                    ref="noopButton"
                    v-tooltip="'PCでのマウス操作で、フォーカスがコントロールに残って邪魔になるときは、このボタンを押してくれだぜ'" >何もしないボタン</v-btn><br/>
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

        <p>
            👆 フィールドを歩いてみてくれだぜ（＾▽＾）！<br/>
            スクロールが付いている。スクロールってのは、タイルの塗り替えではなく、数ドットずつ流れるように動いていくことだぜ（＾～＾）<br/>
            上下左右の端に画面外が見えないようにロックがかかるか、また、盤の端まで歩けるか、試してみてくれだぜ（＾▽＾）！<br/>
        </p>
        <br/>


        <!-- 設定 -->
        <v-btn @click="appManualIsShowing = !appManualIsShowing">{{ appManualIsShowing ? '⚙️設定を閉じる' : '⚙️設定を表示' }}</v-btn>
        <section v-if="appManualIsShowing" class="sec-1">
            <br/>
            <p>マスクを含んだ盤サイズ。ただし右側と下側に余分に１マス付いたマスクは含まない：</p>
            <section class="sec-1">
                <v-slider
                    label="盤の筋の数"
                    v-model="board1FileNum"
                    :min="0"
                    :max="6"
                    step="1"
                    showTicks="always"
                    thumbLabel="always"
                    @click="focusRemove()" />
                <v-slider
                    label="盤の段の数"
                    v-model="board1RankNum"
                    :min="0"
                    :max="6"
                    step="1"
                    showTicks="always"
                    thumbLabel="always"
                    @click="focusRemove()" />
            </section>
            <br/>

            <p>要はマップデータのサイズ：</p>
            <section class="sec-1">
                <v-slider
                    label="印字の筋の数"
                    v-model="printing1FileNum"
                    :min="0"
                    :max="10"
                    step="1"
                    showTicks="always"
                    thumbLabel="always"
                    @click="focusRemove()" />
                <v-slider
                    label="印字の段の数"
                    v-model="printing1RankNum"
                    :min="0"
                    :max="10"
                    step="1"
                    showTicks="always"
                    thumbLabel="always"
                    @click="focusRemove()" />
            </section>
            <br/>

            <p>登場人物の画面上の原則固定位置。マスクを含んだサイズ：</p>
            <section class="sec-1">
                <v-slider
                    label="登場人物の基準の相対筋"
                    v-model="player1FileHome"
                    :min="0"
                    :max="5"
                    step="1"
                    showTicks="always"
                    thumbLabel="always"
                    @click="focusRemove()" />
                <v-slider
                    label="登場人物の基準の相対段"
                    v-model="player1RankHome"
                    :min="0"
                    :max="5"
                    step="1"
                    showTicks="always"
                    thumbLabel="always"
                    @click="focusRemove()" />
            </section>
            <br/>

            <p>マスクのタテヨコ幅。右側と下側は、１マス多めに付きます：</p>
            <section class="sec-1">
                <v-slider
                    label="マスクのタテヨコ幅"
                    v-model="board1WithMaskSizeSquare"
                    :min="0"
                    :max="2"
                    step="1"
                    showTicks="always"
                    thumbLabel="always"
                    @click="focusRemove()" />
            </section>
            <br/>

            <v-switch
                v-model="appBoundaryIsLock"
                :label="appBoundaryIsLock ? '［画面外を見せない］中' : '［画面外を見せない］をしていません'"
                color="green"
                :hideDetails="true"
                inset
                @click="focusRemove()" />
                <section class="sec-1">
                    <v-switch
                        v-model="appBoundaryWalkingEdge"
                        :disabled="!appBoundaryWalkingEdgeIsEnabled"
                        :label="appBoundaryWalkingEdge ? '［盤の端まで歩ける］を可能中' : '［盤の端まで歩ける］を可能にしていません'"
                        color="green"
                        :hideDetails="true"
                        inset
                        @click="focusRemove()" />
                </section>
        </section>
    </section>

    <br/>
    <h4><span class="parent-header-lights-out">ＲＰＧの歩行グラフィック　＞　</span><span class="parent-header">盤の循環スクロール、数字柄の非循環シフト、盤の端処理　＞　</span>ソースコード</h4>
    <section class="sec-4">
        <source-link
            pagePath="/making/input-axis-rpg-walk-scroll-loop"/>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, ref, watch } from 'vue';
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


    // ############################
    // # アプリケーション・データ #
    // ############################
    //
    // 今動いているアプリケーションの状態を記録しているデータ。特に可変のもの。
    //

    const appManualIsShowing = ref<boolean>(false);                 // 操作方法等を表示中
    const appBoundaryIsLock = ref<boolean>(true);                   // ［画面外隠し］を管理（true: ロックする, false: ロックしない）
    watch(appBoundaryIsLock, (newValue: boolean)=>{
        appBoundaryWalkingEdgeIsEnabled.value = newValue;
    });
    const appBoundaryWalkingEdge = ref<boolean>(true);              // ［盤の端の歩行］可能状態を管理（true: 可能にする, false: 可能にしない）
    const appBoundaryWalkingEdgeIsEnabled = ref<boolean>(true);     // ［盤の端の歩行］可能状態の活性性を管理（true: 不活性にする, false: 活性にする）


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　何もしないボタン +
    // ++++++++++++++++++++++++++++++++++++++

    const noopButton = ref<InstanceType<typeof VBtn> | null>(null);

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
    const board1FileNum = ref<number>(5);    // マスクを含めた盤サイズ。ただし、右側と下側に１マス余分に付いているマスクは含まない。
    const board1RankNum = ref<number>(5);
    const board1Area = computed(()=> {  // 盤のマス数
        return board1FileNum.value * board1RankNum.value;
    });
    // アニメーションのことを考えると、 File, Rank ではデジタルになってしまうので、 Left, Top で指定したい。
    const board1Top = ref<number>(0);
    const board1Left = ref<number>(0);
    const board1WithMaskSizeSquare = ref<number>(1);    // マスクの幅（単位：マス）
    const board1WithMaskBottomRightMargin: number = 1;          // マスクは右下に１マス分多く作ります。
    const bothSide = 2;     // 左と右とか、上と下とか、対。
    const board1WithMaskFileNum = computed<number>(()=>{        // マスク付きの場合の列数
        const minWidth = bothSide * board1WithMaskSizeSquare.value + board1WithMaskBottomRightMargin;  // マスクの横幅より小さくはなりません。
        if (board1FileNum.value < minWidth) {
            return minWidth;
        }
        return board1FileNum.value + board1WithMaskBottomRightMargin;
    });
    const board1WithMaskRankNum = computed<number>(()=>{
        const minHeight = bothSide * board1WithMaskSizeSquare.value + board1WithMaskBottomRightMargin; // マスクの縦幅より小さくはなりません。
        if (board1RankNum.value < minHeight) {
            return minHeight;
        }
        return board1RankNum.value + board1WithMaskBottomRightMargin;
    });
    const board1Style = computed<CompatibleStyleValue>(()=>{ // ボードとマスクを含んでいる領域のスタイル
        return {
            position: 'relative',
            left: "0",
            top: "0",
            width: `${commonZoom * board1WithMaskFileNum.value * board1SquareWidth}px`,
            height: `${commonZoom * board1WithMaskRankNum.value * board1SquareHeight}px`,
        };
    });
    const getSquareStyle = computed<
        (i:number)=>CompatibleStyleValue
    >(() => {
        return (i:number)=>{
            // プレイヤーが初期位置にいる場合の、マスの位置。
            const homeLeft = (i % board1FileNum.value) * board1SquareWidth;
            const homeTop = Math.floor(i / board1FileNum.value) * board1SquareHeight;

            const bwPx = (board1FileNum.value * board1SquareWidth);   // 盤の横幅（ピクセル）。右側と下側に余分に付いている１マス分のマスクを含まない。
            const bhPx = (board1RankNum.value * board1SquareHeight);

            // NOTE: 循環するだけなら、［剰余］を使えばいける。
            // 盤の左端列を、右端列へ移動させる。
            const offsetLeft = euclideanMod(homeLeft + board1Left.value + bwPx, bwPx) - homeLeft;
            const offsetTop = euclideanMod(homeTop + board1Top.value + bhPx, bhPx) - homeTop;

            return {
                position: 'absolute',
                top: `${homeTop + offsetTop}px`,
                left: `${homeLeft + offsetLeft}px`,
                width: `${board1SquareWidth}px`,
                height: `${board1SquareHeight}px`,
                zoom: 4,
                border: `solid 1px ${i % 2 == 0 ? 'darkgray' : 'lightgray'}`,
                textAlign: "center",
            };
        };
    });    
    const board1Motion = ref<Record<string, number>>({  // モーションへの入力
        toRight: 0,   // 負なら左、正なら右
        toBottom: 0,   // 負なら上、正なら下
    });

    // ++++++++++++++++++++++++++
    // + オブジェクト　＞　印字 +
    // ++++++++++++++++++++++++**
    //
    // 盤上に表示される数字柄、絵柄など。
    //

    const printing1FileNum = ref<number>(10);   // 列数
    const printing1RankNum = ref<number>(10);   // 行数
    const printing1FileDelta = ref<number>(0);  // 印字の左上隅のタイルの、初期位置からの移動量。
    const printing1RankDelta = ref<number>(0);  // 印字の左上隅のタイルの、初期位置からの移動量。
    const printing1Data = ref<string[]>([]);
    for (let i=0; i<printing1FileNum.value * printing1RankNum.value; i++) {
        printing1Data.value.push(i.toString().padStart(2, "0"));
    }

    /**
     * 変換
     * @param tileIndex マス番号
     * @returns [筋番号, 段番号]
     */
    function tileIndexToTileFileRank(tileIndex: number) : [number, number] {
        // プレイヤーが右へ１マス移動したら、印字は全行が左へ１つ移動する。
        const file = tileIndex % board1FileNum.value;
        const rank = Math.floor(tileIndex / board1FileNum.value);

        return [file, rank];
    }

    function printingFileRankToPrintingIndex(printingFile: number, printingRank: number) : number {
        return printingRank * printing1FileNum.value + printingFile;
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
            const bw = board1FileNum.value; // 幅 (例: 5)
            const bh = board1RankNum.value; // 高さ (例: 5)
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

    /**
     * 印字。
     */
    const getPrintingNumber = computed(() => {
        return (tileIndex: number)=>{
            const virtualTileIndex = getFixTileIndex(tileIndex);    // 実際のタイル番号を、見た目上のタイルの位置に変換します。

            let [virtualTileFile, virtualTileRank] = tileIndexToTileFileRank(virtualTileIndex);
            const printingFile = virtualTileFile + player1FileDelta.value;
            const printingRank = virtualTileRank + player1RankDelta.value;
            const printingIndex = printingFileRankToPrintingIndex(printingFile, printingRank);

            // 印字のサイズの範囲外になるところには、"-" でも表示しておく
            if (printingFile < 0 || printing1FileNum.value <= printingFile || printingRank < 0 || printing1RankNum.value <= printingRank) {
                return "-";
            }

            return  printing1Data.value[printingIndex];
        };
    });    
    const printing1Motion = ref<Record<string, number>>({  // モーションへの入力
        toRight: 0,   // 負なら左、正なら右
        toBottom: 0,   // 負なら上、正なら下
    });

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　登場人物１ +
    // ++++++++++++++++++++++++++++++++

    // アニメーションのことを考えると、 File, Rank ではデジタルになってしまうので、 Left, Top で指定したい。
    const player1FileHome = ref<number>(2);  // 登場人物の相対基準位置
    const player1RankHome = ref<number>(2);
    const player1LeftDelta = ref<number>(0);    // 登場人物の移動量
    const player1TopDelta = ref<number>(0);    // 登場人物の移動量
    const player1Left = computed(()=>{
        return player1FileHome.value * board1SquareWidth + player1LeftDelta.value;
    });
    const player1Top = computed(()=>{
        return player1RankHome.value * board1SquareHeight + player1TopDelta.value;
    });
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
                printing1Motion.value["toRight"] = 0;
                printing1Motion.value["toBottom"] = 0;
                player1Motion.value["toRight"] = 0;
                player1Motion.value["toBottom"] = 0;
            }
            
            // キー入力をモーションに変換
            if (player1MotionWait.value<=0) {   // ウェイトが無ければ、入力を受け付ける。

                // 位置のリセット
                if (player1Input[" "]) {
                    board1Left.value = 0;
                    board1Top.value = 0;
                    printing1FileDelta.value = 0;
                    printing1RankDelta.value = 0;
                    player1LeftDelta.value = 0;
                    player1TopDelta.value = 0;
                    player1FileDelta.value = 0;
                    player1RankDelta.value = 0;
                }

                // 移動関連（単発）
                // 斜め方向の場合、左右を上下で上書きする。（右、左）→（上、下）の順。
                if (player1Input.ArrowRight) {  // 右
                    player1Frames.value = player1SourceFrames["right"]    // 向きを変える

                    // ホーム・ポジションより左に居ればホームに近づける。
                    if (player1File.value < player1FileHome.value) {
                        player1Motion.value["toRight"] = commonSpriteMotionToRight;
                    } else {
                        let willShift: boolean = true;
                        if (appBoundaryIsLock.value) {
                            // 見えている画面外が広がるような移動は禁止する：
                            //
                            // - 印字は動かない、プレイヤーの移動量を見ること。
                            // TODO: プレイヤーの移動量と、印字の移動量を分けれないか？
                            //
                            // Printing
                            // +<---------cw------------------->+
                            // |                                |
                            // |       Board                    |
                            // |       +<------bw-------->+     |
                            // |       |//////////////////|     |
                            // |       |///+-------+//////|     |
                            // |       |///|       |//////|     |
                            // |       |///|   *   |//////|     |
                            // |       |///|       |//////|     |
                            // |       |///+-------+//////|     |
                            // |       |//////////////////|     |
                            // |       |//////////////////|     |
                            // |       +------------------+     |
                            // |                                |
                            // +--------------------------+<-m->+
                            // c<------+
                            //
                            // 0 は、盤の初期位置からの移動量。盤は移動しないので常に 0。
                            // c は、0 からみた、印字の左隅位置。 初期値は習慣的に、 0 以下にするものと思われる。
                            // bw は、盤の列数。
                            // cw は、印字の列数。
                            // m は、右側番外の余白。
                            // m が、マスクの横幅（右側の多めの１を含まない）以下なら、それ以上右に行くことはできない。
                            //
                            // m = cw + c - bw
                            //

                            const pd = -player1FileDelta.value;
                            const cw = printing1FileNum.value; // 例えば 10
                            const bw = board1FileNum.value;
                            const m = cw + pd - bw;

                            if (m <= -board1WithMaskSizeSquare.value) {
                                willShift = false;
                            }
                        }

                        if (willShift) {
                            printing1Motion.value["toRight"] = commonSpriteMotionToLeft;
                            board1Motion.value["toRight"] = commonSpriteMotionToRight;
                        } else {
                            if (appBoundaryWalkingEdge.value) {
                                // ［盤の端まで歩ける］
                                if (player1File.value < board1FileNum.value - board1WithMaskSizeSquare.value - 1) {
                                    player1Motion.value["toRight"] = commonSpriteMotionToRight;
                                }
                            }
                        }
                    }
                }

                if (player1Input.ArrowLeft) { // 左
                    player1Frames.value = player1SourceFrames["left"]    // 向きを変える

                    // ホーム・ポジションより右に居ればホームに近づける。
                    if (player1File.value > player1FileHome.value) {
                        player1Motion.value["toRight"] = commonSpriteMotionToLeft;
                    } else {
                        let willShift: boolean = true;
                        if (appBoundaryIsLock.value) {
                            // 見えている画面外が広がるような移動は禁止する：
                            //
                            // - 印字は動かない、プレイヤーの移動量を見ること。
                            // TODO: プレイヤーの移動量と、印字の移動量を分けれないか？
                            //
                            // Printing
                            // +---------------------+
                            // |                     |
                            // |       Board         |
                            // |       +-------+     |
                            // |       |       |     |
                            // |       |   *   |     |
                            // |       |       |     |
                            // |       +-------+     |
                            // |                     |
                            // +<--m-->*-------------+
                            //         0
                            // c<------+
                            //
                            // 0 は、盤の初期位置からの移動量。盤は移動しないので常に 0。
                            // c は、0 からみた、印字の左隅位置。 初期値は習慣的に、 0 以下にするものと思われる。
                            // m は、 pd の正負を反転したもの。
                            // m が、マスク幅より大きいなら、それ以上左に行くことはできない。
                            //
                            // m = c
                            //

                            const pd = player1FileDelta.value - 1;  // まだ -1 （左へ移動）されていないので、-1 しておく。
                            const m = - pd;

                            if (board1WithMaskSizeSquare.value < m) {
                                willShift = false;
                            }
                        }

                        if (willShift) {
                            printing1Motion.value["toRight"] = commonSpriteMotionToRight;
                            board1Motion.value["toRight"] = commonSpriteMotionToLeft;
                        } else if (appBoundaryWalkingEdge.value) {
                            // ［盤の端まで歩ける］
                            if (player1File.value > 0 + board1WithMaskSizeSquare.value) {
                                player1Motion.value["toRight"] = commonSpriteMotionToLeft;
                            }
                        }
                    }
                }

                if (player1Input.ArrowUp) {   // 上
                    player1Frames.value = player1SourceFrames["up"]    // 向きを変える

                    // ホーム・ポジションより下に居ればホームに近づける。
                    if (player1Rank.value > player1RankHome.value) {
                        player1Motion.value["toBottom"] = commonSpriteMotionToTop;
                    } else {
                        let willShift: boolean = true;
                        if (appBoundaryIsLock.value) {
                            // 見えている画面外が広がるような移動は禁止する：
                            //
                            // - 印字は動かない、プレイヤーの移動量を見ること。
                            // TODO: プレイヤーの移動量と、印字の移動量を分けれないか？
                            //
                            // Printing
                            // +-------------------->+     c
                            // |                     |     ^
                            // |       Board         |     |
                            // |       +-------+     |     +
                            // |       |       |     |
                            // |       |       |     |
                            // |       |   *   |     |
                            // |       |       |     |
                            // |       |       |     |
                            // |       +-------+     +
                            // |                     ^
                            // |                     |
                            // |                     m
                            // |                     |
                            // |                     v
                            // +---------------------+
                            //
                            // 0 は、盤の初期位置からの移動量。盤は移動しないので常に 0。
                            // c は、0 からみた、印字の上隅位置。 初期値は習慣的に、 0 以下にするものと思われる。
                            // m は、 pd の正負を反転したもの。
                            // m が、マスク幅より大きいなら、それ以上上に行くことはできない。
                            //
                            // m = c
                            //

                            const pd = player1RankDelta.value - 1;  // まだ -1 （上へ移動）されていないので、-1 しておく。
                            const m = - pd;

                            if (board1WithMaskSizeSquare.value < m) {
                                willShift = false;
                            }
                        }

                        if (willShift) {
                            printing1Motion.value["toBottom"] = commonSpriteMotionToBottom;
                            board1Motion.value["toBottom"] = commonSpriteMotionToTop;
                        } else if (appBoundaryWalkingEdge.value) {
                            // ［盤の端まで歩ける］
                            if (player1Rank.value > 0 + board1WithMaskSizeSquare.value) {
                                player1Motion.value["toBottom"] = commonSpriteMotionToTop;
                            }
                        }
                    }
                }

                if (player1Input.ArrowDown) {   // 下
                    player1Frames.value = player1SourceFrames["down"]   // 向きを変える

                    // ホーム・ポジションより上に居ればホームに近づける。
                    if (player1Rank.value < player1RankHome.value) {
                        player1Motion.value["toBottom"] = commonSpriteMotionToBottom;
                    } else {
                        let willShift: boolean = true;
                        if (appBoundaryIsLock.value) {
                            // 見えている画面外が広がるような移動は禁止する：
                            //
                            // - 印字は動かない、プレイヤーの移動量を見ること。
                            // TODO: プレイヤーの移動量と、印字の移動量を分けれないか？
                            //
                            // Printing
                            // +------------------------------->+     c
                            // ^                                |     ^
                            // |       Board                    |     |
                            // |       +------------------+     | 0   +
                            // |       ^//////////////////|     |
                            // |       |///+-------+//////|     |
                            // |       |///|       |//////|     |
                            // |       |///|       |//////|     |
                            // ch      bh//|   *   |//////|     |
                            // |       |///|       |//////|     |
                            // |       |///|       |//////|     |
                            // |       |///+-------+//////|     |
                            // |       |//////////////////|     |
                            // |       v//////////////////|     |
                            // |       +------------------+     +
                            // |                                ^
                            // |                                |
                            // |                                m
                            // |                                |
                            // v                                v
                            // +--------------------------------+
                            //
                            // 0 は、盤の初期位置からの移動量。盤は移動しないので常に 0。
                            // c は、0 からみた、印字の上隅位置。 初期値は習慣的に、 0 以下にするものと思われる。
                            // bh は、盤の行数。
                            // ch は、印字の行数。
                            // m が、マスクの横幅（下側の多めの１を含まない）より小さいなら、それ以上下に行くことはできない。
                            //
                            // m = ch + c - bh
                            //

                            const pd = -(player1RankDelta.value+1);  // まだ +1 （下へ移動）されていないので、+1 しておく。
                            const ch = printing1RankNum.value; // 例えば 10
                            const bh = board1RankNum.value;
                            const m = ch + pd - bh;
                            //console.log(`[m=${m}] = [ch=${ch}] + [pd=${pd}] - [bh=${bh}].  m <= -board1WithMaskHeight:${m <= -board1WithMaskSizeSquare.value}`);

                            if (m < -board1WithMaskSizeSquare.value) {
                                willShift = false;
                            }
                        }

                        if (willShift) {
                            printing1Motion.value["toBottom"] = commonSpriteMotionToTop;
                            board1Motion.value["toBottom"] = commonSpriteMotionToBottom;
                        } else if (appBoundaryWalkingEdge.value) {
                            // ［盤の端まで歩ける］
                            if (player1Rank.value < board1RankNum.value - board1WithMaskSizeSquare.value - 1) {
                                player1Motion.value["toBottom"] = commonSpriteMotionToBottom;
                            }
                        }
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
                player1TopDelta.value -= player1Speed.value;
            } else if (player1Motion.value["toBottom"] == commonSpriteMotionToBottom) {
                player1TopDelta.value += player1Speed.value;
            }

            if (player1Motion.value["toRight"] == commonSpriteMotionToRight) {
                player1LeftDelta.value += player1Speed.value;
            } else if (player1Motion.value["toRight"] == commonSpriteMotionToLeft) {
                player1LeftDelta.value -= player1Speed.value;
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

                if (board1Motion.value["toRight"]!=0 || board1Motion.value["toBottom"]!=0 || printing1Motion.value["toRight"]!=0 || printing1Motion.value["toBottom"]!=0 || player1Motion.value["toRight"]!=0 || player1Motion.value["toBottom"]!=0) {
                    player1MotionWait.value = player1AnimationWalkingFrames;    // ウェイト設定
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