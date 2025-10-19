// ##############
// # インポート #
// ##############

import type { Color, Direction } from "@/pages/minigames/reversi/spec";
import {
    // 色
    COLOR_EMPTY, oppositeColor,
    // マス
    SQ_OUT_OF_BOARD,
    // 方向
    directionToTitle,
} from "@/pages/minigames/reversi/spec";


// ################
// # サブルーチン #
// ################

/**
 * 手番石を読み飛ばす
 * @param gameBoard1StoneColorArray 
 * @param thisTurn 
 * @param startSq 
 * @param nextOf 
 * @return 次のマス番号
 */
export function locateThisTurnStonesSkipped(
    gameBoard1StoneColorArray: Color[],
    thisTurn: Color,
    startSq: number,
    nextOf: (sq: number)=>number,
) : number {
    const oppositeTurnColor1: Color = oppositeColor(thisTurn); // 相手番石の色
 
    let nextSq = startSq;
    while (true) {
        if (nextSq == SQ_OUT_OF_BOARD) {    // ［盤外］に突き当たったら、処理終了
            break;
        }

        const nextColor: Color = gameBoard1StoneColorArray[nextSq];  // 隣の石の色

        if ([COLOR_EMPTY, oppositeTurnColor1].includes(nextColor)) { // ［空マス］,［相手番石］に突き当たったら終了
            break;
        }

        // ［手番石］に突き当たったら、続行
        nextSq = nextOf(nextSq);
    }

    return nextSq;
}


/**
 * ［相手番石］を跨ぐ
 * @param startSq 
 * @param nextOf 
 * @returns ［跨いだ相手番石］。着手点に近い方から順に並ぶ
 */
export function locateHoppedoverOppositeTurnStones(
    gameBoard1StoneColorArray: Color[],
    thisTurn: Color,
    startSq: number,
    nextOf: (sq: number)=>number,
) : [number[], number] {
    let hoppedoverStones: number[] = [];  // ［跨いだ相手番石］。まだ［ひっくり返せる石］かどうかは決まらない。

    let nextSq = startSq;
    while (true) {
        if (nextSq == SQ_OUT_OF_BOARD) {    // ［盤外］に突き当たったら、処理終了
            break;
        }

        const nextColor: Color = gameBoard1StoneColorArray[nextSq];  // 隣の石の色

        if ([COLOR_EMPTY, thisTurn].includes(nextColor)) { // ［空マス］,［手番石］に突き当たったら終了
            break;
        }

        // ［相手番石］に突き当たったら、続行
        hoppedoverStones.push(nextSq);
        nextSq = nextOf(nextSq);
    }

    return [hoppedoverStones, nextSq];
}


/**
 * ［ひっくり返す対象の石］のキャップから、直近の［ストーン・キャップ］を探す
 * @param gameBoard1StoneColorArray 
 * @param sandwichedCapSq 
 * @param nextOf
 */
export function locateStonesCap(
    gameBoard1StoneColorArray: Color[],
    sandwichedCapSq: number,
    nextOf: (sq: number)=>number,
) : number {
    let nextSq = sandwichedCapSq;
    while (true) {
        if (nextSq == SQ_OUT_OF_BOARD) {    // ［盤外］に突き当たったら、処理終了
            break;
        }

        const nextColor: Color = gameBoard1StoneColorArray[nextSq];  // 隣の石の色

        if (nextColor == COLOR_EMPTY) { // ［空マス］に突き当たったら終了
            break;
        }

        // ［手番石］、［相手番石］に突き当たったら、続行
        nextSq = nextOf(nextSq);
    }

    return nextSq;
}


/**
 * ［サンドイッチ石］から連続する石のマス番号を返す
 * @param gameBoard1StoneColorArray 
 * @param startSq 
 * @param nextOf
 */
export function locateStones(
    gameBoard1StoneColorArray: Color[],
    startSq: number,
    nextOf: (sq: number)=>number,
) : number[] {
    let nextSq = startSq;
    const resultLocations: number[] = [];
    while (true) {
        if (nextSq == SQ_OUT_OF_BOARD) {    // ［盤外］に突き当たったら、処理終了
            break;
        }

        const nextColor: Color = gameBoard1StoneColorArray[nextSq];  // 隣の石の色

        if (nextColor == COLOR_EMPTY) { // ［空マス］に突き当たったら終了
            break;
        }

        // ［手番石］、［相手番石］に突き当たったら、続行
        resultLocations.push(nextSq);
        nextSq = nextOf(nextSq);
    }

    return resultLocations;
}


/**
 * 石の色を返す関数を生成する。
 * @param gameBoard1StoneColorArray 盤上の石の色配列
 * @returns 石の色を返す関数
 */
