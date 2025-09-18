<template>
    <!-- 機能 -->
    <button-20250822 ref="button1Ref"/>

    <!-- 以降、ページ -->
    <the-app-header/>

    <button-to-back-to-contents
        class="sec-0 mt-6"
        pagePath="."
    />

    <h1>シューティング・スター</h1>
    <section class="sec-1 pt-6 mb-6">

        <!-- ゲームの操作方法 -->
        <v-btn @click="gameMachine1ManualIsShowing = !gameMachine1ManualIsShowing">{{ gameMachine1ManualIsShowing ? 'ゲームの遊び方を閉じる' : 'ゲームの遊び方を表示' }}</v-btn>
        <section class="sec-1 pt-6 pb-6" v-if="gameMachine1ManualIsShowing">
            <p>
                このゲームは、星を撮影する、という状況を見立てたゲームだぜ。<br/>
                <br/>
                下に黒い画面が見えるように、ウィンドウを広げてくれだぜ。<br/>
                この黒い画面は宇宙な。<br/>
                ［▶］ボタンを押すと、ゲームが始まるぜ。<br/>
                たまに星が流れてくる。<br/>
                60秒の間に、カメラのファインダー（点線の長方形だ）を上下左右に動かして、星をファインダーの中に入っているときに、［（スペース）］キーを押してくれだぜ。これで 100点 だぜ。<br/>
                <br/>
                飽きたら終わりだぜ。<br/>
                <br/>
                じゃあ、［ゲームの遊び方を閉じる］ボタンをクリックしてくれだぜ。
            </p>
        </section>

        <p class="mt-6">ボタン</p>
        <section class="sec-0 mb-6">
            <!-- ボタンを並べる -->

            
            <v-btn
                class="code-key"
                @touchstart.prevent="button1Ref?.press($event, onPowerOnButtonPushed, {repeat: false});"
                @touchend="button1Ref?.release();"
                @touchcancel="button1Ref?.release();"
                @touchleave="button1Ref?.release();"
                @mousedown.prevent="button1Ref?.handleMouseDown($event, onPowerOnButtonPushed, {repeat: false})"
                @mouseup="button1Ref?.release();"
                @mouseleave="button1Ref?.release();"
            >{{ gameMachine1IsPowerOn ? "Off" : "On" }}</v-btn>

            
            <v-btn
                class="code-key"
                :disabled="!startButton1Enabled"
                @touchstart.prevent="button1Ref?.press($event, onGameStartOrEndButtonPushed, {repeat: false});"
                @touchend="button1Ref?.release();"
                @touchcancel="button1Ref?.release();"
                @touchleave="button1Ref?.release();"
                @mousedown.prevent="button1Ref?.handleMouseDown($event, onGameStartOrEndButtonPushed, {repeat: false})"
                @mouseup="button1Ref?.release();"
                @mouseleave="button1Ref?.release();"
            >{{ gameMachine1IsPlaying ? "⏹" : "▶" }}</v-btn>


            <v-btn
                class="code-key"
                :disabled="!pauseButton1Enabled"
                @touchstart.prevent="button1Ref?.press($event, onGamePauseOrRestartButtonPushed, {repeat: false});"
                @touchend="button1Ref?.release();"
                @touchcancel="button1Ref?.release();"
                @touchleave="button1Ref?.release();"
                @mousedown.prevent="button1Ref?.handleMouseDown($event, onGamePauseOrRestartButtonPushed, {repeat: false})"
                @mouseup="button1Ref?.release();"
                @mouseleave="button1Ref?.release();"
            >{{ gameMachine1IsPause ? "⏯" : "⏸" }}</v-btn>


        </section>
        <p style="font-size: x-large; margin-top: 8px; margin-bottom: 8px;">
            スコア： {{ gameMachine1Score }}　　残り時間: {{ Math.floor((gameMachine1MaxCount - stopwatch1Count) / commonSeconds) }} . {{ (gameMachine1MaxCount - stopwatch1Count) % commonSeconds }}
        </p>

        <!-- ストップウォッチ。デバッグに使いたいときは、 display: none; を消してください。 -->
        <stopwatch
            ref="stopwatch1Ref"
            v-on:countUp="(countNum: number) => { stopwatch1Count = countNum; }"
            style="display: none;" />

        
        <!-- ゲームマシン１ -->
        <game-machine-waratch2
            :hardLocationStyle="{
                left: '0px',
                top: '0px',
            }"
            :screenWidth="gameMachine1Zoom * board1FileNum * tileBoard1TileWidth"
            :screenHeight="gameMachine1Zoom * board1RankNum * tileBoard1TileHeight"
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
                        width: `${board1FileNum * tileBoard1TileWidth}px`,
                        height: `${board1RankNum * tileBoard1TileHeight}px`,
                        zoom: gameMachine1Zoom,
                    }"
                    style="
                        position:relative;
                        left: 0;
                        top: 0;
                        background-color: #303030;
                    "
                >
                    <!--
                        グリッド
                        NOTE: ループカウンターは 1 から始まるので、1～9の9個のセルを作成。
                    -->
                    <div
                        v-for="i in board1Area"
                        :key="i"
                        :style="{
                            top: `${Math.floor((i - 1) / board1FileNum) * tileBoard1TileHeight}px`,
                            left: `${((i - 1) % board1FileNum) * tileBoard1TileWidth}px`,
                            width: `${tileBoard1TileWidth}px`,
                            height: `${tileBoard1TileHeight}px`,
                        }"
                        style="
                            position: absolute;
                            border: solid 1px gray;
                        "
                        ></div>

                    <!-- 星 -->
                    <Tile
                        :srcLeft="0"
                        :srcTop="0"
                        :srcWidth="tileBoard1TileWidth"
                        :srcHeight="tileBoard1TileHeight"
                        tilemapUrl="/img/making/sprite-objects-001.png"
                        :style="starStyle"
                        style="position:absolute;" /><br/>

                    <!-- カメラのファインダー（点線の枠） -->
                    <div
                        class="player"
                        :style="playerStyle"
                        style="position:absolute;" ></div>

                    <!-- リロードのカウントダウン（パイみたいなやつ） -->
                    <Tile
                        :srcLeft="reloadPie1TileLeft"
                        :srcTop="reloadPie1TileTop"
                        :srcWidth="tileBoard1TileWidth"
                        :srcHeight="tileBoard1TileHeight"
                        tilemapUrl="/img/making/202508__warabenture__16-2357-8counts-red.png"
                        :style="reloadPieStyle"
                        style="position:absolute;" /><br/>
                        
                    <!-- メッセージ -->
                    <p
                        v-if="!gameMachine1IsPlaying"
                        :style="{
                            left: `${tileBoard1TileWidth}px`,
                            top: `${8 * tileBoard1TileHeight}px`,
                            width: `${14 * tileBoard1TileHeight}px`,
                        }"
                        style="
                            position: absolute;
                            font-size: 28px;
                            color: white;
                        "
                    >ボタン操作の練習ができます。ゲームを開始するには、ゲーム機の上の［▶］ボタンを押してください。</p>
                </div>

            </template>
        </game-machine-waratch2>


        <section class="sec-0 mt-6 mb-6">
            <!-- お好み設定パネル１ -->
            <v-btn
                class="code-key"
                @touchstart.prevent="button1Ref?.press($event, onPreferences1ButtonPressed);"
                @touchend="button1Ref?.release();"
                @touchcancel="button1Ref?.release();"
                @touchleave="button1Ref?.release();"
                @mousedown.prevent="button1Ref?.handleMouseDown($event, onPreferences1ButtonPressed)"
                @mouseup="button1Ref?.release();"
                @mouseleave="button1Ref?.release();"
            >{{ gameMachine1PreferencesIsShowing ? '⚙️お好み設定を終わる' : '⚙️お好み設定を表示' }}</v-btn>
            <section
                v-if="gameMachine1PreferencesIsShowing"
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

        
        <!-- デバッグ用 -->
        <!--
            <p>スケジュール・ステップ: {{ appGameScheduleStep.value }}</p>
            <p>星　行： {{ star1Ranks }}</p>
            <p>星　列： {{ star1Files }}</p>
            <p>リロード・タイム: {{ player1ReloadTime.value }}</p>
            <br/>
            <p>元画像のタイルマップを表示：</p>
            <v-img src="/img/making/sprite-objects-001.png" style="width:128px; height:128px; border: dashed 4px gray;"/><br/>
            <v-img src="/img/making/202508__warabenture__16-2357-8counts-red.png" style="width:128px; height:64px; border: dashed 4px gray;"/><br/>
            ：ここまで。
        -->
    </section>
    
    <button-to-go-to-top class="sec-1 pt-6"/>
    <h2>ソースコード</h2>
    <section class="sec-2">
        <source-link/>
    </section>

    <button-to-go-to-top class="sec-0 pt-6"/>
