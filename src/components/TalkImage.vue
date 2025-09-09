<template>
    <a
        target="_blank"
        :href="props.href"
    >
        <!--
            img タグに比べ、 v-img タグは
            public フォルダー下のパスを認識することがメリットです。
            また、良くも悪くも、画面サイズに応じて、画像サイズが自動調整されます。
        -->
        <v-img
            class="scr-shot"
            :src="props.href"
            :alt="props.alt"
        />
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
