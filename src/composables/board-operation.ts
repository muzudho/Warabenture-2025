// ##############
// # インポート #
// ##############

import type { Ref } from "vue";

// ++++++++++++++++++++++++++++++
// + インポート　＞　互換性対応 +
// ++++++++++++++++++++++++++++++

import type { CompatibleStyleValue }  from '../compatibles/compatible-style-value';

// ++++++++++++++++++
// + コンポーザブル +
// ++++++++++++++++++

import { euclideanMod, getIndexWhenAddUpFileAndRankOnPeriodicTable } from "./periodic-table-operation"


// ################
// # サブルーチン #
// ################

/**
 * 見た目のマスのインデックス（固定インデックス）を取得します。
 */
export function createGetFixedTileSqFromTileSq(
    tileBoard1TileWidth: number,
    tileBoard1TileHeight: number,
    board1FileNum: Ref<number>,
    board1RankNum: Ref<number>,
    printing1Left: Ref<number>,
    printing1Top: Ref<number>,
) : (
    tileSq: number,
) => number
{
    return (
        tileSq: number,
    ) => {
        // if (!Number.isInteger(tileIndex)) { throw new Error(`Assertion failed: "tileIndex" must be an integer, got ${tileIndex}`); }
        // if (!Number.isInteger(tileBoard1TileWidth)) { throw new Error(`Assertion failed: "tileBoard1TileWidth" must be an integer, got ${tileBoard1TileWidth}`); }
        // if (!Number.isInteger(tileBoard1TileHeight)) { throw new Error(`Assertion failed: "tileBoard1TileHeight" must be an integer, got ${tileBoard1TileHeight}`); }
        // if (!Number.isInteger(board1FileNum)) { throw new Error(`Assertion failed: "board1FileNum" must be an integer, got ${board1FileNum}`); }
        // if (!Number.isInteger(board1RankNum)) { throw new Error(`Assertion failed: "board1RankNum" must be an integer, got ${board1RankNum}`); }
        // if (!Number.isInteger(printing1Left)) { throw new Error(`Assertion failed: "printing1Left" must be an integer, got ${printing1Left}`); }
        // if (!Number.isInteger(printing1Top)) { throw new Error(`Assertion failed: "printing1Top" must be an integer, got ${printing1Top}`); }

        const fixedTileSq = getIndexWhenAddUpFileAndRankOnPeriodicTable(
            tileSq,
            board1FileNum.value,
            board1RankNum.value,
            Math.floor(printing1Left.value / tileBoard1TileWidth),
            Math.floor(printing1Top.value / tileBoard1TileHeight),
        );
        // if (!Number.isInteger(fixedSquareIndex)) { throw new Error(`Assertion failed: "fixedSquareIndex" must be an integer, got ${fixedSquareIndex}`); }

        return fixedTileSq;
    };
}


/**
 * 見た目のマスのインデックス（固定インデックス）を、サブ印字表インデックスへ変換します。
 * @param fixedTileSq 
 * @returns 整数。該当なしのとき -1
 */
export function createGetImageSqByFixedTileSq(
    tileWidth: number,
    tileHeight: number,
    tileFileNum: Ref<number>,
    imageLeft: Ref<number>,
    imageTop: Ref<number>,
    imageFileNum: Ref<number>,
    imageRankNum: Ref<number>,
    imageIsLooping: Ref<boolean>,
) : (
    fixedTileSq: number,
) => number
{
    return (fixedTileSq: number) =>
    {
        // if (!Number.isInteger(fixedSquareIndex)) { throw new Error(`Assertion failed: "fixedSquareIndex" must be an integer, got ${fixedSquareIndex}`); }
        // if (!Number.isInteger(offsetFile)) { throw new Error(`Assertion failed: "offsetFile" must be an integer, got ${offsetFile}`); }
        // if (!Number.isInteger(offsetRank)) { throw new Error(`Assertion failed: "offsetRank" must be an integer, got ${offsetRank}`); }
        // if (!Number.isInteger(width)) { throw new Error(`Assertion failed: "width" must be an integer, got ${width}`); }
        // if (!Number.isInteger(printing1FileNum)) { throw new Error(`Assertion failed: "printing1FileNum" must be an integer, got ${printing1FileNum}`); }
        // if (!Number.isInteger(printing1RankNum)) { throw new Error(`Assertion failed: "printing1RankNum" must be an integer, got ${printing1RankNum}`); }

        const offsetImageFile: number = -Math.floor(imageLeft.value / tileWidth);
        const offsetImageRank: number = -Math.floor(imageTop.value / tileHeight);

        let [tileFile, tileRank] = getFileAndRankFromIndex(fixedTileSq, tileFileNum.value);

        // タイルの筋、段を、像の筋、段へ変換：
        let imageFile = tileFile + offsetImageFile;
        let imageRank = tileRank + offsetImageRank;

        if (imageIsLooping) {
            // 端でループする
            imageFile = euclideanMod(imageFile, imageFileNum.value);
            imageRank = euclideanMod(imageRank, imageRankNum.value);
        } else {
            // 印字のサイズの範囲外になるところには、"-" でも表示しておく
            if (imageFile < 0 || imageFileNum.value <= imageFile || imageRank < 0 || imageRankNum.value <= imageRank) {
                return -1;
            }
        }

        const imageSq = getIndexFromFileAndRank(imageFile, imageRank, imageFileNum.value);
        return imageSq;
    };
}


export function createGetTileStyleByTileSq(
    tileBoard1TileWidth: number,
    tileBoard1TileHeight: number,
    board1FileNum: Ref<number>,
    board1RankNum: Ref<number>,
    printing1Left: Ref<number>,
    printing1Top: Ref<number>,
) : (tileIndex:number)=>CompatibleStyleValue
{
    return (tileIndex:number)=>{
        // if (!Number.isInteger(tileIndex)) { throw new Error(`Assertion failed: "tileIndex" must be an integer, got ${tileIndex}`); }

        // プレイヤーが初期位置にいる場合の、マスの位置。
        const [tileFile, tileRank] = getFileAndRankFromIndex(tileIndex, board1FileNum.value);
        const homeLeft = tileFile * tileBoard1TileWidth;
        const homeTop = tileRank * tileBoard1TileHeight;

        const [offsetLeftLoop, offsetTopLoop] = wrapAround(
            homeLeft,
            homeTop,
            printing1Left.value,
            printing1Top.value,
            board1FileNum.value * tileBoard1TileWidth,
            board1RankNum.value * tileBoard1TileHeight,
        );

        return {
            left: `${homeLeft + offsetLeftLoop}px`,
            top: `${homeTop + offsetTopLoop}px`,
            width: `${tileBoard1TileWidth}px`,
            height: `${tileBoard1TileHeight}px`,
        };
    };
}

// +++++++++++++++++++++++++++++++++++
// + サブルーチン　＞　プライベート　+
// +++++++++++++++++++++++++++++++++++

/**
 * 変換
 * @param index マス番号
 * @returns [筋番号, 段番号]
 */
function getFileAndRankFromIndex(index: number, width: number) : [number, number] {
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
function getIndexFromFileAndRank(file: number, rank: number, width: number) : number {
    // if (!Number.isInteger(file)) { throw new Error(`Assertion failed: "file" must be an integer, got ${file}`); }
    // if (!Number.isInteger(rank)) { throw new Error(`Assertion failed: "rank" must be an integer, got ${rank}`); }
    // if (!Number.isInteger(width)) { throw new Error(`Assertion failed: "width" must be an integer, got ${width}`); }

    return rank * width + file;
}


function wrapAround(
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
