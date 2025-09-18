<template>
    <div class="tile" :style="tileStyle">
        <slot></slot>
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
        srcLeft: number;    // 切り抜く矩形のX座標（px）
        srcTop: number; // 切り抜く矩形のY座標（px）
        srcWidth: number;   // 切り抜く矩形の横幅（px）
        srcHeight: number;  // 切り抜く矩形の縦幅（px）
        tilemapUrl: string; // タイルマップ画像のURL
    }
    // デフォルト値を設定
    const props = defineProps<Props>();


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++
    // + オブジェクト　＞　タイル１ +
    // ++++++++++++++++++++++++++++++

    // NOTE: コピーするときに、拡大縮小をするのは、なんか難しい。元画像は等倍サイズで使うものとします。
    const tileStyle = computed(() => ({
        width: `${props.srcWidth}px`,   // 元画像のスケールで切り抜く
        height: `${props.srcHeight}px`,
        backgroundImage: `url('${props.tilemapUrl}')`,
        backgroundPosition: `${-props.srcLeft}px ${-props.srcTop}px`,   // 元画像のスケールでシフトする
        backgroundRepeat: 'no-repeat',
    }));

</script>

<style scoped>
    .tile {
        display: inline-block;
    }
</style>