<!--
    視界の外
-->

<template>
    <div
        :style="outOfSight1Style"
        class="mask"
        v-bind="$attrs" />
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, ref } from 'vue';
    // 👆 ［初級者向けのソースコード］では、 reactive は使いません。

    // ++++++++++++++
    // + 互換性対応 +
    // ++++++++++++++

    import type { CompatibleStyleValue }  from '../compatibles/compatible-style-value';


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    
    interface Props {
        // ++++++++++++++++++++++++++++++++
        // + オブジェクト　＞　タイル盤１ +
        // ++++++++++++++++++++++++++++++++

        tileBoard1TileWidth: number,
        tileBoard1TileHeight: number,
        board1FileNum: number,  // 筋の数。ただし、右側と下側に１マス余分に付いているマスクは含まない。
        board1RankNum: number,  // 段の数
    }
    // デフォルト値を設定
    const props = defineProps<Props>();


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　視界の外１ +
    // ++++++++++++++++++++++++++++++++

    const outOfSight1WithMaskSquareCount = ref<number>(1);    // マスクの幅（単位：マス）
    const outOfSight1WithMaskBottomRightMargin: number = 1;  // マスクは右下に１マス分多く作ります。
    const outOfSight1WithMaskFileNum = computed<number>(()=>{
        return props.board1FileNum + outOfSight1WithMaskBottomRightMargin;
    });
    const outOfSight1WithMaskRankNum = computed<number>(()=>{
        return props.board1RankNum + outOfSight1WithMaskBottomRightMargin;
    });
    const outOfSight1Style = computed<CompatibleStyleValue>(()=>{
        // ボーダーを使って色を塗っています。
        return {
            width: `${outOfSight1WithMaskFileNum.value * props.tileBoard1TileWidth}px`,
            height: `${outOfSight1WithMaskRankNum.value * props.tileBoard1TileHeight}px`,
            borderTop: `solid ${outOfSight1WithMaskSquareCount.value * props.tileBoard1TileHeight}px rgba(0,0,0,0.5)`,
            borderRight: `solid ${(outOfSight1WithMaskSquareCount.value + outOfSight1WithMaskBottomRightMargin) * props.tileBoard1TileWidth}px rgba(0,0,0,0.5)`,
            borderBottom: `solid ${(outOfSight1WithMaskSquareCount.value + outOfSight1WithMaskBottomRightMargin) * props.tileBoard1TileHeight}px rgba(0,0,0,0.5)`,
            borderLeft: `solid ${outOfSight1WithMaskSquareCount.value * props.tileBoard1TileWidth}px rgba(0,0,0,0.5)`,
        };
    });


    // ################
    // # エクスポーズ #
    // ################

    defineExpose({
        outOfSight1WithMaskSquareCount,
        outOfSight1WithMaskBottomRightMargin,
        outOfSight1WithMaskFileNum,
        outOfSight1WithMaskRankNum,
    });

</script>

<style scoped>
    div.mask {  /* 視界の外１ */
        position: absolute;
        image-rendering: pixelated;
    }
</style>
