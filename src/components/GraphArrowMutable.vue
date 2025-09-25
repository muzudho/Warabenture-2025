<template>
    <div
        :style="`left: ${svgLeft}px; top: ${svgTop}px; width: ${svgWidth}px; height: ${svgHeight}px;`"
        style="position: absolute;">
        <!--  border: dashed 1px ${props.color}; -->
        <svg :width="svgWidth" :height="svgHeight" :viewBox="`0 0 ${svgWidth} ${svgHeight}`">
            <path :d="generateArrowPath()" :stroke="color" :stroke-width="strokeWidth" fill="none"/>
        </svg>
    </div>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed } from 'vue';


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
    // 👆 上図 B,C,D が矢尻。
    //

    // 矢じり（アローヘッド）の長さ（線の太さに比例）
    const arrowHeadSize = computed(() => props.strokeWidth * 4);

    // 矢印の角度を計算
    const angle = computed(() => Math.atan2(height, width));


    // ++++++++++
    // + その他 +
    // ++++++++++

    // 終点の計算
    const endX = computed(() => startX + width);
    const endY = computed(() => startY + height);

    const top = computed(() => Math.min(startY, endY.value));
    // const right = Math.max(startX, endX);
    // const bottom = Math.max(startY, endY);
    const left = computed(() => Math.min(startX, endX.value));

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
    const arrowHeadC = computed(() => {
        // 矢尻の羽の横幅、縦幅
        const arrowHeadSizeC = {
            width: arrowHeadSize.value * Math.cos(angle.value - Math.PI / 6),
            height: arrowHeadSize.value * Math.sin(angle.value - Math.PI / 6),
        }
        return {
            x: endX.value - arrowHeadSizeC.width,
            y: endY.value - arrowHeadSizeC.height,
        };
    });
    const arrowHeadD = computed(() => {
        // 矢尻の羽の横幅、縦幅
        const arrowHeadSizeD = {
            width: arrowHeadSize.value * Math.cos(angle.value + Math.PI / 6),
            height: arrowHeadSize.value * Math.sin(angle.value + Math.PI / 6),
        };
        return {
            x: endX.value - arrowHeadSizeD.width,
            y: endY.value - arrowHeadSizeD.height,
        };
    });

    // // 矢尻の部分の幅と高さを計算
    // const arrowHeadWidth = arrowHeadLeftWidth + arrowHeadRightWidth;
    // const arrowHeadHeight = arrowHeadTopHeight + arrowHeadBottomHeight;

    // （キャンバスの余白や線の太さを考えない）数学的な頂点の位置
    //
    //        D
    //         ＼
    //  A--------B
    //         ／
    //        C
    //
    const pAx = startX - left.value;
    const pAy = startY - top.value;
    const pBx = endX.value - left.value;
    const pBy = endY.value - top.value;
    const pCx = arrowHeadC.value.x - left.value;
    const pCy = arrowHeadC.value.y - top.value;
    const pDx = arrowHeadD.value.x - left.value;
    const pDy = arrowHeadD.value.y - top.value;

    // SVGのキャンバスサイズを動的に計算（線の太さがあるので、余白を確保）
    const boldLeft = computed(()=>{
        const arrowHeadLeft = Math.min(arrowHeadC.value.x, arrowHeadD.value.x);
        const arrowHeadLeftWidth = endX.value - arrowHeadLeft;    // 矢尻が終点より左にどれだけはみ出ているか。
        return Math.max(arrowHeadLeftWidth, props.strokeWidth / 2);
    });
    const boldRight = computed(()=>{
        const arrowHeadRight = Math.max(arrowHeadC.value.x, arrowHeadD.value.x);
        const arrowHeadRightWidth = arrowHeadRight - endX.value;
        return Math.max(arrowHeadRightWidth, props.strokeWidth / 2);
    });
    const boldTop = computed(()=>{
        const arrowHeadTop = Math.min(arrowHeadC.value.y, arrowHeadD.value.y);
        const arrowHeadTopHeight = endY.value - arrowHeadTop;
        return Math.max(arrowHeadTopHeight, props.strokeWidth / 2);
    });
    const boldBottom = computed(()=>{
        const arrowHeadBottom = Math.max(arrowHeadC.value.y, arrowHeadD.value.y);
        const arrowHeadBottomHeight = arrowHeadBottom - endY.value;
        return Math.max(arrowHeadBottomHeight, props.strokeWidth / 2);
    });

    // SVG キャンバス
    const svgLeft = computed(()=>{
        return left.value - boldLeft.value;
    });
    const svgTop = computed(()=>{
        return top.value - boldTop.value;
    });
    const svgWidth = computed(()=>{
        return Math.abs(width) + boldLeft.value + boldRight.value;
    });
    const svgHeight = computed(()=>{
        return Math.abs(height) + boldTop.value + boldBottom.value;
    });

    // （キャンバスの余白や、線の太さを考慮した中での）点の位置
    //
    // +-------------------+
    // |                   |
    // |          D        |
    // |         ---       |
    // |         ＼ ＼     |
    // |  +--------+  ＼   |
    // |  A             B  |
    // |  +--------+   ／  |
    // |         ／ ／     |
    // |         ---       |
    // |          C        |
    // |                   |
    // +-------------------+
    //
    const qAx = pAx + boldLeft.value;
    const qAy = pAy + boldTop.value;
    const qBx = pBx + boldLeft.value;
    const qBy = pBy + boldTop.value;
    const qCx = pCx + boldLeft.value;
    const qCy = pCy + boldTop.value;
    const qDx = pDx + boldLeft.value;
    const qDy = pDy + boldTop.value;


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