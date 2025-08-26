/**
 * ［ユークリッド剰余］をします。
 * 
 * NOTE: 負の剰余は数学の定義では［ユークリッド剰余］と、［トランケート剰余］の２種類あって、プログラム言語ごとにどっちを使ってるか違うから注意。
 * TypeScript では［トランケート剰余］なので、［ユークリッド剰余］を使いたいときはこれを使う。
 * 
 * トランケート剰余なら：
 *       5 % 3 = 2
 *       2 % 3 = 2
 *      -1 % 3 = -1  // ゼロに近い方にトランケート（切り捨て）され、正の数からの連続性が途切れてしまう。
 * 
 * ユークリッド剰余なら：
 *       5 % 3 = 2
 *       2 % 3 = 2
 *      -1 % 3 = 2  // 正の数からの連続性を保つ。
 */
export function euclideanMod(a: number, b: number): number {
    return ((a % b) + b) % b;
}


/**
 * 周期表の列番号を足し合わせて、そのグループ列番号を取得する。
 * 
 * 👇 例えば以下のような 5x5 の盤があるとき、
 * 
 *   +----------------+
 *   |  0  1  2  3  4 |
 *   |  5  6  7  8  9 |
 *   | 10 11 12 13 14 |
 *   | 15 16 17 18 19 |
 *   | 20 21 22 23 24 |
 *   +----------------+
 * 
 * 👇 それを化学の周期表と見立てれば、以下を Group 0 （0 列目、0番目の筋。数字を 0 から数える場合）と呼称できる。
 * 
 *   +----+
 *   |  0 |
 *   |  5 |
 *   | 10 |
 *   | 15 |
 *   | 20 |
 *   +----+
 * 
 * つまり、 0 周目の 0 列目も、 1 周目の 0 列目も、グループ 0。
 * ここで、 3 + 4 をすれば 7 、つまり 1 周目の 2 列目になる。つまりグループ 2。
 */
function getGroupWhenAddUpColumnNumbersOnPeriodicTable(column: number, offset: number, width: number) : number {
    return  euclideanMod(column + offset, width);
}


/**
 * タイルは盤の領域の中で回り込んで（ラップアラウンド）しまうので、
 * 見た目上の（Fix）タイルのインデックスは動かないように変換します。
 * 
 * 👇 例えば以下のような 5x5 の盤があり、タイルにインデックスが振られているとき、
 * 
 *   +----------------+
 *   |  0  1  2  3  4 |
 *   |  5  6  7  8  9 |
 *   | 10 11 12 13 14 |
 *   | 15 16 17 18 19 |
 *   | 20 21 22 23 24 |
 *   +----------------+
 *
 * 👇 プレイヤーが右に移動すると、タイルは以下のようにラップアラウンド（wrap around）する。
 *
 *      +-------------+ +----+
 *      |  1  2  3  4 | |  0 |
 *      |  6  7  8  9 | |  5 |
 *      | 11 12 13 14 | | 10 |
 *      | 16 17 18 19 | | 15 |
 *      | 21 22 23 24 | | 20 |
 *      +-------------+ +----+
 *
 * 👇 同様に、同時に下方向に移動（右下への移動）であった場合、以下のようになるから、
 *
 *      +-------------+ +----+
 *      |  6  7  8  9 | |  5 |
 *      | 11 12 13 14 | | 10 |
 *      | 16 17 18 19 | | 15 |
 *      | 21 22 23 24 | | 20 |
 *      +-------------+ +----+
 *      +-------------+ +----+
 *      |  1  2  3  4 | |  0 |
 *      +-------------+ +----+
 *
 * 👇 元のテーブルに比べて、インデックスがずれてしまう。
 *
 *      +----------------+
 *      |  6  7  8  9  5 |
 *      | 11 12 13 14 10 |
 *      | 16 17 18 19 15 |
 *      | 21 22 23 24 20 |
 *      |  1  2  3  4  0 |
 *      +----------------+
 *
 * 👇 しかし、移動量から、元のインデックスに紐づけよう、というものだ。
 * 
 *   6→ 0   7→ 1   8→ 2   9→ 3  10→ 4
 *  11→ 5  12→ 6  13→ 7  14→ 8  15→ 9
 *  16→10  17→11  18→12  19→13  15→14
 *  21→15  22→16  23→17  24→18  20→19
 *   1→20   2→21   3→22   4→23   0→24
 */
export function getIndexWhenAddUpFileAndRankOnPeriodicTable(
    baseIndex: number,
    width: number,
    height: number,
    offsetFile: number,
    offsetRank: number
) : number {
    const fixTileFile = getGroupWhenAddUpColumnNumbersOnPeriodicTable(baseIndex, offsetFile, width);    // 丁寧に書くと［fileIndex = tileIndex % boardFileNum］だが、結局あとで、ユークリッド剰余するので、省いて tileIndex としている。
    const rankIndex = Math.floor(baseIndex / height);
    const fixTileRank = getGroupWhenAddUpColumnNumbersOnPeriodicTable(rankIndex, offsetRank, height);    // 筋方向だけでなく、段方向にも同じ関数が使える。

    // 列と行を、インデックスに変換します。
    const fixTileIndex = fixTileRank * width + fixTileFile;
    return fixTileIndex;
}
