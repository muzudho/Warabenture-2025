<template>

    <!-- ボタン機能拡張 -->
    <button-20250822 ref="button1Ref"/>

    <h4><span class="parent-header">ＲＰＧの歩行グラフィック　＞　</span>回り込むタイルへ投影・両端つながりの像・視野外マスク例示</h4>
    <section class="sec-4">
        <br/>

        <!-- ストップウォッチ。デバッグに使いたいときは、 display: none; を消してください。 -->
        <stopwatch
            ref="stopwatch1Ref"
            v-on:countUp="(countNum: number) => { stopwatch1Count = countNum; }"
            style="display: none;" />

        <!-- 盤領域 -->
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
                :style="getSquareStyleFromTileIndex(i - 1)">

                <span class="board-slidable-tile-index">tile[{{ (i - 1) }}]</span>
                <span class="board-fixed-square-index">fix[{{
                    getFixedSquareIndexFromTileIndex(
                        i - 1,
                        board1SquareWidth,
                        board1SquareHeight,
                        board1FileNum,
                        board1RankNum,
                        printing1Left,
                        printing1Top,
                    )
                }}]</span>
                <span class="board-printing-index">print[{{
                    getPrintingIndexFromFixedSquareIndex(
                        getFixedSquareIndexFromTileIndex(
                            i - 1,
                            board1SquareWidth,
                            board1SquareHeight,
                            board1FileNum,
                            board1RankNum,
                            printing1Left,
                            printing1Top,
                        ),
                        -Math.floor(printing1Left / board1SquareWidth),
                        -Math.floor(printing1Top / board1SquareHeight),
                        board1FileNum,
                        printing1FileNum,
                        printing1RankNum,
                        printing1IsLooping,
                    )
                }}]</span>
                <span class="board-square-printing-string">{{
                    getPrintingStringFromPrintingIndex(
                        getPrintingIndexFromFixedSquareIndex(
                            getFixedSquareIndexFromTileIndex(
                                i - 1,
                                board1SquareWidth,
                                board1SquareHeight,
                                board1FileNum,
                                board1RankNum,
                                printing1Left,
                                printing1Top,
                            ),
                            -Math.floor(printing1Left / board1SquareWidth),
                            -Math.floor(printing1Top / board1SquareHeight),
                            board1FileNum,
                            printing1FileNum,
                            printing1RankNum,
                            printing1IsLooping,
                        )
                    )
                }}</span>
            </div>

            <!-- 自機１ -->
            <tile-animation
                :frames="player1Frames"
                tilemapUrl="/img/making/202508__warabenture__15-1612-kifuwarabe-o1o0.png"
                :slow="player1AnimationSlow"
                :time="stopwatch1Count"
                class="player"
                :style="player1Style" />

            <!-- 視界の外１ -->
            <div
                class="out-of-sight"
                :style="outOfSight1Style">
            </div>
        </div>

        <div>
            印字x={{ printing1Left }}　｜　人x={{ player1Left }}　｜　人モーション・ウェイト={{ player1MotionWait }}<br/>
            印字y={{ printing1Top  }}　｜　人y={{ player1Top  }}<br/>
            人 スペース={{ player1Input[" "] }}　｜　↑={{ player1Input.ArrowLeft }}　｜　↑={{ player1Input.ArrowUp }}　｜　→={{ player1Input.ArrowRight }}　｜　↓={{ player1Input.ArrowDown }}<br/>
            印字 右へ回り込み={{ printing1Motion.wrapAroundRight }}　｜　下へ回り込み={{ printing1Motion.wrapAroundBottom }}<br/>
        </div>
        <br/>

        <p>
            👆　自機が動く代わりに、盤の方がスクロールして、そして画面外に出た端のタイルが、反対側の端に回り込み（ラップアラウンド）しているぜ（＾▽＾）<br/>
            端はちらつくから、ゲームで使うときは、半透明の黒いマスクが掛かっているところは画面に映らないようにしてくれだぜ（＾～＾）！<br/>
            <br/>
            マスの中の１段目の数字は、タイルに付いている番号だぜ（＾▽＾）！<br/>
            ２段目の数字は、スタビライザーだぜ、つまり、見た目上、左上から 0, 1, 2 ... となるように画面に固定（Fix）した番号だぜ（＾▽＾）！<br/>
            ３段目の大きな数字は、印字だぜ（＾▽＾）！<br/>
            <br/>
            タイルはスワップ（塗り替え）ではなく、スクロールしているぜ。スクロールってのは、数ドットずつ流れるように動いていくことだぜ（＾～＾）<br/>
            <br/>
        	👆　［設定を表示］から設定をいじって、 ヨコ：１０、タテ：１０のサイズのフィールドを歩いてみてくれだぜ（＾▽＾）！<br/>
        	盤より大きな数字柄がシフトしているのを見てくれだぜ（＾▽＾）！<br/>
            <br/>
            👆　［設定を表示］から設定をいじって、フィールドの端まで歩いてみてくれだぜ（＾▽＾）！<br/>
            上下左右の端に画面外が見えないようにロックがかかるか、また、盤の端まで歩けるか、試してみてくれだぜ（＾▽＾）！<br/>
        </p>
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
                　…　自機を上下左右へ、タイルと印字は、上下左右キーの入力とは逆方向に動かすぜ！
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
                　…　自機をホームへ、タイルと印字の位置を最初に有った並びに戻すぜ。
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
                label="アニメーションの遅さ"
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
                :max="4"
                step="1"
                showTicks="always"
                thumbLabel="always" />
            <v-slider
                label="自機のホーム　＞　段"
                v-model="playerHome1Rank"
                :min="0"
                :max="4"
                step="1"
                showTicks="always"
                thumbLabel="always" />
            <p>盤はマスクを含む。ただし右側と下側に余分に１マス付いたマスクは含まない：</p>
            <v-slider
                label="盤の筋の全数"
                v-model="board1FileNum"
                :min="0"
                :max="board1FileMax"
                step="1"
                showTicks="always"
                thumbLabel="always" />
            <v-slider
                label="盤の段の全数"
                v-model="board1RankNum"
                :min="0"
                :max="board1RankMax"
                step="1"
                showTicks="always"
                thumbLabel="always" />
            <v-slider
                label="印字　＞　筋の数"
                v-model="printing1FileNum"
                :min="printing1FileMin"
                :max="printing1FileMax"
                step="1"
                showTicks="always"
                thumbLabel="always" />
            <v-slider
                label="印字　＞　段の数"
                v-model="printing1RankNum"
                :min="printing1RankMin"
                :max="printing1RankMax"
                step="1"
                showTicks="always"
                thumbLabel="always" />
            <v-switch
                v-model="printing1IsLooping"
                :label="printing1IsLooping ? '［印字の端と端がつながって（ループして）］います' : '［印字の端と端がつながって（ループして）］いません'"
                color="green"
                :hideDetails="true"
                inset />
            <p>マスクの枠の幅。右側と下側は、１マス多めに付きます：</p>
            <v-slider
                label="マスクの枠の幅"
                v-model="board1WithMaskSizeSquare"
                :min="0"
                :max="2"
                step="1"
                showTicks="always"
                thumbLabel="always" />
            <v-switch
                v-model="printing1OutOfSightIsLock"
                :label="printing1OutOfSightIsLock ? '［画面外を見せない］中' : '［画面外を見せない］をしていません'"
                color="green"
                :hideDetails="true"
                inset />
                <section class="sec-1">
                    <v-switch
                        v-model="player1CanBoardEdgeWalking"
                        :disabled="!player1CanBoardEdgeWalkingIsEnabled"
                        :label="player1CanBoardEdgeWalking ? '［盤の端まで歩ける］を可能中' : '［盤の端まで歩ける］を可能にしていません'"
                        color="green"
                        :hideDetails="true"
                        inset />
                </section>
            <br/>
        </section>
    </section>

    <br/>
    <h5><span class="parent-header-lights-out">ＲＰＧの歩行グラフィック　＞　</span><span class="parent-header">回り込むタイルへ投影・両端つながりの像・視野外マスク例示　＞　</span>ソースコード</h5>
    <section class="sec-5">
        <source-link
            pagePath="/making/input-axis/rpg-walk-tiles-wraparound-projection-loop-outofsight-1"/>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, ref, watch } from 'vue';
    // 👆 ［初級者向けのソースコード］では、 reactive は使いません。
    import type { Ref } from 'vue';

    import { VBtn } from 'vuetify/components';

    // ++++++++++++++
    // + 互換性対応 +
    // ++++++++++++++

    import type { CompatibleStyleValue }  from '../../../compatibles/compatible-style-value';

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

    // ++++++++++++++++++
    // + コンポーザブル +
    // ++++++++++++++++++

    import { getFileAndRankFromIndex, getFixedSquareIndexFromTileIndex, getPrintingIndexFromFixedSquareIndex, wrapAround } from '../../../composables/board-operation';
    import {
        getPlayer1File, getPlayer1Rank,
        isPlayerInputKey,
        playerMotionClearIfCountZero, playerImageAndPositionAndWaitUpdate, playerMotionCountDown, playerMotionUpdateByInputWithWrapAround,
    } from '../../../composables/player-controller';
    import {
        checkOutOfSightBottomIsLook, checkOutOfSightLeftIsLook, checkOutOfSightRightIsLook, checkOutOfSightTopIsLook, printingImageAndPositionAndWaitUpdate, printingMotionClearIfCountZero, printingMotionCountDown, printingMotionUpdateByInputWithWrapAround,
    } from '../../../composables/printing-controller'
    import type { PlayerInput, PlayerMotion } from '../../../composables/player-controller';
    import type { PrintingInput, PrintingMotion } from '../../../composables/printing-controller';

    // ********************
    // * インターフェース *
    // ********************

    import type Rectangle from '../../../interfaces/Rectangle';


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

    // ++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　何もしないボタン +
    // ++++++++++++++++++++++++++++++++++++++

    const noopButton = ref<InstanceType<typeof VBtn> | null>(null);

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

    // ++++++++++++++++++++++++
    // + オブジェクト　＞　盤 +
    // ++++++++++++++++++++++++

    const board1SquareWidth = 32;
    const board1SquareHeight = 32;
    const board1FileMax = 6;
    const board1RankMax = 6;
    const board1FileNum = ref<number>(5);   // 筋の数。ただし、右側と下側に１マス余分に付いているマスクは含まない。
    const board1RankNum = ref<number>(5);   // 段の数
    const board1Area = computed(()=> {  // 盤のマス数
        return board1FileNum.value * board1RankNum.value;
    });
    // ※　盤およびその各タイルは、決まりきった位置でラップアラウンドを繰り返すだけです。座標が大きく移動することはありません。
    const board1WithMaskSizeSquare = ref<number>(1);    // マスクの幅（単位：マス）
    const board1WithMaskBottomRightMargin: number = 1;  // マスクは右下に１マス分多く作ります。
    const bothSide = 2;     // 左と右とか、上と下とか、対。
    const board1WithMaskFileNum = computed<number>(()=>{        // マスク付きの場合の列数。右側の多めの１マスを含む。

        // 盤の端歩き対応：
        const minWidth = bothSide * board1WithMaskSizeSquare.value + board1WithMaskBottomRightMargin;  // マスクの横幅より小さくはなりません。
        if (board1FileNum.value < minWidth) {
            return minWidth;
        }

        return board1FileNum.value + board1WithMaskBottomRightMargin;
    });
    const board1WithMaskRankNum = computed<number>(()=>{

        const minHeight = bothSide * board1WithMaskSizeSquare.value + board1WithMaskBottomRightMargin;
        if (board1RankNum.value < minHeight) {
            return minHeight;
        }

        return board1RankNum.value + board1WithMaskBottomRightMargin;
    });
    const board1Style = computed<CompatibleStyleValue>(()=>{ // ボードとマスクを含んでいる領域のスタイル
        return {
            width: `${board1WithMaskFileNum.value * board1SquareWidth}px`,
            height: `${board1WithMaskRankNum.value * board1SquareHeight}px`,
            zoom: appZoom.value,
        };
    });
    const getSquareStyleFromTileIndex = computed<
        (tileIndex: number)=>CompatibleStyleValue
    >(() => {
        return (tileIndex: number)=>{
            // プレイヤーが初期位置にいる場合の、マスの位置。
            const [tileFile, tileRank] = getFileAndRankFromIndex(tileIndex, board1FileNum.value);
            const homeLeft = tileFile * board1SquareWidth;
            const homeTop = tileRank * board1SquareHeight;

            const [offsetLeftLoop, offsetTopLoop] = wrapAround(
                homeLeft,
                homeTop,
                printing1Left.value,
                printing1Top.value,
                board1FileNum.value * board1SquareWidth,
                board1RankNum.value * board1SquareHeight,
            );

            return {
                left: `${homeLeft + offsetLeftLoop}px`,
                top: `${homeTop + offsetTopLoop}px`,
                width: `${board1SquareWidth}px`,
                height: `${board1SquareHeight}px`,
                border: `solid 1px ${tileIndex % 2 == 0 ? 'darkgray' : 'lightgray'}`,
            };
        };
    });

    // ++++++++++++++++++++++++++
    // + オブジェクト　＞　印字 +
    // ++++++++++++++++++++++++++
    //
    // 盤上に表示される数字柄、絵柄など。
    //

    const printing1OutOfSightIsLock = ref<boolean>(false);   // ［画面外隠し］を管理（true: ロックする, false: ロックしない）
    watch(printing1OutOfSightIsLock, (newValue: boolean)=>{
        player1CanBoardEdgeWalkingIsEnabled.value = newValue;
    });
    const printing1IsLooping = ref<boolean>(true);  // ループ状態を管理（true: ループする, false: ループしない）
    const printing1FileMin = 0;
    const printing1RankMin = 0;
    const printing1FileMax = 10;    // 印字の最大サイズは、盤のサイズより大きいです。
    const printing1RankMax = 10;
    const printing1AreaMax = printing1FileMax * printing1RankMax;
    const printing1FileNum = ref<number>(board1FileNum.value);  // 列数
    const printing1RankNum = ref<number>(board1RankNum.value);  // 行数
    // のちのち自機を１ドットずつ動かすことを考えると、 File, Rank ではデジタルになってしまうので、 Left, Top で指定したい。
    const printing1Left = ref<number>(0);
    const printing1Top = ref<number>(0);
    const printing1StringData = ref<string[]>([]);
    // マップデータを生成
    for (let i=0; i<printing1AreaMax; i++) {    // 印字データは最初から最大サイズで用意します。
        printing1StringData.value.push(i.toString().padStart(2, "0"));
    }
    const printing1Input = {  // 入力
        " ": false,
    } as PrintingInput;
    const printing1Motion = ref<PrintingMotion>({  // 印字への入力
        goToHome: false,    // ホームに戻る
        wrapAroundRight: 0, // 負なら左、正なら右
        wrapAroundBottom: 0,    // 負なら上、正なら下
    });
    const printing1MotionSpeed = ref<number>(2);  // 移動速度（単位：ピクセル）
    const printing1MotionWait = ref<number>(0);   // 排他的モーション時間。
    const printing1MotionWalkingFrames: number = 16;       // 歩行フレーム数


    /**
     * マスの印字。
     * @returns 該当なしのとき "-"
     */
    const getPrintingStringFromPrintingIndex = computed<
        (printingIndex: number) => string
    >(() => {
        return (printingIndex: number) => {

            if (printingIndex == -1) {
                return "-"; // 印字のサイズの範囲外になるところには、"-" でも表示しておく
            }

            return printing1StringData.value[printingIndex];
        };
    });

    // ++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　自機のホーム１ +
    // ++++++++++++++++++++++++++++++++++++
    //
    // このサンプルでは、ピンク色に着色しているマスです。
    // ［自機１］に紐づくホームというわけではなく、［自機のホーム］の１つです。
    //

    const playerHome1File = ref<number>(2);    // ホーム
    const playerHome1Rank = ref<number>(2);
    const playerHome1Left = computed(()=>{
        return playerHome1File.value * board1SquareWidth;
    });
    const playerHome1Top = computed(()=>{
        return playerHome1Rank.value * board1SquareHeight;
    });
    const playerHome1Style = computed<CompatibleStyleValue>(()=>{ // ボードとマスクを含んでいる領域のスタイル
        return {
            left: `${playerHome1Left.value}px`,
            top: `${playerHome1Top.value}px`,
            width: `${board1SquareWidth}px`,
            height: `${board1SquareHeight}px`,
        };
    });

    // ++++++++++++++++++++++++++++
    // + オブジェクト　＞　自機１ +
    // ++++++++++++++++++++++++++++

    const player1Width = board1SquareWidth;
    const player1Height = board1SquareHeight;
    // アニメーションのことを考えると、 File, Rank ではデジタルになってしまうので、 Left, Top で指定したい。
    const player1Left = ref<number>(playerHome1Left.value);    // スプライトの位置
    const player1Top = ref<number>(playerHome1Top.value);
    const player1Input = {  // 入力
        " ": false, ArrowUp: false, ArrowRight: false, ArrowDown: false, ArrowLeft: false
    } as PlayerInput;
    const player1AnimationSlow = ref<number>(8);    // アニメーションを何倍遅くするか
    const player1Style = computed<CompatibleStyleValue>(() => ({
        left: `${player1Left.value}px`,
        top: `${player1Top.value}px`,
        width: `${player1Width}px`,
        height: `${player1Height}px`,
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
    const player1Frames : Ref<Rectangle[]> = ref(player1SourceFrames["down"]);
    const player1Motion = ref<PlayerMotion>({   // モーションへの入力
        lookRight: 0,   // 向きを変える
        lookBottom: 0,
        goToHome: false,    // ホームに戻る
        goToRight: 0,   // 負なら左、正なら右へ移動する
        goToBottom: 0,  // 負なら上、正なら下へ移動する
    });
    const player1MotionSpeed = ref<number>(2);  // 移動速度（単位：ピクセル）
    const player1MotionWait = ref<number>(0);   // 排他的モーション時間。
    const player1MotionFacingFrames: number = 1;    // 振り向くフレーム数
    const player1MotionWalkingFrames: number = 16;  // 歩行フレーム数
    const player1CanBoardEdgeWalking = ref<boolean>(false); // ［盤の端の歩行］可能状態を管理（true: 可能にする, false: 可能にしない）
    const player1CanBoardEdgeWalkingIsEnabled = ref<boolean>(false);    // ［盤の端の歩行］可能状態の活性性を管理（true: 不活性にする, false: 活性にする）

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　視界の外１ +
    // ++++++++++++++++++++++++++++++++

    const outOfSight1Style = computed<CompatibleStyleValue>(()=>{
        return {
            width: `${board1WithMaskFileNum.value * board1SquareWidth}px`,
            height: `${board1WithMaskRankNum.value * board1SquareHeight}px`,
            borderTop: `solid ${board1WithMaskSizeSquare.value * board1SquareHeight}px rgba(0,0,0,0.5)`,
            borderRight: `solid ${(board1WithMaskSizeSquare.value + board1WithMaskBottomRightMargin) * board1SquareWidth}px rgba(0,0,0,0.5)`,
            borderBottom: `solid ${(board1WithMaskSizeSquare.value + board1WithMaskBottomRightMargin) * board1SquareHeight}px rgba(0,0,0,0.5)`,
            borderLeft: `solid ${board1WithMaskSizeSquare.value * board1SquareWidth}px rgba(0,0,0,0.5)`,
        };
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

            if (isPlayerInputKey(e.key)) {  // 型ガード
                player1Input[e.key] = true; // 型チェック済み（文字列→キー名）
                printing1Input[e.key] = true;
            }
        });
        window.addEventListener('keyup', (e: KeyboardEvent) => {
            if (isPlayerInputKey(e.key)) {  // 型ガード
                player1Input[e.key] = false; // 型チェック済み（文字列→キー名）
                printing1Input[e.key] = false;
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

            // ++++++++++++++++++++++++
            // + モーション・タイマー +
            // ++++++++++++++++++++++++

            printingMotionCountDown(
                printing1MotionWait,
            );
            playerMotionCountDown(
                player1MotionWait,
            );

            // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // + モーション・ウェイトが０のとき、モーションのクリアー +
            // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

            printingMotionClearIfCountZero(
                printing1Motion,
                printing1MotionWait.value,
            );
            playerMotionClearIfCountZero(
                player1Motion,
                player1MotionWait.value,
            );

            // ++++++++++++++++++++++++++++++
            // + キー入力をモーションに変換 +
            // ++++++++++++++++++++++++++++++

            printingMotionUpdateByInputWithWrapAround(
                printing1OutOfSightIsLock.value,
                board1SquareWidth,
                board1SquareHeight,
                board1FileNum.value,
                board1RankNum.value,
                board1WithMaskSizeSquare.value,
                printing1FileNum.value,
                printing1RankNum.value,
                printing1Left.value,
                printing1Top.value,
                printing1Input,
                printing1Motion,
                printing1MotionWait.value,
                ()=>{ return getPlayer1File(player1Left.value, board1SquareWidth) > playerHome1File.value; },   // 自機がホーム・ポジションより右に居る
                ()=>{ return getPlayer1File(player1Left.value, board1SquareWidth) < playerHome1File.value; },   // 自機がホーム・ポジションより左に居る
                ()=>{ return getPlayer1Rank(player1Top.value, board1SquareHeight) > playerHome1Rank.value; },   // 自機がホーム・ポジションより下に居る
                ()=>{ return getPlayer1Rank(player1Top.value, board1SquareHeight) < playerHome1Rank.value; },   // 自機がホーム・ポジションより上に居る
            );
            playerMotionUpdateByInputWithWrapAround(
                printing1OutOfSightIsLock.value,
                board1SquareWidth,
                board1SquareHeight,
                board1FileNum.value,
                board1RankNum.value,
                board1WithMaskSizeSquare.value,
                playerHome1File.value,
                playerHome1Rank.value,
                player1Left.value,
                player1Top.value,
                player1Input,
                player1Motion,
                player1MotionWait.value,
                player1CanBoardEdgeWalking.value,
                ()=>{ return checkOutOfSightLeftIsLook(board1SquareWidth, board1WithMaskSizeSquare.value, printing1Left.value); },  // ここで進むと、左側に外側が見えるなら。
                ()=>{ return checkOutOfSightRightIsLook(board1SquareWidth, board1WithMaskSizeSquare.value, board1FileNum.value, printing1FileNum.value, printing1Left.value); },    // ここで進むと、右側に外側が見えるなら。
                ()=>{ return checkOutOfSightTopIsLook(board1SquareHeight, board1WithMaskSizeSquare.value, printing1Top.value); },    // ここで進むと、上側に外側が見えるなら。
                ()=>{ return checkOutOfSightBottomIsLook(board1SquareHeight, board1WithMaskSizeSquare.value, board1RankNum.value, printing1RankNum.value, printing1Top.value); },   // ここで進むと、下側に外側が見えるなら。
            );

            // ++++++++++++++++++++++++++++++
            // + 向き・移動・ウェイトを更新 +
            // ++++++++++++++++++++++++++++++

            printingImageAndPositionAndWaitUpdate(
                printing1Left,
                printing1Top,
                printing1Motion.value,
                printing1MotionSpeed.value,
                printing1MotionWait,
                printing1MotionWalkingFrames,
            );
            playerImageAndPositionAndWaitUpdate(
                playerHome1Left.value,
                playerHome1Top.value,
                player1Left,
                player1Top,
                player1Motion.value,
                player1MotionSpeed.value,
                player1MotionWait,
                player1SourceFrames,
                player1Frames,
                player1MotionFacingFrames,
                player1MotionWalkingFrames,
            );

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
    div.square {    /* マス */
        position: absolute;
    }
    span.board-slidable-tile-index {  /* マスの物自体に付いている番号。その場所は、ラップアラウンドしてすり替わることがある。 */
        position: absolute;
        width: 100%;
        text-align: center;
        font-size: 6px;
    }
    span.board-fixed-square-index { /* マスの画面上の見た目の位置に付いている番号 */
        position: absolute;
        top: 6px;
        width: 100%;
        text-align: center;
        font-size: 6px;
    }
    span.board-printing-index {
        position: absolute;
        top: 12px;
        width: 100%;
        text-align: center;
        font-size: 6px;
    }
    span.board-square-printing-string {   /* マスの印字 */
        position: absolute;
        top: 16px;
        width: 100%;
        text-align: center;
        font-size: 12px;
    }
    div.playerHome {    /* 自機のホーム１ */
        position: absolute;
        background-color: lightpink;
    }
    div.player {    /* 自機１ */
        position: absolute;
        image-rendering: pixelated;
    }
    div.out-of-sight {  /* 視界の外１ */
        position: absolute;
        image-rendering: pixelated;
    }

</style>
