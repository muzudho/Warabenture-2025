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

    const jsonFilePath = "/blog-articles.json";    // public/blog-articles.json


    // ################
    // # オブジェクト #
    // ################

    let pageList: string[] = [];

    // JSONファイルを読み込みたい。
    // なんだかよくわからないが、 useFetch は、サーバーサイド・レンダリングのエラーになりにくいらしい。
    const {
        data
    } = await useFetch<string[]>(
        jsonFilePath,   // public フォルダー下のファイルへのパス
        {
            baseURL: '/',   // ？
            transform: (jsonObj: unknown): string[] => {    // やりたければ、データの変換処理
                // JSONが配列であることを確認し、配列ならそのまま返す、そうでなければ空配列を返す
                return Array.isArray(jsonObj) ? jsonObj : [];
            },
            default: () => [], // エラー時のデフォルト値
        }
    );

    pageList = data.value;

</script>
