<!--
    PC か、モバイルかの違いを吸収します。
-->

<template>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { ref } from 'vue';


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++
    // + オブジェクト　＞　モバイル +
    // ++++++++++++++++++++++++++++++

    const isMobileMaybe = ref<boolean>(false);


    // イベントハンドラーの定義
    function onWindowResized(): void {
        isMobileMaybe.value = window.innerWidth <= 768;   // ウィンドウの横幅が 768px以下ならスマホとみなします。
        console.log(`onWindowResized: window.innerWidth=${window.innerWidth} isMobileMaybe.value=${isMobileMaybe.value}`);
    }


    // イベントハンドラーを追加
    window.addEventListener('resize', onWindowResized);


    // ################
    // # エクスポーズ #
    // ################

    defineExpose({
        isMobileMaybe,
    });

</script>
