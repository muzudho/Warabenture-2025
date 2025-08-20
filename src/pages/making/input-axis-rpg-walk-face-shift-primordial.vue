<template>

    <h4><span class="parent-header">ＲＰＧの歩行グラフィック　＞　</span>数字柄の原始的シフト</h4>
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
            <TileAnimation
                :frames="player1Frames"
                tilemapUrl="/img/making/202508__warabenture__15-1612-kifuwarabe-o1o0.png"
                :slow="player1AnimationSlow"
                :time="stopwatch1Count"
                class="cursor"
                :style="player1Style"
                style="image-rendering: pixelated;" /><br/>
            </div>

        <p>👆 タイルは動いていないぜ（＾▽＾）！</p>
        <p>だから、数字がタイルの上を入れ替わっている（＝シフトしている）ぜ（＾▽＾）！</p>
    </section>

    <br/>
    <h4><span class="parent-header-lights-out">ＲＰＧの歩行グラフィック　＞　</span><span class="parent-header">数字柄の原始的シフト　＞　</span>ソースコード</h4>
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
    const commonSpriteMotionLeft = -1;  // モーション（motion）定数。左に移動する
    const commonSpriteMotionRight = 1;
    const commonSpriteMotionUp = -1;
    const commonSpriteMotionDown = 1;


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
    const board1FileNum = 5;
    const board1RankNum = 5;
    const board1Area = computed(()=> {  // 盤のマス数
        return board1FileNum * board1RankNum;
    });
    const board1Style = computed<CompatibleStyleValue>(()=>{ // ボードとマスクを含んでいる領域のスタイル
        return {
            position: 'relative',
            left: "0",
            top: "0",
            width: `${commonZoom * board1FileNum * board1SquareWidth}px`,
            height: `${commonZoom * board1RankNum * board1SquareHeight}px`,
        };
    });
    const getSquareStyle = computed<
        (i:number)=>CompatibleStyleValue
    >(() => {
        return (i:number)=>{
            // プレイヤーが初期位置にいる場合の、マスの位置。
            const homeLeft = (i % board1FileNum) * board1SquareWidth;
            const homeTop = Math.floor(i / board1RankNum) * board1SquareHeight;

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

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　盤コンテンツ +
    // ++++++++++++++++++++++++**++++++++
    //
    // 盤上に表示されるもの。
    //

    const contents1FileNum = board1FileNum;       // 列数
    const contents1RankNum = board1RankNum;       // 行数

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

    const contents1OriginFile = ref<number>(0);    // 盤コンテンツの左上隅のタイルは、盤タイルの左から何番目か。
    const contents1OriginRank = ref<number>(0);    // 盤コンテンツの左上隅のタイルは、盤タイルの上から何番目か。
    const contents1Data = ref<string[]>([
        "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",
    ]);
    const getFaceNumber = computed(() => {
        return (tileIndex: number)=>{
            let [tileFile, tileRank] = tileIndexToTileFileRank(tileIndex);

            // タイル上のインデックスを、コンテンツ上のインデックスへ変換：
            const contentsFile = tileFile - contents1OriginFile.value; // プレイヤーが右へ１マス移動したら、盤コンテンツは全行が左へ１つ移動する。
            const contentsRank = tileRank - contents1OriginRank.value; // プレイヤーが下へ１マス移動したら、盤コンテンツは全行が上へ１つ移動する。

            // コンテンツのサイズの範囲外になるところには、"-" でも表示しておく
            if (contentsFile < 0 || contents1FileNum <= contentsFile || contentsRank < 0 || contents1RankNum <= contentsRank) {
                return "-";
            }
            
            // コンテンツ上の位置が示すデータを返す
            const contentsIndex = contentsFileRankToContentsIndex(contentsFile, contentsRank);
            return  contents1Data.value[contentsIndex];
        };
    });    

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　プレイヤー +
    // ++++++++++++++++++++++++++++++++

    const player1Left: number = 2 * board1SquareWidth;      // スプライトのX座標
    const player1Top: number = 2 * board1SquareHeight;      // スプライトのY座標
    const player1Input = <Record<string, boolean>>{         // 入力
        " ": false, ArrowUp: false, ArrowRight: false, ArrowDown: false, ArrowLeft: false
    };
    const player1AnimationSlow = ref<number>(8);    // アニメーションのスローモーションの倍率の初期値
    const player1AnimationWalkingFrames = 16;       // 歩行フレーム数
    const player1Style = computed(() => ({
        top: `${player1Top}px`,
        left: `${player1Left}px`,
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
        xAxis: 0,   // 負なら左、正なら右
        yAxis: 0,   // 負なら上、正なら下
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
            player1MotionWait.value -= 1;

            if (player1MotionWait.value==0) {
                player1Motion.value["xAxis"] = 0;    // クリアー
                player1Motion.value["yAxis"] = 0;
            }
            
            // 入力（上下左右への移動）をモーションに変換
            if (player1MotionWait.value<=0) {   // ウェイトが無ければ、入力を受け付ける。

                // 位置のリセット
                if (player1Input[" "]) {
                    contents1OriginFile.value = 0;
                    contents1OriginRank.value = 0;
                }

                // 移動
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

                // 移動処理
                // 斜め方向の場合、上下を優先する。
                if (player1Motion.value["xAxis"]==1) {   // 右
                    player1Frames.value = player1SourceFrames["right"]
                    contents1OriginFile.value -= 1;   // コンテンツの方をスクロールさせる
                } else if (player1Motion.value["xAxis"]==-1) {  // 左
                    player1Frames.value = player1SourceFrames["left"]
                    contents1OriginFile.value += 1;
                }

                if (player1Motion.value["yAxis"]==-1) {  // 上
                    player1Frames.value = player1SourceFrames["up"]
                    contents1OriginRank.value += 1;
                } else if (player1Motion.value["yAxis"]==1) {   // 下
                    player1Frames.value = player1SourceFrames["down"]
                    contents1OriginRank.value -= 1;
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
