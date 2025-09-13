<template>

    <!-- デバイス互換機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <h1><router-link to="/blog/2025-06/04-wed">[2025-06-04_Wed]</router-link></h1>
    <section class="sec-1 pt-6">

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 今日は Grok に聞いて、コードのワーニングを掃除しただけだぜ。
        </talk-balloon>


        <talk-image
            expandable
            href="/img/journal/2025-06/202506__program__04-2248-tauri-o2oA15o0.png"
            alt="snake_case を camelCase に変換"
        />


        <talk-image
            expandable
            href="/img/journal/2025-06/202506__program__04-2249-tauri-o2oA16o0.png"
            alt="snake_case を camelCase に変換"
        />


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 変数名、関数名を<span class="code-b">snake_case</span>から<span class="code-b">camelCase</span>に変えたぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
            👆 Rust で作った関数の戻り値を、TypeScript 側できっちり受け取れるように修正したぜ。
        </talk-balloon>

    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    import CompatibleDevice from '@/components/CompatibleDevice.vue'
    import TalkBalloon from '@/components/TalkBalloon.vue';
    import TalkImage from '@/components/TalkImage.vue';


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //

    import oton2Src from "@/assets/img/talk/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png";
    const oton2Alt = "きふわらべのお父ん２";
    const oton2Name = "きふわらべのお父ん";


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

</script>

<style lang="css" scoped>
    @import '@/styles/talk-pen.css';
</style>
