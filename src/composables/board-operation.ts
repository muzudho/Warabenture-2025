// ##############
// # インポート #
// ##############

import { computed } from "vue";

// ++++++++++++++++++
// + コンポーザブル +
// ++++++++++++++++++

import { euclideanMod, getIndexWhenAddUpFileAndRankOnPeriodicTable } from "./periodic-table-operation"


// ################
// # ライブラリー #
// ################

/**
 * 変換
 * @param index マス番号
 * @returns [筋番号, 段番号]
 */
export function getFileAndRankFromIndex(index: number, width: number) : [number, number] {
    // if (!Number.isInteger(index)) { throw new Error(`Assertion failed: "index" must be an integer, got ${index}`); }
    // if (!Number.isInteger(width)) { throw new Error(`Assertion failed: "width" must be an integer, got ${width}`); }

    const file = index % width;
    const rank = Math.floor(index / width);
    return [file, rank];
}


/**
 * 
 * @param file 
 * @param rank 
 * @param width 
 * @returns 
 */
export function getIndexFromFileAndRank(file: number, rank: number, width: number) : number {
    // if (!Number.isInteger(file)) { throw new Error(`Assertion failed: "file" must be an integer, got ${file}`); }
    // if (!Number.isInteger(rank)) { throw new Error(`Assertion failed: "rank" must be an integer, got ${rank}`); }
    // if (!Number.isInteger(width)) { throw new Error(`Assertion failed: "width" must be an integer, got ${width}`); }

    return rank * width + file;
}


/**
 * 見た目のマスのインデックス（固定インデックス）を取得します。
 */
export const getFixedSquareIndexFromTileIndex = computed<
    (
        tileIndex: number,
        board1SquareWidth: number,
        board1SquareHeight: number,
        board1FileNum: number,
        board1RankNum: number,
        printing1Left: number,
        printing1Top: number,
    ) => number
>(() => {
    return (
        tileIndex: number,
        board1SquareWidth: number,
        board1SquareHeight: number,
        board1FileNum: number,
        board1RankNum: number,
        printing1Left: number,
        printing1Top: number,
    ) => {
        // if (!Number.isInteger(tileIndex)) { throw new Error(`Assertion failed: "tileIndex" must be an integer, got ${tileIndex}`); }
        // if (!Number.isInteger(board1SquareWidth)) { throw new Error(`Assertion failed: "board1SquareWidth" must be an integer, got ${board1SquareWidth}`); }
        // if (!Number.isInteger(board1SquareHeight)) { throw new Error(`Assertion failed: "board1SquareHeight" must be an integer, got ${board1SquareHeight}`); }
        // if (!Number.isInteger(board1FileNum)) { throw new Error(`Assertion failed: "board1FileNum" must be an integer, got ${board1FileNum}`); }
        // if (!Number.isInteger(board1RankNum)) { throw new Error(`Assertion failed: "board1RankNum" must be an integer, got ${board1RankNum}`); }
        // if (!Number.isInteger(printing1Left)) { throw new Error(`Assertion failed: "printing1Left" must be an integer, got ${printing1Left}`); }
        // if (!Number.isInteger(printing1Top)) { throw new Error(`Assertion failed: "printing1Top" must be an integer, got ${printing1Top}`); }

        const fixedSquareIndex = getIndexWhenAddUpFileAndRankOnPeriodicTable(
            tileIndex,
            board1FileNum,
            board1RankNum,
            Math.floor(printing1Left / board1SquareWidth),
            Math.floor(printing1Top / board1SquareHeight),
        );
        // if (!Number.isInteger(fixedSquareIndex)) { throw new Error(`Assertion failed: "fixedSquareIndex" must be an integer, got ${fixedSquareIndex}`); }

        return fixedSquareIndex;
    };
});


/**
 * 印字盤のマスのインデックスを取得します。
 * @returns 範囲外なら -1 を返します。
 */
export const getPrintingSquareIndexFromTileIndexOLD = computed<
    (
        fixedSquareIndex: number,
        board1FileNum: number,
        printing1IsLooping: boolean,
        printing1FileNum: number,
        printing1RankNum: number,
        offsetFile: number,
        offsetRank: number,
    ) => number
