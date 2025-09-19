<template>
    <the-app-header/>
    <button-to-back-to-contents
        class="sec-0 mt-6"
        pagePath="../"
    />

    <h1>インライン・スタイルの書き方を決めておくの節だぜ！</h1>
    <section class="sec-1 pt-6">

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                使っているウェブ・フレームワークは
                <div style="display: inline-block; text-align: center; font-size: 12px; line-height: 12px;">
                    Vue3<br/>
                    <v-btn icon href="https://vuejs.org/" target="_blank">
                        <v-img :src="assetsVueLogoSvg" class="logo vue" style="top: -20px;" alt="Vue logo" />
                    </v-btn>
                </div>
                系列の Vuetify3 だぜ。<br/>
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                じゃあ、まず、インライン・スタイルって何かの説明からするか。
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
            class="mb-6"
        >
                👇 例えば、以下のような青い長方形を描きたいときは……、<br/>
        </talk-balloon>

        <div
            class="mb-6"
            style="
                width: 200px;
                height: 100px;
                background-color: skyblue;
                border: solid 4px blue;
            ">
        </div>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 Vue では HTML を以下のように書くかな。<br/>
        </talk-balloon>

        📄 a .vue file:<br/>
        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;div
        style=<span class="green-marker">"width: 100px; height: 200px; background-color: skyblue; border: solid 4px blue;"</span>&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </pre>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👆 上記が本来の、１行で書くスタイルという意味の、インライン・スタイルだぜ。<br/>
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 しかし修正の手間を減らそうと考えて、以下のように複数行に書いても、インライン・スタイルだぜ。<br/>
        </talk-balloon>
        <br/>

        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;div
        style=<span class="green-marker">"
            width: 100px;
            height: 200px;
            background-color: skyblue;
            border: solid 4px blue;
        "</span>&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </pre>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                👆 １回や２回書くぐらいならインライン・スタイルでもいいんだけど、<br/>
                もう５回も同じの書くようになると嫌になってくるんで、<br/>
                <br/>
                👇 そういうときはスタイル・シートに切り出すのよ。
        </talk-balloon>

        <div class="blue-rectangle-1">
        </div>
        <div class="blue-rectangle-1">
        </div>
        <div class="blue-rectangle-1">
        </div>
        <div class="blue-rectangle-1">
        </div>
        <div class="blue-rectangle-1 mb-6">
        </div>

        📄 example.vue ：<br/>
        <pre class="coding-example-good">
&lt;template&gt;
    &lt;div <span class="green-marker">class="blue-rectangle-1"</span>&gt;
    &lt;/div&gt;
    &lt;div <span class="green-marker">class="blue-rectangle-1"</span>&gt;
    &lt;/div&gt;
    &lt;div <span class="green-marker">class="blue-rectangle-1"</span>&gt;
    &lt;/div&gt;
    &lt;div <span class="green-marker">class="blue-rectangle-1"</span>&gt;
    &lt;/div&gt;
    &lt;div <span class="green-marker">class="blue-rectangle-1"</span>&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
    <span class="green-marker">div.blue-rectangle-1 {    /* 青い長方形１ */
        width: 200px;
        height: 100px;
        background-color: blue;
    }</span>
&lt;/style&gt;
        </pre>
        <p class="mb-6">
            👆　<span class="good">グッド</span>。これはスタイルシートを使った書き方。<br/>
        </p>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
            class="mb-6">
                👇 また、 Vue では、スタイルシートの中で TypeScript の変数を使うこともできる。しかし……、
        </talk-balloon>

        <div class="blue-rectangle-2 mb-6">
        </div>

        📄 example.vue ：<br/>
        <pre class="coding-example-bad">
&lt;template&gt;
    &lt;div <span class="red-marker">class="blue-rectangle-2"</span>&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    <span class="red-marker">const apple: number = 250;</span>
&lt;/script&gt;

&lt;style scoped&gt;
    div.blue-rectangle-2 {    /* 青い長方形２ */
        width: <span class="red-marker">v-bind(apple)</span>px;
        height: 100px;
        background-color: blue;
    }
