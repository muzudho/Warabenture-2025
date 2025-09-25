<template>

    <comment>機能</comment>
    <button-20250822 ref="button1Ref"/>

    <comment>以降、ページ</comment>
    <the-app-header/>

    <button-to-back-to-contents
        class="sec-0 mt-6"
        pagePath="."
    />

    <h1>五目並べ</h1>
    <section class="sec-1 pt-6 mb-6">

        <!-- 免責 -->
        <v-alert type="warning" class="mb-6" title="免責！" text="画面は開発中のものだぜ（＾▽＾）！" closable />

        <!-- 外付けシステムボタン -->
        <section class="mb-6">

            
            <v-btn
                @touchstart.prevent="button1Ref?.press($event, onGamePowerOnButtonPushed, {repeat: false});"
                @touchend="button1Ref?.release();"
                @touchcancel="button1Ref?.release();"
                @touchleave="button1Ref?.release();"
                @mousedown.prevent="button1Ref?.handleMouseDown($event, onGamePowerOnButtonPushed, {repeat: false})"
                @mouseup="button1Ref?.release();"
                @mouseleave="button1Ref?.release();"
            >{{ gameMachine1IsPowerOn ? "Off" : "On" }}</v-btn>

            
            <v-btn
                :disabled="!gameMachine1GameStartButton1Enabled"
                @touchstart.prevent="button1Ref?.press($event, onGameStartOrEndButtonPushed, {repeat: false});"
                @touchend="button1Ref?.release();"
                @touchcancel="button1Ref?.release();"
                @touchleave="button1Ref?.release();"
                @mousedown.prevent="button1Ref?.handleMouseDown($event, onGameStartOrEndButtonPushed, {repeat: false})"
                @mouseup="button1Ref?.release();"
                @mouseleave="button1Ref?.release();"
            >{{ gameMachine1IsPlaying ? "⏹" : "▶" }}</v-btn>


            <v-btn
                :disabled="!gameMachine1GamePauseButton1Enabled"
                @touchstart.prevent="button1Ref?.press($event, onGamePauseOrRestartButtonPushed, {repeat: false});"
                @touchend="button1Ref?.release();"
                @touchcancel="button1Ref?.release();"
                @touchleave="button1Ref?.release();"
                @mousedown.prevent="button1Ref?.handleMouseDown($event, onGamePauseOrRestartButtonPushed, {repeat: false})"
                @mouseup="button1Ref?.release();"
                @mouseleave="button1Ref?.release();"
            >{{ gameMachine1IsPlayingPause ? "⏯" : "⏸" }}</v-btn>


        </section>


        <!-- ゲームマシン１ -->
        <game-machine-waratch2
            :style="{
                left: '0px',
                top: '0px',
            }"
            :screenWidth="gameMachine1Zoom * gameMachine1Width"
            :screenHeight="gameMachine1Zoom * gameMachine1Height"
            :powerOn="gameMachine1IsPowerOn"
            v-on:onLeftButtonPressed="onLeftButtonPressed"
            v-on:onLeftButtonReleased="onLeftButtonReleased"
            v-on:onUpButtonPressed="onUpButtonPressed"
            v-on:onUpButtonReleased="onUpButtonReleased"
            v-on:onRightButtonPressed="onRightButtonPressed"
            v-on:onRightButtonReleased="onRightButtonReleased"
            v-on:onDownButtonPressed="onDownButtonPressed"
            v-on:onDownButtonReleased="onDownButtonReleased"
            v-on:onSpaceButtonPressed="onSpaceButtonPressed"
            v-on:onSpaceButtonReleased="onSpaceButtonReleased"
        >
            <template #default>
                <!-- ゲーム画面の全体サイズと、切り抜き領域 -->
                <div
                    :style="{
                        visibility: gameMachine1Visibility,
                        width: `${gameMachine1Width}px`,
                        height: `${gameMachine1Height}px`,
                        zoom: gameMachine1Zoom,
                    }"
                    style="
                        position:relative;
                        left: 0;
                        top: 0;
                        background-color: #303030;  /* 黒背景 */
                    "
                >
                    <!-- グリッド -->
                    <div
                        v-for="sq in tileBoard1Area"
                        :key="sq"
                        :style="{
                            top: `${Math.floor((sq - 1) / tileBoard1FileNum) * tileBoard1TileHeight}px`,
                            left: `${((sq - 1) % tileBoard1FileNum) * tileBoard1TileWidth}px`,
                            width: `${tileBoard1TileWidth}px`,
                            height: `${tileBoard1TileHeight}px`,
                        }"
                        style="
                            position: absolute;
                            border: solid 1px gray;
                        "
                    ></div>

                    <!-- マス -->
                    <v-btn
                        flat
                        v-for="sq in range(0, gameBoard1Area)"
                        :key="sq"
                        :style="{
                            left: `${(sq % gameBoard1FileNum + 1) * tileBoard1TileWidth}px`,
                            top: `${(Math.floor(sq / gameBoard1FileNum) + 1) * tileBoard1TileHeight}px`,
                            minWidth: `${gameBoard1SquareSrcTilemapRect(sq).width}px`,
                            width: `${gameBoard1SquareSrcTilemapRect(sq).width}px`,
                            height: `${gameBoard1SquareSrcTilemapRect(sq).height}px`,
                            color: gameBoard1StoneColorNameMap[gameBoard1StoneColorArray[sq]],    /* 石の色 */
                            backgroundImage: `url('${spriteBoard001Png}')`,
                            backgroundPosition: gameBoard1SquareBackgroundPosition(sq),   // 元画像のスケールで逆向きシフトする
                            backgroundRepeat: 'no-repeat',
                            pointerEvents: gameBoard1StoneClickable(sq) ? 'auto' : 'none',  /* 石が置いてあったら、クリックを無視する */
                        }"
                        style="
                            position: absolute;
                            border-radius: 0;
                            font-size: 24px;
                            line-height: 90%;   /* 目視確認で石がマスの真ん中にくるよう調整 */
                            z-index: 120;   /* 目に見えませんが、ボタンが光景に沈んでいるので、前景にします */
                        "
                        @click="onGameBoard1Clicked(sq)"
                    ></v-btn>
                    <!--
                        TODO 廃止： {{ gameBoard1StoneShapeArray[sq] }}
                    -->

                    <!-- 筋の符号 -->
                    <span
                        v-for="file in gameBoard1FileNameArray.length"
                        :key="file"
                        :style="{
                            position: 'absolute',
                            left: `${file * 32 + 6}px`,
                            top: '510px',
                            width: '20px',
                            color: 'white',
                            fontSize: '24px',
                            zIndex: 200,
                            textAlign: 'center',
                        }"
                    >{{ gameBoard1FileNameArray[file - 1] }}</span>

                    <!-- 段の符号 -->
                    <span
                        v-for="rank in 15"
                        :key="rank"
                        :style="{
                            position: 'absolute',
                            left: '3px',
                            top: `${(16-rank) * 32}px`,
                            width: '20px',
                            color: 'white',
                            fontSize: '24px',
                            zIndex: 200,
                            textAlign: 'right',
                        }"
                    >{{ rank }}</span>

                </div>
            </template>
        </game-machine-waratch2>
        <!--
            NOTE: src属性は Vite が @/ を解決してくれるが、style="" の中までは解決してくれない。style="" の中を解決するのはブラウザー。だから、 import文を使う。
            <img src="@/assets/img/references/Sprite_Board_001.png" />
            <v-btn :style="{
                backgroundImage: `url('${spriteBoard001Png}')`,
            }"></v-btn>
            <v-btn :style="{
                backgroundImage: `url('${spriteBoard001Png}')`,
                backgroundPosition: `0px 0px`,   // 元画像のスケールでシフトする
                minWidth: '32px',   // ボタンには min-width が設定されているから、上書きすること
                width: '32px',
                height: '32px',
                // backgroundSize: `32px 32px`, // これは元画像のサイズ指定。拡縮に使う
                backgroundRepeat: 'no-repeat',
            }"></v-btn>
        -->

        <!-- 環境設定パネル１ -->
        <section class="sec-0 mt-6 mb-6">
            <v-btn
                class="code-key"
                @touchstart.prevent="button1Ref?.press($event, onEnvironmentConfig1ButtonPressed);"
                @touchend="button1Ref?.release();"
                @touchcancel="button1Ref?.release();"
                @touchleave="button1Ref?.release();"
                @mousedown.prevent="button1Ref?.handleMouseDown($event, onEnvironmentConfig1ButtonPressed)"
                @mouseup="button1Ref?.release();"
                @mouseleave="button1Ref?.release();"
            >{{ gameMachine1EnvironmentConfigIsShowing ? '⚙️環境設定を終わる' : '⚙️環境設定を表示' }}</v-btn>
            <section
                v-if="gameMachine1EnvironmentConfigIsShowing"
                class="sec-0 pt-6 pb-6"
                style="background-color: rgb(0, 0, 0, 0.1);"
            >
                <v-slider
                    label="ズーム"
                    v-model="gameMachine1Zoom"
                    :min="0.375"
                    :max="4"
                    step="0.125"
                    showTicks="always"
                    thumbLabel="always" />
            </section>
        </section>

        <!-- 各種表示 -->
        <p>{{ gameBoard1DebugMessage }}</p>
        <p>次の手数={{ gameBoard1Times+1 }}</p>
        <p>次の手番=<span :style="{
            color: gameBoard1StoneColorNameMap[gameBoard1Turn],
        }">●</span></p>
        <p><span
            :style="{
                color: gameBoard1StoneColorNameMap[1],
            }">●</span>の数={{ gameBoard1StoneCount[1] }}</p>
        <p><span
            :style="{
                color: gameBoard1StoneColorNameMap[2],
            }">●</span>の数={{ gameBoard1StoneCount[2] }}</p>
        <p>連続パス回数={{ gameBoard1PassCount }}</p>
        <p>{{ gameBoard1IsEnd ? (gameIsFullCapacity() ? '満局' : '終局') : '' }}</p>


        <v-btn
            class="code-key"
            @touchstart.prevent="button1Ref?.press($event, onDebugInfoButtonPressed);"
            @touchend="button1Ref?.release();"
            @touchcancel="button1Ref?.release();"
            @touchleave="button1Ref?.release();"
            @mousedown.prevent="button1Ref?.handleMouseDown($event, onDebugInfoButtonPressed)"
            @mouseup="button1Ref?.release();"
            @mouseleave="button1Ref?.release();"
        >{{ debugInfo1IsShowing ? '⚙️デバッグ情報を終わる' : '⚙️デバッグ情報を表示' }}</v-btn>
        <section v-if="debugInfo1IsShowing" class="sec-1">
            デバッグ：<br/>
            <p>マス番号:</p>
            <div
                class="mb-6"
            >
                <p
                    v-for="rank in range(0, 15)"
                    :key="rank"
                >
                    <span
                        v-for="sq in range(rank * 15, (rank + 1) * 15)"
                        :key="sq"
                    >
                        {{ sq.toString().padStart(3, '0') }}&nbsp;
                    </span><br/>
                </p>
            </div>

            <p>石の色:</p>
            <div
                class="mb-6"
            >
                <p
                    v-for="rank in range(0, 15)"
                    :key="rank"
                >
                    <span
                        v-for="sq in range(rank * 15, (rank + 1) * 15)"
                        :key="sq"
                    >
                        {{ gameBoard1StoneColorArray[sq].toString().padStart(1, '0') }}&nbsp;
                    </span><br/>
                </p>
            </div>
            
            <p>石の状態:</p>
            <div
                class="mb-6"
            >
                <p
                    v-for="rank in range(0, 15)"
                    :key="rank"
                >
                    <span
                        v-for="sq in range(rank * 15, (rank + 1) * 15)"
                        :key="sq"
                    >
                        {{ gameBoard1StoneStateArray[sq].toString().padStart(2, '0') }}&nbsp;
                    </span><br/>
                </p>
            </div>

            <p>黒石の最長　＞　水平方向:</p>
            <div
                class="mb-6"
            >
                <p
                    v-for="rank in range(0, 15)"
                    :key="rank"
                >
                    <span
                        v-for="sq in range(rank * 15, (rank + 1) * 15)"
                        :key="sq"
                    >
                        {{ gameBoard1ColorsAndStonesMaxLengthHorizontal[COLOR_BLACK][sq].toString().padStart(2, '0') }}&nbsp;
                    </span><br/>
                </p>
            </div>

            <p>白石の最長　＞　水平方向:</p>
            <div
                class="mb-6"
            >
                <p
                    v-for="rank in range(0, 15)"
                    :key="rank"
                >
                    <span
                        v-for="sq in range(rank * 15, (rank + 1) * 15)"
                        :key="sq"
                    >
                        {{ gameBoard1ColorsAndStonesMaxLengthHorizontal[COLOR_WHITE][sq].toString().padStart(2, '0') }}&nbsp;
                    </span><br/>
                </p>
            </div>

            <p>黒石の最長　＞　垂直方向:</p>
            <div
                class="mb-6"
            >
                <p
                    v-for="rank in range(0, 15)"
                    :key="rank"
                >
                    <span
                        v-for="sq in range(rank * 15, (rank + 1) * 15)"
                        :key="sq"
                    >
                        {{ gameBoard1ColorsAndStonesMaxLengthVertical[COLOR_BLACK][sq].toString().padStart(2, '0') }}&nbsp;
                    </span><br/>
                </p>
            </div>

            <p>白石の最長　＞　垂直方向:</p>
            <div
                class="mb-6"
            >
                <p
                    v-for="rank in range(0, 15)"
                    :key="rank"
                >
                    <span
                        v-for="sq in range(rank * 15, (rank + 1) * 15)"
                        :key="sq"
                    >
                        {{ gameBoard1ColorsAndStonesMaxLengthVertical[COLOR_WHITE][sq].toString().padStart(2, '0') }}&nbsp;
                    </span><br/>
                </p>
            </div>

            <p>黒石の最長　＞　バロック対角線:</p>
            <div
                class="mb-6"
            >
                <p
                    v-for="rank in range(0, 15)"
                    :key="rank"
                >
                    <span
                        v-for="sq in range(rank * 15, (rank + 1) * 15)"
                        :key="sq"
                    >
                        {{ gameBoard1ColorsAndStonesMaxLengthBaroqueDiagonal[COLOR_BLACK][sq].toString().padStart(2, '0') }}&nbsp;
                    </span><br/>
                </p>
            </div>

            <p>白石の最長　＞　バロック対角線:</p>
            <div
                class="mb-6"
            >
                <p
                    v-for="rank in range(0, 15)"
                    :key="rank"
                >
                    <span
                        v-for="sq in range(rank * 15, (rank + 1) * 15)"
                        :key="sq"
                    >
                        {{ gameBoard1ColorsAndStonesMaxLengthBaroqueDiagonal[COLOR_WHITE][sq].toString().padStart(2, '0') }}&nbsp;
                    </span><br/>
                </p>
            </div>

            <p>黒石の最長　＞　シニスター対角線:</p>
            <div
                class="mb-6"
            >
                <p
                    v-for="rank in range(0, 15)"
                    :key="rank"
                >
                    <span
                        v-for="sq in range(rank * 15, (rank + 1) * 15)"
                        :key="sq"
                    >
                        {{ gameBoard1ColorsAndStonesMaxLengthSinisterDiagonal[COLOR_BLACK][sq].toString().padStart(2, '0') }}&nbsp;
                    </span><br/>
                </p>
            </div>

            <p>白石の最長　＞　シニスター対角線:</p>
            <div
                class="mb-6"
            >
                <p
                    v-for="rank in range(0, 15)"
                    :key="rank"
                >
                    <span
                        v-for="sq in range(rank * 15, (rank + 1) * 15)"
                        :key="sq"
                    >
                        {{ gameBoard1ColorsAndStonesMaxLengthSinisterDiagonal[COLOR_WHITE][sq].toString().padStart(2, '0') }}&nbsp;
                    </span><br/>
                </p>
            </div>
        </section>
    </section>
    

    <button-to-back-to-top class="sec-1 pt-6"/>
    <h2>ソースコード</h2>
    <section class="sec-2">
        <source-link/>
    </section>

    <button-to-back-to-top class="sec-0 pt-6"/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, ref } from 'vue';
    import type { Ref } from 'vue';

    // ++++++++++++++++++++++++++++
    // + インポート　＞　アセット +
    // ++++++++++++++++++++++++++++

    import spriteBoard001Png from '@/assets/img/reference/202509__warabenture__21-0649-spriteBoard002-o1o0.png';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    // アルファベット順
    import Button20250822 from '@/components/Button20250822.vue';
    import ButtonToBackToContents from '@/components/ButtonToBackToContents.vue';
    import ButtonToBackToTop from '@/components/ButtonToBackToTop.vue';
    import Comment from '@/components/Comment.vue';
    import GameMachineWaratch2 from '@/components/GameMachineWaratch2.vue';
    import SourceLink from '@/components/SourceLink.vue';
    import Stopwatch from '@/components/Stopwatch.vue';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーザブル +
    // ++++++++++++++++++++++++++++++++++

    // from 部分のアルファベット順
    import { isPlayerInputKey } from '@/composables/player-controller';
    import { range } from '@/composables/range';

    // ++++++++++++++++++++++++++++++++++++
    // + インポート　＞　インターフェース +
    // ++++++++++++++++++++++++++++++++++++

    import type Rectangle from '@/interfaces/Rectangle';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import TheAppHeader from '@/pages/the-app-header.vue';


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++
    // + オブジェクト　＞　機能拡張 +
    // ++++++++++++++++++++++++++++++

    const button1Ref = ref<InstanceType<typeof Button20250822> | null>(null);

    // ++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲームマシン１ +
    // ++++++++++++++++++++++++++++++++++++

    const gameMachine1Zoom = ref<number>(0.5);    // ズーム
    const gameMachine1Width = computed(()=>{
        //return 512;
        return tileBoard1FileNum.value * tileBoard1TileWidth.value;
    });
    const gameMachine1Height = computed(()=>{
        //return 512;
        return tileBoard1RankNum.value * tileBoard1TileHeight.value;
    });
    const gameMachine1IsPowerOn = ref<boolean>(false);  // 電源ボタンは演出です
    const gameMachine1IsPlaying = ref<boolean>(false);  // ゲーム中
    const gameMachine1IsPlayingPause = ref<boolean>(false); // ゲームは一時停止中
    const gameMachine1Visibility = ref<string>('hidden');
    const gameMachineRandomLimit: number = 2 * Math.PI * Math.E;    // 偏りのない乱数なら、マスをランダムに指定しても、マス目の数 × 2πe回試行すれば、すべてのマスをだいたい１回は訪問するという経験則（＾～＾）確率論の［クーポン収集問題（Coupon Collector's Problem）］よりでかい数。

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲームマシン１　＞　ストップウォッチ１ +
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    const gameMachine1Stopwatch1Ref = ref<InstanceType<typeof Stopwatch> | null>(null);

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲームマシン１　＞　開始／終了ボタン１ +
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    const gameMachine1GameStartButton1Enabled = ref<boolean>(false);

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲームマシン１　＞　一時停止／再開ボタン +
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    const gameMachine1GamePauseButton1Enabled = ref<boolean>(false);

    // ++++++++++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲームマシン１　＞　環境設定 +
    // ++++++++++++++++++++++++++++++++++++++++++++++++++

    const gameMachine1EnvironmentConfigIsShowing = ref<boolean>(false);

    // ++++++++++++++++++++++++++++
    // + オブジェクト　＞　自機１ +
    // ++++++++++++++++++++++++++++

    const player1Input = <Record<string, boolean>>{                     // 入力
        // アルファベット順
        " ": false, ArrowDown: false, ArrowLeft: false, ArrowUp: false, ArrowRight: false,
    };

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　タイル盤１ +
    // ++++++++++++++++++++++++++++++++

    // NOTE: ソース画像マップと、表示画面のスケールは等倍とします。変えると難しい。
    const tileBoard1TileWidth = ref<number>(32);    // マスの横幅（ピクセル）
    const tileBoard1TileHeight = ref<number>(32);   // マスの縦幅（ピクセル）
    const tileBoard1FileNum = ref<number>(15 + 2);  // 盤が横に何マスか
    const tileBoard1RankNum = ref<number>(15 + 2);  // 盤が縦に何マスか
    const tileBoard1Area = computed(()=>{   // 盤のマス数
        return tileBoard1FileNum.value * tileBoard1RankNum.value;
    });

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲーム盤１ +
    // ++++++++++++++++++++++++++++++++

    const ONE_WING_MAX_LENGTH = 4;  // 片翼（着手点を含まない）の最大長さ
    const FIVE_LENGTH = 5;  // ［五］の長さ
    const gameBoard1FileNameArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
    const COLOR_EMPTY = 0;  // 空きマス。石の色無し
    const COLOR_BLACK = 1;  // 黒石
    const COLOR_WHITE = 2;  // 白石
    const gameBoard1FileNum = ref<number>(15);  // 盤が横に何マスか
    const gameBoard1RankNum = ref<number>(15);  // 盤が縦に何マスか
    const gameBoard1Area = computed(()=>{
        return gameBoard1FileNum.value * gameBoard1RankNum.value;
    })
    const gameBoard1StoneShapeArray = ref<string[]>(new Array(gameBoard1Area.value).fill(''));    // 石の形
    for(let sq: number=0; sq<gameBoard1Area.value; sq++){
        gameBoard1StoneShapeArray.value[sq] = '●'
    }
    const gameBoard1StoneColorArray = ref<number[]>(new Array(gameBoard1Area.value).fill(0));    // 石の色
    const gameBoard1StoneColorNameMap: Record<number, string> = {
        0: 'transparent',
        1: '#C86868', // 明るい茶色
        2: '#289028', // 暗い緑
    }
    const gameBoard1DebugMessage = ref<string>('');   // デバッグ用メッセージ
    const gameBoard1StoneClickable = computed<
        (sq: number) => boolean
    >(()=>{    // マスをクリック可能か
        return (sq: number)=>{
            const isEmptySquare = gameBoard1StoneColorArray.value[sq] == 0; // 空マスだ
            return isEmptySquare && !gameBoard1IsEnd.value;
        }
    });
    const gameBoard1Turn = ref<number>(0);
    const gameBoard1Times = ref<number>(0); // 何手目を終えたか。リバーシでは盤上の石の数に等しい
    const gameBoard1StoneCount = ref<number[]>([0, 0, 0]);   // 盤上のプレイヤーの石の数。[0] は未使用
    const gameBoard1PassCount = ref<number>(0); // 連続パス回数
    const gameBoard1IsEnd = ref<boolean>(false);    // 終局しているか

    const gameBoard1ColorsAndStonesMaxLengthHorizontal = ref<number[][]>([  // 石の最長数。水平方向
        new Array(gameBoard1Area.value).fill(0),
        new Array(gameBoard1Area.value).fill(0),
        new Array(gameBoard1Area.value).fill(0),
    ]);
    const gameBoard1ColorsAndStonesMaxLengthVertical = ref<number[][]>([    // 石の最長数。垂直方向
        new Array(gameBoard1Area.value).fill(0),
        new Array(gameBoard1Area.value).fill(0),
        new Array(gameBoard1Area.value).fill(0),
    ]);
    const gameBoard1ColorsAndStonesMaxLengthBaroqueDiagonal = ref<number[][]>([ // 石の最長数。右上に上がる対角線方向
        new Array(gameBoard1Area.value).fill(0),
        new Array(gameBoard1Area.value).fill(0),
        new Array(gameBoard1Area.value).fill(0),
    ]);
    const gameBoard1ColorsAndStonesMaxLengthSinisterDiagonal = ref<number[][]>([    // 石の最長数。右下に下がる体格線方向
        new Array(gameBoard1Area.value).fill(0),
        new Array(gameBoard1Area.value).fill(0),
        new Array(gameBoard1Area.value).fill(0),
    ]);

    // 水平方向に並ぶ［五］の一部の石なら 1 を、
    // 垂直方向に並ぶ［五］の一部の石なら 2 を、
    // バロック対角線方向に並ぶ［五］の一部の石なら 4 を、
    // シニスター対角線方向に並ぶ［五］の一部の石なら 8 を、
    // ［死に石］なら 16 を入れる。
    const STONE_STATE_NONE = 0;
    const STONE_STATE_ALIVE_HORIZONTAL = 1;
    const STONE_STATE_ALIVE_VERTICAL = 2;
    const STONE_STATE_ALIVE_BAROQUE_DIAGONAL = 4;
    const STONE_STATE_ALIVE_SINISTER_DIAGONAL = 8;
    const MAX_LENGTH_DEAD = -1;
    function isAliveStone(sq: number) : boolean {
        return 1 <= gameBoard1StoneStateArray.value[sq] && gameBoard1StoneStateArray.value[sq] <= 15;
    }
    const gameBoard1StoneStateArray = ref<Array<number>>(new Array(gameBoard1Area.value).fill(STONE_STATE_NONE));

    // ボタンの背景画像（のタイル位置の矩形）
    const gameBoard1SquareSrcTilemapRect = computed<
        (sq: number)=>Rectangle
    >(()=>{
        return (sq: number)=>{

            try {
                const stoneColor = gameBoard1StoneColorArray.value[sq];

                function getBoardGridNumber(sq: number) : number {
                    if (isNorthwestCorner(sq)) {return 6;}  // 左上隅
                    if (isNortheastCorner(sq)) {return 12;} // 右上隅
                    if (isSouthwestCorner(sq)) {return 3;}  // 左下隅
                    if (isSoutheastCorner(sq)) {return 9}   // 右下隅
                    if (isNorthEdge(sq))    {return 14;}    // 上辺
                    if (isWestEdge(sq)) {return 7;} // 左辺
                    if (isEastEdge(sq)) {return 13;}    // 右辺
                    if (isSouthEdge(sq))    {return 11;}    // 下辺
                    return 15;  // 盤中
                }

                // 水平、垂直、バロック対角線、シニスター対角線のうち、最も接続数の多いもの：
                const bXBlackMaxLength = Math.max(
                    gameBoard1ColorsAndStonesMaxLengthHorizontal.value[COLOR_BLACK][sq], // 水平
                    gameBoard1ColorsAndStonesMaxLengthVertical.value[COLOR_BLACK][sq],   // 垂直
                    gameBoard1ColorsAndStonesMaxLengthBaroqueDiagonal.value[COLOR_BLACK][sq],    // バロック対角線
                    gameBoard1ColorsAndStonesMaxLengthSinisterDiagonal.value[COLOR_BLACK][sq],   // シニスター対角線
                );
                const bYWhiteMaxLength = Math.max(
                    gameBoard1ColorsAndStonesMaxLengthHorizontal.value[COLOR_WHITE][sq], // 水平
                    gameBoard1ColorsAndStonesMaxLengthVertical.value[COLOR_WHITE][sq],   // 垂直
                    gameBoard1ColorsAndStonesMaxLengthBaroqueDiagonal.value[COLOR_WHITE][sq],    // バロック対角線
                    gameBoard1ColorsAndStonesMaxLengthSinisterDiagonal.value[COLOR_WHITE][sq],   // シニスター対角線
                );

                // function getMarkerCode(conn: number) : string {
                //     if (conn <= 0) { return '00'; }
                //     if (conn <= 1) { return '01'; }
                //     if (conn <= 2) { return '02'; }
                //     if (conn <= 3) { return '03'; }

                //     if (isAliveStone(sq)) {
                //         return '05';
                //     }

                //     if (
                //         // TODO 4方向が［死に方向］なら、［死に石］だ
                //         gameBoard1StonesMaxLengthOfSlidingWindowHorizontal.value[sq] == RUNS_SLIDING_WINDOW_DEAD
                //         && gameBoard1StonesMaxLengthOfSlidingWindowVertical.value[sq] == RUNS_SLIDING_WINDOW_DEAD
                //         && gameBoard1StonesMaxLengthOfSlidingWindowBaroqueDiagonal.value[sq] == RUNS_SLIDING_WINDOW_DEAD
                //         && gameBoard1StonesMaxLengthOfSlidingWindowSinisterDiagonal.value[sq] == RUNS_SLIDING_WINDOW_DEAD
                //     ) {
                //         return '06';
                //     }

                //     return '04';    // 連続していることが確認できなければ［五］にはなりません。
                // }

                // const markerCode = getMarkerCode(conn);

                // `-${markerCode}-${}`
               

                const aGridNumber = getBoardGridNumber(sq);
                const imageKey = makeImageKey(stoneColor, bYWhiteMaxLength, bXBlackMaxLength, aGridNumber);
                
                if (!(imageKey in gameBoard1SourceTilemap1Frames)) {
                    console.log(`ERROR: imageKey=${imageKey} stoneColor=${stoneColor} bYWhiteMaxLength=${bYWhiteMaxLength} bXBlackMaxLength=${bXBlackMaxLength} aGridNumber=${aGridNumber}`);
                }

                return gameBoard1SourceTilemap1Frames[imageKey];

            } catch (err: unknown) {
                const errorMessage = err instanceof Error ? err.message : String(err);
                console.error('GomokuError:', errorMessage);
                return {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                } as Rectangle;

            }
        };
    });
    const gameBoard1SquareBackgroundPosition = computed<
        (sq: number)=>string
    >(()=>{
        return (sq: number)=>{
            // マスの画像は、［石の接続数］の影響を受ける

            const rect = gameBoard1SquareSrcTilemapRect.value(sq);
            return `${-rect.left}px ${-rect.top}px`;
        };
    });

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲーム盤１　＞　元タイルマップ１ +
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++

    function getAyAxByGridNumber(gridNumber: number) : [number, number] {
        if (gridNumber == 0) {return [0, 0];}
        if (gridNumber == 6) {return [1, 0];}
        if (gridNumber == 14) {return [1, 1];}
        if (gridNumber == 12) {return [1, 2];}
        if (gridNumber == 7) {return [2, 0];}
        if (gridNumber == 15) {return [2, 1];}
        if (gridNumber == 13) {return [2, 2];}
        if (gridNumber == 3) {return [3, 0];}
        if (gridNumber == 11) {return [3, 1];}
        // if (gridNumber == 9) {
        return [3, 2];
        //}
    }


    function getByBxMaxLength(bYWhiteMaxLength:number, bXBlackMaxLength:number) : [number, number] {
        return [
            Math.min(6, bYWhiteMaxLength + 1), // ［死に石］が -1 なので、下駄を１履かせている
            Math.min(6, bXBlackMaxLength + 1), // ［死に石］が -1 なので、下駄を１履かせている
        ];
    }


    function getCColorCode(dColor: number) : [number, number] {
        if (dColor == COLOR_EMPTY) {return [0, 0];}
        if (dColor == COLOR_BLACK) {return [1, 0];}
        return [1, 1];
    }


    function makeImageKey(cColor: number, bYWhiteMaxLength:number, bXBlackMaxLength:number, aGridNumber:number) : string {
        const [cY, cX] = getCColorCode(cColor);
        const [bY, bX] = getByBxMaxLength(bYWhiteMaxLength, bXBlackMaxLength);
        const [aY, aX] = getAyAxByGridNumber(aGridNumber);
        const imageKey = `board-color-mark-grid-${cY}${cX}-${bY}${bX}-${aY}${aX}`;

        if (cY<0 || 1<cY) { console.log(`ERROR: cY=${cY}`)}
        if (cX<0 || 1<cX) { console.log(`ERROR: cX=${cX}`)}
        if (0==cY && cX==1) { console.log(`ERROR: cY=${cY} cx=${cX}`)}
        if (bY<0 || 6<bY) { console.log(`ERROR: bY=${bY}`)}
        if (bX<0 || 6<bX) { console.log(`ERROR: bX=${bX}`)}
        if (aY<0 || 4<aY) { console.log(`ERROR: aY=${aY}`)}
        if (aX<0 || 3<aX) { console.log(`ERROR: aX=${aX}`)}
        if ((1<=aX && aX<=2) && aY==0) { console.log(`ERROR: aY=${aY} aX=${aX}`)}

        return imageKey;
    }


    //
    // 理屈：
    //
    // 八方罫線魔法陣
    //
    // 008 016 001
    // 168     032
    // 004 064 002
    //
    // 四方罫線魔法陣
    //
    //    01
    // 08    02
    //    04
    //
    // 👇 ［タイル］は以下のようなサイズ。
    //
    //    0  32
    //  0 +---+
    //    |   |
    // 32 +---+
    //
    // tileBoard1TileWidth.value
    // tileBoard1TileHeight.value
    //
    // 👇 以下のように［タイル］が集まって［グループＡ］に固まっている。
    //
    // aY Pixels
    //             0   1   2   ... aX
    //           0  32  64  96 ... Pixels
    //         0 +---+
    // 0         |   |
    //        32 +---+---+---+
    // 1         |┌ |┬ |┐ |
    //        64 +---+---+---+
    // 2         |├ |┼ |┤ |
    //        96 +---+---+---+
    // 3         |└ |┴ |┘ |
    //       128 +---+---+---+
    //
    const aWidth = 3 * tileBoard1TileWidth.value;
    const aHeight = 4 * tileBoard1TileHeight.value;
    //
    // 👇 以下のように［グループＡ］が集まって［グループＢ］に固まっている。
    //
    // bY Pixels
    //             0   1   2   3   4   5   6   7   ... bX
    //           0  96 196 288 384 480 576 672 768 ... Pixels
    //         0 +---+---+---+---+---+---+---+---+
    //  0        |   |   |   |   |   |   |   |   |
    //       128 +---+---+---+---+---+---+---+---+
    //  1        |   |   |   |   |   |   |   |   |
    //       256 +---+---+---+---+---+---+---+---+
    //  2        |   |   |   |   |   |   |   |   |
    //       384 +---+---+---+---+---+---+---+---+
    //  3        |   |   |   |   |   |   |   |   |
    //       512 +---+---+---+---+---+---+---+---+
    //  4        |   |   |   |   |   |   |   |   |
    //       640 +---+---+---+---+---+---+---+---+
    //  5        |   |   |   |   |   |   |   |   |
    //       768 +---+---+---+---+---+---+---+---+
    //  6        |   |   |   |   |   |   |   |   |
    //       896 +---+---+---+---+---+---+---+---+
    //  7        |   |   |   |   |   |   |   |   |
    //      1024 +---+---+---+---+---+---+---+---+
    //
    const bWidth = 8 * aWidth;
    const bHeight = 8 * aHeight;
    //
    // 👇 以下のように［グループＢ］が集まって［グループＣ］に固まっている。
    //
    // cY Pixels
    //             0    1    ... cX
    //           0  768 1536 ... Pixels
    //         0 +----+    +
    //  0        |    |
    //      1024 +----+----+
    //  1        |    |    |
    //      2048 +----+----+
    // 
    // const cWidth = 2 * bWidth;
    // const cHeight = 2 * bHeight;
    //
    /**
     * 
     * @param cColor 
     * @param bYWhiteMaxLength 
     * @param bXBlackMaxLength 
     * @param aGridNumber 
     */
    function makeKeyAndRectangle(cColor: number, bYWhiteMaxLength:number, bXBlackMaxLength:number, aGridNumber:number) : [string, Rectangle] {

        const [cY, cX] = getCColorCode(cColor);
        const [bY, bX] = getByBxMaxLength(bYWhiteMaxLength, bXBlackMaxLength);
        const [aY, aX] = getAyAxByGridNumber(aGridNumber);
        const imageKey = makeImageKey(cColor, bYWhiteMaxLength, bXBlackMaxLength, aGridNumber);
        const rect = {
            left: cX*bWidth + bX*aWidth + aX*tileBoard1TileWidth.value,
            top: cY*bHeight + bY*aHeight + aY*tileBoard1TileHeight.value,
            width: tileBoard1TileWidth.value,
            height: tileBoard1TileHeight.value
        };
        console.log(`DEBUG: [makeKeyAndRectangle] imageKey=${imageKey}`);

        return [
            imageKey,
            rect,
        ];
    }

    const gameBoard1SourceTilemap1Frames : Record<string, Rectangle> = {};
    for(let cColor=0; cColor<3; cColor++) {
        for(let bYWhiteMaxLength=-1; bYWhiteMaxLength<6; bYWhiteMaxLength++) {
            for(let bXBlackMaxLength=-1; bXBlackMaxLength<6; bXBlackMaxLength++) {
                [0, 6, 14, 12, 7, 15, 13, 3, 11, 9].forEach((aGridNumber, _index, _array)=>{
                    const [key, rect] = makeKeyAndRectangle(cColor, bYWhiteMaxLength, bXBlackMaxLength, aGridNumber);
                    gameBoard1SourceTilemap1Frames[key] = rect;
                });
            }
        }
    }


    // ++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　デバッグ情報パネル１ +
    // ++++++++++++++++++++++++++++++++++++++++++

    const debugInfo1IsShowing = ref<boolean>(false);  // デバッグ情報を表示中


    // ######################
    // # イベントハンドラー #
    // ######################

    // ++++++++++++++++++++++++++++++++++++++
    // + イベントハンドラー　＞　開始／終了 +
    // ++++++++++++++++++++++++++++++++++++++

    onMounted(()=>{

        // キーボード操作の設定
        //
        //      window はブラウザーのオブジェクトなので、（サーバー側ではプリレンダリングできないので）マウント後にアクセスします。
        //
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            // スペース、上下キーの場合
            if (e.key == ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                // ブラウザーのデフォルトの上下スクロール動作をキャンセル
                e.preventDefault();
            }

            if (isPlayerInputKey(e.key)) {  // 型ガード
                player1Input[e.key] = true;
            }
        });
        window.addEventListener('keyup', (e) => {
            if (isPlayerInputKey(e.key)) {  // 型ガード
                player1Input[e.key] = false;
            }
        });

        gamePowerOn();  // 電源を入れる演出
        gameLoopStart();    // 入力処理、描画を行います
    });

    // ++++++++++++++++++++++++++++++++++++++++++++++++
    // + イベントハンドラー　＞　ゲームマシン・ボタン +
    // ++++++++++++++++++++++++++++++++++++++++++++++++

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

        gameBoard1DebugMessage.value = `スペース・キーを押下しました。`;

        // console.log(`TEST: gameBoard1Turn.value=${gameBoard1Turn.value}`);
        
        // // test
        // const TURN_COLOR = gameBoard1Turn.value;   // 手番の色
        // const OPPOSITE_TURN_COLOR = oppositeTurnColor(TURN_COLOR);
        // const START_SQ = 7; // 着手点
        // const FWD_DIRECTION = eastOf; // 順方向
        // const REV_DIRECTION = westOf; // 逆方向
        // const oneWing = locateDirectionalLine(
        //     START_SQ,
        //     ONE_WING_MAX_LENGTH,
        //     FWD_DIRECTION,
        //     (_sq: number) => false,  // continue 条件
        //     (sq: number) => isOutOfBoardOrColor(OPPOSITE_TURN_COLOR, sq), // break 条件
        // );
        // console.log(`TEST: oneWing=${oneWing}`);

        // const testNineField1 = locateFieldCapacity(
        //     START_SQ,
        //     FWD_DIRECTION,
        //     REV_DIRECTION,
        //     (_sq: number) => false,  // continue 条件
        //     (sq: number) => isOutOfBoardOrColor(OPPOSITE_TURN_COLOR, sq), // break 条件
        // );
        // console.log(`TEST: testField1=${testNineField1}`);

        // const testNineFieldSquares1 = locateFieldCapacity(
        //     START_SQ,
        //     FWD_DIRECTION,
        //     REV_DIRECTION,
        //     (_sq: number) => false,  // continue 条件
        //     (sq: number) => isOutOfBoardOrColor(OPPOSITE_TURN_COLOR, sq), // break 条件
        // );
        // const isDeadField1 = isDeadCapacity(
        //     testNineFieldSquares1,
        // );
        // console.log(`TEST: isDeadField=${isDeadField1} TURN_COLOR=${TURN_COLOR}`);

        // const aStoneIsDeadHorizontal1 = oppositeTurnStoneIsDeadHorizontal(
        //     START_SQ,
        // );
        // console.log(`TEST: aStoneIsDeadHorizontal1=${aStoneIsDeadHorizontal1} TURN_COLOR=${TURN_COLOR} startSq=${START_SQ}`);
        // // if (isDeadStone1) {
        // // TODO:     directionalSolidLineArray.value[START_SQ] = 'Dead';
        // // }

        // const controlWays = locateRadialEightWays(
        //     START_SQ,
        //     ONE_WING_MAX_LENGTH,
        //     (_sq: number) => false,  // continue 条件
        //     (sq: number) => isOutOfBoardOrColor(OPPOSITE_TURN_COLOR, sq), // break 条件
        // );
        // console.log(`TEST: controlWays=${controlWays} TURN_COLOR=${TURN_COLOR} startSq=${START_SQ} ONE_WING_MAX_LENGTH=${ONE_WING_MAX_LENGTH}`);

        // const wings : number[] = locateForWings(
        //     START_SQ,
        //     FWD_DIRECTION,
        //     REV_DIRECTION,
        // );
        // console.log(`TEST: wings=${wings}`);
    }


    function onSpaceButtonReleased() : void {
        player1Input[" "] = false;
    }

    // ++++++++++++++++++++++++++++++++++++++++++++++++
    // + イベントハンドラー　＞　外付けシステムボタン +
    // ++++++++++++++++++++++++++++++++++++++++++++++++

    /**
     * 電源ボタン押下時
     */
    function onGamePowerOnButtonPushed() : void {
        if(gameMachine1IsPowerOn.value) {
            gamePowerOff();
            return;
        }

        gamePowerOn();
    }


    /**
     * ［▶］（再生）または［⏹］（停止）ボタン押下時。（状態により切り替わります）
     */
    function onGameStartOrEndButtonPushed() : void {
        if(gameMachine1IsPlaying.value) {
            gameStop();
            return;
        }

        gameStart();
    }


    /**
     * ［⏸］（一時停止）または［⏯］（再開）ボタン押下時。（状態により切り替わります）
     */
    function onGamePauseOrRestartButtonPushed() : void {
        if(gameMachine1IsPlayingPause.value) {
            // FIXME: ゲーム終了時にリスタートすると、タイマーが負に進んでしまう。
            gameMachine1Stopwatch1Ref.value?.timerStart();  // タイマーをスタート
        } else {
            gameMachine1Stopwatch1Ref.value?.timerStop();  // タイマーをストップ
        }

        gameMachine1IsPlayingPause.value = !gameMachine1IsPlayingPause.value;
    }


    /**
     * ［環境設定パネル１］を開くボタン。
     */
    function onEnvironmentConfig1ButtonPressed() : void {
        gameMachine1EnvironmentConfigIsShowing.value = !gameMachine1EnvironmentConfigIsShowing.value;
    }


    /**
     * ［デバッグ情報を表示］ボタン。
     */
    function onDebugInfoButtonPressed() : void {
        debugInfo1IsShowing.value = !debugInfo1IsShowing.value;
    }

    // ++++++++++++++++++++++++++++++++++++++
    // + イベントハンドラー　＞　ゲーム盤１ +
    // ++++++++++++++++++++++++++++++++++++++

    /**
     * 
     * @param sq （0から始まる）マス番号
     */
    function onGameBoard1Clicked(sq: number) : void {
        //gameBoard1DebugMessage.value = `sq=${sq}`;

        putStone(sq);   // 石が置けなくても、とくに対応しません
    }


    /**
     * TODO: sq を符号に変換
     * @param sq 
     */
    function sqToCode(sq: number) : string {
        const BOARD_WIDTH = 15;
        const BOARD_HEIGHT = 15;
        const file = sq % BOARD_WIDTH;
        const rank = Math.floor(sq / BOARD_WIDTH);
        return `${gameBoard1FileNameArray[file]}${BOARD_HEIGHT-rank}`
    }


    /**
     * 石を置く
     * @param moveSq 
     */
    function putStone(moveSq: number) : boolean {
        const turnColor = gameBoard1Turn.value;
        const oppositeTurnColor1 = oppositeTurnColor(gameBoard1Turn.value);

        if (!gameBoard1StoneClickable.value(moveSq)) {  // 石を置けないマスなら
            return false;
        }

        // sq を符号に変換したい。
        console.log(`DEBUG: [putStone] code=${sqToCode(moveSq)} moveSq=${moveSq} turnColor=${turnColor}`);

        gameBoard1StoneColorArray.value[moveSq] = turnColor;    // 盤上に石を置く

        // 着手点の［最長］を記入します
        gameBoard1ColorsAndStonesMaxLengthHorizontal.value[turnColor][moveSq] = aLocationsCountingMaxLength(    // 水平方向フィールド
            locateDirectionFromCenter(
                moveSq,
                ONE_WING_MAX_LENGTH,
                eastOf,
                westOf,
                makeIsOutOfBoardOrColor(oppositeTurnColor1),    // break 条件
            ),
            locateDirectionFromCenter(
                moveSq,
                ONE_WING_MAX_LENGTH,
                eastOf,
                westOf,
                isOutOfBoard,   // break 条件
            ),
            turnColor
        );
        gameBoard1ColorsAndStonesMaxLengthVertical.value[turnColor][moveSq] = aLocationsCountingMaxLength(  // 垂直方向フィールド
            locateDirectionFromCenter(
                moveSq,
                ONE_WING_MAX_LENGTH,
                northOf,
                southOf,
                makeIsOutOfBoardOrColor(oppositeTurnColor1),    // break 条件
            ),
            locateDirectionFromCenter(
                moveSq,
                ONE_WING_MAX_LENGTH,
                northOf,
                southOf,
                isOutOfBoard,   // break 条件
            ),
            turnColor
        );
        gameBoard1ColorsAndStonesMaxLengthBaroqueDiagonal.value[turnColor][moveSq] = aLocationsCountingMaxLength(   // バロック対角線方向フィールド
            locateDirectionFromCenter(
                moveSq,
                ONE_WING_MAX_LENGTH,
                northeastOf,
                southwestOf,
                makeIsOutOfBoardOrColor(oppositeTurnColor1),    // break 条件
            ),
            locateDirectionFromCenter(
                moveSq,
                ONE_WING_MAX_LENGTH,
                northeastOf,
                southwestOf,
                isOutOfBoard,   // break 条件
            ),
            turnColor
        );
        gameBoard1ColorsAndStonesMaxLengthSinisterDiagonal.value[turnColor][moveSq] = aLocationsCountingMaxLength(  // シニスター対角線方向フィールド
            locateDirectionFromCenter(
                moveSq,
                ONE_WING_MAX_LENGTH,
                southeastOf,
                northwestOf,
                makeIsOutOfBoardOrColor(oppositeTurnColor1),    // break 条件
            ),
            locateDirectionFromCenter(
                moveSq,
                ONE_WING_MAX_LENGTH,
                southeastOf,
                northwestOf,
                isOutOfBoard,   // break 条件
            ),
            turnColor
        );
        gameBoard1ColorsAndStonesMaxLengthHorizontal.value[oppositeTurnColor1][moveSq] = 0; // 相手の［最長］に 0 を記入
        gameBoard1ColorsAndStonesMaxLengthVertical.value[oppositeTurnColor1][moveSq] = 0;   // 相手の［最長］に 0 を記入
        gameBoard1ColorsAndStonesMaxLengthBaroqueDiagonal.value[oppositeTurnColor1][moveSq] = 0;    // 相手の［最長］に 0 を記入
        gameBoard1ColorsAndStonesMaxLengthSinisterDiagonal.value[oppositeTurnColor1][moveSq] = 0;   // 相手の［最長］に 0 を記入

        // 利きマスを取得。着手点を含まない
        const turnStoneHalfDirectionFieldArray = locateRadialEightHalfDirectionFieldArray(
            moveSq,
            ONE_WING_MAX_LENGTH,
            (_sq: number) => false, // continue 条件
            (sq: number) => isOutOfBoard(sq),   // break 条件
        );

        // フィールドの各空点の［最長］を記入します
        // 水平方向フィールド
        [
            ...turnStoneHalfDirectionFieldArray[0],
            ...turnStoneHalfDirectionFieldArray[4],
        ].forEach((resonanceSq, _index, _array)=>{
            // 空点なら自分、相手ともに［最長］を更新。
            // 手番の石なら、手番の［最長］だけを更新。
            // 相手番の石なら、相手番の［最長］だけを更新。
            [turnColor, oppositeTurnColor1].forEach((color, _index, _array)=>{
                const stoneColor = gameBoard1StoneColorArray.value[resonanceSq];
                if ([COLOR_EMPTY, color].includes(stoneColor)) {
                    // TODO: ここで inputArray の長さが 4 以下なら［死に方向］判定にできないか？
                    gameBoard1ColorsAndStonesMaxLengthHorizontal.value[color][resonanceSq] = aLocationsCountingMaxLength(
                        locateDirectionFromCenter(
                            resonanceSq,
                            ONE_WING_MAX_LENGTH,
                            eastOf,
                            westOf,
                            makeIsOutOfBoardOrColor(oppositeTurnColor(color)),    // break 条件
                        ),
                        locateDirectionFromCenter(
                            resonanceSq,
                            ONE_WING_MAX_LENGTH,
                            eastOf,
                            westOf,
                            isOutOfBoard,   // break 条件
                        ),
                        color,
                    );
                }
            });
        });

        // 垂直方向フィールド
        [
            ...turnStoneHalfDirectionFieldArray[2],
            ...turnStoneHalfDirectionFieldArray[6],
        ].forEach((resonanceSq, _index, _array)=>{
            [turnColor, oppositeTurnColor1].forEach((color, _index, _array)=>{
                const stoneColor = gameBoard1StoneColorArray.value[resonanceSq];
                if ([COLOR_EMPTY, color].includes(stoneColor)) {
                    gameBoard1ColorsAndStonesMaxLengthVertical.value[color][resonanceSq] = aLocationsCountingMaxLength(
                        locateDirectionFromCenter(
                            resonanceSq,
                            ONE_WING_MAX_LENGTH,
                            northOf,
                            southOf,
                            makeIsOutOfBoardOrColor(oppositeTurnColor(color)),    // break 条件
                        ),
                        locateDirectionFromCenter(
                            resonanceSq,
                            ONE_WING_MAX_LENGTH,
                            northOf,
                            southOf,
                            isOutOfBoard,   // break 条件
                        ),
                        color,
                    );
                }
            });
        });

        // バロック対角線方向フィールド
        [
            ...turnStoneHalfDirectionFieldArray[1],
            ...turnStoneHalfDirectionFieldArray[5],
        ].forEach((resonanceSq, _index, _array)=>{
            [turnColor, oppositeTurnColor1].forEach((color, _index, _array)=>{
                const stoneColor = gameBoard1StoneColorArray.value[resonanceSq];
                if ([COLOR_EMPTY, color].includes(stoneColor)) {
                    gameBoard1ColorsAndStonesMaxLengthBaroqueDiagonal.value[color][resonanceSq] = aLocationsCountingMaxLength(
                        locateDirectionFromCenter(
                            resonanceSq,
                            ONE_WING_MAX_LENGTH,
                            northeastOf,
                            southwestOf,
                            makeIsOutOfBoardOrColor(oppositeTurnColor(color)),    // break 条件
                        ),
                        locateDirectionFromCenter(
                            resonanceSq,
                            ONE_WING_MAX_LENGTH,
                            northeastOf,
                            southwestOf,
                            isOutOfBoard,   // break 条件
                        ),
                        color,
                    );
                }
            });
        });

        // シニスター対角線方向フィールド
        [
            ...turnStoneHalfDirectionFieldArray[3],
            ...turnStoneHalfDirectionFieldArray[7],
        ].forEach((resonanceSq, _index, _array)=>{
            [turnColor, oppositeTurnColor1].forEach((color, _index, _array)=>{
                const stoneColor = gameBoard1StoneColorArray.value[resonanceSq];
                if ([COLOR_EMPTY, color].includes(stoneColor)) {
                    gameBoard1ColorsAndStonesMaxLengthSinisterDiagonal.value[color][resonanceSq] = aLocationsCountingMaxLength(
                        locateDirectionFromCenter(
                            resonanceSq,
                            ONE_WING_MAX_LENGTH,
                            southeastOf,
                            northwestOf,
                            makeIsOutOfBoardOrColor(oppositeTurnColor(color)),    // break 条件
                        ),
                        locateDirectionFromCenter(
                            resonanceSq,
                            ONE_WING_MAX_LENGTH,
                            southeastOf,
                            northwestOf,
                            isOutOfBoard,   // break 条件
                        ),
                        color,
                    );
                }
            });
        });

        // ［割り打ち］処理
        executeWariuchi(moveSq);

        // ［五］の処理
        fiveStonesProcessingAllDirections(
            moveSq,
        );

        gameBoard1Turn.value = oppositeTurnColor(gameBoard1Turn.value); // （チェック後に）相手の色に変更
        gameBoard1Times.value += 1;
        gameBoard1StoneCount.value[turnColor] += 1;
        gameBoard1PassCount.value = 0;  // リセット
        return true;
    }

    // ################
    // # サブルーチン #
    // ################

    // ++++++++++++++++++++++++++++++++++++++++++
    // + サブルーチン　＞　外付けシステムボタン +
    // ++++++++++++++++++++++++++++++++++++++++++

    function gamePowerOn() : void {
        gameMachine1GameStartButton1Enabled.value = true;
        gameMachine1Visibility.value = 'visible';
        gameMachine1IsPowerOn.value = true;

        gameInit(); // ゲームの初期化
    }


    function gamePowerOff() : void {
        if(gameMachine1IsPlaying.value) {    // ゲーム中なら、停止させます
            gameStop();
        }

        gameMachine1GameStartButton1Enabled.value = false;
        gameMachine1Visibility.value = 'hidden';
        gameMachine1IsPowerOn.value = false;
    }


    function gameStart() : void {
        gameMachine1Stopwatch1Ref.value?.timerStart();  // タイマーをスタート
        gameMachine1GamePauseButton1Enabled.value = true;
        gameMachine1IsPlaying.value = !gameMachine1IsPlaying.value;
    }


    function gameStop() : void {
        gameMachine1GamePauseButton1Enabled.value = false;
        gameInit(); // ゲームは終了したので、初期状態に戻します
    }

    // ++++++++++++++++++++++++++++
    // + サブルーチン　＞　ゲーム +
    // ++++++++++++++++++++++++++++

    /**
     * ゲームの初期化
     */
    function gameInit() : void {
        //gameBoard1DebugMessage.value = "ゲームの初期化";
        gameMachine1Stopwatch1Ref.value?.timerReset();  // タイマーをリセット

        // 外付けシステムボタンをリセット
        gameMachine1IsPlaying.value = false;
        gameMachine1IsPlayingPause.value = false;

        // ++++++++++++++++++++++++++
        // + ゲームデータをリセット +
        // ++++++++++++++++++++++++++

        // 盤の初期化
        for(let sq: number=0; sq<gameBoard1Area.value; sq++){
            gameBoard1StoneColorArray.value[sq] = 0;    // 空マス

            // マス上で自石が（飛び飛びでも）続いている数
            [COLOR_BLACK, COLOR_WHITE].forEach((color, _index, _array)=>{
                gameBoard1ColorsAndStonesMaxLengthHorizontal.value[color][sq] = 0;
                gameBoard1ColorsAndStonesMaxLengthVertical.value[color][sq] = 0;
                gameBoard1ColorsAndStonesMaxLengthBaroqueDiagonal.value[color][sq] = 0;
                gameBoard1ColorsAndStonesMaxLengthSinisterDiagonal.value[color][sq] = 0;
            });

            // マス上で自石が（隙間なく）連続しているとみたときの状態
            gameBoard1StoneStateArray.value[sq] = STONE_STATE_NONE;
        }

        gameBoard1Times.value = 0;
        gameBoard1Turn.value = 1;
        gameBoard1StoneCount.value[1] = 0;
        gameBoard1StoneCount.value[2] = 0;
        gameBoard1PassCount.value = 0;
        gameBoard1IsEnd.value = false;

        //gameMachine1Score.value = 0;
        //gameMachine1ScheduleStep.value = 0;
        //star1Visibility.value = 'hidden';
    }


    /**
     * ゲームのメインループ開始
     */
    function gameLoopStart() : void {
        const update = () => {

            // ++++++++++++++++++++++++
            // + モーション・タイマー +
            // ++++++++++++++++++++++++

            // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // + モーション・ウェイトが０のとき、モーションのクリアー +
            // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

            // ++++++++++++++++++++++++++++++
            // + キー入力をモーションに変換 +
            // ++++++++++++++++++++++++++++++

            if (player1Input[' ']) {
                if (!gameBoard1IsEnd.value) { // 終局していたら、何もしない
                    let itsOk = false;
                    let count = 0;
                    while(!itsOk && count <= gameMachineRandomLimit) {
                        // 適当に石を置く
                        const sq = Math.floor(Math.random() * gameBoard1Area.value);
                        itsOk = putStone(sq);
                        count += 1;
                    }

                    if (!itsOk) {   // 確率的に置けなかったら、本当に置けないか確認
                        let lastSq = -1;
                        for(let sq: number=0; sq<gameBoard1Area.value; sq++) {
                            if (gameBoard1StoneClickable.value(sq)) {   // クリック可能（石を置ける）
                                lastSq = sq;
                                break;
                            }
                        }

                        if (lastSq==-1) {   // どこにも石を置けなかった
                            gamePass(); // パス

                            if (2 <= gameBoard1PassCount.value) {
                                // パスが２回続いたら終局
                                gameBoard1IsEnd.value = true;
                            }

                        } else {
                            itsOk = putStone(lastSq);   // 必ず置けるはず
                            if (!itsOk) {
                                throw Error(`石を置けなかった。 lastSq=${lastSq} gameBoard1Turn.value=${gameBoard1Turn.value}`);
                            }
                        }
                    }

                    if (gameIsFullCapacity()) {
                        // 満局なら終局
                        gameBoard1IsEnd.value = true;
                    }
                }

                player1Input[' '] = false;
            }

            // ++++++++++++++++++++++++++++++
            // + 向き・移動・ウェイトを更新 +
            // ++++++++++++++++++++++++++++++

            // 次のフレーム
            requestAnimationFrame(update);
        };

        // 初回呼び出し
        requestAnimationFrame(update);
    }

    // ++++++++++++++++++++++++++++++++
    // + サブルーチン　＞　ゲーム盤１ +
    // ++++++++++++++++++++++++++++++++

    /**
     * 相手の石の色に変更
     * @param color 自分の石の色
     */
    function oppositeTurnColor(color: number) : number {
        return color % 2 + 1;   // 1 なら 2 に、2 なら 1 に
    }


    /**
     * ［五］ができているかどうかは、手番でだけ確認すれば構いません。
     * @param aStoneSq 
     */
    function fiveStonesProcessingAllDirections(
        aStoneSq: number,   // 打った場所。自石が置いている前提。 FIXME: 空点の場所のケースもある
    ) : void {
        fiveStonesProcessingOneDirection(    // 水平方向
            aStoneSq,
            eastOf,
            westOf,
            gameBoard1StoneStateArray,
            STONE_STATE_ALIVE_HORIZONTAL,
        );
        fiveStonesProcessingOneDirection(    // 垂直方向
            aStoneSq,
            northOf,
            southOf,
            gameBoard1StoneStateArray,
            STONE_STATE_ALIVE_VERTICAL,
        );
        fiveStonesProcessingOneDirection(    // バロック対角線方向
            aStoneSq,
            northeastOf,
            southwestOf,
            gameBoard1StoneStateArray,
            STONE_STATE_ALIVE_BAROQUE_DIAGONAL,
        );
        fiveStonesProcessingOneDirection(    // シニスター対角線方向
            aStoneSq,
            southeastOf,
            northwestOf,
            gameBoard1StoneStateArray,
            STONE_STATE_ALIVE_SINISTER_DIAGONAL,
        );
    }

    /**
     * ［五］の処理。
     * 内訳は、走査（スキャン）、判定（ジャッジメント）、記入（チェック）
     * 
     * @param startSq 
     * @param foreOf 
     * @param backOf 
     * @param directionalStoneStateArray 
     * @param aliveDirection 
     */
    function fiveStonesProcessingOneDirection(
        startSq: number,    // 打った場所。自石が置いている前提。 FIXME: 空点の場所のケースもある
        foreOf: (sq: number)=>number,
        backOf: (sq: number)=>number,
        directionalStoneStateArray: Ref<Array<number>>,
        aliveDirection: number,
    ) : void {
        const runsNineSquares = locateFieldCapacity(
            startSq,
            foreOf,
            backOf,
            (_sq: number) => false,  // continue 条件
            (sq: number) => isOutOfBoardOrColor(oppositeTurnColor(gameBoard1Turn.value), sq),   // break 条件
        );

        const continuityStones: number[] = [];  // 連続している自石のマス番号

        function processingContinuityStones() : void {
            if (5 <= continuityStones.length) {   // ［五］ができていたら
                continuityStones.forEach((sq, _index, _array)=>{
                    directionalStoneStateArray.value[sq] |= aliveDirection; // 論理和
                });
            }

            continuityStones.length = 0;    // クリアー
        }

        runsNineSquares.forEach((sq, _index, _array)=>{
            // 盤外、相手の石は含まない

            // 手番の石なら
            if (gameBoard1StoneColorArray.value[sq] == gameBoard1Turn.value) {
                continuityStones.push(sq);

            // 自石でなければ
            } else {
                processingContinuityStones();
            }
        });

        processingContinuityStones();
    }


    /**
     * 各石の［飛び石］の長さの数え上げ
     */
    function countingMaxLength(
        slidingWindowArray: number[][],
        color: number,
    ) : number {
        let maxCount = 0;

        slidingWindowArray.forEach((slidingWindow, _index, _array)=>{
            let count = 0;
            slidingWindow.forEach((sq, _index, _array)=>{
                if (gameBoard1StoneColorArray.value[sq] == color) {
                    count += 1;
                }
            });
            maxCount = Math.max(count, maxCount);
        });

        return maxCount;
    }


    /**
     * ［割り打ちの石］処理
     *
     * 例えば、相手に次のような［四］ができているところへ、
     *
     *  0 1 2 3 4 5 6 7 8
     * +-+-+-+-+-+-+-+-+-+
     * |.|o|o|o|.|o|.|.|.|
     * +-+-+-+-+-+-+-+-+-+
     *
     * 以下のように [4] に割り打てば、［三］と［一］に減らせるはずです。
     *
     *  0 1 2 3 4 5 6 7 8
     * +-+-+-+-+-+-+-+-+-+
     * |.|o|o|o|x|o|.|.|.|
     * +-+-+-+-+-+-+-+-+-+
     * 
     * この仕掛けとしては、
     *
     *          0 1 2 3 4 5 6 7 8
     *         +-+-+-+-+-+-+-+-+-+
     *         |.|o|o|o|x|o|.|.|.|
     *         +-+-+-+-+-+-+-+-+-+
     * -4-3-2-1 0 1 2 3 4
     * +-+-+-+-+-+-+-+-+-+
     * |.|.|.|.|O|.|.|.|.|
     * +-+-+-+-+-+-+-+-+-+
     *                    5 6 7 8 9101112
     *                 +-+-+-+-+-+-+-+-+-+
     *                 |.|.|.|.|O|.|.|.|.|
     *                 +-+-+-+-+-+-+-+-+-+
     *
     * [0] と [8] のマスを起点に相手側の［飛び石スライディング・ウィンドウ］の最長数を更新すればよいはずです。
     * ただし、以下の局面では：
     *
     *  0 1 2 3 4 5 6 7 8
     * +-+-+-+-+-+-+-+-+-+
     * |.|x|o|o|.|o|.|.|.|
     * +-+-+-+-+-+-+-+-+-+
     *
     * [4] に割り打てば、［零］と［一］に減らせるはずです。
     * この仕掛けとしては、
     *
     *          0 1 2 3 4 5 6 7 8
     *         +-+-+-+-+-+-+-+-+-+
     *         |.|x|o|o|x|o|.|.|.|
     *         +-+-+-+-+-+-+-+-+-+
     *     -2-1 0 1 2 3 4 5 6
     *     +-+-+-+-+-+-+-+-+-+
     *     |.|.|.|.|O|.|.|.|.|
     *     +-+-+-+-+-+-+-+-+-+
     *
     * [0] ではなく、例えば [2] を起点とするべきです。
     * [0] では肝心の [2], [3] が更新されません。
     *
     * @param moveSq 着手点 
     */
    function executeWariuchi(
        moveSq: number
    ) : void {
        const oppositeTurnColor1 = oppositeTurnColor(gameBoard1Turn.value);

        // ++++++++++++++++++++++++++++++++++++++++++++++++++
        // + （途切れた）相手の石のつながりをチェックします +
        // ++++++++++++++++++++++++++++++++++++++++++++++++++

        function oppositeTurnStonesCheckField(
            foreOppositeTurnStones: number[],
            backOppositeTurnStones: number[],
            foreOf: (sq: number)=>number,
            backOf: (sq: number)=>number,
            colorsAndStonesDirectionalFieldArray: Ref<number[][]>,
        ) : void {
            //console.log(`DEBUG: [oppositeTurnStonesCheckFieldOneDirection] startSq=${startSq}`);

            foreOppositeTurnStones.forEach((oppositeTurnStoneSq, _index, _array)=>{
                colorsAndStonesDirectionalFieldArray.value[oppositeTurnColor1][oppositeTurnStoneSq] = aLocationsCountingMaxLength(
                    locateDirectionFromCenter(
                        oppositeTurnStoneSq,
                        ONE_WING_MAX_LENGTH,
                        foreOf,
                        backOf,
                        makeIsOutOfBoardOrColor(gameBoard1Turn.value),  // break 条件
                    ),
                    locateDirectionFromCenter(
                        oppositeTurnStoneSq,
                        ONE_WING_MAX_LENGTH,
                        foreOf,
                        backOf,
                        isOutOfBoard,   // break 条件
                    ),
                    oppositeTurnColor1,
                );;
            });


            backOppositeTurnStones.forEach((oppositeTurnStoneSq, _index, _array)=>{
                colorsAndStonesDirectionalFieldArray.value[oppositeTurnColor1][oppositeTurnStoneSq] = aLocationsCountingMaxLength(
                    locateDirectionFromCenter(
                        oppositeTurnStoneSq,
                        ONE_WING_MAX_LENGTH,
                        foreOf,
                        backOf,
                        makeIsOutOfBoardOrColor(gameBoard1Turn.value),  // break 条件
                    ),
                    locateDirectionFromCenter(
                        oppositeTurnStoneSq,
                        ONE_WING_MAX_LENGTH,
                        foreOf,
                        backOf,
                        isOutOfBoard,   // break 条件
                    ),
                    oppositeTurnColor1,
                );;
            });
        }

        // 水平方向の相手番の石
        let foreOppositeTurnStones = locateDirectionFromEdge(   // 順ウィング側。着手点と、挟んでいる自石の間にある相手石を探す
            moveSq,
            ONE_WING_MAX_LENGTH,
            eastOf,
            (sq: number) => isEmptyPoint(sq),   // continue 条件
            (sq: number) => isOutOfBoardOrColor(gameBoard1Turn.value, sq),   // break 条件
        );
        let backOppositeTurnStones = locateDirectionFromEdge(   // 逆ウィング側。着手点と、挟んでいる自石の間にある相手石を探す
            moveSq,
            ONE_WING_MAX_LENGTH,
            westOf,
            (sq: number) => isEmptyPoint(sq),   // continue 条件
            (sq: number) => isOutOfBoardOrColor(gameBoard1Turn.value, sq),   // break 条件
        );
        oppositeTurnStonesCheckField(
            foreOppositeTurnStones,
            backOppositeTurnStones,
            eastOf,
            westOf,
            gameBoard1ColorsAndStonesMaxLengthHorizontal,
        );
        // 相手の［死に石］を記入
        oppositeTurnStonesCheckDeadHorizontal(foreOppositeTurnStones);
        oppositeTurnStonesCheckDeadHorizontal(backOppositeTurnStones);

        // 垂直方向
        foreOppositeTurnStones = locateDirectionFromEdge(   // 順ウィング側。着手点と、挟んでいる自石の間にある相手石を探す
            moveSq,
            ONE_WING_MAX_LENGTH,
            southOf,
            (sq: number) => isEmptyPoint(sq),   // continue 条件
            (sq: number) => isOutOfBoardOrColor(gameBoard1Turn.value, sq),   // break 条件
        );
        backOppositeTurnStones = locateDirectionFromEdge(   // 逆ウィング側。着手点と、挟んでいる自石の間にある相手石を探す
            moveSq,
            ONE_WING_MAX_LENGTH,
            northOf,
            (sq: number) => isEmptyPoint(sq),   // continue 条件
            (sq: number) => isOutOfBoardOrColor(gameBoard1Turn.value, sq),   // break 条件
        );
        oppositeTurnStonesCheckField(
            foreOppositeTurnStones,
            backOppositeTurnStones,
            southOf,
            northOf,
            gameBoard1ColorsAndStonesMaxLengthVertical,
        );
        // 相手の［死に石］を記入
        oppositeTurnStonesCheckDeadVertical(foreOppositeTurnStones);
        oppositeTurnStonesCheckDeadVertical(backOppositeTurnStones);

        // バロック対角線方向
        foreOppositeTurnStones = locateDirectionFromEdge(   // 順ウィング側。着手点と、挟んでいる自石の間にある相手石を探す
            moveSq,
            ONE_WING_MAX_LENGTH,
            northeastOf,
            (sq: number) => isEmptyPoint(sq),   // continue 条件
            (sq: number) => isOutOfBoardOrColor(gameBoard1Turn.value, sq),   // break 条件
        );
        backOppositeTurnStones = locateDirectionFromEdge(   // 逆ウィング側。着手点と、挟んでいる自石の間にある相手石を探す
            moveSq,
            ONE_WING_MAX_LENGTH,
            southwestOf,
            (sq: number) => isEmptyPoint(sq),   // continue 条件
            (sq: number) => isOutOfBoardOrColor(gameBoard1Turn.value, sq),   // break 条件
        );
        oppositeTurnStonesCheckField(
            foreOppositeTurnStones,
            backOppositeTurnStones,
            northeastOf,
            southwestOf,
            gameBoard1ColorsAndStonesMaxLengthBaroqueDiagonal,
        );
        // 相手の［死に石］を記入
        oppositeTurnStonesCheckDeadBaroqueDiagonal(foreOppositeTurnStones);
        oppositeTurnStonesCheckDeadBaroqueDiagonal(backOppositeTurnStones);

        // シニスター対角線方向
        foreOppositeTurnStones = locateDirectionFromEdge(   // 順ウィング側。着手点と、挟んでいる自石の間にある相手石を探す
            moveSq,
            ONE_WING_MAX_LENGTH,
            southeastOf,
            (sq: number) => isEmptyPoint(sq),   // continue 条件
            (sq: number) => isOutOfBoardOrColor(gameBoard1Turn.value, sq),   // break 条件
        );
        backOppositeTurnStones = locateDirectionFromEdge(   // 逆ウィング側。着手点と、挟んでいる自石の間にある相手石を探す
            moveSq,
            ONE_WING_MAX_LENGTH,
            northwestOf,
            (sq: number) => isEmptyPoint(sq),   // continue 条件
            (sq: number) => isOutOfBoardOrColor(gameBoard1Turn.value, sq),   // break 条件
        );
        oppositeTurnStonesCheckField(
            foreOppositeTurnStones,
            backOppositeTurnStones,
            southeastOf,
            northwestOf,
            gameBoard1ColorsAndStonesMaxLengthSinisterDiagonal,
        );
        // 相手番の［死に石］を記入。石を置いて［死に石］になるのは、相手番の石だけ。
        oppositeTurnStonesCheckDeadSinisterDiagonal(foreOppositeTurnStones);
        oppositeTurnStonesCheckDeadSinisterDiagonal(backOppositeTurnStones);
    }


    /**
     * パス
     */
    function gamePass() : void {
        gameBoard1Times.value += 1;
        gameBoard1PassCount.value += 1;
        gameBoard1Turn.value = oppositeTurnColor(gameBoard1Turn.value);
    }


    /**
     * 満局か
     */
    function gameIsFullCapacity() : boolean {
        return gameBoard1Area.value <= gameBoard1StoneCount.value[1] + gameBoard1StoneCount.value[2];
    }

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + サブルーチン　＞　ゲーム盤１　＞　複数の石を処理 +
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++

    /**
     * ［死に石］の記入
     * @param locations 
     */
    function oppositeTurnStonesCheckDeadHorizontal(
        locations: number[],
    ) : void {
        const oppositeTurnColor1 = oppositeTurnColor(gameBoard1Turn.value);
        locations.forEach((sq, _index, _array)=>{
            if (oppositeTurnStoneIsDeadHorizontal(sq)) {
                gameBoard1ColorsAndStonesMaxLengthHorizontal.value[oppositeTurnColor1][sq] = MAX_LENGTH_DEAD;    // 論理和ではなくて、上書き。
            }
        });
    }


    /**
     * ［死に石］の記入
     * @param locations 
     */
    function oppositeTurnStonesCheckDeadVertical(
        locations: number[],
    ) : void {
        const oppositeTurnColor1 = oppositeTurnColor(gameBoard1Turn.value);
        locations.forEach((sq, _index, _array)=>{
            if (oppositeTurnStoneIsDeadVertical(sq)) {
                gameBoard1ColorsAndStonesMaxLengthHorizontal.value[oppositeTurnColor1][sq] = MAX_LENGTH_DEAD;
            }
        });
    }


    /**
     * ［死に石］の記入
     * @param locations 
     */
    function oppositeTurnStonesCheckDeadBaroqueDiagonal(
        locations: number[],
    ) : void {
        const oppositeTurnColor1 = oppositeTurnColor(gameBoard1Turn.value);
        locations.forEach((sq, _index, _array)=>{
            if (oppositeTurnStoneIsDeadBaroqueDiagonal(sq)) {
                gameBoard1ColorsAndStonesMaxLengthHorizontal.value[oppositeTurnColor1][sq] = MAX_LENGTH_DEAD;
            }
        });
    }


    /**
     * ［死に石］の記入
     * @param locations
     */
    function oppositeTurnStonesCheckDeadSinisterDiagonal(
        locations: number[],
    ) : void {
        const oppositeTurnColor1 = oppositeTurnColor(gameBoard1Turn.value);
        locations.forEach((sq, _index, _array)=>{
            if (oppositeTurnStoneIsDeadSinisterDiagonal(sq)) {
                gameBoard1ColorsAndStonesMaxLengthHorizontal.value[oppositeTurnColor1][sq] = MAX_LENGTH_DEAD;
            }
        });
    }

    
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + サブルーチン　＞　ゲーム盤１　＞　１つの石を処理 +
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++

    /**
     * ［飛び石］チェック。一方向
     * 
     * 
     *          ここに石を置いたら（仮定なので、空点でも構わない）
     *          v
     * +-+-+-+-+-+-+-+-+-+
     * |.|.|.|.|o|.|.|.|.|
     * +-+-+-+-+-+-+-+-+-+
     *
     * 少なくとも：
     *
     * +-+-+-+-+-+-+-+-+-+
     * |w|w|w|w|w|.|.|.|.|  ウィンドウ０
     * +-+-+-+-+-+-+-+-+-+
     *
     * +-+-+-+-+-+-+-+-+-+
     * |.|w|w|w|w|w|.|.|.|  ウィンドウ１
     * +-+-+-+-+-+-+-+-+-+
     *
     * +-+-+-+-+-+-+-+-+-+
     * |.|.|w|w|w|w|w|.|.|  ウィンドウ２
     * +-+-+-+-+-+-+-+-+-+
     *
     * +-+-+-+-+-+-+-+-+-+
     * |.|.|.|w|w|w|w|w|.|  ウィンドウ３
     * +-+-+-+-+-+-+-+-+-+
     *
     * +-+-+-+-+-+-+-+-+-+
     * |.|.|.|.|w|w|w|w|w|  ウィンドウ４
     * +-+-+-+-+-+-+-+-+-+
     *
     * 以上の５つの範囲で、連の長さを数えなおす必要がある。
     * ［累積和］か何か高速化技法が使えそうだが、とりあえず高速化せずに愚直に書いてみる。
     *
     *
     * とりあえず長さ９の配列を用意し、[4] を打った石のマス番号とし、
     *
     *  0 1 2 3 4 5 6 7 8
     * +-+-+-+-+-+-+-+-+-+
     * |.|.|.|.|o|.|.|.|.|  スクウェア・マップ
     * +-+-+-+-+-+-+-+-+-+
     *            1 2 3 4   順方向へ４つ
     *  4 3 2 1             逆方向へ４つ
     *
     * 以上の９つのマス番号を探索する。
     * 予めすべての９つのマスを作ってテーブルにしておけば高速化できそうだが、とりあえず高速化せずに愚直に書いてみる。
     *
     * （１）ウィンドウ１～５のランズ数を調べる
     * （２）各マスには、ウィンドウ１～５の中の最大ランズ数を入れる。
     *
     * このとき、[4] を起点に端に向かって探索し、途中で［盤外］または［相手の石］とぶつかった場合は、そこで探索を終了する。
     * foreLength, backLength のようなカウントをしておくといいかも。
     * 例えば、相手の石（または盤外）が [1], [8] の位置にあるとき：
     *
     *  0 1 2 3 4 5 6 7 8
     * +-+-+-+-+-+-+-+-+-+
     * |.|x|.|.|o|.|.|.|x|
     * +-+-+-+-+-+-+-+-+-+
     *
     *      - - 
     *       A    - - -
     *              B
     *
     * B を foreLength、
     * A を backLength と呼ぶとし、
     * foreLength + backLength + 1 が 5 未満のとき、ランズ数は 0 とする。
     * [dead] マーカーを付けてもいいかも。
     *
     * ウィンドウは３と４だけ調べれよい：
     *
     * +-+-+-+-+-+-+-+-+-+
     * |.|.|w|w|w|w|w|.|.|  ウィンドウ２
     * +-+-+-+-+-+-+-+-+-+
     * +-+-+-+-+-+-+-+-+-+
     * |.|.|.|w|w|w|w|w|.|  ウィンドウ３
     * +-+-+-+-+-+-+-+-+-+
     * 
     * @param fieldLocations 
     * @param color 
     */
    function aLocationsCountingMaxLength(
        controlLocations: number[],
        fieldLocations: number[],
        color: number,
    ) : number {

        // ある［飛び石］の長さを数えたいとします。
        // 長さは 5 以上は数えなくてよいものとします。
        //
        // 👇 ある［飛び石］がマス [4] にあるとします。
        //
        //  0 1 2 3 4 5 6 7 8
        // +-+-+-+-+-+-+-+-+-+
        // | | | | |x| | | | |
        // +-+-+-+-+-+-+-+-+-+
        //
        // 👇 この x は、右端かもしれませんし、左端かもしれませんし、中ほどかもしれません。
        //
        //  0 1 2 3 4 5 6 7 8
        // +-+-+-+-+-+-+-+-+-+
        // |.|.|.|.|x| | | | |
        // +-+-+-+-+-+-+-+-+-+
        //
        //  0 1 2 3 4 5 6 7 8
        // +-+-+-+-+-+-+-+-+-+
        // | | | | |x|.|.|.|.|
        // +-+-+-+-+-+-+-+-+-+
        //
        // いずれにしても、 [0] 未満や、 [8] より上は見なくてよさそうです。
        // スキャニング・レンジは 0～8 の 9 マスあれば十分です。
        //
        // そこで：
        //
        //  0 1 2 3 4 5 6 7 8
        // +-+-+-+-+-+-+-+-+-+
        // |w|w|w|w|w| | | | |  スライディング・ウィンドウ０
        // +-+-+-+-+-+-+-+-+-+
        //
        //  0 1 2 3 4 5 6 7 8
        // +-+-+-+-+-+-+-+-+-+
        // | |w|w|w|w|w| | | |  スライディング・ウィンドウ１
        // +-+-+-+-+-+-+-+-+-+
        //
        //  0 1 2 3 4 5 6 7 8
        // +-+-+-+-+-+-+-+-+-+
        // | | |w|w|w|w|w| | |  スライディング・ウィンドウ２
        // +-+-+-+-+-+-+-+-+-+
        //
        //  0 1 2 3 4 5 6 7 8
        // +-+-+-+-+-+-+-+-+-+
        // | | | |w|w|w|w|w| |  スライディング・ウィンドウ３
        // +-+-+-+-+-+-+-+-+-+
        //
        //  0 1 2 3 4 5 6 7 8
        // +-+-+-+-+-+-+-+-+-+
        // | | | | |w|w|w|w|w|  スライディング・ウィンドウ４
        // +-+-+-+-+-+-+-+-+-+
        //
        // 👆 スライディング・ウィンドウは上記の５つあることが分かります。
        //
        // 次に：
        //
        //  0 1 2 3 4 5 6 7 8
        // +-+-+-+-+-+-+-+-+-+
        // | | |o| |x| | | | |
        // +-+-+-+-+-+-+-+-+-+
        //
        // 👆 o は相手の石とします。この時点でスライディング・ウィンドウの０、１、２は見なくてよいことが分かります。
        //
        // 加えて：
        //
        //  0 1 2 3 4 5 6 7 8
        // +-+-+-+-+-+-+-+-+-+
        // | | |o| |x| |o| | |
        // +-+-+-+-+-+-+-+-+-+
        //
        // 👆 o は相手の石とします。この時点でスライディング・ウィンドウの３、４は、[5] まで見ればよいことが分かります。
        // 調べる長さは、下記の式で求められます。
        //
        // 調べる長さ = スライディング・ウィンドウ番号 - 2
        //            = スライディング・ウィンドウ番号 - ( 右にある相手の石の位置"6" - xの位置"4" )
        //
        // 結果：
        //
        // 以下の２つのマス番号の配列を返します。
        //
        //  0 1 2 3 4 5 6 7 8
        // +-+-+-+-+-+-+-+-+-+
        // | | | |w|w|w| | | |  スライディング・ウィンドウ３
        // +-+-+-+-+-+-+-+-+-+
        //
        //  0 1 2 3 4 5 6 7 8
        // +-+-+-+-+-+-+-+-+-+
        // | | | | |w|w| | | |  スライディング・ウィンドウ４
        // +-+-+-+-+-+-+-+-+-+
        //

        console.log(`DEBUG: [aLocationsCountingMaxLength] controlLocations.length=${controlLocations.length}`);
        if (controlLocations.length < FIVE_LENGTH) { // ［五］を作れないなら［死に石］です
            return MAX_LENGTH_DEAD;
        }

        return countingMaxLength(
            aStoneWingsLocateSlidingWindowArray(
                fieldLocations,
                (sq: number) => isOutOfBoardOrColor(oppositeTurnColor(color), sq),  // break 条件
            ),
            color
        );
    }


    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + サブルーチン　＞　ゲーム盤１　＞　マス番号を取得する +
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    /**
     * 北側のマス番号。
     * @param sq 
     * @returns 該当がなければ -1
     */
    function northOf(sq: number) : number {
        const northSq = sq - gameBoard1FileNum.value;
        if (northSq < 0) {  // 盤を飛び出たら
            return -1;
        }

        return northSq;
    }


    /**
     * 北東側のマス番号。
     * @param sq 
     * @returns 該当がなければ -1
     */
    function northeastOf(sq: number) : number {
        const northeastSq = sq - gameBoard1FileNum.value + 1;
        if (
            northeastSq < 0 // 盤を飛び出たら
            || northeastSq % gameBoard1FileNum.value == 0    // 世界一周したら
        ) {  
            return -1;
        }

        return northeastSq;
    }


    /**
     * 東側のマス番号。
     * @param sq 
     * @returns 該当がなければ -1
     */
    function eastOf(sq: number) : number {
        const eastSq = sq + 1;
        if (eastSq % gameBoard1FileNum.value == 0) {   // 世界一周したら
            return -1;
        }

        return eastSq;
    }


    /**
     * 南東側のマス番号。
     * @param sq 
     * @returns 該当がなければ -1
     */
    function southeastOf(sq: number) : number {
        const southeastSq = sq + gameBoard1FileNum.value + 1;
        if (
            southeastSq % gameBoard1FileNum.value == 0  // 世界一周したら
            || gameBoard1Area.value <= southeastSq  // 盤を飛び出たら
        ) {   
            return -1;
        }

        return southeastSq;
    }


    /**
     * 南側のマス番号。
     * @param sq 
     * @returns 該当がなければ -1
     */
    function southOf(sq: number) : number {
        const southSq = sq + gameBoard1FileNum.value;
        if (gameBoard1Area.value <= southSq) {  // 盤を飛び出たら
            return -1;
        }

        return southSq;
    }


    /**
     * 南西側のマス番号。
     * @param sq 
     * @returns 該当がなければ -1
     */
    function southwestOf(sq: number) : number {
        const southwestSq = sq + gameBoard1FileNum.value - 1;
        if (
            gameBoard1Area.value <= southwestSq // 盤を飛び出たら
            || southwestSq % gameBoard1FileNum.value == gameBoard1FileNum.value - 1 // 世界一周したら
        ) { 
            return -1;
        }

        return southwestSq;
    }


    /**
     * 西側のマス番号。
     * @param sq 
     * @returns 該当がなければ -1
     */
    function westOf(sq: number) : number {
        const westSq = sq - 1;
        if (westSq % gameBoard1FileNum.value == gameBoard1FileNum.value - 1) {  // 世界一周したら
            return -1;
        }

        return westSq;
    }


    /**
     * 北西側のマス番号。
     * @param sq 
     * @returns 該当がなければ -1
     */
    function northwestOf(sq: number) : number {
        const northwestSq = sq - gameBoard1FileNum.value - 1;
        if (
            northwestSq % gameBoard1FileNum.value == gameBoard1FileNum.value - 1    // 世界一周したら
            || northwestSq < 0  // 盤を飛び出たら
        ) { 
            return -1;
        }

        return northwestSq;
    }


    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + サブルーチン　＞　ゲーム盤１　＞　マス番号一覧を取得する +
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    /**
     * ［飛び石］の位置を調べるために。
     * 
     *  0 1 2 3 4 5 6 7 8
     * +-+-+-+-+-+-+-+-+-+
     * | | | | |x| | | | |
     * +-+-+-+-+-+-+-+-+-+
     * 
     * 着手点を含めた前後４マス、計９つのマスの番号の配列を返します。
     * 
     * @param centerSq 
     * @param foreOf 
     * @param backOf 
     */
    function locateDirectionFromCenter(
        centerSq: number,
        maxLength: number,
        foreOf: (sq: number)=>number,
        backOf: (sq: number)=>number,
        isBreak: (sq: number)=>boolean,
    ) : number[] {
        // 逆ウィング（起点を含まない）を戻る
        const backSqArray: number[] = [];
        let backSq = centerSq;  // 隣
        for(let i:number=0; i<maxLength; i++){
            backSq = backOf(backSq);
            if (isBreak(backSq)) {  // break 条件
                break;
            }

            backSqArray.push(backSq);
        }

        // 順ウィング（起点を含まない）を進む
        const foreSqArray: number[] = [];
        let foreSq = centerSq;  // 隣
        for(let i:number=0; i<maxLength; i++){
            foreSq = foreOf(foreSq);
            if (isBreak(foreSq)) {  // break 条件
                break;
            }

            foreSqArray.push(foreSq);
        }

        return [
            ...backSqArray.reverse(),
            centerSq,
            ...foreSqArray,
        ];
    }


    /**
     * ［片翼］取得
     * 
     * 指定の向きの各マスをスキャン。起点を含まない。
     * 
     * @returns マス番号の配列
     */
    function locateDirectionFromEdge(
        edgeSq: number,
        maxLength: number,
        foreOf: (sq: number)=>number,
        isContinue: (sq: number)=>boolean,
        isBreak: (sq: number)=>boolean,
    ) : number[] {
        const sqArray: number[] = [];

        let foreSq: number = edgeSq;;  // 隣
        for(let i:number=0; i<maxLength; i++){
            foreSq = foreOf(foreSq);

            if (isContinue(foreSq)) {   // 無視条件
                continue;
            }

            if (isBreak(foreSq)) {   // 終了条件
                break;
            }

            sqArray.push(foreSq);
        }

        return sqArray;
    }


    /**
     * 以下の数字の位置（x を含まない）のマス番号を取得。
     * 
     * (4)             (3)              (2)
     *     +--+--+--+--+--+--+--+--+--+
     *     |15|  |  |  |11|  |  |  | 7|
     *     +--+--+--+--+--+--+--+--+--+
     *     |  |14|  |  |10|  |  | 6|  |
     *     +--+--+--+--+--+--+--+--+--+
     *     |  |  |13|  | 9|  | 5|  |  |
     *     +--+--+--+--+--+--+--+--+--+
     *     |  |  |  |12| 8| 4|  |  |  |
     *     +--+--+--+--+--+--+--+--+--+
     * (5) |19|18|17|16| x| 0| 1| 2| 3| (1)
     *     +--+--+--+--+--+--+--+--+--+
     *     |  |  |  |20|24|28|  |  |  |
     *     +--+--+--+--+--+--+--+--+--+
     *     |  |  |21|  |25|  |29|  |  |
     *     +--+--+--+--+--+--+--+--+--+
     *     |  |22|  |  |26|  |  |30|  |
     *     +--+--+--+--+--+--+--+--+--+
     *     |23|  |  |  |27|  |  |  |31|
     *     +--+--+--+--+--+--+--+--+--+
     * (6)             (7)              (8)
     * 
     * 👆  [0]を自分の着手のマスとする。例では片翼の長さを 4 とした。
     * この図形に名前はないが、４ウェイ（4t-way）とでも呼ぶとする。
     * 
     */
    function locateRadialEightHalfDirectionFieldArray(
        startSq: number,
        oneWingMaxLength: number,
        isContinue: (sq: number)=>boolean, 
        isBreak: (sq: number)=>boolean,
    ) : number[][] {
        const eastWayField = locateDirectionFromEdge( // (1)
            startSq,
            oneWingMaxLength,
            eastOf,
            isContinue,
            isBreak,
        );
        const northeastWayField = locateDirectionFromEdge(    // (2)
            startSq,
            oneWingMaxLength,
            northeastOf,
            isContinue,
            isBreak,
        );
        const northWayField = locateDirectionFromEdge(    // (3)
            startSq,
            oneWingMaxLength,
            northOf,
            isContinue,
            isBreak,
        );
        const northwestWayField = locateDirectionFromEdge(    // (4)
            startSq,
            oneWingMaxLength,
            northwestOf,
            isContinue,
            isBreak,
        );
        const westWayField = locateDirectionFromEdge( // (5)
            startSq,
            oneWingMaxLength,
            westOf,
            isContinue,
            isBreak,
        );
        const southwestWayField = locateDirectionFromEdge(    // (6)
            startSq,
            oneWingMaxLength,
            southwestOf,
            isContinue,
            isBreak,
        );
        const southWayField = locateDirectionFromEdge(    // (7)
            startSq,
            oneWingMaxLength,
            southOf,
            isContinue,
            isBreak,
        );
        const southeastWayField = locateDirectionFromEdge(    // (8)
            startSq,
            oneWingMaxLength,
            southeastOf,
            isContinue,
            isBreak,
        );
        return [
            // startSq を含まない
            eastWayField,
            northeastWayField,
            northWayField,
            northwestWayField,
            westWayField,
            southwestWayField,
            southWayField,
            southeastWayField
        ];
    }


    /**
     * ［飛び石］取得
     * 
     * ［逆ウィング］の逆順、着手点、順ウィングを合わせたものが［飛び石］だ。
     * ９マス以下。
     * 
     * @returns ９つのマスの番号の配列
     */
    function locateFieldCapacity(
        startSq: number,    // 着手点
        foreOf: (sq: number)=>number,
        backOf: (sq: number)=>number,
        isContinue: (sq: number)=>boolean,
        isBreak: (sq: number)=>boolean,
    ) : number[] {

        // 順ウィング
        const fwdWing = locateDirectionFromEdge(
            startSq,
            ONE_WING_MAX_LENGTH,
            foreOf,
            isContinue,
            isBreak,
        );

        // 逆ウィング
        const revWing = locateDirectionFromEdge(
            startSq,
            ONE_WING_MAX_LENGTH,
            backOf,
            isContinue,
            isBreak,
        );

        return [...revWing.reverse(), startSq, ...fwdWing]; // 向きを揃えて１つの配列にする
    }


    function aStoneWingsLocateSlidingWindowArray(
        locations: number[],
        isBreak: (sq: number) => boolean,
    ) : number[][] {
        const slidingWindowArray : number[][] = [];

        for(let slidingWindowNum: number=0; slidingWindowNum < 5; slidingWindowNum++){
            const backWingArray : number[] = [];
            const foreWingArray : number[] = [];

            // 逆ウィング（起点を含まない）を戻る
            for(let i:number=3; 0<=i; i--){ // 3 ～ 0
                const sq = locations[i];
                if (isBreak(sq)) {
                    break;
                }

                backWingArray.push(sq);
            }

            // 順ウィング（起点を含まない）を進む
            for(let i:number=5; i<9; i++){  // 5 ～ 8
                const sq = locations[i];
                if (isBreak(sq)) {
                    break;
                }

                foreWingArray.push(sq);
            }

            slidingWindowArray.push([
                ...backWingArray.reverse(),
                locations[4],
                ...foreWingArray
            ])
        }

        return slidingWindowArray;
    }

    // ++++++++++++++++++++++++++++++++++++++++++++++
    // + サブルーチン　＞　ゲーム盤１　＞　判定する +
    // ++++++++++++++++++++++++++++++++++++++++++++++

    /**
     * 左上隅か
     * @param sq 
     */
    function isNorthwestCorner(sq: number) : boolean {
        return sq==0;
    }


    /**
     * 右上隅か
     * @param sq 
     */
    function isNortheastCorner(sq: number) : boolean {
        return sq == gameBoard1FileNum.value - 1;
    }


    /**
     * 左下隅か
     * @param sq 
     */
    function isSouthwestCorner(sq: number) : boolean {
        return sq == gameBoard1Area.value - gameBoard1FileNum.value;
    }


    /**
     * 右下隅か
     * @param sq 
     */
    function isSoutheastCorner(sq: number) : boolean {
        return sq == gameBoard1Area.value - 1;
    }


    /**
     * 上辺か
     * @param sq 
     */
    function isNorthEdge(sq: number) : boolean {
        return Math.floor(sq/gameBoard1FileNum.value) == 0;
    }


    /**
     * 左辺か
     * @param sq 
     */
    function isWestEdge(sq: number) : boolean {
        return sq%gameBoard1FileNum.value == 0;
    }


    /**
     * 右辺か
     * @param sq 
     */
    function isEastEdge(sq: number) : boolean {
        return sq%gameBoard1FileNum.value == gameBoard1FileNum.value - 1;
    }


    /**
     * 下辺か
     * @param sq 
     */
    function isSouthEdge(sq: number) : boolean {
        return Math.floor(sq/gameBoard1FileNum.value) == gameBoard1RankNum.value - 1;
    }


    /**
     * ［死に方向］判定
     * @param aStoneSq 
     */
    function oppositeTurnStoneIsDeadHorizontal(
        aStoneSq: number,
    ) : boolean {
        const horizontalFieldCapacity = locateFieldCapacity(
            aStoneSq,
            eastOf,
            westOf,
            (_sq: number) => false,  // continue 条件
            (sq: number) => isOutOfBoardOrColor(gameBoard1Turn.value, sq),   // break 条件
        );

        return isDeadCapacity(horizontalFieldCapacity);
    }


    /**
     * ［死に方向］判定
     * @param aStoneSq 
     */
    function oppositeTurnStoneIsDeadVertical(
        aStoneSq: number,
    ) : boolean {
        const verticalFieldCapacity = locateFieldCapacity(
            aStoneSq,
            southOf,
            northOf,
            (_sq: number) => false,  // continue 条件
            (sq: number) => isOutOfBoardOrColor(gameBoard1Turn.value, sq),   // break 条件
        );

        return isDeadCapacity(verticalFieldCapacity);
    }


    /**
     * ［死に方向］判定
     * @param aStoneSq 
     */
    function oppositeTurnStoneIsDeadBaroqueDiagonal(
        aStoneSq: number,
    ) : boolean {
        const baroqueDiagonalFieldCapacity = locateFieldCapacity(
            aStoneSq,
            northeastOf,
            southwestOf,
            (_sq: number) => false,  // continue 条件
            (sq: number) => isOutOfBoardOrColor(gameBoard1Turn.value, sq),   // break 条件
        );

        return isDeadCapacity(baroqueDiagonalFieldCapacity);
    }


    /**
     * ［死に方向］判定
     * @param aStoneSq 
     */
    function oppositeTurnStoneIsDeadSinisterDiagonal(
        aStoneSq: number,
    ) : boolean {
        const sinisterDiagonalFieldCapacity = locateFieldCapacity(
            aStoneSq,
            southeastOf,
            northwestOf,
            (_sq: number) => false,  // continue 条件
            (sq: number) => isOutOfBoardOrColor(gameBoard1Turn.value, sq),   // break 条件
        );

        return isDeadCapacity(sinisterDiagonalFieldCapacity);;
    }


    /**
     * 盤の外か
     * @param color 
     * @param sq 
     */
    function isOutOfBoard(sq: number) : boolean {
        return sq == -1;
    }


    /**
     * 空点か
     * @param sq 
     */
    function isEmptyPoint(sq: number) : boolean {
        return sq != -1 && gameBoard1StoneColorArray.value[sq] == COLOR_EMPTY;
    }


    /**
     * 盤の外、または指定の石の色か
     * @param color 
     * @param sq 
     */
    function isOutOfBoardOrColor(color: number, sq: number) : boolean {
        return sq == -1 || gameBoard1StoneColorArray.value[sq] == color;
    }


    /**
     * 盤の外、または指定の石の色か
     * @param endColor 
     */
    function makeIsOutOfBoardOrColor(endColor: number) :
        (sq: number)=>boolean
    {
        return (sq: number)=>{
            return sq == -1 || gameBoard1StoneColorArray.value[sq] == endColor;
        }
    }


    /**
     * ［死に飛び石］判定
     * 
     * ［飛び石］の長さが５に満たないとき、［死に飛び石］だ。
     */
    function isDeadCapacity(
        runsCapacity: number[],
    ) : boolean {
        return runsCapacity.length < FIVE_LENGTH;
    }

</script>

<style lang="css" scoped>
    @import '@/styles/misc.css';
    @import '@/styles/talk-pen.css';
</style>
