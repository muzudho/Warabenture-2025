// ##############
// # インポート #
// ##############

import { SQ_OUT_OF_BOARD } from './spec';


// ################
// # オブジェクト #
// ################

export const gameBoard1FileNameArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];


// ################
// # サブルーチン #
// ################

export function makeSqToCode(
    fileNum: number,
) :
    (sq: number)=>string
{
    /**
     * sq を符号に変換。一致しなければ '-'
     * @param sq
     */
    return (sq: number) => {
        if (sq == SQ_OUT_OF_BOARD) {
            return '-';
        }
        const file = sq % fileNum;
        const rank = Math.floor(sq / fileNum);
        const code = `${gameBoard1FileNameArray[file]}${rank+1}`;
        //console.log(`DEBUG: [sqToCode] sq=${sq} gameBoard1FileNum.value=${gameBoard1FileNum.value} file=${file} rank=${rank} gameBoard1RankNum.value=${gameBoard1RankNum.value} code=${code}`);
        return code;
    };
}

// /**
//  * sq を符号に変換
//  * @param sq 
//  */
// function sqToCode(sq: number) : string {
//     const file = sq % gameBoard1FileNum.value;
//     const rank = Math.floor(sq / gameBoard1FileNum.value);
//     const code = `${gameBoard1FileNameArray[file]}${rank+1}`;
//     //console.log(`DEBUG: [sqToCode] sq=${sq} gameBoard1FileNum.value=${gameBoard1FileNum.value} file=${file} rank=${rank} gameBoard1RankNum.value=${gameBoard1RankNum.value} code=${code}`);
//     return code;
// }


/**
 * 東側のマス番号を返す関数を生成する。
 * @param fileNum 盤の列数
 * @returns (sq: number) : number
 */
export function makeEastOf(
    fileNum: number
) :
    (sq: number) => number
{
    /**
     * 東側のマス番号。
     * @param sq 
     * @returns 該当がなければ SQ_OUT_OF_BOARD
     */
    return (sq: number) : number => {
        if (sq == SQ_OUT_OF_BOARD) {
            return SQ_OUT_OF_BOARD;
        }

        const eastSq = sq + 1;
        if (eastSq % fileNum == 0) {   // 世界一周したら
            return SQ_OUT_OF_BOARD;
        }

        return eastSq;
    };
}


/**
 * 西側のマス番号を返す関数を生成する。
 * @param fileNum 盤の列数
 * @returns (sq: number) : number
 */
export function makeWestOf(
    fileNum: number
) :
    (sq: number) => number
{
    /**
     * 西側のマス番号。
     * @param sq 
     * @returns 該当がなければ SQ_OUT_OF_BOARD
     */
    return (sq: number) : number => {
        if (sq == SQ_OUT_OF_BOARD) {
            return SQ_OUT_OF_BOARD;
        }

        const westSq = sq - 1;
        if (westSq % fileNum == fileNum - 1) {  // 世界一周したら
            return SQ_OUT_OF_BOARD;
        }

        return westSq;
    };
}


/**
 * 南側のマス番号を返す関数を生成する。
 * @param fileNum 盤の列数
 * @param area 盤のマス数
 * @returns (sq: number) : number
 */
export function makeSouthOf(
    fileNum: number,
    area: number,
) :
    (sq: number) => number
{
    /**
     * 南側のマス番号。
     * @param sq 
     * @returns 該当がなければ SQ_OUT_OF_BOARD
     */
    return (sq: number) : number => {
        if (sq == SQ_OUT_OF_BOARD) {
            return SQ_OUT_OF_BOARD;
        }

        const southSq = sq + fileNum;
        if (area <= southSq) {  // 盤を飛び出たら
            return SQ_OUT_OF_BOARD;
        }

        return southSq;
    };
}


/**
 * 北側のマス番号を返す関数を生成する。
 * @param fileNum 盤の列数
 * @returns (sq: number) : number
 */
