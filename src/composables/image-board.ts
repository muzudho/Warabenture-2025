/*
 * 像盤 
 */

// ##############
// # インポート #
// ##############

import type { ComputedRef } from 'vue';

// ++++++++++++++++++++++++++++++++++++
// + インポート　＞　インターフェース +
// ++++++++++++++++++++++++++++++++++++

import type Rectangle from '../interfaces/Rectangle';


    /**
     * マスの印字。ソース・タイルマップのタイル番号（0から始まる。文字列型）
     * @returns 該当なしのとき "-"
     */
export function createGetSourceTileSqStringByImageBoardSq(
    imageBoard1Data: ComputedRef<number[]>,
) : (imageBoardSq: number) => string
{
    return (imageBoardSq: number) => {

        if (imageBoardSq == -1) {
            return "-"; // 印字のサイズの範囲外になるところには、"-" でも表示しておく
        }

        const sourceTileSq = imageBoard1Data.value[imageBoardSq];
        return `${sourceTileSq}`;
    };
}


/**
 * 以下のようなラムダ関数を作ります：
 *      像盤のマス番号（0から始まる）を渡すと、ソースのタイルタイルマップ上の left を返す。
 */
export function createGetResourceTileLeftByImageSq(
    imageBoard1Data: ComputedRef<number[]>,
    sourceTilemapRectangles: Rectangle[],
) : (sq: number) => number
{
    return (sq: number) => {
        //console.log(`sq=${sq}`)

        if (sq == -1) {
            return 0;   // 印字のサイズの範囲外になるところには、とりあえず 0 を返す。左上のタイルが選ばれる。
        }

        const sourceTileIndex = imageBoard1Data.value[sq];
        const rectangle = sourceTilemapRectangles[sourceTileIndex];
        //console.log(`sourceTileIndex=${sourceTileIndex}`)

        try {
            if (rectangle) {
                //console.log(`rectangle["left"]=${rectangle["left"]}`)

                return rectangle["left"];
            }

            // sourceTileIndex に対応するタイルがなかったとき、仕方ないので 0 を返す。
            // 印字盤のサイズが小さくなったとき、インデックス・アクセスが範囲外エラーになる？
            return 0;

        } catch(error) {
            console.error(`ERROR: ${error} | sq=${sq}`);
            return 0;
        }
    };
}
