<template>
    <div class="tile" :style="tileStyle"></div>
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
        srcLeft: number;    // 切り抜く矩形のX座標（px）
        srcTop: number;     // 切り抜く矩形のY座標（px）
        srcWidth: number;   // 切り抜く矩形の横幅（px）
        srcHeight: number;  // 切り抜く矩形の縦幅（px）
        tilemapUrl: string; // タイルマップ画像のURL
    }
    // デフォルト値を設定
    const props = withDefaults(defineProps<Props>(), {
        srcWidth: 32,   // FIXME: サイズは固定でいい？
        srcHeight: 32,
    });


    // ############################
    // # このコンポーネントの画面 #
    // ############################

    // ++++++++++++++++++++++++++++++++++++
    // + クライアント領域　＞　タイル画像 +
    // ++++++++++++++++++++++++++++++++++++

    const tileStyle = computed(() => ({
        width: `${props.srcWidth}px`,
        height: `${props.srcHeight}px`,
        backgroundImage: `url('${props.tilemapUrl}')`,
        backgroundPosition: `${-props.srcLeft}px ${-props.srcTop}px`,
        backgroundRepeat: 'no-repeat',
    }));

</script>

<style scoped>
    .tile {
        display: inline-block;
    }
</style>