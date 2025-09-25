// ##############
// # インポート #
// ##############

import type { Ref } from 'vue';

// ******************
// * コンポーザブル *
// ******************

import { commonSpriteMotionDown, commonSpriteMotionLeft, commonSpriteMotionRight, commonSpriteMotionUp } from './common';


// ################
// # オブジェクト #
// ################

// ++++++++++++++++++++++++++++
// + オブジェクト　＞　像盤１ +
// ++++++++++++++++++++++++**++
//
// 盤上に表示される数字柄、絵柄など。
//

/**
 * カウント・ダウン
 */
export function printingMotionCountDown(
    printing1MotionWait: Ref<number>,
) : void {
    printing1MotionWait.value -= 1; // 印字１
}

/**
 * 印字への入力
 */
export interface PrintingInput {
    " ": boolean,
    ArrowUp: boolean,
    ArrowRight: boolean,
    ArrowDown: boolean,
    ArrowLeft: boolean,
}

/**
 * ［印字への入力］の初期値を作成
 */
export function printingInputCreate() : PrintingInput {
    return {
        " ": false,
    } as PrintingInput;
}

/**
 * 印字のモーション
 */
export interface PrintingMotion {
    goToHome: boolean,  // ホームに戻る
    wrapAroundRight: number,    // 負なら左、正なら右
    wrapAroundBottom: number,   // 負なら上、正なら下
}

/**
 * ［印字のモーション］の初期値を作成
 */
export function printingMotionCreate() : PrintingMotion {
    return {
        goToHome: false,    // ホームに戻る
        wrapAroundRight: 0, // 負なら左、正なら右
        wrapAroundBottom: 0,    // 負なら上、正なら下
    } as PrintingMotion;
}

/**
 * 印字盤の移動量（単位：マス）
 * @returns 
 */
export function getPrinting1FileDelta(
    printing1Left: number,
    tileBoard1TileWidth: number,
) : number {
    return Math.round(-printing1Left / tileBoard1TileWidth);    // 印字盤が左に行くほど、盤上のキャラクターが右に動いたように見える。
}
export function getPrinting1RankDelta(
    printing1Top: number,
    tileBoard1TileHeight: number,
) : number {
    return Math.round(-printing1Top / tileBoard1TileHeight);
}


/**
 * モーション・ウェイトが０のとき、モーションのクリアー
 * @param printing1Motion 
 * @param printing1MotionWait 
 */
export function printingMotionClearIfCountZero(
    printing1Motion: Ref<PrintingMotion>,
    printing1MotionWait: number,
) : void {
    if (printing1MotionWait==0) {   // 印字
        printing1Motion.value.goToHome = false;
        printing1Motion.value.wrapAroundRight = 0;
        printing1Motion.value.wrapAroundBottom = 0;
    }
}


/**
 * 画面端が見えるような動きかをチェックします。
 */
export function checkOutOfSightLeftIsLook(
    tileBoard1TileWidth: number,
    board1WithMaskSizeSquare: number,
    printing1Left: number,
) : boolean {
    // 見えている画面外が広がるような移動は禁止する：
    //
    // - 印字は動かない、プレイヤーの移動量を見ること。
    // TODO: プレイヤーの移動量と、印字の移動量を分けれないか？
    //
    // Printing
    // +---------------------+
    // |                     |
    // |       Board         |
    // |       +-------+     |
    // |       |       |     |
    // |       |   *   |     |
    // |       |       |     |
    // |       +-------+     |
    // |                     |
    // +<--m-->*-------------+
    //         0
    // c<------+
    // pd
    //
    // 0 は、盤の初期位置からの移動量。盤は移動しないので常に 0。
    // c は、0 からみた、印字の左隅位置。 初期値は習慣的に、 0 以下にするものと思われる。
    // m は、 pd の正負を反転したもの。
    // m が、マスク幅より大きいなら、それ以上左に行くことはできない。
    //
    // m = c
    //

    const pd = getPrinting1FileDelta(printing1Left, tileBoard1TileWidth) - 1;  // まだ -1 （左へ移動）されていないので、-1 しておく。
    const m = - pd;

    return board1WithMaskSizeSquare < m;
}


