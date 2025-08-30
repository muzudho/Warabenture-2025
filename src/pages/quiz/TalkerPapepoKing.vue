<template>
    <!-- 実行環境互換 -->
    <compatible-runtime-environment ref="compatibleRuntimeEnvironment1Ref"/>

    <v-row>
        <v-col cols="2" class="talk-name-small">
            <img
                src="/img/quiz/by-grok/202508__grok__30-0826-kingFace-o3o0.png"
                alt="パペポ王"
                :style="illustration1FaceStyle(isMobileMaybeOption)">
            </img><br/>
            パペポ王
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


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################

    interface Props {
        isMobileMaybeOption: boolean | null;
    }
    const props = defineProps<Props>();

</script>

<style lang="css" scoped>
    @import './talk-scene.css';
</style>
