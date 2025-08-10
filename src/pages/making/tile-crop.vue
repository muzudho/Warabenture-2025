<template>
    <the-header/>

    <h3>タイル　＞　を画像から切り抜くぜ！</h3>
    <section class="sec-3">
        ここに切り抜いたタイルを表示：<br/>
        <Tile
                :srcLeft="64"
                :srcTop="32"
                :srcWidth="32"
                :srcHeight="64"
                :tilemapUrl="'/img/making/tilemap_sample.png'" /><br/>
        ：ここまで。<br/>
        <br/>
        元画像のタイルマップを表示：<br/>
        <v-img src="/img/making/tilemap_sample.png" style="width:128px; height:128px;"/>
        ：ここまで。
    </section>
    <hr/>
    <router-link to="/making">メイキングの先頭に戻る</router-link>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import Tile from '@/components/Tile.vue';

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TheHeader from './the-header.vue';

</script>
