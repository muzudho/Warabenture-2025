<template>

    <comment>機能</comment>
    <button-20250822 ref="button1Ref"/>
    <game-board-index-model-1
        ref="gameBoardIndexModel1Ref"
        :fileNum="8"
        :rankNum="8"
    />
    <game-board-content-model-1 ref="gameBoardContentModel1Ref"/>
    <generation-move-model-1 ref="generationMoveModel1Ref"/>


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
            v-for="sq in vision1TileBoard1Area"
            :key="sq"
            :style="{
                top: `${Math.floor((sq - 1) / (vision1TileBoard1FileNum ?? 100)) * tileBoard1TileHeight}px`,
                left: `${((sq - 1) % (vision1TileBoard1FileNum ?? 100)) * tileBoard1TileWidth}px`,
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
            v-for="sq in range(0, (gameBoardIndexModel1Ref?.area ?? 0))"
            :key="sq"
            :style="{
                left: `${(sq % (gameBoardIndexModel1Ref?.fileNum ?? 0) + 1) * tileBoard1TileWidth}px`,
                top: `${(Math.floor(sq / (gameBoardIndexModel1Ref?.fileNum ?? 0)) + 1) * tileBoard1TileHeight}px`,
                minWidth: `${tileBoard1TileWidth}px`,
                width: `${tileBoard1TileWidth}px`,
                height: `${tileBoard1TileHeight}px`,
                color: game1StoneColorNameMap[(gameBoardContentModel1Ref?.stonesColor[sq] ?? 0)],    /* 石の色 */
                backgroundColor: getGameBoard1BackGroundColor(sq, (gameBoardIndexModel1Ref?.fileNum ?? 0)),  /* 盤の色 */
                pointerEvents: gameBoard1StoneClickable(sq) ? 'auto' : 'none',  /* 石が置いてあったら、クリックを無視する */
            }"
            style="
                position: absolute;
                font-size: 24px;
                line-height: 90%;   /* 目視確認で石がマスの真ん中にくるよう調整 */
                z-index: 120;   /* 目に見えませんが、ボタンが光景に沈んでいるので、前景にします */
            "
            @click="onGameBoard1Clicked(sq)"
        >{{ colorToShape(gameBoardContentModel1Ref?.stonesColor[sq] ?? 0) }}</v-btn>


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

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import GameBoardIndexModel1 from './GameBoardIndexModel.vue';
    import GameBoardContentModel1 from './GameBoardContentModel.vue';
    import GenerationMoveModel1 from './GenerationMoveModel.vue';
    import type { Color, Direction } from '@/pages/minigames/reversi/spec';
    import {
        // 色
        COLOR_EMPTY, COLOR_BLACK, COLOR_WHITE, oppositeColor, colorToCode,
        // マス
        makeCodeToSq,
        // 方向
        DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, DIRECTION_BAROQUE_DIAGONAL, DIRECTION_SINISTER_DIAGONAL,
    } from '@/pages/minigames/reversi/spec';
    import { gameBoard1FileNameArray, makeSqToCode } from '@/pages/minigames/reversi/game-board-index-util';
    import { locateSandwichedStones, locateStones, getColorList, getLastSq } from '@/pages/minigames/reversi/game-board-content-util';

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
    const gameBoardIndexModel1Ref = ref<InstanceType<typeof GameBoardIndexModel1> | null>(null);
    const gameBoardContentModel1Ref = ref<InstanceType<typeof GameBoardContentModel1> | null>(null);
    const generationMoveModel1Ref = ref<InstanceType<typeof GenerationMoveModel1> | null>(null);

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ビジョン１ +
    // ++++++++++++++++++++++++++++++++

    const vision1TileBoard1FileNum = ref<number>(10);  // 盤が横に何マスか
    const vision1TileBoard1RankNum = ref<number>(10);  // 盤が縦に何マスか
    const vision1TileBoard1Area = computed(()=>{   // 盤のマス数
        return vision1TileBoard1FileNum.value * vision1TileBoard1RankNum.value;
    });
    const vision1Height = computed(()=>{
        return vision1TileBoard1RankNum.value * tileBoard1TileHeight.value;
    });
    const vision1Width = computed(()=>{
        return vision1TileBoard1FileNum.value * tileBoard1TileWidth.value;
    });
    const vision1Visibility = ref<string>('hidden');
    const vision1Zoom = ref<number>(0.5);    // ズーム

    // ++++++++++++++++++++++++++++
    // + オブジェクト　＞　対局１ +
    // ++++++++++++++++++++++++++++

    const game1Turn = ref<Color>(0);
    const game1Times = ref<number>(0); // 何手目を終えたか。リバーシでは盤上の石の数に等しい
    const game1IsPlaying = ref<boolean>(false);  // ゲーム中
    const game1IsPlayingPause = ref<boolean>(false); // ゲームは一時停止中
    const game1PassCount = ref<number>(0); // 連続パス回数
    const game1IsEnd = ref<boolean>(false);    // 終局しているか
    const game1Stopwatch1Ref = ref<InstanceType<typeof Stopwatch> | null>(null);    // ストップウォッチ１
    const game1StoneColorNameMap: Record<number, string> = {
        0: 'transparent',
        1: '#C86868', // 明るい茶色
        2: '#289028', // 暗い緑
    }
    const game1DebugMessage = ref<string>('');   // デバッグ用メッセージ

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

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ゲーム盤１ +
    // ++++++++++++++++++++++++++++++++

    // 石の形
    const STONES_SHAPE = {
        [COLOR_EMPTY]: '　',
        [COLOR_BLACK]: '●', // 色で区別するので、黒と白が同形で構わない
        [COLOR_WHITE]: '●',
    } as Record<Color, string>;


    function colorToShape(color: Color) : string {
        if (!(color in STONES_SHAPE)) {
            return `${color}範囲外`;
        }
        return STONES_SHAPE[color];
    }


    const gameBoard1StoneClickable = computed<
        (sq: number) => boolean
    >(()=>{    // マスをクリック可能か
        return (sq: number)=>{
            if (!gameBoardContentModel1Ref?.value) {
                console.error("ERROR: [gameBoard1StoneClickable] 初期化不備： gameBoardContentModel1Ref 。");
                return false;  // エラー
            }

            // TODO: 石を置くことで、相手の石をひっくり返せるか？
            // TODO: 相手の石をひっくり返せない場合はパス
            // TODO: パスするボタンが欲しい
            const isEmptySquare = gameBoardContentModel1Ref.value.stonesColor[sq] == 0; // 空マスだ
            return isEmptySquare && isAdjacentToOpponentStone(sq) && !game1IsEnd.value;
        }
    });

    // 指定のウェイに絞り込んでデバッグできるよう配慮しています
    // NOTE: リバーシは、方向で分けるより、ウェイで分けた方がよさそう
    const activeDirections = [DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, DIRECTION_BAROQUE_DIAGONAL, DIRECTION_SINISTER_DIAGONAL] as Direction[];
    //const activeDirections = [DIRECTION_HORIZONTAL, /*DIRECTION_VERTICAL, DIRECTION_BAROQUE_DIAGONAL, DIRECTION_SINISTER_DIAGONAL*/] as Direction[];
    const activeSecondDirections = [DIRECTION_HORIZONTAL, DIRECTION_VERTICAL, DIRECTION_BAROQUE_DIAGONAL, DIRECTION_SINISTER_DIAGONAL] as Direction[];
    //const activeWays = [WAY_EAST, WAY_WEST, WAY_SOUTH, WAY_NORTH, WAT_NORTHEAST, WAY_SOUTHWEST, WAY_SOUTHEAST, WAY_NORTHWEST] as Way[];
    //const activeColors = [COLOR_BLACK, COLOR_WHITE] as Color[];


    const getGameBoard1BackGroundColor = computed<
        (sq: number, gameBoard1FileNum1: number)=>string
    >(()=>{
        return (sq: number, gameBoard1FileNum1: number)=>{
            if (game1Turn.value == COLOR_EMPTY) {   // まだ読込完了していないケース
                return '#000000';
            }

            //console.log(`DEBUG: [getGameBoard1BackGroundColor] game1Turn.value=${game1Turn.value} sq=${sq} gameBoard1FileNum1=${gameBoard1FileNum1}`);
            const checkeredFlag: boolean = (sq % gameBoard1FileNum1 + Math.floor(sq/gameBoard1FileNum1))%2==0; // 市松模様フラグ

            if (generationMoveModel1Ref?.value) {
                const canMove1: boolean = generationMoveModel1Ref.value.canMove(activeDirections, game1Turn.value, sq);

                if (game1Turn.value == COLOR_BLACK) {
                    if (canMove1) {
                        return checkeredFlag ? '#F0E0C0' : '#F0C050';  // 黒番の薄い色
                    }
                    return checkeredFlag ? '#C0B090' : '#C09020';  // 黒番の濃い色
                }
                if (canMove1) {
                    return checkeredFlag ? '#C0F0E0' : '#50F0C0';  // 白番の薄い色
                }
            }

            return checkeredFlag ? '#90C0B0' : '#20C090';  // 白番の濃い色
        };
    });


    /**
     * 相手の石に隣接するマスだ
     * @param sq
     */
    function isAdjacentToOpponentStone(sq: number) : boolean {
        if (!gameBoardIndexModel1Ref?.value) {
            console.error("ERROR: [isAdjacentToOpponentStone] 初期化不備： gameBoardIndexModel1Ref。");
            return false;  // エラー
        }

        function executeOneWay(
            nextOf: (sq: number)=>number,
        ) {
            if (!gameBoardContentModel1Ref?.value) {
                console.error("ERROR: [isAdjacentToOpponentStone] 初期化不備： gameBoardContentModel1Ref 。");
                return false;  // エラー
            }

            // ８方向の石を取得
            const actualAdjacentStoneColor: Color = nextOf(sq) != -1 ? gameBoardContentModel1Ref.value.stonesColor[nextOf(sq)] : 0;
            return actualAdjacentStoneColor == oppositeColor(game1Turn.value);
        }

        return executeOneWay(gameBoardIndexModel1Ref.value.eastOf)  // 水平方向
            || executeOneWay(gameBoardIndexModel1Ref.value.westOf)
            || executeOneWay(gameBoardIndexModel1Ref.value.southOf) // 垂直方向
            || executeOneWay(gameBoardIndexModel1Ref.value.northOf)
            || executeOneWay(gameBoardIndexModel1Ref.value.northeastOf) // 右肩上がり方向
            || executeOneWay(gameBoardIndexModel1Ref.value.southwestOf)
            || executeOneWay(gameBoardIndexModel1Ref.value.southeastOf) // 右肩下がり方向
            || executeOneWay(gameBoardIndexModel1Ref.value.northwestOf)
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

        const color: Color = game1Turn.value;   // Math.floor(Math.random() * 2) + 1;
        putStone(sq, color, true);  // 石を置くのに失敗しても何もしません
    }


    /**
     *
     * @param moveSq
     * @param color
     * @param hasForbidenMoveCheck
     * @returns 石を置けたかどうか
     */
    function putStone(
        moveSq: number,
        color: Color,
        hasForbidenMoveCheck: boolean,
    ) : boolean {
        if (!gameBoardIndexModel1Ref?.value) {
            console.error("ERROR: [putStone] 初期化不備： gameBoardIndexModel1Ref。");
            return false;  // エラー
        }
        if (!gameBoardContentModel1Ref?.value) {
            console.error("ERROR: [putStone] 初期化不備： gameBoardContentModel1Ref 。");
            return false;  // エラー
        }
        if (!generationMoveModel1Ref?.value) {
            console.error("ERROR: [putStone] 初期化不備： generationMoveModel1Ref。");
            return false;  // エラー
        }

        if (hasForbidenMoveCheck && !gameBoard1StoneClickable.value(moveSq)) {  // 石を置けないマスなら
            return false;
        }

        const oppositeTurnColor1 = oppositeColor(game1Turn.value);

        // ++++++++++
        // + 着手点 +
        // ++++++++++

        gameBoardContentModel1Ref.value.stonesColor[moveSq] = color;    // 石を置きます
        for (const direction of activeDirections) {
            // 着手点に石は置けません
            generationMoveModel1Ref.value.gameBoard1CanMove[direction][COLOR_BLACK][moveSq] = false;
            generationMoveModel1Ref.value.gameBoard1CanMove[direction][COLOR_WHITE][moveSq] = false;
        }

        // ++++++++++++++++++++++++
        // + 石をひっくり返します +
        // ++++++++++++++++++++++++

        const sqToCode = makeSqToCode(gameBoardIndexModel1Ref.value.fileNum);

        function generationMoveFirstLevel(
            generationMoveModel1Ref: any,
            direction: Direction,
            stonesCapSq: number,
            colorList: Color[],
        ) : void {
            // TODO: ストーンズ・キャップに石を置けるかどうか判定するには？
            // TODO: サンドイッチの色は分かってるから、エクステンド・ストーンズの石の色を見ていく。
            
            console.log(`DEBUG: [putStone] レスト・ストーンズ色　色リスト＝${colorList.map(x=>colorToCode(x)).join(',')}`);

            // TODO: 石が置ける条件は、色リストの末尾が [1, 2] なら 1。 [2, 1] なら 2。その他は置けない。
            const sliced = colorList.slice(colorList.length - 2);
            console.log(`DEBUG: [putStone] レスト・ストーンズ色　末尾２つ＝${sliced.map(x=>colorToCode(x)).join(',')}`);
            if (sliced[0] == 1 && sliced[1] == 2) { // 置ける
                console.log(`DEBUG: [putStone] ${sqToCode(stonesCapSq)}に黒だけ置ける`);
                generationMoveModel1Ref.value.gameBoard1CanMove[direction][COLOR_BLACK][stonesCapSq] = true;
                generationMoveModel1Ref.value.gameBoard1CanMove[direction][COLOR_WHITE][stonesCapSq] = false;
            } else if (sliced[0] == 2 && sliced[1] == 1) { // 置ける
                console.log(`DEBUG: [putStone] ${sqToCode(stonesCapSq)}に白だけ置ける`);
                generationMoveModel1Ref.value.gameBoard1CanMove[direction][COLOR_BLACK][stonesCapSq] = false;
                generationMoveModel1Ref.value.gameBoard1CanMove[direction][COLOR_WHITE][stonesCapSq] = true;
            } else {    // 置けない
                console.log(`DEBUG: [putStone] ${sqToCode(stonesCapSq)}に石は置けない`);
                generationMoveModel1Ref.value.gameBoard1CanMove[direction][COLOR_BLACK][stonesCapSq] = false;
                generationMoveModel1Ref.value.gameBoard1CanMove[direction][COLOR_WHITE][stonesCapSq] = false;
            }
        }

        function getStonesCap(
            restStones: number[],
            alternativeStartSq: number,
            nextOf: (sq: number)=>number,
        ) : number {
            if (restStones.length == 0) {
                return nextOf(alternativeStartSq);
            }
            return nextOf(getLastSq(restStones));
        }

        let allDirectionsSandwichedStones: number[] = []; // ［ひっくり返せる石］

        //const sqToCode = makeSqToCode(gameBoardIndexModel1Ref.value.fileNum);
        for (const direction of activeDirections) {
            const gameBoard1StoneColorArray: Color[] = gameBoardContentModel1Ref.value.stonesColor;
            const foreOf = gameBoardIndexModel1Ref.value.allDirectionsForeOf[direction];
            const backOf = gameBoardIndexModel1Ref.value.allDirectionsBackOf[direction];

            const [sandwichedStones, foresideSandwichedCapSq, backsideSandwichedCapSq] = locateSandwichedStones( // ひっくり返す対象の石のマス番号を取得します
                gameBoard1StoneColorArray,
                game1Turn.value,
                foreOf,
                backOf,
                sqToCode,
                moveSq,
                direction
            );

            allDirectionsSandwichedStones.push(...sandwichedStones);
            //console.log(`DEBUG: [putStone] direction=${directionToTitle(direction)} sandwichedStones=${sandwichedStones.map((sq)=> sqToCode(sq)).join(',')}`);
            gameBoardContentModel1Ref.value.reverseStones(game1Turn.value, sandwichedStones);   // ［挟んだ石］をひっくり返します。

            // ++++++++++++++++++++
            // + １階の指し手生成 +
            // ++++++++++++++++++++

            // TODO: 石がひっくり返ったあと、その方向の両キャップの位置を取得、そこに手番石、相手番石を置けるかどうかを更新したい。
            // TODO: １階キャップ（_foresideFirstCapSq, _backsideFirstCapSq）を起点として、さらに延長１階キャップを探索できるか？
            //  空点でなければ延長すればいいか？
            const foresideRestStones = locateStones(
                gameBoard1StoneColorArray,
                foreOf(foresideSandwichedCapSq),
                foreOf,
            );
            const backsideRestStones = locateStones(
                gameBoard1StoneColorArray,
                backOf(backsideSandwichedCapSq),
                backOf,
            );
            console.log(`DEBUG: [putStone] レスト・ストーンズ　${sqToCode(foresideSandwichedCapSq)}より前方＝${foresideRestStones.map((sq)=> sqToCode(sq)).join(',')}　${sqToCode(backsideSandwichedCapSq)}より後方＝${backsideRestStones.map((sq)=> sqToCode(sq)).join(',')}`);

            const foresideStonesCapSq = getStonesCap(foresideRestStones, foresideSandwichedCapSq, foreOf);
            const backsideStonesCapSq = getStonesCap(backsideRestStones, backsideSandwichedCapSq, backOf);
            console.log(`DEBUG: [putStone] ストーンズ・キャップ　前方＝${sqToCode(foresideStonesCapSq)}　後方＝${sqToCode(backsideStonesCapSq)}`);


            const orderColorList: Color[] = [
                ...getColorList(gameBoard1StoneColorArray, backsideRestStones).reverse(),
                color,
                ...getColorList(gameBoard1StoneColorArray, foresideRestStones),
            ];
            console.log(`DEBUG: [putStone] オーダー色リスト＝${orderColorList.map(x=>colorToCode(x)).join(',')}`);

            generationMoveFirstLevel(
                generationMoveModel1Ref,
                direction,
                foresideStonesCapSq,
                orderColorList,
            );
            generationMoveFirstLevel(
                generationMoveModel1Ref,
                direction,
                backsideStonesCapSq,
                orderColorList.reverse(),
            );
        }

        // ++++++++++++++++++++
        // + TODO ２階の指し手生成 +
        // ++++++++++++++++++++

        for (const secondSandwichedStoneSq of allDirectionsSandwichedStones) {
            for (const direction of activeDirections) {
                const gameBoard1StoneColorArray: Color[] = gameBoardContentModel1Ref.value.stonesColor;
                const foreOf = gameBoardIndexModel1Ref.value.allDirectionsForeOf[direction];
                const backOf = gameBoardIndexModel1Ref.value.allDirectionsBackOf[direction];

                const foresideRestStones = locateStones(
                    gameBoard1StoneColorArray,
                    foreOf(secondSandwichedStoneSq),
                    foreOf,
                );
                const backsideRestStones = locateStones(
                    gameBoard1StoneColorArray,
                    backOf(secondSandwichedStoneSq),
                    backOf,
                );

                const orderStonesList: number[] = [
                    ...backsideRestStones.reverse(),
                    secondSandwichedStoneSq,
                    ...foresideRestStones,
                ];

                const foresideStonesCapSq = getStonesCap(foresideRestStones, secondSandwichedStoneSq, foreOf);
                const backsideStonesCapSq = getStonesCap(backsideRestStones, secondSandwichedStoneSq, backOf);

                const orderColorList: Color[] = orderStonesList.map((sq)=> gameBoard1StoneColorArray[sq]);

                generationMoveFirstLevel(
                    generationMoveModel1Ref,
                    direction,
                    foresideStonesCapSq,
                    orderColorList,
                );
                generationMoveFirstLevel(
                    generationMoveModel1Ref,
                    direction,
                    backsideStonesCapSq,
                    orderColorList.reverse(),
                );
            }
        }


        // ++++++++++++++
        // + 指し手生成 +
        // ++++++++++++++

        // generationMoveModel1Ref.value.makeGenerationMoves(
        //     activeDirections,
        //     activeSecondDirections,
        //     game1Turn.value,
        //     moveSq,
        //     gameBoardIndexModel1Ref.value.fileNum,
        //     gameBoardContentModel1Ref.value.stonesColor,
        //     gameBoardIndexModel1Ref.value.allDirectionsForeOf,
        //     gameBoardIndexModel1Ref.value.allDirectionsBackOf,
        // );

        // // TODO: 指し手が消えるパターン

        game1Turn.value = oppositeTurnColor1; // 相手の色に変更
        game1Times.value += 1;
        gameBoardContentModel1Ref.value.stoneCounts[color] += 1;
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
        console.log(`DEBUG: [gameInit] ゲームの初期化。`);

        if (!gameBoardIndexModel1Ref?.value) {
            console.error(`ERROR: [gameInit] 初期化不備： gameBoardIndexModel1Ref。`);
            return;
        }
        if (!gameBoardContentModel1Ref?.value) {
            console.error("ERROR: [putStone] 初期化不備： gameBoardContentModel1Ref 。");
            return;
        }

        //game1DebugMessage.value = "ゲームの初期化";
        game1Stopwatch1Ref.value?.timerReset();  // タイマーをリセット

        // 外付けシステムボタンをリセット
        game1IsPlaying.value = false;
        game1IsPlayingPause.value = false;

        // ++++++++++++++++++++++++++
        // + ゲームデータをリセット +
        // ++++++++++++++++++++++++++

        // 盤の初期化
        for(let sq: number=0; sq<gameBoardIndexModel1Ref.value.area; sq++){
            gameBoardContentModel1Ref.value.stonesColor[sq] = 0;    // 空マス
        }

        game1Times.value = 0;
        game1Turn.value = COLOR_BLACK;
        gameBoardContentModel1Ref.value.stoneCounts[1] = 0;
        gameBoardContentModel1Ref.value.stoneCounts[2] = 0;
        game1PassCount.value = 0;
        game1IsEnd.value = false;


        // 石の色
        gameBoardContentModel1Ref.value.stonesColor = new Array(gameBoardIndexModel1Ref.value.area).fill(0);


        // ［指し手生成］を初期化
        if (generationMoveModel1Ref?.value) {
            generationMoveModel1Ref?.value.generationMoveModelInit(
                activeDirections,
                gameBoardIndexModel1Ref.value.area,
            );
        }


        //
        // 以下のような初期局面を作成：
        //
        //   ABCDEFGH
        // 1 ........
        // 2 ........
        // 3 ........
        // 4 ...xo...
        // 5 ...ox...
        // 6 ........
        // 7 ........
        // 8 ........
        //
        const codeToSq = makeCodeToSq(gameBoardIndexModel1Ref.value.fileNum);
        //console.log(`DEBUG: [gameInit] codeToSq('D4')=${codeToSq('D4')}`);
        putStone(codeToSq('D4'), game1Turn.value, false);   // 第３引数：禁じ手チェックを行わない
        putStone(codeToSq('E4'), game1Turn.value, false);
        putStone(codeToSq('E5'), game1Turn.value, false);
        putStone(codeToSq('D5'), game1Turn.value, false);
    }


    /**
     * ゲームのメインループ開始
     */
    function gameLoopStart() : void {
        const update = () => {

            if (!gameBoardIndexModel1Ref?.value) {
                console.error(`ERROR: [gameLoopStart] 初期化不備： gameBoardIndexModel1Ref。`);
                return;
            }

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
                    const color: Color = game1Turn.value;   // Math.floor(Math.random() * 2) + 1;
                    let itsOk = false;
                    let count = 0;
                    while(!itsOk && count <= engine1RandomLimit) {
                        // 適当に石を置く
                        const sq = Math.floor(Math.random() * gameBoardIndexModel1Ref.value.area);
                        itsOk = putStone(sq, color, true);
                        count += 1;
                    }

                    if (!itsOk) {   // 確率的に置けなかったら、本当に置けないか確認
                        let lastSq = -1;
                        for(let sq: number=0; sq<gameBoardIndexModel1Ref.value.area; sq++) {
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
                            itsOk = putStone(lastSq, color, true);    // 必ず置けるはず
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
     * パス
     */
    function gamePass() : void {
        game1Times.value += 1;
        game1PassCount.value += 1;
        game1Turn.value = oppositeColor(game1Turn.value);
    }


    /**
     * 満局か
     */
    function gameIsFullCapacity() : boolean {
        if (!gameBoardIndexModel1Ref?.value) {
            console.error(`ERROR: [gameIsFullCapacity] 初期化不備： gameBoardIndexModel1Ref 。`);
            return false;
        }
        if (!gameBoardContentModel1Ref?.value) {
            console.error(`ERROR: [gameIsFullCapacity] 初期化不備： gameBoardContentModel1Ref 。`);
            return false;
        }

        return gameBoardIndexModel1Ref.value.area <= gameBoardContentModel1Ref.value.stoneCounts[1] + gameBoardContentModel1Ref.value.stoneCounts[2];
    }


    // ####################
    // # エクスポート関数 #
    // ####################

    // 親に公開する関数をdefineExposeで指定
    defineExpose({
        gameBoardIndexModel1Ref,
        gameBoardContentModel1Ref,
        generationMoveModel1Ref,
        game1DebugMessage,
        game1IsEnd,
        game1IsPlaying,
        game1IsPlayingPause,
        game1PassCount,
        game1StoneColorNameMap,
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
