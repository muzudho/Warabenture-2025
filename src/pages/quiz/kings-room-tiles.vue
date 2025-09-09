<!--
    クイズ：　王の間のタイルを市松模様にしようぜ！
-->

<template>
    <the-header/>

    <!-- ボタン機能拡張 -->
    <button-20250822 ref="button1Ref"/>

    <compatible-device ref="compatibleDevice1Ref"/>

    <h3>王の間のタイルを市松模様にしようぜ！</h3>
    <section class="sec-3">
        <br/>
        
        <!-- 免責 -->
        <v-alert type="warning" title="免責！" text="画面は開発中のものだぜ（＾▽＾）！" closable />
        <br/>

        <!-- ストップウォッチ。デバッグに使いたいときは、 display: none; を消してください。 -->
        <stopwatch
            ref="stopwatch1Ref"
            v-on:countUp="(countNum: number) => { stopwatch1Count = countNum; }"
            style="display: none;" />

        <!-- 挿絵 -->
        <talk-illustration
            src="/img/quiz/by-grok/202508__grok__30-1751-papepoKingdom-o2o0.png"
            alt="パペポ王国"
            caption="グラフィッカー：　Grok" />

        <p>
            ここはパペポ王国。<br/>
            王様はある悩みを持っていました。<br/>
            勇者　キフワラニャン　は呼び出されました。<br/>
        </p>
        <br/>

        <talk-illustration
            src="/img/quiz/by-grok/202508__grok__30-1229-kifuwaranyan-o2o0.png"
            alt="勇者キフワラニャン" />
        
        <talk-novel
            name="キフワラニャン"
            :device="compatibleDevice1Ref?.device">
            わたしは勇者キフワラニャン、<br/>
            この世界の神がブラウザーで動くフリーゲームを<br/>
            作ろうとしていると聞いて馳せ参じたぜ。<br/>
            <br/>
            顔や背景がコロコロ変わるかもしれないが、<br/>
            気にしないでくれだぜ
        </talk-novel>
        <br/>

        <!-- パペポ王１ -->
        <talk-illustration
            src="/img/quiz/by-grok/202508__grok__30-0826-king-o2o1o0.png"
            alt="パペポ王" />

        <talk-novel
            name="パペポ一世"
            :device="compatibleDevice1Ref?.device">
                おお、よく来た勇者キフワラニャン！<br/>
                <br/>
                悩みというのは他の何物でもない、<br/>
                床のことじゃ
        </talk-novel>

        <talk-balloon
            :src="commonKifuwaranyanSrc"
            :alt="commonKifuwaranyanAlt"
            :name="commonKifuwaranyanName"
            :device="compatibleDevice1Ref?.device">
            床。<br/>
        </talk-balloon>

        <talk-balloon
            :src="commonPapepoKingSrc"
            :alt="commonPapepoKingAlt"
            :name="commonPapepoKingName"
            :device="compatibleDevice1Ref?.device">
            我が城の床タイルを市松模様にしろと<br/>
            リフォーム会社に命じたのだが……<br/>
        </talk-balloon>
        <br/>

        <!-- 盤領域 -->
        <div
            class="board"
            :style="board1Style">

            <!-- 新・タイル盤１ -->
            <board-made-of-tile
                :boardArea="board1Area"
                :tileWidth="tileBoard1TileWidth"
                :tileHeight="tileBoard1TileHeight"
                :tilemapUrl="'/img/quiz/kings-room-tiles.png'"
                :getFixedTileSqFromTileSq="imageBoard1GetFixedTileSqFromTileSq"
                :getImageSqByFixedTileSq="imageBoard1GetImageSqByFixedTileSq"
                :getTileStyleByTileSq="imageBoard1GetTileStyleByTileSq"
                :getSourceTileLeftByImageSq="imageBoard1GetResourceTileLeftByImageSq"
            >
            </board-made-of-tile

            <!-- 自機１ -->
            <tile-animation
                :frames="player1Frames"
                tilemapUrl="/img/making/202508__warabenture__15-1612-kifuwarabe-o1o0.png"
                :slow="player1AnimationSlow"
                :time="stopwatch1Count"
                class="player"
                :style="player1Style" />

            <!-- 視界の外１ -->
            <out-of-sight
                ref="outOfSight1Ref"
                :tileBoard1TileWidth="tileBoard1TileWidth"
                :tileBoard1TileHeight="tileBoard1TileHeight"
                :board1FileNum="board1FileNum"
                :board1RankNum="board1RankNum"
                class="parent-mask" />
        </div>
        <br/>

        <!-- タッチパネルでも操作できるように、ボタンを置いておきます。キーボードの操作説明も兼ねます。 -->
        <p>キーボード操作方法</p>
        <ul>
            <li>
                <v-btn class="code-key hidden"/>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="button1Ref?.press($event, onUpButtonPressed, {repeat: true});"
                    @touchend="button1Ref?.release(onUpButtonReleased);"
                    @touchcancel="button1Ref?.release(onUpButtonReleased);"
                    @touchleave="button1Ref?.release(onUpButtonReleased);"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, onUpButtonPressed, {repeat: true})"
                    @mouseup="button1Ref?.release(onUpButtonReleased);"
                    @mouseleave="button1Ref?.release(onUpButtonReleased);"
                >↑</v-btn>
                <br/>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="button1Ref?.press($event, onLeftButtonPressed, {repeat: true});"
                    @touchend="button1Ref?.release(onLeftButtonReleased);"
                    @touchcancel="button1Ref?.release(onLeftButtonReleased);"
                    @touchleave="button1Ref?.release(onLeftButtonReleased);"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, onLeftButtonPressed, {repeat: true})"
                    @mouseup="button1Ref?.release(onLeftButtonReleased);"
                    @mouseleave="button1Ref?.release(onLeftButtonReleased);"
                >←</v-btn>
                <v-btn class="code-key hidden"/>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="button1Ref?.press($event, onRightButtonPressed, {repeat: true});"
                    @touchend="button1Ref?.release(onRightButtonReleased);"
                    @touchcancel="button1Ref?.release(onRightButtonReleased);"
                    @touchleave="button1Ref?.release(onRightButtonReleased);"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, onRightButtonPressed, {repeat: true})"
                    @mouseup="button1Ref?.release(onRightButtonReleased);"
                    @mouseleave="button1Ref?.release(onRightButtonReleased);"
                >→</v-btn>
                <br/>
                <v-btn class="code-key hidden"/>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="button1Ref?.press($event, onDownButtonPressed, {repeat: true});"
                    @touchend="button1Ref?.release(onDownButtonReleased);"
                    @touchcancel="button1Ref?.release(onDownButtonReleased);"
                    @touchleave="button1Ref?.release(onDownButtonReleased);"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, onDownButtonPressed, {repeat: true})"
                    @mouseup="button1Ref?.release(onDownButtonReleased);"
                    @mouseleave="button1Ref?.release(onDownButtonReleased);"
                >↓</v-btn>
                　…　自機を上下左右へ、印字を逆方向へ動かすぜ！
                <br/>
            </li>
            <!--
            <li>
                <v-btn
                    class="code-key"
                    @touchstart.prevent="button1Ref?.press($event, onSpaceButtonPressed, {repeat: true});"
                    @touchend="button1Ref?.release(onSpaceButtonReleased);"
                    @touchcancel="button1Ref?.release(onSpaceButtonReleased);"
                    @touchleave="button1Ref?.release(onSpaceButtonReleased);"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, onSpaceButtonPressed, {repeat: true})"
                    @mouseup="button1Ref?.release(onSpaceButtonReleased);"
                    @mouseleave="button1Ref?.release(onSpaceButtonReleased);"
                >（スペース）</v-btn>
                　…　自機、印字の位置を最初に有ったところに戻すぜ。
            </li>
            -->
            <li>
                <!-- フォーカスを外すためのダミー・ボタンです -->
                <v-btn
                    class="noop-key"
                    ref="noopButton"
                    v-tooltip="'PCでのマウス操作で、フォーカスがコントロールに残って邪魔になるときは、このボタンを押してくれだぜ'"
                >何もしないボタン</v-btn><br/>
            </li>
            <li>
                <!-- お好み設定パネル１ -->
                <v-btn
                    class="code-key"
                    @touchstart.prevent="button1Ref?.press($event, onPreferences1ButtonPressed);"
                    @touchend="button1Ref?.release();"
                    @touchcancel="button1Ref?.release();"
                    @touchleave="button1Ref?.release();"
                    @mousedown.prevent="button1Ref?.handleMouseDown($event, onPreferences1ButtonPressed)"
                    @mouseup="button1Ref?.release();"
                    @mouseleave="button1Ref?.release();"
                >{{ preferences1IsShowing ? '⚙️お好み設定を終わる' : '⚙️お好み設定を表示' }}</v-btn>
                <section v-if="preferences1IsShowing" class="sec-1">
                    <br/>
                    <v-slider
                        label="ズーム"
                        v-model="appZoom"
                        :min="0.5"
                        :max="4"
                        step="0.5"
                        showTicks="always"
                        thumbLabel="always" />
                    <br/>
                </section>
            </li>
        </ul>
        <br/>

        <talk-balloon
            :src="commonPapepoKingSrc"
            :alt="commonPapepoKingAlt"
            :name="commonPapepoKingName"
            :device="compatibleDevice1Ref?.device">
            ＰＣであればキーボード入力を、<br/>
            スマホであれば👆上のボタンをタップすることで、<br/>
            自機を歩かせることができるんじゃ。<br/>
        </talk-balloon>
        <talk-balloon
            :src="commonPapepoKingSrc"
            :alt="commonPapepoKingAlt"
            :name="commonPapepoKingName"
            :device="compatibleDevice1Ref?.device">
            盤がでかすぎるときは［お好み設定を表示］ボタンをクリックして<br/>
            出てくる［ズーム］スライダーボックスを左右に動かして<br/>
            盤の大きさを調整してほしい。<br/>
        </talk-balloon>
        <talk-balloon
            :src="commonPapepoKingSrc"
            :alt="commonPapepoKingAlt"
            :name="commonPapepoKingName"
            :device="compatibleDevice1Ref?.device">
            もしＰＣ版で例えばスライダーバーにフォーカスが残ってしまい、<br/>
            左右キーを入力したら自機ではなくスライダーバーが動いてしまい腹が立ったときは<br/>
            ［何もしないボタン］を押せ。<br/>
        </talk-balloon>
        <talk-balloon
            :src="commonKifuwaranyanSrc"
            :alt="commonKifuwaranyanAlt"
            :name="commonKifuwaranyanName"
            :device="compatibleDevice1Ref?.device">
            おおー、説明的なセリフありがとうございますだぜ。<br/>
            <br/>
            なってるなってる、王よ、床、市松模様になってる。<br/>
        </talk-balloon>
        <talk-balloon
            :src="commonPapepoKingSrc"
            :alt="commonPapepoKingAlt"
            :name="commonPapepoKingName"
            :device="compatibleDevice1Ref?.device">
            では、👇下の［⚙問題設定を表示］ボタンをクリックして、<br/>
            出てくる［水平方向のタイル数］スライダーバーを横に１つ動かして例えば１０にし、<br/>
            もう１回［⚙問題設定を終わる］に名前の変わっているボタンを押して設定を閉じ……<br/>
        </talk-balloon>
        <br/>
        <br/>

        <!-- 問題設定パネル１ -->
        <v-btn
            class="code-key"
            @touchstart.prevent="button1Ref?.press($event, onProblem1ButtonPressed);"
            @touchend="button1Ref?.release();"
            @touchcancel="button1Ref?.release();"
            @touchleave="button1Ref?.release();"
            @mousedown.prevent="button1Ref?.handleMouseDown($event, onProblem1ButtonPressed)"
            @mouseup="button1Ref?.release();"
            @mouseleave="button1Ref?.release();"
        >{{ problem1IsShowing ? '⚙️問題設定を終わる' : '⚙️問題設定を表示' }}</v-btn>
        <section v-if="problem1IsShowing" class="sec-1">
            <br/>
            <!-- マスクが被っているところも含めた盤のサイズ： -->
            <v-slider
                label="水平方向のタイル数"
                v-model="board1FileNum"
                :min="board1FileMin"
                :max="board1FileMax"
                step="1"
                showTicks="always"
                thumbLabel="always" />
            <v-slider
                label="垂直方向のタイル数"
                v-model="board1RankNum"
                :min="board1RankMin"
                :max="board1RankMax"
                step="1"
                showTicks="always"
                thumbLabel="always" />
            <br/>
        </section>
        <br/>

        <!-- デバッグ情報パネル１ -->
        <!--
        <v-btn
            class="code-key"
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
            <p>👇 設定：</p>
            <p>
                tileBoard1TileWidth={{ tileBoard1TileWidth }}<br/>
                tileBoard1TileHeight={{ tileBoard1TileHeight }}<br/>
                board1FileNum={{ board1FileNum }}<br/>
                board1RankNum={{ board1RankNum }}<br/>
                printing1Left={{ printing1Left }}<br/>
                printing1Top={{ printing1Top }}<br/>
                printing1FileNum={{ printing1FileNum }}<br/>
                printing1RankNum={{ printing1RankNum }}<br/>
                offsetFile={{ -Math.floor(printing1Left / tileBoard1TileWidth) }}<br/>
                offsetRank={{ -Math.floor(printing1Top / tileBoard1TileHeight) }}<br/>
                width={{ board1FileNum }}<br/>
                width={{ printing1FileNum }}<br/>
                printing1IsLooping={{ printing1IsLooping }}<br/>
            </p>
            <br/>

            <p>
                tileIndex が 18 のとき、<br/>

            </p>
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
        -->

        <br/>
        <br/>

        <talk-balloon
            :src="commonPapepoKingSrc"
            :alt="commonPapepoKingAlt"
            :name="commonPapepoKingName"
            :device="compatibleDevice1Ref?.device">
            そして一度画面を👆上にスクロールし、先ほどの床を見てから<br/>
            ここに戻ってきてほしい。<br/>
        </talk-balloon>
        <talk-balloon
            :src="commonKifuwaranyanSrc"
            :alt="commonKifuwaranyanAlt"
            :name="commonKifuwaranyanName"
            :device="compatibleDevice1Ref?.device">
            フーム……、床がストライプになっている……<br/>
            <br/>
            これはバグだぜ！<br/>
        </talk-balloon>
        <!--
            <p>
                <section v-if="choices1Num==0 || choices1Num==3 || choices1Num==4">
                </section>
                <section v-if="choices1Num==1 || choices1Num==2">
                    キフワラニャン　「おお……、市松模様になっているような……」<br/>
                </section>
            </p>
            <br/>
        -->

        <talk-illustration
            src="/img/quiz/by-grok/202508__grok__30-2023-spellScroll-o1o0.png"
            alt="床のタイルの色を決める呪文" />

        <talk-balloon
            :src="commonPapepoKingSrc"
            :alt="commonPapepoKingAlt"
            :name="commonPapepoKingName"
            :device="compatibleDevice1Ref?.device">
            リフォーム会社が残した、床のタイルの色を決める魔法の呪文は<br/>
            👇これじゃ」<br/>
        </talk-balloon>

        <pre
            class="coding-example mb-6">