&lt;/style&gt;
        </pre>
        <p class="mb-6">
            👆　今は<span class="bad">バッド</span>。その設定が無視されることがある。手元の環境で動作が確実になるまで、使わない方針。<br/>
        </p>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👆 書いたとおりに利いたことないんで、使ってないぜ。
        </talk-balloon>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                じゃあ、スタイルに TypeScript の変数を使いたくなったらどうすんのよ？
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
            class="mb-6"
        >
                👇 こう書く。
        </talk-balloon>

        <div
            :style="`
                width: ${apple}px;
                height: 100px;
                background-color: skyblue;
                border: solid 4px blue;
            `"
            class="mb-6">
        </div>

        📄 example.vue ：<br/>
        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;div
        <span class="green-marker">:style="`
            width: ${apple}px;
            height: 100px;
            background-color: skyblue;
            border: solid 4px blue;
        `"</span>&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </pre>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                インライン・スタイルを v-bind 形式で書くことで、それができる。<br/>
        </talk-balloon>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                本来、画面構成を見たいテンプレートに、スタイルの複数行が並び始めたら、読みにくいわねぇ。<br/>
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
            class="mb-6"
        >
                👇 だったらこう書く。<br/>
        </talk-balloon>

        <div
            :style="getRectangle4()"
            class="mb-6"
        >
        </div>

        📄 example.vue ：<br/>
        <pre class="coding-example">
&lt;template&gt;
    &lt;div
        <span class="green-marker">:style="getRectangle4()"</span>&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    <span class="green-marker">function getRectangle4() : any {
        return {
            width: `${apple}px`,
            height: '100px',
            backgroundColor: 'skyblue',
            border: 'solid 4px blue',
        }
    }</span>
&lt;/script&gt;
        </pre>
        <p class="mb-6">
            👆　インラインに関数を書くことができる。
        </p>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                関数呼出しじゃあ、リアクティブされないわねぇ。<br/>
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
            class="mb-6"
        >
                👇 リアクティブさせるには、こう書く。<br/>
        </talk-balloon>

        <div
            :style="getRectangle5"
            class="mb-6"
        >
        </div>

        📄 example.vue ：<br/>
        <pre class="coding-example-good">
&lt;template&gt;
    &lt;div
        <span class="yellow-marker">:style="getRectangle5"</span>&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    <span class="yellow-marker">import { computed } from "vue";

    const getRectangle5 = </span><span class="blue-marker">computed<span class="red-marker">&lt;
        any
    &gt;</span>(<span class="green-marker">() => {
        return <span class="red-marker">{
            width: `${apple}px`,
            height: '100px',
            backgroundColor: 'skyblue',
            border: 'solid 4px blue',
        }</span>;
    }</span>);</span>
&lt;/script&gt;
        </pre>
        <p class="mb-6">
            👆　<span class="good">グッド</span>。この書き方でリアクティブが利く。<br/>
            <span class="red-marker">スタイル</span>、これは <span class="red-marker">any</span>型だが、<br/>
            その any 型のスタイルを返すような<span class="green-marker">ラムダ式</span>を <span class="blue-marker">computed() 関数</span>に渡している。<br/>
            いきなり複雑に見えるが、この形をそっくり真似するだけでもいける。<br/>
            <br/>
            リアクティブを利かせながら、引数を渡すこともできる：
        </p>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👆 いきなり難しい書き方になったが、形を覚えて真似して書けだぜ。
        </talk-balloon>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                この getRectangle5 っていう ComputedRef 型の変数って、どうやって引数渡すの？
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇　こう書く。
        </talk-balloon>

        <div
            :style="getRectangle6(100)"
            class="mb-6"
        >
        </div>

        📄 example.vue ：<br/>
        <pre class="coding-example-good">
&lt;template&gt;
    &lt;div
        <span class="brown-pen">:style="getRectangle6(100)"</span>&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    <span class="brown-pen">import { computed } from "vue";

    const getRectangle6 = computed&lt;
        <span class="blue-marker"><span class="red-marker">(banana: number)</span> => <span class="green-marker">any</span></span>
    &gt;(<span class="yellow-marker" style="color: blue;">() => {
        return <span class="blue-marker"><span style="color: green;"><span class="red-marker">(banana: number)</span>=>{
            return <span class="green-marker">{
                width: `${apple}px`,
                height: `${banana}px`,
                backgroundColor: 'skyblue',
                border: 'solid 4px blue',
            }</span></span>
        }</span>;
    }</span>);</span>
&lt;/script&gt;
        </pre>
        <p class="mb-6">
            👆　<span class="good">グッド</span>。<span class="yellow-marker">［<span class="blue-marker">［<span class="red-marker">［引数］</span>を受け取って<span class="green-marker">［スタイル］</span>を返すラムダ式］</span>を返すラムダ式］</span>を書いているので、複雑だが、この形をそっくり真似するだけでもいける。<br/>
        </p>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👆 さらに難しい書き方になったが、形を覚えて真似して書けだぜ。
        </talk-balloon>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                こんな複雑な構文、コーディング初心者には読むことも、書くこともできないんじゃない？
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                だから毎回、真似して書けだぜ。<br/>
                <br/>
                こんなのがすらすら読み書きできるようになれば、関数型プログラマーの素質があるな。<br/>
                わたしはラムダ計算が好きなんですらすら書けるけど。
        </talk-balloon>

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                そんな素質なくても、これからはＡＩがコーディングしてくれるぜ。<br/>
                だから、形を真似して当てはめられればいいんだぜ！
        </talk-balloon>

    </section>

    <h2>ソースコード</h2>
    <section class="sec-2">
        <source-link/>
    </section>

    <button-to-back-to-top class="sec-0 pt-6"/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, ref } from "vue";

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import ButtonToBackToContents from '@/components/ButtonToBackToContents.vue';
    import ButtonToBackToTop from '@/components/ButtonToBackToTop.vue';
    import CompatibleDevice from '@/components/CompatibleDevice.vue'
    import SourceLink from '@/components/SourceLink.vue';
    import TalkBalloon from '@/components/TalkBalloon.vue';
    import TheAppHeader from '../../the-app-header.vue';


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //    

    import assetsVueLogoSvg from '@/assets/img/vue.svg';
    import oton2Src from "@/assets/img/talk/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png";
    const oton2Alt = "きふわらべのお父ん２";
    const oton2Name = "きふわらべのお父ん";
    import kifuwarabe2Src from "@/assets/img/talk/202506__character__01-2013-kifuwarabe-o1o1o0.png";
    const kifuwarabe2Alt = "きふわらべ２";
    const kifuwarabe2Name = "きふわらべ";
    import hiyoko2Src from "@/assets/img/talk/202506__character__01-2025-hiyoko-o1o1o0.png";
    const hiyoko2Alt = "ひよこ２";
    const hiyoko2Name = "ひよこ";


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

    // ++++++++++++++++++++++++++++
    // + オブジェクト　＞　長方形 +
    // ++++++++++++++++++++++++++++

    const apple: number = 250;


    function getRectangle4() : any {
        return {
            width: `${apple}px`,
            height: '100px',
            backgroundColor: 'skyblue',
            border: 'solid 4px blue',
        }
    }


    const getRectangle5 = computed<
        any
    >(() => {
        return {
            width: `${apple}px`,
            height: "100px",
            backgroundColor: "blue",
        };
    });


    const getRectangle6 = computed<
        (banana: number) => any
    >(() => {
        return (banana: number)=>{
            return {
                width: `${apple}px`,
                height: `${banana}px`,
                backgroundColor: "blue",
            }
        };
    });

</script>

<style scoped>

    @import '@/styles/notebook.css';

    div.blue-rectangle-1 {    /* 青い長方形１ */
        width: 200px;
        height: 100px;
        background-color: skyblue;
        border: solid 4px blue;
    }

    div.blue-rectangle-2 {    /* 青い長方形２ */
        width: v-bind(apple)px;
        height: 100px;
        background-color: skyblue;
        border: solid 4px blue;
    }
</style>
