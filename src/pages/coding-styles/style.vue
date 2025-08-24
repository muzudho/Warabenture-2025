<template>
    <the-header/>

    <h3>スタイルの書き方を決めておこうぜの章だぜ！</h3>
    <section class="sec-3">
        <p>
            使っているのは Vue3 と Vuetify3。<br/>
            <br/>
            例えば、青い長方形を描くとき：
        </p>
        <br/>

        <div
            style="
                width: 200px;
                height: 100px;
                background-color: blue;
            ">
        </div>
        <br/>

        📄 example.vue ：<br/>
        <pre class="coding-example">
&lt;template&gt;
    &lt;div
        style=<span class="em">"
            width: 100px;
            height: 200px;
            background-color: blue;
        "</span>&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </pre>
        <p>
            👆　上記のように書くことができる。これがインライン・スタイル。<br/>
            インラインは本当は１行に書くことだが、細かいことは気にしない。<br/>

        </p>
        <br/>

        <p>以下のようにも書ける：</p>
        <br/>

        <div class="blue-rectangle-1">
        </div>
        <br/>

        📄 example.vue ：<br/>
        <pre class="coding-example-good">
&lt;template&gt;
    &lt;div <span class="em">class="blue-rectangle-1"</span>&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
    <span class="em">div.blue-rectangle-1 {    /* 青い長方形１ */
        width: 200px;
        height: 100px;
        background-color: blue;
    }</span>
&lt;/style&gt;
        </pre>
        <p>
            👆　<span class="good">グッド</span>。これはスタイルシートを使った書き方。<br/>
        </p>
        <br/>

        <p>スタイルシートの中では、TypeScript の変数を使うこともできるとされている。しかし：</p>
        <br/>

        <div class="blue-rectangle-2">
        </div>
        <br/>

        📄 example.vue ：<br/>
        <pre class="coding-example-bad">
&lt;template&gt;
    &lt;div <span class="em">class="blue-rectangle-2"</span>&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    <span class="em">const apple: number = 250;</span>
&lt;/script&gt;

&lt;style scoped&gt;
    div.blue-rectangle-2 {    /* 青い長方形２ */
        width: <span class="em">v-bind(apple)</span>px;
        height: 100px;
        background-color: blue;
    }
