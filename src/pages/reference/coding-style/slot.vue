<template>
    <the-app-header/>
    <button-to-close-pane
        class="sec-0"
        direction="down"
        pagePath="/reference"
    />

    <h1>スロットの書き方を決めておくの節だぜ！</h1>
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
                じゃあ、まず、スロットって何かの説明からするか。
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 こういうデータが載ってる本を作りたいとするだろ。
        </talk-balloon>
        <br/>

        expected:<br/>
        <div class="markup-example">
            <div style="background-color: skyblue;">
                名前：　すっぽん<br/>
                体力：　100<br/>
                魔力：　50<br/>
                紹介文：　私は勇者です。よろしくお願いします。<br/>
                <v-img
                    src="https://picsum.photos/64/64"
                    alt="なんか画像"
                    style="width: 64px; height: 64px;"
                />
            </div>
        </div>
        <br/>
        <br/>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 Vue3 では HTML をこんな感じに書くかな。
        </talk-balloon>
        <br/>

        📄 a child .vue file:<br/>
        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;div style="background-color: skyblue;"&gt;
        名前：　すっぽん&lt;br/&gt;
        体力：　100&lt;br/&gt;
        魔力：　50&lt;br/&gt;
        紹介文：　私は勇者です。よろしくお願いします。&lt;br/&gt;
        &lt;v-img
            src="https://picsum.photos/64/64"
            alt="なんか画像"
            style="width: 64px; height: 64px;"
        /&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </pre>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                ひとまず、以下の黄緑色の部分を穴埋めの穴にしたいと思ってくれだぜ。
        </talk-balloon>
        <br/>

        <div class="markup-example">
            <div style="background-color: skyblue;">
                名前：　<span style="background-color: yellowgreen;">ここを穴にしたい</span><br/>
                体力：　100<br/>
                魔力：　50<br/>
                紹介文：　私は勇者です。よろしくお願いします。<br/>
                <v-img
                    src="https://picsum.photos/64/64"
                    alt="なんか画像"
                    style="width: 64px; height: 64px;"
                />
            </div>
        </div>
        <br/>
        <br/>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 じゃあ、HTML では以下の黄緑色の部分のように、&#123;&#123; ハンドルバー &#125;&#125; を使うかな。
        </talk-balloon>
        <br/>

        📄 a child .vue file:<br/>
        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;div style="background-color: skyblue;"&gt;
        名前：　<span style="background-color: yellowgreen;">&#123;&#123; name &#125;&#125;</span>&lt;br/&gt;
        体力：　100&lt;br/&gt;
        魔力：　50&lt;br/&gt;
        紹介文：　私は勇者です。よろしくお願いします。&lt;br/&gt;
        &lt;v-img
            src="https://picsum.photos/64/64"
            alt="なんか画像"
            style="width: 64px; height: 64px;"
        /&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </pre>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                name 変数は、説明すると横道に逸れるから省略ねえ。
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                では、以下のような、テキストとか画像とかもある部分を穴埋めの穴にしたいと思ったときどうするかだぜ。
        </talk-balloon>
        <br/>

        <div class="markup-example">
            <div style="background-color: skyblue;">
                名前：　すっぽん<br/>
                体力：　100<br/>
                魔力：　50<br/>
                紹介文：　<span style="background-color: yellowgreen;">ここらへんを<br/>
                穴にしたい</span>
            </div>
        </div>
        <br/>
        <br/>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 そんなとき、スロットを使ってこう書くんだぜ。
        </talk-balloon>
        <br/>

        📄 no-1-child.vue:<br/>
        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;div style="background-color: skyblue;"&gt;
        名前：　すっぽん&lt;br/&gt;
        体力：　100&lt;br/&gt;
        魔力：　50&lt;br/&gt;
        紹介文：　<span style="background-color: yellowgreen;">&lt;slot&gt;&lt;/slot&gt;</span>&lt;br/&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </pre>
        
        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                要は HTML をぶっこめる穴よねえ。
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                で、この作ったテンプレートは、他のテンプレートから呼び出せるんだぜ。<br/>
                <br/>
                呼び出される方を子、呼び出す方を親とするとき、<br/>
                👇 親の方で以下のように書けば……。
        </talk-balloon>
        <br/>

        📄 a parent .vue file:<br/>
        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;no-1-child&gt;
        わたしはオークです。よろしくねえ。
        &lt;v-img
            src="https://picsum.photos/64/64"
            alt="なんか画像"
            style="width: 64px; height: 64px;"
        /&gt;
    &lt;/no-1-child&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    import No1Child from '@/components/no-1-child.vue';
