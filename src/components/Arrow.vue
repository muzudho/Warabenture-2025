<template>
    <div
        :style="`left: ${svgLeft}px; top: ${svgTop}px; width: ${svgWidth}px; height: ${svgHeight}px; border:`"
        style="position: absolute;">
        <!--  dashed 1px ${props.color}; -->
        <svg :width="svgWidth" :height="svgHeight" :viewBox="`0 0 ${svgWidth} ${svgHeight}`">
            <path :d="generateArrowPath()" :stroke="color" :stroke-width="strokeWidth" fill="none"/>
        </svg>
    </div>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, ref } from 'vue';


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################

    interface Props {
        startX: number;             // 始点のX座標
        startY: number;             // 始点のY座標
        width: number;          // X方向の長さ
        height: number;         // Y方向の長さ
        strokeWidth: number;    // 線の太さ
        color: string;          // 線の色
    }
    // デフォルト値を設定
    const props = withDefaults(defineProps<Props>(), {
        startX: 0,              // 始点のX座標
        startY: 0,              // 始点のY座標
        width: 32,         // 終点のX座標
        height: 32,        // 終点のY座標
        strokeWidth: 4,     // 線の太さ
        color: 'black',     // 線の色
    });


    // ##############
    // # 共通データ #
    // ##############

    const { startX, startY, width, height } = props;

    // ++++++++
    // + 矢尻 +
    // ++++++++
    //
    //        D
    //         ＼
    //  A--------B
    //         ／
    //        C
    //

    // 矢じり（アローヘッド）の長さ（線の太さに比例）
    const arrowHeadSize = props.strokeWidth * 4;

    // 矢印の角度を計算
    const angle = Math.atan2(height, width);

    // 矢尻の２つの羽の横幅、縦幅
    const arrowHeadSizeC = {
        width: arrowHeadSize * Math.cos(angle - Math.PI / 6),
        height: arrowHeadSize * Math.sin(angle - Math.PI / 6),
    }
    const arrowHeadSizeD = {
        width: arrowHeadSize * Math.cos(angle + Math.PI / 6),
        height: arrowHeadSize * Math.sin(angle + Math.PI / 6),
    };

    // ++++++++++
    // + その他 +
    // ++++++++++

    // 終点の計算
    const endX = startX + width;
    const endY = startY + height;

    const top = Math.min(startY, endY);
    const right = Math.max(startX, endX);
    const bottom = Math.max(startY, endY);
    const left = Math.min(startX, endX);

    // 矢印の長さを計算
    //const length = Math.sqrt(width ** 2 + height ** 2);

    // 矢印の先端の2つの点
    //
    //        D
    //         ＼
    //  A--------B
    //         ／
    //        C
    //
    const arrowHeadC = {
        x: endX - arrowHeadSizeC.width,
        y: endY - arrowHeadSizeC.height,
    };
    const arrowHeadD = {
        x: endX - arrowHeadSizeD.width,
        y: endY - arrowHeadSizeD.height,
    };

    const arrowHeadTop = Math.min(arrowHeadC.y, arrowHeadD.y);
    const arrowHeadRight = Math.max(arrowHeadC.x, arrowHeadD.x);
    const arrowHeadBottom = Math.max(arrowHeadC.y, arrowHeadD.y);
    const arrowHeadLeft = Math.min(arrowHeadC.x, arrowHeadD.x);

    const arrowHeadTopHeight = endY - arrowHeadTop;
    const arrowHeadRightWidth = arrowHeadRight - endX;
    const arrowHeadBottomHeight = arrowHeadBottom - endY;
    const arrowHeadLeftWidth = endX - arrowHeadLeft;    // 矢尻が終点より左にどれだけはみ出ているか。

    // // 矢尻の部分の幅と高さを計算
    // const arrowHeadWidth = arrowHeadLeftWidth + arrowHeadRightWidth;
    // const arrowHeadHeight = arrowHeadTopHeight + arrowHeadBottomHeight;

    // SVGのキャンバスサイズを動的に計算（線の太さがあるので、余白を確保）
    const boldLeft = Math.max(arrowHeadLeftWidth, props.strokeWidth / 2);
    const boldRight = Math.max(arrowHeadRightWidth, props.strokeWidth / 2);
    const boldTop = Math.max(arrowHeadTopHeight, props.strokeWidth / 2);
    const boldBottom = Math.max(arrowHeadBottomHeight, props.strokeWidth / 2);

    // SVG キャンバス
    const svgLeft = left - boldLeft;
    const svgTop = top - boldTop;
    const svgWidth = Math.abs(width) + boldLeft + boldRight;
    const svgHeight = Math.abs(height) + boldTop + boldBottom;

    // キャンバスを考えない位置
    //
    //        D
    //         ＼
    //  A--------B
    //         ／
    //        C
    //
    const pAx = startX - left;
    const pAy = startY - top;
    const pBx = endX - left;
    const pBy = endY - top;
    const pCx = arrowHeadC.x - left;
    const pCy = arrowHeadC.y - top;
    const pDx = arrowHeadD.x - left;
    const pDy = arrowHeadD.y - top;

    // キャンバスの中での始点の位置
    //
    //        D
    //         ＼
    //  A--------B
    //         ／
    //        C
    //
    const qAx = pAx + boldLeft;
    const qAy = pAy + boldTop;
    const qBx = pBx + boldLeft;
    const qBy = pBy + boldTop;
    const qCx = pCx + boldLeft;
    const qCy = pCy + boldTop;
    const qDx = pDx + boldLeft;
    const qDy = pDy + boldTop;


    // ############################
    // # このコンポーネントの画面 #
    // ############################

    function generateArrowPath() : string {

        // SVGパスを生成
        //
        //        D
        //         ＼
        //  A--------B
        //         ／
        //        C
        //
        return `
            M${qAx},${qAy} L${qBx},${qBy}
            M${qBx},${qBy} L${qCx},${qCy}
            M${qBx},${qBy} L${qDx},${qDy}
        `;
    }

</script>