&lt;/style&gt;
        </pre>
        <p>
            👆　今は<span class="bad">バッド</span>。その設定が無視されることがある。手元の環境で動作が確実になるまで、使わない方針。<br/>
        </p>
        <br/>

        <p>スタイルの中で TypeScript の変数を使いたくなったときは：</p>
        <br/>

        <div
            :style="`
                width: ${apple}px;
                height: 100px;
                background-color: blue;
            `">
        </div>
        <br/>

        📄 example.vue ：<br/>
        <pre class="coding-example">
&lt;template&gt;
    &lt;div
        <span class="em">:style="`
            width: ${apple}px;
            height: 100px;
            background-color: blue;
        `"</span>&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </pre>
        <p>
            👆　インライン・スタイルで書くことができる。<br/>
        </p>
        <br/>

        <p>
                しかし、HTMLを書くところにコードが増えていくと読みづらくなる。<br/>
                以下のようにも書ける：<br/>
        </p>
        <br/>

        <div
            :style="getRectangle4()">
        </div>
        <br/>

        📄 example.vue ：<br/>
        <pre class="coding-example">
&lt;template&gt;
    &lt;div
        <span class="em">:style="getRectangle4()"</span>&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    <span class="em">function getRectangle4() : any {
        return {
            width: `${apple}px`,
            height: "100px",
            backgroundColor: "blue",
        }
    }</span>
&lt;/script&gt;
        </pre>
        <p>
            👆　インラインに関数を書くことができる。<br/>
            欠点としては、あとで apple の値を変更してもスタイルに反映（リアクティブ）してくれないことだ。<br/>
            <br/>
            リアクティブさせるには、以下のようにも書ける：<br/>
        </p>
        <br/>

        <div
            :style="getRectangle5">
        </div>
        <br/>

        📄 example.vue ：<br/>
        <pre class="coding-example-good">
&lt;template&gt;
    &lt;div
        <span class="em">:style="getRectangle5"</span>&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    <span class="em">import { computed } from "vue";

    const getRectangle5 = computed<span style="color: red;">&lt;
        any
    &gt;</span>(<span style="color: green;">() => {
        return {
            width: `${apple}px`,
            height: "100px",
            backgroundColor: "blue",
        };
    }</span>);</span>
&lt;/script&gt;
        </pre>
        <p>
            👆　<span class="good">グッド</span>。この書き方でリアクティブが利く。<br/>
            <span class="em" style="color: red;">戻り値の型</span>と、（関数ではなく）<span class="em" style="color: green;">ラムダ式</span>を使っているので、いきなり複雑に見えるが、この形をそっくり真似するだけでもいける。<br/>
            <br/>
            リアクティブを利かせながら、引数を渡すこともできる：
        </p>

        <div
            :style="getRectangle6(100)">
        </div>
        <br/>

        📄 example.vue ：<br/>
        <pre class="coding-example-good">
&lt;template&gt;
    &lt;div
        <span class="em">:style="getRectangle6(100)"</span>&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    <span class="em">import { computed } from "vue";

    const getRectangle6 = computed&lt;
        (banana: number) => any
    &gt;(<span class="em" style="color: blue;">() => {
        return <span style="color: green;">(banana: number)=>{
            return <span style="color: red;">{
                width: `${apple}px`,
                height: `${banana}px`,
                backgroundColor: "blue",
            }</span>
        }</span>;
    }</span>);</span>
&lt;/script&gt;
        </pre>
        <p>
            👆　<span class="good">グッド</span>。<span class="em" style="color: blue;">［<span style="color: green">［<span style="color: red">［スタイル］</span>を返すラムダ式］</span>を返すラムダ式］</span>を書いているので、複雑だが、この形をそっくり真似するだけでもいける。<br/>
        </p>

    </section>

    <br/>
    <h3>ソースコード</h3>
    <section class="sec-3">
        <source-link/>
    </section>

    <the-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed } from "vue";

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import SourceLink from '../../components/SourceLink.vue';
    import TheFooter from './the-footer.vue';
    import TheHeader from './the-header.vue';


    // ##########
    // # その他 #
    // ##########

    const apple: number = 250;


    function getRectangle4() : any {
        return {
            width: `${apple}px`,
            height: "100px",
            backgroundColor: "blue",
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
    pre.coding-example {    /* ソースコード例 */
        display: inline-block;
        border: dashed 4px gray;
        color: #303030;
        background-color: #f0f0f0;
        padding-left: 24px;
        padding-top: 16px;
        padding-right: 24px;
    }

    pre.coding-example-bad {    /* 悪いソースコード例 */
        display: inline-block;
        border: dashed 4px gray;
        color: #303030;
        background-color: #f8c0c0;
        padding-left: 24px;
        padding-top: 16px;
        padding-right: 24px;
    }

    pre.coding-example-good {    /* 良いソースコード例 */
        display: inline-block;
        border: dashed 4px gray;
        color: #303030;
        background-color: #c0f8c0;
        padding-left: 24px;
        padding-top: 16px;
        padding-right: 24px;
    }

    span.em {   /* 強調 */
        color: brown;
        font-weight: bolder;
    }

    span.good {   /* 良い強調 */
        color: #303030;
        background-color: #c0f8c0;
        font-weight: bolder;
    }

    span.bad {   /* 悪い強調 */
        color: #303030;
        background-color: #f8c0c0;
        font-weight: bolder;
    }

    div.blue-rectangle-1 {    /* 青い長方形１ */
        width: 200px;
        height: 100px;
        background-color: blue;
    }

    div.blue-rectangle-2 {    /* 青い長方形２ */
        width: v-bind(apple)px;
        height: 100px;
        background-color: blue;
    }
</style>
