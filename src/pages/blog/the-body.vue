<template>
    <label for="yearMonthSelect">年月：</label>
    <select
        id="yearMonthSelect"
        v-model="selectedYearMonth"
        @change="filterByYearMonth"
    >
        <option value="">ぜんぶ</option>
        <option
            v-for="ym in yearMonthList"
            :key="ym"
            :value="ym"
        >
            {{ ym }}
        </option>
    </select>

    <!--
    <p>idList={{ idList }}</p>
    <p>yearMonthList={{ yearMonthList }}</p>
    <p>selectedYearMonth={{ selectedYearMonth }}</p>
    -->

    <!--
        静的インポート・動的コンポーネント
        public/blog-articles.json、
        router/page-map.ts, "src/assets/data/routes/articles.json" も編集してください（TODO: ここらへん自動生成化したい）
    -->
    <template
        v-for="pageKey in idList"
        :key="pageKey"
    >
        <blog-article :page="pageKey"/>
        <button-to-back-to-top class="sec-1 pt-6"/>
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
    import ButtonToBackToTop from '@/components/ButtonToBackToTop.vue';


    // ################
    // # オブジェクト #
    // ################

    // useRuntimeConfig() は Nuxt 用。
    console.log(`DEBUG: useRuntimeConfig().public.baseUrl=${useRuntimeConfig().public.baseUrl}`);

    // process は Node.JS専用。Tauri （ブラウザ）に process 変数は無い。
    if (process.server) {
        console.log('DEBUG: サーバーサイドで実行されています');
    } else {
        console.log('DEBUG: 実行しているのはサーバーサイドではありません');
    }

    interface BlogArticle { // 型定義
        id: string;
        date: string;
        category: string[];
    }

    const allArticlesJsonObj = ref<BlogArticle[]>([]);
    const idList = ref<string[]>([]); // 表示する記事のキー・リスト
    const yearMonthList = ref<string[]>([]);    // 年月リスト
    const selectedYearMonth = ref<string>('');  // 選択された年月


    // ################
    // # サブルーチン #
    // ################

    // 年月選択時のフィルタリング
    const filterByYearMonth = () => {
        idList.value = allArticlesJsonObj.value
            .filter(article => 
                !article.category.includes('System')    // カテゴリーに "System" が含まれるものは除外
                && (!selectedYearMonth.value || article.date.startsWith(selectedYearMonth.value))   // 年月で絞り込み
            )
            .map(article => article.id);    // 記事Id だけの配列にする
        console.log('Filtered:', idList.value);
    };


    // 非同期処理を含むコードブロックには async を付ける。
    onMounted(async () => {
        try {
            // Vite（Tauriのビルドツール）は、public/ ディレクトリのファイルを import 文で直接インポートすることを禁止してる。
            // インポートしたいなら、src/ ディレクトリ下にファイルを移動（例: src/assets/data/blog-articles.json）。

            // プロジェクト内にある src フォルダー下のファイルを動的インポート。ただし、ファイルパスに変数は不可。
            allArticlesJsonObj.value = await import('@/assets/data/routes/articles.json').then(module => module.default) as BlogArticle[];
            //console.log(`DEBUG: JSON.stringify(jsonData, null, 4)=${JSON.stringify(allArticlesJsonObj, null, 4)}`);

            // 記事リストからidだけ抽出
            idList.value = allArticlesJsonObj.value
                .filter(article => article.category.includes('Talking'))
                .map(article => article.id);
            console.log(`idList.value=${idList.value}`)

            // 記事リストから、 Date フィールドの年月（YYYY-MM）だけ抽出し、重複を排除
            yearMonthList.value = [...new Set(  // Set で重複を排除
                allArticlesJsonObj.value
                    .filter(article => !article.category.includes('System'))    // カテゴリーに "System" を含むものは除外
                    .map(article => article.date.slice(0, 7)) // YYYY-MM-DD -> YYYY-MM
            )].sort((a, b) => b.localeCompare(a));  // 降順ソート
            console.log(`yearMonthList.value=${yearMonthList.value}`)

            // 初期表示を最新の［年月］で絞り込み
            if (yearMonthList.value.length > 0) {
                selectedYearMonth.value = yearMonthList.value[0];
                filterByYearMonth();
            }

        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : String(err);
            console.error('Local fetch error:', errorMessage);
        }
    });

</script>
