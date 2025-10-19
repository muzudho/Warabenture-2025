<template>

    <comment>機能</comment>
    <button-20250822 ref="button1Ref"/>

    <comment>以降、ページ</comment>
    <the-app-header/>

    <button-to-back-to-contents
        class="sec-0 mt-6"
        pagePath="."
    />

    <h1>リバーシ</h1>
    <section class="sec-1 pt-6 mb-6">


        <!-- 外付けシステムボタン -->
        <section class="mb-6">

            
            <v-btn
                @touchstart.prevent="button1Ref?.press($event, onGameMachine1PowerOnButtonPushed, {repeat: false});"
                @touchend="button1Ref?.release();"
                @touchcancel="button1Ref?.release();"
                @touchleave="button1Ref?.release();"
                @mousedown.prevent="button1Ref?.handleMouseDown($event, onGameMachine1PowerOnButtonPushed, {repeat: false})"
                @mouseup="button1Ref?.release();"
                @mouseleave="button1Ref?.release();"
            >{{ gameMachine1IsPowerOn ? "Off" : "On" }}</v-btn>

            
            <v-btn
                :disabled="!gameMachine1GameStartButton1Enabled"
                @touchstart.prevent="button1Ref?.press($event, onGameMachine1StartOrEndButtonPushed, {repeat: false});"
                @touchend="button1Ref?.release();"
                @touchcancel="button1Ref?.release();"
                @touchleave="button1Ref?.release();"
                @mousedown.prevent="button1Ref?.handleMouseDown($event, onGameMachine1StartOrEndButtonPushed, {repeat: false})"
                @mouseup="button1Ref?.release();"
                @mouseleave="button1Ref?.release();"
            >{{ gameSoft1Ref?.game1IsPlaying ? "⏹" : "▶" }}</v-btn>


            <v-btn
                :disabled="!gameMachine1GamePauseButton1Enabled"
                @touchstart.prevent="button1Ref?.press($event, onGameMachine1PauseOrRestartButtonPushed, {repeat: false});"
                @touchend="button1Ref?.release();"
                @touchcancel="button1Ref?.release();"
                @touchleave="button1Ref?.release();"
                @mousedown.prevent="button1Ref?.handleMouseDown($event, onGameMachine1PauseOrRestartButtonPushed, {repeat: false})"
                @mouseup="button1Ref?.release();"
                @mouseleave="button1Ref?.release();"
            >{{ gameSoft1Ref?.game1IsPlayingPause ? "⏯" : "⏸" }}</v-btn>


        </section>


        <!-- ゲームマシン１ -->
        <game-machine-waratch2
            :style="{
                left: '0px',
                top: '0px',
            }"
            :screenWidth="(gameSoft1Ref?.vision1Zoom ?? 1) * (gameSoft1Ref?.vision1Width ?? 100)"
            :screenHeight="(gameSoft1Ref?.vision1Zoom ?? 1) * (gameSoft1Ref?.vision1Height ?? 100)"
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
                <!-- ゲームソフト１ -->
                <game-soft
                    ref="gameSoft1Ref"
                    :player1Input="gameMachine1Player1Input"
                ></game-soft>
            </template>
        </game-machine-waratch2>


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
                    v-model="vision1Zoom"
                    :min="0.375"
                    :max="4"
                    step="0.125"
                    showTicks="always"
                    thumbLabel="always" />
            </section>
        </section>

        <!-- 各種表示 -->
        <p>{{ gameSoft1Ref?.game1DebugMessage }}</p>
        <p>次の手数={{ (gameSoft1Ref?.game1Times ?? 0) + 1 }}</p>
        <p>次の手番=<span :style="{
            color: gameSoft1Ref?.game1StoneColorNameMap[gameSoft1Ref?.game1Turn],
        }">●</span></p>
        <p><span
            :style="{
                color: gameSoft1Ref?.game1StoneColorNameMap[1],
            }">●</span>の数={{ gameSoft1Ref?.gameBoardContentModel1Ref?.stoneCounts[1] }}</p>
        <p><span
            :style="{
                color: gameSoft1Ref?.game1StoneColorNameMap[2],
            }">●</span>の数={{ gameSoft1Ref?.gameBoardContentModel1Ref?.stoneCounts[2] }}</p>
        <p>連続パス回数={{ gameSoft1Ref?.game1PassCount }}</p>
        <p>{{ gameSoft1Ref?.game1IsEnd ? (gameSoft1Ref?.gameIsFullCapacity() ? '満局' : '終局') : '' }}</p>

        <!-- デバッグ情報 -->
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
            <p>デバッグ：</p>

            <v-text-field
                label="着手点"
                v-model="debug1MoveSq"
            />

            <p class="mb-6">{{ debug1MoveSq }}（着手点）はマス番号で言うと {{ makeCodeToSq(gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 0)(debug1MoveSq) }}。</p>

            <p class="mb-6">{{ debug1MoveSq }}（着手点）から東方向へ手番石をスキップした先は {{
                makeSqToCode(
                    gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 0,
                )(
                    locateThisTurnStonesSkipped(
                        gameSoft1Ref?.gameBoardContentModel1Ref?.stonesColor ?? [],
                        gameSoft1Ref?.game1Turn ?? 0,
                        (gameSoft1Ref?.gameBoardIndexModel1Ref?.getForeOf(DIRECTION_HORIZONTAL) ?? ((_sq) => SQ_OUT_OF_BOARD))(
                            makeCodeToSq(gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 0)(debug1MoveSq)
                        ),
                        gameSoft1Ref?.gameBoardIndexModel1Ref?.getForeOf(DIRECTION_HORIZONTAL) ?? ((_sq) => SQ_OUT_OF_BOARD)
                    )
                )}}（スキップ点）。</p>
            <p class="mb-6">{{ debug1MoveSq }}（着手点）から西方向へ手番石をスキップした先は {{
                makeSqToCode(
                    gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 0,
                )(
                    locateThisTurnStonesSkipped(
                        gameSoft1Ref?.gameBoardContentModel1Ref?.stonesColor ?? [],
                        gameSoft1Ref?.game1Turn ?? 0,
                        (gameSoft1Ref?.gameBoardIndexModel1Ref?.getBackOf(DIRECTION_HORIZONTAL) ?? ((_sq) => SQ_OUT_OF_BOARD))(
                            makeCodeToSq(gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 0)(debug1MoveSq)
                        ),
                        gameSoft1Ref?.gameBoardIndexModel1Ref?.getBackOf(DIRECTION_HORIZONTAL) ?? ((_sq) => SQ_OUT_OF_BOARD)
                    )
                )}}（スキップ点）。</p>
            
            <p class="mb-6">{{ debug1MoveSq }}（着手点）から東方向へ跨いだ相手番石（…a）は {{
                locateHoppedoverOppositeTurnStones(
                    gameSoft1Ref?.gameBoardContentModel1Ref?.stonesColor ?? [],
                    gameSoft1Ref?.game1Turn ?? 0,
                    (gameSoft1Ref?.gameBoardIndexModel1Ref?.getForeOf(DIRECTION_HORIZONTAL) ?? ((_sq) => SQ_OUT_OF_BOARD))(
                        makeCodeToSq(gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 0)(debug1MoveSq)
                    ),
                    gameSoft1Ref?.gameBoardIndexModel1Ref?.getForeOf(DIRECTION_HORIZONTAL) ?? ((_sq) => SQ_OUT_OF_BOARD)
                )[0].map((sq: number) =>
                    makeSqToCode(gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 0)(sq)
                )}}。</p>

            <p class="mb-6"> a のキャップは {{
                makeSqToCode(gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 0)(
                    getCap(
                        gameSoft1Ref?.gameBoardContentModel1Ref?.stonesColor ?? [],
                        makeCodeToSq(gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 0)(debug1MoveSq),
                        locateHoppedoverOppositeTurnStones(
                            gameSoft1Ref?.gameBoardContentModel1Ref?.stonesColor ?? [],
                            gameSoft1Ref?.game1Turn ?? 0,
                            (gameSoft1Ref?.gameBoardIndexModel1Ref?.getForeOf(DIRECTION_HORIZONTAL) ?? ((_sq) => SQ_OUT_OF_BOARD))(
                                makeCodeToSq(gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 0)(debug1MoveSq)
                            ),
                            gameSoft1Ref?.gameBoardIndexModel1Ref?.getForeOf(DIRECTION_HORIZONTAL) ?? ((_sq) => SQ_OUT_OF_BOARD)
                        )[0],
                        gameSoft1Ref?.gameBoardIndexModel1Ref?.getForeOf(DIRECTION_HORIZONTAL) ?? ((_sq) => SQ_OUT_OF_BOARD)
                    )[0]
                )}}（マス） 色は {{
                getCap(
                    gameSoft1Ref?.gameBoardContentModel1Ref?.stonesColor ?? [],
                    makeCodeToSq(gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 0)(debug1MoveSq),
                    locateHoppedoverOppositeTurnStones(
                        gameSoft1Ref?.gameBoardContentModel1Ref?.stonesColor ?? [],
                        gameSoft1Ref?.game1Turn ?? 0,
                        (gameSoft1Ref?.gameBoardIndexModel1Ref?.getForeOf(DIRECTION_HORIZONTAL) ?? ((_sq) => SQ_OUT_OF_BOARD))(
                            makeCodeToSq(gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 0)(debug1MoveSq)
                        ),
                        gameSoft1Ref?.gameBoardIndexModel1Ref?.getForeOf(DIRECTION_HORIZONTAL) ?? ((_sq) => SQ_OUT_OF_BOARD)
                    )[0],
                    gameSoft1Ref?.gameBoardIndexModel1Ref?.getForeOf(DIRECTION_HORIZONTAL) ?? ((_sq) => SQ_OUT_OF_BOARD)
                )[1]}}。</p>

            <p>マス番号:</p>
            <div
                class="mb-6"
            >
                <p
                    v-for="rank in range(0, (gameSoft1Ref?.gameBoardIndexModel1Ref?.rankNum ?? 1))"
                    :key="rank"
                >
                    <span
                        v-for="sq in range(rank * (gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 1), (rank + 1) * (gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 1))"
                        :key="sq"
                    >
                        {{ sq.toString().padStart(2, '0') }}&nbsp;
                    </span><br/>
                </p>
            </div>

            <p>水平方向　＞　可動　＞　黒番:</p>
            <div
                class="mb-6"
            >
                <p
                    v-for="rank in range(0, (gameSoft1Ref?.gameBoardIndexModel1Ref?.rankNum ?? 1))"
                    :key="rank"
                >
                    <span
                        v-for="sq in range(rank * (gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 1), (rank + 1) * (gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 1))"
                        :key="sq"
                    >
                        {{ gameSoft1Ref?.generationMoveModel1Ref?.gameBoard1CanMove[DIRECTION_HORIZONTAL][COLOR_BLACK][sq].toString().padEnd(5, ' ') }}&nbsp;
                    </span><br/>
                </p>
            </div>

            <p>水平方向　＞　可動　＞　白番:</p>
            <div
                class="mb-6"
            >
                <p
                    v-for="rank in range(0, (gameSoft1Ref?.gameBoardIndexModel1Ref?.rankNum ?? 1))"
                    :key="rank"
                >
                    <span
                        v-for="sq in range(rank * (gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 1), (rank + 1) * (gameSoft1Ref?.gameBoardIndexModel1Ref?.fileNum ?? 1))"
                        :key="sq"
                    >
                        {{ gameSoft1Ref?.generationMoveModel1Ref?.gameBoard1CanMove[DIRECTION_HORIZONTAL][COLOR_WHITE][sq].toString().padEnd(5, ' ') }}&nbsp;
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

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーザブル +
    // ++++++++++++++++++++++++++++++++++

    // from 部分のアルファベット順
    import { range } from '@/composables/range';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import GameSoft from '@/pages/minigames/reversi/game-soft.vue';
    import type { Player1Input } from '@/pages/minigames/reversi/game-soft.vue';
    import {
        // 色
        COLOR_BLACK, COLOR_WHITE,
        
        // 方角
        DIRECTION_HORIZONTAL,

        // マス番号
        makeCodeToSq, SQ_OUT_OF_BOARD,
    } from '@/pages/minigames/reversi/spec';

    import TheAppHeader from '@/pages/the-app-header.vue';

    import { makeSqToCode } from '@/pages/minigames/reversi/game-board-index-util';
    import { getCap, locateHoppedoverOppositeTurnStones, locateThisTurnStonesSkipped } from '@/pages/minigames/reversi/game-board-content-util';


    // ####################
    // # 子コンポーネント #
    // ####################

    // 子コンポーネントの参照を保持するref
    const gameSoft1Ref = ref<InstanceType<typeof GameSoft> | null>(null);


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++
    // + オブジェクト　＞　機能拡張 +
    // ++++++++++++++++++++++++++++++

    const button1Ref = ref<InstanceType<typeof Button20250822> | null>(null);

    // ++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　デバッグ用変数 +
    // ++++++++++++++++++++++++++++++++++++

    const debug1MoveSq = ref<string>('D4');  // デバッグ用：着手点

    // ++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲームマシン１ +
    // ++++++++++++++++++++++++++++++++++++

    const gameMachine1IsPowerOn = ref<boolean>(false);  // 電源ボタンは演出です
    const gameMachine1GameStartButton1Enabled = ref<boolean>(false);    // 開始／終了ボタン１
    const gameMachine1GamePauseButton1Enabled = ref<boolean>(false);    // 一時停止／再開ボタン

    // ++++++++++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲームマシン１　＞　環境設定 +
    // ++++++++++++++++++++++++++++++++++++++++++++++++++

    const gameMachine1EnvironmentConfigIsShowing = ref<boolean>(false);
    const vision1Zoom = computed<number>({
        get: ()=>{
            return gameSoft1Ref.value?.vision1Zoom ?? 1;
        },
        set: (value: number)=>{
            if (gameSoft1Ref.value) {
                return gameSoft1Ref.value.vision1Zoom = value;
            }
        }
    });

    // ++++++++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲームマシン１　＞　自機１ +
    // ++++++++++++++++++++++++++++++++++++++++++++++++

    const gameMachine1Player1Input = <Player1Input>{ // 入力
        // アルファベット順
        " ": false, ArrowDown: false, ArrowLeft: false, ArrowUp: false, ArrowRight: false,
    };


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
        console.log(`DEBUG: [onMounted] 開始。`);
        gameMachine1PowerOn();  // 電源を入れる演出
    });

    // ++++++++++++++++++++++++++++++++++++++++++++++++
    // + イベントハンドラー　＞　ゲームマシン・ボタン +
    // ++++++++++++++++++++++++++++++++++++++++++++++++

    /**
     * 左。
     */
    function onLeftButtonPressed() : void {
        gameMachine1Player1Input.ArrowLeft = true;
    }


    function onLeftButtonReleased() : void {
        gameMachine1Player1Input.ArrowLeft = false;
    }


    /**
     * 上。
     */
    function onUpButtonPressed() : void {
        gameMachine1Player1Input.ArrowUp = true;
    }


    function onUpButtonReleased() : void {
        gameMachine1Player1Input.ArrowUp = false;
    }


    /**
     * 右。
     */
    function onRightButtonPressed() : void {
        gameMachine1Player1Input.ArrowRight = true;
    }


    function onRightButtonReleased() : void {
        gameMachine1Player1Input.ArrowRight = false;
    }


    /**
     * 下。
     */
    function onDownButtonPressed() : void {
        gameMachine1Player1Input.ArrowDown = true;
    }


    function onDownButtonReleased() : void {
        gameMachine1Player1Input.ArrowDown = false;
    }


    /**
     * スペース・キー。
     */
    function onSpaceButtonPressed() : void {
        gameMachine1Player1Input[" "] = true;
        //gameSoft1Ref?.game1DebugMessage.value = `スペース・キーを押下しました。`;
    }


    function onSpaceButtonReleased() : void {
        gameMachine1Player1Input[" "] = false;
    }


    /**
     * ［デバッグ情報を表示］ボタン。
     */
    function onDebugInfoButtonPressed() : void {
        debugInfo1IsShowing.value = !debugInfo1IsShowing.value;
    }

    // ++++++++++++++++++++++++++++++++++++++++++++++++
    // + イベントハンドラー　＞　外付けシステムボタン +
    // ++++++++++++++++++++++++++++++++++++++++++++++++

    /**
     * 電源ボタン押下時
     */
    function onGameMachine1PowerOnButtonPushed() : void {
        if(gameMachine1IsPowerOn.value) {
            gameMachine1PowerOff();
            return;
        }

        gameMachine1PowerOn();
    }


    /**
     * ［▶］（再生）または［⏹］（停止）ボタン押下時。（状態により切り替わります）
     */
    function onGameMachine1StartOrEndButtonPushed() : void {
        if(gameSoft1Ref.value?.game1IsPlaying) {
            gameMachine1Stop();
            return;
        }

        gameMachine1Start();
    }


    /**
     * ［⏸］（一時停止）または［⏯］（再開）ボタン押下時。（状態により切り替わります）
     */
    function onGameMachine1PauseOrRestartButtonPushed() : void {
        if(gameSoft1Ref.value?.game1IsPlayingPause) {
            // FIXME: ゲーム終了時にリスタートすると、タイマーが負に進んでしまう。
            if (gameSoft1Ref.value?.game1Stopwatch1Ref) {
                gameSoft1Ref.value.game1Stopwatch1Ref.timerStart();  // タイマーをスタート
            }
        } else {
            if (gameSoft1Ref.value?.game1Stopwatch1Ref) {
                gameSoft1Ref.value.game1Stopwatch1Ref.timerStop();   // タイマーをストップ
            }
        }

        if(gameSoft1Ref.value?.game1IsPlayingPause) {
            gameSoft1Ref.value.game1IsPlayingPause = !gameSoft1Ref.value.game1IsPlayingPause;
        }
    }


    /**
     * ［環境設定パネル１］を開くボタン。
     */
    function onEnvironmentConfig1ButtonPressed() : void {
        gameMachine1EnvironmentConfigIsShowing.value = !gameMachine1EnvironmentConfigIsShowing.value;
    }


    // ################
    // # サブルーチン #
    // ################

    // ++++++++++++++++++++++++++++++++++++++++++
    // + サブルーチン　＞　外付けシステムボタン +
    // ++++++++++++++++++++++++++++++++++++++++++

    function gameMachine1PowerOn() : void {
        gameMachine1GameStartButton1Enabled.value = true;
        if (gameSoft1Ref.value) {
            gameSoft1Ref.value.vision1Visibility = 'visible';
        }
        gameMachine1IsPowerOn.value = true;

        console.log(`DEBUG: [gameMachine1PowerOn] ゲームの初期化を行いたい。`);
        gameSoft1Ref.value?.gameInit(); // ゲームの初期化
    }


    function gameMachine1PowerOff() : void {
        if(gameSoft1Ref.value?.game1IsPlaying) {    // ゲーム中なら、停止させます
            gameMachine1Stop();
        }

        gameMachine1GameStartButton1Enabled.value = false;
        if (gameSoft1Ref.value) {
            gameSoft1Ref.value.vision1Visibility = 'hidden';
        }
        gameMachine1IsPowerOn.value = false;
    }


    function gameMachine1Start() : void {
        if (gameSoft1Ref.value?.game1Stopwatch1Ref) {
            gameSoft1Ref.value.game1Stopwatch1Ref.timerStart();  // タイマーをスタート
        }
        gameMachine1GamePauseButton1Enabled.value = true;

        if (gameSoft1Ref.value?.game1IsPlaying) {
            gameSoft1Ref.value.game1IsPlaying = !gameSoft1Ref.value.game1IsPlaying;
        }
    }


    function gameMachine1Stop() : void {
        gameMachine1GamePauseButton1Enabled.value = false;
        gameSoft1Ref.value?.gameInit(); // ゲームは終了したので、初期状態に戻します
    }

</script>

<style lang="css" scoped>
    @import '@/styles/misc.css';
    @import '@/styles/talk-pen.css';
</style>
