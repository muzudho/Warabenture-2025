<template>
    <the-app-header/>
    <button-to-back-to-contents
        class="sec-0 mt-6"
        pagePath="../"
    />

    <h1>ページを開いたとき、閉じたときに処理をする章だぜ！</h1>
    <section class="sec-1">
        <p>{{ textVM }}</p>
    </section>

    <!-- エラーメッセージ欄 -->
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>

    <br/>
    <h2>ソースコード</h2>
    <section class="sec-2">
        <source-link/>
    </section>

    <button-to-go-to-top class="sec-0 pt-6"/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted, onUnmounted, ref } from 'vue';

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

    import ButtonToBackToContents from '@/components/ButtonToBackToContents.vue';
    import ButtonToGoToTop from '@/components/ButtonToGoToTop.vue';
    import TheAppHeader from '../../the-app-header.vue';


    // ##############
    // # 共有データ #
    // ##############

    const textVM = ref<string>('読み込み中...');
    const errorMessage = ref<string>('');


    // ##############
    // # 起動時処理 #
    // ##############

    // コンポーネントがマウントされたときに実行
    onMounted(async () => {
        alert("ページを開いたな（＾▽＾）！")
        try {
            textVM.value = "ページを開いたタイミングで処理を行えるぜ（＾▽＾）！　ソースコードを見てくれよな（＾▽＾）！";
                  
        } catch (error) {
            errorMessage.value = `エラーだぜ: ${error}`; // エラーハンドリング
        }
    });

    onUnmounted(async () => {
        alert("ページを閉じたな（＾▽＾）！")
        // コンポーネントがアンマウントされるときに実行
        textVM.value = "コンポーネントがアンマウントされたぜ（＾▽＾）！";
    });
</script>