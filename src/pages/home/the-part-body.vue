<template>
    <section class="sec-0 pt-6">


        <talk-balloon
            :src="commonOton2Src"
            :alt="commonOton2Alt"
            :name="commonOton2Name"
            :device="compatibleDevice1Ref?.device">
            マイ・ホームページを作ってみようぜ？
        </talk-balloon>

        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            えっ、今さらホームページ！？
        </talk-balloon>

        <talk-balloon
            :src="commonHiyoko2Src"
            :alt="commonHiyoko2Alt"
            :name="commonHiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            あんたのお父んは２００２年ぐらいで脳が止まってるのよ。<br/>
        </talk-balloon>

        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            Ｏｈ．．．！　ユー　ゴッタ　メール……。<br/>
            <br/>
            ちょっと待ってくれだぜ。<br/>
            今、このホームページを作っているのは西暦何年だぜ？
        </talk-balloon>

        <talk-balloon
            :src="commonOton2Src"
            :alt="commonOton2Alt"
            :name="commonOton2Name"
            :device="compatibleDevice1Ref?.device">
            ２０２５年だけど……？
        </talk-balloon>

        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            ぜったい２００６年のブログブームから更新が止まって放置されてると思われてるぜ……。<br/>
            <br/>
            このホームページ、どこでホストされてんだぜ？　自宅サーバー？
        </talk-balloon>

        <talk-balloon
            :src="commonOton2Src"
            :alt="commonOton2Alt"
            :name="commonOton2Name"
            :device="compatibleDevice1Ref?.device">
            いや、さくらのＶＰＳだぜ。
        </talk-balloon>

        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            そこは新しいんだ……
        </talk-balloon>

        <talk-balloon
            :src="commonHiyoko2Src"
            :alt="commonHiyoko2Alt"
            :name="commonHiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            あんたのお父んは技術は更新するけど、脳は２００２年ぐらいで止まってるのよ。<br/>
        </talk-balloon>

        <talk-balloon
            :src="commonOton2Src"
            :alt="commonOton2Alt"
            :name="commonOton2Name"
            :device="compatibleDevice1Ref?.device">
            わたしの脳、止まってるんだ……。
        </talk-balloon>

        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            しかし、懐古ホームページなんか作っても、なんも技術のアピールにもならないのでは……？
        </talk-balloon>

        <talk-balloon
            :src="commonHiyoko2Src"
            :alt="commonHiyoko2Alt"
            :name="commonHiyoko2Name"
            :device="compatibleDevice1Ref?.device">
            技術なんかアピールしなくていいのよ、技術はＡＩがやるのだから人類は雑用をしていればいいのよ。<br/>
        </talk-balloon>

        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            そこは未来を先取りしてんだ……。
        </talk-balloon>

        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            じゃあ、なんか知らんけど、お父んがセッセと作っているこのサイトの内容を円グラフにまとめておいたぜ。<br/>
            <br/>
            以下の円グラフをクリックするとそのページへ飛べるぜ
        </talk-balloon>

	    <canvas id="pieChart" class="pieChartStyle" style="border:dashed 4px gray; background-color: white;"></canvas>
    </section>

    <!-- ホームには［上の部を閉じる］ボタンはありません。 -->

    <br/>
    <section class="sec-1">
        <talk-balloon
            :src="commonKifuwarabe2Src"
            :alt="commonKifuwarabe2Alt"
            :name="commonKifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
            またのお越しをお待ちしているぜ！
        </talk-balloon>
    </section>

    <!-- ホームに閉じるボタンはありません。 -->
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted, onUnmounted } from 'vue';
    import { Chart } from 'chart.js/auto';
    import { useRouter } from 'vue-router';

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import CompatibleDevice from '@/components/CompatibleDevice.vue'
    import TalkBalloon from '@/components/TalkBalloon.vue';


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //    

    import commonOton2Src from "@/assets/img/talk/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png";
    const commonOton2Alt = "お父ん";
    const commonOton2Name = "お父ん";
    import commonKifuwarabe2Src from "@/assets/img/talk/202506__character__01-2013-kifuwarabe-o1o1o0.png";
    const commonKifuwarabe2Alt = "きふわらべ";
    const commonKifuwarabe2Name = "きふわらべ";
    import commonHiyoko2Src from "@/assets/img/talk/202506__character__01-2025-hiyoko-o1o1o0.png";
    const commonHiyoko2Alt = "ひよこ";
    const commonHiyoko2Name = "ひよこ";

    // 円グラフのための、SPA用のルートパス
    const routes = [
        "/blog",    // ブログのURL
        "/reference/making",    // メイキングのURL
        "/minigames",   // ミニゲーム
        "/team-mirai-supporter",    // チームみらいサポーター活動のURL
        "/reference/coding-style",  // コーディング・スタイル
        //"/wara-city/map", // わらシティのURL
    ];


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　互換性対応 +
    // ++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

    // ++++++++++++++++++++++++++++++
    // + オブジェクト　＞　画面遷移 +
    // ++++++++++++++++++++++++++++++

    const router = useRouter();

    // ++++++++++++++++++++++++++++++
    // + オブジェクト　＞　円グラフ +
    // ++++++++++++++++++++++++++++++

    let chart: Chart | null = null;


    function clientsideChartInit() {
        // window オブジェクトはブラウザー専用。サーバー側ではプリレンダリングできないので、マウント後に書く。
        //const baseUrl = window.location.origin;
        //alert(`baseUrl=${baseUrl}`);
        const ctx : HTMLCanvasElement = window.document.getElementById('pieChart') as HTMLCanvasElement;

        if (ctx == null){
            return;
        }

        chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['ブログ', 'メイキング', 'ミニゲーム', 'コーディング・スタイル', 'チームみらいサポーター活動'],
                // , 'わらシティ'
                datasets: [{
                    data: [86, 10, 2, 1, 1],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(180, 80, 206, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(180, 80, 206)',
                        'rgb(255, 206, 86)',
                        'rgb(75, 192, 192)'
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {   // 凡例
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'ホームページ制作者のわたしが選ぶこのホームページで力を入れてる割合'
                    }
                },
                onClick: (_e, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        // Vue Routerでページ遷移
                        const path = routes[index];
                        router.push(path);
                    }
                }
            }
        });
    }

    function destroyChart() : void {
        if (chart) {
            chart.destroy();
        }
    }


    // ##############
    // # 開始・終了 #
    // ##############

    onMounted(() => {
        clientsideChartInit();
    });

    onUnmounted(() => {
        destroyChart(); // チャートの破棄処理
    });

</script>

<style scoped>
    canvas.pieChartStyle {
        min-width: 400px;
        min-height: 400px;
        width: 400px;
        height: 400px;
        margin: 0 auto;
    }
</style>
