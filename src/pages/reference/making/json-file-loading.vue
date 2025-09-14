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

    <button-to-go-to-top class="sec-1 pt-6"/>
    <h2>fetch() と useFetch()</h2>
    <section class="sec-2 pt-6">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            JSONファイル１つ読み込むにもやり方がいくつかあるんで、その違いをメモしておこうぜ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
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
            :device="compatibleDevice1Ref?.device"
        >
            👆 その JSON ファイルを読み込むコードの１つに、<br/>
            👇 次のような書き方があるそうだぜ。
        </talk-balloon>


        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;v-btn @click="loadJson1" class="mt-6 mb-6"&gt;JSONファイル読込&lt;/v-btn&gt;

    &lt;pre&gt;&#123;&#123; jsonStr &#125;&#125;&lt;/pre&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    import { ref } from 'vue';

    const jsonStr = ref("読み込み中...");

    async function loadJson1() {
        try {
            const response = <span class="red-marker">await fetch</span>("/data/making/sample.json");   // publicフォルダ下のパス
            if (!response.ok) throw new Error("Failed to fetch JSON");
            const data: any = await response.json();

            jsonStr.value = JSON.stringify(data, null, 4);

        } catch (error) {
            alert(`ERROR: sample.jsonファイル読込時。 ${error}`);
        }
    };
&lt;/script&gt;
        </pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            👆 これを実行した結果を見るには、<br/>
            👇 以下のボタンをクリックしてくれだぜ。
        </talk-balloon>


        <v-btn @click="loadJson1" class="mt-6 mb-6">JSONファイル読込</v-btn>


        <pre class="coding-example mb-6">
{{ json1Str }}
        </pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            👇 他にも、Nuxt 3 から次のような書き方も増えたそうだぜ。
        </talk-balloon>


        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;pre&gt;&#123;&#123; jsonStr &#125;&#125;&lt;/pre&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    import { ref } from 'vue';

    const jsonStr = ref("読み込み中...");

    const {
        data
    } = <span class="red-marker">await useFetch</span>&lt;any&gt;(
        jsonFilePath,   // public フォルダー下のファイルへのパス
        {
            baseURL: '/',   // ？
            transform: (jsonObj: unknown): any => {    // やりたければ、データの変換処理

                // JSON がオブジェクト（辞書型）かどうかのチェック
                if (jsonObj && typeof jsonObj === 'object') {
                    return jsonObj;
                }

                // オブジェクト（辞書型）でなければ、空辞書を返す
                return {};
            },
            default: () => [], // エラー時のデフォルト値
        }
    );
    json2Str.value = data.value;
&lt;/script&gt;
        </pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            👆 これを実行すると、<br/>
            👇 以下の通り。
        </talk-balloon>


        <pre class="coding-example mb-6">
{{ json2Str }}
        </pre>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            前者の fetch() と後者の useFetch() では、何が違うの？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            前者の fetch() は、静的ページの初期値として使えない。<br/>
            だから、ページの読込完了のタイミングや、ボタンを押したタイミングで使うことになるぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            後者の useFetch() は、静的ページの初期値として使える。<br/>
            だから、サーバーサイドでプリレンダリングできる。
        </talk-balloon>


    </section>

    <button-to-go-to-top class="sec-1 pt-6"/>
    <h2>import()</h2>
    <section class="sec-2 pt-6">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            第３の方法を説明する。<br/>
            まず、以下の設定をしておいてくれだぜ。<br/>
            <br/>
            プロジェクト・フォルダーの直下に public フォルダーと、 nuxt.config.ts ファイルがあるとするぜ。
        </talk-balloon>


        <p class="mt-6">📄 nuxt.config.ts（抜粋）:</p>
        <pre class="coding-example mb-6">
export default defineNuxtConfig({
    alias: {
        '#public': './public', // public/ フォルダをエイリアス
    },
})
        </pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            👇 んで、次のようなコードを書く。
        </talk-balloon>


        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;pre&gt;&#123;&#123; jsonStr &#125;&#125;&lt;/pre&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    const jsonStr = ref("読み込み中...");

    try {
        // 動的インポート、ただし、ファイルパスは埋込み。
        const jsonObj = <span class="red-marker">await import</span>('#public/data/making/sample.json').then(module => module.default);
        json3Str.value = jsonObj;

    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        json3Str.value = `ERROR: ${errorMessage}`;
    }
&lt;/script&gt;
        </pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            👇 その結果は以下の通りだぜ。
        </talk-balloon>


        <pre class="coding-example mb-6">
{{ json3Str }}
        </pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            👆 await import() は、サーバーサイドのプリレンダーでも、クライアントサイドでも使える。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            じゃあ全部 await import() でいいんじゃないかなあ？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            自分のプロジェクト内で見えるファイルに限られるけどな。
        </talk-balloon>


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

    import { ref } from 'vue';

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

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

    // ++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　JSONファイル１ +
    // ++++++++++++++++++++++++++++++++++++

    const json1Str = ref("上のボタンを押してください...");

    async function loadJson1() {
        try {
            const response = await fetch(jsonFilePath);   // publicフォルダに置いたファイルにアクセスできる。
            if (!response.ok) throw new Error("Failed to fetch JSON");
            const data: any = await response.json();

            json1Str.value = JSON.stringify(data, null, 4);

        } catch (error) {
            alert(`ERROR: sample.jsonファイル読込時。 ${error}`);
        }
    }

    // ++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　JSONファイル２ +
    // ++++++++++++++++++++++++++++++++++++

    const json2Str = ref("読み込み中...");

    // JSONファイルを読み込みたい。
    // なんだかよくわからないが、 useFetch は、サーバーサイド・レンダリングのエラーになりにくいらしい。
    const {
        data
    } = await useFetch<any>(
        jsonFilePath,   // public フォルダー下のファイルへのパス
        {
            baseURL: '/',   // ？
            transform: (jsonObj: unknown): any => {    // やりたければ、データの変換処理

                // JSON がオブジェクト（辞書型）かどうかのチェック
                if (jsonObj && typeof jsonObj === 'object') {
                    return jsonObj;
                }

                // オブジェクト（辞書型）でなければ、空辞書を返す
                return {};
            },
            default: () => [], // エラー時のデフォルト値
        }
    );
    json2Str.value = data.value;

    // ++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　JSONファイル３ +
    // ++++++++++++++++++++++++++++++++++++

    const json3Str = ref("読み込み中...");

    try {
        // 動的インポート、ただし、ファイルパスは埋込み。
        const jsonObj = await import('#public/data/making/sample.json').then(module => module.default);

        json3Str.value = jsonObj;
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        json3Str.value = `ERROR: ${errorMessage}`;
    }

</script>

<style scoped>
    @import '@/styles/notebook.css';
</style>
