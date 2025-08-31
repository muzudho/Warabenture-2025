<template>
    <div class="talk">
        <div class="face-container">
            <img
                :src="props.src"
                :alt="props.alt"
                :style="illustration1FaceStyle2(deviceExact)" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed } from 'vue';

    // ++++++++++++++++++
    // + コンポーザブル +
    // ++++++++++++++++++

    import { illustration1FaceStyle2 } from "../composables/talk-scene2";


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################

    interface Props {
        src: string,
        alt: string,
        name: string,
        device: Device | undefined;
    }
    const props = defineProps<Props>();


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++
    // + オブジェクト　＞　実行環境 +
    // ++++++++++++++++++++++++++++++

    const deviceExact = computed(()=>{
        if (props.device === undefined) {
            return 'Unknown';
        }

        return props.device;
    });

</script>

<style lang="css" scoped>
</style>
