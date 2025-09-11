<template>
    <the-section-header/>

    <h4>カウントアップするぜ！</h4>
    <section class="sec-4">
        <p>カウント: {{ count }}</p>
        <v-btn @click="timerStart">スタート</v-btn>
        <v-btn @click="timerStop">ストップ</v-btn>
        <v-btn @click="timerReset">リセット</v-btn>
    </section>

    <br/>
    <h5>ソースコード</h5>
    <section class="sec-5">
        <source-link/>
    </section>

    <the-section-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { ref } from 'vue';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import SourceLink from '../../../components/SourceLink.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import TheSectionFooter from './the-section-footer.vue';
    import TheSectionHeader from './the-section-header.vue';


    // ##############
    // # 共有データ #
    // ##############

    const count = ref<number>(0);   // カウントの初期値
    const timerId = ref<number | null>(null);   // タイマーのIDを保持


    // ####################
    // # イベントハンドラ #
    // ####################

    function timerStart() : void {
        // 既にタイマーが動いてたら何もしない
        if (timerId.value) return;

        // requestAnimationFrameで約16.67ms（60fps）ごとにカウントアップ
        const tick = () => {
            count.value += 1;
            timerId.value = requestAnimationFrame(tick);
        };
        timerId.value = requestAnimationFrame(tick);
    }

    function timerStop() : void {
        // タイマーを停止
        if (timerId.value) {
            cancelAnimationFrame(timerId.value);
            timerId.value = null;
        }
    }

    function timerReset() : void {
        // カウントをリセットしてタイマーも停止
        count.value = 0;
        timerStop();
    }    

</script>
