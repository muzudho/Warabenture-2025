<template>

    <h4><span class="parent-header">ＲＰＧの歩行グラフィック　＞　</span>盤の循環スクロール、絵柄付き</h4>
    <section class="sec-4">
        <p>キーボード操作方法</p>
        <ul>
            <li>
                <v-btn class="code-key hidden"/><v-btn class="code-key" @mousedown="onUpButtonPressed()" @mouseup="onUpButtonReleased()">↑</v-btn><br/>
                <v-btn class="code-key" @mousedown="onLeftButtonPressed()" @mouseup="onLeftButtonReleased()">←</v-btn><v-btn class="code-key hidden"/><v-btn class="code-key" @mousedown="onRightButtonPressed()" @mouseup="onRightButtonReleased()">→</v-btn>　…　自機を上下左右へ、印字を逆方向へ動かすぜ！<br/>
                <v-btn class="code-key hidden"/><v-btn class="code-key" @mousedown="onDownButtonPressed()" @mouseup="onDownButtonReleased()">↓</v-btn><br/>
            </li>
            <li><v-btn class="code-key" @mousedown="onSpaceButtonPressed()" @mouseup="onSpaceButtonReleased()">（スペース）</v-btn>　…　自機、印字の位置を最初に有ったところに戻すぜ。</li>
            <li>
                <!-- フォーカスを外すためのダミー・ボタンです -->
                <v-btn
                    class="noop-key"
                    ref="noopButton"
                    v-tooltip="'PCでのマウス操作で、フォーカスがコントロールに残って邪魔になるときは、このボタンを押してくれだぜ'" >何もしないボタン</v-btn><br/>
            </li>
        </ul>
        <br/>

        <!-- ストップウォッチ。デバッグに使いたいときは、 display: none; を消してください。 -->
        <stopwatch
            ref="stopwatch1Ref"
            v-on:countUp="(countNum) => { stopwatch1Count = countNum; }"
            style="display: none;" />

        <div :style="board1Style">

            <!--
                タイルのグリッド。
                NOTE: ループカウンターは 1 から始まるので、1～9の9個のセルを作成。
            -->
            <Tile
                v-for="i in board1Area" :key="i"
                :style="getSquareStyle(i - 1)"
                :srcLeft="getFloorLeftBySquare(i - 1)"
                :srcTop="0"
                :srcWidth="board1SquareWidth"
                :srcHeight="board1SquareHeight"
                tilemapUrl="/img/making/tilemap_floor.png" />

            <!-- プレイヤー１ -->
            <tile-animation
                :frames="player1Frames"
                tilemapUrl="/img/making/202508__warabenture__15-1612-kifuwarabe-o1o0.png"
                :slow="player1AnimationSlow"
                :time="stopwatch1Count"
                class="cursor"
                :style="player1Style"
                style="image-rendering: pixelated;" /><br/>
            
            <!-- 半透明のマスク -->
            <div
                :style="`
                    width:${board1WithMaskFileNum * board1SquareWidth}px;
                    height:${board1WithMaskRankNum * board1SquareHeight}px;
                    border-top: solid ${board1WithMaskSizeSquare * board1SquareHeight}px rgba(0,0,0,0.5);
                    border-right: solid ${(board1WithMaskSizeSquare + board1WithMaskBottomRightMargin) * board1SquareWidth}px rgba(0,0,0,0.5);
                    border-bottom: solid ${(board1WithMaskSizeSquare + board1WithMaskBottomRightMargin) * board1SquareHeight}px rgba(0,0,0,0.5);
                    border-left: solid ${board1WithMaskSizeSquare * board1SquareWidth}px rgba(0,0,0,0.5);
                    zoom:${commonZoom};
                `"
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
    <h4><span class="parent-header-lights-out">ＲＰＧの歩行グラフィック　＞　</span><span class="parent-header">盤の循環スクロール、絵柄付き　＞　</span>ソースコード</h4>
    <section class="sec-4">
        <source-link
            pagePath="/making/input-axis-rpg-walk-using-background-image-1"/>
    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, ref } from 'vue';
    // 👆 ［初級者向けのソースコード］では、 reactive は使いません。

    import { VBtn } from 'vuetify/components';


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
    import Tile from '../../components/Tile.vue';
    import TileAnimation from '../../components/TileAnimation.vue';


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //

    const commonZoom = 4;
    const commonSpriteMotionLeft = -1;  // モーション（motion）定数。左。
    const commonSpriteMotionTop = -1;
    const commonSpriteMotionRight = 1;
    const commonSpriteMotionBottom = 1;


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　何もしないボタン +
    // ++++++++++++++++++++++++++++++++++++++

    const noopButton = ref<InstanceType<typeof VBtn> | null>(null);

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
    const board1FileNum = 5;  // 筋の数
    const board1RankNum = 5;  // 段の数
    const board1Area = computed(()=> {  // 盤のマス数
        return board1FileNum * board1RankNum;
    });
    const board1WithMaskSizeSquare = ref<number>(1);    // マスクの幅（単位：マス）
    const board1WithMaskBottomRightMargin = 1;          // マスクは右下に１マス分多く作ります。
    const board1WithMaskFileNum = board1FileNum + board1WithMaskBottomRightMargin
    const board1WithMaskRankNum = board1RankNum + board1WithMaskBottomRightMargin
    const board1Style = computed<CompatibleStyleValue>(()=>{  // ボードとマスクを含んでいる領域のスタイル
        return {
            position: 'relative',
            left: "0",
            top: "0",
            width: `${commonZoom * board1WithMaskFileNum * board1SquareWidth}px`,
            height: `${commonZoom * board1WithMaskRankNum * board1SquareHeight}px`,
        };
    });
    const getSquareStyle = computed<
        (i:number)=>CompatibleStyleValue
    >(() => {
        return (i:number)=>{
            // プレイヤーが初期位置にいる場合の、マスの位置。
            const homeLeft = (i % board1FileNum) * board1SquareWidth;
            const homeTop = Math.floor(i / board1FileNum) * board1SquareHeight;

            const bwPx = (board1FileNum * board1SquareWidth);   // 盤の横幅（ピクセル）。右側と下側に余分に付いている１マス分のマスクを含まない。
            const bhPx = (board1RankNum * board1SquareHeight);

            // NOTE: 循環するだけなら、［剰余］を使えばいける。
            // 盤の左端列を、右端列へ移動させる。
            const offsetLeftLoop = euclideanMod(homeLeft + printing1Left.value + bwPx, bwPx) - homeLeft;
            const offsetTopLoop = euclideanMod(homeTop + printing1Top.value + bhPx, bhPx) - homeTop;

            return {
                position: 'absolute',
                left: `${homeLeft + offsetLeftLoop}px`,
                top: `${homeTop + offsetTopLoop}px`,
                width: `${board1SquareWidth}px`,
                height: `${board1SquareHeight}px`,
                zoom: commonZoom,
                imagePixelated: true,
            };
        };
    });
    const board1ContainerStyle = computed<CompatibleStyleValue>(()=>{  // ボードだけを含んでいる領域のスタイル
        const zoom = 4;
        
        return {
            position: 'relative',
            left: "0",
            top: "0",
            width: `${zoom * board1FileNum * board1SquareWidth}px`,
            height: `${zoom * board1RankNum * board1SquareHeight}px`,
        };
    });
    const board1FloorTilemapTileNum = 4;  // 床のタイルマップ
    const board1FloorTilemapCoordination = computed(() => {   // 座標
        const tileMap = [];
        for (let i = 0; i < board1Area.value; i++) {
            const files = i % board1FileNum;
            const ranks = Math.floor(i / board1FileNum);
            tileMap.push({ top: ranks * board1SquareHeight, left: files * board1SquareWidth, width: board1SquareWidth, height: board1SquareHeight });
        }
        return tileMap;
    });
    const board1MapFiles = board1FileNum;  // マップデータ
    const board1MapRanks = board1RankNum;
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

    // ++++++++++++++++++++++++++
    // + オブジェクト　＞　印字 +
    // ++++++++++++++++++++++++**
    //
    // 盤上に表示される数字柄、絵柄など。
    //

    // アニメーションのことを考えると、 File, Rank ではデジタルになってしまうので、 Left, Top で指定したい。
    const printing1Left = ref<number>(0);
    const printing1Top = ref<number>(0);
    const printing1Speed = ref<number>(2);        // 移動速度（単位：ピクセル）
    const printing1Motion = ref<Record<string, number>>({  // 印字への入力
        wrapAroundRight: 0,   // 負なら左、正なら右
        wrapAroundBottom: 0,   // 負なら上、正なら下
    });

    // ++++++++++++++++++++++++++++
    // + オブジェクト　＞　自機１ +
    // ++++++++++++++++++++++++++++

    // アニメーションのことを考えると、 File, Rank ではデジタルになってしまうので、 Left, Top で指定したい。
    const player1FileHome = ref<number>(2);		// 基準の相対位置
    const player1RankHome = ref<number>(2);
    const player1Left = ref<number>(2 * board1SquareWidth);     // スプライトのX座標
    const player1Top = ref<number>(2 * board1SquareHeight);     // スプライトのY座標
    const player1Input = <Record<string, boolean>>{             // 入力
        ArrowUp: false, ArrowRight: false, ArrowDown: false, ArrowLeft: false
    };
    const player1AnimationSlow = ref<number>(8);    // アニメーションのスローモーションの倍率の初期値
    const player1AnimationFacingFrames = 1;         // 振り向くフレーム数
    const player1AnimationWalkingFrames = 16;       // 歩行フレーム数
    const player1Style = computed<CompatibleStyleValue>(() => ({
        left: `${player1Left.value}px`,
        top: `${player1Top.value}px`,
        zoom: commonZoom,
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
    const player1Frames = ref(player1SourceFrames["down"]);
    const player1MotionWait = ref(0);  // TODO: モーション入力拒否時間。入力キーごとに用意したい。
    const player1Motion = ref<Record<string, number>>({  // モーションへの入力
        lookRight: 0,     // 向きを変える
        lookBottom: 0,
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
            player1MotionWait.value -= 1;           // モーション・タイマー

            if (player1MotionWait.value==0) {
                // モーションのクリアー
                player1Motion.value["lookRight"] = 0;	// 自機
                player1Motion.value["lookBottom"] = 0;
                printing1Motion.value["wrapAroundRight"] = 0;	// 印字
                printing1Motion.value["wrapAroundBottom"] = 0;
            }
            
            // キー入力をモーションに変換
            if (player1MotionWait.value<=0) {   // ウェイトが無ければ、入力を受け付ける。

                // 位置のリセット
                if (player1Input[" "]) {
                    player1Left.value = player1FileHome.value * board1SquareWidth;   // 自機
                    player1Top.value = player1RankHome.value * board1SquareHeight;
                    printing1Left.value = 0;                                         // 印字
                    printing1Top.value = 0;
                }

                // 移動関連（単発）
                // 斜め方向の場合、左右を上下で上書きする。（左、右）→（上、下）の順。
                if (player1Input.ArrowLeft) { // 左
                    player1Motion.value["lookRight"] = commonSpriteMotionLeft;
                    printing1Motion.value["wrapAroundRight"] = commonSpriteMotionRight;   // 印字は、キー入力とは逆向きへ進める
                }

                if (player1Input.ArrowRight) {  // 右
                    player1Motion.value["lookRight"] = commonSpriteMotionRight;
                    printing1Motion.value["wrapAroundRight"] = commonSpriteMotionLeft;    // 印字は、キー入力とは逆向きへ進める
                }

                if (player1Input.ArrowUp) {    // 上
                    player1Motion.value["lookBottom"] = commonSpriteMotionTop;
                    printing1Motion.value["wrapAroundBottom"] = commonSpriteMotionBottom;     // 印字は、キー入力とは逆向きへ進める
                }

                if (player1Input.ArrowDown) {   // 下
                    player1Motion.value["lookBottom"] = commonSpriteMotionBottom;
                    printing1Motion.value["wrapAroundBottom"] = commonSpriteMotionTop;    // 印字は、キー入力とは逆向きへ進める
                }
            }

            // ++++++++++++++++++++
            // + 向き、移動を処理 +
            // ++++++++++++++++++++

            // 印字の移動量（単位：ピクセル）を更新、ピクセル単位。タテヨコ同時入力の場合、上下で上書きする：
            if (printing1Motion.value["wrapAroundRight"] == commonSpriteMotionLeft) {  // 左
                printing1Left.value -= printing1Speed.value;
            } else if (printing1Motion.value["wrapAroundRight"] == commonSpriteMotionRight) {   // 右
                printing1Left.value += printing1Speed.value;
            }

            if (printing1Motion.value["wrapAroundBottom"] == commonSpriteMotionTop) {  // 上
                printing1Top.value -= printing1Speed.value;
            } else if (printing1Motion.value["wrapAroundBottom"] == commonSpriteMotionBottom) {   // 下
                printing1Top.value += printing1Speed.value;
            }

            // // 自機の移動量（単位：ピクセル）を更新、ピクセル単位。タテヨコ同時入力の場合、上下で上書きする：
            // if (player1Motion.value["goToRight"] == commonSpriteMotionLeft) {    // 左
            //     player1Left.value -= printing1Speed.value;
            // } else if (player1Motion.value["goToRight"] == commonSpriteMotionRight) {  // 右
            //     player1Left.value += printing1Speed.value;
            // }

            // if (player1Motion.value["goToBottom"] == commonSpriteMotionTop) {   // 上
            //     player1Top.value -= printing1Speed.value;
            // } else if (player1Motion.value["goToBottom"] == commonSpriteMotionBottom) { // 下
            //     player1Top.value += printing1Speed.value;
            // }

            if (player1MotionWait.value <= 0) { // モーション開始時に１回だけ実行される
                // 自機の向きを更新、タテヨコ同時入力の場合、上下を優先する：
                if (player1Motion.value["lookBottom"] == commonSpriteMotionTop) {   // 上
                    player1Frames.value = player1SourceFrames["up"]
                } else if (player1Motion.value["lookBottom"] == commonSpriteMotionBottom) { // 下
                    player1Frames.value = player1SourceFrames["down"]
                } else if (player1Motion.value["lookRight"] == commonSpriteMotionLeft) {    // 左
                    player1Frames.value = player1SourceFrames["left"]
                } else if (player1Motion.value["lookRight"] == commonSpriteMotionRight) {  // 右
                    player1Frames.value = player1SourceFrames["right"]
                }

                // ++++++++++++++++
                // + ウェイト設定 +
                // ++++++++++++++++

                if (printing1Motion.value["wrapAroundRight"]!=0 || printing1Motion.value["wrapAroundBottom"]!=0) {
                    //  || player1Motion.value["goToRight"]!=0 || player1Motion.value["goToBottom"]!=0
                    player1MotionWait.value = player1AnimationWalkingFrames;
                } else if (player1Motion.value["lookRight"]!=0 || player1Motion.value["lookBottom"]!=0) {
                    player1MotionWait.value = player1AnimationFacingFrames;
                }
            }

            // 次のフレーム
            requestAnimationFrame(update);
        };

        // 初回呼び出し
        requestAnimationFrame(update);
    }


    // /**
    //  * フォーカスを外すのが上手くいかないため、［何もしないボタン］にフォーカスを合わせます。
    //  */
    // function focusRemove() : void {
    //     if (noopButton.value) {
    //         noopButton.value.$el.focus();    // $el は、<v-btn> 要素の中の <button> 要素。
    //     }
    // }


    function onUpButtonPressed() : void {
        console.log(`↑ボタンを押し付けました。`)
        player1Input.ArrowUp = true;
    }


    function onUpButtonReleased() : void {
        console.log(`↑ボタンを放しました。`)
        player1Input.ArrowUp = false;
    }


    function onRightButtonPressed() : void {
        player1Input.ArrowRight = true;
    }


    function onRightButtonReleased() : void {
        player1Input.ArrowRight = false;
    }


    function onDownButtonPressed() : void {
        player1Input.ArrowDown = true;
    }


    function onDownButtonReleased() : void {
        player1Input.ArrowDown = false;
    }


    function onLeftButtonPressed() : void {
        player1Input.ArrowLeft = true;
    }


    function onLeftButtonReleased() : void {
        player1Input.ArrowLeft = false;
    }


    function onSpaceButtonPressed() : void {
        player1Input[" "] = true;
    }


    function onSpaceButtonReleased() : void {
        player1Input[" "] = false;
    }

</script>

<style scoped>
    div.cursor {
        position: relative; width:32px; height:32px;
    }
</style>