</template>

<script setup lang="ts">

    console.log("シューティングスター　（初級者向けソースコード版）")

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
    // 👆 ［初級者向けのソースコード］では、 reactive は使いません。

    import { VBtn } from 'vuetify/components';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    // アルファベット順
    import Button20250822 from '@/components/Button20250822.vue';
    import ButtonToBackToContents from '@/components/ButtonToBackToContents.vue';
    import ButtonToGoToTop from '@/components/ButtonToGoToTop.vue';
    import GameMachineWaratch2 from '@/components/GameMachineWaratch2.vue';
    import SourceLink from '@/components/SourceLink.vue';
    import Stopwatch from '@/components/Stopwatch.vue';
    import Tile from '@/components/Tile.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import TheAppHeader from '../the-app-header.vue';


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //

    const commonSeconds = 60; // 1秒は60フレーム
    const commonSpriteMotionLeft = -1;  // モーション（motion）定数。カメラのファインダーが左に移動する
    const commonSpriteMotionRight = 1;
    const commonSpriteMotionUp = -1;
    const commonSpriteMotionDown = 1;


    // ################
    // # 読込リソース #
    // ################

    // ++++++++++++++++++++++++++++
    // + 読込リソース　＞　効果音 +
    // ++++++++++++++++++++++++++++

    const sfxConfigVolume = 0.3;                        // 音量

    let sfxDeniedAudio: HTMLAudioElement;               // 拒否音
    let sfxDeniedIsPlaying: boolean = false;            // 拒否音の再生状態
    let sfxCameraShutterAudio: HTMLAudioElement;        // カメラで撮影したときの効果音
    let sfxCameraShutterIsPlaying: boolean = false;     //
    let sfxMissAudio: HTMLAudioElement;                 // ミス音
    let sfxMissIsPlaying: boolean = false;              //

    /**
     * 効果音をロードする（jsfxrで作った効果音）
     */
    function sfxLoad() : void {
        sfxDeniedAudio = new Audio('/wav/202508__sfx__17-0200-denied.wav'); // 拒否音
        sfxDeniedAudio.volume = sfxConfigVolume;
        sfxDeniedAudio.addEventListener('play', () => { sfxDeniedIsPlaying = true })
        sfxDeniedAudio.addEventListener('pause', () => { sfxDeniedIsPlaying = false })
        sfxDeniedAudio.addEventListener('ended', () => { sfxDeniedIsPlaying = false })

        sfxCameraShutterAudio = new Audio('/wav/202508__sfx__16-2117-cameraShutter.wav'); // カメラのシャッター音
        sfxCameraShutterAudio.volume = sfxConfigVolume;
        sfxCameraShutterAudio.addEventListener('play', () => { sfxCameraShutterIsPlaying = true })
        sfxCameraShutterAudio.addEventListener('pause', () => { sfxCameraShutterIsPlaying = false })
        sfxCameraShutterAudio.addEventListener('ended', () => { sfxCameraShutterIsPlaying = false })

        sfxMissAudio = new Audio('/wav/202508__sfx__16-2146-miss.wav'); // ミス音
        sfxMissAudio.volume = sfxConfigVolume;
        sfxMissAudio.addEventListener('play', () => { sfxMissIsPlaying = true })
        sfxMissAudio.addEventListener('pause', () => { sfxMissIsPlaying = false })
        sfxMissAudio.addEventListener('ended', () => { sfxMissIsPlaying = false })
    }


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++
    // + オブジェクト　＞　拡張機能 +
    // ++++++++++++++++++++++++++++++

    const button1Ref = ref<InstanceType<typeof Button20250822> | null>(null);

    // ++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲームマシン１ +
    // ++++++++++++++++++++++++++++++++++++

    const gameMachine1ManualIsShowing = ref<boolean>(false);    // ゲームの操作方法・遊び方説明書を表示中
    const gameMachine1IsPowerOn = ref<boolean>(false);  // 電源ボタンは演出です
    const gameMachine1Visibility = ref<string>('hidden');
    const gameMachine1IsPlaying = ref<boolean>(false);  // ゲーム中
    const gameMachine1IsPause = ref<boolean>(false);    // ゲームは一時停止中
    const gameMachine1Zoom = ref<number>(0.375);    // ズーム
    const gameMachine1Score = ref<number>(0);   // 得点
    const gameMachine1MaxCount = computed(()=>60 * commonSeconds);  // ゲーム時間は１分
    const gameMachine1ScheduleStep = ref<number>(0);    // 星の出現スケジュール

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲームマシン１　＞　開始／終了ボタン +
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    const startButton1Enabled = ref<boolean>(false);

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲームマシン１　＞　一時停止／再開ボタン +
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    const pauseButton1Enabled = ref<boolean>(false);

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲームマシン１　＞　お好み設定 +
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++

    const gameMachine1PreferencesIsShowing = ref<boolean>(false);

    // ++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ストップウォッチ１ +
    // ++++++++++++++++++++++++++++++++++++++++

    const stopwatch1Ref = ref<InstanceType<typeof Stopwatch> | null>(null); // Stopwatch のインスタンス
    const stopwatch1Count = ref<number>(0);   // カウントの初期値
    watch(stopwatch1Count, (newCount) => {
        // カウントが変わったら、何か処理をしたい。

        // ----------------------------------------------------------
        // - オブジェクト　＞　ストップウォッチ１　＞　スケジュール -
        // ----------------------------------------------------------

        switch (gameMachine1ScheduleStep.value) {
            case 0:
                // ゲーム開始から1秒後、星表示
                if (newCount >= 1 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 5;
                    star1StartRanks.value = 3;
                    star1Visibility.value = 'visible';
                    gameMachine1ScheduleStep.value += 1;                    
                }
                break;
            case 1:
                // ゲーム開始から3秒後、星非表示
                if (newCount >= 3 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 2:
                // ゲーム開始から4秒後、星表示
                if (newCount >= 4 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 9;
                    star1StartRanks.value = 9;
                    star1Visibility.value = 'visible';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 3:
                // ゲーム開始から6秒後、星非表示
                if (newCount >= 6 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 4:
                // ゲーム開始から8秒後、星表示
                if (newCount >= 8 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 0;
                    star1StartRanks.value = 8;
                    star1Visibility.value = 'visible';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 5:
                // ゲーム開始から10秒後、星非表示
                if (newCount >= 10 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 6:
                // ゲーム開始から14秒後、星表示
                if (newCount >= 14 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 12;
                    star1StartRanks.value = 5;
                    star1Visibility.value = 'visible';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 7:
                // ゲーム開始から15秒後、星非表示
                if (newCount >= 15 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 8:
                // ゲーム開始から19秒後、星表示
                if (newCount >= 19 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 3;
                    star1StartRanks.value = 3;
                    star1Visibility.value = 'visible';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 9:
                // ゲーム開始から21秒後、星非表示
                if (newCount >= 21 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 10:
                // ゲーム開始から27秒後、星表示
                if (newCount >= 27 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 6;
                    star1StartRanks.value = 11;
                    star1Visibility.value = 'visible';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 11:
                // ゲーム開始から29秒後、星非表示
                if (newCount >= 29 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 12:
                // ゲーム開始から33秒後、星表示
                if (newCount >= 33 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 4;
                    star1StartRanks.value = 6;
                    star1Visibility.value = 'visible';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 13:
                // ゲーム開始から36秒後、星非表示
                if (newCount >= 36 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 14:
                // ゲーム開始から39秒後、星表示
                if (newCount >= 39 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 5;
                    star1StartRanks.value = 0;
                    star1Visibility.value = 'visible';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 15:
                // ゲーム開始から41秒後、星非表示
                if (newCount >= 41 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 16:
                // ゲーム開始から45秒後、星表示
                if (newCount >= 45 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 6;
                    star1StartRanks.value = 7;
                    star1Visibility.value = 'visible';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 17:
                // ゲーム開始から48秒後、星非表示
                if (newCount >= 48 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 18:
                // ゲーム開始から51秒後、星表示
                if (newCount >= 51 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 7;
                    star1StartRanks.value = 3;
                    star1Visibility.value = 'visible';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 19:
                // ゲーム開始から54秒後、星非表示
                if (newCount >= 54 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 20:
                // ゲーム開始から57秒後、星表示
                if (newCount >= 57 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 8;
                    star1StartRanks.value = 9;
                    star1Visibility.value = 'visible';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
            case 21:
                // ゲーム開始から60秒後、星非表示
                if (newCount >= 59 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    gameMachine1ScheduleStep.value += 1;
                }
                break;
        }

        if (newCount >= gameMachine1MaxCount.value) {
            // ゲーム停止
            stopwatch1Ref.value?.timerStop();  // タイマーをストップ
        }
    });

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　タイル盤１ +
    // ++++++++++++++++++++++++++++++++

    // NOTE: ソース画像マップと、表示画面のスケールは等倍とします。変えると難しい。
    const tileBoard1TileWidth = ref<number>(32);  // マスの横幅（ピクセル）
    const tileBoard1TileHeight = ref<number>(32); // マスの縦幅（ピクセル）
    const board1FileNum = ref<number>(16);        // 盤が横に何マスか
    const board1RankNum = ref<number>(12);        // 盤が縦に何マスか
    const board1Area = computed(()=>{           // 盤のマス数
        return board1FileNum.value * board1RankNum.value;
    });

    // ++++++++++++++++++++++++
    // + オブジェクト　＞　星 +
    // ++++++++++++++++++++++++

    const star1StartFiles = ref<number>(0);      // 盤が横に何セルか
    const star1StartRanks = ref<number>(0);      // 星の出現位置。盤の上から何セルか
    const star1StartTime = ref<number>(0);      // 星の出現count時間
    const star1Visibility = ref<'hidden' | 'visible'>('hidden');    // 星の表示／非表示

    const star1Files = computed(()=>{
        return star1StartFiles.value + Math.floor((stopwatch1Count.value - star1StartTime.value) / 20);
    });
    const star1Ranks = computed(()=>{
        return star1StartRanks.value;
    });
    const starStyle = computed(() => {
        return {
            visibility: star1Visibility.value,
            top: `${star1Ranks.value * tileBoard1TileHeight.value}px`,
            left: `${star1Files.value * tileBoard1TileWidth.value}px`,
            width: `${tileBoard1TileWidth.value}px`,
            height: `${tileBoard1TileHeight.value}px`,
        };
    });

    // ++++++++++++++++++++++++++++
    // + オブジェクト　＞　自機１ +
    // ++++++++++++++++++++++++++++
    //
    // カメラのファインダー。点線の枠。
    //

    const player1Left = ref<number>(6 * tileBoard1TileWidth.value);     // スプライトのX座標
    const player1Top = ref<number>(4 * tileBoard1TileHeight.value);     // スプライトのY座標
    const player1FileNum = ref<number>(4);                            // スプライトの列数
    const player1RankNum = ref<number>(3);                            // スプライトの行数
    const player1Input = <Record<string, boolean>>{                     // 入力
        // アルファベット順
        " ": false, ArrowDown: false, ArrowLeft: false, ArrowUp: false, ArrowRight: false,
    };
    const player1MotionWait = ref<number>(0);   // 排他的モーション時間。
    const player1AnimationWalkingFrames = 8;                        // 歩行フレーム数
    const player1SpeedHorizontal = ref<number>(tileBoard1TileWidth.value / player1AnimationWalkingFrames);  // 移動速度。割り切れるようにすること
    const player1SpeedVertical = ref<number>(tileBoard1TileHeight.value / player1AnimationWalkingFrames);
    const player1Motion = ref<Record<string, number>>({             // 入力
        xAxis: 0,   // 負なら左、正なら右
        yAxis: 0,   // 負なら上、正なら下
    });
    const player1ReloadTime = ref<number>(0);                       // 0 になるまで、入力を受け付けない
    const playerStyle = computed(() => {
        return {
            top: `${player1Top.value}px`,
            left: `${player1Left.value}px`,
            width: `${player1FileNum.value * tileBoard1TileWidth.value}px`,
            height: `${player1RankNum.value * tileBoard1TileHeight.value}px`,
            border: `dashed 4px ${player1ReloadTime.value > 0 ? '#d85050' : '#f0f0f0'}`, // リロード中は赤い枠
        };
    });

    // ++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　リロード・パイ +
    // ++++++++++++++++++++++++++++++++++++
    //
    // 写真を撮った時にカメラのファインダーの中心で回ってるやつ。
    //

    const reloadPie1Frames = <
        Record<number, {top: number, left: number}>
    >{
        0: {top: 0 * tileBoard1TileHeight.value, left: 0 * tileBoard1TileWidth.value},
        1: {top: 0 * tileBoard1TileHeight.value, left: 1 * tileBoard1TileWidth.value},
        2: {top: 0 * tileBoard1TileHeight.value, left: 2 * tileBoard1TileWidth.value},
        3: {top: 0 * tileBoard1TileHeight.value, left: 3 * tileBoard1TileWidth.value},
        4: {top: 1 * tileBoard1TileHeight.value, left: 0 * tileBoard1TileWidth.value},
        5: {top: 1 * tileBoard1TileHeight.value, left: 1 * tileBoard1TileWidth.value},
        6: {top: 1 * tileBoard1TileHeight.value, left: 2 * tileBoard1TileWidth.value},
        7: {top: 1 * tileBoard1TileHeight.value, left: 3 * tileBoard1TileWidth.value},
    };
    const reloadPie1Weight = 3 * commonSeconds;
    const reloadPie1Index = computed<number>(()=>{
        // タイル１枚当たりの時間（フレーム）
        const frameNum = Object.keys(reloadPie1Frames).length;
        const unitTime = reloadPie1Weight / frameNum;
        let index = Math.floor(player1ReloadTime.value / unitTime);
        if (index >= frameNum) {
            index = frameNum - 1;
        }
        return (frameNum - 1) - index;    // カウントダウン
    });
    const reloadPie1TileLeft = computed<number>(()=>{
        return reloadPie1Frames[reloadPie1Index.value].left;
    });
    const reloadPie1TileTop = computed<number>(()=>{
        return reloadPie1Frames[reloadPie1Index.value].top;
    });
    const reloadPieStyle = computed(() => {
        return {
            visibility: player1ReloadTime.value > 0 ? 'visible' : 'hidden',
            top: `${player1Top.value + player1RankNum.value * tileBoard1TileHeight.value / 2 - tileBoard1TileHeight.value / 2}px`,
            left: `${player1Left.value + player1FileNum.value * tileBoard1TileWidth.value / 2 - tileBoard1TileWidth.value / 2}px`,
        };
    });


    // ###############
    // # 開始 / 終了 #
    // ###############

    onMounted(() => {
        sfxLoad();
        powerOn();  // 電源を入れる演出
        gameInit();
        gameLoopStart();

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

            if (player1Input.hasOwnProperty(e.key)) {
                player1Input[e.key] = true;
            }
        });
        window.addEventListener('keyup', (e) => {
            if (player1Input.hasOwnProperty(e.key)) {
                player1Input[e.key] = false;
            }
        });
    });


    onUnmounted(()=>{
        // 効果音のメモリ解放を真面目に行う場合
        if (sfxDeniedAudio) {
            sfxDeniedAudio.pause();
            sfxDeniedAudio.src = '';
            sfxDeniedAudio.load(); // バッファクリア
            // イベントリスナー解除（必要なら）
            // sfxDeniedAudio.removeEventListener('ended', handler);
        }

        if (sfxCameraShutterAudio) {
            sfxCameraShutterAudio.pause();
            sfxCameraShutterAudio.src = '';
            sfxCameraShutterAudio.load(); // バッファクリア
        }

        if (sfxMissAudio) {
            sfxMissAudio.pause();
            sfxMissAudio.src = '';
            sfxMissAudio.load(); // バッファクリア
        }
    });


    // ################
    // # サブルーチン #
    // ################

    /**
     * 電源ボタン押下時
     */
    function onPowerOnButtonPushed() : void {
        if(gameMachine1IsPowerOn.value) {
            powerOff();
            return;
        }

        powerOn();
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


    function powerOn() : void {
        startButton1Enabled.value = true;
        gameMachine1Visibility.value = 'visible';
        gameMachine1IsPowerOn.value = true;
    }


    function powerOff() : void {
        if(gameMachine1IsPlaying.value) {    // ゲーム中なら、停止させます
            gameStop();
        }

        startButton1Enabled.value = false;
        gameMachine1Visibility.value = 'hidden';
        gameMachine1IsPowerOn.value = false;
    }


    function gameStart() : void {
        stopwatch1Ref.value?.timerStart();  // タイマーをスタート
        pauseButton1Enabled.value = true;
        gameMachine1IsPlaying.value = !gameMachine1IsPlaying.value;
    }


    function gameStop() : void {
        pauseButton1Enabled.value = false;
        gameInit(); // ゲームは終了したので、初期状態に戻します
    }


    /**
     * ［⏸］（一時停止）または［⏯］（再開）ボタン押下時。（状態により切り替わります）
     */
    function onGamePauseOrRestartButtonPushed() : void {
        if(gameMachine1IsPause.value) {
            // FIXME: ゲーム終了時にリスタートすると、タイマーが負に進んでしまう。
            stopwatch1Ref.value?.timerStart();  // タイマーをスタート
        } else {
            stopwatch1Ref.value?.timerStop();  // タイマーをストップ
        }

        gameMachine1IsPause.value = !gameMachine1IsPause.value;
    }


    /**
     * ゲームの初期化
     */
    function gameInit() : void {
        stopwatch1Ref.value?.timerReset();  // タイマーをリセット

        gameMachine1Score.value = 0;
        gameMachine1IsPlaying.value = false;
        gameMachine1IsPause.value = false;
        gameMachine1ScheduleStep.value = 0;

        star1Visibility.value = 'hidden';
    }


    /**
     * ゲームのメインループ開始
     */
    function gameLoopStart() : void {
        const update = () => {
            // モーション・タイマー
            player1MotionWait.value -= 1;

            if (player1ReloadTime.value > 0) {
                // リロード中
                player1ReloadTime.value -= 1;
            }

            if (player1MotionWait.value==0) {
                player1Motion.value["xAxis"] = 0;    // クリアー
                player1Motion.value["yAxis"] = 0;
            }
            
            // ++++++++++++++++++++++++++++++
            // + キー入力をモーションに変換 +
            // ++++++++++++++++++++++++++++++
            if (player1MotionWait.value<=0) {   // ウェイトが無ければ、入力を受け付ける。

                if (player1Input[" "]) {
                    cameraShot();   // 撮影
                }

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
            }

            // 移動処理
            // 斜め方向の場合、上下を優先する。
            if (player1Motion.value["xAxis"]==1) {   // 右
                if (player1Left.value < (board1FileNum.value - player1FileNum.value) * tileBoard1TileWidth.value) {    // 境界チェック
                    player1Left.value += player1SpeedHorizontal.value;
                }
            } else if (player1Motion.value["xAxis"]==-1) {  // 左
                if (0 < player1Left.value) {    // 境界チェック
                    player1Left.value -= player1SpeedHorizontal.value;
                }
            }

            if (player1Motion.value["yAxis"]==-1) {  // 上
                if (0 < player1Top.value) {    // 境界チェック
                    player1Top.value -= player1SpeedVertical.value;
                }
            } else if (player1Motion.value["yAxis"]==1) {   // 下
                if (player1Top.value < (board1RankNum.value - player1RankNum.value) * tileBoard1TileHeight.value) {    // 境界チェック
                    player1Top.value += player1SpeedVertical.value;
                }
            }

            // 次のフレーム
            requestAnimationFrame(update);
        };

        // 初回呼び出し
        requestAnimationFrame(update);
    }


    /**
     * カメラショット処理
     */
    function cameraShot() : void {

        if (player1ReloadTime.value > 0) {
            // リロード中
            if (!sfxDeniedIsPlaying) {
                // ブザー音が停止中なら鳴らす
                sfxDeniedAudio.play();
            }

            // リロード中は何も起こりません。
            return;
        }

        // ファインダーの位置とサイズ
        const playerLeftFiles = player1Left.value / tileBoard1TileWidth.value;
        const playerTopRanks = player1Top.value / tileBoard1TileHeight.value;
        const playerRightEndFiles = playerLeftFiles + player1FileNum.value;
        const playerBottomEndRanks = playerTopRanks + player1RankNum.value;

        // ファインダーの枠内に星を含むか？
        if (
            playerLeftFiles <= star1Files.value && star1Files.value <= playerRightEndFiles &&
            playerTopRanks <= star1Ranks.value && star1Ranks.value <= playerBottomEndRanks) {
            // 星を含んだ。
            niceShot();

        // 星を含まない
        } else {
            if (!sfxMissIsPlaying) {
                // ミス音が停止中なら鳴らす
                sfxMissAudio.play();
            }
        }

        player1ReloadTime.value = reloadPie1Weight;  // リロード時間を設定
    }


    /**
     * カメラのファインダーの中に星を収めて撮ったとき。
     */
    function niceShot() : void {
        if (!sfxCameraShutterIsPlaying) {
            // カメラのシャッター音が停止中なら鳴らす
            sfxCameraShutterAudio.play();
        }

        gameMachine1Score.value += 100;
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
     * ［お好み設定パネル１］を開くボタン。
     */
    function onPreferences1ButtonPressed() : void {
        gameMachine1PreferencesIsShowing.value = !gameMachine1PreferencesIsShowing.value;
    }

</script>

<style lang="css" scoped>
    @import '@/styles/misc.css';
    @import '@/styles/talk-pen.css';

    /** カメラのファインダー */
    div.player {
        position: relative; border:dashed 4px #f0f0f0;
    }
</style>
