<template>

    <h4>標的</h4>
    <section class="sec-4">
        <p>キーボード操作方法</p>
        <ul>
            <li><span class="code-key">↑</span><span class="code-key">↓</span><span class="code-key">←</span><span class="code-key">→</span>キー　…　上下左右に動かすぜ！</li>
            <li><span class="code-key">（スペース）</span>キー　…　位置を最初の状態に戻すぜ。</li>
        </ul>
        <br/>

        <div :style="`width: ${board1SquareWidth}px; height: ${board1SquareHeight}px; background-color:lightpink;`">
            <!-- プレイヤー１（点線の枠） -->
            <div
                class="cursor"
                :style="target1Style"></div>
        </div>

    </section>

    <br/>
    <h4><span class="parent-header-lights-out">標的　＞　</span>ソースコード</h4>
    <section class="sec-4">
        <source-link
            pagePath="/making/input-axis-target"/>
    </section>

</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, ref } from 'vue';
    //
    // 👆 ［初級者向けのソースコード］では、 reactive は使いません。
    //

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import SourceLink from '../../components/SourceLink.vue';


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++
    // + オブジェクト　＞　盤 +
    // ++++++++++++++++++++++++

    const board1SquareWidth = 32;
    const board1SquareHeight = 32;

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ターゲット +
    // ++++++++++++++++++++++++++++++++
    //
    // 点線の枠。
    //

    const target1Left = ref<number>(0);      // スプライトのX座標
    const target1Top = ref<number>(0);       // スプライトのY座標
    const target1Speed = ref<number>(2);     // 移動速度
    const target1Input = <Record<string, boolean>>{  // 入力
        " ": false, ArrowUp: false, ArrowRight: false, ArrowDown: false, ArrowLeft: false
    };
    const target1Style = computed(() => ({
        top: `${target1Top.value}px`,
        left: `${target1Left.value}px`,
    }));


    // ##########
    // # 開始時 #
    // ##########

    onMounted(() => {
        // キーボードイベント
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            // ［スペース］［↑］［↓］キーの場合
            if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                // ブラウザーのデフォルトの上下スクロール動作をキャンセル
                e.preventDefault();
            }

            if (target1Input.hasOwnProperty(e.key)) {
                target1Input[e.key] = true;
            }
        });
        window.addEventListener('keyup', (e: KeyboardEvent) => {
            if (target1Input.hasOwnProperty(e.key)) {
                target1Input[e.key] = false;
            }
        });

        gameLoopStart();

    });


    // ################
    // # サブルーチン #
    // ################

    /**
     * ゲームのメインループ開始
     */
    function gameLoopStart() : void {
        const update = () => {

            // 位置のリセット
            if (target1Input[" "]) {
                target1Top.value = 0;
                target1Left.value = 0;
            }

            // 移動処理                
            if (target1Input.ArrowUp) {
                target1Top.value -= target1Speed.value;
            }

            if (target1Input.ArrowRight) {
                target1Left.value += target1Speed.value;
            }

            if (target1Input.ArrowDown) {
                target1Top.value += target1Speed.value;
            }

            if (target1Input.ArrowLeft) {
                target1Left.value -= target1Speed.value;
            }

            // 次のフレーム
            requestAnimationFrame(update);
        };

        // 初回呼び出し
        requestAnimationFrame(update);
    }

</script>

<style scoped>
    div.cursor {
        position: relative; border:dashed 4px green; width:32px; height:32px;
    }
</style>
