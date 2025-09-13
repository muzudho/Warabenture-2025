<template>
    <section
        :class="props.class"
    >
        <router-link :to="props.pagePath">&lt;&lt; 目次に戻る</router-link>
    </section>
</template>

<script setup lang="ts">

    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    
    interface Props {
        class: string,
        pagePath: string,
    }
    // デフォルト値を設定
    const props = defineProps<Props>();

</script>
