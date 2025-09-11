<template>
    <the-chapter-header/>

    <h3>タイル　＞　でカウントアップのアニメーションするぜ！　＞　ＲＰＧの歩行グラフィック　の章</h3>
    <section class="sec-3">
        ここに切り抜いたタイルを表示：<br/>
        <tile-animation
            :frames="[
                // 上向き
                {top:   0, left:    0, width: 32, height: 32 },
                {top:   0, left:   32, width: 32, height: 32 },
                {top:   0, left:    0, width: 32, height: 32 },
                {top:   0, left:   32, width: 32, height: 32 },

                // 右向き
                {top:  32, left:    0, width: 32, height: 32 },
                {top:  32, left:   32, width: 32, height: 32 },
                {top:  32, left:    0, width: 32, height: 32 },
                {top:  32, left:   32, width: 32, height: 32 },

                // 下向き
                {top:  64, left:    0, width: 32, height: 32 },
                {top:  64, left:   32, width: 32, height: 32 },
                {top:  64, left:    0, width: 32, height: 32 },
                {top:  64, left:   32, width: 32, height: 32 },

                // 左向き
                {top:  96, left:    0, width: 32, height: 32 },
                {top:  96, left:   32, width: 32, height: 32 },
                {top:  96, left:    0, width: 32, height: 32 },
                {top:  96, left:   32, width: 32, height: 32 },
            ]"
            tilemapUrl="/img/making/202508__warabenture__15-1612-kifuwarabe-o1o0.png"
            :slow="player1AnimationSlow"
            :time="stopwatch1Count"
            style="zoom:4; image-rendering: pixelated;" /><br/>
        <!--
            NOTE: Tauri では left="64" のように数字を渡せるが、 Nuxt では :left="64" のように書かないと数字で渡せないようだ。
        -->
        ：ここまで。<br/>
        <br/>

        <!-- ストップウォッチ。表示します。 -->
        <stopwatch
            ref="stopwatch1Ref"
            v-on:countUp="(countNum) => { stopwatch1Count = countNum; }" />

        <div class="text-caption">
            Slow
        </div>
        <v-slider
            v-model="player1AnimationSlow"
            min="1"
            max="32"
            step="1"
            showTicks="always"
            thumbLabel="always" />
        <br/>
        元画像のタイルマップを表示：<br/>
        <v-img src="/img/making/202508__warabenture__15-1612-kifuwarabe-o1o0.png" style="width:64px; height:128px; zoom: 4; image-rendering: pixelated;"/>
        ：ここまで。
    </section>

    <br/>
    <h3>ソースコード</h3>
    <section class="sec-3">
        <source-link/>
    </section>

    <the-chapter-footer/>
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

    // from の階層が上の順、アルファベット順
    import SourceLink from '../../components/SourceLink.vue';
    import Stopwatch from '../../components/Stopwatch.vue';
    import TileAnimation from '../../components/TileAnimation.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import TheChapterFooter from './the-chapter-footer.vue';
    import TheChapterHeader from './the-chapter-header.vue';


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ストップウォッチ１ +
    // ++++++++++++++++++++++++++++++++++++++++

    const stopwatch1Ref = ref<InstanceType<typeof Stopwatch> | null>(null); // Stopwatch のインスタンス
    const stopwatch1Count = ref<number>(0);   // カウントの初期値


    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　プレイヤー +
    // ++++++++++++++++++++++++++++++++

    const player1AnimationSlow = ref<number>(8);   // スローモーションの倍率の初期値

</script>
