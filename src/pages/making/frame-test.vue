<template>
    <h2>カウントアップのテストだぜ！</h2>
    <section class="sec-2">
        <p>カウント: {{ count }}</p>
        <v-btn @click="startTimer">スタート</v-btn>
        <v-btn @click="stopTimer">ストップ</v-btn>
        <v-btn @click="resetTimer">リセット</v-btn>
    </section>
    <hr/>
    <router-link to="/making">メイキングに戻る</router-link>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted, ref } from 'vue';

    // ##############
    // # 共有データ #
    // ##############

    const count = ref<number>(0);   // カウントの初期値
    const timerId = ref<number | null>(null);   // タイマーのIDを保持

    onMounted(() => {
        // コンポーネントがマウントされたときの処理
    });

    // ####################
    // # イベントハンドラ #
    // ####################

    function startTimer() : void {
        // 既にタイマーが動いてたら何もしない
        if (timerId.value) return;

        // requestAnimationFrameで約16.67ms（60fps）ごとにカウントアップ
        const tick = () => {
            count.value += 1;
            timerId.value = requestAnimationFrame(tick);
        };
        timerId.value = requestAnimationFrame(tick);
    }

    function stopTimer() : void {
        // タイマーを停止
        if (timerId.value) {
            cancelAnimationFrame(timerId.value);
            timerId.value = null;
        }
    }

    function resetTimer() : void {
        // カウントをリセットしてタイマーも停止
        count.value = 0;
        stopTimer();
    }    
</script>
