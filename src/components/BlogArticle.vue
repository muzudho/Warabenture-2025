<template>
    <component
        :is="pageComponent"
        v-if="pageComponent"
    />
    <div
        v-if="!pageComponent"
    >
        "{{ props.page }}" ページが見つかりません。
    </div>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++
    // + インポート　＞　その他 +
    // ++++++++++++++++++++++++++

    import { pageMap } from '@/router/page-map';


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    
    interface Props {
        page: string;   // コンポーネント辞書のキー
    }
    // デフォルト値を設定
    const props = defineProps<Props>();


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ページ・コンポーネント +
    // ++++++++++++++++++++++++++++++++++++++++++++

    const pageComponent = getPageComponentByKey(props.page);


    function getPageComponentByKey(key: string) : any | null {
        if (key in pageMap) {
            return pageMap[key];
        }

        return null;
    }

</script>
