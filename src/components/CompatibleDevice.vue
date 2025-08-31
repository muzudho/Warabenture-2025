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

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    // ++++++++++++++++++
    // + コンポーザブル +
    // ++++++++++++++++++

    import type { Device } from '../composables/compatible-device';


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++
    // + オブジェクト　＞　モバイル +
    // ++++++++++++++++++++++++++++++

    const device = ref<Device>('Unknown');


    // イベントハンドラーの定義
    function onWindowResized(): void {
        // window オブジェクトはクライアントサイドでしか使えないことに注意。
        if (window.innerWidth <= 768) {
            device.value = 'Mobile';   // ウィンドウの横幅が 768px以下ならスマホとみなします。

        } else {
            device.value = 'Pc';
        }
    }


    // ############################
    // # クライアントサイド開始時 #
    // ############################

    onMounted(()=>{
        // イベントハンドラーを追加
        window.addEventListener('resize', onWindowResized);
    });


    // ################
    // # エクスポーズ #
    // ################

    defineExpose({
        device,
    });

</script>
