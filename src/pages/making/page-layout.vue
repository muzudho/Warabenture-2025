<template>
    <the-header/>

    <h3>説明を始める前に、説明ページのレイアウトを決めておこうぜ！　の章</h3>
    <section class="sec-3">
        <p>凡例だぜ（＾▽＾）！</p>
        <v-container style="border:dashed 4px gray;">
            <h1>ワラベンチャー</h1>
            <section class="sec-1">
                上の見出しはウェブサイトのタイトルだぜ（＾▽＾）！<br/>
                ここは、ワラベンチャーの地の文だぜ（＾▽＾）！<br/>
                <br/>
                以下の［部］より上に何か付けるなら［巻］が考えられるな（＾▽＾）！<br/>
                中身をテーマごとに寄せ集め直したら［編］になるな（＾▽＾）！<br/>
            </section>

            <h2>１部</h2>
            <section class="sec-2">
                １部（Part）の本文だぜ（＾▽＾）！
            </section>

            <h3>１．１章</h3>
            <section class="sec-3">
                １．１章（Chapter）の本文だぜ（＾▽＾）！
            </section>

            <h4>１．１．１節</h4>
            <section class="sec-4">
                １．１．１節（Section）の本文だぜ（＾▽＾）！
            </section>

            <h5>１．１．１．１項</h5>
            <section class="sec-5">
                １．１．１．１項（Paragraph）の本文だぜ（＾▽＾）！
            </section>

            <h6>１．１．１．１．１条</h6>
            <section class="sec-6">
                １．１．１．１．１条（4 Article）の本文だぜ（＾▽＾）！<br/>
                <br/>
                これより下は日本語に無いから、住所を参考にすると、［目］、［番］、［号」などが考えられるか（＾▽＾）？<br/>
            </section>
        </v-container>
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

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import SourceLink from '../../components/SourceLink.vue';
    import TheFooter from './the-footer.vue';
    import TheHeader from './the-header.vue';

</script>