>(() => {
    return (
        fixedSquareIndex: number,
        board1FileNum: number,
        printing1IsLooping: boolean,
        printing1FileNum: number,
        printing1RankNum: number,
        offsetFile: number,
        offsetRank: number,
    ) => {
        // if (!Number.isInteger(fixedSquareIndex)) { throw new Error(`Assertion failed: "fixedSquareIndex" must be an integer, got ${fixedSquareIndex}`); }
        // if (!Number.isInteger(board1FileNum)) { throw new Error(`Assertion failed: "board1FileNum" must be an integer, got ${board1FileNum}`); }
        // if (!Number.isInteger(printing1FileNum)) { throw new Error(`Assertion failed: "printing1FileNum" must be an integer, got ${printing1FileNum}`); }
        // if (!Number.isInteger(printing1RankNum)) { throw new Error(`Assertion failed: "printing1RankNum" must be an integer, got ${printing1RankNum}`); }
        // if (!Number.isInteger(offsetFile)) { throw new Error(`Assertion failed: "offsetFile" must be an integer, got ${offsetFile}`); }
        // if (!Number.isInteger(offsetRank)) { throw new Error(`Assertion failed: "offsetRank" must be an integer, got ${offsetRank}`); }

        let [fixedSquareFile, fixedSquareRank] = getFileAndRankFromIndex(fixedSquareIndex, board1FileNum);

        return getPrintingIndexFromFixedSquareIndex(  // 範囲外なら -1 を返します。
            fixedSquareIndex,
            fixedSquareFile + offsetFile,
            fixedSquareRank + offsetRank,
            board1FileNum,
            printing1FileNum,
            printing1RankNum,
            printing1IsLooping);
    };
});


/**
 * 見た目のマスのインデックス（固定インデックス）を、サブ印字表インデックスへ変換します。
 * @param fixedSquareIndex 
 * @returns 整数。該当なしのとき -1
 */
export function getPrintingIndexFromFixedSquareIndex(
    fixedSquareIndex: number,
    offsetFile: number,
    offsetRank: number,
    width: number,
    printing1FileNum: number,
    printing1RankNum: number,
    printing1IsLooping: boolean
) : number {
    // if (!Number.isInteger(fixedSquareIndex)) { throw new Error(`Assertion failed: "fixedSquareIndex" must be an integer, got ${fixedSquareIndex}`); }
    // if (!Number.isInteger(offsetFile)) { throw new Error(`Assertion failed: "offsetFile" must be an integer, got ${offsetFile}`); }
    // if (!Number.isInteger(offsetRank)) { throw new Error(`Assertion failed: "offsetRank" must be an integer, got ${offsetRank}`); }
    // if (!Number.isInteger(width)) { throw new Error(`Assertion failed: "width" must be an integer, got ${width}`); }
    // if (!Number.isInteger(printing1FileNum)) { throw new Error(`Assertion failed: "printing1FileNum" must be an integer, got ${printing1FileNum}`); }
    // if (!Number.isInteger(printing1RankNum)) { throw new Error(`Assertion failed: "printing1RankNum" must be an integer, got ${printing1RankNum}`); }

    let [squareFile, squareRank] = getFileAndRankFromIndex(fixedSquareIndex, width);

    // 盤上の筋、段を、サブ印字表の筋、段へ変換：
    let printingFile = squareFile + offsetFile;
    let printingRank = squareRank + offsetRank;

    if (printing1IsLooping) {
        // 端でループする
        printingFile = euclideanMod(printingFile, printing1FileNum);
        printingRank = euclideanMod(printingRank, printing1RankNum);
    } else {
        // 印字のサイズの範囲外になるところには、"-" でも表示しておく
        if (printingFile < 0 || printing1FileNum <= printingFile || printingRank < 0 || printing1RankNum <= printingRank) {
            return -1;
        }
    }

    const printingIndex = getIndexFromFileAndRank(printingFile, printingRank, printing1FileNum);
    return printingIndex;
}


export function wrapAround(
    homeLeft: number,
    homeTop: number,
    printingLeftDelta: number,
    printingTopDelta: number,
    boardWidthPixels: number,
    boardHeightPixels: number,
) : [number, number] {
    // if (!Number.isInteger(homeLeft)) { throw new Error(`Assertion failed: "homeLeft" must be an integer, got ${homeLeft}`); }
    // if (!Number.isInteger(homeTop)) { throw new Error(`Assertion failed: "homeTop" must be an integer, got ${homeTop}`); }
    // if (!Number.isInteger(printingLeftDelta)) { throw new Error(`Assertion failed: "printingLeftDelta" must be an integer, got ${printingLeftDelta}`); }
    // if (!Number.isInteger(printingTopDelta)) { throw new Error(`Assertion failed: "printingTopDelta" must be an integer, got ${printingTopDelta}`); }
    // if (!Number.isInteger(boardWidthPixels)) { throw new Error(`Assertion failed: "boardWidthPixels" must be an integer, got ${boardWidthPixels}`); }
    // if (!Number.isInteger(boardHeightPixels)) { throw new Error(`Assertion failed: "boardHeightPixels" must be an integer, got ${boardHeightPixels}`); }

    // NOTE: ［ラップアラウンド］するだけなら、［剰余］を使えばいける。
    // 盤の左端列を、右端列へ移動させる。
    const offsetLeftLoop = euclideanMod(homeLeft + printingLeftDelta, boardWidthPixels) - homeLeft;
    const offsetTopLoop = euclideanMod(homeTop + printingTopDelta, boardHeightPixels) - homeTop;

    return [offsetLeftLoop, offsetTopLoop];
}
