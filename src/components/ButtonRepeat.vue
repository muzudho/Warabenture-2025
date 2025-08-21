<!--
    pages/making/button-repeat-1.vue の［ボタンの押しっぱなし］機能のコンポーネント化。
    使用例は
    pages/making/input-axis-target.vue 参照。
-->

<template>
    <!-- とくに表示物はありません -->
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onUnmounted, ref } from 'vue';
    // 👆 ［初級者向けのソースコード］では、 reactive は使いません。


    // ############################
    // # アプリケーション・データ #
    // ############################
    //
    // 今動いているアプリケーションの状態を記録しているデータ。特に可変のもの。
    //

    const appManualKeyRepeatTimerId = ref<number | null>(null);   // ［キーボード操作説明］のボタンのキー・リピート用


    // ##########
    // # 終了時 #
    // ##########

    onUnmounted(()=>{
        justStop();
    });


    /**
     * 長押し開始
     * @param callback ボタンを押しっぱなしにしているときのコールバック関数
     */
    function start(callback:()=>void) : void {      
        callback(); // 即時実行
        
        const intervalTime = 17;    // インターバルの時間（ミリ秒）は調整可能
        appManualKeyRepeatTimerId.value = setInterval(() => {   // 指定の間隔で繰り返し実行
            callback();
        }, intervalTime);
    }

    /**
     * 長押し終了
     * @param callback ボタンを放したときのコールバック関数
     */
    function stop(callback:()=>void) {
        if (appManualKeyRepeatTimerId.value) {
            clearInterval(appManualKeyRepeatTimerId.value);    // インターバルをクリア
            appManualKeyRepeatTimerId.value = null;

            callback(); // 即時実行
        }
    }


    /**
     * ボタンを放したときのコールバックを呼ばずに長押し終了
     */
    function justStop() {
        if (appManualKeyRepeatTimerId.value) {
            clearInterval(appManualKeyRepeatTimerId.value);    // インターバルをクリア
            appManualKeyRepeatTimerId.value = null;
        }
    }


    // ################
    // # エクスポーズ #
    // ################

    defineExpose({
        start,
        stop,
        justStop,
    });

</script>

<style scoped>
</style>
