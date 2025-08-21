<template>
    <the-header/>

    <!-- ボタンの押しっぱなし機能 -->
    <button-repeat ref="buttonRepeat1Ref"/>

    <h3>シューティング・スター</h3>
    <section class="sec-3">

        <!-- ゲームの操作方法 -->
        <v-btn @click="app.manual.isShowing = !app.manual.isShowing">{{ app.manual.isShowing ? 'ゲームの遊び方・操作方法を閉じる' : 'ゲームの遊び方・操作方法を表示' }}</v-btn>
        <section class="sec-1" v-if="app.manual.isShowing">
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
                    @touchstart.prevent="buttonRepeat1Ref?.start($event, onGameStartOrEndButtonPushed);"
                    @touchend="buttonRepeat1Ref?.justStop();"
                    @touchcancel="buttonRepeat1Ref?.justStop();"
                    @touchleave="buttonRepeat1Ref?.justStop();"
                    @mousedown.prevent="buttonRepeat1Ref?.handleMouseDown($event, onGameStartOrEndButtonPushed)"
                    @mouseup="buttonRepeat1Ref?.justStop();"
                    @mouseleave="buttonRepeat1Ref?.justStop();"
                >{{ app.game.isPlaying ? "ゲーム終了" : "ゲームスタート" }}</v-btn>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="buttonRepeat1Ref?.start($event, onGamePauseOrRestartButtonPushed);"
                    @touchend="buttonRepeat1Ref?.justStop();"
                    @touchcancel="buttonRepeat1Ref?.justStop();"
                    @touchleave="buttonRepeat1Ref?.justStop();"
                    @mousedown.prevent="buttonRepeat1Ref?.handleMouseDown($event, onGamePauseOrRestartButtonPushed)"
                    @mouseup="buttonRepeat1Ref?.justStop();"
                    @mouseleave="buttonRepeat1Ref?.justStop();"
                >{{ app.game.isPause ? "再開" : "一時停止" }}</v-btn>                
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
                　…　カメラのファインダー（点線の長方形だ）を上下左右に移動
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
                    @touchstart.prevent="buttonRepeat1Ref?.start($event, onEnterButtonPressed);"
                    @touchend="buttonRepeat1Ref?.stop(onEnterButtonReleased);"
                    @touchcancel="buttonRepeat1Ref?.stop(onEnterButtonReleased);"
                    @touchleave="buttonRepeat1Ref?.stop(onEnterButtonReleased);"
                    @mousedown.prevent="buttonRepeat1Ref?.handleMouseDown($event, onEnterButtonPressed)"
                    @mouseup="buttonRepeat1Ref?.stop(onEnterButtonReleased);"
                    @mouseleave="buttonRepeat1Ref?.stop(onEnterButtonReleased);"
                >（エンター）</v-btn>
                　…　撮影。
            </li>
        </ul>
        <br/>
        <div>
            <p style="font-size: x-large; margin-top: 8px; margin-bottom: 8px;">
            スコア： {{ app.game.score }}　　残り時間: {{ Math.floor((app.game.maxCount - stopwatch1.count) / common.seconds) }} . {{ (app.game.maxCount - stopwatch1.count) % common.seconds }}
            </p>
        </div>

        <!-- ストップウォッチ。デバッグに使いたいときは、 display: none; を消してください。 -->
        <stopwatch
            ref="stopwatch1Ref"
            v-on:countUp="(countNum) => { stopwatch1.count = countNum; }"
            style="display: none;" />

        <!-- ゲーム画面領域（宇宙） -->
        <div style="position:relative; left: 0; top: 0; width:512px; height:384px; background-color: #303030;">
            <!--
                グリッド
                NOTE: ループカウンターは 1 から始まるので、1～9の9個のセルを作成。
            -->
            <div v-for="i in board1Area" :key="i"
                :style="`position:absolute; top: ${Math.floor((i - 1) / board1.files) * board1.squareHeight}px; left: ${((i - 1) % board1.files) * board1.squareWidth}px; width:${board1.squareWidth}px; height:${board1.squareHeight}px; border: solid 1px gray;`"></div>

            <!-- 星 -->
            <Tile
                :srcLeft="0"
                :srcTop="0"
                :srcWidth="board1.squareWidth"
                :srcHeight="board1.squareHeight"
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
                :srcWidth="board1.squareWidth"
                :srcHeight="board1.squareHeight"
                tilemapUrl="/img/making/202508__warabenture__16-2357-8counts-red.png"
                :style="reloadPieStyle"
                style="position:absolute;" /><br/>
                
        </div>

        <!-- デバッグ用 -->
        <!--
            <p>スケジュール・ステップ: {{ misc.scheduleStep }}</p>
            <p>星　行： {{ star1Ranks }}</p>
            <p>星　列： {{ star1Files }}</p>
            <p>リロード・タイム: {{ player1.reloadTime }}</p>
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

    console.log("シューティングスター　（上級者向けソースコード版）")

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue';
    import type { Ref } from 'vue'
    import { VBtn } from 'vuetify/components';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    // from の階層が上の順、アルファベット順
    import ButtonRepeat from '../../components/ButtonRepeat.vue';
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

    const common = <{
        seconds: number,    // 1秒は60フレーム
        spriteMotion : {    // モーション（motion）定数
            left: number,   // カメラのファインダーが左に移動する
            right: number,
            up : number,
            down: number,
        },
    }>{
        seconds: 60,
        spriteMotion : {
            left: -1,       // モーション（motion）定数。カメラのファインダーが左に移動する
            right: 1,
            up: -1,
            down: 1,
        },
    };


    // ############################
    // # アプリケーション・データ #
    // ############################
    //
    // 今動いているアプリケーションの状態を記録しているデータ。特に可変のもの。
    //

    const app = reactive<{
        manual : {                      // ゲームの操作方法・遊び方説明書
            isShowing: boolean,         // 説明書を表示中
        },
        game : {                        // ゲーム
            score: number,              // 得点
            isPlaying: boolean,         // ゲーム中
            isPause: boolean,           // ゲームは一時停止中
            maxCount: number,           // ゲーム時間は１分
            scheduleStep: number,       // 星の出現スケジュール
        },
    }>({
        manual : {
            isShowing: false,
        },
        game : {
            score: 0,
            isPlaying: false,
            isPause: false,
            maxCount: 60 * common.seconds,
            scheduleStep: 0,
        },
    });


    // ################
    // # 読込リソース #
    // ################

    // ++++++++++++++++++++++++++++
    // + 読込リソース　＞　効果音 +
    // ++++++++++++++++++++++++++++

    const sfxConfig = reactive<{
        volume: number,                    // 音量
    }>({
        volume: 0.3,
    });
    const sfx = <{                  // リアクティブにする必要はないことから、リアクティブにはしません。
        denied: {                           // 拒否音
            audio: HTMLAudioElement | null, // オーディオ・オブジェクト
            isPlaying: boolean,             // 再生状態
        },
        cameraShutter: {                    // カメラで撮影したときの効果音
            audio: HTMLAudioElement | null,
            isPlaying: boolean,
        },
        miss: {                             // ミス音
            audio: HTMLAudioElement | null,
            isPlaying: boolean,
        },
    }>{
        denied: {
            audio: null,
            isPlaying: false,
        },
        cameraShutter: {
            audio: null,
            isPlaying: false,
        },
        miss: {
            audio: null,
            isPlaying: false,
        },
    };

    /**
     * 効果音をロードする（jsfxrで作った効果音）
     */
    function sfxLoad() : void {
        sfx.denied.audio = new Audio('/wav/202508__sfx__17-0200-denied.wav'); // 拒否音
        sfx.denied.audio.volume = sfxConfig.volume;
        sfx.denied.audio.addEventListener('play', () => { sfx.denied.isPlaying = true })
        sfx.denied.audio.addEventListener('pause', () => { sfx.denied.isPlaying = false })
        sfx.denied.audio.addEventListener('ended', () => { sfx.denied.isPlaying = false })

        sfx.cameraShutter.audio = new Audio('/wav/202508__sfx__16-2117-cameraShutter.wav'); // カメラのシャッター音
        sfx.cameraShutter.audio.volume = sfxConfig.volume;
        sfx.cameraShutter.audio.addEventListener('play', () => { sfx.cameraShutter.isPlaying = true })
        sfx.cameraShutter.audio.addEventListener('pause', () => { sfx.cameraShutter.isPlaying = false })
        sfx.cameraShutter.audio.addEventListener('ended', () => { sfx.cameraShutter.isPlaying = false })

        sfx.miss.audio = new Audio('/wav/202508__sfx__16-2146-miss.wav'); // ミス音
        sfx.miss.audio.volume = sfxConfig.volume;
        sfx.miss.audio.addEventListener('play', () => { sfx.miss.isPlaying = true })
        sfx.miss.audio.addEventListener('pause', () => { sfx.miss.isPlaying = false })
        sfx.miss.audio.addEventListener('ended', () => { sfx.miss.isPlaying = false })
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

    const buttonRepeat1Ref = ref<InstanceType<typeof ButtonRepeat> | null>(null);

    // ++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ストップウォッチ +
    // ++++++++++++++++++++++++++++++++++++++

    const stopwatch1Ref = ref<InstanceType<typeof Stopwatch> | null>(null);     // <stopwatch-dev> のインスタンス
    const stopwatch1 = reactive<{
        compo: Ref<InstanceType<typeof Stopwatch> | null>,
        count: number,                                          // カウント
    }>({
        compo: stopwatch1Ref,
        count: 0,
    });
    watch(()=>stopwatch1.count, (newCount) => {
        // カウントが変わったら、何か処理をしたい。

        // --------------------------------------------------------
        // - オブジェクト　＞　ストップウォッチ　＞　スケジュール -
        // --------------------------------------------------------

        switch (app.game.scheduleStep) {
            case 0:
                // ゲーム開始から1秒後、星表示
                if (newCount >= 1 * common.seconds) {
                    star1.startTime = newCount;
                    star1.startFiles = 5;
                    star1.startRanks = 3;
                    star1.visibility = 'visible';
                    app.game.scheduleStep += 1;                    
                }
                break;
            case 1:
                // ゲーム開始から3秒後、星非表示
                if (newCount >= 3 * common.seconds) {
                    star1.visibility = 'hidden';
                    app.game.scheduleStep += 1;
                }
                break;
            case 2:
                // ゲーム開始から4秒後、星表示
                if (newCount >= 4 * common.seconds) {
                    star1.startTime = newCount;
                    star1.startFiles = 9;
                    star1.startRanks = 9;
                    star1.visibility = 'visible';
                    app.game.scheduleStep += 1;
                }
                break;
            case 3:
                // ゲーム開始から6秒後、星非表示
                if (newCount >= 6 * common.seconds) {
                    star1.visibility = 'hidden';
                    app.game.scheduleStep += 1;
                }
                break;
            case 4:
                // ゲーム開始から8秒後、星表示
                if (newCount >= 8 * common.seconds) {
                    star1.startTime = newCount;
                    star1.startFiles = 0;
                    star1.startRanks = 8;
                    star1.visibility = 'visible';
                    app.game.scheduleStep += 1;
                }
                break;
            case 5:
                // ゲーム開始から10秒後、星非表示
                if (newCount >= 10 * common.seconds) {
                    star1.visibility = 'hidden';
                    app.game.scheduleStep += 1;
                }
                break;
            case 6:
                // ゲーム開始から14秒後、星表示
                if (newCount >= 14 * common.seconds) {
                    star1.startTime = newCount;
                    star1.startFiles = 12;
                    star1.startRanks = 5;
                    star1.visibility = 'visible';
                    app.game.scheduleStep += 1;
                }
                break;
            case 7:
                // ゲーム開始から15秒後、星非表示
                if (newCount >= 15 * common.seconds) {
                    star1.visibility = 'hidden';
                    app.game.scheduleStep += 1;
                }
                break;
            case 8:
                // ゲーム開始から19秒後、星表示
                if (newCount >= 19 * common.seconds) {
                    star1.startTime = newCount;
                    star1.startFiles = 3;
                    star1.startRanks = 3;
                    star1.visibility = 'visible';
                    app.game.scheduleStep += 1;
                }
                break;
            case 9:
                // ゲーム開始から21秒後、星非表示
                if (newCount >= 21 * common.seconds) {
                    star1.visibility = 'hidden';
                    app.game.scheduleStep += 1;
                }
                break;
            case 10:
                // ゲーム開始から27秒後、星表示
                if (newCount >= 27 * common.seconds) {
                    star1.startTime = newCount;
                    star1.startFiles = 6;
                    star1.startRanks = 11;
                    star1.visibility = 'visible';
                    app.game.scheduleStep += 1;
                }
                break;
            case 11:
                // ゲーム開始から29秒後、星非表示
                if (newCount >= 29 * common.seconds) {
                    star1.visibility = 'hidden';
                    app.game.scheduleStep += 1;
                }
                break;
            case 12:
                // ゲーム開始から33秒後、星表示
                if (newCount >= 33 * common.seconds) {
                    star1.startTime = newCount;
                    star1.startFiles = 4;
                    star1.startRanks = 6;
                    star1.visibility = 'visible';
                    app.game.scheduleStep += 1;
                }
                break;
            case 13:
                // ゲーム開始から36秒後、星非表示
                if (newCount >= 36 * common.seconds) {
                    star1.visibility = 'hidden';
                    app.game.scheduleStep += 1;
                }
                break;
            case 14:
                // ゲーム開始から39秒後、星表示
                if (newCount >= 39 * common.seconds) {
                    star1.startTime = newCount;
                    star1.startFiles = 5;
                    star1.startRanks = 0;
                    star1.visibility = 'visible';
                    app.game.scheduleStep += 1;
                }
                break;
            case 15:
                // ゲーム開始から41秒後、星非表示
                if (newCount >= 41 * common.seconds) {
                    star1.visibility = 'hidden';
                    app.game.scheduleStep += 1;
                }
                break;
            case 16:
                // ゲーム開始から45秒後、星表示
                if (newCount >= 45 * common.seconds) {
                    star1.startTime = newCount;
                    star1.startFiles = 6;
                    star1.startRanks = 7;
                    star1.visibility = 'visible';
                    app.game.scheduleStep += 1;
                }
                break;
            case 17:
                // ゲーム開始から48秒後、星非表示
                if (newCount >= 48 * common.seconds) {
                    star1.visibility = 'hidden';
                    app.game.scheduleStep += 1;
                }
                break;
            case 18:
                // ゲーム開始から51秒後、星表示
                if (newCount >= 51 * common.seconds) {
                    star1.startTime = newCount;
                    star1.startFiles = 7;
                    star1.startRanks = 3;
                    star1.visibility = 'visible';
                    app.game.scheduleStep += 1;
                }
                break;
            case 19:
                // ゲーム開始から54秒後、星非表示
                if (newCount >= 54 * common.seconds) {
                    star1.visibility = 'hidden';
                    app.game.scheduleStep += 1;
                }
                break;
            case 20:
                // ゲーム開始から57秒後、星表示
                if (newCount >= 57 * common.seconds) {
                    star1.startTime = newCount;
                    star1.startFiles = 8;
                    star1.startRanks = 9;
                    star1.visibility = 'visible';
                    app.game.scheduleStep += 1;
                }
                break;
            case 21:
                // ゲーム開始から60秒後、星非表示
                if (newCount >= 59 * common.seconds) {
                    star1.visibility = 'hidden';
                    app.game.scheduleStep += 1;
                }
                break;
        }

        if (newCount >= app.game.maxCount) {
            // ゲーム停止
            stopwatch1.compo?.timerStop();  // タイマーをストップ
        }
    });

    // ++++++++++++++++++++++++
    // + オブジェクト　＞　盤 +
    // ++++++++++++++++++++++++

    const board1 = reactive({
        squareWidth: 32,        // マスの横幅（ピクセル）
        squareHeight: 32,       // マスの縦幅（ピクセル）
        files: 16,              // 盤が横に何マスか
        ranks: 12,              // 盤が縦に何マスか
    });
    const board1Area = computed(()=>{   // 盤のセル数
        return board1.files * board1.ranks;
    });

    // ++++++++++++++++++++++++
    // + オブジェクト　＞　星 +
    // ++++++++++++++++++++++++

    const star1 = reactive({
        startFiles : 0,          // 星の出現位置。盤の左から何セルか
        startRanks : 0,          // 星の出現位置。盤の上から何セルか
        startTime : 0,          // 星の出現count時間
        visibility: 'hidden' as 'hidden' | 'visible',   // 星の表示／非表示
    });
    const star1Files = computed(()=>{
        return star1.startFiles + Math.floor((stopwatch1.count - star1.startTime) / 20);
    });
    const star1Ranks = computed(()=>{
        return star1.startRanks;
    });
    const starStyle = computed(() => {
        return {
            visibility: star1.visibility,
            top: `${star1Ranks.value * board1.squareHeight}px`,
            left: `${star1Files.value * board1.squareWidth}px`,
            width: `${board1.squareWidth}px`,
            height: `${board1.squareHeight}px`,
        };
    });

    // ++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　カメラのファインダー +
    // ++++++++++++++++++++++++++++++++++++++++++
    //
    // 点線の枠
    //

    const player1 = reactive({
        left: 6 * board1.squareWidth,       // スプライトのX座標
        top: 4 * board1.squareHeight,       // スプライトのY座標
        fileNum: 4,                         // スプライトの列数
        rankNum: 3,                         // スプライトの行数
        speed: 4,                           // 移動速度
        input: <Record<string, boolean>>{   // 入力
            // アルファベット順
            ArrowDown: false, ArrowLeft: false, ArrowUp: false, ArrowRight: false, Enter: false,
        },
        motionWait: 0,                      // TODO: 入力キーごとにウェイトを用意したい
        motion: ref<Record<string, number>>({  // 入力
            xAxis: 0,   // 負なら左、正なら右
            yAxis: 0,   // 負なら上、正なら下
        }),
        reloadTime: 0,  // 0 になるまで、入力を受け付けない
    });
    const player1Conf = {
        animationWalkingFrames: 8,          // 歩行フレーム数
    };
    const playerStyle = computed(() => {
        return {
            top: `${player1.top}px`,
            left: `${player1.left}px`,
            width: `${player1.fileNum * board1.squareWidth}px`,
            height: `${player1.rankNum * board1.squareHeight}px`,
            border: `dashed 4px ${player1.reloadTime > 0 ? '#d85050' : '#f0f0f0'}`, // リロード中は赤い枠
        };
    });

    // ++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　リロード・パイ +
    // ++++++++++++++++++++++++++++++++++++
    //
    // 写真を撮った時にカメラのファインダーの中心で回ってるやつ。
    //

    const reloadPie1 = reactive<{
        frames: Record<number, {top: number, left: number}>,
        weight: number,
    }>({
        frames: {
            0: {top: 0 * board1.squareHeight, left: 0 * board1.squareWidth},
            1: {top: 0 * board1.squareHeight, left: 1 * board1.squareWidth},
            2: {top: 0 * board1.squareHeight, left: 2 * board1.squareWidth},
            3: {top: 0 * board1.squareHeight, left: 3 * board1.squareWidth},
            4: {top: 1 * board1.squareHeight, left: 0 * board1.squareWidth},
            5: {top: 1 * board1.squareHeight, left: 1 * board1.squareWidth},
            6: {top: 1 * board1.squareHeight, left: 2 * board1.squareWidth},
            7: {top: 1 * board1.squareHeight, left: 3 * board1.squareWidth},
        },
        weight: 3 * common.seconds,
    });
    const reloadPie1Index = computed<number>(()=>{
        // タイル１枚当たりの時間（フレーム）
        const frameNum = Object.keys(reloadPie1.frames).length;
        const unitTime = reloadPie1.weight / frameNum;
        let index = Math.floor(player1.reloadTime / unitTime);
        if (index >= frameNum) {
            index = frameNum - 1;
        }
        return (frameNum - 1) - index;    // カウントダウン
    });
    const reloadPie1TileLeft = computed<number>(()=>{
        return reloadPie1.frames[reloadPie1Index.value].left;
    });
    const reloadPie1TileTop = computed<number>(()=>{
        return reloadPie1.frames[reloadPie1Index.value].top;
    });
    const reloadPieStyle = computed(() => {
        return {
            visibility: player1.reloadTime > 0 ? 'visible' : 'hidden',
            top: `${player1.top + player1.rankNum * board1.squareHeight / 2 - board1.squareHeight / 2}px`,
            left: `${player1.left + player1.fileNum * board1.squareWidth / 2 - board1.squareWidth / 2}px`,
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

            if (player1.input.hasOwnProperty(e.key)) {
                player1.input[e.key] = true;
            }
        });
        window.addEventListener('keyup', (e) => {
            if (player1.input.hasOwnProperty(e.key)) {
                player1.input[e.key] = false;
            }
        });
    });


    onUnmounted(()=>{
        // 効果音のメモリ解放を真面目に行う場合
        if (sfx.denied.audio) {
            sfx.denied.audio.pause();
            sfx.denied.audio.src = '';
            sfx.denied.audio.load(); // バッファクリア
            // イベントリスナー解除（必要なら）
            // sfxDeniedAudio.removeEventListener('ended', handler);
        }

        if (sfx.cameraShutter.audio) {
            sfx.cameraShutter.audio.pause();
            sfx.cameraShutter.audio.src = '';
            sfx.cameraShutter.audio.load(); // バッファクリア
        }

        if (sfx.miss.audio) {
            sfx.miss.audio.pause();
            sfx.miss.audio.src = '';
            sfx.miss.audio.load(); // バッファクリア
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

        if(app.game.isPlaying) {    // ［ゲーム終了］ボタン
            // ゲームを終了させます
            gameInit();
            return;
        }

        stopwatch1.compo?.timerStart();  // タイマーをスタート

        app.game.isPlaying = !app.game.isPlaying;
    }


    /**
     * ［一時停止］または［再開］ボタン押下時。（状態により切り替わります）
     */
    function onGamePauseOrRestartButtonPushed() : void {
        focusRemove();  // フォーカスを外す

        if(app.game.isPause) {
            stopwatch1.compo?.timerStart();  // タイマーをスタート
        } else {
            stopwatch1.compo?.timerStop();  // タイマーをストップ
        }

        app.game.isPause = !app.game.isPause;
    }


    /**
     * ゲームの初期化
     */
    function gameInit() : void {
        stopwatch1.compo?.timerReset();  // タイマーをリセット

        app.game.score = 0;
        app.game.isPlaying = false;
        app.game.isPause = false;
        app.game.scheduleStep = 0;

        star1.visibility = 'hidden';
    }


    /**
     * ゲームのメインループ開始
     */
    function gameLoopStart() : void {
        const update = () => {
            // モーション・タイマー
            player1.motionWait -= 1;

            if (player1.reloadTime > 0) {
                // リロード中
                player1.reloadTime -= 1;
            }

            if (player1.motionWait==0) {
                player1.motion["xAxis"] = 0;    // クリアー
                player1.motion["yAxis"] = 0;
            }
            
            // ++++++++++++++++++++++++++++++
            // + キー入力をモーションに変換 +
            // ++++++++++++++++++++++++++++++
            if (player1.motionWait<=0) {   // ウェイトが無ければ、入力を受け付ける。

                if (player1.input.Enter) {
                    cameraShot();   // 撮影
                }

                if (player1.input.ArrowLeft) {
                    player1.motion["xAxis"] = common.spriteMotion.left; // 左
                }

                if (player1.input.ArrowRight) {
                    player1.motion["xAxis"] = common.spriteMotion.right;  // 右
                }

                if (player1.input.ArrowUp) {
                    player1.motion["yAxis"] = common.spriteMotion.up;   // 上
                }

                if (player1.input.ArrowDown) {
                    player1.motion["yAxis"] = common.spriteMotion.down;   // 下
                }

                if (player1.motion["xAxis"]!=0 || player1.motion["yAxis"]!=0) {
                    player1.motionWait = player1Conf.animationWalkingFrames;
                }
            }

            // 移動処理
            // 斜め方向の場合、上下を優先する。
            if (player1.motion["xAxis"]==1) {   // 右
                if (player1.left < (board1.files - player1.fileNum) * board1.squareWidth) {    // 境界チェック
                    player1.left += player1.speed;
                }
            } else if (player1.motion["xAxis"]==-1) {  // 左
                if (0 < player1.left) {    // 境界チェック
                    player1.left -= player1.speed;
                }
            }

            if (player1.motion["yAxis"]==-1) {  // 上
                if (0 < player1.top) {    // 境界チェック
                    player1.top -= player1.speed;
                }
            } else if (player1.motion["yAxis"]==1) {   // 下
                if (player1.top < (board1.ranks - player1.rankNum) * board1.squareHeight) {    // 境界チェック
                    player1.top += player1.speed;
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

        if (player1.reloadTime > 0) {
            // リロード中
            if (!sfx.denied.isPlaying) {
                // ブザー音が停止中なら鳴らす
                sfx.denied.audio?.play();
            }

            // リロード中は何も起こりません。
            return;
        }

        // ファインダーの位置とサイズ
        const playerLeftFiles = player1.left / board1.squareWidth;
        const playerTopRanks = player1.top / board1.squareHeight;
        const playerRightEndFiles = playerLeftFiles + player1.fileNum;
        const playerBottomEndRanks = playerTopRanks + player1.rankNum;

        // ファインダーの枠内に星を含むか？
        if (
            playerLeftFiles <= star1Files.value && star1Files.value <= playerRightEndFiles &&
            playerTopRanks <= star1Ranks.value && star1Ranks.value <= playerBottomEndRanks) {
            // 星を含んだ。
            niceShot();

        // 星を含まない
        } else {
            if (!sfx.miss.isPlaying) {
                // ミス音が停止中なら鳴らす
                sfx.miss.audio?.play();
            }
        }

        player1.reloadTime = reloadPie1.weight;  // リロード時間を設定
    }


    /**
     * カメラのファインダーの中に星を収めて撮ったとき。
     */
    function niceShot() : void {
        if (!sfx.cameraShutter.isPlaying) {
            // カメラのシャッター音が停止中なら鳴らす
            sfx.cameraShutter.audio?.play();
        }

        app.game.score += 100;
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
        player1.input.ArrowLeft = true;
    }


    function onLeftButtonReleased() : void {
        player1.input.ArrowLeft = false;
    }


    /**
     * 上。
     */
    function onUpButtonPressed() : void {
        player1.input.ArrowUp = true;
    }


    function onUpButtonReleased() : void {
        player1.input.ArrowUp = false;
    }


    /**
     * 右。
     */
    function onRightButtonPressed() : void {
        player1.input.ArrowRight = true;
    }


    function onRightButtonReleased() : void {
        player1.input.ArrowRight = false;
    }


    /**
     * 下。
     */
    function onDownButtonPressed() : void {
        player1.input.ArrowDown = true;
    }


    function onDownButtonReleased() : void {
        player1.input.ArrowDown = false;
    }


    /**
     * エンター・キー。
     */
    function onEnterButtonPressed() : void {
        player1.input.Enter = true;
    }


    function onEnterButtonReleased() : void {
        player1.input.Enter = false;
    }

</script>

<style scoped>
    /** カメラのファインダー */
    div.player {
        position: relative; border:dashed 4px #f0f0f0;
    }
</style>