/**
 * 画面端が見えるような動きかをチェックします。
 */
export function checkOutOfSightTopIsLook(
    tileBoard1TileHeight: number,
    board1WithMaskSizeSquare: number,
    printing1Top: number,
) : boolean {
    // 見えている画面外が広がるような移動は禁止する：
    //
    // - 印字は動かない、プレイヤーの移動量を見ること。
    // TODO: プレイヤーの移動量と、印字の移動量を分けれないか？
    //
    // Printing
    // +-------------------->+     c  pd
    // |                     |     ^
    // |       Board         |     |
    // |       +-------+     |     +
    // |       |       |     |
    // |       |       |     |
    // |       |   *   |     |
    // |       |       |     |
    // |       |       |     |
    // |       +-------+     +
    // |                     ^
    // |                     |
    // |                     m
    // |                     |
    // |                     v
    // +---------------------+
    //
    // 0 は、盤の初期位置からの移動量。盤は移動しないので常に 0。
    // c は、0 からみた、印字の上隅位置。 初期値は習慣的に、 0 以下にするものと思われる。
    // m は、 pd の正負を反転したもの。
    // m が、マスク幅より大きいなら、それ以上上に行くことはできない。
    //
    // m = c
    //

    const pd = getPrinting1RankDelta(printing1Top, tileBoard1TileHeight) - 1;  // まだ -1 （上へ移動）されていないので、-1 しておく。
    const m = - pd;
    return board1WithMaskSizeSquare < m;
}


/**
 * 画面端が見えるような動きかをチェックします。
 */
export function checkOutOfSightRightIsLook(
    tileBoard1TileWidth: number,
    board1WithMaskSizeSquare: number,
    board1FileNum: number,
    printing1FileNum: number,
    printing1Left: number,
) : boolean {
    // 見えている画面外が広がるような移動は禁止する：
    //
    // - 印字は動かない、プレイヤーの移動量を見ること。
    // TODO: プレイヤーの移動量と、印字の移動量を分けれないか？
    //
    // Printing
    // +<---------cw------------------->+
    // |                                |
    // |       Board                    |
    // |       +<------bw-------->+     |
    // |       |//////////////////|     |
    // |       |///+-------+//////|     |
    // |       |///|       |//////|     |
    // |       |///|   *   |//////|     |
    // |       |///|       |//////|     |
    // |       |///+-------+//////|     |
    // |       |//////////////////|     |
    // |       |//////////////////|     |
    // |       +------------------+     |
    // |                                |
    // +--------------------------+<-m->+
    // c<------+
    // pd
    //
    // 0 は、盤の初期位置からの移動量。盤は移動しないので常に 0。
    // c は、0 からみた、印字の左隅位置。 初期値は習慣的に、 0 以下にするものと思われる。
    // bw は、盤の列数。
    // cw は、印字の列数。
    // m は、右側盤外の余白。
    // m が、マスクの横幅（右側の多めの１を含まない）以下なら、それ以上右に行くことはできない。
    //
    // m = cw + c - bw
    //

    const pd = -(getPrinting1FileDelta(printing1Left, tileBoard1TileWidth) + 1);  // まだ 1 （右へ移動）されていないので、1 しておく。
    const cw = printing1FileNum; // 例えば 10
    const bw = board1FileNum;
    const m = cw + pd - bw;
    return m < -board1WithMaskSizeSquare;
}


/**
 * 画面端が見えるような動きかをチェックします。
 */
