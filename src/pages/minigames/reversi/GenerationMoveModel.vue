<template>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { ref } from 'vue';
    import type {Color, Direction} from '@/pages/minigames/reversi/spec.ts';
    import {
        // 色
        COLOR_BLACK, COLOR_WHITE, COLOR_SIZE, COLOR_EMPTY, colorToCode, oppositeColor,

        // マス
        SQ_OUT_OF_BOARD,

        // 方向
        DIRECTION_SIZE, directionToTitle,
    } from '@/pages/minigames/reversi/spec';
    import { makeSqToCode } from '@/pages/minigames/reversi/game-board-index-util';
    import { getCap, locateHoppedoverOppositeTurnStones, locateThisTurnStonesSkipped } from '@/pages/minigames/reversi/game-board-content-util';

    
    // ################
    // # オブジェクト #
    // ################

    // FIXME: Direction別にする必要があるのでは？
    const gameBoard1CanMove = ref<boolean[][][]>( // [Direction][Color][Square]
        new Array(DIRECTION_SIZE)
    );

    // ################
    // # サブルーチン #
    // ################

    function generationMoveModelInit(
        activeDirections: Direction[],
        gameBoard1Area: number,
    ) : void {
        for (const direction of activeDirections) {
            gameBoard1CanMove.value[direction] = new Array<boolean[]>(COLOR_SIZE);
            gameBoard1CanMove.value[direction][COLOR_BLACK] = new Array<boolean>(gameBoard1Area).fill(false);
            gameBoard1CanMove.value[direction][COLOR_WHITE] = new Array<boolean>(gameBoard1Area).fill(false);
        }
    }


    function canMove(
        activeDirections: Direction[],
        thisTurn: Color,
        sq: number
    ) : boolean {
        for (const direction of activeDirections) {
            if (gameBoard1CanMove.value[direction][thisTurn][sq]) {
                return true;
            }
        }

        return false;
    }


    function makeGenerationMoves(
        activeDirections: Direction[],
        activeSecondDirections: Direction[],
        thisTurn: Color,
        moveSq: number,
        fileNum: number,
        gameBoard1StoneColorArray: Color[],
        allDirectionsForeOf: ((sq: number) => number)[],
        allDirectionsBackOf: ((sq: number) => number)[],
    ) : void {

        const sqToCode = makeSqToCode(fileNum);

        // ############################
        // # 着手点に石は置けなくなる #
        // ############################

        for (const direction of activeDirections) {
            console.log(`DEBUG: [putStone] 手番＝${colorToCode(thisTurn)}　１階　＞　${directionToTitle(direction)}　＞　${sqToCode(moveSq)}へ石を置いた。`)
            gameBoard1CanMove.value[direction][thisTurn][moveSq] = false;
        }


        // ##################
        // # １階の跨いだ石 #
        // ##################

        let allDirectionsHoppedoverStones: number[][] = new Array<number[]>(DIRECTION_SIZE);
        for (const direction of activeDirections) {
            allDirectionsHoppedoverStones[direction] = new Array<number>();

            const [
                foresideHoppedoverStones,
                foresideFirstCapSq,
                foresideFirstCapColor,
                backsideHoppedoverStones,
                backsideFirstCapSq,
                backsideFirstCapColor,
            ] = movedStoneGenerateMoveOnDirection(moveSq, direction, gameBoard1StoneColorArray, thisTurn, allDirectionsForeOf, allDirectionsBackOf); // ［相手番石］を跨ぐ
            allDirectionsHoppedoverStones[direction].push(
                ...foresideHoppedoverStones,
                ...backsideHoppedoverStones,
            );

            console.log(`DEBUG: [putStone] 手番＝${colorToCode(thisTurn)}　    １階　＞　${directionToTitle(direction)}　＞　相手番石跨ぎ　＞　前方キャップは ${sqToCode(foresideFirstCapSq)} ${colorToCode(foresideFirstCapColor)}。 挟める石：${foresideHoppedoverStones.map((x)=>sqToCode(x))}`)
            if (foresideFirstCapSq != SQ_OUT_OF_BOARD && foresideFirstCapColor == COLOR_EMPTY) {
                const canMove1 = 0 < foresideHoppedoverStones.length;
                gameBoard1CanMove.value[direction][thisTurn][foresideFirstCapSq] = canMove1;   // 前方第１キャップに石を置けるか？
                console.log(`DEBUG: [putStone] 手番＝${colorToCode(thisTurn)}　        １階　＞　${directionToTitle(direction)}　＞　相手番石跨ぎ　＞　前方キャップに石 ${canMove1 ? 'を置ける' : 'は置けない'}`)
            }

            console.log(`DEBUG: [putStone] 手番＝${colorToCode(thisTurn)}　    １階　＞　${directionToTitle(direction)}　＞　相手番石跨ぎ　＞　後方キャップは ${sqToCode(backsideFirstCapSq)} ${colorToCode(backsideFirstCapColor)}。 挟める石：${backsideHoppedoverStones.map((x)=>sqToCode(x))}`)
            if (backsideFirstCapSq != SQ_OUT_OF_BOARD && backsideFirstCapColor == COLOR_EMPTY) {
                const canMove1 = 0 < backsideHoppedoverStones.length;
                gameBoard1CanMove.value[direction][thisTurn][backsideFirstCapSq] = canMove1;   // 後方第１キャップに石を置けるか？
                console.log(`DEBUG: [putStone] 手番＝${colorToCode(thisTurn)}　        １階　＞　${directionToTitle(direction)}　＞　相手番石跨ぎ　＞　後方キャップに石 ${canMove1 ? 'を置ける' : 'は置けない'}`)
            }
        }


        // ########
        // # 以降 #
        // ########

        const oppositeTurnColor1 = oppositeColor(thisTurn);

        // for (const direction of activeDirections) {

        //     //
        //     // ++++++++++++++++++++++++++++++++++++++++++
        //     // + ［ひっくり返せる石］をひっくり返します +
        //     // ++++++++++++++++++++++++++++++++++++++++++
        //     //
        //     // console.log(`DEBUG: [putStone] ひっくり返せる石をひっくり返します： ${allDirectionsStonesTargeted.map((sq)=>sqToCode(sq))}`)
        //     // for (const stoneTargetedSq of allDirectionsStonesTargeted) {
        //     //     gameBoard1StoneColorArray.value[stoneTargetedSq] = thisTurn;
        //     // }


        //     // ステップ２：　ひっくり返される各［相手番石］について：
        //     for (const stoneTargetedSq of allDirectionsHoppedoverStones[direction]) {
        //         console.log(`DEBUG: [putStone] 対象石 ${sqToCode(stoneTargetedSq)} をひっくり返せる。`)

        //         // ４方向調べたい
        //         for (const secondDirection of activeSecondDirections) {
        //             const [
        //                 foresideStonesTargeted,
        //                 foresideSecondCapSq,
        //                 foresideSecondCapColor,
        //                 backsideStonesTargeted,
        //                 backsideSecondCapSq,
        //                 backsideSecondCapColor,
        //             ] = sandwichedStoneGenerateMoveOnDirection(stoneTargetedSq, secondDirection, thisTurn, gameBoard1StoneColorArray, allDirectionsForeOf, allDirectionsBackOf);


        //             // ［手番］
        //             // NOTE: この関数を実行する前に、石はひっくりかえしておくこと。
        //             function executeThisTurnSide(
        //                 secondCapSq: number,
        //                 secondDirection: Direction,
        //             ) : void {
        //                 const [
        //                     secondCapForesideStonesTargeted,
        //                     secondCapForesideSecondCapSq,
        //                     secondCapForesideSecondCapColor,
        //                     secondCapBacksideStonesTargeted,
        //                     secondCapBacksideSecondCapSq,
        //                     secondCapBacksideSecondCapColor,
        //                 ] = thisTurnSecondCapGenerateMoveOnDirection(secondCapSq, secondDirection, thisTurn, gameBoard1StoneColorArray, allDirectionsForeOf, allDirectionsBackOf);

        //                 if (secondCapForesideSecondCapSq != SQ_OUT_OF_BOARD) {
        //                     let canMove1 =
        //                             secondCapForesideSecondCapColor == COLOR_EMPTY   // 前方のキャップが空マスで
        //                         &&  0 < secondCapForesideStonesTargeted.length; // ひっくり返る石があるなら
        //                     if (secondDirection in gameBoard1CanMove.value) {
        //                         // console.log(`DEBUG: [putStone]1     secondDirection=${secondDirection}`);
        //                         // console.log(`DEBUG: [putStone]1     gameBoard1CanMove.value[secondDirection].length=${gameBoard1CanMove.value[secondDirection].length}`);
        //                         // console.log(`DEBUG: [putStone]1     targetTurn=${targetTurn}`);
        //                         // console.log(`DEBUG: [putStone]1     gameBoard1CanMove.value[secondDirection][targetTurn].length=${gameBoard1CanMove.value[secondDirection][targetTurn].length}`);
        //                         // console.log(`DEBUG: [putStone]1     secondCapForesideSecondCapSq=${secondCapForesideSecondCapSq}`);
        //                         // console.log(`DEBUG: [putStone]1     gameBoard1CanMove.value[secondDirection][targetTurn][secondCapForesideSecondCapSq]=${gameBoard1CanMove.value[secondDirection][targetTurn][secondCapForesideSecondCapSq]}`);
        //                         // console.log(`DEBUG: [putStone]1     canMove1=${canMove1}`);
        //                         console.log(`DEBUG: [putStone]     ［手番］${colorToCode(thisTurn)} 第２${directionToTitle(secondDirection)} 前方第２キャップ=${sqToCode(secondCapForesideSecondCapSq)} ${canMove1 ? 'は置ける。' : 'は置けない。'}`);
        //                         gameBoard1CanMove.value[secondDirection][thisTurn][secondCapForesideSecondCapSq] = canMove1;
        //                     }
        //                 }

        //                 if (secondCapBacksideSecondCapSq != SQ_OUT_OF_BOARD) {
        //                     let canMove1 = 
        //                             secondCapBacksideSecondCapColor == COLOR_EMPTY // 後方のキャップが空マスで
        //                         &&  0 < secondCapBacksideStonesTargeted.length;  // ひっくり返る石があるなら
        //                     if (secondDirection in gameBoard1CanMove.value) {
        //                         // console.log(`DEBUG: [putStone]2     secondDirection=${secondDirection}`);
        //                         // console.log(`DEBUG: [putStone]2     gameBoard1CanMove.value[secondDirection].length=${gameBoard1CanMove.value[secondDirection].length}`);
        //                         // console.log(`DEBUG: [putStone]2     targetTurn=${targetTurn}`);
        //                         // console.log(`DEBUG: [putStone]2     gameBoard1CanMove.value[secondDirection][targetTurn].length=${gameBoard1CanMove.value[secondDirection][targetTurn].length}`);
        //                         // console.log(`DEBUG: [putStone]2     secondCapBacksideSecondCapSq=${secondCapBacksideSecondCapSq}`);
        //                         // console.log(`DEBUG: [putStone]2     gameBoard1CanMove.value[secondDirection][targetTurn][secondCapBacksideSecondCapSq]=${gameBoard1CanMove.value[secondDirection][targetTurn][secondCapBacksideSecondCapSq]}`);
        //                         // console.log(`DEBUG: [putStone]2     canMove1=${canMove1}`);
        //                         console.log(`DEBUG: [putStone]     ［手番］${colorToCode(thisTurn)} 第２${directionToTitle(secondDirection)} 後方第２キャップ=${sqToCode(secondCapBacksideSecondCapSq)} ${canMove1 ? 'は置ける。' : 'は置けない。'}`);
        //                         gameBoard1CanMove.value[secondDirection][thisTurn][secondCapBacksideSecondCapSq] = canMove1;
        //                     }
        //                 }
        //             }


        //             // ［相手番］
        //             // NOTE: この関数を実行する前に、石はひっくりかえしておくこと。
        //             function executeOppositeTurnSide(
        //                 secondCapSq: number,
        //                 secondDirection: Direction,
        //             ) : void {
        //                 const [
        //                     secondCapForesideStonesTargeted,
        //                     secondCapForesideSecondCapSq,
        //                     secondCapForesideSecondCapColor,
        //                     secondCapBacksideStonesTargeted,
        //                     secondCapBacksideSecondCapSq,
        //                     secondCapBacksideSecondCapColor,
        //                 ] = oppositeTurnSecondCapGenerateMoveOnDirection(secondCapSq, secondDirection, oppositeTurnColor1, gameBoard1StoneColorArray, allDirectionsForeOf, allDirectionsBackOf);

        //                 if (secondCapForesideSecondCapSq != SQ_OUT_OF_BOARD) {
        //                     let canMove1 =
        //                             secondCapForesideSecondCapColor == COLOR_EMPTY   // 前方のキャップが空マスで
        //                         &&  0 < secondCapForesideStonesTargeted.length; // ひっくり返る石があるなら
        //                     if (secondDirection in gameBoard1CanMove.value) {
        //                         // console.log(`DEBUG: [putStone]1     secondDirection=${secondDirection}`);
        //                         // console.log(`DEBUG: [putStone]1     gameBoard1CanMove.value[secondDirection].length=${gameBoard1CanMove.value[secondDirection].length}`);
        //                         // console.log(`DEBUG: [putStone]1     targetTurn=${targetTurn}`);
        //                         // console.log(`DEBUG: [putStone]1     gameBoard1CanMove.value[secondDirection][targetTurn].length=${gameBoard1CanMove.value[secondDirection][targetTurn].length}`);
        //                         // console.log(`DEBUG: [putStone]1     secondCapForesideSecondCapSq=${secondCapForesideSecondCapSq}`);
        //                         // console.log(`DEBUG: [putStone]1     gameBoard1CanMove.value[secondDirection][targetTurn][secondCapForesideSecondCapSq]=${gameBoard1CanMove.value[secondDirection][targetTurn][secondCapForesideSecondCapSq]}`);
        //                         // console.log(`DEBUG: [putStone]1     canMove1=${canMove1}`);
        //                         console.log(`DEBUG: [putStone]     ［相手番］${colorToCode(oppositeTurnColor1)} 第２${directionToTitle(secondDirection)} 前方第２キャップ=${sqToCode(secondCapForesideSecondCapSq)} ${canMove1 ? 'は置ける。' : 'は置けない。'}`);
        //                         gameBoard1CanMove.value[secondDirection][oppositeTurnColor1][secondCapForesideSecondCapSq] = canMove1;
        //                     }
        //                 }

        //                 if (secondCapBacksideSecondCapSq != SQ_OUT_OF_BOARD) {
        //                     let canMove1 = 
        //                             secondCapBacksideSecondCapColor == COLOR_EMPTY // 後方のキャップが空マスで
        //                         &&  0 < secondCapBacksideStonesTargeted.length;  // ひっくり返る石があるなら
        //                     if (secondDirection in gameBoard1CanMove.value) {
        //                         // console.log(`DEBUG: [putStone]2     secondDirection=${secondDirection}`);
        //                         // console.log(`DEBUG: [putStone]2     gameBoard1CanMove.value[secondDirection].length=${gameBoard1CanMove.value[secondDirection].length}`);
        //                         // console.log(`DEBUG: [putStone]2     targetTurn=${targetTurn}`);
        //                         // console.log(`DEBUG: [putStone]2     gameBoard1CanMove.value[secondDirection][targetTurn].length=${gameBoard1CanMove.value[secondDirection][targetTurn].length}`);
        //                         // console.log(`DEBUG: [putStone]2     secondCapBacksideSecondCapSq=${secondCapBacksideSecondCapSq}`);
        //                         // console.log(`DEBUG: [putStone]2     gameBoard1CanMove.value[secondDirection][targetTurn][secondCapBacksideSecondCapSq]=${gameBoard1CanMove.value[secondDirection][targetTurn][secondCapBacksideSecondCapSq]}`);
        //                         // console.log(`DEBUG: [putStone]2     canMove1=${canMove1}`);
        //                         console.log(`DEBUG: [putStone]     ［相手番］${colorToCode(oppositeTurnColor1)} 第２${directionToTitle(secondDirection)} 後方第２キャップ=${sqToCode(secondCapBacksideSecondCapSq)} ${canMove1 ? 'は置ける。' : 'は置けない。'}`);
        //                         gameBoard1CanMove.value[secondDirection][oppositeTurnColor1][secondCapBacksideSecondCapSq] = canMove1;
        //                     }
        //                 }
        //             }


        //             // ステップ３：　第２キャップ判定
        //             //
        //             // xooo.xxo
        //             //     ^
        //             //     xもoも置けることに注意
        //             console.log(`DEBUG: [putStone] 　　第２${directionToTitle(secondDirection)} 前方第２キャップは ${sqToCode(foresideSecondCapSq)} ${colorToCode(foresideSecondCapColor)}。 挟める石：${foresideStonesTargeted.map((x)=>sqToCode(x))}`);
        //             if (!foresideSecondCapSq) {
        //                 continue;
        //             }
        //             executeThisTurnSide(foresideSecondCapSq, secondDirection);    // foreside
        //             executeOppositeTurnSide(foresideSecondCapSq, secondDirection);

        //             console.log(`DEBUG: [putStone] 　　第２${directionToTitle(secondDirection)} 後方第２キャップは ${sqToCode(backsideSecondCapSq)} ${colorToCode(backsideSecondCapColor)}。 挟める石：${backsideStonesTargeted.map((x)=>sqToCode(x))}`);
        //             if(!backsideSecondCapSq){
        //                 continue;
        //             }
        //             executeThisTurnSide(backsideSecondCapSq, secondDirection);    // backside
        //             executeOppositeTurnSide(backsideSecondCapSq, secondDirection);
        //         }
        //     }
        // }
    }


    /**
     * 石を置いたところから見て、次に石を置けるところの検出。
     * @param moveSq 
     * @param direction 
     */
    function movedStoneGenerateMoveOnDirection (
        moveSq: number,
        direction: Direction,
        gameBoard1StoneColorArray: Color[],
        thisTurn: Color,
        allDirectionsForeOf: ((sq: number) => number)[],
        allDirectionsBackOf: ((sq: number) => number)[],
    ): [number[], number, Color, number[], number, Color] {

        const foreOf = allDirectionsForeOf[direction];
        const foreSq = foreOf(moveSq);   // ［着手点］を読み飛ばす
        const foresideHoppedoverStones: number[] = locateHoppedoverOppositeTurnStones(gameBoard1StoneColorArray, thisTurn, foreSq, foreOf)[0]; // ［相手番石］を跨ぐ
        const [foresideCapSq, foresideCapColor] = getCap(gameBoard1StoneColorArray, foreSq, foresideHoppedoverStones, foreOf);

        const backOf = allDirectionsBackOf[direction];
        const backSq = backOf(moveSq);   // ［着手点］を読み飛ばす
        const backsideHoppedoverStones: number[] = locateHoppedoverOppositeTurnStones(gameBoard1StoneColorArray, thisTurn, backSq, backOf)[0]; // ［相手番石］を跨ぐ
        const [backsideCapSq, backsideCapColor] = getCap(gameBoard1StoneColorArray, backSq, backsideHoppedoverStones, backOf);

        return [
            foresideHoppedoverStones,
            foresideCapSq,
            foresideCapColor,
            backsideHoppedoverStones,
            backsideCapSq,
            backsideCapColor,
        ];
    }


    /**
     * これからひっくり返して手番の色になる石（［挟めた石］）から見て、次に石を置けるところの検出。
     * @param sandwichedStoneSq 
     * @param direction 
     */
    function sandwichedStoneGenerateMoveOnDirection (
        sandwichedStoneSq: number,
        direction: Direction,
        thisTurn: Color,
        gameBoard1StoneColorArray: Color[],
        allDirectionsForeOf: ((sq: number) => number)[],
        allDirectionsBackOf: ((sq: number) => number)[],
    ): [number[], number, Color, number[], number, Color] {

        const foreOf = allDirectionsForeOf[direction];
        let foreSq = foreOf(sandwichedStoneSq);   // ［手番石］を読み飛ばす：
        foreSq = locateThisTurnStonesSkipped(gameBoard1StoneColorArray, thisTurn, foreSq, foreOf);  // ［手番石］を読み飛ばす
        let foresideHoppedoverStones: number[] = locateHoppedoverOppositeTurnStones(gameBoard1StoneColorArray, thisTurn, foreSq, foreOf)[0];   // ［相手番石］を跨ぐ
        const [foresideCapSq, foresideCapColor] = getCap(gameBoard1StoneColorArray, foreSq, foresideHoppedoverStones, foreOf);  // キャップを取得

        const backOf = allDirectionsBackOf[direction];
        let backSq = backOf(sandwichedStoneSq);   // ［手番石］を読み飛ばす：
        backSq = locateThisTurnStonesSkipped(gameBoard1StoneColorArray, thisTurn, backSq, backOf);  // ［手番石］を読み飛ばす
        let backsideHoppedoverStones: number[] = locateHoppedoverOppositeTurnStones(gameBoard1StoneColorArray, thisTurn, backSq, backOf)[0];   // ［相手番石］を跨ぐ
        const [backsideCapSq, backsideCapColor] = getCap(gameBoard1StoneColorArray, backSq, backsideHoppedoverStones, backOf);  // キャップを取得

        return [
            foresideHoppedoverStones,
            foresideCapSq,
            foresideCapColor,
            backsideHoppedoverStones,
            backsideCapSq,
            backsideCapColor,
        ];
    }


    /**
     * ［手番］［第２キャップ］が、次に石を置けるところかどうかの検出。
     * @param secondCapSq 
     * @param direction 
     */
    function thisTurnSecondCapGenerateMoveOnDirection (
        secondCapSq: number,
        direction: Direction,
        targetTurn: Color,
        gameBoard1StoneColorArray: Color[],
        allDirectionsForeOf: ((sq: number) => number)[],
        allDirectionsBackOf: ((sq: number) => number)[],
    ): [number[], number, Color, number[], number, Color] {

        const foreOf = allDirectionsForeOf[direction];
        let foreSq = foreOf(secondCapSq);   // ［起点］を読み飛ばす
        foreSq = locateThisTurnStonesSkipped(gameBoard1StoneColorArray, targetTurn, foreSq, foreOf);  // ［対象番石］を読み飛ばす
        let foresideHoppedoverStones: number[] = locateHoppedoverOppositeTurnStones(gameBoard1StoneColorArray, targetTurn, foreSq, foreOf)[0];   // ［相対象番石］を跨ぐ
        const [foresideCapSq, foresideCapColor] = getCap(gameBoard1StoneColorArray, foreSq, foresideHoppedoverStones, foreOf);  // キャップを取得

        const backOf = allDirectionsBackOf[direction];
        let backSq = backOf(secondCapSq);   // ［起点］を読み飛ばす
        backSq = locateThisTurnStonesSkipped(gameBoard1StoneColorArray, targetTurn, backSq, backOf);  // ［対象番石］を読み飛ばす
        let backsideHoppedoverStones: number[] = locateHoppedoverOppositeTurnStones(gameBoard1StoneColorArray, targetTurn, backSq, backOf)[0];   // ［相対象番石］を跨ぐ
        const [backsideCapSq, backsideCapColor] = getCap(gameBoard1StoneColorArray, backSq, backsideHoppedoverStones, backOf);  // キャップを取得

        return [
            foresideHoppedoverStones,
            foresideCapSq,
            foresideCapColor,
            backsideHoppedoverStones,
            backsideCapSq,
            backsideCapColor,
        ];
    }


    /**
     * ［相手番］［第２キャップ］が、次に石を置けるところかどうかの検出。
     * 
     * ........
     * ...xo...
     * ....o...
     * 
     * ........
     * ...xoX..
     * ....o...
     * 
     * ........
     * ...xxX.. TODO: ひっくり返されることで、むしろ置けるようになることも。
     * ....o...
     * 
     * ....O...
     * ...xxx..
     * ....o...
     * 
     * ....O...
     * ...xox..
     * ....o...
     * 
     * @param secondCapSq 
     * @param direction 
     */
    function oppositeTurnSecondCapGenerateMoveOnDirection (
        secondCapSq: number,
        direction: Direction,
        targetTurn: Color,
        gameBoard1StoneColorArray: Color[],
        allDirectionsForeOf: ((sq: number) => number)[],
        allDirectionsBackOf: ((sq: number) => number)[],
    ): [number[], number, Color, number[], number, Color] {
        const foreOf = allDirectionsForeOf[direction];
        let foreSq = foreOf(secondCapSq);   // ［起点］を読み飛ばす
        foreSq = locateThisTurnStonesSkipped(gameBoard1StoneColorArray, targetTurn, foreSq, foreOf);  // ［対象番石］を読み飛ばす
        let foresideHoppedoverStones: number[] = locateHoppedoverOppositeTurnStones(gameBoard1StoneColorArray, targetTurn, foreSq, foreOf)[0];   // ［相対象番石］を跨ぐ
        const [foresideCapSq, foresideCapColor] = getCap(gameBoard1StoneColorArray, foreSq, foresideHoppedoverStones, foreOf);  // キャップを取得

        const backOf = allDirectionsBackOf[direction];
        let backSq = backOf(secondCapSq);   // ［起点］を読み飛ばす
        backSq = locateThisTurnStonesSkipped(gameBoard1StoneColorArray, targetTurn, backSq, backOf);  // ［対象番石］を読み飛ばす
        let backsideHoppedoverStones: number[] = locateHoppedoverOppositeTurnStones(gameBoard1StoneColorArray, targetTurn, backSq, backOf)[0];   // ［相対象番石］を跨ぐ
        const [backsideCapSq, backsideCapColor] = getCap(gameBoard1StoneColorArray, backSq, backsideHoppedoverStones, backOf);  // キャップを取得

        return [
            foresideHoppedoverStones,
            foresideCapSq,
            foresideCapColor,
            backsideHoppedoverStones,
            backsideCapSq,
            backsideCapColor,
        ];
    }


    // ################
    // # エクスポーズ #
    // ################

    defineExpose({
        canMove,
        gameBoard1CanMove,
        generationMoveModelInit,
        makeGenerationMoves,
    });

</script>
