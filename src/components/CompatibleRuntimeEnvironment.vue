<!--
    PC か、モバイルかの違いを吸収します。
-->

<template>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted, ref } from 'vue';


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++
    // + オブジェクト　＞　モバイル +
    // ++++++++++++++++++++++++++++++

    const isMobileMaybe = ref<boolean>(false);


    // イベントハンドラーの定義
    function onClientsideWindowResized(): void {
        // window オブジェクトはクライアントサイドでしか使えないことに注意。
        isMobileMaybe.value = window.innerWidth <= 768;   // ウィンドウの横幅が 768px以下ならスマホとみなします。
    }


    // ############################
    // # クライアントサイド開始時 #
    // ############################

    onMounted(()=>{
        // イベントハンドラーを追加
        window.addEventListener('resize', onClientsideWindowResized);
    });


    // ################
    // # エクスポーズ #
    // ################

    defineExpose({
        isMobileMaybe,
    });

</script>
