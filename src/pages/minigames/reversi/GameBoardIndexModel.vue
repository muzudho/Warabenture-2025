<template>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, ref } from 'vue';
    import { SQ_OUT_OF_BOARD } from './spec';
    import { makeEastOf, makeWestOf, makeSouthOf, makeNorthOf, makeNortheastOf, makeSouthwestOf, makeSoutheastOf, makeNorthwestOf } from './game-board-index-util';


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    
    interface Props {
        fileNum: number;    // 盤が横に何マスか
        rankNum: number;    // 盤が縦に何マスか
    }
    // デフォルト値を設定
    const props = defineProps<Props>();


    // ################
    // # オブジェクト #
    // ################

    // サイズ類：
    const area = computed(()=>{
        return props.fileNum * props.rankNum;
    });

    // 方向類：
    const allDirectionsForeOf = ref<((sq: number) => number)[]>([]);
    const allDirectionsBackOf = ref<((sq: number) => number)[]>([]);
    // const allWaysNextOf = ref<((sq: number) => number)[]>([]);
    // const allWaysBackOf = ref<((sq: number) => number)[]>([]);


    function getForeOf(
        direction: number
    ) :
        (sq: number) => number
    {
        if (!(direction in allDirectionsForeOf.value)) {
            return (_sq: number) => { return SQ_OUT_OF_BOARD;};
        }

        return allDirectionsForeOf.value[direction];
    }


    function getBackOf(
        direction: number
    ) :
        (sq: number) => number
    {
        if (!(direction in allDirectionsBackOf.value)) {
            return (_sq: number) => { return SQ_OUT_OF_BOARD;};
        }

        return allDirectionsBackOf.value[direction];
    }

    const eastOf = makeEastOf(props.fileNum);   // 水平方向
    const westOf = makeWestOf(props.fileNum);   // 水平方向
    const southOf = makeSouthOf(props.fileNum, area.value);   // 垂直方向
    const northOf = makeNorthOf(props.fileNum);   // 垂直方向
    const northeastOf = makeNortheastOf(props.fileNum);   // 右肩上がり方向
    const southwestOf = makeSouthwestOf(props.fileNum, area.value);   // 右肩上がり方向
    const southeastOf = makeSoutheastOf(props.fileNum, area.value);   // 右肩下がり方向
    const northwestOf = makeNorthwestOf(props.fileNum);   // 右肩下がり方向


    // ##############
    // # 開始／終了 #
    // ##############

    onMounted(()=>{
        console.log(`DEBUG: [GameBoardIndexModel.vue onMounted] 開始。`);
        // ゲーム盤インデックス：
        allDirectionsForeOf.value = [
            (_sq: number) => { return -1; },
            eastOf,   // 水平方向
            southOf,  // 垂直方向
            northeastOf,  // 右肩上がり方向
            southeastOf,  // 右肩下がり方向
        ] as ((sq: number) => number)[];
        allDirectionsBackOf.value = [
            (_sq: number) => { return -1; },
            westOf,
            northOf,
            southwestOf,
            northwestOf,
        ] as ((sq: number) => number)[];
        // allWaysNextOf.value = [   // FIXME: これが無くてもアルゴリズム作れないか？
        //     (_sq: number) => { return -1; },
        //     eastOf,   // 水平方向
        //     westOf,
        //     southOf,  // 垂直方向
        //     northOf,
        //     northeastOf,  // 右肩上がり方向
        //     southwestOf,
        //     southeastOf,  // 右肩下がり方向
        //     northwestOf,
        // ];
        // allWaysBackOf.value = [
        //  (_sq: number) => { return -1; },
        //  westOf,
        //  eastOf,
        //  northOf,
        //  southOf,
        //  southwestOf,
        //  northeastOf,
        //  northwestOf,
        //  southeastOf
        // ];
    });


    // ################
    // # エクスポーズ #
    // ################

    defineExpose({
        // サイズ類：
        fileNum: props.fileNum,
        rankNum: props.rankNum,
        area,

        // 方向類：
        eastOf, // 水平方向
        westOf,
        southOf,    // 垂直方向
        northOf,
        northeastOf,    // 右肩上がり方向
        southwestOf,
        southeastOf,    // 右肩下がり方向
        northwestOf,

        getForeOf,
        getBackOf,
        allDirectionsForeOf,
        allDirectionsBackOf,
        // allWaysNextOf,
    });

</script>
