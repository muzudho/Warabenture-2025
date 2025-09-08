<template>
    <tile
        v-for="tileSqPlus1 in props.boardArea"
        :key="tileSqPlus1"
        class="square"
        :style="getTileStyleByTileSq(tileSqPlus1 - 1)"
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
        <slot :tile-sq="tileSqPlus1 - 1">
        </slot>
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
        boardArea: number; // 盤のマス数
        tileWidth: number;
        tileHeight: number;
        tilemapUrl: string;
        getFixedTileSqFromTileSq: (tileSq: number) => number;
        getImageSqByFixedTileSq: (fixedTileSq: number) => number;
        getTileStyleByTileSq: (tileIndex: number) => CompatibleStyleValue;
        getSourceTileLeftByImageSq: (imageSq: number) => number;
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
