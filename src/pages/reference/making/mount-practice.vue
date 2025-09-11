<template>
    <the-section-header/>

    <h4>ページを開いたとき、閉じたときに処理をする章だぜ！</h4>
    <section class="sec-4">
        <p>{{ textVM }}</p>
    </section>

    <!-- エラーメッセージ欄 -->
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>

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

    import TheSectionFooter from './the-section-footer.vue';
    import TheSectionHeader from './the-section-header.vue';


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