export function checkOutOfSightBottomIsLook(
    tileBoard1TileHeight: number,
    board1WithMaskSizeSquare: number,
    board1RankNum: number,
    printing1RankNum: number,
    printing1Top: number,
) : boolean {
    // 見えている画面外が広がるような移動は禁止する：
    //
    // - 印字は動かない、プレイヤーの移動量を見ること。
    // TODO: プレイヤーの移動量と、印字の移動量を分けれないか？
    //
    // Printing
    // +------------------------------->+     c  pd
    // ^                                |     ^
    // |       Board                    |     |
    // |       +------------------+     | 0   +
    // |       ^//////////////////|     |
    // |       |///+-------+//////|     |
    // |       |///|       |//////|     |
    // |       |///|       |//////|     |
    // ch      bh//|   *   |//////|     |
    // |       |///|       |//////|     |
    // |       |///|       |//////|     |
    // |       |///+-------+//////|     |
    // |       |//////////////////|     |
    // |       v//////////////////|     |
    // |       +------------------+     +
    // |                                ^
    // |                                |
    // |                                m
    // |                                |
    // v                                v
    // +--------------------------------+
    //
    // 0 は、盤の初期位置からの移動量。盤は移動しないので常に 0。
    // c は、0 からみた、印字の上隅位置。 初期値は習慣的に、 0 以下にするものと思われる。
    // bh は、盤の行数。
    // ch は、印字の行数。
    // m が、マスクの横幅（下側の多めの１を含まない）より小さいなら、それ以上下に行くことはできない。
    //
    // m = ch + c - bh
    //

    const pd = -(getPrinting1RankDelta(printing1Top, tileBoard1TileHeight) + 1);  // まだ +1 （下へ移動）されていないので、+1 しておく。
    const ch = printing1RankNum; // 例えば 10
    const bh = board1RankNum;
    const m = ch + pd - bh;
    //console.log(`[m=${m}] = [ch=${ch}] + [pd=${pd}] - [bh=${bh}].  m <= -board1WithMaskHeight:${m <= -board1WithMaskSizeSquare}`);
    return m < -board1WithMaskSizeSquare;
}


/**
 * キー入力を、モーションに変換します。
 * 
 * ［ラップ・アラウンド］するタイプです。十字キー入力とは逆方向に盤を動かします。ラップ・アラウンドしたタイルの印字は差し変わります。
 * 
 * 十字方向の入力をした場合、player1Motion の ["lookRight"], ["lookBottom"] （自機の向き）を更新。
 * また、自機の移動を伴うケースでは、十字方向の入力をした場合、player1Motion の ["goToRight"], ["goToBottom"] （自機の位置）を更新。
 * 
 * 通常、自機は移動せず、 printing1Motion の ["wrapAroundRight"], ["wrapAroundBottom"] （印字表）を更新。
 */
