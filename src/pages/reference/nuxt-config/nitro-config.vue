<template>
    <the-app-header/>
    <button-to-back-to-contents
        class="sec-0 mt-6"
        pagePath="../"
    />

    <h1>ニトロのプリレンダーの負荷を下げる設定をしようぜ！</h1>
    <section class="sec-1 pt-6">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            pnpm generate コマンド打鍵したら、サーバーサイドのプリレンダー中に処理が止まってしまう……。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            Nuxt のサーバーサイドのプリレンダーに苦しめられてるの、わらう。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            メモリが足りてないんかな。<br/>
            時間に余裕はあるのだから、急いでプリレンダーしようとせずに、もっとゆっくり時間をかけてプリレンダーすればいいのに……
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device"
        >
            そういうのどっかの設定ファイルで調整できんじゃないの？
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device"
        >
            黒吉に聞いてみようぜ？
        </talk-balloon>


       <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            これでメモリが足りてるか分かるかだぜ？
        </talk-balloon>


        <pre class="terminal-example mb-6">
free -h
        </pre>


        <pre class="coding-example mb-6">
               total        used        free      shared  buff/cache   available
Mem:           3.8Gi       3.0Gi       350Mi       1.0Mi       777Mi       874Mi
Swap:             0B          0B          0B
        </pre>


        <talk-balloon
            :src="kurokichi1Src"
            :alt="kurokichi1Alt"
            :name="kurokichi1Name"
            :device="compatibleDevice1Ref?.device"
        >
            分析<br/>
            利用可能メモリ (available): 874MiB（約0.9GB）は、ビルドタスクにはちょっと心許ない。NuxtのNitroプリレンダリングは1GB以上の空きを推奨されることが多い。<br/>
            <br/>
            結論: メモリは足りてるか？<br/>
            ハングの原因: 前のログで「Prerendering 3 initial routes with crawler」で止まってるから、特定のルートがメモリを食いすぎて、Swapがないせいでプロセスが止まってるっぽい。<br/>
            <br/>
            2. メモリ不足によるハングの証拠<br/>
            状況: クライアントビルド（16.57秒）とサーバービルド（19.16秒）は完了してるけど、プリレンダリングで止まる。これはNitroがルートをクロールしてHTML生成中にメモリを大量消費してるサイン<br/>
            <br/>
            3. 対策：メモリ不足を解消<br/>
            メモリ不足を解消してpnpm generateのハングを防ぐ具体的な手順を提案するよ！<br/>
            <br/>
            (3) Nitroのプリレンダリングを軽量化<br/>
            プリレンダリングがメモリを食いすぎてるので、nuxt.config.tsを調整：
        </talk-balloon>


        <p>📄 nuxt.config.ts（抜粋）:</p>
        <pre class="coding-example mb-6">
export default defineNuxtConfig({
    nitro: {
        prerender: {
            crawlLinks: false, // クローラー無効化
            routes: ['/', '/about', '/contact'], // 必要なルートだけ指定
            failOnError: false, // エラーで止まらない
        },
    },
});
        </pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            なるほど、そんな感じで設定すればいいのか。<br/>
            ワラベンチャー用に設定してみるぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device"
        >
            おー、さくらの VPS 側のスワップ・メモリーとアベイラブル・メモリーの設定、そして、ニトロのプリレンダーの設定の両方を併せて、プリレンダーのエラーが取れたぜ！
        </talk-balloon>


    </section>

    <h2>ソースコード</h2>
    <section class="sec-2">
        <source-link/>
    </section>

    <button-to-go-to-top class="sec-0 pt-6"/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, ref } from "vue";

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import ButtonToBackToContents from '@/components/ButtonToBackToContents.vue';
    import ButtonToGoToTop from '@/components/ButtonToGoToTop.vue';
    import CompatibleDevice from '@/components/CompatibleDevice.vue'
    import SourceLink from '@/components/SourceLink.vue';
    import TalkBalloon from '@/components/TalkBalloon.vue';
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
    import kurokichi1Src from "@/assets/img/talk/202509__character__10--kurokichi.png";
    const kurokichi1Alt = "グロックの黒吉１";
    const kurokichi1Name = "グロックの黒吉";


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

    // ++++++++++++++++++++++++++++
    // + オブジェクト　＞　長方形 +
    // ++++++++++++++++++++++++++++

    const apple: number = 250;


    function getRectangle4() : any {
        return {
            width: `${apple}px`,
            height: '100px',
            backgroundColor: 'skyblue',
            border: 'solid 4px blue',
        }
    }


    const getRectangle5 = computed<
        any
    >(() => {
        return {
            width: `${apple}px`,
            height: "100px",
            backgroundColor: "blue",
        };
    });


    const getRectangle6 = computed<
        (banana: number) => any
    >(() => {
        return (banana: number)=>{
            return {
                width: `${apple}px`,
                height: `${banana}px`,
                backgroundColor: "blue",
            }
        };
    });

</script>

<style scoped>

    @import '@/styles/notebook.css';

    div.blue-rectangle-1 {    /* 青い長方形１ */
        width: 200px;
        height: 100px;
        background-color: skyblue;
        border: solid 4px blue;
    }

    div.blue-rectangle-2 {    /* 青い長方形２ */
        width: v-bind(apple)px;
        height: 100px;
        background-color: skyblue;
        border: solid 4px blue;
    }
</style>
