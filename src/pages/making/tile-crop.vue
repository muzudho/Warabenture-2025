<template>
    <the-header/>

    <h3>タイル　＞　を画像から切り抜くぜ！　の章</h3>
    <section class="sec-3">
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
    import Tile from '../../components/Tile.vue';

</script>
