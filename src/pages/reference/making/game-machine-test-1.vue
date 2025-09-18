<!--
    RPGのキャラクターの歩行グラフィック・サンプル。背景画像付き
-->

<template>

    <the-app-header/>
    <button-to-back-to-contents
        class="sec-0 mt-6 mb-6"
        pagePath="/reference"
    />

    <h1 class="mb-6">ゲームマシン・テスト１</h1>
    <section class="sec-1">
        <!-- ゲームマシン -->
        <game-machine-waratch2
            class="mb-6"
            :style="{
                position: 'relative',
            }"
            :screenWidth="3 * 64"
            :screenHeight="3 * 64"
            v-on:onLeftButtonPressed="onLeftButtonPressed"
            v-on:onLeftButtonReleased="onLeftButtonReleased"
            v-on:onUpButtonPressed="onUpButtonPressed"
            v-on:onUpButtonReleased="onUpButtonReleased"
            v-on:onRightButtonPressed="onRightButtonPressed"
            v-on:onRightButtonReleased="onRightButtonReleased"
            v-on:onDownButtonPressed="onDownButtonPressed"
            v-on:onDownButtonReleased="onDownButtonReleased"
            v-on:onSpaceButtonPressed="onSpaceButtonPressed"
            v-on:onSpaceButtonReleased="onSpaceButtonReleased"
        />

        <p>{{ message }}</p>
    </section>

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

    // アルファベット順
    import ButtonToBackToContents from '@/components/ButtonToBackToContents.vue';
    import GameMachineWaratch2 from '@/components/GameMachineWaratch2.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import TheAppHeader from '@/pages/the-app-header.vue';


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　メッセージ +
    // ++++++++++++++++++++++++++++++++

    const message = ref<string>('');


    // ################
    // # サブルーチン #
    // ################

    /**
     * 左。
     */
    function onLeftButtonPressed() : void {
        message.value = '左キーを押しました。';
    }


    function onLeftButtonReleased() : void {
        message.value = '左キーを放しました。';
    }


    /**
     * 上。
     */
    function onUpButtonPressed() : void {
        message.value = '上キーを押しました。';
    }


    function onUpButtonReleased() : void {
        message.value = '上キーを放しました。';
    }


    /**
     * 右。
     */
    function onRightButtonPressed() : void {
        message.value = '右キーを押しました。';
    }


    function onRightButtonReleased() : void {
        message.value = '右キーを放しました。';
    }


    /**
     * 下。
     */
    function onDownButtonPressed() : void {
        message.value = '下キーを押しました。';
    }


    function onDownButtonReleased() : void {
        message.value = '下キーを放しました。';
    }


    /**
     * スペース・キー。
     */
    function onSpaceButtonPressed() : void {
        message.value = 'スペース・キーを押しました。';
    }


    function onSpaceButtonReleased() : void {
        message.value = 'スペース・キーを放しました。';
    }

</script>
