<template>
    <the-header/>

    <h2>このサイトについて</h2>
    <section class="sec-2">
        <p>ワラベンチャーでは、Ｗｅｂとデスクトップで両用できるアプリケーションを開発していっているぜ（＾▽＾）！</p>
    </section>

    <h3>製作者</h3>
    <section class="sec-3">
        <p>ハンドルネーム：　むずでょ</p>
    </section>

    <h3>開発ツール</h3>

    <h4>ＡＩ</h4>
    <section class="sec-4">
        <p>Grok 3 ... 年間１万数千円払ってるかな。</p>
    </section>

    <h4>お絵描きソフト</h4>
    <section class="sec-4">
        <p>Windows Paint ... Windows 11 に付いてくる。</p>
        <p>GIMP 3 ... 無料。</p>
        <p>Aseprite ... Version 1.3.14.4。 $19.99 USD。日本円で 2950円ぐらいした。なぜか今どき買い切り。</p>
    </section>

    <h3>開発環境の構成</h3>
    <section class="sec-3">
        ３つの環境を用意しているぜ（＾▽＾）！
    </section>

    <h4>環境１</h4>
    <section class="sec-4">
        <p>フロントエンド： Vue 3, Vuetify 3</p>
        <p>バックエンド： Tauri 2</p>
        <p>ホスト： Takahashi-PC（ローカルＰＣ）</p>
        <p>ＯＳ： Windows 11</p>
    </section>

    <h4>環境２</h4>
    <section class="sec-4">
        <p>フロントエンド： Vue3, Vuetify3</p>
        <p>バックエンド： Nuxt 2</p>
        <p>ホスト： Takahashi-PC（ローカルＰＣ）</p>
        <p>ＯＳ： Windows 11</p>
    </section>

    <h4>環境３</h4>
    <section class="sec-4">
        <p>フロントエンド： Vue3, Vuetify3</p>
        <p>バックエンド： Nuxt 2</p>
        <p>ホスト： ****（さくらのVPS）</p>
        <p>ＯＳ： Ubuntu</p>
    </section>

    <h4>説明</h4>
    <section class="sec-4">
        <p>まず環境１でデスクトップアプリを作り、次に環境２のＷｅｂアプリへ移植し、最終的に環境３のサーバーにデプロイするんだぜ（＾▽＾）！</p>
        <p>このとき、環境１と環境２の間、環境２と環境３の間では、単純なコピー貼り付けとはいかないので、なるべく３者の違いを小さくするべく３者の間を取ったような協した仕様にし、手で１つ１つ移植するぜ（＾～＾）</p>
        <p>このとき、Nuxt 2 はべつに Tauri 専用ではないし、Tauri はべつに Nuxt 2 専用ではないから、どちらかが折れてシステム全体を効率的に１つに統合させる、といったことはできないぜ。必ず文化の違いが衝突する。</p>
        <p>そのときの妥協点が、工夫だな（＾～＾）</p>
    </section>
    <hr/>
    <router-link to="/">ホームに戻る</router-link>
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
