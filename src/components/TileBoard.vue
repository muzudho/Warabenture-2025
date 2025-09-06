<template>
    <tile
        v-for="tileSqPlus1 in props.tileBoardArea"
        :key="tileSqPlus1"
        class="square"
        :style="getSquareStyleFromTileSq(tileSqPlus1 - 1)"
        :srcLeft="getSourceTileLeftByImageSq(
            getImageSqByFixedTileSq(
                getFixedTileSqFromTileSq(tileSqPlus1 - 1)
            )
        ) ?? 0"
        :srcTop="0"
        :srcWidth="props.tileWidth"
        :srcHeight="props.tileHeight"
        :tilemapUrl="props.tilemapUrl"
    >
        <!--
        <slot>
            <span style="font-size:8px;">砂</span>
        </slot>
        <slot name="apple">
            <span style="font-size:8px;">風</span>
        </slot>
        <slot name="banana">
            <span style="font-size:8px;">ほ</span>
        </slot>
        -->
    </tile>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++
    // + インポート　＞　互換性対応 +
    // ++++++++++++++++++++++++++++++

    import type { CompatibleStyleValue }  from '../compatibles/compatible-style-value';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //
    import Tile from '@/components/Tile.vue';

    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    
    interface Props {
        tileBoardArea: number; // 盤のマス数
        tileWidth: number;
        tileHeight: number;
        tilemapUrl: string;
        getFixedTileSqFromTileSq: (tileSq: number) => number;
        getImageSqByFixedTileSq: (fixedTileSq: number) => number;
        getSquareStyleFromTileSq: (tileIndex: number) => CompatibleStyleValue;
        getSourceTileLeftByImageSq: (imageSq: number) => number;
    }
    const props = defineProps<Props>();

</script>

<style lang="css" scoped>
    div.square {    /* マス */
        position: absolute;
        image-rendering: pixelated;
    }
</style>
