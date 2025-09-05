<template>
    <the-grand-parent-header/>

    <!-- ホームに閉じるボタンはありません。 -->

    <section class="sec-1">
        自分のヘタクソさと向き合うのは楽しい。今さら、手作りのホームページ（＾▽＾）！（Created by むずでょ）<v-btn style="visibility: hidden;"></v-btn><br/>
        <!-- 他のページと縦幅を揃えるために、何の働きもしない空ボタンを置いています。 -->
    </section>

    <h2>ホームだぜ！　の部　インデックス</h2>
    <section class="sec-2">
        ウェブ・アプリケーションのホームだぜ（＾▽＾）！<br/>
    </section>

    <h3>ホームページ制作者のわたしが選ぶこのホームページで力を入れてる割合</h3>
    <section class="sec-3">
        以下の円グラフをクリックするとそのページへ飛べるぜ（＾▽＾）！<br/>
	    <canvas id="pieChart" class="pieChartStyle" style="border:dashed 4px gray; background-color: white;"></canvas>
    </section>

    <br/>
    <section class="sec-1">
        またのお越しをお待ちしておりますだぜ（＾▽＾）！<v-btn style="visibility: hidden;"></v-btn><br/>
        <!-- 他のページと縦幅を揃えるために、何の働きもしない空ボタンを置いています。 -->
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

    import TheGrandParentHeader from '../../the-header.vue';


    // ##############
    // # 共有データ #
    // ##############

    const router = useRouter();

    // 円グラフのための、SPA用のルートパス
    const routes = [
        "/blog",                        // ブログのURL
        "/making",                      // メイキングのURL
        "/minigames",                   // ミニゲーム
        "/team-mirai-supporter",        // チームみらいサポーター活動のURL
        "/coding-style",                // コーディング・スタイル
        //"/wara-city/map",               // わらシティのURL
    ];

    let chart: Chart | null = null;


    // ############
    // # 開始処理 #
    // ############

    onMounted(() => {
        initChart();
    });

    onUnmounted(() => {
        destroyChart(); // チャートの破棄処理
    });

    function initChart() {
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
