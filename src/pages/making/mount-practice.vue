<template>
    <the-chapter-header/>

    <h3>ページを開いたとき、閉じたときに処理するぜ！　の章</h3>
    <section class="sec-3">
        <p>{{ textVM }}</p>
    </section>

    <!-- エラーメッセージ欄 -->
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>

    <br/>
    <h3>ソースコード</h3>
    <section class="sec-3">
        <source-link/>
    </section>

    <the-chapter-footer/>
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

    import SourceLink from '../../components/SourceLink.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import TheChapterFooter from './the-chapter-footer.vue';
    import TheChapterHeader from './the-chapter-header.vue';


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