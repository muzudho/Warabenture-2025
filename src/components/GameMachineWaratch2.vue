<template>

    <comment>機能</comment>
    <button-20250822 ref="button1Ref"/>

    <!-- ゲームマシン　＞　スクリーン透過マスク -->
    <svg width="0" height="0">
        <defs>
            <mask id="waratch2-mask-rect">
                <!-- 全体の大きさを白く塗る -->
                <rect x="0" y="0" :width="shassisWidth" :height="shassisHeight" fill="white"/>

                <!-- 透過したいところを黒く塗る -->
                <rect :x="screenMarginLeft" :y="screenMarginTop" :width="screenWidth" :height="screenHeight" fill="black"/>
            </mask>
        </defs>
    </svg>

    <!-- ゲームマシン　＞　全体の位置 -->
    <div
        :class="props.class"
        :style="{
            ...toObject(props.style),
            width: `${shassisWidth}px`,
            height: `${shassisHeight}px`,
        }"
    >
        <comment>画面内を切り抜かれないようにします</comment>
        <div
            class="waratch2-surface"
            :style="{
                position: 'absolute',
                width: `${shassisWidth}px`,
                height: `${shassisHeight}px`,
            }"
        >
            <!-- ゲーム画面の裏地 -->
            <div
                :style="{
                    position: 'absolute',
                    boxSizing: 'border-box',
                    left: `${screenMarginLeft - shassisBorderThickness}px`,   // ボーダー幅を引いている
                    top: `${screenMarginTop - shassisBorderThickness}px`,
                    width: `${props.screenWidth}px`,
                    height: `${props.screenHeight}px`,
                    backgroundColor: 'olivedrab',
                }"
            ></div>

            <!-- ゲーム画面はめ込み -->
            <div
                :style="{
                    position: 'relative',   /* スロットの親要素にする */
                    left: `${screenMarginLeft - shassisBorderThickness}px`,   // ボーダー幅を引いている
                    top: `${screenMarginTop - shassisBorderThickness}px`,
                }"
            >
                <slot></slot>
            </div>
        </div>
            
        <!-- シャーシ。画面部分の矩形は切り抜き -->
        <div
            class="waratch2-shassis waratch2-trim-screen"
            :style="{
                position: 'absolute',
                width: `${shassisWidth}px`,
                height: `${shassisHeight}px`,
            }"
        >

            <!-- ハード名 -->
            <div
                class="waratch2-name-area"
                :style="{
                    left: `${screenMarginLeft - shassisBorderThickness}px`,   // ボーダー幅を引いている
                    top: `${screenMarginTop + props.screenHeight - shassisBorderThickness}px`,
                    width: `${props.screenWidth}px`,
                    height: `${hardNameLineHeight}px`,
                }"
            ><span class="waratch2-name-1">Waratch2</span></div>
        </div>


        <!-- クリック可能部分 -->
        <div
            class="waratch2-surface waratch2-clickable"
            :style="{
                position: 'absolute',
                width: `${shassisWidth}px`,
                height: `${shassisHeight}px`,
            }"
        >
            <!-- 十字キー配置 -->
            <div
                class="waratch2-buttons-area"
                :style="{
                    left: `${directionKeysAreaLeft}px`,
                    top: `${directionKeysAreaTop}px`,
                    width: `${directionKeysAreaWidth}px`,
                    height: `${directionKeysAreaHeight}px`,
                    //backgroundColor: 'yellow',
                }"
            >
                <!-- 上キー -->
                <v-btn
                    class="waratch2-button"
                    :style="{
                        top: `${0 * gridUnit}px`,
                        left: `${2 * gridUnit}px`,
                        width: `${2 * gridUnit}px`,
                        height: `${2 * gridUnit}px`,
                    }"
                    :disabled="!props.powerOn"
                    @touchstart.prevent="button1Ref?.press($event, emit('onUpButtonPressed'), {repeat: true});"
                    @touchend="button1Ref?.release(emit('onUpButtonReleased'));"
                    @touchcancel="button1Ref?.release(emit('onUpButtonReleased'));"
                    @touchleave="button1Ref?.release(emit('onUpButtonReleased'));"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, emit('onUpButtonPressed'), {repeat: true})"
                    @mouseup="button1Ref?.release(emit('onUpButtonReleased'));"
                    @mouseleave="button1Ref?.release(emit('onUpButtonReleased'));"
                >↑</v-btn>
                <!-- v-tooltip="'自機を上へ、像を逆向きへ動かすぜ！'" -->

                <!-- 左キー -->
                <v-btn
                    class="waratch2-button"
                    :style="{
                        top: `${2 * gridUnit}px`,
                        left: `${0 * gridUnit}px`,
                        width: `${2 * gridUnit}px`,
                        height: `${2 * gridUnit}px`,
                    }"
                    :disabled="!props.powerOn"
                    @touchstart.prevent="button1Ref?.press($event, emit('onLeftButtonPressed'), {repeat: true});"
                    @touchend="button1Ref?.release(emit('onLeftButtonReleased'));"
                    @touchcancel="button1Ref?.release(emit('onLeftButtonReleased'));"
                    @touchleave="button1Ref?.release(emit('onLeftButtonReleased'));"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, emit('onLeftButtonPressed'), {repeat: true})"
                    @mouseup="button1Ref?.release(emit('onLeftButtonReleased'));"
                    @mouseleave="button1Ref?.release(emit('onLeftButtonReleased'));"
                >←</v-btn>
                <!-- v-tooltip="'自機を左へ、像を逆向きへ動かすぜ！'" -->

                <!-- 右キー -->
                <v-btn
                    class="waratch2-button"
                    :style="{
                        top: `${2 * gridUnit}px`,
                        left: `${4 * gridUnit}px`,
                        width: `${2 * gridUnit}px`,
                        height: `${2 * gridUnit}px`,
                    }"
                    :disabled="!props.powerOn"
                    @touchstart.prevent="button1Ref?.press($event, emit('onRightButtonPressed'), {repeat: true});"
                    @touchend="button1Ref?.release(emit('onRightButtonReleased'));"
                    @touchcancel="button1Ref?.release(emit('onRightButtonReleased'));"
                    @touchleave="button1Ref?.release(emit('onRightButtonReleased'));"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, emit('onRightButtonPressed'), {repeat: true})"
                    @mouseup="button1Ref?.release(emit('onRightButtonReleased'));"
                    @mouseleave="button1Ref?.release(emit('onRightButtonReleased'));"
                >→</v-btn>
                <!-- v-tooltip="'自機を右へ、像を逆向きへ動かすぜ！'" -->

                <!-- 下キー -->
                <v-btn
                    class="waratch2-button"
                    :style="{
                        top: `${4 * gridUnit}px`,
                        left: `${2 * gridUnit}px`,
                        width: `${2 * gridUnit}px`,
                        height: `${2 * gridUnit}px`,
                    }"
                    :disabled="!props.powerOn"
                    @touchstart.prevent="button1Ref?.press($event, emit('onDownButtonPressed'), {repeat: true});"
                    @touchend="button1Ref?.release(emit('onDownButtonReleased'));"
                    @touchcancel="button1Ref?.release(emit('onDownButtonReleased'));"
                    @touchleave="button1Ref?.release(emit('onDownButtonReleased'));"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, emit('onDownButtonPressed'), {repeat: true})"
                    @mouseup="button1Ref?.release(emit('onDownButtonReleased'));"
                    @mouseleave="button1Ref?.release(emit('onDownButtonReleased'));"
                >↓</v-btn>
                <!-- v-tooltip="'自機を下へ、像を逆向きへ動かすぜ！'" -->
            </div>

            <!-- 決定等ボタン配置 -->
            <div
                class="waratch2-buttons-area"
                :style="{
                    left: `${actionButtonsAreaLeft}px`,
                    top: `${actionButtonsAreaTop}px`,
                    width: `${actionButtonsAreaWidth}px`,
                    height: `${actionButtonsAreaHeight}px`,
                    //backgroundColor: 'blue',
                }"
            >
                <!-- スペース・キー -->
                <v-btn
                    class="waratch2-button"
                    :style="{
                        left: `${0.5 * gridUnit}px`,
                        top: `${2 * gridUnit}px`,
                        width: `${5 * gridUnit}px`,
                        height: `${2 * gridUnit}px`,
                    }"
                    :disabled="!props.powerOn"
                    @touchstart.prevent="button1Ref?.press($event, emit('onSpaceButtonPressed'), {repeat: true});"
                    @touchend="button1Ref?.release(emit('onSpaceButtonReleased'));"
                    @touchcancel="button1Ref?.release(emit('onSpaceButtonReleased'));"
                    @touchleave="button1Ref?.release(emit('onSpaceButtonReleased'));"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, emit('onSpaceButtonPressed'), {repeat: true})"
                    @mouseup="button1Ref?.release(emit('onSpaceButtonReleased'));"
                    @mouseleave="button1Ref?.release(emit('onSpaceButtonReleased'));"
                >（スペース）</v-btn>
                <!-- v-tooltip="'自機、印字の位置を最初に有ったところに戻すぜ。'" -->

            </div>
        </div>

        <!-- ゲームマシンの枠、および画面に落ちる影。
            マスクでドロップシャドウを切り抜かれないようにするため、ゲームマシンの外に出します。
        -->
        <div
            class="waratch2-surface"
            :style="{
                position: 'absolute',
                width: `${screenWidth}px`,
                height: `${screenHeight}px`,
            }"
        >
            <div
                class="waratch2-screen-frame"
                :style="{
                    position: 'absolute',
                    left: `${screenMarginLeft - shassisBorderThickness}px`,   // ボーダー幅を引く
                    top: `${screenMarginTop - shassisBorderThickness}px`,
                    width: `${screenWidth + 3}px`, // FIXME: なんや分からん+3
                    height: `${screenHeight + 24 + 2}px`,   // FIXME: なんや分からん+24+2
                }"
            ></div>
        </div>
    </div>

    <!--
    <p>🌟画面の向き: {{ orientation }}</p>
    -->
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, onUnmounted, ref } from 'vue';

    // ++++++++++++++++++++++++++++++
    // + インポート　＞　互換性対応 +
    // ++++++++++++++++++++++++++++++

    import { toObject } from '../compatibles/compatible-style-value';
    import type { CompatibleStyleValue } from '../compatibles/compatible-style-value';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    // アルファベット順
    import Button20250822 from '@/components/Button20250822.vue';
    import Comment from '@/components/Comment.vue';


    // ####################################
    // # このコンポーネントが受け取る引数 #
    // ####################################
    
    interface Props {
        class?: CompatibleStyleValue;
        style?: CompatibleStyleValue;
        screenWidth: number;
        screenHeight: number;
        powerOn?: boolean;  // 電源は演出です
    }
    // デフォルト値を設定
    const props = defineProps<Props>();


    // ################################################
    // # このコンポーネントが起こすイベントのハンドラ #
    // ################################################

    interface Emits {
        // イベント名と、変更通知メソッドの引数と、そのメソッドの戻り値。
        (event: 'onLeftButtonPressed'): void;
        (event: 'onLeftButtonReleased'): void;
        (event: 'onUpButtonPressed'): void;
        (event: 'onUpButtonReleased'): void;
        (event: 'onRightButtonPressed'): void;
        (event: 'onRightButtonReleased'): void;
        (event: 'onDownButtonPressed'): void;
        (event: 'onDownButtonReleased'): void;
        (event: 'onSpaceButtonPressed'): void;
        (event: 'onSpaceButtonReleased'): void;
    }
    const emit = defineEmits<Emits>();


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //

    const gridUnit = 20;
    const cornerRadius = 3 * gridUnit;  // 角の弧の半径は、だいたいグリッド3目盛り分
    const paddingSize = 0.5 * gridUnit; // ちょっとの隙間
    const shassisBorderThickness: number = 4;
    const hardNameLineHeight: number = 24;
    const directionKeysAreaWidth = 6 * gridUnit + paddingSize;  // ドロップシャドウ分、paddingSize を追加
    const directionKeysAreaHeight = 6 * gridUnit + paddingSize;
    const actionButtonsAreaWidth = 6 * gridUnit + paddingSize;  // 方向キーと合わせる。
    const actionButtonsAreaHeight = 6 * gridUnit + paddingSize;
    const shassisWidth = computed(()=>{
        if (orientation.value == 'Portrait') {  // 縦型
            return 2 * cornerRadius + props.screenWidth;

        } else {    // 横型
            return (9 + 6) * gridUnit + props.screenWidth;
        }
    });
    const shassisHeight = computed(()=>{
        if (orientation.value == 'Portrait') {  // 縦型
            return 2 * cornerRadius + directionKeysAreaHeight + props.screenHeight;

        } else {    // 横型
            return  (3 + 0.75) * gridUnit + props.screenHeight;
        }
    });
    const screenMarginLeft = computed(()=>{
        if (orientation.value == 'Portrait') {  // 縦型
            return cornerRadius;

        } else {    // 横型
            return  2 * paddingSize + directionKeysAreaWidth;
        }
    });
    const screenMarginTop = computed(()=>{
        if (orientation.value == 'Portrait') {  // 縦型
            return cornerRadius;

        } else {    // 横型
            return 1.5 * gridUnit;
        }
    });
    const directionKeysAreaLeft = computed(()=>{
        if (orientation.value == 'Portrait') {  // 縦型
            return paddingSize;

        } else {    // 横型
            return 0.5 * gridUnit;
        }
    });
    const directionKeysAreaTop = computed(()=>{
        if (orientation.value == 'Portrait') {  // 縦型
            return screenMarginTop.value + props.screenHeight + hardNameLineHeight + paddingSize;

        } else {    // 横型
            return shassisHeight.value / 3 - directionKeysAreaHeight / 2; // 上から 1/3 のところに合わせる
        }
    });
    const actionButtonsAreaLeft = computed(()=>{
        if (orientation.value == 'Portrait') {  // 縦型
            return shassisWidth.value - paddingSize - actionButtonsAreaWidth;

        } else {    // 横型
            return screenMarginLeft.value + props.screenWidth + 1 * gridUnit;
        }
    });
    const actionButtonsAreaTop = computed(()=>{
        if (orientation.value == 'Portrait') {  // 縦型
            return screenMarginTop.value + props.screenHeight + hardNameLineHeight + paddingSize;

        } else {    // 横型
            return shassisHeight.value / 3 - directionKeysAreaHeight / 2;
        }
    });


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ボタン拡張 +
    // ++++++++++++++++++++++++++++++++

    const button1Ref = ref<InstanceType<typeof Button20250822> | null>(null);


    // ###############
    // # 開始 / 終了 #
    // ###############

    onMounted(()=>{
        // 初回チェック
        checkOrientation();
        // 向きが変わったときのイベントリスナー
        window.screen.orientation.addEventListener('change', checkOrientation);
        // ウィンドウサイズが変わったときのイベントリスナー
        window.addEventListener('resize', checkOrientation);
    });

    onUnmounted(()=>{
        // コンポーネント破棄時にリスナー削除
        window.screen.orientation.removeEventListener('change', checkOrientation);
        window.removeEventListener('resize', checkOrientation);
    });

    // ################
    // # サブルーチン #
    // ################

    let orientation = ref<'Portrait' | 'Landscape'>('Landscape'); // Portrait:縦, Landscape:横

    function checkOrientation() {
        // 単純に縦横比でチェック。正方形なら縦とする。
        orientation.value = window.innerWidth <= window.innerHeight ? 'Portrait' : 'Landscape';

        // // PCでは、あくまでブラウザのアスペクト比ではなく、画面のアスペクト比。
        // ちゃんと検出するケース：
        // const type = window.screen.orientation.type;
        // if (type.includes('portrait')) {
        //     orientation.value = '縦（Portrait）';
        // } else if (type.includes('landscape')) {
        //     orientation.value = '横（Landscape）';
        // } else {
        //     orientation.value = '不明';
        // }
    }

</script>

<style scoped>

    @import '@/styles/game-machine-waratch2.css';

</style>
