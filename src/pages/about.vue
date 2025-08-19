<template>
    <the-parent-header/>

    <h2>このサイトについて</h2>
    <section class="sec-2">
        <p>こんなとこ読まんでも……（＾～＾）</p>
        <br/>
        <!--
        <p>ワラベンチャーでは、Ｗｅｂとデスクトップで両用できるアプリケーションを開発していっているぜ（＾▽＾）！</p>
        <p>開発のメインとして使っているのは Vue 3 と、 Vuetify 3 だぜ（＾▽＾）</p>
        <p>なるべく Tauri 3 と Nuxt 3 の機能は、必要になるまで使わないようにしているぜ（＾～＾）</p>
        -->
    </section>

    <h3>制作者</h3>
    <section class="sec-3">
        <p>ハンドルネーム：　むずでょ</p>
        <p>同人サークル：　ぐれーすけーる（２０１３年～）</p>
        <p>スキル：　２０００年の００年代は、ひとより多少ＰＣを使えてプログラミングができる、というだけで職業に就けてた人。２０年代はもう希少性なし、おわった。Grok も私よりコーディング上手いし。</p>
        <br/>
    </section>

    <h3>どういうホームページにしていきたいか？</h3>
    <section class="sec-3">
        <p>メインで使っていた使いやすいブログサイトがサ終したなんてこともあって、２０２５年から、以前から持っていたこのホームページをふらっと気分だけで全面改装、ここで　<span style="background-color: lightgray;">　<a href="/blog">ブログ</a>　</span>　を自力で書いていくことにした（＾～＾）</p>
        <br/>
        <p>まあ、ついでだが最近（２０２５年）、ブログやホームページの制作で使われるＨＴＭＬ……（厳密にはもっと細かく色々あるがここではＨＴＭＬとでも言っておくが、そのＨＴＭＬで……）ミニゲーム動かせるの知ったしな、フロントエンドの勉強ちょっとやりこんでみるか（＾～＾）</p>
        <p>だから、今ご覧のこのホームページに、（勉強しながらの）　<span style="background-color: lightgray;">　<a href="/minigames">ミニゲーム</a>　</span>　を置き始めると思うぜ（＾～＾）</p>
        <p>その勉強途中のものを　<span style="background-color: lightgray;">　<a href="/making">メイキング</a>　</span>　とかいうページに置いていくぜ、メイキングという英単語で合ってるのか知らないが……（＾～＾）</p>
        <br/>
        <p>Grok とか、GitHub Copilot みたいなコードを提案してくれる生成ＡＩも出てきたしな（＾～＾）</p>
        <p>そのうちわたしがＡＩにコーディングを教えてもらいながらミニゲーム作らんでも、ＡＩたちに「ミニゲーム作って」って言えば、わたし抜きで直接面白いミニゲーム作って出力してくれると思う（＾～＾）</p>
        <p>むしろわたしが手や口を挟まない方が面白いゲーム作ってくれるんだろな、なんかやることなくなるよな、わたしは何もしなくていいんじゃないか（＾～＾）？</p>
        <br/>
        <p>ただ「最近、こんなことやってる、趣味で……」という感じになっていくんだろな（＾～＾）</p>
        <p>いくら生成ＡＩが、「野球観戦は得意です」なんていっても人間の野球観戦は減らないだろうしな（＾～＾）</p>
        <br/>
    </section>

    <!--
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

    <h4>環境１：　デスクトップアプリの練習</h4>
    <section class="sec-4">
        <p>フロントエンド： Vue 3, Vuetify 3</p>
        <p>バックエンド： Tauri 2</p>
        <p>ホスト： Takahashi-PC（ローカルＰＣ）</p>
        <p>ＯＳ： Windows 11</p>
        <p>ソース： <a target="_blank" href="https://github.com/muzudho/vue-tauri-desktopapp-sample">muzudho / vue-tauri-desktopapp-sample</a></p>
    </section>

    <h4>環境２：　ウェブアプリの練習</h4>
    <section class="sec-4">
        <p>フロントエンド： Vue3, Vuetify3</p>
        <p>バックエンド： Nuxt 2</p>
        <p>ホスト： Takahashi-PC（ローカルＰＣ）</p>
        <p>ＯＳ： Windows 11</p>
        <p>ソース： <a target="_blank" href="https://github.com/muzudho/vue-nuxt-webapp-sample">muzudho / vue-nuxt-webapp-sample</a></p>
    </section>

    <h4>環境３：　ワラベンチャー・ホームページ</h4>
    <section class="sec-4">
        <p>フロントエンド： Vue3, Vuetify3</p>
        <p>バックエンド： Nuxt 2</p>
        <p>ホスト： ****（さくらのVPS）</p>
        <p>ＯＳ： Ubuntu</p>
        <p>ソース： <a target="_blank" href="https://github.com/muzudho/Warabenture-2025">muzudho / Warabenture-2025</a></p>
    </section>

    <h4>説明</h4>
    <section class="sec-4">
        <p>まず環境１でデスクトップアプリを作り、次に環境２のＷｅｂアプリへ移植し、最終的に環境３のサーバーにデプロイするんだぜ（＾▽＾）！</p>
        <p>このとき、環境１と環境２の間、環境２と環境３の間では、単純なコピー貼り付けとはいかないので、なるべく３者の違いを小さくするべく３者の間を取ったような協した仕様にし、手で１つ１つ移植するぜ（＾～＾）</p>
        <p>このとき、Nuxt 2 はべつに Tauri 専用ではないし、Tauri はべつに Nuxt 2 専用ではないから、どちらかが折れてシステム全体を効率的に１つに統合させる、といったことはできないぜ。必ず文化の違いが衝突する。</p>
        <p>そのときの妥協点が、工夫だな（＾～＾）</p>
    </section>
    -->

    <the-parent-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TheParentHeader from '../the-header.vue';
    import TheParentFooter from '../the-footer.vue';

</script>
