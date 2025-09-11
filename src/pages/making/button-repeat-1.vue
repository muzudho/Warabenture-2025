<!--
    このページの［ボタンの押しっぱなし］機能をコンポーネント化したものがあります。
    ../../components/Button20250822.vue を参照してください。
-->

<template>
    <the-chapter-header/>

    <h4>ボタンの押しっぱなしが利くようにしようぜ？</h4>
    <section class="sec-4">
        <!-- タッチパネルでも操作できるように、ボタンを置いておきます。キーボードの操作説明も兼ねます。 -->
        <p>キーボード操作方法</p>
        <ul>
            <li>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="onRepeatStart($event, onUpButtonPressed)"
                    @touchend="onRepeatStop(onUpButtonReleased)"
                    @touchcancel="onRepeatStop(onUpButtonReleased)"
                    @touchleave="onRepeatStop(onUpButtonReleased)"
                    @mousedown.prevent="onRepeatHandleMouseDown($event, onUpButtonPressed)"
                    @mouseup="onRepeatStop(onUpButtonReleased)"
                    @mouseleave="onRepeatStop(onUpButtonReleased)"
                >↑</v-btn>
                　…　とりあえず、上キーの押しっぱなしが利くようにするぜ！
                <br/>
            </li>
            <li><v-btn class="code-key" @mousedown="onSpaceButtonPressed()" @mouseup="onSpaceButtonReleased()">（スペース）</v-btn>　…　カウンターをリセットするぜ。</li>
            <li>
                <!-- フォーカスを外すためのダミー・ボタンです -->
                <v-btn
                    class="noop-key"
                    ref="noopButton"
                    v-tooltip="'PCでのマウス操作で、フォーカスがコントロールに残って邪魔になるときは、このボタンを押してくれだぜ'" >何もしないボタン</v-btn><br/>
            </li>
        </ul>
        <br/>

        カウント： {{ counter1Count }}
    </section>

    <br/>
    <h4>ソースコード</h4>
    <section class="sec-4">
        <source-link/>
    </section>

    <the-chapter-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { onMounted, ref } from 'vue';
    // 👆 ［初級者向けのソースコード］では、 reactive は使いません。

    import { VBtn } from 'vuetify/components';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    // from の階層が上の順、アルファベット順
    import SourceLink from '../../components/SourceLink.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import TheChapterFooter from './the-chapter-footer.vue';
    import TheChapterHeader from './the-chapter-header.vue';


    // ############################
    // # アプリケーション・データ #
    // ############################
    //
    // 今動いているアプリケーションの状態を記録しているデータ。特に可変のもの。
    //

    // `vite build` コマンド打鍵時、 setInterval(...) 関数が number 型ではなく NodeJS.Timeout 型を返すので、どちらも許容できるようにする。
    const appManualKeyRepeatTimerId = ref<number | NodeJS.Timeout | null>(null);   // ［キーボード操作説明］のボタンのキー・リピート用


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　何もしないボタン +
    // ++++++++++++++++++++++++++++++++++++++

    const noopButton = ref<InstanceType<typeof VBtn> | null>(null);

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　カウンター１ +
    // ++++++++++++++++++++++++++++++++++

    const counter1Count = ref<number>(0);
    const counter1Input = <Record<string, boolean>>{  // 入力
        " ": false, ArrowUp: false,
    };


    // ##########
    // # 開始時 #
    // ##########

    onMounted(() => {
        // キーボード操作の設定
        //
        //      window はブラウザーのオブジェクトなので、（サーバー側ではプリレンダリングできないので）マウント後にアクセスします。
        //
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            // ［↑］［↓］キーの場合
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                // ブラウザーのデフォルトの上下スクロール動作をキャンセル
                e.preventDefault();
            }

            if (counter1Input.hasOwnProperty(e.key)) {
                counter1Input[e.key] = true;
            }
        });
        window.addEventListener('keyup', (e: KeyboardEvent) => {
            if (counter1Input.hasOwnProperty(e.key)) {
                counter1Input[e.key] = false;
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

            // リセット
            if (counter1Input[" "]) {
                counter1Count.value = 0;
            }

            // ++++++++++++++
            // + 移動を処理 +
            // ++++++++++++++

            if (counter1Input.ArrowUp) {     // 上
                counter1Count.value += 1;
            }

            // 次のフレーム
            requestAnimationFrame(update);
        };

        // 初回呼び出し
        requestAnimationFrame(update);
    }


    /**
     * タッチと、クリックを分けます。
     */
    function onRepeatHandleMouseDown(e: MouseEvent | TouchEvent, callback:()=>void) : void {
        // タッチイベントを除外
        if (e.type === 'mousedown' && !('touches' in e)) {
            onRepeatStart(e, callback);
        }        
    }


    /**
     * 長押し開始
     */
    function onRepeatStart(e: MouseEvent | TouchEvent, callback:()=>void) : void {      
        e.preventDefault(); // ブラウザのデフォルトのタッチ動作（長押しなど）をキャンセル

        callback();   // 即時実行
        
        const intervalTime = 17;    // インターバルの時間（ミリ秒）は調整可能
        appManualKeyRepeatTimerId.value = setInterval(() => {   // 指定の間隔で繰り返し実行
            callback();
        }, intervalTime);
    }


    /**
     * 長押し終了
     */
    function onRepeatStop(callback:()=>void) {
        if (appManualKeyRepeatTimerId.value) {
            clearInterval(appManualKeyRepeatTimerId.value);    // インターバルをクリア
            appManualKeyRepeatTimerId.value = null;

            callback();   // 即時実行
        }
    }

    /**
     * 上。
     */
    function onUpButtonPressed() : void {
        counter1Count.value += 1;
    }


    function onUpButtonReleased() : void {
    }


    /**
     * スペースキー。
     */
    function onSpaceButtonPressed() : void {
        counter1Count.value = 0;
    }


    function onSpaceButtonReleased() : void {
    }

</script>

<style scoped>
</style>
