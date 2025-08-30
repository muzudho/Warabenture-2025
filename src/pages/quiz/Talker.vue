<template>
    <!-- 実行環境互換 -->
    <compatible-runtime-environment ref="compatibleRuntimeEnvironment1Ref"/>

    <v-row>
        <v-col cols="2" class="talk-name-small">
            <!--
                NOTE: Tauri と Nuxt で、ファイルパスの通し方が異なる。しかし、コードは同じにしたい。
                ファイルパスの書き方の推奨は, src="/img/quiz/～中略～.png" のように public フォルダー以下からなので、これに揃えたい。
                nuxt build だと通常、 src="../../../public/img/quiz/～以下略～.png" のように相対パスを通さないといけない。
                nuxt.config.ts で public フォルダーへビルドパスを通しておく。次のように設定： dir:{public: '../public',} // src から見て ../public
            -->
            <img
                :src="props.src"
                :alt="props.alt"
                :style="illustration1FaceStyle(isMobileMaybeOption)">
            </img><br/>
            {{ props.name }}
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
        src: string,
        alt: string,
        name: string,
        isMobileMaybeOption: boolean | null;
    }
    const props = defineProps<Props>();

</script>

<style lang="css" scoped>
    @import './talk-scene.css';
</style>