// i はタイル番号。左上から右に向かって 0, 1, 2 ... 右端から１段下の左端に続く。
//
// そして、
// color が 0 なら白い床、
// color が 1 なら赤い床
// とするとき、
//
// 以下の計算式でタイルの色を決める。
//
// = 記号は、この記号の右側の計算結果を、左側へ入れる。
// % 記号は、この記号の左側の数を、右側の数で割った余りを求める。 例） 3 % 2 なら 1。
//

color = i % 2;
        </pre>

        <talk-balloon
            :src="commonPapepoKingSrc"
            :alt="commonPapepoKingAlt"
            :name="commonPapepoKingName"
            :device="compatibleDevice1Ref?.device">
            この呪文を、チョチョイと直してほしい！」<br/>
        </talk-balloon>
        <talk-balloon
            :src="commonKifuwaranyanSrc"
            :alt="commonKifuwaranyanAlt"
            :name="commonKifuwaranyanName"
            :device="compatibleDevice1Ref?.device">
            おー、お安い御用だぜ。<br/>
            <br/>
            どう直したらいいか、👇下の選択肢から選んでくれだぜ！」<br/>
        </talk-balloon>
        <br/>

        <p>
            <!--
            <v-checkbox
                :hideDetails="true">
                <template v-slot:label>
                    <span style="margin-right: 16px;">（１）</span>水平方向のタイル数が偶数のとき、偶数段は color の 0, 1 を反転するようにすればよい。
                </template>
            </v-checkbox>
            <v-checkbox
                :hideDetails="true">
                <template v-slot:label>
                    <span style="margin-right: 16px;">（２）</span>水平方向のタイル数が偶数のとき、奇数段は color の 0, 1 を反転するようにすればよい。
                </template>
            </v-checkbox>
            <v-checkbox
                :hideDetails="true">
                <template v-slot:label>
                    <span style="margin-right: 16px;">（３）</span>水平方向のタイル数が奇数のとき、偶数段は color の 0, 1 を反転するようにすればよい。
                </template>
            </v-checkbox>
            <v-checkbox
                :hideDetails="true">
                <template v-slot:label>
                    <span style="margin-right: 16px;">（４）</span>水平方向のタイル数が奇数のとき、奇数段は color の 0, 1 を反転するようにすればよい。
                </template>
            </v-checkbox>
            -->
            <!--
            {{ choices1Num }}
            -->
            <v-radio-group
                v-model="choices1Num">
                <!--
                <v-radio
                    :value="0">
                    <template v-slot:label>
                        <span style="margin-right: 16px;">（０）</span>未選択
                    </template>
                </v-radio>
                -->
                <v-radio
                    :value="1">
                    <template v-slot:label>
                        <span style="margin-right: 16px;">（１）</span>水平方向のタイル数が偶数のとき、偶数段は color の 0, 1 を反転するようにすればよい。
                    </template>
                </v-radio>
                <v-radio
                    :value="2">
                    <template v-slot:label>
                        <span style="margin-right: 16px;">（２）</span>水平方向のタイル数が偶数のとき、奇数段は color の 0, 1 を反転するようにすればよい。
                    </template>
                </v-radio>
                <v-radio
                    :value="3">
                    <template v-slot:label>
                        <span style="margin-right: 16px;">（３）</span>水平方向のタイル数が奇数のとき、偶数段は color の 0, 1 を反転するようにすればよい。
                    </template>
                </v-radio>
                <v-radio
                    :value="4">
                    <template v-slot:label>
                        <span style="margin-right: 16px;">（４）</span>水平方向のタイル数が奇数のとき、奇数段は color の 0, 1 を反転するようにすればよい。
                    </template>
                </v-radio>
            </v-radio-group>
            <v-btn
                class="code-key"
                @touchstart.prevent="button1Ref?.press($event, onUnchoice1ButtonPressed);"
                @touchend="button1Ref?.release();"
                @touchcancel="button1Ref?.release();"
                @touchleave="button1Ref?.release();"
                @mousedown.prevent="button1Ref?.handleMouseDown($event, onUnchoice1ButtonPressed)"
                @mouseup="button1Ref?.release();"
                @mouseleave="button1Ref?.release();"
            >未選択にする</v-btn>
            <!-- フォーカスを外すためのダミー・ボタンです -->
            <v-btn
                class="noop-key"
                ref="noopButton"
                v-tooltip="'PCでのマウス操作で、フォーカスがコントロールに残って邪魔になるときは、このボタンを押してくれだぜ'"
            >何もしないボタン</v-btn>
        </p>
        <br/>
        <br/>

        <talk-balloon
            :src="commonKifuwaranyanSrc"
            :alt="commonKifuwaranyanAlt"
            :name="commonKifuwaranyanName"
            :device="compatibleDevice1Ref?.device">
            上の選択肢を選んだら、<br/>
            画面を👆上にスクロールしてさっきの床を確認して、これで合ってると思ったら、<br/>
            👇下の［この答えで確定する］ボタンを押してくれだぜ！」<br/>
        </talk-balloon>
        <br/>

        <v-btn
            class="code-key"
            @touchstart.prevent="button1Ref?.press($event, onAnswer1ButtonPressed);"
            @touchend="button1Ref?.release();"
            @touchcancel="button1Ref?.release();"
            @touchleave="button1Ref?.release();"
            @mousedown.prevent="button1Ref?.handleMouseDown($event, onAnswer1ButtonPressed)"
            @mouseup="button1Ref?.release();"
            @mouseleave="button1Ref?.release();"
        ><span class="font-x2">{{ answer1IsShowing ? '' : '🆗' }}</span>{{ answer1IsShowing ? '答えを隠す' : 'この答えで確定する' }}</v-btn>
        <section v-if="answer1IsShowing" class="sec-1">
            <section v-if="choices1Num==0">
                <br/>
                <span class="font-x2">😑</span>答えを選べだぜ<br/>
                <br/>
            </section>
            <section v-if="choices1Num==1 || choices1Num==2">
                <br/>
                <span class="font-x2">😄</span>正解<br/>
                <br/>

                <talk-balloon
                    :src="commonPapepoKingSrc"
                    :alt="commonPapepoKingAlt"
                    :name="commonPapepoKingName"
                    :device="compatibleDevice1Ref?.device">
                    おお、さすがキフワラニャン　床が市松模様になったわい。<br/>
                </talk-balloon>
                <talk-balloon
                    :src="commonKifuwaranyanSrc"
                    :alt="commonKifuwaranyanAlt"
                    :name="commonKifuwaranyanName"
                    :device="compatibleDevice1Ref?.device">
                    やったぜ！<br/>
                </talk-balloon>
                <br/>
            </section>
            <section v-if="choices1Num==3 || choices1Num==4">
                <br/>
                <span class="font-x2">😭</span>間違い<br/>
                <br/>

                <talk-balloon
                    :src="commonPapepoKingSrc"
                    :alt="commonPapepoKingAlt"
                    :name="commonPapepoKingName"
                    :device="compatibleDevice1Ref?.device">
                    全ての部屋の床がストライプになってしまったのう。<br/>
                </talk-balloon>
                <talk-balloon
                    :src="commonKifuwaranyanSrc"
                    :alt="commonKifuwaranyanAlt"
                    :name="commonKifuwaranyanName"
                    :device="compatibleDevice1Ref?.device">
                    なんということだぜ……。<br/>
                </talk-balloon>
                <br/>
            </section>
        </section>
        <br/>

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

    import { computed, onMounted, ref, watch } from 'vue';
    // 👆 ［初級者向けのソースコード］では、 reactive は使いません。
    import type { Ref } from 'vue';

    import { VBtn } from 'vuetify/components';

    // ++++++++++++++
    // + 互換性対応 +
    // ++++++++++++++

    import type { CompatibleStyleValue }  from '../../compatibles/compatible-style-value';

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    // from の階層が上の順、アルファベット順
    import BoardMadeOfTile from '@/components/BoardMadeOfTile.vue';
    import Button20250822 from '@/components/Button20250822.vue';
    import CompatibleDevice from '@/components/CompatibleDevice.vue'
    import OutOfSight from '@/components/OutOfSightMaking.vue';
    import SourceLink from '@/components/SourceLink.vue';
    import Stopwatch from '@/components/Stopwatch.vue';
    import TalkBalloon from '@/components/TalkBalloon.vue';
    import TalkIllustration from '@/components/TalkIllustration.vue';
    import TalkNovel from '@/components/TalkNovel.vue';
    import TileAnimation from '@/components/TileAnimation.vue';
    import TheFooter from './the-footer.vue';
    import TheHeader from './the-header.vue';

    // ++++++++++++++++++
    // + コンポーザブル +
    // ++++++++++++++++++

    import { createGetFixedTileSqFromTileSq, createGetImageSqByFixedTileSq, createGetTileStyleByTileSq } from '../../composables/board-operation';
    import {
        getPlayer1File, getPlayer1Rank,
        isPlayerInputKey,
        playerMotionClearIfCountZero, playerImageAndPositionAndWaitUpdate, playerMotionCountDown, playerMotionUpdateByInputWithWrapAround,
    } from '../../composables/player-controller';
    import {
        checkOutOfSightBottomIsLook, checkOutOfSightLeftIsLook, checkOutOfSightRightIsLook, checkOutOfSightTopIsLook, printingImageAndPositionAndWaitUpdate, printingMotionClearIfCountZero, printingInputCreate, printingMotionCountDown, printingMotionCreate, printingMotionUpdateByInputWithWrapAround,
    } from '../../composables/printing-controller'
    import type { PlayerInput, PlayerMotion } from '../../composables/player-controller';
    import type { PrintingInput, PrintingMotion } from '../../composables/printing-controller';
    import { createGetResourceTileLeftByImageSq } from '../../composables/image-board';

    // ++++++++++++++++++++++++++++++++++++
    // + インポート　＞　インターフェース +
    // ++++++++++++++++++++++++++++++++++++

    import type Rectangle from '../../interfaces/Rectangle';


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //    

    const commonKifuwaranyanSrc = "/img/quiz/by-grok/202508__grok__30-1229-kifuwaranyanFace-o3o0.png";
    const commonKifuwaranyanAlt = "キフワラニャン";
    const commonKifuwaranyanName = "キフワラニャン";
    const commonPapepoKingSrc = "/img/quiz/by-grok/202508__grok__30-0826-kingFace-o3o0.png";
    const commonPapepoKingAlt = "パペポ王";
    const commonPapepoKingName = "パペポ王";


    // ############################
    // # アプリケーション・データ #
    // ############################
    //
    // 今動いているアプリケーションの状態を記録しているデータ。特に可変のもの。
    //

    const appZoom = ref<number>(2);    // ズーム


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

    // ++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ボタン機能拡張 +
    // ++++++++++++++++++++++++++++++++++++

    const button1Ref = ref<InstanceType<typeof Button20250822> | null>(null);

    // ++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　ストップウォッチ１ +
    // ++++++++++++++++++++++++++++++++++++++++

    const stopwatch1Ref = ref<InstanceType<typeof Stopwatch> | null>(null);
    const stopwatch1Count = ref<number>(0);   // カウントの初期値

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　設定パネル１ +
    // ++++++++++++++++++++++++++++++++++

    const problem1IsShowing = ref<boolean>(false);    // 設定を表示中

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　お好み設定１ +
    // ++++++++++++++++++++++++++++++++++

    const preferences1IsShowing = ref<boolean>(false);

    // ++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　デバッグ情報パネル１ +
    // ++++++++++++++++++++++++++++++++++++++++++

    //const debugInfo1IsShowing = ref<boolean>(false);  // デバッグ情報を表示中

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　視界の外１ +
    // ++++++++++++++++++++++++++++++++

    const outOfSight1Ref = ref<InstanceType<typeof OutOfSight> | null>(null);
    const outOfSight1WithMaskSquareCount = computed({
        get: () => outOfSight1Ref.value?.outOfSight1WithMaskSquareCount ?? 0, // nullの場合はデフォルト値（例: 0）
        set: (value) => {
            if (outOfSight1Ref.value) {
                outOfSight1Ref.value.outOfSight1WithMaskSquareCount = value; // appleを更新
            }
        }
    });

    // ++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　タイル盤１ +
    // ++++++++++++++++++++++++++++++++

    const tileBoard1TileWidth = 32;
    const tileBoard1TileHeight = 32;
    const board1FileMin = 6;
    const board1RankMin = 6;
    const board1FileMax = 16;
    const board1RankMax = 16;
    const board1FileNum = ref<number>(9);   // 筋の数。ただし、右側と下側に１マス余分に付いているマスクは含まない。
    const board1RankNum = ref<number>(9);   // 段の数
    const board1Area = computed(()=> {  // 盤のマス数
        return board1FileNum.value * board1RankNum.value;
    });
    // ※　盤およびその各タイルは、決まりきった位置でラップアラウンドを繰り返すだけです。座標が大きく移動することはありません。
    const board1WithMaskSizeSquare: number = 1; // マスクの幅（単位：マス）
    const board1Style = computed<CompatibleStyleValue>(()=>{    // ボードとマスクを含んでいる領域のスタイル
        return {
            width: `${(board1FileNum.value + outOfSight1WithMaskSquareCount.value) * tileBoard1TileWidth}px`,
            height: `${(board1RankNum.value + outOfSight1WithMaskSquareCount.value) * tileBoard1TileHeight}px`,
            zoom: appZoom.value,
        };
    });
    //const board1FloorTilemapTileNum = 3;  // 床のタイルマップの、左上隅から数えたタイル数

    // ++++++++++++++++++++++++++++
    // + オブジェクト　＞　像盤１ +
    // ++++++++++++++++++++++++**++
    //
    // 盤上に表示される数字柄、絵柄など。
    //

    const printing1IsLooping = ref<boolean>(false);  // ループ状態を管理（true: ループする, false: ループしない）
    const printing1OutOfSightIsLock = ref<boolean>(true);   // ［画面外隠し］を管理（true: ロックする, false: ロックしない）
    watch(printing1OutOfSightIsLock, (newValue: boolean)=>{
        player1CanBoardEdgeWalkingIsEnabled.value = newValue;
    });
    const printing1FileMax = board1FileMax;
    const printing1RankMax = board1RankMax;
    const printing1AreaMax = printing1FileMax * printing1RankMax;
    const printing1FileNum = computed<number>({ // 列数。印字表のサイズを、盤と同期。
        get: () => { return board1FileNum.value; },
        set: (value) => { board1FileNum.value = value; }
    });
    const printing1RankNum = computed<number>({ // 行数。印字表のサイズを、盤と同期。
        get: () => { return board1RankNum.value; },
        set: (value) => { board1RankNum.value = value; }
    });
    // のちのち自機を１ドットずつ動かすことを考えると、 File, Rank ではデジタルになってしまうので、 Left, Top で指定したい。
    const printing1Left = ref<number>(0);
    const printing1Top = ref<number>(0);
    
    // FIXME: これは computed にする必要があるか？ 動的に盤サイズが変わるから？
    const computedImageBoard1Data = computed<
        number[]
    >(() => {
        const array: number[] = [];   // ソース・タイルのインデックスが入っている盤
        const width = printing1FileNum.value;
        const height = printing1RankNum.value;

        // マップデータを生成。盤サイズが変わるたび更新
        for (let i=0; i<width * height; i++) {
            // i: タイル番号。左上から右に向かって 0, 1, 2 ...
            // color = 0: 白い床
            // color = 1: 赤い床
            // とする。

            // 計算式：　タイルの偶数盤を白い床、奇数盤を赤い床にする。
            let color = i % 2;

            // ここから　クイズの答え：
            if (choices1Num.value == 1) {
                // これは正解。
                // 水平方向のタイル数が偶数のとき、偶数段は color の 0, 1 を反転するようにすればよい。
                const rank = Math.floor(i / width); // タイル番号を分解して rank を抽出
                if (width % 2 == 0) {
                    color = (color + 1 * ((rank) % 2)) % 2;
                }
            } else if (choices1Num.value == 2) {
                // これも正解。
                // 水平方向のタイル数が偶数のとき、奇数段は color の 0, 1 を反転するようにすればよい。
                const rank = Math.floor(i / width);
                if (width % 2 == 0) {
                    color = (color + 1 * ((rank + 1) % 2)) % 2;
                }
            } else if (choices1Num.value == 3) {
                // 間違い。常にストライプになる。
                // 水平方向のタイル数が奇数のとき、偶数段は color の 0, 1 を反転するようにすればよい。
                const rank = Math.floor(i / width); // タイル番号を分解して rank を抽出
                if (width % 2 == 1) {
                    color = (color + 1 * ((rank) % 2)) % 2;
                }
            } else if (choices1Num.value == 4) {
                // 間違い。常にストライプになる。
                // 水平方向のタイル数が奇数のとき、奇数段は color の 0, 1 を反転するようにすればよい。
                const rank = Math.floor(i / width); // タイル番号を分解して rank を抽出
                if (width % 2 == 1) {
                    color = (color + 1 * ((rank + 1) % 2)) % 2;
                }
            }
            // ：ここまで　クイズの答え

            // 次に、色をタイルマップ上のタイル番号に変換する。
            // tileNo = 0: 画面外の黒
            // tileNo = 1: 白い床
            // tileNo = 2: 赤い床
            const tileNo = color + 1;

            array.push(tileNo);
        }

        return array;
    });

    const printing1Input : PrintingInput = printingInputCreate();
    const printing1Motion = ref<PrintingMotion>(printingMotionCreate());
    const printing1MotionSpeed = ref<number>(2);  // 移動速度（単位：ピクセル）
    const printing1MotionWait = ref<number>(0);   // 排他的モーション時間。
    const printing1MotionWalkingFrames = 16;       // 歩行フレーム数
    const sourceTilemapRectangles : Rectangle[] = [];
    for (let i = 0; i < printing1AreaMax; i++) {   // 最大サイズで作っておく。
        const files = i % board1FileNum.value;
        const ranks = Math.floor(i / board1FileNum.value);
        sourceTilemapRectangles.push({
            top: ranks * tileBoard1TileHeight,
            left: files * tileBoard1TileWidth,
            width: tileBoard1TileWidth,
            height: tileBoard1TileHeight
        });
    }
    const imageBoard1GetTileStyleByTileSq = createGetTileStyleByTileSq(
        tileBoard1TileWidth,
        tileBoard1TileHeight,
        board1FileNum,
        board1RankNum,
        printing1Left,
        printing1Top,
    );
    const imageBoard1GetResourceTileLeftByImageSq: (sq: number) => number = createGetResourceTileLeftByImageSq(
        computedImageBoard1Data,
        sourceTilemapRectangles,
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

    const playerHome1File = ref<number>(4);    // ホーム
    const playerHome1Rank = ref<number>(4);
    const playerHome1Left = computed(()=>{
        return playerHome1File.value * tileBoard1TileWidth;
    });
    const playerHome1Top = computed(()=>{
        return playerHome1Rank.value * tileBoard1TileHeight;
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
    const player1CanBoardEdgeWalking = ref<boolean>(true); // ［盤の端の歩行］可能状態を管理（true: 可能にする, false: 可能にしない）
    const player1CanBoardEdgeWalkingIsEnabled = ref<boolean>(false);    // ［盤の端の歩行］可能状態の活性性を管理（true: 不活性にする, false: 活性にする）

    // ++++++++++++++++++++++++++++++
    // + オブジェクト　＞　選択肢１ +
    // ++++++++++++++++++++++++++++++

    const choices1Num = ref<number>(0);

    // ++++++++++++++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　この答えで確定するボタン +
    // ++++++++++++++++++++++++++++++++++++++++++++++

    const answer1IsShowing = ref<boolean>(false);


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
                ()=>{ return checkOutOfSightLeftIsLook(tileBoard1TileWidth, board1WithMaskSizeSquare, printing1Left.value); },    // ここで進むと、左側に外側が見えるなら。
                ()=>{ return checkOutOfSightRightIsLook(tileBoard1TileWidth, board1WithMaskSizeSquare, board1FileNum.value, printing1FileNum.value, printing1Left.value); },  // ここで進むと、右側に外側が見えるなら。
                ()=>{ return checkOutOfSightTopIsLook(tileBoard1TileHeight, board1WithMaskSizeSquare, printing1Top.value); }, // ここで進むと、上側に外側が見えるなら。
                ()=>{ return checkOutOfSightBottomIsLook(tileBoard1TileHeight, board1WithMaskSizeSquare, board1RankNum.value, printing1RankNum.value, printing1Top.value); }, // ここで進むと、下側に外側が見えるなら。
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
     * ［問題設定パネル１］を開くボタン。
     */
    function onProblem1ButtonPressed() : void {
        problem1IsShowing.value = !problem1IsShowing.value;
    }


    /**
     * ［お好み設定パネル１］を開くボタン。
     */
    function onPreferences1ButtonPressed() : void {
        preferences1IsShowing.value = !preferences1IsShowing.value;
    }


    /**
     * ［デバッグ情報を表示］ボタン。
    function onDebugInfoButtonPressed() : void {
        debugInfo1IsShowing.value = !debugInfo1IsShowing.value;
    }
     */


    /**
     * ［未選択にする］ボタン。
     */
    function onUnchoice1ButtonPressed() : void {
        choices1Num.value = 0;
    }


    /**
     * ［この答えで確定する］ボタン。
     */
    function onAnswer1ButtonPressed() : void {
        answer1IsShowing.value = !answer1IsShowing.value;
    }

</script>

<style scoped>

    @import '@/styles/notebook.css';
    @import '@/styles/talk-scene.css';

    /* 
     * マスクの暗さを濃くします。
     * NOTE: セレクターは、ブラウザーの開発者モードでコピーして持ってくるのが確実。
     */
    section.sec-3 > div.board > :deep(.mask) {
        border-color: rgba(32, 32, 32, 0.9) !important;
    }
    div.board { /* 盤１ */
        position: relative;
    }
    div.square {    /* マス */
        position: absolute;
        image-rendering: pixelated;
    }
    span.board-slidable-tile-index-large {  /* マスの物自体に付いている番号。その場所は、ラップアラウンドしてすり替わることがある。 */
        position: absolute;
        width: 100%;
        text-align: center;
        padding-top: 4px;
        font-size: 16px;
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
