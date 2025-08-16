<template>
    <div
        :style="`left: ${svgLeft}px; top: ${svgTop}px; width: ${svgWidth}px; height: ${svgHeight}px;`"
        style="position: absolute;">
        <!-- border: dashed 1px ${props.color}; -->
        <svg :width="svgWidth" :height="svgHeight" :viewBox="`0 0 ${svgWidth} ${svgHeight}`">
            <path :d="generateArrowPath()" :stroke="color" :stroke-width="strokeWidth" fill="none"/>
        </svg>
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

    // 終点の計算
    const endX = startX + width;
    const endY = startY + height;

    const top = Math.min(startY, endY);
    // const right = Math.max(startX, endX);
    // const bottom = Math.max(startY, endY);
    const left = Math.min(startX, endX);

    // 直線の長さを計算
    //const length = Math.sqrt(width ** 2 + height ** 2);

    // （キャンバスの余白や線の太さを考えない）数学的な頂点の位置
    //
    //  A--------B
    //
    const pAx = startX - left;
    const pAy = startY - top;
    const pBx = endX - left;
    const pBy = endY - top;

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
    // +-------------------+
    // |                   |
    // |  +-------------+  |
    // |  A             B  |
    // |  +-------------+  |
    // |                   |
    // +-------------------+
    //
    const qAx = pAx + boldLeft;
    const qAy = pAy + boldTop;
    const qBx = pBx + boldLeft;
    const qBy = pBy + boldTop;


    // ############################
    // # このコンポーネントの画面 #
    // ############################

    function generateArrowPath() : string {

        // SVGパスを生成
        //
        //  A--------B
        //
        return `
            M${qAx},${qAy} L${qBx},${qBy}
        `;
    }

</script>