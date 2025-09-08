<template>
<div style="background-color: skyblue;">
        名前：　すっぽん<br/>
        体力：　100<br/>
        魔力：　50<br/>
        紹介文：　<slot></slot><br/>
        制作者近影：　<slot name="author"></slot><br/>
    </div>
</template>

<script setup lang="ts">
    // Grok に聞いた書き方：
    const slots = defineSlots<{
        default(): any;
        author(): any;
    }>();


    /*
    const slots = defineSlots<{
        default: (props: {}) => any,
        author: (props: { phone: string }) => any; // authorスロットのpropsにphoneプロパティを定義
    }>();
    */

    /*
    // @ts-ignore
    const slots = defineSlots(); // 型定義をスキップ
    */
    /*
    const slots = defineSlots<{
        default: () => any,
        author: (props: { author: string }) => any; // authorスロットのpropsにauthorプロパティを定義
    }>();
    */

    /*
    const slots = defineSlots<{
        default: () => any,
        author?: () => any
    }>();
    */
    /*
const slots = defineSlots<{
  default: (props: { msg: string }) => any;  // デフォルトスロットのpropsを型定義
  header?: (props: { title: string }) => any;  // オプショナルな名前付きスロット
}>()
    */
</script>
