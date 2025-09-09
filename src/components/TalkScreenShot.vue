<template>
    <a
        target="_blank"
        :href="props.href"
    >
        <img
            class="scr-shot"
            :src="props.href"
            :alt="props.alt"
        >
    </a><br/>
</template>

<script setup lang="ts">

    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    
    interface Props {
        href: string;
        alt: string;
    }
    // デフォルト値を設定
    const props = defineProps<Props>();

</script>

<style lang="css" scoped>
    @import '@/styles/talk-scene.css';
</style>
