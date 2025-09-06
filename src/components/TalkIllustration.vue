<!--
    挿絵
-->

<template>

    <compatible-device ref="compatibleDevice1Ref"/>

    <img
        :src="props.src"
        :alt="props.alt"
        :style="illustration1Style">
    </img>
    <p
        v-if="props.caption"
        :style="illustration1CaptionStyle"
        style="font-size: small; color: gray; text-align: right;">{{ props.caption }}</p>
    <br/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, ref } from 'vue';

    // ++++++++++++++
    // + 互換性対応 +
    // ++++++++++++++

    import type { CompatibleStyleValue }  from '../compatibles/compatible-style-value';

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    // ++++++++++++++++++++++++++++++++++
    // + コンポーネント　＞　互換性対応 +
    // ++++++++++++++++++++++++++++++++++

    import CompatibleDevice from './CompatibleDevice.vue'


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################

    interface Props {
        src: string,
        alt: string,
        //name: string,
        caption?: string,
        //device: Device | undefined;
    }
    const props = defineProps<Props>();


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

    // ++++++++++++++++++++++++++++++
    // + オブジェクト　＞　挿絵全般 +
    // ++++++++++++++++++++++++++++++

    const illustration1Style = computed<CompatibleStyleValue>(()=>{ /* 挿絵 */
        if (compatibleDevice1Ref.value?.device == 'Mobile') {
            return {
                width: `256px`,
            };
        }

        return {
            width: `384px`,
        };
    });
    const illustration1CaptionStyle = computed<CompatibleStyleValue>(()=>{  /* 画像の下に付けるキャプション用 */
        if (compatibleDevice1Ref.value?.device == 'Mobile') {
            return {
                width: `256px`,
            };
        }

        return {
            width: `384px`,
        };
    });

</script>

<style scoped>

    /* @import '../../styles/talk-scene.css'; */

</style>