export function makeNorthOf(
    fileNum: number
) :
    (sq: number) => number
{
    /**
     * 北側のマス番号。
     * @param sq 
     * @returns 該当がなければ SQ_OUT_OF_BOARD
     */
    return (sq: number) : number => {
        if (sq == SQ_OUT_OF_BOARD) {
            return SQ_OUT_OF_BOARD;
        }

        const northSq = sq - fileNum;
        if (northSq < 0) {  // 盤を飛び出たら
            return SQ_OUT_OF_BOARD;
        }

        return northSq;
    };
}


/**
 * 北東側のマス番号を返す関数を生成する。
 * @param fileNum 盤の列数
 * @returns (sq: number) => number
 */
export function makeNortheastOf(
    fileNum: number
) :
    (sq: number) => number
{
    /**
     * 北東側のマス番号。
     * @param sq 
     * @returns 該当がなければ SQ_OUT_OF_BOARD
     */
    return (sq: number) : number => {
        if (sq == SQ_OUT_OF_BOARD) {
            return SQ_OUT_OF_BOARD;
        }

        const northeastSq = sq - fileNum + 1;
        if (
            northeastSq < 0 // 盤を飛び出たら
            || northeastSq % fileNum == 0    // 世界一周したら
        ) {  
            return SQ_OUT_OF_BOARD;
        }

        return northeastSq;
    };
}


/**
 * 南西側のマス番号を返す関数を生成する。
 * @param fileNum 盤の列数
 * @param area 盤のマス数
 * @returns (sq: number) => number
 */
export function makeSouthwestOf(
    fileNum: number,
    area: number
) :
    (sq: number) => number
{
    /**
     * 南西側のマス番号。
     * @param sq 
     * @returns 該当がなければ SQ_OUT_OF_BOARD
     */
    return (sq: number) : number => {
        if (sq == SQ_OUT_OF_BOARD) {
            return SQ_OUT_OF_BOARD;
        }

        const southwestSq = sq + fileNum - 1;
        if (
            area <= southwestSq // 盤を飛び出たら
            || southwestSq % fileNum == fileNum - 1 // 世界一周したら
        ) { 
            return SQ_OUT_OF_BOARD;
        }

        return southwestSq;
    };
}


/**
 * 南東側のマス番号を返す関数を生成する。
 * @param fileNum 盤の列数
 * @param area 盤のマス数
 * @returns (sq: number) => number
 */
export function makeSoutheastOf(
    fileNum: number,
    area: number
) :
    (sq: number) => number
{
    /**
     * 南東側のマス番号。
     * @param sq 
     * @returns 該当がなければ SQ_OUT_OF_BOARD
     */
    return (sq: number) : number => {
        if (sq == SQ_OUT_OF_BOARD) {
            return SQ_OUT_OF_BOARD;
        }

        const southeastSq = sq + fileNum + 1;
        if (
            southeastSq % fileNum == 0  // 世界一周したら
            || area <= southeastSq  // 盤を飛び出たら
        ) {   
            return SQ_OUT_OF_BOARD;
        }

        return southeastSq;
    };
}


/**
 * 北西側のマス番号を返す関数を生成する。
 * @param fileNum 盤の列数
 * @param area 盤のマス数
 * @returns (sq: number) => number
 */
export function makeNorthwestOf(
    fileNum: number
) :
    (sq: number) => number
{
    /**
     * 北西側のマス番号。
     * @param sq 
     * @returns 該当がなければ SQ_OUT_OF_BOARD
     */
    return (sq: number) : number => {
        if (sq == SQ_OUT_OF_BOARD) {
            return SQ_OUT_OF_BOARD;
        }

        const northwestSq = sq - fileNum - 1;
        if (
            northwestSq % fileNum == fileNum - 1    // 世界一周したら
            || northwestSq < 0  // 盤を飛び出たら
        ) { 
            return SQ_OUT_OF_BOARD;
        }

        return northwestSq;
    };
}
