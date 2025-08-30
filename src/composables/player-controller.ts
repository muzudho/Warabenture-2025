// ##############
// # インポート #
// ##############

import type { Ref } from 'vue';

// ******************
// * コンポーザブル *
// ******************

import { commonSpriteMotionDown, commonSpriteMotionLeft, commonSpriteMotionRight, commonSpriteMotionUp } from './common';

// ********************
// * インターフェース *
// ********************

import type Rectangle from '../interfaces/Rectangle';


// ################
// # 外部リソース #
// ################

// ++++++++++++++++++++++++++++++++++++++++
// + 外部リソース　＞　タイルマップの仕様 +
// ++++++++++++++++++++++++++++++++++++++++

/**
 * RPGのキャラクターの歩行グラフィック
 */
export interface RpgWalkingImagePosition {
    left: Rectangle[],
    up: Rectangle[],
    right: Rectangle[],
    down: Rectangle[],
}


// ################
// # オブジェクト #
// ################

// ++++++++++++++++++++++++++++
// + オブジェクト　＞　自機１ +
// ++++++++++++++++++++++++++++

/**
 * プレイヤーへの入力
 */
export interface PlayerInput {
    " ": boolean,
    ArrowUp: boolean,
    ArrowRight: boolean,
    ArrowDown: boolean,
    ArrowLeft: boolean,
}
// キーが PlayerInput のプロパティかチェックする型ガード
export function isPlayerInputKey(key: string): key is keyof PlayerInput {
    return [" ", "ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(key);
}
// // イベントハンドラ
// function handleKeyEvent(e: KeyboardEvent) {
//     if (isPlayerInputKey(e.key)) {
//         player1Input[e.key] = true; // 型安全！エラーなし
//     }
// }

/**
 * プレイヤーのモーション
 */
export interface PlayerMotion {
    lookRight: number,  // 向きを変える
    lookBottom: number,
    goToHome: boolean,  // ホームに戻る
    goToRight: number,  // 負なら左、正なら右へ移動する
    goToBottom: number, // 負なら上、正なら下へ移動する
}

export function getPlayer1File(
    player1Left: number,
    board1SquareWidth: number,
) : number {
    return Math.round(player1Left / board1SquareWidth);
}
export function getPlayer1Rank(
    player1Top: number,
    board1SquareHeight: number,
) : number {
    return Math.round(player1Top / board1SquareHeight);
}


/**
 * カウント・ダウン
 */
export function playerMotionCountDown(
    player1MotionWait: Ref<number>,
) : void {
    player1MotionWait.value -= 1;   // 自機１
}


/**
 * モーション・ウェイトが０のとき、モーションのクリアー
 * @param player1Motion 
 * @param player1MotionWait 
 */
export function playerMotionClearIfCountZero(
    player1Motion: Ref<PlayerMotion>,
    player1MotionWait: number,
) : void {
    if (player1MotionWait==0) { // 自機
        player1Motion.value.goToHome = false;
        player1Motion.value.lookRight = 0;
        player1Motion.value.lookBottom = 0;
        player1Motion.value.goToRight = 0;
        player1Motion.value.goToBottom = 0;
    }
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
export function playerMotionUpdateByInputWithWrapAround(
    printingOutOfSightIsLock: boolean,
    board1SquareWidth: number,
    board1SquareHeight: number,
    board1FileNum: number,
    board1RankNum: number,
    board1WithMaskSizeSquare: number,
    playerHome1File: number,
    playerHome1Rank: number,
    player1Left: number,
    player1Top: number,
    player1Input: PlayerInput,
    player1Motion: Ref<PlayerMotion>,
    player1MotionWait: number,
    player1CanBoardEdgeWalking: boolean,
    outsideIsVisibleOnLeft: ()=>boolean,    // ここで進むと、左側に外側が見える
    outsideIsVisibleOnRight: ()=>boolean,   // ここで進むと、右側の画面外が見える
    outsideIsVisibleOnTop: ()=>boolean, // ここで進むと、上側に外側が見えるなら。
    outsideIsVisibleOnBottom: ()=>boolean,  // ここで進むと、下側に外側が見えるなら。
) : void {

    // ++++++++++++++++++++++++++++++++++++++++
    // + ウェイトが無ければ、入力を受け付ける +
    // ++++++++++++++++++++++++++++++++++++++++

    // ----------------------------------------------------
    // - ウェイトが無ければ、入力を受け付ける　＞　自機１ -
    // ----------------------------------------------------

    if (player1MotionWait <= 0) {

        // 位置のリセット
        if (player1Input[" "]) {
            player1Motion.value.goToHome = true;
        }

        // 移動関連（単発）
        // 斜め方向の場合、左右を上下で上書きする。（左、右）→（上、下）の順。
        if (player1Input.ArrowLeft) { // 左
            player1Motion.value.lookRight = commonSpriteMotionLeft;

            // 自機がホーム・ポジションより右に居れば、自機を左に寄せる。
            if (getPlayer1File(player1Left, board1SquareWidth) > playerHome1File) {
                player1Motion.value.goToRight = commonSpriteMotionLeft;
            } else {
                let willShift: boolean = true;
                if (printingOutOfSightIsLock) {
                    // ここで進むと、左側に外側が見えるなら。
                    if (outsideIsVisibleOnLeft()) {
                        willShift = false;
                    }
                }

                if (willShift) {
                    // pass
                } else if (player1CanBoardEdgeWalking) {
                    // ［盤の端まで歩ける］
                    if (getPlayer1File(player1Left, board1SquareWidth) > 0 + board1WithMaskSizeSquare) {
                        player1Motion.value.goToRight = commonSpriteMotionLeft;
                    }
                }
            }
        }

        if (player1Input.ArrowRight) {  // 右
            player1Motion.value.lookRight = commonSpriteMotionRight;

            // 自機がホーム・ポジションより左に居れば、自機を右に寄せる。
            if (getPlayer1File(player1Left, board1SquareWidth) < playerHome1File) {
                player1Motion.value.goToRight = commonSpriteMotionRight;
            } else {
                let willShift: boolean = true;
                if (printingOutOfSightIsLock) {
                    // ここで進むと、右側の画面外が見えるなら。
                    if (outsideIsVisibleOnRight()) {
                        willShift = false;
                    }
                }

                if (willShift) {
                    // pass
                } else if (player1CanBoardEdgeWalking) {
                    // ［盤の端まで歩ける］
                    if (getPlayer1File(player1Left, board1SquareWidth) < board1FileNum - board1WithMaskSizeSquare - 1) {
                        player1Motion.value.goToRight = commonSpriteMotionRight;
                    }
                }
            }
        }

        if (player1Input.ArrowUp) {    // 上
            player1Motion.value.lookBottom = commonSpriteMotionUp;

            // 自機がホーム・ポジションより下に居れば、自機を上に寄せる。
            if (getPlayer1Rank(player1Top, board1SquareHeight) > playerHome1Rank) {
                player1Motion.value.goToBottom = commonSpriteMotionUp;
            } else {
                let willShift: boolean = true;
                if (printingOutOfSightIsLock) {
                    // ここで進むと、上側に外側が見えるなら。
                    if (outsideIsVisibleOnTop()) {
                        willShift = false;
                    }
                }

                if (willShift) {
                    // pass
                } else if (player1CanBoardEdgeWalking) {
                    // ［盤の端まで歩ける］
                    if (getPlayer1Rank(player1Top, board1SquareHeight) > 0 + board1WithMaskSizeSquare) {
                        player1Motion.value.goToBottom = commonSpriteMotionUp;
                    }
                }
            }
        }

        if (player1Input.ArrowDown) {   // 下
            player1Motion.value.lookBottom = commonSpriteMotionDown;

            // 自機がホーム・ポジションより上に居れば、自機を下に寄せる。
            if (getPlayer1Rank(player1Top, board1SquareHeight) < playerHome1Rank) {
                player1Motion.value.goToBottom = commonSpriteMotionDown;
            } else {
                let willShift: boolean = true;
                if (printingOutOfSightIsLock) {
                    // ここで進むと、下側に外側が見えるなら。
                    if (outsideIsVisibleOnBottom()) {
                        willShift = false;
                    }
                }

                if (willShift) {
                    // pass
                } else if (player1CanBoardEdgeWalking) {
                    // ［盤の端まで歩ける］
                    if (getPlayer1Rank(player1Top, board1SquareHeight) < board1RankNum - board1WithMaskSizeSquare - 1) {
                        player1Motion.value.goToBottom = commonSpriteMotionDown;
                    }
                }
            }
        }
    }
}


/**
 * 向き・移動・ウェイトを処理
 * @param printing1MotionSpeed 移動速度（ピクセル単位）
 */
export function playerImageAndPositionAndWaitUpdate(
    playerHome1Left: number,
    playerHome1Top: number,
    player1Left: Ref<number>,
    player1Top: Ref<number>,
    player1Motion: PlayerMotion,
    player1MotionSpeed: number,
    player1MotionWait: Ref<number>,
    player1SourceFrames: RpgWalkingImagePosition,
    player1Frames: Ref<Rectangle[]>,
    player1MotionFacingFrames: number,
    player1MotionWalkingFrames: number,
) : void {

    // ++++++++++
    // + 自機１ +
    // ++++++++++

    if (player1Motion.goToHome) {
        player1Left.value = playerHome1Left;
        player1Top.value = playerHome1Top;
    }

    // 移動量（単位：ピクセル）を更新、ピクセル単位。通常あり得ないことだが、左右同時入力の場合左優先。上下同時入力の場合上優先：
    if (player1Motion.goToRight == commonSpriteMotionLeft) {    // 左
        player1Left.value -= player1MotionSpeed;
    } else if (player1Motion.goToRight == commonSpriteMotionRight) {  // 右
        player1Left.value += player1MotionSpeed;
    }

    if (player1Motion.goToBottom == commonSpriteMotionUp) {   // 上
        player1Top.value -= player1MotionSpeed;
    } else if (player1Motion.goToBottom == commonSpriteMotionDown) { // 下
        player1Top.value += player1MotionSpeed;
    }

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // + モーション・ウェイトが０以下のときだけ実行される処理 +
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    if (player1MotionWait.value <= 0) {

        // 自機の向き（単位：ピクセル）を更新、上下左右の複数同時入力の場合、左、上、右、下の順で優先：
        if (player1Motion.lookRight == commonSpriteMotionLeft) {    // 左
            player1Frames.value = player1SourceFrames.left;
        } else if (player1Motion.lookBottom == commonSpriteMotionUp) {   // 上
            player1Frames.value = player1SourceFrames.up;
        } else if (player1Motion.lookRight == commonSpriteMotionRight) {  // 右
            player1Frames.value = player1SourceFrames.right;
        } else if (player1Motion.lookBottom == commonSpriteMotionDown) { // 下
            player1Frames.value = player1SourceFrames.down;
        }

        // ................
        // . ウェイト設定 .
        // ................

        // goToHome はウェイト無し

        if (player1Motion.goToRight != 0 || player1Motion.goToBottom != 0) {
            player1MotionWait.value = player1MotionWalkingFrames;
        } else if (player1Motion.lookRight != 0 || player1Motion.lookBottom != 0) {
            player1MotionWait.value = player1MotionFacingFrames;
        }
    }
}
