<template>

    <!-- ボタン機能拡張 -->
    <button-20250822 ref="button1Ref"/>

    <h4><span class="parent-header">ＲＰＧの歩行グラフィック　＞　</span>数字柄のシフト、盤の端処理</h4>
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
                　…　上下左右に動かすぜ！
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
                　…　位置を最初の状態に戻すぜ。
            </li>
        </ul>
        <br/>

        <!-- ストップウォッチ。デバッグに使いたいときは、 display: none; を消してください。 -->
        <stopwatch
            ref="stopwatch1Ref"
            v-on:countUp="(countNum) => { stopwatch1Count = countNum; }"
            style="display: none;" />

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
        <!-- フォーカスを外すためのダミー・ボタンです -->
        <v-btn ref="noopButton">何もしないボタン</v-btn>

        <div :style="board1Style">

            <!--
                グリッド
                NOTE: ループカウンターは 1 から始まるので、1～9の9個のセルを作成。
            -->
            <div v-for="i in board1Area" :key="i"
                :style="getSquareStyle(i - 1)">{{ getFaceNumber(i - 1) }}</div>

            <!-- 自機１ -->
            <TileAnimation
                :frames="player1Frames"
                tilemapUrl="/img/making/202508__warabenture__15-1612-kifuwarabe-o1o0.png"
                :slow="player1AnimationSlow"
                :time="stopwatch1Count"
                class="player"
                :style="player1Style"
                style="image-rendering: pixelated;" /><br/>
            </div>

        <p>👆 ヨコ：１０、タテ：１０のサイズのフィールドを歩いてみてくれだぜ（＾▽＾）！</p>
        <p>上下左右の端に画面外が見えないようにロックがかかるか、また、盤の端まで歩けるか、試してみてくれだぜ（＾▽＾）！</p>
    </section>

    <br/>
    <h4><span class="parent-header-lights-out">ＲＰＧの歩行グラフィック　＞　</span><span class="parent-header">数字柄のシフト、盤の端処理　＞　</span>ソースコード</h4>
    <section class="sec-4">
        <source-link
            pagePath="/making/input-axis-rpg-walk-printing-shift-boundary"/>
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
    const board1Files = 5;
    const board1Ranks = 5;
    const board1Area = computed(()=> {  // 盤のマス数
        return board1Files * board1Ranks;
    });
    const board1Style = computed<CompatibleStyleValue>(()=>{ // ボードとマスクを含んでいる領域のスタイル
        return {
            position: 'relative',
            left: "0",
            top: "0",
            width: `${commonZoom * board1Files * board1SquareWidth}px`,
            height: `${commonZoom * board1Ranks * board1SquareHeight}px`,
        };
    });
    const getSquareStyle = computed<
        (i:number)=>CompatibleStyleValue
    >(() => {
        return (i:number)=>{
            // プレイヤーが初期位置にいる場合の、マスの位置。
            const homeLeft = (i % board1Files) * board1SquareWidth;
            const homeTop = Math.floor(i / board1Ranks) * board1SquareHeight;

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

    const printing1FileNum = 10;            // 列数
    const printing1RankNum = 10;            // 行数
    const printing1File = ref<number>(-3);  // 印字の左上隅のタイルは、盤タイルの左から何番目か。
    const printing1Rank = ref<number>(-3);  // 印字の左上隅のタイルは、盤タイルの上から何番目か。
    const printing1Data = ref<string[]>([]);
    for (let i=0; i<printing1FileNum * printing1RankNum; i++) {
        printing1Data.value.push(i.toString().padStart(2, "0"));
    }

    /**
     * 変換
     * @param tileIndex マス番号
     * @returns [筋番号, 段番号]
     */
    function tileIndexToTileFileRank(tileIndex: number) : number[] {
        // プレイヤーが右へ１マス移動したら、印字は全行が左へ１つ移動する。
        const file = tileIndex % board1Files;
        const rank = Math.floor(tileIndex / board1Ranks);

        return [file, rank];
    }

    function contentsFileRankToContentsIndex(contentsFile: number, contentsRank: number) : number {
        return contentsRank * printing1FileNum + contentsFile;
    }

    const getFaceNumber = computed(() => {
        return (tileIndex: number)=>{
            let [tileFile, tileRank] = tileIndexToTileFileRank(tileIndex);

            // タイル上のインデックスを、印字上のインデックスへ変換：
            const contentsFile = tileFile - printing1File.value; // プレイヤーが右へ１マス移動したら、印字は全行が左へ１つ移動する。
            const contentsRank = tileRank - printing1Rank.value; // プレイヤーが下へ１マス移動したら、印字は全行が上へ１つ移動する。

            // 印字のサイズの範囲外になるところには、"-" でも表示しておく
            if (contentsFile < 0 || printing1FileNum <= contentsFile || contentsRank < 0 || printing1RankNum <= contentsRank) {
                return "-";
            }
            
            // 印字上の位置が示すデータを返す
            const contentsIndex = contentsFileRankToContentsIndex(contentsFile, contentsRank);
            return  printing1Data.value[contentsIndex];
        };
    });    
    const printing1Motion = ref<Record<string, number>>({  // モーションへの入力
        shiftToRight: 0,   // 負なら左、正なら右
        shiftToBottom: 0,   // 負なら上、正なら下
    });

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　プレイヤー +
    // ++++++++++++++++++++++++++++++++

    // アニメーションのことを考えると、 File, Rank ではデジタルになってしまうので、 Left, Top で指定したい。
    const player1HomeFile: number = 2;     // ホーム
    const player1HomeRank: number = 2;
    const player1Left = ref<number>(player1HomeFile * board1SquareWidth);    // スプライトのX座標
    const player1Top = ref<number>(player1HomeRank * board1SquareHeight);       // スプライトのY座標
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
        shiftToRight: 0,   // 負なら左、正なら右
        shiftToBottom: 0,   // 負なら上、正なら下
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
     * ゲームのメインループ開始
     */
    function gameLoopStart() : void {
        const update = () => {
            player1MotionWait.value -= 1;           // モーション・タイマー

            if (player1MotionWait.value==0) {
                // モーションのクリアー
                printing1Motion.value["shiftToRight"] = 0;
                printing1Motion.value["shiftToBottom"] = 0;
                player1Motion.value["shiftToRight"] = 0;
                player1Motion.value["shiftToBottom"] = 0;
            }
            
            // キー入力をモーションに変換
            if (player1MotionWait.value<=0) {   // ウェイトが無ければ、入力を受け付ける。

                // 位置のリセット
                if (player1Input[" "]) {
                    printing1File.value = 0;
                    printing1Rank.value = 0;
                    player1Left.value = player1HomeFile * board1SquareWidth;
                    player1Top.value = player1HomeRank * board1SquareHeight;
                }

                // 移動
                // 斜め方向の場合、左右を上下で上書きする。（右、左）→（上、下）の順。
                if (player1Input.ArrowRight) {  // 右
                    player1Frames.value = player1SourceFrames["right"]    // 向きを変える

                    // ホーム・ポジションより左に居ればホームに近づける。
                    if (player1File.value < player1HomeFile) {
                        player1Motion.value["shiftToRight"] = commonSpriteMotionToRight;
                    } else {
                        let willShift: boolean = true;
                        if (appBoundaryIsLock.value) {
                            // 見えている画面外が広がるような移動は禁止する：
                            //
                            //  Contents
                            // +--------------+
                            // |              |
                            // |   Board      |
                            // |  +-------+   |
                            // |  |       |   |
                            // c  b   p   |   |
                            // |  |       |   |
                            // |  +--bw---+   |
                            // +-----cw-------+
                            //
                            //  b ... Origin x on board.
                            //  c ... contents's x from B.
                            //  p ... player character's x from B.
                            //  bw ... Board width.
                            //  cw ... Contents width.
                            //
                            //
                            // +--------------+
                            // |      +-------+
                            // |      |       |
                            // c      b   p   |
                            // |      |       |
                            // |      +--bw---+
                            // +-----cw-------+
                            //
                            // cw - bw ... max margin.
                            //
                            // -c が max margin 以上なら、それ以上右に行くことはできない。
                            //

                            const bw = board1Files;
                            const cw = printing1FileNum;
                            const c = printing1File.value;
                            const maxMargin = cw - bw;

                            if (maxMargin <= -c) {
                                willShift = false;
                            }
                        }

                        if (willShift) {
                            printing1Motion.value["shiftToRight"] = commonSpriteMotionToLeft;
                        } else {
                            if (appBoundaryWalkingEdge.value) {
                                // ［盤の端まで歩ける］
                                if (player1File.value < board1Files - 1) {
                                    player1Motion.value["shiftToRight"] = commonSpriteMotionToRight;
                                }
                            }
                        }
                    }
                }

                if (player1Input.ArrowLeft) { // 左
                    player1Frames.value = player1SourceFrames["left"]    // 向きを変える

                    // ホーム・ポジションより右に居ればホームに近づける。
                    if (player1File.value > player1HomeFile) {
                        player1Motion.value["shiftToRight"] = commonSpriteMotionToLeft;
                    } else {
                        let willShift: boolean = true;
                        if (appBoundaryIsLock.value) {
                            // 見えている画面外が広がるような移動は禁止する：
                            //
                            //  Contents
                            // +--------------+
                            // |              |
                            // |   Board      |
                            // |  +-------+   |
                            // |  |       |   |
                            // c  b   p   |   |
                            // |  |       |   |
                            // |  +-------+   |
                            // +--------------+
                            //
                            //  b ... Origin x on board.
                            //  c ... contents's x from B.
                            //  p ... player character's x from B.
                            //
                            //
                            // +--------------+
                            // |              |
                            // c              |
                            // |              |
                            // +-------+      |
                            // |       |      |
                            // b   p   |      |
                            // |       |      |
                            // +-------+      |
                            // +--------------+
                            //
                            // c が 0 以上なら、それ以上左に行くことはできない。
                            //

                            const c = printing1File.value;

                            if (c >= 0) {
                                willShift = false;
                            }
                        }

                        if (willShift) {
                            printing1Motion.value["shiftToRight"] = commonSpriteMotionToRight;
                        } else if (appBoundaryWalkingEdge.value) {
                            // ［盤の端まで歩ける］
                            if (player1File.value > 0) {
                                player1Motion.value["shiftToRight"] = commonSpriteMotionToLeft;
                            }
                        }
                    }
                }

                if (player1Input.ArrowUp) {   // 上
                    player1Frames.value = player1SourceFrames["up"]    // 向きを変える

                    // ホーム・ポジションより下に居ればホームに近づける。
                    if (player1Rank.value > player1HomeRank) {
                        player1Motion.value["shiftToBottom"] = commonSpriteMotionToTop;
                    } else {
                        let willShift: boolean = true;
                        if (appBoundaryIsLock.value) {
                            // 見えている画面外が広がるような移動は禁止する：
                            //
                            //  Contents
                            // +------c-------+
                            // |              |
                            // |   Board      |
                            // |  +---b---+   |
                            // |  |       |   |
                            // |  |   p   |   |
                            // |  |       |   |
                            // |  +-------+   |
                            // +--------------+
                            //
                            //  b ... Origin x on board.
                            //  c ... contents's x from B.
                            //  p ... player character's x from B.
                            //
                            //
                            // +--+---b---+-c-+
                            // |  |       |   |
                            // |  |   p   |   |
                            // |  |       |   |
                            // |  +-------+   |
                            // |              |
                            // +--------------+
                            //
                            // c が 0 以上なら、それ以上上に行くことはできない。
                            //

                            const c = printing1Rank.value;

                            if (c >= 0) {
                                willShift = false;
                            }
                        }

                        if (willShift) {
                            printing1Motion.value["shiftToBottom"] = commonSpriteMotionToBottom;
                        } else if (appBoundaryWalkingEdge.value) {
                            // ［盤の端まで歩ける］
                            if (player1Rank.value > 0) {
                                player1Motion.value["shiftToBottom"] = commonSpriteMotionToTop;
                            }
                        }
                    }
                }

                if (player1Input.ArrowDown) {   // 下
                    player1Frames.value = player1SourceFrames["down"]   // 向きを変える

                    // ホーム・ポジションより上に居ればホームに近づける。
                    if (player1Rank.value < player1HomeRank) {
                        player1Motion.value["shiftToBottom"] = commonSpriteMotionToBottom;
                    } else {
                        let willShift: boolean = true;
                        if (appBoundaryIsLock.value) {
                            // 見えている画面外が広がるような移動は禁止する：
                            //
                            //  Contents
                            // +------c-------+
                            // |              |
                            // |   Board      |
                            // |  +---b---+   |
                            // |  |       |   |
                            // ch bh  p   |   |
                            // |  |       |   |
                            // |  +-------+   |
                            // +--------------+
                            //
                            //  b ... Origin x on board.
                            //  c ... contents's x from B.
                            //  p ... player character's x from B.
                            //  bh ... Board height.
                            //  ch ... Contents height.
                            //
                            //
                            // +------c-------+
                            // |              |
                            // |              |
                            // |  +---b---+   |
                            // |  |       |   |
                            // ch bh  p   |   |
                            // |  |       |   |
                            // +--+-------+---+
                            //
                            // ch - bh ... max margin.
                            //
                            // -c が max margin 以上なら、それ以上下に行くことはできない。
                            //

                            const bh = board1Ranks;
                            const ch = printing1RankNum;
                            const c = printing1Rank.value;
                            const maxMargin = ch - bh;

                            if (maxMargin <= -c) {
                                willShift = false;
                            }
                        }

                        if (willShift) {
                            printing1Motion.value["shiftToBottom"] = commonSpriteMotionToTop;
                        } else if (appBoundaryWalkingEdge.value) {
                            // ［盤の端まで歩ける］
                            if (player1Rank.value < board1Files - 1) {
                                player1Motion.value["shiftToBottom"] = commonSpriteMotionToBottom;
                            }
                        }
                    }
                }
            }

            // 移動処理
            if (player1MotionWait.value <= 0) {
                if (printing1Motion.value["shiftToBottom"] == commonSpriteMotionToTop) {
                    printing1Rank.value -= 1;     // 下
                } else if (printing1Motion.value["shiftToBottom"] == commonSpriteMotionToBottom) {
                    printing1Rank.value += 1;     // 上
                }

                if (printing1Motion.value["shiftToRight"] == commonSpriteMotionToRight) {
                    printing1File.value += 1;
                } else if (printing1Motion.value["shiftToRight"] == commonSpriteMotionToLeft) {
                    printing1File.value -= 1;   // 印字の方を左へスクロールさせる
                }
            }

            if (player1Motion.value["shiftToBottom"] == commonSpriteMotionToTop) {
                player1Top.value -= player1Speed.value;
            } else if (player1Motion.value["shiftToBottom"] == commonSpriteMotionToBottom) {
                player1Top.value += player1Speed.value;
            }

            if (player1Motion.value["shiftToRight"] == commonSpriteMotionToRight) {
                player1Left.value += player1Speed.value;
            } else if (player1Motion.value["shiftToRight"] == commonSpriteMotionToLeft) {
                player1Left.value -= player1Speed.value;
            }

            if (player1MotionWait.value <= 0) {
                if (printing1Motion.value["shiftToRight"]!=0 || printing1Motion.value["shiftToBottom"]!=0 || player1Motion.value["shiftToRight"]!=0 || player1Motion.value["shiftToBottom"]!=0) {
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
    div.player {
        position: relative; width:32px; height:32px;
    }
</style>