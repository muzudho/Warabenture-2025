<template>
    <div class="talk">
        <div class="face-container">
            <img
                :src="props.src"
                :alt="props.alt" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################

    interface Props {
        src: string,
        alt: string,
    }
    const props = defineProps<Props>();

</script>

<style lang="css" scoped>
</style>
