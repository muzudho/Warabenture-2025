<template>
    <the-header/>

    <h3>上下左右に移動しようぜ！　＞　ＲＰＧの歩行グラフィック　＞　背景的スクロール</h3>
    <section class="sec-3">
        <p>👇キーボードの上下左右キーを押してくれだぜ（＾▽＾）！</p>
        <div :style="boardMaskContainerStyle">

            <!--
                TODO: 背景タイル
                NOTE: ループカウンターは 1 から始まるので、1～9の9個のセルを作成。
            -->
            <Tile
                v-for="i in tableArea" :key="i"
                :style="getCellStyle(i - 1)"
                :srcLeft="getFloorLeftByCell(i - 1)"
                srcTop="0"
                :srcWidth="cellWidth"
                :srcHeight="cellHeight"
                tilemapUrl="/img/making/tilemap_floor.png" />

            <!-- プレイヤー１ -->
            <TileAnimation
                :frames="p1Frames"
                tilemapUrl="/img/making/202508__warabenture__15-1612-kifuwarabe-o1o0.png"
                :slow="slow"
                :time="count"
                class="cursor"
                :style="p1Style"
                style="image-rendering: pixelated;" /><br/>
            
            <!-- 半透明のマスク -->
            <div
                :style="`width:${tableColumnsWithMask * cellWidth}px; height:${tableRowsWithMask * cellHeight}px; border-top: solid ${cellHeight}px rgba(0,0,0,0.5); border-right: solid ${2 * cellWidth}px rgba(0,0,0,0.5); border-bottom: solid ${2 * cellHeight}px rgba(0,0,0,0.5); border-left: solid ${cellWidth}px rgba(0,0,0,0.5); zoom:${zoom};`"
                style="position:absolute; left:0; top:0; image-rendering: pixelated;"></div>
        </div>

        <p>👆半透明の黒いマスクのところは画面に映らないようにすればＯｋだぜ（＾～＾）！</p>
        <br/>

        <p>👇タイルのインデックスだぜ（＾▽＾）：</p>
        <div :style="boardContainerStyle">
            <!--
                グリッド
                NOTE: ループカウンターは 1 から始まるので、1～9の9個のセルを作成。
            -->
            <div v-for="i in tableArea" :key="i"
                :style="getCellStyle(i - 1)"
                style="border:dashed 1px gray;">{{ getTileIndexByCell(i - 1) }}</div>
        </div>
        <p>：ここまで。</p>
        <br/>

        <p>元画像のタイルマップを表示：</p>
        <v-img
            src="/img/making/tilemap_floor.png"
            :style="`zoom: ${zoom};`"
            style="width:128px; height:128px; image-rendering: pixelated; border:dashed gray 4px;"/>
        <p>：ここまで。</p>

    </section>

    <br/>
    <h3>ソースコード</h3>
    <section class="sec-3">
        <source-link/>
    </section>

    <the-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, ref } from 'vue';

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import SourceLink from '../../components/SourceLink.vue';
    import Tile from '@/components/Tile.vue';
    import TileAnimation from '@/components/TileAnimation.vue';
    import TheFooter from './the-footer.vue';
    import TheHeader from './the-header.vue';


    // ##############
    // # 共有データ #
    // ##############

    // 表示データ
    const zoom = 4;

    // 盤データ
    const cellWidth = 32;
    const cellHeight = 32;

    // プレイヤー１
    const p1Left = ref<number>(2 * cellWidth);      // スプライトのX座標
    const p1Top = ref<number>(2 * cellHeight);       // スプライトのY座標
    const p1Speed = ref<number>(2);     // 移動速度
    const p1Input = <Record<string, boolean>>{  // 入力
        ArrowUp: false, ArrowRight: false, ArrowDown: false, ArrowLeft: false
    };
    const p1Style = computed(() => ({
        top: `${p1Top.value}px`,
        left: `${p1Left.value}px`,
        zoom: zoom,
    }));

    const count = ref<number>(0);   // カウントの初期値
    const slow = ref<number>(8);   // スローモーションの倍率の初期値
    const timerId = ref<number | null>(null);   // タイマーのIDを保持

    // キャラクターの向きと、歩行タイルの指定
    const sourceFrames = {
        up:[    // 上向き
            {top:  0 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  0 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  0 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  0 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
        ],
        right:[ // 右向き
            {top:  1 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  1 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  1 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  1 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
        ],
        down:[  // 下向き
            {top:  2 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  2 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  2 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  2 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
        ],
        left:[  // 左向き
            {top:  3 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  3 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  3 * cellHeight, left: 0 * cellWidth, width: cellWidth, height: cellHeight },
            {top:  3 * cellHeight, left: 1 * cellWidth, width: cellWidth, height: cellHeight },
        ]
    };

    const p1Frames = ref(sourceFrames["down"]);

    // モーション
    const p1MotionWait = ref(0);  // TODO 入力キーごとに用意したい。
    const moLeft = -1;  // モーション（motion）定数。左に移動する
    const moRight = 1;
    const moUp = -1;
    const moDown = 1;
    const p1Motion = ref<Record<string, number>>({  // 入力
        xAxis: 0,   // 負なら左、正なら右
        yAxis: 0,   // 負なら上、正なら下
    });

    // 盤データ
    const tableColumns = 5;
    const tableRows = 5;
    const tableArea = tableColumns * tableRows; // 盤のセル数
    const tableColumnsWithMask = tableColumns + 1
    const tableRowsWithMask = tableRows + 1

    /**
     * ユークリッド剰余
     * 
     * NOTE: 負の剰余は数学の定義では［ユークリッド剰余］と、［トランケート剰余］の２種類あって、プログラム言語ごとにどっちを使ってるか違うから注意。
     * TypeScript では［トランケート剰余］なので、［ユークリッド剰余］を使いたいときはこれを使う。
     */
    function euclideanMod(a: number, b: number): number {
        return ((a % b) + b) % b;
    }    

    // ボードの表示位置
    const boardTop = ref<number>(0);
    const boardLeft = ref<number>(0);
    const getCellStyle = computed(() => {
        return (i:number)=>{
            // プレイヤーが初期位置にいる場合の、セルの top 位置。
            const homeLeft = (i % tableColumns) * cellWidth;
            const homeTop = Math.floor(i / tableRows) * cellHeight;
            const boardWidth = (tableColumns * cellWidth);
            const boardHeight = (tableRows * cellHeight);

            // NOTE: 循環するだけなら、［剰余］を使えばいける。
            // 盤の左端列を、右端列へ移動させる。
            const boardLeftLoop = euclideanMod(homeLeft + boardLeft.value + boardWidth, boardWidth) - homeLeft;
            const boardTopLoop = euclideanMod(homeTop + boardTop.value + boardHeight, boardHeight) - homeTop;

            return {
                position: 'absolute',
                top: `${homeTop + boardTopLoop}px`,
                left: `${homeLeft + boardLeftLoop}px`,
                width: `${cellWidth}px`,
                height: `${cellHeight}px`,
                zoom: zoom,
                imagePixelated: true,
            };
        };
    });

    // ボードとマスクを含んでいる領域のスタイル
    const boardMaskContainerStyle = computed(()=>{
        return {
            position: 'relative',
            left: 0,
            top: 0,
            width: `${zoom * tableColumnsWithMask * cellWidth}px`,
            height: `${zoom * tableRowsWithMask * cellHeight}px`,
        };
    });

    // ボードだけを含んでいる領域のスタイル
    const boardContainerStyle = computed(()=>{
        const zoom = 4;
        
        return {
            position: 'relative',
            left: 0,
            top: 0,
            width: `${zoom * tableColumns * cellWidth}px`,
            height: `${zoom * tableRows * cellHeight}px`,
        };
    });

    // 床のタイルマップ
    const floorTilemapTileNum = 4;
    const floorTileMapCoordination = computed(() => {   // 座標
        const tileMap = [];
        for (let i = 0; i < tableArea; i++) {
            const cols = i % tableColumns;
            const rows = Math.floor(i / tableColumns);
            tileMap.push({ top: rows * cellHeight, left: cols * cellWidth, width: cellWidth, height: cellHeight });
        }
        return tileMap;
    });

    // マップデータ
    const mapColumns = tableColumns;  // TODO: 10ぐらいにしたい
    const mapRows = tableRows;  // TODO: 10ぐらいにしたい
    const mapArea = mapColumns * mapRows;

    // ランダムなマップデータを生成
    const mapData = computed(() => {
        const data = [];
        for (let i = 0; i < mapArea; i++) {
            data.push(Math.floor(Math.random() * floorTilemapTileNum));  // 0からfloorTilemapTileNum - 1のランダムな整数を配置
        }
        return data;
    });

    const getTileIndexByCell = computed(() => {
        return (cellIndex: number) => {
            return mapData.value[cellIndex];
        };
    });
    
    const getFloorLeftByCell = computed(() => {
        return (cellIndex: number) => {
            const tileIndex = mapData.value[cellIndex];
            return floorTileMapCoordination.value[tileIndex]["left"];
        };
    });

    // ##########
    // # 開始時 #
    // ##########

    onMounted(() => {
        document.addEventListener('keydown', (event: KeyboardEvent) => {
            // 上下キーの場合
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                // ブラウザーのデフォルトの上下スクロール動作をキャンセル
                event.preventDefault();
            }
        });        

        startGameLoop();
        startTimer();

        // キーボードイベント
        window.addEventListener('keydown', (e) => {
            if (p1Input.hasOwnProperty(e.key)) {
                p1Input[e.key] = true;
            }
        });
        window.addEventListener('keyup', (e) => {
            if (p1Input.hasOwnProperty(e.key)) {
                p1Input[e.key] = false;
            }
        });


        // ################
        // # サブルーチン #
        // ################

        function startGameLoop() : void {
            const update = () => {
                p1MotionWait.value -= 1;

                if (p1MotionWait.value==0) {
                    p1Motion.value["xAxis"] = 0;    // クリアー
                    p1Motion.value["yAxis"] = 0;
                }
                
                // 入力（上下左右への移動）をモーションに変換
                if (p1MotionWait.value<=0) {   // ウェイトが無ければ、入力を受け付ける。
                    if (p1Input.ArrowLeft) {
                        p1Motion.value["xAxis"] = moLeft; // 左
                    }

                    if (p1Input.ArrowRight) {
                        p1Motion.value["xAxis"] = moRight;  // 右
                    }

                    if (p1Input.ArrowUp) {
                        p1Motion.value["yAxis"] = moUp;   // 上
                    }

                    if (p1Input.ArrowDown) {
                        p1Motion.value["yAxis"] = moDown;   // 下
                    }

                    if (p1Motion.value["xAxis"]!=0 || p1Motion.value["yAxis"]!=0) {
                        p1MotionWait.value = 16;    // フレーム数を設定
                    }
                }

                // 移動処理
                // 斜め方向の場合、上下を優先する。
                if (p1Motion.value["xAxis"]==1) {   // 右
                    p1Frames.value = sourceFrames["right"]
                    boardLeft.value -= p1Speed.value;   // 盤の方をスクロールさせる
                } else if (p1Motion.value["xAxis"]==-1) {  // 左
                    p1Frames.value = sourceFrames["left"]
                    boardLeft.value += p1Speed.value;
                }

                if (p1Motion.value["yAxis"]==-1) {  // 上
                    p1Frames.value = sourceFrames["up"]
                    boardTop.value += p1Speed.value;
                } else if (p1Motion.value["yAxis"]==1) {   // 下
                    p1Frames.value = sourceFrames["down"]
                    boardTop.value -= p1Speed.value;
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

    function startTimer() : void {
        // 既にタイマーが動いてたら何もしない
        if (timerId.value) return;

        // requestAnimationFrameで約16.67ms（60fps）ごとにカウントアップ
        const tick = () => {
            count.value += 1;
            timerId.value = requestAnimationFrame(tick);
        };
        timerId.value = requestAnimationFrame(tick);
    }

</script>

<style scoped>
    div.cursor {
        position: relative; width:32px; height:32px;
    }
</style>