export function makeGetColor(
    gameBoard1StoneColorArray: Color[],
) :
    (sq: number)=>Color
{
    /**
     * 石の色を返す。
     * @param sq マス番号
     * @return 石の色
     */
    return (sq: number) : Color => {
        if (sq == SQ_OUT_OF_BOARD) {    // ［盤外］に突き当たったら、処理終了
            return COLOR_EMPTY;
        }

        return gameBoard1StoneColorArray[sq];  // 隣の石の色
    };
}


export function getLastSq(
    stones: number[],
) : number {
    if (stones.length == 0) {
        return SQ_OUT_OF_BOARD;
    }

    return stones[stones.length - 1];   // 跨いだ石の最後
}


/**
 * 
 * @param gameBoard1StoneColorArray 
 * @param startSq 起点マス
 * @param stones 跨いだ石
 * @param nextOf 
 * @returns 
 */
export function getCap(
    gameBoard1StoneColorArray: Color[],
    startSq: number,
    stones: number[],
    nextOf: (sq: number)=>number,
) : [number, Color] {
    let capSq: number;

    // 跨いだ石が無い場合、起点の次のマスがキャップ
    if (stones.length == 0) {
        capSq = nextOf(startSq); // 起点の次のマスがキャップ
    } else {
        capSq = nextOf(getLastSq(stones));   // 跨いだ石の最後の次へ
    }

    if (capSq == SQ_OUT_OF_BOARD) {    // ［盤外］に突き当たったら、処理終了
        return [SQ_OUT_OF_BOARD, COLOR_EMPTY];
    }
    
    const capColor: Color = gameBoard1StoneColorArray[capSq];  // 隣の石の色
    return [capSq, capColor];
}


/**
 * ［ひっくり返す対象の石］のマス番号を取得
 */
export function locateSandwichedStones(
    gameBoard1StoneColorArray: Color[],
    thisTurn: Color,
    foreOf: (sq: number)=>number,
    backOf: (sq: number)=>number,
    sqToCode: (sq: number)=>string,
    startSq: number,
    direction: Direction,
) : [number[], number, number] {
    //console.log(`DEBUG: [locateSandwichedStones] direction=${directionToTitle(direction)}`);

    let [foresideHoppedoverStones, foresideNextSq] = locateHoppedoverOppositeTurnStones(gameBoard1StoneColorArray, thisTurn, foreOf(startSq), foreOf);
    if (foresideNextSq == SQ_OUT_OF_BOARD || gameBoard1StoneColorArray[foresideNextSq] == COLOR_EMPTY) {
        foresideHoppedoverStones.length = 0;    // ひっくり返せる石はない
    }
    let foresideSandwichedCapSq: number;
    if (foresideHoppedoverStones.length == 0) {
        foresideSandwichedCapSq = startSq;
    } else {
        foresideSandwichedCapSq = backOf(getLastSq(foresideHoppedoverStones)); // 跨いだ石の最後の次へ
    }
    console.log(`DEBUG: [locateSandwichedStones] ${sqToCode(startSq)}　から見て　${directionToTitle(direction)}の前方　のサンドイッチ・キャップ　${sqToCode(foresideSandwichedCapSq)}　挟んだ石＝${foresideHoppedoverStones.map((sq)=> sqToCode(sq)).join(',')}　長さ＝${foresideHoppedoverStones.length}`);

    let [backsideHoppedoverStones, backsideNextSq] = locateHoppedoverOppositeTurnStones(gameBoard1StoneColorArray, thisTurn, backOf(startSq), backOf);
    if (backsideNextSq == SQ_OUT_OF_BOARD || gameBoard1StoneColorArray[backsideNextSq] == COLOR_EMPTY) {
        backsideHoppedoverStones.length = 0;    // ひっくり返せる石はない
    }
    let backsideSandwichedCapSq: number;
    if (backsideHoppedoverStones.length == 0) {
        backsideSandwichedCapSq = startSq;
    } else {
        backsideSandwichedCapSq = backOf(getLastSq(backsideHoppedoverStones)); // 跨いだ石の最後の次へ
    }
    console.log(`DEBUG: [locateSandwichedStones] ${sqToCode(startSq)}　から見て　${directionToTitle(direction)}の後方　のサンドイッチ・キャップ　${sqToCode(backsideSandwichedCapSq)}　挟んだ石＝${backsideHoppedoverStones.map((sq)=> sqToCode(sq)).join(',')}　長さ＝${backsideHoppedoverStones.length}`);

    return [[
        ...foresideHoppedoverStones,
        ...backsideHoppedoverStones,
    ],
    foresideSandwichedCapSq,    // サンドイッチ・キャップ（前方）
    backsideSandwichedCapSq];   // サンドイッチ・キャップ（後方）
}


export function getColorList(
    gameBoard1StoneColorArray: Color[],
    extendStones: number[],
) : Color[] {
    const colorList: Color[] = [];
    for (const sq of extendStones) {
        const color: Color = gameBoard1StoneColorArray[sq];
        if (color != colorList[colorList.length - 1])  { // 直前の色と違うなら追加
            colorList.push(color);
        }
    }
    return colorList;
}
