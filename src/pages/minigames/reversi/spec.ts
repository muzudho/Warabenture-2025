// ################
// # オブジェクト #
// ################

// ++++++++++++++++++++++++++++++
// + オブジェクト　＞　マス番号 +
// ++++++++++++++++++++++++++++++

export const SQ_OUT_OF_BOARD = -1;


/**
 * 符号を sq に変換する関数を返します。
 * @param boardFileNum 盤の筋の数 
 */
export function makeCodeToSq(
    boardFileNum: number
) :
    (code: string) => number
{
    return (code: string) => {
        const match = code.match(/^([A-Za-z])(\d{1,2})$/);
        if (!match) {
                return SQ_OUT_OF_BOARD; // 入力が条件に合わない場合
        }
        const letter = match[1];    // アルファベット部分
        const rank = parseInt(match[2], 10);    // 数値部分（文字列）

        function getFile(letter: string) : number {
            const fileMap = {
                'A': 0,
                'B': 1,
                'C': 2,
                'D': 3,
                'E': 4,
                'F': 5,
                'G': 6,
                'H': 7,
                'I': 8,
            } as Record<string, number>;
            return fileMap[letter];
        }

        const file = getFile(letter);
        return (rank - 1) * boardFileNum + file;
    };
}

// ++++++++++++++++++++++++
// + オブジェクト　＞　路 +
// ++++++++++++++++++++++++

export const WAY_EMPTY = 0;
export const WAY_EAST = 1;
export const WAY_WEST = 2;
export const WAY_SOUTH = 3;
export const WAY_NORTH = 4;
export const WAT_NORTHEAST = 5;
export const WAY_SOUTHWEST = 6;
export const WAY_SOUTHEAST = 7;
export const WAY_NORTHWEST = 8;
export type Way = typeof WAY_EMPTY
    | typeof WAY_EAST
    | typeof WAY_WEST
    | typeof WAY_SOUTH
    | typeof WAY_NORTH
    | typeof WAT_NORTHEAST
    | typeof WAY_SOUTHWEST
    | typeof WAY_SOUTHEAST
    | typeof WAY_NORTHWEST
    ;
export const oppositeWays = [WAY_EMPTY, WAY_WEST, WAY_EAST, WAY_NORTH, WAY_SOUTH, WAY_SOUTHWEST, WAT_NORTHEAST, WAY_NORTHWEST, WAY_SOUTHEAST] as Way[];    // 反対方向

// ++++++++++++++++++++++++++
// + オブジェクト　＞　方向 +
// ++++++++++++++++++++++++++

export const DIRECTION_EMPTY = 0;
export const DIRECTION_HORIZONTAL = 1;
export const DIRECTION_VERTICAL = 2;
export const DIRECTION_BAROQUE_DIAGONAL = 3;
export const DIRECTION_SINISTER_DIAGONAL = 4;
export const DIRECTION_SIZE = 5;
export type Direction = typeof DIRECTION_EMPTY
    | typeof DIRECTION_HORIZONTAL
    | typeof DIRECTION_VERTICAL
    | typeof DIRECTION_BAROQUE_DIAGONAL
    | typeof DIRECTION_SINISTER_DIAGONAL
    ;
export const DIRECTION_TITLES = {    // 表示名
    [DIRECTION_EMPTY]: '空っぽ',
    [DIRECTION_HORIZONTAL]: '水平',
    [DIRECTION_VERTICAL]: '垂直',
    [DIRECTION_BAROQUE_DIAGONAL]: '右肩上',
    [DIRECTION_SINISTER_DIAGONAL]: '右肩下',
};


export function directionToTitle(direction: Direction) : string {
    if (!(direction in DIRECTION_TITLES)) {
        return '範囲外';
    }
    return DIRECTION_TITLES[direction];
}


// ライブラリー利用者側で定義すること：
// export const activeDirections = [
//     DIRECTION_HORIZONTAL,
//     DIRECTION_VERTICAL,
//     DIRECTION_BAROQUE_DIAGONAL,
//     DIRECTION_SINISTER_DIAGONAL,
// ] as Direction[];

export const waysOnDirection = [
    [WAY_EMPTY, WAY_EMPTY],
    [WAY_EAST, WAY_WEST],
    [WAY_SOUTH, WAY_NORTH],
    [WAT_NORTHEAST, WAY_SOUTHWEST],
    [WAY_SOUTHEAST, WAY_NORTHWEST],
] as Way[][];

// ++++++++++++++++++++++++
// + オブジェクト　＞　色 +
// ++++++++++++++++++++++++

export const COLOR_EMPTY = 0;
export const COLOR_BLACK = 1;
export const COLOR_WHITE = 2;
export const COLOR_SIZE = 3;
export type Color =
      typeof COLOR_EMPTY
    | typeof COLOR_BLACK
    | typeof COLOR_WHITE
    ;
const colorToCode1 = {
    [COLOR_EMPTY]: '.',
    [COLOR_BLACK]: 'x',
    [COLOR_WHITE]: 'o',
} as Record<Color, string>;


/**
 * 相手の石の色に変更
 * @param color 自分の石の色
 */
export function oppositeColor(color: Color) : Color {
    return (color % 2 + 1) as Color;    // 1 なら 2 に、2 なら 1 に
}


export function colorToCode(color: Color) : string {
    return colorToCode1[color];
}