&lt;/script&gt;
        </pre>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                👆 No1Child は、タグ名にするとき kebab-case にできるのよね。"&lt;No1Child&gt;" とも書けるし、 "&lt;no-1-child&gt;" とも書ける。
        </talk-balloon>

        actual:<br/>
        <div class="markup-example">
            <no-1o0-child>
                わたしはオークです。よろしくねえ。
                <v-img
                    src="https://picsum.photos/64/64"
                    alt="なんか画像"
                    style="width: 64px; height: 64px;"
                />
            </no-1o0-child>
        </div>
        <br/>
        <br/>

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                以下のように、スロットを２か所作りたいときはどうするんだぜ？
        </talk-balloon>

        expected:<br/>
        <div class="markup-example">
            <div style="background-color: skyblue;">
                名前：　すっぽん<br/>
                体力：　100<br/>
                魔力：　50<br/>
                紹介文：　<span style="background-color: yellowgreen;">私は勇者です。よろしくお願いします。<br/>
                <v-img
                    src="https://picsum.photos/64/64"
                    alt="なんか画像"
                    style="width: 64px; height: 64px;"
                /></span><br/>
                制作者近影：　<span style="background-color: lightpink;">大好物はラーメン。<br/>
                <v-img
                    src="https://picsum.photos/64/64"
                    alt="なんか画像"
                    style="width: 64px; height: 64px;"
                /></span>
            </div>
        </div>
        <br/>
        <br/>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 例えば、次のように書けるぜ。
        </talk-balloon>
        <br/>

        📄 no-1-2-child.vue:<br/>
        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;div style="background-color: skyblue;"&gt;
        名前：　すっぽん&lt;br/&gt;
        体力：　100&lt;br/&gt;
        魔力：　50&lt;br/&gt;
        紹介文：　<span style="background-color: yellowgreen;">&lt;slot&gt;&lt;/slot&gt;</span>&lt;br/&gt;
        制作者近影：　<span style="background-color: lightpink;">&lt;slot name="author"&gt;&lt;/slot&gt;</span>&lt;br/&gt;
    &lt;/div&gt;
&lt;/template&gt;
        </pre>

        📄 a parent vue file:<br/>
        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;no-2-child&gt;
        わたしはオークです。よろしくねえ。
        &lt;v-img
            src="https://picsum.photos/64/64"
            alt="なんか画像"
            style="width: 64px; height: 64px;"
        /&gt;
        <span style="background-color: lightpink;">&lt;template #author&gt;</span>
            大好物はラーメン。&lt;br/&gt;
            &lt;v-img
                src="https://picsum.photos/64/64"
                alt="なんか画像"
                style="width: 64px; height: 64px;"
            /&gt;
        <span style="background-color: lightpink;">&lt;/template&gt;</span>
    &lt;/no-2-child&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    import No2Child from '@/components/no-2-child.vue';
&lt;/script&gt;
        </pre>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 するとこうなる。
        </talk-balloon>
        <br/>

        actual:<br/>
        <div class="markup-example">
            <no-1o2o0-child>
                わたしはオークです。よろしくねえ。
                <v-img
                    src="https://picsum.photos/64/64"
                    alt="なんか画像"
                    style="width: 64px; height: 64px;"
                />

                <!-- eslint-disable -->
                <template #author>
                <!-- eslint-enable -->
                    大好物はラーメン。<br/>
                    <v-img
                        src="https://picsum.photos/64/64"
                        alt="なんか画像"
                        style="width: 64px; height: 64px;"
                    />
                </template>
            </no-1o2o0-child>
        </div>
        <br/>
        <br/>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                👆 Visual Studio Code （略称：VSCode）を使ってると、以下のようなエラーメッセージが出るんだけど？<br/>
        </talk-balloon>


        <talk-image
            href="/img/coding-style/202509__warabenture__08-2136-slotError-o1o0.jpg"
            alt="Property 'author' does not exist on type '{}'. ts-plugin(2339) [Ln 349, Col 28]"
        />

        <pre class="terminal-example">
Property 'author' does not exist on type '{}'. ts-plugin(2339) [Ln 349, Col 28]
        </pre>
        <br/>
        <br/>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                VSCode の Vue公式エクステンションの不具合なんじゃないかな。<br/>
                <br/>
                Grok に聞いたら、なんかあれしろ、これしろというのでやっては動かず、<br/>
                聞き返しては次にあれしろというからやってみたが動かず、というのを４回ぐらいやったが、解決しなかったぜ。
        </talk-balloon>
        <br/>

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                Grok は知ったかだからな。
        </talk-balloon>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                問題の切り分けをしましょう。<br/>
                <br/>
                Tauri + Vue3 の環境でエラーが出るんだけど、<br/>
                Nuxt + Vue3 の環境ではこのエラーは出ないわよ？
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                えっ、じゃあ Tauri 側の不具合かだぜ？<br/>
                <br/>
                tauri-cli のバージョンは 2.0.4、<br/>
                今は 2.8.x まで出てるらしいんで、アップデートしてみるか……
        </talk-balloon>
        <br/>

        <pre class="terminal-example">
