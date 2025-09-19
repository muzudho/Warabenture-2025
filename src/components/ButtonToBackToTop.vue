<template>
    <section
        :class="props.class"
    >
        <a
            href="#top"
        >TOPに戻る</a>
    </section>
</template>

<script setup lang="ts">

    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    
    interface Props {
        class: string,
    }
    // デフォルト値を設定
    const props = defineProps<Props>();

</script>
