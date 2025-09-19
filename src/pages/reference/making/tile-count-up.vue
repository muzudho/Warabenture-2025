<template>
    <the-app-header/>
    <button-to-back-to-contents
        class="sec-0 mt-6"
        pagePath="../"
    />

    <h1>タイル　＞　でカウントアップのアニメーションする章だぜ！</h1>
    <section class="sec-1">

        ここに切り抜いたタイルを表示：<br/>
        <TileAnimation
                :frames="[
                    {top:   0, left:    0, width: 32, height: 32 },     // 0フレーム目
                    {top:   0, left:   32, width: 32, height: 32 },
                    {top:   0, left:   64, width: 32, height: 32 },
                    {top:   0, left:   96, width: 32, height: 32 },
                    {top:   0, left:  128, width: 32, height: 32 },
                    {top:   0, left:  160, width: 32, height: 32 },
                    {top:   0, left:  192, width: 32, height: 32 },
                    {top:   0, left:  224, width: 32, height: 32 },
                    {top:   0, left:  256, width: 32, height: 32 },
                    {top:   0, left:  288, width: 32, height: 32 },
                    {top:  32, left:    0, width: 32, height: 32 },     // 10フレーム目
                    {top:  32, left:   32, width: 32, height: 32 },
                    {top:  32, left:   64, width: 32, height: 32 },
                    {top:  32, left:   96, width: 32, height: 32 },
                    {top:  32, left:  128, width: 32, height: 32 },
                    {top:  32, left:  160, width: 32, height: 32 },
                    {top:  32, left:  192, width: 32, height: 32 },
                    {top:  32, left:  224, width: 32, height: 32 },
                    {top:  32, left:  256, width: 32, height: 32 },
                    {top:  32, left:  288, width: 32, height: 32 },
                    {top:  64, left:    0, width: 32, height: 32 },     // 20フレーム目
                    {top:  64, left:   32, width: 32, height: 32 },
                    {top:  64, left:   64, width: 32, height: 32 },
                    {top:  64, left:   96, width: 32, height: 32 },
                    {top:  64, left:  128, width: 32, height: 32 },
                    {top:  64, left:  160, width: 32, height: 32 },
                    {top:  64, left:  192, width: 32, height: 32 },
                    {top:  64, left:  224, width: 32, height: 32 },
                    {top:  64, left:  256, width: 32, height: 32 },
                    {top:  64, left:  288, width: 32, height: 32 },
                    {top:  96, left:    0, width: 32, height: 32 },     // 30フレーム目
                    {top:  96, left:   32, width: 32, height: 32 },
                    {top:  96, left:   64, width: 32, height: 32 },
                    {top:  96, left:   96, width: 32, height: 32 },
                    {top:  96, left:  128, width: 32, height: 32 },
                    {top:  96, left:  160, width: 32, height: 32 },
                    {top:  96, left:  192, width: 32, height: 32 },
                    {top:  96, left:  224, width: 32, height: 32 },
                    {top:  96, left:  256, width: 32, height: 32 },
                    {top:  96, left:  288, width: 32, height: 32 },
                    {top: 128, left:    0, width: 32, height: 32 },     // 40フレーム目
                    {top: 128, left:   32, width: 32, height: 32 },
                    {top: 128, left:   64, width: 32, height: 32 },
                    {top: 128, left:   96, width: 32, height: 32 },
                    {top: 128, left:  128, width: 32, height: 32 },
                    {top: 128, left:  160, width: 32, height: 32 },
                    {top: 128, left:  192, width: 32, height: 32 },
                    {top: 128, left:  224, width: 32, height: 32 },
                    {top: 128, left:  256, width: 32, height: 32 },
                    {top: 128, left:  288, width: 32, height: 32 },
                    {top: 160, left:    0, width: 32, height: 32 },     // 50フレーム目
                    {top: 160, left:   32, width: 32, height: 32 },
                    {top: 160, left:   64, width: 32, height: 32 },
                    {top: 160, left:   96, width: 32, height: 32 },
                    {top: 160, left:  128, width: 32, height: 32 },
                    {top: 160, left:  160, width: 32, height: 32 },
                    {top: 160, left:  192, width: 32, height: 32 },
                    {top: 160, left:  224, width: 32, height: 32 },
                    {top: 160, left:  256, width: 32, height: 32 },
                    {top: 160, left:  288, width: 32, height: 32 },
                ]"
                tilemapUrl="/img/making/timer_square.png"
                :slow="clock1AnimationSlow"
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
                v-model="clock1AnimationSlow"
                min="1"
                max="10"
                step="1"
                showTicks="always"
                thumbLabel="always" />
        <br/>
        元画像のタイルマップを表示：<br/>
        <v-img src="/img/making/timer_square.png" style="width:320px; height:192px; zoom: 4; image-rendering: pixelated;"/>
        ：ここまで。
    </section>

    <br/>
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

    import { ref } from 'vue';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    // from の階層が上の順、アルファベット順
    import SourceLink from '../../../components/SourceLink.vue';
    import Stopwatch from '../../../components/Stopwatch.vue';
    import TileAnimation from '../../../components/TileAnimation.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import ButtonToBackToContents from '@/components/ButtonToBackToContents.vue';
    import ButtonToBackToTop from '@/components/ButtonToBackToTop.vue';
    import TheAppHeader from '../../the-app-header.vue';


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ストップウォッチ１ +
    // ++++++++++++++++++++++++++++++++++++++++

    const stopwatch1Ref = ref<InstanceType<typeof Stopwatch> | null>(null); // Stopwatch のインスタンス
    const stopwatch1Count = ref<number>(0);   // カウントの初期値

    // ++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　カウントアップ時計 +
    // ++++++++++++++++++++++++++++++++++++++++

    const clock1AnimationSlow = ref<number>(1);   // スローモーションの倍率の初期値

</script>