export function printingMotionUpdateByInputWithWrapAround(
    printingOutOfSightIsLock: boolean,
    tileBoard1TileWidth: number,
    tileBoard1TileHeight: number,
    board1FileNum: number,
    board1RankNum: number,
    board1WithMaskSizeSquare: number,
    printing1FileNum: number,
    printing1RankNum: number,
    printing1Left: number,
    printing1Top: number,
    printing1Input: PrintingInput,
    printing1Motion: Ref<PrintingMotion>,
    printing1MotionWait: number,
    playerIsToRightOfHome: ()=>boolean,  // 自機がホーム・ポジションより右に居る
    playerIsToLeftOfHome: ()=>boolean,  // 自機がホーム・ポジションより左に居る
    playerIsToBottomOfHome: ()=>boolean,    // 自機がホーム・ポジションより下に居る
    playerIsToTopOfHome: ()=>boolean,   // 自機がホーム・ポジションより上に居る
) : void {

    // ++++++++++++++++++++++++++++++++++++++++
    // + ウェイトが無ければ、入力を受け付ける +
    // ++++++++++++++++++++++++++++++++++++++++

    // ----------------------------------------------------
    // - ウェイトが無ければ、入力を受け付ける　＞　印字１ -
    // ----------------------------------------------------
    
    if (printing1MotionWait <= 0) {

        // 位置のリセット
        if (printing1Input[" "]) {
            printing1Motion.value.goToHome = true;
        }

        // 移動関連（単発）
        // 斜め方向の場合、左右を上下で上書きする。（左、右）→（上、下）の順。
        if (printing1Input.ArrowLeft) { // 左
            // 自機がホーム・ポジションより右に居れば、自機が左に寄るので、印字盤は動かない。
            if (playerIsToRightOfHome()) {
                // pass
            } else {
                let willShift: boolean = true;
                if (printingOutOfSightIsLock) {
                    if (checkOutOfSightLeftIsLook(
                        tileBoard1TileWidth,
                        board1WithMaskSizeSquare,
                        printing1Left
                    )) {
                        willShift = false;
                    }
                }

                if (willShift) {
                    printing1Motion.value.wrapAroundRight = commonSpriteMotionRight;   // 印字は、キー入力とは逆向きへ進める
                }
            }
        }

        if (printing1Input.ArrowRight) {  // 右
            // 自機がホーム・ポジションより左に居れば、自機が右に寄るので、印字盤は動かない。
            if (playerIsToLeftOfHome()) {
                // pass
            } else {
                let willShift: boolean = true;
                if (printingOutOfSightIsLock) {
                    if (checkOutOfSightRightIsLook(
                        tileBoard1TileWidth,
                        board1WithMaskSizeSquare,
                        board1FileNum,
                        printing1FileNum,
                        printing1Left
                    )) {
                        willShift = false;
                    }
                }

                if (willShift) {
                    printing1Motion.value.wrapAroundRight = commonSpriteMotionLeft;    // 印字は、キー入力とは逆向きへ進める
                }
            }
        }

        if (printing1Input.ArrowUp) {    // 上
            // 自機がホーム・ポジションより下に居れば、自機が上に寄るので、印字盤は動かない。
            if (playerIsToBottomOfHome()) {
                // pass
            } else {
                let willShift: boolean = true;
                if (printingOutOfSightIsLock) {
                    if (checkOutOfSightTopIsLook(
                        tileBoard1TileHeight,
                        board1WithMaskSizeSquare,
                        printing1Top
                    )) {
                        willShift = false;
                    }
                }

                if (willShift) {
                    printing1Motion.value.wrapAroundBottom = commonSpriteMotionDown;     // 印字は、キー入力とは逆向きへ進める
                }
            }
        }

        if (printing1Input.ArrowDown) {   // 下
            // 自機がホーム・ポジションより上に居れば、自機が下に寄るので、印字盤は動かない。
            if (playerIsToTopOfHome()) {
                // pass
            } else {
                let willShift: boolean = true;
                if (printingOutOfSightIsLock) {
                    if (checkOutOfSightBottomIsLook(
                        tileBoard1TileHeight,
                        board1WithMaskSizeSquare,
                        board1RankNum,
                        printing1RankNum,
                        printing1Top
                    )) {
                        willShift = false;
                    }
                }

                if (willShift) {
                    printing1Motion.value.wrapAroundBottom = commonSpriteMotionUp;    // 印字は、キー入力とは逆向きへ進める
                }
            }
        }
    }
}


/**
 * 向き・移動・ウェイトを処理
 * @param printing1MotionSpeed 移動速度（ピクセル単位）
 */
export function printingImageAndPositionAndWaitUpdate(
    printing1Left: Ref<number>,
    printing1Top: Ref<number>,
    printing1Motion: PrintingMotion,
    printing1MotionSpeed: number,
    printing1MotionWait: Ref<number>,
    printing1MotionWalkingFrames: number,
) : void {

    // ++++++++++
    // + 印字１ +
    // ++++++++++

    if (printing1Motion.goToHome) {
            printing1Left.value = 0;
            printing1Top.value = 0;
    }

    // 移動量（単位：ピクセル）を更新、ピクセル単位。通常あり得ないことだが、左右同時入力の場合左優先。上下同時入力の場合上優先：
    if (printing1Motion.wrapAroundRight == commonSpriteMotionLeft) {  // 左
        printing1Left.value -= printing1MotionSpeed;
    } else if (printing1Motion.wrapAroundRight == commonSpriteMotionRight) {   // 右
        printing1Left.value += printing1MotionSpeed;
    }

    if (printing1Motion.wrapAroundBottom == commonSpriteMotionUp) {  // 上
        printing1Top.value -= printing1MotionSpeed;
    } else if (printing1Motion.wrapAroundBottom == commonSpriteMotionDown) {   // 下
        printing1Top.value += printing1MotionSpeed;
    }

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + モーション・ウェイトが０以下のときだけ実行される処理 +
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    if (printing1MotionWait.value <= 0) {

        // ................
        // . ウェイト設定 .
        // ................

        // goToHome はウェイト無し

        if (printing1Motion.wrapAroundRight != 0 || printing1Motion.wrapAroundBottom != 0) {
            printing1MotionWait.value = printing1MotionWalkingFrames;
        }
    }
}
