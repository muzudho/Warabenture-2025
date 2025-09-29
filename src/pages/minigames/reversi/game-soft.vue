<template>

    <comment>機能</comment>
    <button-20250822 ref="button1Ref"/>


    <!-- ゲーム画面の全体サイズと、切り抜き領域 -->
    <div
        :style="{
            visibility: vision1Visibility,
            width: `${vision1Width}px`,
            height: `${vision1Height}px`,
            zoom: vision1Zoom,
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
            v-for="sq in range(0, gameBoard1Area)"
            :key="sq"
            :style="{
                left: `${(sq % gameBoard1FileNum + 1) * tileBoard1TileWidth}px`,
                top: `${(Math.floor(sq / gameBoard1FileNum) + 1) * tileBoard1TileHeight}px`,
                minWidth: `${tileBoard1TileWidth}px`,
                width: `${tileBoard1TileWidth}px`,
                height: `${tileBoard1TileHeight}px`,
                color: game1StoneColorNameMap[gameBoard1StoneColorArray[sq]],    /* 石の色 */
                backgroundColor: `${(sq % gameBoard1FileNum + Math.floor(sq/gameBoard1FileNum))%2==0 ? '#F0E0C0' : '#F0C050'}`,  /* 盤の色 */
                pointerEvents: gameBoard1StoneClickable(sq) ? 'auto' : 'none',  /* 石が置いてあったら、クリックを無視する */
            }"
            style="
                position: absolute;
                font-size: 24px;
                line-height: 90%;   /* 目視確認で石がマスの真ん中にくるよう調整 */
                z-index: 120;   /* 目に見えませんが、ボタンが光景に沈んでいるので、前景にします */
            "
            @click="onGameBoard1Clicked(sq)"
        >{{ gameBoard1StoneShapeArray[sq] }}</v-btn>


        <!-- 筋の符号 -->
        <span
            v-for="file in gameBoard1FileNameArray.length"
            :key="file"
            :style="{
                position: 'absolute',
                left: `${file * tileBoard1TileWidth + 6}px`,
                top: `${0 * tileBoard1TileHeight}px`,
                width: '20px',
                color: 'white',
                fontSize: '24px',
                zIndex: 200,
                textAlign: 'center',
            }"
        >{{ gameBoard1FileNameArray[file - 1] }}</span>


        <!-- 段の符号 -->
        <span
            v-for="rank in 8"
            :key="rank"
            :style="{
                position: 'absolute',
                left: '3px',
                top: `${rank * tileBoard1TileHeight}px`,
                width: '20px',
                color: 'white',
                fontSize: '24px',
                zIndex: 200,
                textAlign: 'right',
            }"
        >{{ rank }}</span>

    </div>

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
    import Comment from '@/components/Comment.vue';
    import Stopwatch from '@/components/Stopwatch.vue';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーザブル +
    // ++++++++++++++++++++++++++++++++++

    // from 部分のアルファベット順
    import { isPlayerInputKey } from '@/composables/player-controller';
    import { range } from '@/composables/range';


    // ##################
    // # エクスポート型 #
    // ##################

    export type Player1Input = { // 入力
        // アルファベット順
        " ": boolean;
        ArrowDown: boolean;
        ArrowLeft: boolean;
        ArrowUp: boolean;
        ArrowRight: boolean;
    };


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    
    interface Props {
        player1Input: Player1Input; // 入力
    }
    // デフォルト値を設定
    const props = defineProps<Props>();


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++
    // + オブジェクト　＞　機能拡張 +
    // ++++++++++++++++++++++++++++++

    const button1Ref = ref<InstanceType<typeof Button20250822> | null>(null);

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ビジョン１ +
    // ++++++++++++++++++++++++++++++++

    const vision1Height = computed(()=>{
        //return 512;
        return tileBoard1RankNum.value * tileBoard1TileHeight.value;
    });
    const vision1Width = computed(()=>{
        //return 512;
        return tileBoard1FileNum.value * tileBoard1TileWidth.value;
    });
    const vision1Visibility = ref<string>('hidden');
    const vision1Zoom = ref<number>(0.5);    // ズーム

    // ++++++++++++++++++++++++++++
    // + オブジェクト　＞　対局１ +
    // ++++++++++++++++++++++++++++

    const game1Turn = ref<number>(0);
    const game1Times = ref<number>(0); // 何手目を終えたか。リバーシでは盤上の石の数に等しい
    const game1IsPlaying = ref<boolean>(false);  // ゲーム中
    const game1IsPlayingPause = ref<boolean>(false); // ゲームは一時停止中
    const game1PassCount = ref<number>(0); // 連続パス回数
    const game1IsEnd = ref<boolean>(false);    // 終局しているか
    const game1Stopwatch1Ref = ref<InstanceType<typeof Stopwatch> | null>(null);    // ストップウォッチ１

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　思考エンジン +
    // ++++++++++++++++++++++++++++++++++

    const engine1RandomLimit: number = 2 * Math.PI * Math.E;    // 偏りのない乱数なら、マスをランダムに指定しても、マス目の数 × 2πe回試行すれば、すべてのマスをだいたい１回は訪問するという経験則（＾～＾）確率論の［クーポン収集問題（Coupon Collector's Problem）］よりでかい数。

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　タイル盤１ +
    // ++++++++++++++++++++++++++++++++

    // NOTE: ソース画像マップと、表示画面のスケールは等倍とします。変えると難しい。
    const tileBoard1TileWidth = ref<number>(32);    // マスの横幅（ピクセル）
    const tileBoard1TileHeight = ref<number>(32);   // マスの縦幅（ピクセル）
    const tileBoard1FileNum = ref<number>(10);  // 盤が横に何マスか
    const tileBoard1RankNum = ref<number>(10);  // 盤が縦に何マスか
    const tileBoard1Area = computed(()=>{   // 盤のマス数
        return tileBoard1FileNum.value * tileBoard1RankNum.value;
    });

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲーム盤１ +
    // ++++++++++++++++++++++++++++++++

    const gameBoard1FileNameArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const gameBoard1FileNum = ref<number>(8);  // 盤が横に何マスか
    const gameBoard1RankNum = ref<number>(8);  // 盤が縦に何マスか
    const gameBoard1Area = computed(()=>{
        return gameBoard1FileNum.value * gameBoard1RankNum.value;
    })
    const gameBoard1StoneShapeArray = ref<string[]>(new Array(gameBoard1Area.value).fill(''));    // 石の形
    for(let sq: number=0; sq<gameBoard1Area.value; sq++){
        gameBoard1StoneShapeArray.value[sq] = '●'
    }
    const gameBoard1StoneColorArray = ref<number[]>(new Array(gameBoard1Area.value).fill(0));    // 石の色
    const game1StoneColorNameMap: Record<number, string> = {
        0: 'transparent',
        1: '#C86868', // 明るい茶色
        2: '#289028', // 暗い緑
    }
    const gameBoard1StoneClickable = computed<
        (sq: number) => boolean
    >(()=>{    // マスをクリック可能か
        return (sq: number)=>{
            const isEmptySquare = gameBoard1StoneColorArray.value[sq] == 0; // 空マスだ
            return isEmptySquare && isAdjacentToOpponentStone(sq) && !game1IsEnd.value;
        }
    });
    const game1StoneCount = ref<number[]>([0, 0, 0]);   // 盤上のプレイヤーの石の数。[0] は未使用
    const game1DebugMessage = ref<string>('');   // デバッグ用メッセージ


    const DIRECTION_EMPTY = 0;
    const DIRECTION_EAST = 1;
    const DIRECTION_WEST = 2;
    const DIRECTION_SOUTH = 3;
    const DIRECTION_NORTH = 4;
    const DIRECTION_NORTHEAST = 5;
    const DIRECTION_SOUTHWEST = 6;
    const DIRECTION_SOUTHEAST = 7;
    const DIRECTION_NORTHWEST = 8;
    type Direction = typeof DIRECTION_EMPTY
        | typeof DIRECTION_EAST
        | typeof DIRECTION_WEST
        | typeof DIRECTION_SOUTH
        | typeof DIRECTION_NORTH
        | typeof DIRECTION_NORTHEAST
        | typeof DIRECTION_SOUTHWEST
        | typeof DIRECTION_SOUTHEAST
        | typeof DIRECTION_NORTHWEST
        ;
    const allDirectionsNextOf = [(_sq: number) => { return -1; }, eastOf, westOf, southOf, northOf, northeastOf, southwestOf, southeastOf, northwestOf];


    /**
     * 相手の石に隣接するマスだ
     * @param sq 
     */
    function isAdjacentToOpponentStone(sq: number) : boolean {
        function executeOneDirection(
            direction: Direction,
        ) {
            const actualAdjacentStoneColor = allDirectionsNextOf[direction](sq) != -1 ? gameBoard1StoneColorArray.value[allDirectionsNextOf[direction](sq)] : 0;
            return actualAdjacentStoneColor == opponentColor(game1Turn.value);
        }

        return executeOneDirection(DIRECTION_EAST)
            || executeOneDirection(DIRECTION_WEST)
            || executeOneDirection(DIRECTION_SOUTH)
            || executeOneDirection(DIRECTION_NORTH)
            || executeOneDirection(DIRECTION_NORTHEAST)
            || executeOneDirection(DIRECTION_SOUTHWEST)
            || executeOneDirection(DIRECTION_SOUTHEAST)
            || executeOneDirection(DIRECTION_NORTHWEST)
            ;
    }


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
                props.player1Input[e.key] = true;
            }
        });
        window.addEventListener('keyup', (e) => {
            if (isPlayerInputKey(e.key)) {  // 型ガード
                props.player1Input[e.key] = false;
            }
        });

        gameLoopStart();    // 入力処理、描画を行います
    });

    // ++++++++++++++++++++++++++++++++++++++
    // + イベントハンドラー　＞　ゲーム盤１ +
    // ++++++++++++++++++++++++++++++++++++++

    /**
     * 
     * @param sq （0から始まる）マス番号
     */
    function onGameBoard1Clicked(sq: number) : void {
        //game1DebugMessage.value = `sq=${sq}`;

        const color = game1Turn.value;   // Math.floor(Math.random() * 2) + 1;
        putStone(sq, color);  // 石を置くのに失敗しても何もしません
    }


    function putStone(sq: number, color: number) : boolean {
        if (!gameBoard1StoneClickable.value(sq)) {  // 石を置けないマスなら
            return false;
        }

        gameBoard1StoneColorArray.value[sq] = color;
        reverseStones(sq);
        game1Turn.value = opponentColor(game1Turn.value); // 相手の色に変更
        game1Times.value += 1;
        game1StoneCount.value[color] += 1;
        game1PassCount.value = 0;  // リセット
        return true;
    }

    // ################
    // # サブルーチン #
    // ################

    // ++++++++++++++++++++++++++++
    // + サブルーチン　＞　ゲーム +
    // ++++++++++++++++++++++++++++

    /**
     * ゲームの初期化
     */
    function gameInit() : void {
        //game1DebugMessage.value = "ゲームの初期化";
        game1Stopwatch1Ref.value?.timerReset();  // タイマーをリセット

        // 外付けシステムボタンをリセット
        game1IsPlaying.value = false;
        game1IsPlayingPause.value = false;

        // ++++++++++++++++++++++++++
        // + ゲームデータをリセット +
        // ++++++++++++++++++++++++++

        // 盤の初期化
        for(let sq: number=0; sq<gameBoard1Area.value; sq++){
            gameBoard1StoneColorArray.value[sq] = 0;    // 空マス
        }
        gameBoard1StoneColorArray.value[27] = 1;    // 石の初期位置
        gameBoard1StoneColorArray.value[28] = 2;
        gameBoard1StoneColorArray.value[35] = 2;
        gameBoard1StoneColorArray.value[36] = 1;
        game1Times.value = 4;
        game1Turn.value = 1;
        game1StoneCount.value[1] = 2;
        game1StoneCount.value[2] = 2;
        game1PassCount.value = 0;
        game1IsEnd.value = false;
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

            if (props.player1Input[' ']) {
                if (!game1IsEnd.value) { // 終局していたら、何もしない
                    const color = game1Turn.value;   // Math.floor(Math.random() * 2) + 1;
                    let itsOk = false;
                    let count = 0;
                    while(!itsOk && count <= engine1RandomLimit) {
                        // 適当に石を置く
                        const sq = Math.floor(Math.random() * gameBoard1Area.value);
                        itsOk = putStone(sq, color);
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

                            if (2 <= game1PassCount.value) {
                                // パスが２回続いたら終局
                                game1IsEnd.value = true;
                            }

                        } else {
                            itsOk = putStone(lastSq, color);    // 必ず置けるはず
                            if (!itsOk) {
                                throw Error(`石を置けなかった。 lastSq=${lastSq} color=${color}`);
                            }
                        }
                    }

                    if (gameIsFullCapacity()) {
                        // 満局なら終局
                        game1IsEnd.value = true;
                    }
                }

                props.player1Input[' '] = false;
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
    function opponentColor(color: number) : number {
        return color % 2 + 1;   // 1 なら 2 に、2 なら 1 に
    }


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


    /**
     * 隣に連続する相手の石（A）があり、その次に自分の石があるとき、A をひっくり返します
     * @param startSq 石を置いたマス番号
     * @param nextOf 隣のマス番号を取得する関数
     */
    function reverseLineStones(
        startSq: number,
        nextOf: (sq: number) => number,
    ) : void {
        const reverseSqArray = [];
        
        let nextSq = nextOf(startSq);   // 隣のマス番号
        while (true) {
            if (nextSq == -1) { // 盤外なら、リストを空にしてループを抜ける
                reverseSqArray.length = 0;
                break;
            }

            const nextColor = gameBoard1StoneColorArray.value[nextSq];  // 隣の石の色
            //console.log(`nextSq=${nextSq} nextColor=${nextColor} opponentColor1=${opponentColor1}`);
            if (nextColor == game1Turn.value) {    // 自分の石に当たったら、ループを抜ける
                break;
            }

            if (nextColor == 0) {   // 空マスに突き当たったら、リストを空にしてループを抜ける
                reverseSqArray.length = 0;
                break;
            }

            reverseSqArray.push(nextSq);    // 相手の石はマス番号を記録
            nextSq = nextOf(nextSq);
        }

        // 石の数を数える
        game1StoneCount.value[game1Turn.value] += reverseSqArray.length;
        game1StoneCount.value[opponentColor(game1Turn.value)] -= reverseSqArray.length;

        // ひっくり返す
        for(let i=0; i<reverseSqArray.length; i++) {
            const sq = reverseSqArray[i];
            gameBoard1StoneColorArray.value[sq] = game1Turn.value;
        }
    }


    /**
     * できれば、石をひっくり返します
     * @param startSq 石を置いたマス番号
     */
    function reverseStones(startSq: number) : void {
        reverseLineStones(startSq, northOf);    // 北
        reverseLineStones(startSq, northeastOf);    // 北東
        reverseLineStones(startSq, eastOf); // 東
        reverseLineStones(startSq, southeastOf);    // 南東
        reverseLineStones(startSq, southOf);    // 南
        reverseLineStones(startSq, southwestOf);    // 南西
        reverseLineStones(startSq, westOf); // 西
        reverseLineStones(startSq, northwestOf);    // 北西
    }


    /**
     * パス
     */
    function gamePass() : void {
        game1Times.value += 1;
        game1PassCount.value += 1;
        game1Turn.value = opponentColor(game1Turn.value);
    }


    /**
     * 満局か
     */
    function gameIsFullCapacity() : boolean {
        return gameBoard1Area.value <= game1StoneCount.value[1] + game1StoneCount.value[2];
    }


    // ####################
    // # エクスポート関数 #
    // ####################

    // 親に公開する関数をdefineExposeで指定
    defineExpose({
        game1DebugMessage,
        game1IsEnd,
        game1IsPlaying,
        game1IsPlayingPause,
        game1PassCount,
        game1StoneColorNameMap,
        game1StoneCount,
        game1Stopwatch1Ref,
        game1Times,
        game1Turn,
        gameInit,
        gameIsFullCapacity,
        vision1Height,
        vision1Visibility,
        vision1Width,
        vision1Zoom,
    });

</script>

<style lang="css" scoped>
    @import '@/styles/misc.css';
    @import '@/styles/talk-pen.css';
</style>