pnpm add -D @tauri-apps/cli@latest
        </pre>
        <br/>
        <br/>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                あれっ、 @tauri-apps/cli が 2.8.3 から 2.8.4 に更新されて、<br/>
                tauri-cli のバージョンは 2.0.4 のままだ……、どういうこっちゃ。
        </talk-balloon>

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                Tauri とか 2020年に出てきた技術だからな。<br/>
                まだまだ不具合が多いんじゃないか？
        </talk-balloon>

        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                べつに Vue3 専用のフレームワークでもないですしね
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                じゃあ、VSCode の PROBLEMS ペーンが ❌ 印でまっかっかでも気にしないでおくか……。<br/>
                利用人口が増えたら誰かが不具合を直してくれるだろ……
        </talk-balloon>

        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                VSCode の PROBLEMS にメッセージが多くてうざいというだけなら、<br/>
                ターミナルのフィルター欄に以下のようにかけば、該当するメッセージを非表示にできるぜ。
        </talk-balloon>

        <pre class="terminal-example">
!Property '*' does not exist on type '{}'.
        </pre>
        <br/>
        <br/>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                あっ、こんなんできるんだ、じゃあ、これでしのごう。<br/>
                保存はできないのか。毎回入れるか……めんどくさ。
        </talk-balloon>

    </section>

    <h2 class="mt-6">スロット・プロパティ</h2>
    <section class="sec-2 pt-6">

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                次は話が変わって、子コンポーネントから親コンポーネントへ、逆向きに値を渡す方法を説明するぜ。
        </talk-balloon>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 こういうデータが載ってる本を作りたいとするだろ。
        </talk-balloon>
        <br/>

        expected:<br/>
        <div class="markup-example">
            <div style="background-color: skyblue;">
                名前：　すっぽん<br/>
                ヒットポイント：　100<br/>
                マジックパワー：　50<br/>
            </div>
        </div>
        <br/>
        <br/>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 で、子コンポーネントの方には、ヒットポイントとか、マジックパワーといった見出しは持っていないものとするぜ。
        </talk-balloon>
        <br/>

        📄 no-1-3-child.vue:<br/>
        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;div style="background-color: skyblue;"&gt;
        名前：　すっぽん&lt;br/&gt;
        <span style="background-color: yellowgreen;">&lt;slot name="hp" :hit-point="100"&gt;&lt;/slot&gt;</span>&lt;br/&gt;
        <span style="background-color: lightpink;">&lt;slot name="mp" :magic-power="50"&gt;&lt;/slot&gt;</span>&lt;br/&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    <span class="blue-marker">const slots = defineSlots<{
        default(): any;
        hp(props: { hitPoint: number }): any;
        mp(props: { magicPower: number }): any;
    }>();</span>
&lt;/script&gt;
        </pre>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 そこで、親コンポーネントの方で見出しを用意して、子コンポーネントから値を受け取るように書くぜ。
        </talk-balloon>
        <br/>

        📄 a parent .vue file:<br/>
        <pre class="coding-example mb-6">
&lt;template&gt;
    &lt;no-1o3o0-child&gt;
        &lt;v-slot <span class="red-marker">#hp="slotProps"</span>&gt;
            ヒットポイント：　<span class="red-marker">&#123;&#123; slotProps.hitPoint &#125;&#125;</span>
        &lt;/v-slot&gt;
        &lt;v-slot <span class="green-marker">#mp="slotProps"</span>&gt;
            マジックパワー：　<span class="green-marker">&#123;&#123; slotProps.magicPower &#125;&#125;</span>
        &lt;/v-slot&gt;
    &lt;/no-1o3o0-child&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
    import No1Child from '@/components/no-1-child.vue';
&lt;/script&gt;
        </pre>

        actual:<br/>
        <div class="markup-example">
            <no-1o3o0-child>
                <template #hp="slotProps">
                    ヒットポイント：　{{ slotProps.hitPoint }}
                </template>
                <template #mp="slotProps">
                    マジックパワー：　{{ slotProps.magicPower }}
                </template>
            </no-1o3o0-child>
        </div>
        <br/>
        <br/>

        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👆　できてるだろ。
        </talk-balloon>
        <br/>

    </section>

    <h2>ソースコード</h2>
    <section class="sec-2 pt-6">
        <source-link/>
    </section>

    <button-to-close-pane
        class="sec-0"
        direction="up"
        pagePath="/reference"
    />
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { ref } from "vue";

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import ButtonToClosePane from '@/components/ButtonToClosePane.vue';
    import CompatibleDevice from '@/components/CompatibleDevice.vue'
    import No1o0Child from '@/components/coding-style/no-1-0-child.vue';
    import No1o2o0Child from '@/components/coding-style/no-1-2-0-child.vue';
    import No1o3o0Child from '@/components/coding-style/no-1-3-0-child.vue';
    import SourceLink from '@/components/SourceLink.vue';
    import TalkBalloon from '@/components/TalkBalloon.vue';
    import TalkImage from '@/components/TalkImage.vue';
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

</script>

<style scoped>

    @import '@/styles/notebook.css';

</style>
