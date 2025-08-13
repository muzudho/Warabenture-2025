<template>
    <section class="sec-1">
        今さら、手作りのホームページ（＾▽＾）！（Created by むずでょ）<v-btn style="visibility: hidden;"></v-btn><br/>
        <!-- 他のページと縦幅を揃えるために、何の働きもしない空ボタンを置いています。 -->
    </section>

    <h2>ホームの章だぜ！</h2>
    <section class="sec-2">
        ウェブ・アプリケーションのホームだぜ（＾▽＾）！<br/>
    </section>

    <h3>このホームページの内容の気分的な割合</h3>
    <section class="sec-3">
        以下の円グラフをクリックするとそのページへ飛べるぜ（＾▽＾）！<br/>
    </section>
    <v-card elevation="2" class="pa-4">
        <canvas id="pieChart" class="pieChartStyle" style="border:dashed 4px gray; background-color: white;"></canvas>
    </v-card>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted } from 'vue';
    import { Chart } from 'chart.js/auto';
    import { useRouter } from 'vue-router';


    // ##############
    // # 共有データ #
    // ##############

    const router = useRouter();

    // SPA用のルートパス
    const routes = [
        "/blog",                        // ブログのURL
        "/making",                      // メイキングのURL
        "/team-mirai-supporter",        // チームみらいサポーター活動のURL
        "/",                            // ホームのURL
        "/wara-city/map",               // わらシティのURL
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
        const ctx : HTMLCanvasElement = document.getElementById('pieChart') as HTMLCanvasElement;

        if (ctx == null){
            return;
        }

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['ブログ', 'メイキング', 'チームみらいサポーター活動', 'ホーム', 'わらシティ'],
                datasets: [{
                    data: [88, 5, 4, 2, 1],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)', // 赤系
                        'rgba(54, 162, 235, 0.8)', // 青系
                        'rgba(255, 206, 86, 0.8)', // 黄系
                        'rgba(75, 192, 192, 0.8)', // 緑系
                        'rgba(153, 102, 255, 0.8)', // 紫系
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 206, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(153, 102, 255)',
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'このホームページの内容の気分的な割合'
                    }
                },
                onClick: (_e, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        console.log(`index=${index}\nroutes.length=${routes.length}\nroutes[0]=${routes[0]}\nroutes[1]=${routes[1]}\nroutes[2]=${routes[2]}\nroutes[3]=${routes[3]}`);
                        // Vue Routerでページ遷移
                        const path = routes[index];
                        console.log(`path=${path}`);
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

    /* 円グラフが v-cardの背景色の影響を受けているので、透明にする */
    .v-card {
        background-color: transparent !important;
    }
</style>
```