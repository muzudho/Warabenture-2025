<template>

    <h4><span class="parent-header">ＲＰＧの歩行グラフィック　＞　</span>背景的スクロール</h4>
    <section class="sec-4">
        <p>キーボード操作方法</p>
        <ul>
            <li><span class="code-key">↑</span><span class="code-key">↓</span><span class="code-key">←</span><span class="code-key">→</span>キー　…　上下左右に動かすぜ！</li>
        </ul>
        <br/>

        <div :style="board1MaskContainerStyle">

            <!--
                TODO: 背景タイル
                NOTE: ループカウンターは 1 から始まるので、1～9の9個のセルを作成。
            -->
            <Tile
                v-for="i in board1Area" :key="i"
                :style="getSquareStyle(i - 1)"
                :srcLeft="getFloorLeftBySquare(i - 1)"
                srcTop="0"
                :srcWidth="board1SquareWidth"
                :srcHeight="board1SquareHeight"
                tilemapUrl="/img/making/tilemap_floor.png" />

            <!-- プレイヤー１ -->
            <TileAnimation
                :frames="player1Frames"
                tilemapUrl="/img/making/202508__warabenture__15-1612-kifuwarabe-o1o0.png"
                :slow="player1AnimationSlow"
                :time="stopwatch1Count"
                class="cursor"
                :style="player1Style"
                style="image-rendering: pixelated;" /><br/>
            
            <!-- 半透明のマスク -->
            <div
                :style="`width:${board1FilesWithMask * board1SquareWidth}px; height:${board1RanksWithMask * board1SquareHeight}px; border-top: solid ${board1SquareHeight}px rgba(0,0,0,0.5); border-right: solid ${2 * board1SquareWidth}px rgba(0,0,0,0.5); border-bottom: solid ${2 * board1SquareHeight}px rgba(0,0,0,0.5); border-left: solid ${board1SquareWidth}px rgba(0,0,0,0.5); zoom:${commonZoom};`"
                style="position:absolute; left:0; top:0; image-rendering: pixelated;"></div>
        </div>

        <p>👆半透明の黒いマスクのところは画面に映らないようにすればＯｋだぜ（＾～＾）！</p>
        <br/>

        <p>👇タイルのインデックスだぜ（＾▽＾）：</p>
        <div :style="board1ContainerStyle">
            <!--
                グリッド
                NOTE: ループカウンターは 1 から始まるので、1～9の9個のセルを作成。
            -->
            <div v-for="i in board1Area" :key="i"
                :style="getSquareStyle(i - 1)"
                style="border:dashed 1px gray;">{{ getTileIndexBySquare(i - 1) }}</div>
        </div>
        <p>：ここまで。</p>
        <br/>

        <p>元画像のタイルマップを表示：</p>
        <v-img
            src="/img/making/tilemap_floor.png"
            :style="`zoom: ${commonZoom}; width: ${board1SquareWidth}px; height:${board1SquareHeight}px;`"
            style="image-rendering: pixelated; border:dashed gray 1px;"/>
        <p>：ここまで。</p>

    </section>

    <br/>
    <h4><span class="parent-header-lights-out">ＲＰＧの歩行グラフィック　＞　</span><span class="parent-header">背景的スクロール　＞　</span>ソースコード</h4>
    <section class="sec-4">
        <source-link
            pagePath="/making/input-axis-rpg-walk-scroll-background"/>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, ref } from 'vue';
    //
    // 👆 ［初級者向けのソースコード］では、 reactive は使いません。
    //

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import SourceLink from '../../components/SourceLink.vue';
    import Tile from '@/components/Tile.vue';
    import TileAnimation from '@/components/TileAnimation.vue';


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

    const stopwatch1Count = ref<number>(0);   // カウントの初期値
    const stopwatch1TimerId = ref<number | null>(null);   // タイマーのIDを保持

    // ++++++++++++++++++++++++
    // + オブジェクト　＞　盤 +
    // ++++++++++++++++++++++++

    const board1SquareWidth = 32;
    const board1SquareHeight = 32;
    const board1Files = 5;  // 筋
    const board1Ranks = 5;  // 段
    const board1Area = computed(()=> {  // 盤のマス数
        return board1Files * board1Ranks;
    });
    const board1FilesWithMask = board1Files + 1
    const board1RanksWithMask = board1Ranks + 1
    const board1Top = ref<number>(0);    // ボードの表示位置
    const board1Left = ref<number>(0);
    const getSquareStyle = computed(() => {
        return (i:number)=>{
            // プレイヤーが初期位置にいる場合の、セルの top 位置。
            const homeLeft = (i % board1Files) * board1SquareWidth;
            const homeTop = Math.floor(i / board1Ranks) * board1SquareHeight;
            const boardWidth = (board1Files * board1SquareWidth);
            const boardHeight = (board1Ranks * board1SquareHeight);

            // NOTE: 循環するだけなら、［剰余］を使えばいける。
            // 盤の左端列を、右端列へ移動させる。
            const boardLeftLoop = euclideanMod(homeLeft + board1Left.value + boardWidth, boardWidth) - homeLeft;
            const boardTopLoop = euclideanMod(homeTop + board1Top.value + boardHeight, boardHeight) - homeTop;

            return {
                position: 'absolute',
                top: `${homeTop + boardTopLoop}px`,
                left: `${homeLeft + boardLeftLoop}px`,
                width: `${board1SquareWidth}px`,
                height: `${board1SquareHeight}px`,
                zoom: commonZoom,
                imagePixelated: true,
            };
        };
    });
    const board1MaskContainerStyle = computed(()=>{  // ボードとマスクを含んでいる領域のスタイル
        return {
            position: 'relative',
            left: "0",
            top: "0",
            width: `${commonZoom * board1FilesWithMask * board1SquareWidth}px`,
            height: `${commonZoom * board1RanksWithMask * board1SquareHeight}px`,
        };
    });
    const board1ContainerStyle = computed(()=>{  // ボードだけを含んでいる領域のスタイル
        const zoom = 4;
        
        return {
            position: 'relative',
            left: "0",
            top: "0",
            width: `${zoom * board1Files * board1SquareWidth}px`,
            height: `${zoom * board1Ranks * board1SquareHeight}px`,
        };
    });
    const board1FloorTilemapTileNum = 4;  // 床のタイルマップ
    const board1FloorTilemapCoordination = computed(() => {   // 座標
        const tileMap = [];
        for (let i = 0; i < board1Area.value; i++) {
            const files = i % board1Files;
            const ranks = Math.floor(i / board1Files);
            tileMap.push({ top: ranks * board1SquareHeight, left: files * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight });
        }
        return tileMap;
    });
    const board1MapFiles = board1Files;  // マップデータ
    const board1MapRanks = board1Ranks;
    const board1MapArea = board1MapFiles * board1MapRanks;
    const mapData = computed(() => {    // ランダムなマップデータを生成
        const data = [];
        for (let i = 0; i < board1MapArea; i++) {
            data.push(Math.floor(Math.random() * board1FloorTilemapTileNum));  // 0からfloorTilemapTileNum - 1のランダムな整数を配置
        }
        return data;
    });
    const getTileIndexBySquare = computed(() => {
        return (squareIndex: number) => {
            return mapData.value[squareIndex];
        };
    });
    const getFloorLeftBySquare = computed(() => {
        return (squareIndex: number) => {
            const tileIndex = mapData.value[squareIndex];
            return board1FloorTilemapCoordination.value[tileIndex]["left"];
        };
    });

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　プレイヤー +
    // ++++++++++++++++++++++++++++++++

    const player1Left = ref<number>(2 * board1SquareWidth);      // スプライトのX座標
    const player1Top = ref<number>(2 * board1SquareHeight);       // スプライトのY座標
    const player1Speed = ref<number>(2);     // 移動速度
    const player1Input = <Record<string, boolean>>{  // 入力
        ArrowUp: false, ArrowRight: false, ArrowDown: false, ArrowLeft: false
    };
    const player1AnimationSlow = ref<number>(8);   // アニメーションのスローモーションの倍率の初期値
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
        stopwatch1Start();



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
            player1MotionWait.value -= 1;

            if (player1MotionWait.value==0) {
                player1Motion.value["xAxis"] = 0;    // クリアー
                player1Motion.value["yAxis"] = 0;
            }
            
            // 入力（上下左右への移動）をモーションに変換
            if (player1MotionWait.value<=0) {   // ウェイトが無ければ、入力を受け付ける。
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
                    player1MotionWait.value = 16;    // フレーム数を設定
                }
            }

            // 移動処理
            // 斜め方向の場合、上下を優先する。
            if (player1Motion.value["xAxis"]==1) {   // 右
                player1Frames.value = player1SourceFrames["right"]
                board1Left.value -= player1Speed.value;   // 盤の方をスクロールさせる
            } else if (player1Motion.value["xAxis"]==-1) {  // 左
                player1Frames.value = player1SourceFrames["left"]
                board1Left.value += player1Speed.value;
            }

            if (player1Motion.value["yAxis"]==-1) {  // 上
                player1Frames.value = player1SourceFrames["up"]
                board1Top.value += player1Speed.value;
            } else if (player1Motion.value["yAxis"]==1) {   // 下
                player1Frames.value = player1SourceFrames["down"]
                board1Top.value -= player1Speed.value;
            }

            // 次のフレーム
            requestAnimationFrame(update);
        };

        // 初回呼び出し
        requestAnimationFrame(update);
    }


    /**
     * ストップウォッチ１開始
     */
    function stopwatch1Start() : void {
        // 既にタイマーが動いてたら何もしない
        if (stopwatch1TimerId.value) return;

        // requestAnimationFrameで約16.67ms（60fps）ごとにカウントアップ
        const tick = () => {
            stopwatch1Count.value += 1;
            stopwatch1TimerId.value = requestAnimationFrame(tick);
        };
        stopwatch1TimerId.value = requestAnimationFrame(tick);
    }

</script>

<style scoped>
    div.cursor {
        position: relative; width:32px; height:32px;
    }
</style>
