<template>
    <component
        :is="getPageMap(props.page)"
        v-if="getPageMap(props.page)"
    />
    <div
        v-if="!getPageMap(props.page)"
    >
        ページが見つかりません。
    </div>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++
    // + インポート　＞　その他 +
    // ++++++++++++++++++++++++++

    import { getPageMap } from '@/pages/blog/page-map';


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    
    interface Props {
        page: string;   // コンポーネント辞書のキー
    }
    // デフォルト値を設定
    const props = defineProps<Props>();

</script>
