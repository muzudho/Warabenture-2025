<template>
    <div class="tile" :style="tileStyle"></div>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed } from 'vue';

    // ********************
    // * インターフェース *
    // ********************

    // NOTE: Tauri なら interface をインポートできる。（Tauri 以外では type を付ける）
    // NOTE: Nuxt なら interface は無いので、import する時は type を付ける
    import type Rectangle from '../interfaces/Rectangle';

    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    interface Props {
        frames: Rectangle[];
        tilemapUrl: string; // タイルマップ画像のURL
        slow: number; // スローモーションの倍率
        time: number; // 現在の時間（フレーム）
    }
    const props = defineProps<Props>();

    // ############################
    // # このコンポーネントの画面 #
    // ############################

    // ++++++++++++++++++++++++++++++++++++
    // + クライアント領域　＞　タイル画像 +
    // ++++++++++++++++++++++++++++++++++++

    const tileStyle = computed(() => ({
        width: `${props.frames[flameIndex.value].width}px`,
        height: `${props.frames[flameIndex.value].height}px`,
        backgroundImage: `url('${props.tilemapUrl}')`,
        backgroundPosition: `${-props.frames[flameIndex.value].left}px ${-props.frames[flameIndex.value].top}px`,
        backgroundRepeat: 'no-repeat',
    }));

    const flameIndex = computed(() => {
        return Math.floor(props.time / props.slow) % props.frames.length;
    });


</script>

<style scoped>
    .tile {
        display: inline-block;
    }
</style>