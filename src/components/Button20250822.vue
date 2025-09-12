<!--
    pages/reference/making/button-repeat-1.vue の［ボタンの押しっぱなし］機能のコンポーネント化。
    使用例は
    pages/reference/making/input-axis-target-1.vue 参照。

    役割は２つ。
    （１）　ボタンの押しっぱなし（キーリピート）を有効にする。
    （２）　クリックとタッチ操作の両方に対応する。
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

    // `vite build` コマンド打鍵時、 setInterval(...) 関数が number 型ではなく NodeJS.Timeout 型を返すので、どちらも許容できるようにする。
    const appManualKeyRepeatTimerId = ref<number | NodeJS.Timeout | null>(null);   // ［キーボード操作説明］のボタンのキー・リピート用


    // ##########
    // # 終了時 #
    // ##########

    onUnmounted(()=>{
        release();
    });


    /**
     * タッチと、クリックを分けます。
     */
    function handleMouseDown(
            e: MouseEvent | TouchEvent,
            callback:()=>void,
            options: {
                repeat?: boolean
            } = {
                repeat: false
            }) : void {
        // タッチイベントを除外
        if (e.type === 'mousedown' && !('touches' in e)) {
            press(e, callback, options);
        }        
    }


    /**
     * 長押し開始
     * @param callback ボタンを押しっぱなしにしているときのコールバック関数
     */
    function press(
            e: MouseEvent | TouchEvent,
            callback:()=>void,
            options: {
                repeat?: boolean
            } = {
                repeat: false
            }) : void {

        // 未指定のメンバーにデフォルト値をセット：
        options = {
            repeat: options.repeat ?? false
        };

        e.preventDefault(); // ブラウザのデフォルトのタッチ動作（長押しなど）をキャンセル

        callback(); // 即時実行
        
        if (options.repeat) {
            const intervalTime = 17;    // インターバルの時間（ミリ秒）は調整可能
            appManualKeyRepeatTimerId.value = setInterval(() => {   // 指定の間隔で繰り返し実行
                callback();
            }, intervalTime);
        }
    }


    /**
     * 長押し終了
     * @param callback ボタンを放したときのコールバック関数
     */
    function release(callback?:()=>void) {
        if (appManualKeyRepeatTimerId.value) {
            clearInterval(appManualKeyRepeatTimerId.value);    // インターバルをクリア
            appManualKeyRepeatTimerId.value = null;

            if (callback) {
                callback(); // 即時実行
            }
        }
    }


    // ################
    // # エクスポーズ #
    // ################

    defineExpose({
        handleMouseDown,
        press,
        release
    });

</script>

<style scoped>
</style>
