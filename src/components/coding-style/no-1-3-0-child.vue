<template>
<div style="background-color: skyblue;">
        名前：　すっぽん<br/>
        <slot name="hp" :hit-point="100"></slot><br/>
        <slot name="mp" :magic-power="50"></slot><br/>
    </div>
</template>

<script setup lang="ts">

    // ############
    // # スロット #
    // ############

    const slots = defineSlots<{
        default(): any;
        hp(props: { hitPoint: number }): any;
        mp(props: { magicPower: number }): any;
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
