<template>
    <!-- /pages/reference/making/count-up.vue のコンポーネント化 -->
    <div style="display: inline-block;">
        <p>カウント: {{ timer1Count }}</p>
        <v-btn @click="timerStart">スタート</v-btn>
        <v-btn @click="timerStop">ストップ</v-btn>
        <v-btn @click="timerReset">リセット</v-btn>
    </div>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onUnmounted, ref } from 'vue';


    // ##############################################
    // # このコンポーネントで起こるカスタムイベント #
    // ##############################################

    interface Emits {
        // イベント名と、変更通知メソッドの引数と、そのメソッドの戻り値。
        (event: 'countUp', count: number): void;
    }
    const emit = defineEmits<Emits>();


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++
    // + タイマー +
    // ++++++++++++

    const timer1Count = ref<number>(0);   // カウントの初期値
    const timer1Id = ref<number | null>(null);   // タイマーのIDを保持


    // ##############
    // # 開始と終了 #
    // ##############

    /**
     * 終了時
     */
    onUnmounted(()=>{
        timerStop();    // タイマーを止めます
    });


    // ####################
    // # イベントハンドラ #
    // ####################

    function timerStart() : void {
        // 既にタイマーが動いてたら何もしない
        if (timer1Id.value) return;

        // requestAnimationFrame は、ブラウザーのリフレッシュレートに同期してコールバックを呼び出します。
        //  60 Hz ディスプレイでは約  60 FPS（1/ 60秒）、
        // 120 Hz ディスプレイでは約 120 FPS（1/120秒）。
        // また、ブラウザーやOSがフレームをスキップする場合もあります。
        const tick = () => {
            timer1Count.value += 1;
            // 親に変更を通知
            emit('countUp', timer1Count.value);

            timer1Id.value = requestAnimationFrame(tick);
        };
        timer1Id.value = requestAnimationFrame(tick);
    }

    function timerStop() : void {
        // タイマーを停止
        if (timer1Id.value) {
            cancelAnimationFrame(timer1Id.value);
            timer1Id.value = null;
        }
    }

    function timerReset() : void {
        // カウントをリセットしてタイマーも停止
        timer1Count.value = 0;
        // 親に変更を通知
        emit('countUp', timer1Count.value);

        timerStop();
    }    


    // ################
    // # エクスポーズ #
    // ################

    defineExpose({
        timerStart,
        timerStop,
        timerReset,
    });

</script>
