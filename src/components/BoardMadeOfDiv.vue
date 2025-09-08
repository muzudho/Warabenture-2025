<template>
    <div
        v-for="tileSqPlus1 in props.boardArea"
        :key="tileSqPlus1"
        class="square"
        :style="getTileStyleByTileSq(tileSqPlus1 - 1)">

        <slot :tile-sq="tileSqPlus1 - 1">
        </slot>
    </div>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++
    // + インポート　＞　互換性対応 +
    // ++++++++++++++++++++++++++++++

    import type { CompatibleStyleValue }  from '../compatibles/compatible-style-value';

    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    
    interface Props {
        boardArea: number; // 盤のマス数
        getTileStyleByTileSq: (tileIndex: number) => CompatibleStyleValue;
    }
    const props = defineProps<Props>();


    // ############
    // # スロット #
    // ############

    const slots = defineSlots<{
        default(props: { tileSq: number }): any;
    }>();

</script>

<style lang="css" scoped>
    div.square {    /* マス */
        position: absolute;
        image-rendering: pixelated;
    }
</style>
