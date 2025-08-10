<template>
    <the-header/>

    <h3>説明を始める前に、説明ページのレイアウトを決めておこうぜ！</h3>
    <section class="sec-3">
        凡例だぜ（＾▽＾）！
    </section>

    <v-container style="border:dashed 4px gray;">
        <h1>ワラベンチャー</h1>
        <section class="sec-1">
            上の見出しはウェブサイトのタイトルだぜ（＾▽＾）！<br/>
            ここは、ワラベンチャーの地の文だぜ（＾▽＾）！<br/>
            <br/>
            以下の［章］より上に何か付けるなら［巻］＞［部］が考えられるな（＾▽＾）！<br/>
            中身をテーマごとに寄せ集め直したら［編］になるな（＾▽＾）！<br/>
        </section>

        <h2>１章</h2>
        <section class="sec-2">
            １章（Chapter）の本文だぜ（＾▽＾）！
        </section>

        <h3>１．１節</h3>
        <section class="sec-3">
            １．１節（Section）の本文だぜ（＾▽＾）！
        </section>

        <h4>１．１．１項</h4>
        <section class="sec-4">
            １．１．１項（Paragraph）の本文だぜ（＾▽＾）！
        </section>

        <h5>１．１．１．１条</h5>
        <section class="sec-5">
            １．１．１．１条（4 Article）の本文だぜ（＾▽＾）！
        </section>

        <h6>１．１．１．１．１段</h6>
        <section class="sec-6">
            １．１．１．１．１段の本文だぜ（＾▽＾）！<br/>
            条の下とか日本語に無い。条と段の順序は同じぐらいだぜ（＾▽＾）！<br/>
            <br/>
            これより下は日本語に無いから、住所を参考にすると、［目］、［盤］、［号」などが考えられるか（＾▽＾）？<br/>
        </section>

    </v-container>
    <hr/>
    <router-link to="/making">メイキングの先頭に戻る</router-link>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TheHeader from './the-header.vue';

</script>
