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

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    import BlogArticle from '@/components/BlogArticle.vue';
    import ButtonToGoToTop from '@/components/ButtonToGoToTop.vue';


    // ################
    // # 外部ファイル #
    // ################

    const jsonFilePath = "/data/blog-articles.json";    // public/data/blog-articles.json


    // ################
    // # オブジェクト #
    // ################

    console.log(`DEBUG: useRuntimeConfig().public.apiBase=${useRuntimeConfig().public.apiBase}`);

    let pageList: string[] = [];

    // JSONファイルを読み込みたい。
    // なんだかよくわからないが、 useFetch は、サーバーサイド・レンダリングのエラーになりにくいらしい。
    const {
        data,
        error
    } = await useFetch<string[]>(
        jsonFilePath,   // public フォルダー下のファイルへのパス
        {
            baseURL: useRuntimeConfig().public.apiBase, // 詳しくは、 nuxt.config.ts ファイルを見てください
            transform: (jsonObj: unknown): string[] => {    // やりたければ、データの変換処理
                // JSONが配列であることを確認し、配列ならそのまま返す、そうでなければ、エラー時の記事２を返す
                console.log(`DEBUG: JSON.stringify(jsonObj, null, 4)=${JSON.stringify(jsonObj, null, 4)}`);
                return Array.isArray(jsonObj) ? jsonObj : ['1970-01/02-fri'];
            },
            default: () => ['1970-01/01-thu'], // エラー時の記事１
        }
    );

    if (error.value) {
        console.error('Fetch error:', error.value);
    }    

    pageList = data.value;

</script>
