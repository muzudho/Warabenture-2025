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

    // FIXME: ここでエラー： import { resolve } from 'path';

    // ++++++++++++++++++++++++++++++
    // + インポート　＞　パブリック +
    // ++++++++++++++++++++++++++++++

    //import jsonData from '../../../public/data/blog-articles.json';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    import BlogArticle from '@/components/BlogArticle.vue';
    import ButtonToGoToTop from '@/components/ButtonToGoToTop.vue';


    // ################
    // # 外部ファイル #
    // ################

    // FIXME: とりあえず静的に読み込んでみる。ブログを追加するたび、ウェブアプリケーションの再生成が必要か？
    //const jsonFilePath = "/data/blog-articles.json";    // public/data/blog-articles.json


    // ################
    // # オブジェクト #
    // ################

    console.log(`DEBUG: useRuntimeConfig().public.baseUrl=${useRuntimeConfig().public.baseUrl}`);

    const pageList = ref<string[]>([]);

    if (process.server) {
        console.log('サーバーサイドで実行されています');
    } else {
        console.log('実行しているのはサーバーサイドではありません');
    }

    /*
    // JSONファイルを読み込みたい。
    // なんだかよくわからないが、 useFetch は、サーバーサイド・レンダリングのエラーになりにくいらしい。
    if (process.server) {
    */
        // プリレンダリング時はローカルファイル
        //console.log('プリレンダリング時はローカルファイル');
        try {
            // 動的インポート、ただし、ファイルパスは埋込み。
            const jsonData = await import('#public/data/blog-articles.json').then(module => module.default);

            pageList.value = Array.isArray(jsonData) ? jsonData : ['1970-01/02-fri'];
            console.log('Local fetch success:', pageList.value);
        } catch (err) {
            console.error('Local fetch error:', err);
            pageList.value = ['1970-01/01-thu'];
        }

    /*
    } else {
        // クライアントサイドはuseFetch
        console.log('クライアントサイドはuseFetch');
        const {
            data,
            error
        } = await useFetch<string[]>(
            jsonFilePath,   // public フォルダー下のファイルへのパス
            {
                baseURL: useRuntimeConfig().public.baseUrl, // 詳しくは、 nuxt.config.ts ファイルを見てください
                headers: { 'Accept': 'application/json' },
                key: 'blog-articles',
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

        pageList.value = data.value;
    }
    */

</script>
