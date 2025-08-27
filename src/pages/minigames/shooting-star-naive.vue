<template>
    <the-header/>

    <!-- ボタン機能拡張 -->
    <button-20250822 ref="button1Ref"/>

    <h3>シューティング・スター（初級者向けのソースコード）</h3>
    <section class="sec-3">

        <!-- ゲームの操作方法 -->
        <v-btn @click="appManualIsShowing = !appManualIsShowing">{{ appManualIsShowing ? 'ゲームの遊び方閉じる' : 'ゲームの遊び方を表示' }}</v-btn>
        <section class="sec-1" v-if="appManualIsShowing">
            <br>
            <p>
                このゲームは、星を撮影する、という状況を見立てたゲームだぜ。<br/>
                <br/>
                下に黒い画面が見えるように、ウィンドウを広げてくれだぜ。<br/>
                この黒い画面は宇宙な。<br/>
                ［ゲームスタート］ボタンを押すと、ゲームが始まるぜ。<br/>
                たまに星が流れてくる。<br/>
                60秒の間に、カメラのファインダーを上下左右に動かして、星をファインダーの中に入っているときに、エンターキーを押してくれだぜ。これで 100点 だぜ。<br/>
                <br/>
                飽きたら終わりだぜ。<br/>
            </p>
        </section><br/>
        <br/>
        <p>ボタン</p>
        <ul>
            <li>
                <!-- ボタンを並べる -->
                <v-btn
                    class="code-key"
                    @touchstart.prevent="button1Ref?.press($event, onGameStartOrEndButtonPushed, {repeat: true});"
                    @touchend="button1Ref?.release();"
                    @touchcancel="button1Ref?.release();"
                    @touchleave="button1Ref?.release();"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, onGameStartOrEndButtonPushed, {repeat: true})"
                    @mouseup="button1Ref?.release();"
                    @mouseleave="button1Ref?.release();"
                >{{ appGameIsPlaying ? "ゲーム終了" : "ゲームスタート" }}</v-btn>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="button1Ref?.press($event, onGamePauseOrRestartButtonPushed, {repeat: true});"
                    @touchend="button1Ref?.release();"
                    @touchcancel="button1Ref?.release();"
                    @touchleave="button1Ref?.release();"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, onGamePauseOrRestartButtonPushed, {repeat: true})"
                    @mouseup="button1Ref?.release();"
                    @mouseleave="button1Ref?.release();"
                >{{ appGameIsPause ? "再開" : "一時停止" }}</v-btn>

                <!-- フォーカスを外すためのダミー・ボタンです -->
                <v-btn
                    class="noop-key"
                    ref="noopButton"
                    v-tooltip="'PCでのマウス操作で、フォーカスがコントロールに残って邪魔になるときは、このボタンを押してくれだぜ'"
                >何もしないボタン</v-btn>
            </li>
        </ul>
        <br/>
        <p>キーボード操作方法</p>
        <ul>
            <li>ＰＣならボタンをマウスクリックか、キーボード操作、スマホならボタンをタッチ。</li>
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
                　…　カメラのファインダー（点線の長方形だ）を上下左右に移動
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
                    @touchstart.prevent="button1Ref?.press($event, onEnterButtonPressed, {repeat: true});"
                    @touchend="button1Ref?.release(onEnterButtonReleased);"
                    @touchcancel="button1Ref?.release(onEnterButtonReleased);"
                    @touchleave="button1Ref?.release(onEnterButtonReleased);"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, onEnterButtonPressed, {repeat: true})"
                    @mouseup="button1Ref?.release(onEnterButtonReleased);"
                    @mouseleave="button1Ref?.release(onEnterButtonReleased);"
                >（エンター）</v-btn>
                　…　撮影。
            </li>
        </ul>
        <br/>
        <div>
            <p style="font-size: x-large; margin-top: 8px; margin-bottom: 8px;">
            スコア： {{ appGameScore }}　　残り時間: {{ Math.floor((appGameMaxCount - stopwatch1Count) / commonSeconds) }} . {{ (appGameMaxCount - stopwatch1Count) % commonSeconds }}
            </p>
        </div>

        <!-- ストップウォッチ。デバッグに使いたいときは、 display: none; を消してください。 -->
        <stopwatch
            ref="stopwatch1Ref"
            v-on:countUp="(countNum) => { stopwatch1Count = countNum; }"
            style="display: none;" />

        <!-- ゲーム画面領域（宇宙） -->
        <div style="position:relative; left: 0; top: 0; width:512px; height:384px; background-color: #303030;">
            <!--
                グリッド
                NOTE: ループカウンターは 1 から始まるので、1～9の9個のセルを作成。
            -->
            <div v-for="i in board1Area" :key="i"
                :style="`position:absolute; top: ${Math.floor((i - 1) / board1Files) * board1SquareHeight}px; left: ${((i - 1) % board1Files) * board1SquareWidth}px; width:${board1SquareWidth}px; height:${board1SquareHeight}px; border: solid 1px gray;`"></div>

            <!-- 星 -->
            <Tile
                :srcLeft="0"
                :srcTop="0"
                :srcWidth="board1SquareWidth"
                :srcHeight="board1SquareHeight"
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
                :srcWidth="board1SquareWidth"
                :srcHeight="board1SquareHeight"
                tilemapUrl="/img/making/202508__warabenture__16-2357-8counts-red.png"
                :style="reloadPieStyle"
                style="position:absolute;" /><br/>
                
        </div>

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
    
    <br/>
    <h3>ソースコード</h3>
    <section class="sec-3">
        <source-link/>
    </section>

    <the-footer/>
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

    // from の階層が上の順、アルファベット順
    import Button20250822 from '../../components/Button20250822.vue';
    import SourceLink from '../../components/SourceLink.vue';
    import Stopwatch from '../../components/Stopwatch.vue';
    import Tile from '../../components/Tile.vue';
    import TheFooter from './the-footer.vue';
    import TheHeader from './the-header.vue';


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


    // ############################
    // # アプリケーション・データ #
    // ############################
    //
    // 今動いているアプリケーションの状態を記録しているデータ。特に可変のもの。
    //

    const appManualIsShowing = ref<boolean>(false);     // ゲームの操作方法・遊び方説明書を表示中
    const appGameScore = ref<number>(0);                // 得点
    const appGameIsPlaying = ref<boolean>(false);       // ゲーム中
    const appGameIsPause = ref<boolean>(false);         // ゲームは一時停止中
    const appGameMaxCount = computed(()=>60 * commonSeconds);   // ゲーム時間は１分
    const appGameScheduleStep = ref<number>(0);         // 星の出現スケジュール


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
    watch(stopwatch1Count, (newCount) => {
        // カウントが変わったら、何か処理をしたい。

        // --------------------------------------------------------
        // - オブジェクト　＞　ストップウォッチ　＞　スケジュール -
        // --------------------------------------------------------

        switch (appGameScheduleStep.value) {
            case 0:
                // ゲーム開始から1秒後、星表示
                if (newCount >= 1 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 5;
                    star1StartRanks.value = 3;
                    star1Visibility.value = 'visible';
                    appGameScheduleStep.value += 1;                    
                }
                break;
            case 1:
                // ゲーム開始から3秒後、星非表示
                if (newCount >= 3 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 2:
                // ゲーム開始から4秒後、星表示
                if (newCount >= 4 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 9;
                    star1StartRanks.value = 9;
                    star1Visibility.value = 'visible';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 3:
                // ゲーム開始から6秒後、星非表示
                if (newCount >= 6 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 4:
                // ゲーム開始から8秒後、星表示
                if (newCount >= 8 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 0;
                    star1StartRanks.value = 8;
                    star1Visibility.value = 'visible';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 5:
                // ゲーム開始から10秒後、星非表示
                if (newCount >= 10 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 6:
                // ゲーム開始から14秒後、星表示
                if (newCount >= 14 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 12;
                    star1StartRanks.value = 5;
                    star1Visibility.value = 'visible';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 7:
                // ゲーム開始から15秒後、星非表示
                if (newCount >= 15 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 8:
                // ゲーム開始から19秒後、星表示
                if (newCount >= 19 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 3;
                    star1StartRanks.value = 3;
                    star1Visibility.value = 'visible';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 9:
                // ゲーム開始から21秒後、星非表示
                if (newCount >= 21 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 10:
                // ゲーム開始から27秒後、星表示
                if (newCount >= 27 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 6;
                    star1StartRanks.value = 11;
                    star1Visibility.value = 'visible';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 11:
                // ゲーム開始から29秒後、星非表示
                if (newCount >= 29 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 12:
                // ゲーム開始から33秒後、星表示
                if (newCount >= 33 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 4;
                    star1StartRanks.value = 6;
                    star1Visibility.value = 'visible';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 13:
                // ゲーム開始から36秒後、星非表示
                if (newCount >= 36 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 14:
                // ゲーム開始から39秒後、星表示
                if (newCount >= 39 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 5;
                    star1StartRanks.value = 0;
                    star1Visibility.value = 'visible';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 15:
                // ゲーム開始から41秒後、星非表示
                if (newCount >= 41 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 16:
                // ゲーム開始から45秒後、星表示
                if (newCount >= 45 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 6;
                    star1StartRanks.value = 7;
                    star1Visibility.value = 'visible';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 17:
                // ゲーム開始から48秒後、星非表示
                if (newCount >= 48 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 18:
                // ゲーム開始から51秒後、星表示
                if (newCount >= 51 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 7;
                    star1StartRanks.value = 3;
                    star1Visibility.value = 'visible';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 19:
                // ゲーム開始から54秒後、星非表示
                if (newCount >= 54 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 20:
                // ゲーム開始から57秒後、星表示
                if (newCount >= 57 * commonSeconds) {
                    star1StartTime.value = newCount;
                    star1StartFiles.value = 8;
                    star1StartRanks.value = 9;
                    star1Visibility.value = 'visible';
                    appGameScheduleStep.value += 1;
                }
                break;
            case 21:
                // ゲーム開始から60秒後、星非表示
                if (newCount >= 59 * commonSeconds) {
                    star1Visibility.value = 'hidden';
                    appGameScheduleStep.value += 1;
                }
                break;
        }

        if (newCount >= appGameMaxCount.value) {
            // ゲーム停止
            stopwatch1Ref.value?.timerStop();  // タイマーをストップ
        }
    });

    // ++++++++++++++++++++++++
    // + オブジェクト　＞　盤 +
    // ++++++++++++++++++++++++

    const board1SquareWidth = ref<number>(32);  // マスの横幅（ピクセル）
    const board1SquareHeight = ref<number>(32); // マスの縦幅（ピクセル）
    const board1Files = ref<number>(16);        // 盤が横に何マスか
    const board1Ranks = ref<number>(12);        // 盤が縦に何マスか
    const board1Area = computed(()=>{           // 盤のマス数
        return board1Files.value * board1Ranks.value;
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
            top: `${star1Ranks.value * board1SquareHeight.value}px`,
            left: `${star1Files.value * board1SquareWidth.value}px`,
            width: `${board1SquareWidth.value}px`,
            height: `${board1SquareHeight.value}px`,
        };
    });

    // ++++++++++++++++++++++++++++
    // + オブジェクト　＞　自機１ +
    // ++++++++++++++++++++++++++++
    //
    // カメラのファインダー。点線の枠。
    //

    const player1Left = ref<number>(6 * board1SquareWidth.value);     // スプライトのX座標
    const player1Top = ref<number>(4 * board1SquareHeight.value);     // スプライトのY座標
    const player1FileNum = ref<number>(4);                            // スプライトの列数
    const player1RankNum = ref<number>(3);                            // スプライトの行数
    const player1Speed = ref<number>(4);                              // 移動速度
    const player1Input = <Record<string, boolean>>{                     // 入力
        // アルファベット順
        ArrowDown: false, ArrowLeft: false, ArrowUp: false, ArrowRight: false, Enter: false,
    };
    const player1AnimationWalkingFrames = 8;                        // 歩行フレーム数
    const player1MotionWait = ref<number>(0);   // 排他的モーション時間。
    const player1Motion = ref<Record<string, number>>({             // 入力
        xAxis: 0,   // 負なら左、正なら右
        yAxis: 0,   // 負なら上、正なら下
    });
    const player1ReloadTime = ref<number>(0);                       // 0 になるまで、入力を受け付けない
    const playerStyle = computed(() => {
        return {
            top: `${player1Top.value}px`,
            left: `${player1Left.value}px`,
            width: `${player1FileNum.value * board1SquareWidth.value}px`,
            height: `${player1RankNum.value * board1SquareHeight.value}px`,
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
        0: {top: 0 * board1SquareHeight.value, left: 0 * board1SquareWidth.value},
        1: {top: 0 * board1SquareHeight.value, left: 1 * board1SquareWidth.value},
        2: {top: 0 * board1SquareHeight.value, left: 2 * board1SquareWidth.value},
        3: {top: 0 * board1SquareHeight.value, left: 3 * board1SquareWidth.value},
        4: {top: 1 * board1SquareHeight.value, left: 0 * board1SquareWidth.value},
        5: {top: 1 * board1SquareHeight.value, left: 1 * board1SquareWidth.value},
        6: {top: 1 * board1SquareHeight.value, left: 2 * board1SquareWidth.value},
        7: {top: 1 * board1SquareHeight.value, left: 3 * board1SquareWidth.value},
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
            top: `${player1Top.value + player1RankNum.value * board1SquareHeight.value / 2 - board1SquareHeight.value / 2}px`,
            left: `${player1Left.value + player1FileNum.value * board1SquareWidth.value / 2 - board1SquareWidth.value / 2}px`,
        };
    });


    // ##########
    // # 開始時 #
    // ##########

    onMounted(() => {
        sfxLoad();
        gameInit();
        gameLoopStart();

        // キーボード操作の設定
        //
        //      window はブラウザーのオブジェクトなので、マウント後にアクセスします。
        //
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            // 上下キーの場合
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
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
     * ［ゲームスタート］または［ゲーム終了］ボタン押下時。（状態により切り替わります）
     */
    function onGameStartOrEndButtonPushed() : void {
        focusRemove();  // フォーカスを外す

        if(appGameIsPlaying.value) {
            // ゲームを終了させます
            gameInit();
            return;
        }

        stopwatch1Ref.value?.timerStart();  // タイマーをスタート

        appGameIsPlaying.value = !appGameIsPlaying.value;
    }


    /**
     * ［一時停止］または［再開］ボタン押下時。（状態により切り替わります）
     */
    function onGamePauseOrRestartButtonPushed() : void {
        focusRemove();  // フォーカスを外す

        if(appGameIsPause.value) {
            stopwatch1Ref.value?.timerStart();  // タイマーをスタート
        } else {
            stopwatch1Ref.value?.timerStop();  // タイマーをストップ
        }

        appGameIsPause.value = !appGameIsPause.value;
    }


    /**
     * ゲームの初期化
     */
    function gameInit() : void {
        stopwatch1Ref.value?.timerReset();  // タイマーをリセット

        appGameScore.value = 0;
        appGameIsPlaying.value = false;
        appGameIsPause.value = false;
        appGameScheduleStep.value = 0;

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

                if (player1Input.Enter) {
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
                if (player1Left.value < (board1Files.value - player1FileNum.value) * board1SquareWidth.value) {    // 境界チェック
                    player1Left.value += player1Speed.value;
                }
            } else if (player1Motion.value["xAxis"]==-1) {  // 左
                if (0 < player1Left.value) {    // 境界チェック
                    player1Left.value -= player1Speed.value;
                }
            }

            if (player1Motion.value["yAxis"]==-1) {  // 上
                if (0 < player1Top.value) {    // 境界チェック
                    player1Top.value -= player1Speed.value;
                }
            } else if (player1Motion.value["yAxis"]==1) {   // 下
                if (player1Top.value < (board1Ranks.value - player1RankNum.value) * board1SquareHeight.value) {    // 境界チェック
                    player1Top.value += player1Speed.value;
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
        const playerLeftFiles = player1Left.value / board1SquareWidth.value;
        const playerTopRanks = player1Top.value / board1SquareHeight.value;
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

        appGameScore.value += 100;
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
     * エンター・キー。
     */
    function onEnterButtonPressed() : void {
        player1Input.Enter = true;
    }


    function onEnterButtonReleased() : void {
        player1Input.Enter = false;
    }

</script>

<style scoped>
    /** カメラのファインダー */
    div.player {
        position: relative; border:dashed 4px #f0f0f0;
    }
</style>
