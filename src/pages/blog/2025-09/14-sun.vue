<template>

    <!-- デバイス互換機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <h1><router-link to="/blog/2025-09/14-sun">[2025-09-14_Sun]</router-link></h1>
    <section class="sec-1 pt-6">

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                Nuxt がサーバーサイドでプリレンダリングしてるんだが、サーバーサイドで生成したソースコードと、クライアントサイドで生成したコードが違うっていうエラーが出るんだが、何よこれ？
        </talk-balloon>

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                黒吉に聞けだぜ。
        </talk-balloon>

        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device">
                このエラーの主な原因は、v-for に :key が欠けていること、または v-if="pageComponent" の不明確な条件によるものです。修正コード例のように :key を追加し、v-if を適切に設定することで、問題が解決する可能性が高いです。もし動的データや非同期コンポーネントが関わっている場合、データの一貫性やロードタイミングも確認してください。
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                分かったぜ、直すぜ。
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                お～、v-for="x in X" を使っているところには必ず :key="x" を付けるとエラーが取れたぜ（＾▽＾）！
        </talk-balloon>

        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device">
                おお、ナイス！（＾▽＾） :key="x" を v-for に付けたらハイドレーションエラーが解消したんだね！VueがDOMをちゃんと追跡できるようになって、バッチリ動いたってわけだ。さすが、素早く対応したな！何か他に質問やハマったポイントがあったら、気軽に教えてくれよ～（＾～＾）
        </talk-balloon>

        <!--
        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
        </talk-balloon>
        -->

    </section>

</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { ref } from 'vue';

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
    import kifuwarabe2Src from "@/assets/img/talk/202506__character__01-2013-kifuwarabe-o1o1o0.png";
    const kifuwarabe2Alt = "きふわらべ２";
    const kifuwarabe2Name = "きふわらべ";
    import hiyoko2Src from "@/assets/img/talk/202506__character__01-2025-hiyoko-o1o1o0.png";
    const hiyoko2Alt = "ひよこ２";
    const hiyoko2Name = "ひよこ";
    import kurokichi1Src from "@/assets/img/talk/202509__character__10--kurokichi.png";
    const kurokichi1Alt = "グロックの黒吉１";
    const kurokichi1Name = "グロックの黒吉";

    import journal1png from '@/assets/img/journal/2025-09/202509__warabenture__12-1640-hierarchy-o1o0.png';
    import journal2png from '@/assets/img/journal/2025-09/202509__warabenture__13-1406-style-o1o0.png';


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

</script>

<style scoped>

    @import '@/styles/notebook.css';

</style>
