<template>
    <!--
    <component
        :is="getPageMapAsync(props.page)"
        v-if="getPageMapAsync(props.page)"
    />
    <div
        v-if="!getPageMapAsync(props.page)"
    >
        ページが見つかりません。
    </div>
    -->
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++
    // + インポート　＞　その他 +
    // ++++++++++++++++++++++++++

    //import { getPageMapAsync } from '@/pages/blog/page-map';


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    
    interface Props {
        page: string;   // コンポーネント辞書のキー
    }
    // デフォルト値を設定
    const props = defineProps<Props>();

</script>
