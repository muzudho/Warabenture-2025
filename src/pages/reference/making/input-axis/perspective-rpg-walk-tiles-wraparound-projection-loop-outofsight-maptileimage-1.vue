<!--
    RPGのキャラクターの歩行グラフィック・サンプル。背景画像付き
-->

<template>

    <!-- ボタン機能拡張 -->
    <button-20250822 ref="button1Ref"/>

    <compatible-device ref="compatibleDevice1Ref"/>

    <!-- ストップウォッチ。デバッグに使いたいときは、 display: none; を消してください。 -->
    <stopwatch
        ref="stopwatch1Ref"
        v-on:countUp="(countNum: number) => { stopwatch1Count = countNum; }"
        style="display: none;" />

    <!-- ブログ領域 -->
    <div
        :style="{
            marginBottom: `calc(${5 * controllerSquareUnit}px)`,
        }"
    >
        <the-app-header/>
        <button-to-close-pane
            class="sec-0"
            direction="down"
            pagePath="/reference"
        />

        <h1><span class="parent-header">ＲＰＧの歩行グラフィック　＞　</span>回り込むタイルへ投影・両端つながりの像・視野外マスク例示・マップタイル画像付き</h1>
        <section class="sec-1">
            <br/>

            <!-- 免責 -->
            <!--
            <v-alert type="warning" title="免責！" text="処理堕ちしていたら、［設定を表示］ボタンから盤のサイズを小さくしてください。" closable />
            <br/>
            -->

            <talk-balloon
                :src="commonKifuwarabe2Src"
                :alt="commonKifuwarabe2Alt"
                :name="commonKifuwarabe2Name"
                :device="compatibleDevice1Ref?.device">
                うわっ、狭。なんか画面をオーバーラップさせてんのか。<br/>
                スクロールバーを使って、隙間からブログをよんでくれだぜ。<br/>
            </talk-balloon>
            <talk-balloon
                :src="commonOton2Src"
                :alt="commonOton2Alt"
                :name="commonOton2Name"
                :device="compatibleDevice1Ref?.device">
                じゃあ１個１個説明していくかだぜ。<br/>
                <br/>
                画面の上段、つまりここは、引き続きブログになっているのでスクロールバーを下げて読んでいってくれだぜ。<br/>
            </talk-balloon>
            <talk-balloon
                :src="commonOton2Src"
                :alt="commonOton2Alt"
                :name="commonOton2Name"
                :device="compatibleDevice1Ref?.device">
                画面の中段は、ゲーム画面を置いているぜ。<br/>
                クリックしても何も起こらない。<br/>
            </talk-balloon>
            <talk-balloon
                :src="commonOton2Src"
                :alt="commonOton2Alt"
                :name="commonOton2Name"
                :device="compatibleDevice1Ref?.device">
                画面の下段は、コントローラーになっているぜ。<br/>
                ＰＣならクリックするか、キーボード入力を。スマホならタッチをしてくれだぜ。<br/>
            </talk-balloon>
        </section>

        <h2>ゲーム画面説明</h2>
        <section class="sec-2">
            <br/>
            <talk-balloon
                :src="commonHiyoko2Src"
                :alt="commonHiyoko2Alt"
                :name="commonHiyoko2Name"
                :device="compatibleDevice1Ref?.device">
                盤上の桃色の点線の枠は何なの？<br/>
            </talk-balloon>
            <talk-balloon
                :src="commonOton2Src"
                :alt="commonOton2Alt"
                :name="commonOton2Name"
                :device="compatibleDevice1Ref?.device">
                自機がずっと守ってる位置と思ってくれだぜ。<br/>
                設定によっては、自機はこの位置から離れることもできるぜ。
            </talk-balloon>
            <talk-balloon
                :src="commonHiyoko2Src"
                :alt="commonHiyoko2Alt"
                :name="commonHiyoko2Name"
                :device="compatibleDevice1Ref?.device">
                ゲーム画面にかかっている半透明の黒いのは何なの？<br/>
            </talk-balloon>
            <talk-balloon
                :src="commonOton2Src"
                :alt="commonOton2Alt"
                :name="commonOton2Name"
                :device="compatibleDevice1Ref?.device">
                その部分は、ゲーム画面では見えないところだと思ってくれだぜ。<br/>
                見えないところで隠れてなんか処理してると思ってくれだぜ。
            </talk-balloon>
        </section>

        <h2>コントローラー説明</h2>
        <section class="sec-2">
            <br/>
            <talk-balloon
                :src="commonOton2Src"
                :alt="commonOton2Alt"
                :name="commonOton2Name"
                :device="compatibleDevice1Ref?.device">
                ［↑］［→］［↓］［←］キーで自機を上下左右に移動させるぜ。<br/>
                ［（スペース）］キーは、リセットボタンだな。<br/>
            </talk-balloon>
            <talk-balloon
                :src="commonHiyoko2Src"
                :alt="commonHiyoko2Alt"
                :name="commonHiyoko2Name"
                :device="compatibleDevice1Ref?.device">
                ［何もしないボタン］って何なの？<br/>
            </talk-balloon>
            <talk-balloon
                :src="commonOton2Src"
                :alt="commonOton2Alt"
                :name="commonOton2Name"
                :device="compatibleDevice1Ref?.device">
                ＰＣで、例えばスライダーバーを触ったあとに自機を左右に動かそうとしたら、<br/>
                自機ではなくてスライダーバーのボックスが左右に動くことがある。<br/>
                邪魔なんで［何もしないボタン］を押すことでスライダーバーからフォーカスを外す、といった用途で使う。
            </talk-balloon>
            <talk-balloon
                :src="commonOton2Src"
                :alt="commonOton2Alt"
                :name="commonOton2Name"
                :device="compatibleDevice1Ref?.device">
                ［設定を表示］ボタンの中には、いろいろ設定が入っているので、いじってみてくれだぜ。<br/>
                長くなるから、あとで説明するぜ。
            </talk-balloon>
        </section>

        <h2>裏情報</h2>
        <section class="sec-2">
            <br/>
            <talk-balloon
                :src="commonKifuwarabe2Src"
                :alt="commonKifuwarabe2Alt"
                :name="commonKifuwarabe2Name"
                :device="compatibleDevice1Ref?.device">
                おっと、ここで裏情報だぜ。<br/>
                👇 何だぜ、これは？<br/>
            </talk-balloon>

            <p>床タイルマップ：</p>
            <v-img
                src="/img/making/tilemap-floor-20250826.png"
                :style="`width: ${8 * tileBoard1TileWidth}px; height:${4 * tileBoard1TileHeight}px;`"
                style="image-rendering: pixelated; margin:0; padding:0; border:dashed 4px gray;"/>
            <br/>

            <talk-balloon
                :src="commonOton2Src"
                :alt="commonOton2Alt"
                :name="commonOton2Name"
                :device="compatibleDevice1Ref?.device">
                画像ファイルだぜ。<br/>
                ここからタイルを切り取って、ゲーム画面へペタペタ貼り付けてるわけだな。
            </talk-balloon>

        </section>

        <h2>［設定］説明</h2>
        <section class="sec-2">
            <br/>
            <preferences-explanation/>
        </section>
        <br/>

        <h2><span class="parent-header-lights-out">ＲＰＧの歩行グラフィック　＞　</span><span class="parent-header">回り込むタイルへ投影・両端つながりの像・視野外マスク例示・マップタイル画像付き　＞　</span>ソースコード</h2>
        <section class="sec-2">
            <source-link
                pagePath="/reference/making/input-axis-rpg-walk-using-background-image-1"/>
        </section>

        <button-to-close-pane
            class="sec-0"
            direction="up"
            pagePath="/reference"
        />
    </div>

    <!-- オーバーラップ画面 -->
    <v-container fluid class="vertical-panes-container">

        <!-- 中段の画像エリア（固定） -->
        <div
            :style="perspectiveMiddle1Style"
            style="
                position: fixed;
            "
        >
            <!-- 盤領域 -->
            <div
                class="board"
                :style="board1Style"
                style="
                    display: inline-block;  /* インライン化しておくと、センタリングできる */
                "
                >

                <!-- 自機のホーム１ -->
                <div
                    class="playerHome"
                    :style="playerHome1Style">
                </div>

                <!-- タイル盤１ -->
                <board-made-of-tile
                    :boardArea="board1Area"
                    :tileWidth="tileBoard1TileWidth"
                    :tileHeight="tileBoard1TileHeight"
                    :tilemapUrl="'/img/making/tilemap-floor-20250826.png'"
                    :getFixedTileSqFromTileSq="imageBoard1GetFixedTileSqFromTileSq"
                    :getImageSqByFixedTileSq="imageBoard1GetImageSqByFixedTileSq"
                    :getTileStyleByTileSq="imageBoard1GetTileStyleByTileSq"
                    :getSourceTileLeftByImageSq="imageBoard1GetResourceTileLeftByImageSq"
                >
                </board-made-of-tile>

                <!-- 自機１ -->
                <tile-animation
                    :frames="player1Frames"
                    tilemapUrl="/img/making/202508__warabenture__15-1612-kifuwarabe-o1o0.png"
                    :slow="player1AnimationSlow"
                    :time="stopwatch1Count"
                    class="player"
                    :style="player1Style" />
                
                <!-- 視界の外１ -->
                <out-of-sight-making
                    ref="outOfSight1Ref"
                    :tileBoard1TileWidth="tileBoard1TileWidth"
                    :tileBoard1TileHeight="tileBoard1TileHeight"
                    :board1FileNum="board1FileNum"
                    :board1RankNum="board1RankNum" />
            </div>
        </div>

        <!-- 下段：　ソフトウェア・キーボード、兼・操作説明 -->
        <div
            :style="{
                top: `calc(100vh - ${5 * controllerSquareUnit}px)`,
            }"
            style="
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                overflow-y: auto; /* 内容物が収まらないならスクロールバーを出す */
                color: white;
                background-color: rgba(0,0,0,0.5);
            "
        >
            <!-- ボタン・センタリング用コンテナー -->
            <div
                style="
                    position: relative;
                    left: 0;
                    right: 0;
                    text-align: center;
                "
            >
                <div
                    :style="{
                        width: `${15 * controllerSquareUnit}px`,
                        height: `${3 * controllerSquareUnit}px`,
                    }"
                    style="
                        position: relative;
                        display: inline-block;
                    "
                >
                    <!-- 十字キー -->
                    <v-btn
                        class="code-key"
                        :style="`
                            top: ${0 * controllerSquareUnit}px;
                            left: ${2 * controllerSquareUnit}px;
                            width: ${3 * controllerSquareUnit - 4}px;
                            height: ${1 * controllerSquareUnit - 4}px;
                        `"
                        style="position: absolute;"
                        @touchstart.prevent="button1Ref?.press($event, onUpButtonPressed, {repeat: true});"
                        @touchend="button1Ref?.release(onUpButtonReleased);"
                        @touchcancel="button1Ref?.release(onUpButtonReleased);"
                        @touchleave="button1Ref?.release(onUpButtonReleased);"
                        @mousedown.prevent="button1Ref?.handleMouseDown($event, onUpButtonPressed, {repeat: true})"
                        @mouseup="button1Ref?.release(onUpButtonReleased);"
                        @mouseleave="button1Ref?.release(onUpButtonReleased);"
                        v-tooltip="'自機を上へ、像を逆向きへ動かすぜ！'"
                    >↑</v-btn>

                    <v-btn
                        class="code-key"
                        :style="`
                            top: ${1 * controllerSquareUnit}px;
                            left: ${0 * controllerSquareUnit}px;
                            width: ${3 * controllerSquareUnit - 4}px;
                            height: ${1 * controllerSquareUnit - 4}px;
                        `"
                        style="position: absolute;"
                        @touchstart.prevent="button1Ref?.press($event, onLeftButtonPressed, {repeat: true});"
                        @touchend="button1Ref?.release(onLeftButtonReleased);"
                        @touchcancel="button1Ref?.release(onLeftButtonReleased);"
                        @touchleave="button1Ref?.release(onLeftButtonReleased);"
                        @mousedown.prevent="button1Ref?.handleMouseDown($event, onLeftButtonPressed, {repeat: true})"
                        @mouseup="button1Ref?.release(onLeftButtonReleased);"
                        @mouseleave="button1Ref?.release(onLeftButtonReleased);"
                        v-tooltip="'自機を左へ、像を逆向きへ動かすぜ！'"
                    >←</v-btn>

                    <v-btn
                        class="code-key"
                        :style="`
                            top: ${1 * controllerSquareUnit}px;
                            left: ${4 * controllerSquareUnit}px;
                            width: ${3 * controllerSquareUnit - 4}px;
                            height: ${1 * controllerSquareUnit - 4}px;
                        `"
                        style="position: absolute;"
                        @touchstart.prevent="button1Ref?.press($event, onRightButtonPressed, {repeat: true});"
                        @touchend="button1Ref?.release(onRightButtonReleased);"
                        @touchcancel="button1Ref?.release(onRightButtonReleased);"
                        @touchleave="button1Ref?.release(onRightButtonReleased);"
                        @mousedown.prevent="button1Ref?.handleMouseDown($event, onRightButtonPressed, {repeat: true})"
                        @mouseup="button1Ref?.release(onRightButtonReleased);"
                        @mouseleave="button1Ref?.release(onRightButtonReleased);"
                        v-tooltip="'自機を右へ、像を逆向きへ動かすぜ！'"
                    >→</v-btn>

                    <v-btn class="code-key hidden"/>
                    <v-btn
                        class="code-key"
                        :style="`
                            top: ${2 * controllerSquareUnit}px;
                            left: ${2 * controllerSquareUnit}px;
                            width: ${3 * controllerSquareUnit - 4}px;
                            height: ${1 * controllerSquareUnit - 4}px;
                        `"
                        style="position: absolute;"
                        @touchstart.prevent="button1Ref?.press($event, onDownButtonPressed, {repeat: true});"
                        @touchend="button1Ref?.release(onDownButtonReleased);"
                        @touchcancel="button1Ref?.release(onDownButtonReleased);"
                        @touchleave="button1Ref?.release(onDownButtonReleased);"
                        @mousedown.prevent="button1Ref?.handleMouseDown($event, onDownButtonPressed, {repeat: true})"
                        @mouseup="button1Ref?.release(onDownButtonReleased);"
                        @mouseleave="button1Ref?.release(onDownButtonReleased);"
                        v-tooltip="'自機を下へ、像を逆向きへ動かすぜ！'"
                    >↓</v-btn>

                    <!-- スペース・キー -->
                    <v-btn
                        class="code-key"
                        :style="`
                            top: ${2 * controllerSquareUnit}px;
                            left: ${8 * controllerSquareUnit}px;
                            width: ${3 * controllerSquareUnit - 4}px;
                            height: ${1 * controllerSquareUnit - 4}px;
                        `"
                        style="position: absolute;"
                        @touchstart.prevent="button1Ref?.press($event, onSpaceButtonPressed, {repeat: true});"
                        @touchend="button1Ref?.release(onSpaceButtonReleased);"
                        @touchcancel="button1Ref?.release(onSpaceButtonReleased);"
                        @touchleave="button1Ref?.release(onSpaceButtonReleased);"
                        @mousedown.prevent="button1Ref?.handleMouseDown($event, onSpaceButtonPressed, {repeat: true})"
                        @mouseup="button1Ref?.release(onSpaceButtonReleased);"
                        @mouseleave="button1Ref?.release(onSpaceButtonReleased);"
                        v-tooltip="'自機、印字の位置を最初に有ったところに戻すぜ。'"
                    >（スペース）</v-btn>

                    <!-- フォーカスを外すためのダミー・ボタンです -->
                    <v-btn
                        class="noop-key"
                        :style="`
                            top: ${2 * controllerSquareUnit}px;
                            left: ${11 * controllerSquareUnit}px;
                            width: ${4 * controllerSquareUnit - 4}px;
                            height: ${1 * controllerSquareUnit - 4}px;
                        `"
                        style="position: absolute;"
                        ref="noopButton"
                        v-tooltip="'PCでのマウス操作で、フォーカスがコントロールに残って邪魔になるときは、このボタンを押してくれだぜ'"
                    >何もしないボタン</v-btn>
                </div>
            </div>
            
            <!-- ボタン相対位置領域 -->
            <!-- 設定パネル１ -->
            <v-btn
                class="code-key"
                :style="`
                    width: ${4 * controllerSquareUnit - 4}px;
                    height: ${1 * controllerSquareUnit - 4}px;
                `"
                style="position: relative;"
                @touchstart.prevent="button1Ref?.press($event, onConfig1ButtonPressed);"
                @touchend="button1Ref?.release();"
                @touchcancel="button1Ref?.release();"
                @touchleave="button1Ref?.release();"
                @mousedown.prevent="button1Ref?.handleMouseDown($event, onConfig1ButtonPressed)"
                @mouseup="button1Ref?.release();"
                @mouseleave="button1Ref?.release();"
            >{{ config1IsShowing ? '⚙️設定を終わる' : '⚙️設定を表示' }}</v-btn>
            <section v-if="config1IsShowing" class="sec-1">
                <v-slider
                    label="ズーム"
                    v-model="appZoom"
                    :min="0.5"
                    :max="4"
                    step="0.25"
                    showTicks="always"
                    thumbLabel="always" />
                <v-slider
                    label="スローモーション"
                    v-model="player1AnimationSlow"
                    :min="1"
                    :max="16"
                    step="1"
                    showTicks="always"
                    thumbLabel="always" />
                <v-slider
                    label="自機のホーム　＞　筋"
                    v-model="playerHome1File"
                    :min="0"
                    :max="4"
                    step="1"
                    showTicks="always"
                    thumbLabel="always" />
                <v-slider
                    label="自機のホーム　＞　段"
                    v-model="playerHome1Rank"
                    :min="0"
                    :max="4"
                    step="1"
                    showTicks="always"
                    thumbLabel="always" />
                <p>マスクが被っているところも含めた盤のサイズ：</p>
                <v-slider
                    label="水平方向のタイル数"
                    v-model="board1FileNum"
                    :min="0"
                    :max="board1FileMax"
                    step="1"
                    showTicks="always"
                    thumbLabel="always" />
                <v-slider
                    label="垂直方向のタイル数"
                    v-model="board1RankNum"
                    :min="0"
                    :max="board1RankMax"
                    step="1"
                    showTicks="always"
                    thumbLabel="always" />
                <p>マスク枠の幅。右側と下側は、１マス多めに付きます：</p>
                <v-slider
                    label="マスク枠の幅"
                    v-model="outOfSight1WithMaskSquareCount"
                    :min="0"
                    :max="2"
                    step="1"
                    showTicks="always"
                    thumbLabel="always" />
                <v-switch
                    v-model="printing1IsLooping"
                    :label="printing1IsLooping ? '［像の端と端がつながって（ループして）］います' : '［像の端と端がつながって（ループして）］いません'"
                    color="green"
                    :hideDetails="true"
                    inset />
                <v-switch
                    v-model="printing1OutOfSightIsLock"
                    :label="printing1OutOfSightIsLock ? '［画面外を見せない］中' : '［画面外を見せない］をしていません'"
                    color="green"
                    :hideDetails="true"
                    inset />
                    <section class="sec-1">
                        <v-switch
                            v-model="player1CanBoardEdgeWalking"
                            :disabled="!player1CanBoardEdgeWalkingIsEnabled"
                            :label="player1CanBoardEdgeWalking ? '［盤の端まで歩ける］を可能中' : '［盤の端まで歩ける］を可能にしていません'"
                            color="green"
                            :hideDetails="true"
                            inset />
                    </section>
                <br/>
            </section>

            <!-- デバッグ情報パネル１ -->
            <v-btn
                class="code-key"
                :style="`
                    width: ${5 * controllerSquareUnit - 4}px;
                    height: ${1 * controllerSquareUnit - 4}px;
                `"
                style="position: relative;"
                @touchstart.prevent="button1Ref?.press($event, onDebugInfoButtonPressed);"
                @touchend="button1Ref?.release();"
                @touchcancel="button1Ref?.release();"
                @touchleave="button1Ref?.release();"
                @mousedown.prevent="button1Ref?.handleMouseDown($event, onDebugInfoButtonPressed)"
                @mouseup="button1Ref?.release();"
                @mouseleave="button1Ref?.release();"
            >{{ debugInfo1IsShowing ? '⚙️デバッグ情報を終わる' : '⚙️デバッグ情報を表示' }}</v-btn>
            <section v-if="debugInfo1IsShowing" class="sec-1">
                <br/>

                <div style="z-index: 10;">
                    印字x={{ printing1Left }}　｜　人x={{ player1Left }}　｜　人モーション・ウェイト={{ player1MotionWait }}<br/>
                    印字y={{ printing1Top  }}　｜　人y={{ player1Top  }}<br/>
                    人 スペース={{ player1Input[" "] }}　｜　↑={{ player1Input.ArrowLeft }}　｜　↑={{ player1Input.ArrowUp }}　｜　→={{ player1Input.ArrowRight }}　｜　↓={{ player1Input.ArrowDown }}<br/>
                    印字 右へ回り込み={{ printing1Motion.wrapAroundRight }}　｜　下へ回り込み={{ printing1Motion.wrapAroundBottom }}<br/>
                    outOfSight1WithMaskSquareCount={{ outOfSight1WithMaskSquareCount }}<br/>
                </div>
                <br/>

                <p>
                    controllerSquareUnit: {{ controllerSquareUnit }}<br/>
                </p>

                <p>👇 盤の各マス</p>
                <div
                    v-for="i in board1Area"
                    :key="i">
                    tile-index: {{ i - 1 }} | 
                    fix-index: {{
                        imageBoard1GetFixedTileSqFromTileSq(i - 1)
                    }} | 
                    printing: {{
                        imageBoard1GetImageSqByFixedTileSq(
                            imageBoard1GetFixedTileSqFromTileSq(i - 1)
                        )
                    }}<br/>
                </div>
                <br/>
                <p>👇 印字表の各マス</p>
                <div
                    v-for="j in printing1AreaMax"
                    :key="j">
                    printing-index: {{ j - 1 }} | 
                    source-tile-index: {{ imageBoard1Data[j - 1] }}<br/>
                </div>
                <br/>
            </section>
        </div>
    </v-container>

</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { computed, onMounted, ref, watch } from 'vue';
    // 👆 ［初級者向けのソースコード］では、 reactive は使いません。
    import type { Ref } from 'vue';

    import { VBtn } from 'vuetify/components';

    // ++++++++++++++++++++++++++++++
    // + インポート　＞　互換性対応 +
    // ++++++++++++++++++++++++++++++

    import type { CompatibleStyleValue }  from '../../../../compatibles/compatible-style-value';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    // アルファベット順
    import BoardMadeOfTile from '@/components/BoardMadeOfTile.vue';
    import Button20250822 from '@/components/Button20250822.vue';
    import ButtonToClosePane from '@/components/ButtonToClosePane.vue';
    import CompatibleDevice from '@/components/CompatibleDevice.vue'
    import OutOfSightMaking from '@/components/OutOfSightMaking.vue';
    import PreferencesExplanation from '@/components/talk/PreferencesExplanation.vue'
    import SourceLink from '@/components/SourceLink.vue';
    import Stopwatch from '@/components/Stopwatch.vue';
    import TalkBalloon from '@/components/TalkBalloon.vue';
    import TheAppHeader from '../../../the-app-header.vue';
    import TileAnimation from '@/components/TileAnimation.vue';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーザブル +
    // ++++++++++++++++++++++++++++++++++

    import { createGetFixedTileSqFromTileSq, createGetImageSqByFixedTileSq, createGetTileStyleByTileSq } from '../../../../composables/board-operation';
    import {
        getPlayer1File, getPlayer1Rank,
        isPlayerInputKey,
        playerMotionClearIfCountZero, playerImageAndPositionAndWaitUpdate, playerMotionCountDown, playerMotionUpdateByInputWithWrapAround,
    } from '../../../../composables/player-controller';
    import {
        checkOutOfSightBottomIsLook, checkOutOfSightLeftIsLook, checkOutOfSightRightIsLook, checkOutOfSightTopIsLook, printingImageAndPositionAndWaitUpdate, printingMotionClearIfCountZero, printingInputCreate, printingMotionCountDown, printingMotionCreate, printingMotionUpdateByInputWithWrapAround,
    } from '../../../../composables/printing-controller'
    import type { PlayerInput, PlayerMotion } from '../../../../composables/player-controller';
    import type { PrintingInput, PrintingMotion } from '../../../../composables/printing-controller';
    import { createGetResourceTileLeftByImageSq } from '../../../../composables/image-board';

    // +++++++++++++++++++++++++++++++++++
    // + インポート ＞　インターフェース +
    // +++++++++++++++++++++++++++++++++++

    import type Rectangle from '../../../../interfaces/Rectangle';


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

    const controllerSquareUnit: number = 40;


    // ############################
    // # アプリケーション・データ #
    // ############################
    //
    // 今動いているアプリケーションの状態を記録しているデータ。特に可変のもの。
    //

    const appZoom = ref<number>(2);   // ズーム


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

    // ++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　何もしないボタン +
    // ++++++++++++++++++++++++++++++++++++++

    const noopButton = ref<InstanceType<typeof VBtn> | null>(null);

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ボタン拡張 +
    // ++++++++++++++++++++++++++++++++

    const button1Ref = ref<InstanceType<typeof Button20250822> | null>(null);

    // ++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ストップウォッチ１ +
    // ++++++++++++++++++++++++++++++++++++++++

    const stopwatch1Ref = ref<InstanceType<typeof Stopwatch> | null>(null);
    const stopwatch1Count = ref<number>(0);   // カウントの初期値

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　設定パネル１ +
    // ++++++++++++++++++++++++++++++++++

    const config1IsShowing = ref<boolean>(false);    // 設定を表示中

    // ++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　デバッグ情報パネル１ +
    // ++++++++++++++++++++++++++++++++++++++++++

    const debugInfo1IsShowing = ref<boolean>(false);  // デバッグ情報を表示中

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　視界の外１ +
    // ++++++++++++++++++++++++++++++++

    const outOfSight1Ref = ref<InstanceType<typeof OutOfSightMaking> | null>(null);
    const outOfSight1WithMaskSquareCount = computed({
        get: () => outOfSight1Ref.value?.outOfSight1WithMaskSquareCount ?? 0, // nullの場合はデフォルト値（例: 0）
        set: (value) => {
            if (outOfSight1Ref.value) {
                outOfSight1Ref.value.outOfSight1WithMaskSquareCount = value; // appleを更新
            }
        }
    });
    const oneForMask = 1;   // マスクが１マス分食み出ていることを示す定数。

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　タイル盤１ +
    // ++++++++++++++++++++++++++++++++

    const tileBoard1TileWidth = 32;
    const tileBoard1TileHeight = 32;
    const board1FileMax = 6;
    const board1RankMax = 6;
    const board1FileNum = ref<number>(5);   // 筋の数。ただし、右側と下側に１マス余分に付いているマスクは含まない。
    const board1RankNum = ref<number>(5);   // 段の数
    const board1Area = computed(()=> {  // 盤のマス数
        return board1FileNum.value * board1RankNum.value;
    });
    // ※　盤およびその各タイルは、決まりきった位置でラップアラウンドを繰り返すだけです。座標が大きく移動することはありません。
    const board1WithMaskSizeSquare = ref<number>(1);    // マスクの幅（単位：マス）
    const board1Style = computed<CompatibleStyleValue>(()=>{    // ボードとマスクを含んでいる領域のスタイル
        return {
            width: `${(board1FileNum.value + outOfSight1WithMaskSquareCount.value) * tileBoard1TileWidth}px`,
            height: `${(board1RankNum.value + outOfSight1WithMaskSquareCount.value) * tileBoard1TileHeight}px`,
            zoom: appZoom.value,
            pointerEvents: 'auto',  /* 親要素がクリックの透過を設定しているはずなので、それを解除します */
        };
    });
    const board1FloorTilemapTileNum = 5;  // 床のタイルマップの、左上隅から数えたタイル数

    // ++++++++++++++++++++++++++++
    // + オブジェクト　＞　像盤１ +
    // ++++++++++++++++++++++++**++
    //
    // 盤上に表示される数字柄、絵柄など。
    //

    const printing1OutOfSightIsLock = ref<boolean>(false);   // ［画面外隠し］を管理（true: ロックする, false: ロックしない）
    watch(printing1OutOfSightIsLock, (newValue: boolean)=>{
        player1CanBoardEdgeWalkingIsEnabled.value = newValue;
    });
    const printing1IsLooping = ref<boolean>(true);  // ループ状態を管理（true: ループする, false: ループしない）
    const printing1FileMax = 10;    // 印字の最大サイズは、盤のサイズより大きいです。
    const printing1RankMax = 10;
    const printing1AreaMax = printing1FileMax * printing1RankMax;
    const printing1FileNum = ref<number>(printing1FileMax);   // 列数
    const printing1RankNum = ref<number>(printing1RankMax);   // 行数
    // のちのち自機を１ドットずつ動かすことを考えると、 File, Rank ではデジタルになってしまうので、 Left, Top で指定したい。
    const printing1Left = ref<number>(0);
    const printing1Top = ref<number>(0);
    const imageBoard1Data = ref<number[]>([]);   // ソース・タイルのインデックスが入っている盤
    // ランダムなマップデータを生成
    for (let i=0; i<printing1AreaMax; i++) {    // 最初から最大サイズで用意します。
        // 左上のタイルは画面外の黒なので、それを避けて設定。
        const sourceTileIndex = Math.floor(Math.random() * (board1FloorTilemapTileNum - 1)) + 1;
        imageBoard1Data.value.push(sourceTileIndex);
    }
    const printing1Input : PrintingInput = printingInputCreate();
    const printing1Motion = ref<PrintingMotion>(printingMotionCreate());
    const printing1MotionSpeed = ref<number>(2);  // 移動速度（単位：ピクセル）
    const printing1MotionWait = ref<number>(0);   // 排他的モーション時間。
    const printing1MotionWalkingFrames = 16;       // 歩行フレーム数
    const sourceTilemapRectangles : Rectangle[] = [];
    for (let i = 0; i < printing1AreaMax; i++) {   // 最大サイズで作っておく。
        const files = i % board1FileNum.value;
        const ranks = Math.floor(i / board1FileNum.value);
        sourceTilemapRectangles.push({ top: ranks * tileBoard1TileHeight, left: files * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight });
    }
    const imageBoard1GetResourceTileLeftByImageSq: (sq: number) => number = createGetResourceTileLeftByImageSq(
        computed<number[]>(()=>imageBoard1Data.value),
        sourceTilemapRectangles,
    );
    const imageBoard1GetTileStyleByTileSq = createGetTileStyleByTileSq(
        tileBoard1TileWidth,
        tileBoard1TileHeight,
        board1FileNum,
        board1RankNum,
        printing1Left,
        printing1Top,
    );
    const imageBoard1GetFixedTileSqFromTileSq: (tileSq: number) => number = createGetFixedTileSqFromTileSq(
        tileBoard1TileWidth,
        tileBoard1TileHeight,
        board1FileNum,
        board1RankNum,
        printing1Left,
        printing1Top,
    );
    const imageBoard1GetImageSqByFixedTileSq: (fixedTileSq: number) => number = createGetImageSqByFixedTileSq(
        tileBoard1TileWidth,
        tileBoard1TileHeight,
        board1FileNum,
        printing1Left,
        printing1Top,
        printing1FileNum,
        printing1RankNum,
        printing1IsLooping,
    );

    // ++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　自機のホーム１ +
    // ++++++++++++++++++++++++++++++++++++
    //
    // このサンプルでは、ピンク色に着色しているマスです。
    // ［自機１］に紐づくホームというわけではなく、［自機のホーム］の１つです。
    //

    const playerHome1Length = 1;    // ホームポジションが１マス分の大きさであることを示す定数。
    const playerHome1File = ref<number>(2); // ホーム
    const playerHome1Rank = ref<number>(2);
    const playerHome1Left = computed(()=>{
        return playerHome1File.value * tileBoard1TileWidth;
    });
    const playerHome1Top = computed(()=>{
        return playerHome1Rank.value * tileBoard1TileHeight;
    });
    const playerHome1Style = computed<CompatibleStyleValue>(()=>{
        return {
            left: `${playerHome1Left.value}px`,
            top: `${playerHome1Top.value}px`,
            width: `${tileBoard1TileWidth}px`,
            height: `${tileBoard1TileHeight}px`,
        };
    });

    // ++++++++++++++++++++++++++++
    // + オブジェクト　＞　自機１ +
    // ++++++++++++++++++++++++++++

    const player1Width = tileBoard1TileWidth;
    const player1Height = tileBoard1TileHeight;
    // アニメーションのことを考えると、 File, Rank ではデジタルになってしまうので、 Left, Top で指定したい。
    const player1Left = ref<number>(playerHome1Left.value);    // スプライトの位置
    const player1Top = ref<number>(playerHome1Top.value);
    const player1Input = {  // 入力
        " ": false, ArrowUp: false, ArrowRight: false, ArrowDown: false, ArrowLeft: false
    } as PlayerInput;
    const player1AnimationSlow = ref<number>(8);    // アニメーションを何倍遅くするか
    const player1Style = computed<CompatibleStyleValue>(() => ({
        left: `${player1Left.value}px`,
        top: `${player1Top.value}px`,
        width: `${player1Width}px`,
        height: `${player1Height}px`,
    }));
    const player1SourceFrames = {   // キャラクターの向きと、歩行タイルの指定
        left:[  // 左向き
            {top:  3 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  3 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  3 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  3 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
        ],
        up:[    // 上向き
            {top:  0 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  0 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  0 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  0 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
        ],
        right:[ // 右向き
            {top:  1 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  1 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  1 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  1 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
        ],
        down:[  // 下向き
            {top:  2 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  2 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  2 * tileBoard1TileHeight, left: 0 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
            {top:  2 * tileBoard1TileHeight, left: 1 * tileBoard1TileWidth, width: tileBoard1TileWidth, height: tileBoard1TileHeight },
        ],
    };
    const player1Frames : Ref<Rectangle[]> = ref(player1SourceFrames["down"]);
    const player1Motion = ref<PlayerMotion>({   // モーションへの入力
        lookRight: 0,   // 向きを変える
        lookBottom: 0,
        goToHome: false,    // ホームに戻る
        goToRight: 0,   // 負なら左、正なら右へ移動する
        goToBottom: 0,  // 負なら上、正なら下へ移動する
    });
    const player1MotionSpeed = ref<number>(2);  // 移動速度（単位：ピクセル）
    const player1MotionWait = ref<number>(0);   // 排他的モーション時間。
    const player1MotionFacingFrames: number = 1;    // 振り向くフレーム数
    const player1MotionWalkingFrames: number = 16;  // 歩行フレーム数
    const player1CanBoardEdgeWalking = ref<boolean>(false); // ［盤の端の歩行］可能状態を管理（true: 可能にする, false: 可能にしない）
    const player1CanBoardEdgeWalkingIsEnabled = ref<boolean>(false);    // ［盤の端の歩行］可能状態の活性性を管理（true: 不活性にする, false: 活性にする）

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　画面中段１ +
    // ++++++++++++++++++++++++++++++++

    const perspectiveMiddle1Style = computed<CompatibleStyleValue>(()=>{
        // マスク込みのゲーム画面サイズは、次の３つの最大のものより小さくはなりません。
        //
        // （１）見えていないところを含む盤サイズ＋マスクの１
        // （２）マスク幅×２＋ホームの１
        // （３）ホームの位置
        const minWidthPixels = Math.max(
            appZoom.value * (board1FileNum.value + oneForMask) * tileBoard1TileWidth,
            appZoom.value * (outOfSight1WithMaskSquareCount.value + playerHome1Length) * tileBoard1TileWidth,
            appZoom.value * (playerHome1File.value + 1) * tileBoard1TileWidth,
        );
        const minHeightPixels = Math.max(
            appZoom.value * (board1RankNum.value + oneForMask) * tileBoard1TileHeight,
            appZoom.value * (outOfSight1WithMaskSquareCount.value + playerHome1Length) * tileBoard1TileHeight,
            appZoom.value * (playerHome1Rank.value + 1) * tileBoard1TileHeight,
        );
        let boardWidthPixelsWithMask = appZoom.value * (board1FileNum.value + oneForMask) * tileBoard1TileWidth;
        let boardHeightPixelsWithMask = appZoom.value * (board1RankNum.value + oneForMask) * tileBoard1TileHeight;
        if (boardWidthPixelsWithMask < minWidthPixels) {
            boardWidthPixelsWithMask = minWidthPixels;
        }
        if (boardHeightPixelsWithMask < minHeightPixels) {
            boardHeightPixelsWithMask = minHeightPixels;
        }

        return {
            top: `calc(
                100vh - ${5 * controllerSquareUnit}px -
                ${boardHeightPixelsWithMask}px
            )`,
            bottom: `calc(${5 * controllerSquareUnit}px)`,
            marginLeft: `calc(50vw - ${boardWidthPixelsWithMask / 2}px)`,
            marginRight: `calc(50vw + ${boardWidthPixelsWithMask / 2}px)`,
            backgroundColor: `rgba(0,0,0,0.1)`,
            pointerEvents: 'none',  /* クリックを透過させます */
        } as CompatibleStyleValue;
    });

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

            if (isPlayerInputKey(e.key)) {  // 型ガード
                player1Input[e.key] = true; // 型チェック済み（文字列→キー名）
                printing1Input[e.key] = true;
            }
        });
        window.addEventListener('keyup', (e: KeyboardEvent) => {
            if (isPlayerInputKey(e.key)) {  // 型ガード
                player1Input[e.key] = false;    // 型チェック済み（文字列→キー名）
                printing1Input[e.key] = false;
            }
        });

        gameLoopStart();
        stopwatch1Ref.value?.timerStart();  // タイマーをスタート
    });


    // ################
    // # サブルーチン #
    // ################

    /**
     * ゲームのメインループ開始
     */
    function gameLoopStart() : void {
        const update = () => {

            // ++++++++++++++++++++++++
            // + モーション・タイマー +
            // ++++++++++++++++++++++++

            printingMotionCountDown(
                printing1MotionWait,
            );
            playerMotionCountDown(
                player1MotionWait,
            );

            // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // + モーション・ウェイトが０のとき、モーションのクリアー +
            // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

            printingMotionClearIfCountZero(
                printing1Motion,
                printing1MotionWait.value,
            );
            playerMotionClearIfCountZero(
                player1Motion,
                player1MotionWait.value,
            );

            // ++++++++++++++++++++++++++++++
            // + キー入力をモーションに変換 +
            // ++++++++++++++++++++++++++++++

            printingMotionUpdateByInputWithWrapAround(
                printing1OutOfSightIsLock.value,
                tileBoard1TileWidth,
                tileBoard1TileHeight,
                board1FileNum.value,
                board1RankNum.value,
                outOfSight1WithMaskSquareCount.value,
                printing1FileNum.value,
                printing1RankNum.value,
                printing1Left.value,
                printing1Top.value,
                printing1Input,
                printing1Motion,
                printing1MotionWait.value,
                ()=>{ return getPlayer1File(player1Left.value, tileBoard1TileWidth) > playerHome1File.value; },   // 自機がホーム・ポジションより右に居る
                ()=>{ return getPlayer1File(player1Left.value, tileBoard1TileWidth) < playerHome1File.value; },   // 自機がホーム・ポジションより左に居る
                ()=>{ return getPlayer1Rank(player1Top.value, tileBoard1TileHeight) > playerHome1Rank.value; },   // 自機がホーム・ポジションより下に居る
                ()=>{ return getPlayer1Rank(player1Top.value, tileBoard1TileHeight) < playerHome1Rank.value; },   // 自機がホーム・ポジションより上に居る
            );
            playerMotionUpdateByInputWithWrapAround(
                printing1OutOfSightIsLock.value,
                tileBoard1TileWidth,
                tileBoard1TileHeight,
                board1FileNum.value,
                board1RankNum.value,
                outOfSight1Ref.value?.outOfSight1WithMaskSquareCount ?? 1,
                playerHome1File.value,
                playerHome1Rank.value,
                player1Left.value,
                player1Top.value,
                player1Input,
                player1Motion,
                player1MotionWait.value,
                player1CanBoardEdgeWalking.value,
                ()=>{ return checkOutOfSightLeftIsLook(tileBoard1TileWidth, board1WithMaskSizeSquare.value, printing1Left.value); },  // ここで進むと、左側に外側が見えるなら。
                ()=>{ return checkOutOfSightRightIsLook(tileBoard1TileWidth, board1WithMaskSizeSquare.value, board1FileNum.value, printing1FileNum.value, printing1Left.value); },    // ここで進むと、右側に外側が見えるなら。
                ()=>{ return checkOutOfSightTopIsLook(tileBoard1TileHeight, board1WithMaskSizeSquare.value, printing1Top.value); },    // ここで進むと、上側に外側が見えるなら。
                ()=>{ return checkOutOfSightBottomIsLook(tileBoard1TileHeight, board1WithMaskSizeSquare.value, board1RankNum.value, printing1RankNum.value, printing1Top.value); },   // ここで進むと、下側に外側が見えるなら。
            );

            // ++++++++++++++++++++++++++++++
            // + 向き・移動・ウェイトを更新 +
            // ++++++++++++++++++++++++++++++

            printingImageAndPositionAndWaitUpdate(
                printing1Left,
                printing1Top,
                printing1Motion.value,
                printing1MotionSpeed.value,
                printing1MotionWait,
                printing1MotionWalkingFrames,
            );
            playerImageAndPositionAndWaitUpdate(
                playerHome1Left.value,
                playerHome1Top.value,
                player1Left,
                player1Top,
                player1Motion.value,
                player1MotionSpeed.value,
                player1MotionWait,
                player1SourceFrames,
                player1Frames,
                player1MotionFacingFrames,
                player1MotionWalkingFrames,
            );

            // 次のフレーム
            requestAnimationFrame(update);
        };

        // 初回呼び出し
        requestAnimationFrame(update);
    }


    /**
     * 左。
     */
    function onLeftButtonPressed() : void {
        player1Input.ArrowLeft = true;
        printing1Input.ArrowLeft = true;
    }


    function onLeftButtonReleased() : void {
        player1Input.ArrowLeft = false;
        printing1Input.ArrowLeft = false;
    }


    /**
     * 上。
     */
    function onUpButtonPressed() : void {
        player1Input.ArrowUp = true;
        printing1Input.ArrowUp = true;
    }


    function onUpButtonReleased() : void {
        player1Input.ArrowUp = false;
        printing1Input.ArrowUp = false;
    }


    /**
     * 右。
     */
    function onRightButtonPressed() : void {
        player1Input.ArrowRight = true;
        printing1Input.ArrowRight = true;
    }


    function onRightButtonReleased() : void {
        player1Input.ArrowRight = false;
        printing1Input.ArrowRight = false;
    }


    /**
     * 下。
     */
    function onDownButtonPressed() : void {
        player1Input.ArrowDown = true;
        printing1Input.ArrowDown = true;
    }


    function onDownButtonReleased() : void {
        player1Input.ArrowDown = false;
        printing1Input.ArrowDown = false;
    }


    /**
     * スペース・キー。
     */
    function onSpaceButtonPressed() : void {
        player1Input[" "] = true;
        printing1Input[" "] = true;
    }


    function onSpaceButtonReleased() : void {
        player1Input[" "] = false;
        printing1Input[" "] = false;
    }


    /**
     * ［設定パネル１］を開くボタン。
     */
    function onConfig1ButtonPressed() : void {
        config1IsShowing.value = !config1IsShowing.value;
    }


    /**
     * ［デバッグ情報を表示］ボタン。
     */
    function onDebugInfoButtonPressed() : void {
        debugInfo1IsShowing.value = !debugInfo1IsShowing.value;
    }

</script>

<style lang="css" scoped>
    @import '@/styles/misc.css';
    @import '@/styles/talk-pen.css';
    @import '@/styles/talk-scene.css';
    @import '@/styles/perspective.css';

    div.board { /* 盤１ */
        position: relative;
    }
    div.square {    /* マス */
        position: absolute;
        image-rendering: pixelated;
    }
    span.board-slidable-tile-index {  /* マスの物自体に付いている番号。その場所は、ラップアラウンドしてすり替わることがある。 */
        position: absolute;
        width: 100%;
        text-align: center;
        font-size: 6px;
    }
    span.board-fixed-square-index { /* マスの画面上の見た目の位置に付いている番号 */
        position: absolute;
        top: 6px;
        width: 100%;
        text-align: center;
        font-size: 6px;
    }
    span.board-printing-index {
        position: absolute;
        top: 12px;
        width: 100%;
        text-align: center;
        font-size: 6px;
    }
    span.board-square-printing-string {   /* マスの印字 */
        position: absolute;
        top: 16px;
        width: 100%;
        text-align: center;
        font-size: 12px;
    }
    div.playerHome {    /* 自機のホーム１ */
        position: absolute;
        border: dashed 4px lightpink;
        z-index: 10;
    }
    div.player {    /* 自機１ */
        position: absolute;
        image-rendering: pixelated;
        z-index: 20;
    }
</style>
