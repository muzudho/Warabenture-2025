<template>
    <the-app-header/>
    <button-to-back-to-contents
        class="sec-0 mt-6"
        pagePath="../"
    />

    <h1>タイル　＞　を画像から切り抜く章だぜ！</h1>
    <section class="sec-1">
        ここに切り抜いたタイルを表示：<br/>
        <Tile
                :srcLeft="64"
                :srcTop="32"
                :srcWidth="32"
                :srcHeight="64"
                tilemapUrl="/img/making/tilemap_sample.png" /><br/>
        <!--
        	NOTE: 👆 Tauri なら srcLeft="64" と書けるが、 Nuxt では :srcLeft="64" と書かないとエラーが出るようだ。
            数値を直接書くと、 Nuxt では文字列として解釈されてしまう。
        -->
        ：ここまで。<br/>
        <br/>

        元画像のタイルマップを表示：<br/>
        <v-img src="/img/making/tilemap_sample.png" style="width:128px; height:128px; border: dashed 4px gray;"/>
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

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import SourceLink from '../../../components/SourceLink.vue';
    import Tile from '../../../components/Tile.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import ButtonToBackToContents from '@/components/ButtonToBackToContents.vue';
    import ButtonToBackToTop from '@/components/ButtonToBackToTop.vue';
    import TheAppHeader from '../../the-app-header.vue';

</script>
