<template>
    <div
        :style="`left: ${svgLeft}px; top: ${svgTop}px; width: ${svgWidth}px; height: ${svgHeight}px;`"
        style="position: absolute;">
        <!-- border: dashed 1px ${props.color}; -->

        <svg
            :width="svgWidth" :height="svgHeight" :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
            style="position: absolute;">
            <!-- 図形描画 -->
            <ellipse
                :cx="cx"
                :cy="cy"
                :rx="rx"
                :ry="ry"
                :fill="props.fill"
                :stroke="props.color"
                :stroke-width="props.strokeWidth"/>
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
        left: number;           // 始点のX座標
        top: number;            // 始点のY座標
        width: number;          // X方向の長さ
        height: number;         // Y方向の長さ
        strokeWidth: number;    // 線の太さ
        color: string;          // 線の色
        fill?: string;          // 塗りつぶしの色
    }
    // デフォルト値を設定
    const props = withDefaults(defineProps<Props>(), {
        left: 0,            // 始点のX座標
        top: 0,             // 始点のY座標
        width: 32,          // 終点のX座標
        height: 32,         // 終点のY座標
        strokeWidth: 4,     // 線の太さ
        color: 'black',     // 線の色
        fill: 'none',       // 塗りつぶしの色
    });


    // ##############
    // # 共通データ #
    // ##############

    const { left, top, width, height } = props;

    // （線の太さを考慮して）座標変換
    const cx = width / 2 + props.strokeWidth / 2;
    const cy = height / 2 + props.strokeWidth / 2;
    const rx = width / 2;
    const ry = height / 2;

    // SVGのキャンバスサイズを動的に計算（線の太さがあるので、余白を確保）
    const svgLeft = left - props.strokeWidth / 2;
    const svgTop = top - props.strokeWidth / 2;
    const svgWidth = Math.abs(width) + props.strokeWidth;
    const svgHeight = Math.abs(height) + props.strokeWidth;

</script>