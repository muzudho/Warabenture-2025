<template>
    <div class="talk">
        <div class="talk-face-container-2">
            <img
                :src="props.src"
                :alt="props.alt"
                :style="illustration1FaceStyle2(deviceExact)" />
            <div class="talk-name-balloon">{{ props.name }}</div>
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon-body">
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

    import type { Device } from '../composables/compatible-device';
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
    @import '../styles/talk-scene.css';
</style>
