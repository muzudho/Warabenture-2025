<template>
    <!-- 実行環境互換 -->
    <compatible-runtime-environment ref="compatibleRuntimeEnvironment1Ref"/>

    <v-row>
        <v-col cols="2" class="talk-name-small">
            <img
                src="/img/quiz/by-grok/202508__grok__30-1229-kifuwaranyanFace-o3o0.png"
                alt="キフワラニャン"
                :style="illustration1FaceStyle(compatibleRuntimeEnvironment1Ref?.isMobileMaybe ?? null)">
            </img><br/>
            キフワラニャン
        </v-col>
        <v-col cols="1" class="talk-quot">「</v-col>
        <v-col>
            <slot></slot>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++++++
    // + コンポーネント　＞　互換性対応 +
    // ++++++++++++++++++++++++++++++++++

    import CompatibleRuntimeEnvironment from '../../components/CompatibleRuntimeEnvironment.vue';

    // ++++++++++++++++++
    // + コンポーザブル +
    // ++++++++++++++++++

    import { illustration1FaceStyle } from "../../composables/talk-scene";


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++
    // + オブジェクト　＞　実行環境 +
    // ++++++++++++++++++++++++++++++

    // TODO: props で渡せないか？
    const compatibleRuntimeEnvironment1Ref = ref<InstanceType<typeof CompatibleRuntimeEnvironment> | null>(null);

</script>

<style lang="css" scoped>
    /* @import '@/assets/styles.css'; */
</style>