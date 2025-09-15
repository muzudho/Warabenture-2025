<template>
    <!--
        静的インポート・動的コンポーネント
        public/blog-articles.json、
        router/page-map.ts, router/articles.json も編集してください（TODO: ここらへん自動生成化したい）
    -->
    <template
        v-for="pageKey in pageList"
        :key="pageKey"
    >
        <blog-article :page="pageKey"/>
        <button-to-go-to-top class="sec-1 pt-6"/>
    </template>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted, ref } from 'vue';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    import BlogArticle from '@/components/BlogArticle.vue';
    import ButtonToGoToTop from '@/components/ButtonToGoToTop.vue';


    // ################
    // # オブジェクト #
    // ################

    // useRuntimeConfig() は Nuxt 用。
    console.log(`DEBUG: useRuntimeConfig().public.baseUrl=${useRuntimeConfig().public.baseUrl}`);

    const pageList = ref<string[]>([]);

    // process は Node.JS専用。Tauri （ブラウザ）に process 変数は無い。
    if (process.server) {
        console.log('DEBUG: サーバーサイドで実行されています');
    } else {
        console.log('DEBUG: 実行しているのはサーバーサイドではありません');
    }

    // 非同期処理を含むコードブロックには async を付ける。
    onMounted(async () => {
        try {
            // Vite（Tauriのビルドツール）は、public/ ディレクトリのファイルを import 文で直接インポートすることを禁止してる。
            // インポートしたいなら、src/ ディレクトリ下にファイルを移動（例: src/assets/data/blog-articles.json）。

            // プロジェクト内にあるファイルを動的インポート。ただし、ファイルパスに変数は不可。
            const jsonData = await import('/assets/data/blog-articles.json').then(module => module.default);
            pageList.value = Array.isArray(jsonData) ? jsonData : ['1970-01/02-fri'];   // JSONが配列であることを確認し、配列ならそのまま返す、そうでなければ、エラー時の記事２を返す
            //console.log('Local fetch success:', pageList.value);

        } catch (err) {
            console.error('Local fetch error:', err);
            pageList.value = ['1970-01/01-thu'];    // エラー時の記事１
        }
    });

</script>
