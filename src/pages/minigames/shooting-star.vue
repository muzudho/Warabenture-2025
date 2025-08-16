<template>
    <the-header/>

    <h3>シューティング・スター</h3>
    <section class="sec-3">

        <!-- ゲームの操作方法 -->
        <v-btn @click="misc.isShowingManual = !misc.isShowingManual">{{ misc.isShowingManual ? 'ゲームの遊び方・操作方法を閉じる' : 'ゲームの遊び方・操作方法を表示' }}</v-btn>
        <div v-if="misc.isShowingManual">
            <p>このゲームは、星を撮影する、という状況を見立てたゲームだぜ。</p>
            <br/>
            <p>操作で使うコントローラーは以下のものだぜ。</p>
            <ul>
                <li>マウスの左クリック: ボタンを押すのに使う</li>
                <li>キーボードの上下左右キー: カメラのファインダー（点線の長方形だ）を上下左右に移動</li>
                <li>キーボードのエンターキー: 撮影</li>
            </ul>
            <br/>
            <p>
                下に黒い画面が見えるように、ウィンドウを広げてくれだぜ。<br/>
                この黒い画面は宇宙な。<br/>
                ［ゲームスタート］ボタンを押すと、ゲームが始まるぜ。<br/>
                たまに星が流れてくる。<br/>
                60秒の間に、カメラのファインダーを上下左右に動かして、星をファインダーの中に入っているときに、エンターキーを押してくれだぜ。これで 100点 だぜ。<br/>
                <br/>
                飽きたら終わりだぜ。<br/>
            </p>
        </div><br/>
        <br/>

        <!-- ボタンを並べる -->
        <div>
            <v-btn @click="startGame()">{{ misc.startButtonText }}</v-btn>
            <v-btn @click="pauseGame()">{{ misc.pauseButtonText }}</v-btn>

            <!-- フォーカスを外すためのダミー・ボタンです -->
            <v-btn id="dammyButton">何もしないボタン</v-btn>
            <br/>

            <p style="font-size: x-large; margin-top: 8px; margin-bottom: 8px;">
            スコア： {{ misc.score }}　　残り時間: {{ Math.floor((misc.maxCount - count) / seconds) }} . {{ (misc.maxCount - count) % seconds }}
            </p>
        </div>

        <!-- デバッグに使いたいときは、 display: none; を消してください。 -->
        <stopwatch-dev
            ref="stopwatch1"
            v-on:countUp="(countNum) => { count = countNum; }"
            style="display: none;" />

        <!-- ゲーム画面領域（宇宙） -->
        <div style="position:relative; left: 0; top: 0; width:512px; height:384px; background-color: #303030;">
            <!--
                グリッド
                NOTE: ループカウンターは 1 から始まるので、1～9の9個のセルを作成。
            -->
            <div v-for="i in boardArea" :key="i"
                :style="`position:absolute; top: ${Math.floor((i - 1) / board.cols) * board.cellHeight}px; left: ${((i - 1) % board.cols) * board.cellWidth}px; width:${board.cellWidth}px; height:${board.cellHeight}px; border: solid 1px gray;`"></div>

            <!-- 星 -->
            <Tile
                :srcLeft="0"
                :srcTop="0"
                :srcWidth="board.cellWidth"
                :srcHeight="board.cellHeight"
                tilemapUrl="/img/making/sprite-objects-001.png"
                :style="starStyle"
                style="position:absolute;" /><br/>

            <!-- カメラのファインダー（点線の枠） -->
            <div
                class="finder"
                :style="finderStyle"
                style="position:absolute;" ></div>

            <!-- リロードのカウントダウン（パイみたいなやつ） -->
            <Tile
                :srcLeft="reloadTimerTileLeft"
                :srcTop="reloadTimerTileTop"
                :srcWidth="board.cellWidth"
                :srcHeight="board.cellHeight"
                tilemapUrl="/img/making/202508__warabenture__16--2357-8counts-red.png"
                :style="reloadPieStyle"
                style="position:absolute;" /><br/>
                
        </div>

        <!-- デバッグ用 -->
        <!--
            <p>スケジュール・ステップ: {{ misc.scheduleStep }}</p>
            <p>星　行： {{ star1Rows }}</p>
            <p>星　列： {{ star1Cols }}</p>
            <p>リロード・タイム: {{ finder1.reloadTime }}</p>
            <br/>
            <p>元画像のタイルマップを表示：</p>
            <v-img src="/img/making/sprite-objects-001.png" style="width:128px; height:128px; border: dashed 4px gray;"/><br/>
            <v-img src="/img/making/202508__warabenture__16--2357-8counts-red.png" style="width:128px; height:64px; border: dashed 4px gray;"/><br/>
            ：ここまで。
        -->
    </section>

    <the-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, reactive, ref, watch } from 'vue';

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import StopwatchDev from '../../components/StopwatchDev.vue';
    import TheFooter from './the-footer.vue';
    import TheHeader from './the-header.vue';
    import Tile from '../../components/Tile.vue';


    // ##########
    // # 効果音 #
    // ##########

    const volume = 0.3; // 音量
    let sfxDenied: HTMLAudioElement;            // 拒否音
    let sfxCameraShutter: HTMLAudioElement;     // カメラで撮影したときの効果音
    let sfxMiss: HTMLAudioElement;              // ミス音
    const isSfxDeniedPlaying = ref<boolean>(false);       // ブザー音の再生状態
    const isSfxCameraShutterPlaying = ref<boolean>(false); // カメラのシャッター音の再生状態
    const isSfxMissPlaying = ref<boolean>(false);         // ミス音の再生状態

    /**
     * 効果音をロードする（jsfxrで作った効果音）
     */
    function loadSfx() : void {
        sfxDenied = new Audio('/wav/202508__sfx__17--0200-denied.wav'); // 拒否音
        sfxDenied.volume = volume;
        sfxDenied.addEventListener('play', () => { isSfxDeniedPlaying.value = true })
        sfxDenied.addEventListener('pause', () => { isSfxDeniedPlaying.value = false })
        sfxDenied.addEventListener('ended', () => { isSfxDeniedPlaying.value = false })

        sfxCameraShutter = new Audio('/wav/202508__sfx__16--2117-cameraShutter.wav'); // カメラのシャッター音
        sfxCameraShutter.volume = volume;
        sfxCameraShutter.addEventListener('play', () => { isSfxCameraShutterPlaying.value = true })
        sfxCameraShutter.addEventListener('pause', () => { isSfxCameraShutterPlaying.value = false })
        sfxCameraShutter.addEventListener('ended', () => { isSfxCameraShutterPlaying.value = false })

        sfxMiss = new Audio('/wav/202508__sfx__16--2146-miss.wav'); // ミス音
        sfxMiss.volume = volume;
        sfxMiss.addEventListener('play', () => { isSfxMissPlaying.value = true })
        sfxMiss.addEventListener('pause', () => { isSfxMissPlaying.value = false })
        sfxMiss.addEventListener('ended', () => { isSfxMissPlaying.value = false })
    }

    // ##############
    // # 共有データ #
    // ##############

    // ++++++
    // + 盤 +
    // ++++++

    // 盤データ
    const board = reactive({
        cellWidth: 32,
        cellHeight: 32,
        cols: 16,
        rows: 12,
    });
    const boardArea = board.cols * board.rows; // 盤のセル数

    // 時データ
    const seconds = 60; // 1秒は60フレーム

    // ++++++++++++++
    // + カウンター +
    // ++++++++++++++

    const stopwatch1 = ref<InstanceType<typeof StopwatchDev> | null>(null); // StopwatchDevのインスタンス

    const count = ref<number>(0);   // カウントの初期値
    watch(count, (newCount) => {
        // カウントが変わったら、何か処理をしたい。

        // ++++++++++++++++
        // + スケジュール +
        // ++++++++++++++++

        switch (misc.scheduleStep) {
            case 0:
                // ゲーム開始から1秒後、星表示
                if (newCount >= 1 * seconds) {
                    star1.startCount = newCount;
                    star1.startCols = 5;
                    star1.startRows = 3;
                    star1.visibility = 'visible';
                    misc.scheduleStep += 1;                    
                }
                break;
            case 1:
                // ゲーム開始から3秒後、星非表示
                if (newCount >= 3 * seconds) {
                    star1.visibility = 'hidden';
                    misc.scheduleStep += 1;
                }
                break;
            case 2:
                // ゲーム開始から4秒後、星表示
                if (newCount >= 4 * seconds) {
                    star1.startCount = newCount;
                    star1.startCols = 9;
                    star1.startRows = 9;
                    star1.visibility = 'visible';
                    misc.scheduleStep += 1;
                }
                break;
            case 3:
                // ゲーム開始から6秒後、星非表示
                if (newCount >= 6 * seconds) {
                    star1.visibility = 'hidden';
                    misc.scheduleStep += 1;
                }
                break;
            case 4:
                // ゲーム開始から8秒後、星表示
                if (newCount >= 8 * seconds) {
                    star1.startCount = newCount;
                    star1.startCols = 0;
                    star1.startRows = 8;
                    star1.visibility = 'visible';
                    misc.scheduleStep += 1;
                }
                break;
            case 5:
                // ゲーム開始から10秒後、星非表示
                if (newCount >= 10 * seconds) {
                    star1.visibility = 'hidden';
                    misc.scheduleStep += 1;
                }
                break;
            case 6:
                // ゲーム開始から14秒後、星表示
                if (newCount >= 14 * seconds) {
                    star1.startCount = newCount;
                    star1.startCols = 12;
                    star1.startRows = 5;
                    star1.visibility = 'visible';
                    misc.scheduleStep += 1;
                }
                break;
            case 7:
                // ゲーム開始から15秒後、星非表示
                if (newCount >= 15 * seconds) {
                    star1.visibility = 'hidden';
                    misc.scheduleStep += 1;
                }
                break;
            case 8:
                // ゲーム開始から19秒後、星表示
                if (newCount >= 19 * seconds) {
                    star1.startCount = newCount;
                    star1.startCols = 3;
                    star1.startRows = 3;
                    star1.visibility = 'visible';
                    misc.scheduleStep += 1;
                }
                break;
            case 9:
                // ゲーム開始から21秒後、星非表示
                if (newCount >= 21 * seconds) {
                    star1.visibility = 'hidden';
                    misc.scheduleStep += 1;
                }
                break;
            case 10:
                // ゲーム開始から27秒後、星表示
                if (newCount >= 27 * seconds) {
                    star1.startCount = newCount;
                    star1.startCols = 6;
                    star1.startRows = 11;
                    star1.visibility = 'visible';
                    misc.scheduleStep += 1;
                }
                break;
            case 11:
                // ゲーム開始から29秒後、星非表示
                if (newCount >= 29 * seconds) {
                    star1.visibility = 'hidden';
                    misc.scheduleStep += 1;
                }
                break;
            case 12:
                // ゲーム開始から33秒後、星表示
                if (newCount >= 33 * seconds) {
                    star1.startCount = newCount;
                    star1.startCols = 4;
                    star1.startRows = 6;
                    star1.visibility = 'visible';
                    misc.scheduleStep += 1;
                }
                break;
            case 13:
                // ゲーム開始から36秒後、星非表示
                if (newCount >= 36 * seconds) {
                    star1.visibility = 'hidden';
                    misc.scheduleStep += 1;
                }
                break;
            case 14:
                // ゲーム開始から39秒後、星表示
                if (newCount >= 39 * seconds) {
                    star1.startCount = newCount;
                    star1.startCols = 5;
                    star1.startRows = 0;
                    star1.visibility = 'visible';
                    misc.scheduleStep += 1;
                }
                break;
            case 15:
                // ゲーム開始から41秒後、星非表示
                if (newCount >= 41 * seconds) {
                    star1.visibility = 'hidden';
                    misc.scheduleStep += 1;
                }
                break;
            case 16:
                // ゲーム開始から45秒後、星表示
                if (newCount >= 45 * seconds) {
                    star1.startCount = newCount;
                    star1.startCols = 6;
                    star1.startRows = 7;
                    star1.visibility = 'visible';
                    misc.scheduleStep += 1;
                }
                break;
            case 17:
                // ゲーム開始から48秒後、星非表示
                if (newCount >= 48 * seconds) {
                    star1.visibility = 'hidden';
                    misc.scheduleStep += 1;
                }
                break;
            case 18:
                // ゲーム開始から51秒後、星表示
                if (newCount >= 51 * seconds) {
                    star1.startCount = newCount;
                    star1.startCols = 7;
                    star1.startRows = 3;
                    star1.visibility = 'visible';
                    misc.scheduleStep += 1;
                }
                break;
            case 19:
                // ゲーム開始から54秒後、星非表示
                if (newCount >= 54 * seconds) {
                    star1.visibility = 'hidden';
                    misc.scheduleStep += 1;
                }
                break;
            case 20:
                // ゲーム開始から57秒後、星表示
                if (newCount >= 57 * seconds) {
                    star1.startCount = newCount;
                    star1.startCols = 8;
                    star1.startRows = 9;
                    star1.visibility = 'visible';
                    misc.scheduleStep += 1;
                }
                break;
            case 21:
                // ゲーム開始から60秒後、星非表示
                if (newCount >= 59 * seconds) {
                    star1.visibility = 'hidden';
                    misc.scheduleStep += 1;
                }
                break;
        }

        if (newCount >= misc.maxCount) {
            // ゲーム停止
            stopwatch1.value?.stopTimer();  // タイマーをストップ
        }
    });


    // ++++++++++++++++++++++++
    // + オブジェクト１：　星 +
    // ++++++++++++++++++++++++

    const star1 = reactive({
        startCols : 0,  // 出現位置
        startRows : 0,
        startCount : 0,
        visibility: 'hidden' as 'hidden' | 'visible',
    });
    const star1Cols = computed(()=>{
        return star1.startCols + Math.floor((count.value - star1.startCount) / 20);
    });
    const star1Rows = computed(()=>{
        return star1.startRows;
    });

    // ++++++++++++++++++++++++++++++++++++
    // + カメラのファインダー（点線の枠） +
    // ++++++++++++++++++++++++++++++++++++

    const finder1 = reactive({
        left: 6 * board.cellWidth,    // スプライトのX座標
        top: 4 * board.cellHeight,    // スプライトのY座標
        colNum: 4,              // スプライトの列数
        rowNum: 3,              // スプライトの行数
        speed: 4,               // 移動速度
        input: <Record<string, boolean>>{  // 入力
            // アルファベット順
            ArrowDown: false, ArrowLeft: false, ArrowUp: false, ArrowRight: false, Enter: false,
        },
        motionWait: 0,          // 入力キーごとに用意したい
        motion: ref<Record<string, number>>({  // 入力
            xAxis: 0,   // 負なら左、正なら右
            yAxis: 0,   // 負なら上、正なら下
        }),
        reloadTime: 0,  // 0 になるまで、入力を受け付けない
    });

    // モーション
    const moLeft = -1;  // モーション（motion）定数。左に移動する
    const moRight = 1;
    const moUp = -1;
    const moDown = 1;

    // ++++++++++++++++++++++
    // + リロード・タイマー +
    // ++++++++++++++++++++++

    const reloadTimerFrames = <Record<number, {top: number, left: number}>>{
        0: {top: 0 * board.cellHeight, left: 0 * board.cellWidth},
        1: {top: 0 * board.cellHeight, left: 1 * board.cellWidth},
        2: {top: 0 * board.cellHeight, left: 2 * board.cellWidth},
        3: {top: 0 * board.cellHeight, left: 3 * board.cellWidth},
        4: {top: 1 * board.cellHeight, left: 0 * board.cellWidth},
        5: {top: 1 * board.cellHeight, left: 1 * board.cellWidth},
        6: {top: 1 * board.cellHeight, left: 2 * board.cellWidth},
        7: {top: 1 * board.cellHeight, left: 3 * board.cellWidth},
    };
    const reloadTimeWeight = 3 * seconds;
    const reloadTimerIndex = computed<number>(()=>{
        // タイル１枚当たりの時間（フレーム）
        const frameNum = Object.keys(reloadTimerFrames).length;
        const unitTime = reloadTimeWeight / frameNum;
        let index = Math.floor(finder1.reloadTime / unitTime);
        if (index >= frameNum) {
            index = frameNum - 1;
        }
        return (frameNum - 1) - index;    // カウントダウン
    });
    const reloadTimerTileLeft = computed<number>(()=>{
        return reloadTimerFrames[reloadTimerIndex.value].left;
    });
    const reloadTimerTileTop = computed<number>(()=>{
        return reloadTimerFrames[reloadTimerIndex.value].top;
    });

    // ++++++++++
    // + その他 +
    // ++++++++++

    const misc = reactive({
        score: 0,
        isPlaying: false,
        isPause: false,
        isShowingManual: false,
        startButtonText: "読込中...",
        pauseButtonText: "読込中...",
        maxCount: 60 * seconds,     // ゲーム時間は１分。
        scheduleStep: 0,
    });

    // ##########
    // # 開始時 #
    // ##########

    onMounted(() => {
        loadSfx();
        initGame();
        startGameLoop();
        //startTimer();

        // キーボードイベント
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            // 上下キーの場合
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                // ブラウザーのデフォルトの上下スクロール動作をキャンセル
                e.preventDefault();
            }

            if (finder1.input.hasOwnProperty(e.key)) {
                finder1.input[e.key] = true;
            }
        });
        window.addEventListener('keyup', (e) => {
            if (finder1.input.hasOwnProperty(e.key)) {
                finder1.input[e.key] = false;
            }
        });


        // ################
        // # サブルーチン #
        // ################

        function startGameLoop() : void {
            const update = () => {
                // モーション・タイマー
                finder1.motionWait -= 1;

                if (finder1.reloadTime > 0) {
                    // リロード中
                    finder1.reloadTime -= 1;
                }

                if (finder1.motionWait==0) {
                    finder1.motion["xAxis"] = 0;    // クリアー
                    finder1.motion["yAxis"] = 0;
                }
                
                // ++++++++++++++++++++++++++++++
                // + キー入力をモーションに変換 +
                // ++++++++++++++++++++++++++++++
                if (finder1.motionWait<=0) {   // ウェイトが無ければ、入力を受け付ける。

                    if (finder1.input.Enter) {
                        cameraShot();   // 撮影
                    }

                    if (finder1.input.ArrowLeft) {
                        finder1.motion["xAxis"] = moLeft; // 左
                    }

                    if (finder1.input.ArrowRight) {
                        finder1.motion["xAxis"] = moRight;  // 右
                    }

                    if (finder1.input.ArrowUp) {
                        finder1.motion["yAxis"] = moUp;   // 上
                    }

                    if (finder1.input.ArrowDown) {
                        finder1.motion["yAxis"] = moDown;   // 下
                    }

                    if (finder1.motion["xAxis"]!=0 || finder1.motion["yAxis"]!=0) {
                        finder1.motionWait = 8;    // フレーム数を設定
                    }
                }

                // 移動処理
                // 斜め方向の場合、上下を優先する。
                if (finder1.motion["xAxis"]==1) {   // 右
                    if (finder1.left < (board.cols - finder1.colNum) * board.cellWidth) {    // 境界チェック
                        finder1.left += finder1.speed;
                    }
                } else if (finder1.motion["xAxis"]==-1) {  // 左
                    if (0 < finder1.left) {    // 境界チェック
                        finder1.left -= finder1.speed;
                    }
                }

                if (finder1.motion["yAxis"]==-1) {  // 上
                    if (0 < finder1.top) {    // 境界チェック
                        finder1.top -= finder1.speed;
                    }
                } else if (finder1.motion["yAxis"]==1) {   // 下
                    if (finder1.top < (board.rows - finder1.rowNum) * board.cellHeight) {    // 境界チェック
                        finder1.top += finder1.speed;
                    }
                }

                // 次のフレーム
                requestAnimationFrame(update);
            };

            // 初回呼び出し
            requestAnimationFrame(update);
        }

    });


    // ################
    // # サブルーチン #
    // ################

    function initGame() : void {
        stopwatch1.value?.resetTimer();  // タイマーをリセット

        misc.score = 0;
        misc.isPlaying = false;
        misc.startButtonText = "ゲームスタート"; // ボタンのテキストを更新
        misc.isPause = false;
        misc.pauseButtonText = "一時停止"; // ボタンのテキストを更新
        misc.scheduleStep = 0;

        star1.visibility = 'hidden';
    }

    function startGame() : void {
        document.getElementById("dammyButton")?.focus();    // フォーカスを外すため

        if(misc.isPlaying) {
            // ゲームを終了させます
            initGame();
            return;
        }

        stopwatch1.value?.startTimer();  // タイマーをスタート

        misc.startButtonText = "ゲーム終了"; // ボタンのテキストを更新
        misc.isPlaying = !misc.isPlaying;
    }

    function pauseGame() : void {
        document.getElementById("dammyButton")?.focus();    // フォーカスを外すため

        if(misc.isPause) {
            stopwatch1.value?.startTimer();  // タイマーをスタート
            misc.pauseButtonText = "一時停止"; // ボタンのテキストを更新
        } else {
            stopwatch1.value?.stopTimer();  // タイマーをストップ
            misc.pauseButtonText = "再開"; // ボタンのテキストを更新
        }

        misc.isPause = !misc.isPause;
    }

    /**
     * カメラショット処理
     */
    function cameraShot() : void {

        if (finder1.reloadTime > 0) {
            // リロード中
            if (!isSfxDeniedPlaying.value) {
                // ブザー音が停止中なら鳴らす
                sfxDenied.play();
            }

            // リロード中は何も起こりません。
            return;
        }

        // ファインダーの位置とサイズ
        const finderLeftCols = finder1.left / board.cellWidth;
        const finderTopCols = finder1.top / board.cellHeight;
        const finderRightEndCols = finderLeftCols + finder1.colNum;
        const finderBottomEndCols = finderTopCols + finder1.rowNum;

        // ファインダーの枠内に星を含むか？
        if (
            finderLeftCols <= star1Cols.value && star1Cols.value <= finderRightEndCols &&
            finderTopCols <= star1Rows.value && star1Rows.value <= finderBottomEndCols) {
            // 星を含んだ。
            niceShot();

        // 星を含まない
        } else {
            if (!isSfxMissPlaying.value) {
                // ミス音が停止中なら鳴らす
                sfxMiss.play();
            }
        }

        finder1.reloadTime = reloadTimeWeight;  // リロード時間を設定
    }


    function niceShot() : void {
        if (!isSfxCameraShutterPlaying.value) {
            // カメラのシャッター音が停止中なら鳴らす
            sfxCameraShutter.play();
        }

        misc.score += 100;
    }


    // ############
    // # スタイル #
    // ############

    const starStyle = computed(() => ({
        visibility: star1.visibility,
        top: `${star1Rows.value * board.cellHeight}px`,
        left: `${star1Cols.value * board.cellWidth}px`,
        width: `${board.cellWidth}px`,
        height: `${board.cellHeight}px`,
    }));
    const finderStyle = computed(() => ({
        top: `${finder1.top}px`,
        left: `${finder1.left}px`,
        width: `${finder1.colNum * board.cellWidth}px`,
        height: `${finder1.rowNum * board.cellHeight}px`,
        border: `dashed 4px ${finder1.reloadTime > 0 ? '#d85050' : '#f0f0f0'}`, // リロード中は赤い枠
    }));
    const reloadPieStyle = computed(() => ({
        visibility: finder1.reloadTime > 0 ? 'visible' : 'hidden',
        top: `${finder1.top + finder1.rowNum * board.cellHeight / 2 - board.cellHeight / 2}px`,
        left: `${finder1.left + finder1.colNum * board.cellWidth / 2 - board.cellWidth / 2}px`,
    }));

</script>

<style scoped>
    div.finder {
        position: relative; border:dashed 4px #f0f0f0;
    }
</style>
