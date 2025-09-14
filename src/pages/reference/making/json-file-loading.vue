<template>

    <!-- 機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <!-- 以降、ページ -->
    <the-app-header/>
    <button-to-back-to-contents
        class="sec-0 mt-6"
        pagePath="../"
    />

    <h1>JSONファイルを読込もうぜ！</h1>
    <section class="sec-1 pt-6">

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                JSONファイル１つ読み込むにもやり方がいくつかあるんで、その違いをメモしておこうぜ。
        </talk-balloon>

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                👇 じゃあ、以下の JSON ファイルを置いておくぜ。
        </talk-balloon>

        <p>📄 <a target="_blank" :href="jsonFilePath">public{{jsonFilePath}}</a>:</p>
        <pre class="coding-example mb-6">
{
    "#this-file": "JSONのサンプルだぜ（＾▽＾）"
}
        </pre>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👆 その JSON ファイルを読み込むコードの１つに、<br/>
                👇 次のような書き方があるそうだぜ。
        </talk-balloon>

        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;pre&gt;&#123;&#123; jsonStr &#125;&#125;&lt;/pre&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    import { onMounted, ref } from 'vue';

    const jsonStr = ref("読み込み中...");

    onMounted(async () =&gt; {
        try {
            const response = await <span class="red-marker">fetch</span>("/data/making/sample.json");   // publicフォルダ下のパス
            if (!response.ok) throw new Error("Failed to fetch JSON");
            const data: any = await response.json();

            jsonStr.value = JSON.stringify(data, null, 4);

        } catch (error) {
            alert(`ERROR: sample.jsonファイル読込時。 ${error}`);
        }
    });
&lt;/script&gt;
        </pre>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👆 これを実行すると、<br/>
                👇 以下の通り。
        </talk-balloon>

        <pre class="coding-example mb-6">
{{ jsonStr }}
        </pre>

    </section>

    <br/>
    <h2>ソースコード</h2>
    <section class="sec-2">
        <source-link/>
    </section>

    <button-to-go-to-top class="sec-0 pt-6"/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted, ref } from 'vue';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import CompatibleDevice from '@/components/CompatibleDevice.vue'
    import SourceLink from '@/components/SourceLink.vue';
    import TalkBalloon from '@/components/TalkBalloon.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import ButtonToBackToContents from '@/components/ButtonToBackToContents.vue';
    import ButtonToGoToTop from '@/components/ButtonToGoToTop.vue';
    import TheAppHeader from '../../the-app-header.vue';


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

    // ++++++++++++++++++++++++++++
    // + コモン　＞　外部ファイル +
    // ++++++++++++++++++++++++++++

    const jsonFilePath = "/data/making/sample.json";    // public/data/making/sample.json


    // ################
    // # オブジェクト #
    // ################

    const jsonStr = ref("読み込み中...");

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);


    // ##############
    // # 起動時処理 #
    // ##############

    onMounted(async () => {
        try {
            const response = await fetch(jsonFilePath);   // publicフォルダに置いたファイルにアクセスできる。
            if (!response.ok) throw new Error("Failed to fetch JSON");
            const data: any = await response.json();

            jsonStr.value = JSON.stringify(data, null, 4);

        } catch (error) {
            alert(`ERROR: sample.jsonファイル読込時。 ${error}`);
        }
    });

</script>

<style scoped>
    @import '@/styles/notebook.css';
</style>
