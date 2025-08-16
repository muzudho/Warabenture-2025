<template>
    <div
        :style="`left: ${svgLeft}px; top: ${svgTop}px; width: ${svgWidth}px; height: ${svgHeight}px;`"
        style="position: absolute;">
        <!--  border: dashed 1px ${props.color}; -->

        <!-- 図形描画 -->
        <svg
                :width="svgWidth"
                :height="svgHeight"
                :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
                style="position: absolute; left: 0; top: 0;">
            <path :d="generateArrowPath()" :stroke="color" :stroke-width="strokeWidth" fill="none"/>
        </svg>

        <!-- 子要素 -->
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################

    interface Props {
        left: number;             // 始点のX座標
        top: number;              // 始点のY座標
        width: number;          // X方向の長さ
        height: number;         // Y方向の長さ
        strokeWidth: number;    // 線の太さ
        color: string;          // 線の色
    }
    // デフォルト値を設定
    const props = withDefaults(defineProps<Props>(), {
        left: 0,              // 始点のX座標
        top: 0,              // 始点のY座標
        width: 32,         // 終点のX座標
        height: 32,        // 終点のY座標
        strokeWidth: 4,     // 線の太さ
        color: 'black',     // 線の色
    });


    // ##############
    // # 共通データ #
    // ##############

    const { left, top, width, height } = props;

    // （キャンバスの余白や線の太さを考えない）数学的な頂点の位置
    //
    //  A--------B
    //  |        |
    //  |        |
    //  D--------C
    //
    const pAx = 0;
    const pAy = 0;
    const pBx = 0 + width;
    const pBy = 0;
    const pCx = 0 + width;
    const pCy = 0 + height;
    const pDx = 0;
    const pDy = 0 + height;

    // SVGのキャンバスサイズを動的に計算（線の太さがあるので、余白を確保）
    const boldLeft = props.strokeWidth / 2;
    const boldRight = props.strokeWidth / 2;
    const boldTop = props.strokeWidth / 2;
    const boldBottom = props.strokeWidth / 2;

    // SVG キャンバス
    const svgLeft = left - boldLeft;
    const svgTop = top - boldTop;
    const svgWidth = Math.abs(width) + boldLeft + boldRight;
    const svgHeight = Math.abs(height) + boldTop + boldBottom;

    // （キャンバスの余白や、線の太さを考慮した中での）点の位置
    //
    // +----------------+
    // |                |
    // |   A--------B   |
    // |   | +----+ |   |
    // |   | |    | |   |
    // |   | |    | |   |
    // |   | +----+ |   |
    // |   D--------C   |
    // |                |
    // +----------------+
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
        //  A--------B
        //  |        |
        //  |        |
        //  D--------C
        //
        return `
            M${qAx},${qAy} L${qBx},${qBy}
            M${qBx},${qBy} L${qCx},${qCy}
            M${qCx},${qCy} L${qDx},${qDy}
            M${qDx},${qDy} L${qAx},${qAy}
        `;
    }

</script>