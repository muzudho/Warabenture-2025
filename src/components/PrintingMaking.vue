<template>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed } from 'vue';
    // 👆 ［初級者向けのソースコード］では、 reactive は使いません。

    // ********************
    // * インターフェース *
    // ********************

    import type Rectangle from '../interfaces/Rectangle';


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    
    interface Props {

        // ++++++++++++++++++++++++++++
        // + オブジェクト　＞　印字１ +
        // ++++++++++++++++++++++++++++

        printing1SourceTilemapCoordination: Rectangle[],
        printing1SourceTileIndexesBoard: number[],

    }
    // デフォルト値を設定
    const props = defineProps<Props>();


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++
    // + オブジェクト　＞　印字 +
    // ++++++++++++++++++++++++**
    //
    // 盤上に表示される数字柄、絵柄など。
    //

    /**
     * マスの印字。ソース・タイルマップのタイルのインデックス x の文字列。
     * @returns 該当なしのとき "-"
     */
    const getPrintingStringFromPrintingIndex = computed<
        (printingIndex: number) => string
    >(() => {
        return (printingIndex: number) => {

            if (printingIndex == -1) {
                return "-"; // 印字のサイズの範囲外になるところには、"-" でも表示しておく
            }

            const sourceTileIndex = props.printing1SourceTileIndexesBoard[printingIndex];
            return `${sourceTileIndex}`;
        };
    });


    /**
     * 印字表のインデックスを渡すことで、そこに印字するタイルの、ソースタイルの left を返す。
     */
    const getSourceTileLeftFromPrintingIndex = computed<
        (printingIndex:number) => number
    >(() => {
        return (printingIndex: number) => {

            if (printingIndex == -1) {
                return 0;   // 印字のサイズの範囲外になるところには、とりあえず 0 を返す。左上のタイルが選ばれる。
            }

            const sourceTileIndex = props.printing1SourceTileIndexesBoard[printingIndex];

            try {
                return props.printing1SourceTilemapCoordination[sourceTileIndex]["left"];
            } catch(error) {
                console.error(`ERROR: ${error} | printingIndex=${printingIndex}`);
                return 0;
            }
        };
    });


    // ################
    // # エクスポーズ #
    // ################

    defineExpose({
        getPrintingStringFromPrintingIndex,
        getSourceTileLeftFromPrintingIndex,
    });

</script>

<style scoped>
</style>
