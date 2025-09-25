<template>
    <the-app-header/>
    <button-to-back-to-contents
        class="sec-0 mt-6"
        pagePath="../"
    />

    <h1>グラフを描く章だぜ！</h1>
    <section class="sec-1">
        画面上に矢印を描いてみようぜ（＾▽＾）！<br/>
        <br/>
    </section>

    <h2>まず、直線を引こうぜ（＾▽＾）！</h2>
    <section
        class="sec-2"
        style="position: relative; left:0; top:0;">
        線には太さがあって、角が飛び出てしまうぜ（＾▽＾）<br/>
        中心がちょっとずれたり、右側と下側はちょっと食み出るけど、調整は他の人頑張ってくれだぜ（＾▽＾）！<br/>

        <div
            :style="`width: ${10 * cellWidth}px; height: ${10 * cellHeight}px;`"
            style="position: relative; left:0; top:0; border: dashed 4px lightgray;">

            <!-- 0 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="0 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff0000"/>

            <!-- 1 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="2.5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff4000"/>

            <!-- 2 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff8000"/>

            <!-- 3 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="-2.5 * cellHeight"
                :stroke-width="8"
                color="#ffc000"/>

            <!-- 4 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="0 * cellHeight"
                :stroke-width="8"
                color="#ffff00"/>

            <!-- 5 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="2.5 * cellHeight"
                :stroke-width="8"
                color="#c0ff00"/>

            <!-- 6 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#80ff00"/>

            <!-- 7 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="2.5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#40ff00"/>

            <!-- 8 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="0 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#00ff00"/>

            <!-- 9 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-2.5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#00ff80"/>

            <!-- 10 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#00ffff"/>

            <!-- 11 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="2.5 * cellHeight"
                :stroke-width="8"
                color="#0080ff"/>

            <!-- 12 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="0 * cellHeight"
                :stroke-width="8"
                color="#0000ff"/>

            <!-- 13 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="-2.5 * cellHeight"
                :stroke-width="8"
                color="#8000ff"/>

            <!-- 14 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff00ff"/>

            <!-- 15 -->
            <graph-line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-2.5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff0080"/>
        </div>
        <br/>
    </section>

    <h2>矩形も引こうぜ（＾▽＾）！</h2>
    <section
        class="sec-2"
        style="position: relative; left:0; top:0;">
        角は丸く処理していないし、回転もできないぜ（＾▽＾）<br/>
        調整は他の人頑張ってくれだぜ（＾▽＾）！<br/>

        <div
            :style="`width: ${10 * cellWidth}px; height: ${10 * cellHeight}px;`"
            style="position: relative; left:0; top:0; border: dashed 4px lightgray;">

            <!-- 0 -->
            <graph-rectangle
                :left="startX * cellWidth"
                :top="(startY + 1) * cellHeight"
                :width="4 * cellWidth"
                :height="3 * cellHeight"
                :stroke-width="8"
                color="#ff3300"/>

            <!-- 0 -->
            <graph-rectangle
                :left="(startX - 3) * cellWidth"
                :top="(startY - 4) * cellHeight"
                :width="3 * cellWidth"
                :height="4 * cellHeight"
                :stroke-width="8"
                color="#00ff33"/>
        </div>
        <br/>
    </section>

    <h2>楕円も引こうぜ（＾▽＾）！</h2>
    <section
        class="sec-2"
        style="position: relative; left:0; top:0;">
        角は丸く処理していないし、回転もできないぜ（＾▽＾）<br/>
        調整は他の人頑張ってくれだぜ（＾▽＾）！<br/>

        <div
            :style="`width: ${10 * cellWidth}px; height: ${10 * cellHeight}px;`"
            style="position: relative; left:0; top:0; border: dashed 4px lightgray;">

            <!-- 0 -->
            <graph-ellipse
                :left="startX * cellWidth"
                :top="(startY + 1) * cellHeight"
                :width="4 * cellWidth"
                :height="3 * cellHeight"
                :stroke-width="8"
                color="#ff3300"
                class="d-flex align-center justify-center">
                １番
            </graph-ellipse>

            <!-- 0 -->
            <graph-ellipse
                :left="(startX - 3) * cellWidth"
                :top="(startY - 4) * cellHeight"
                :width="3 * cellWidth"
                :height="4 * cellHeight"
                :stroke-width="8"
                color="#00ff33"
                class="d-flex align-center justify-center">
                ２番
            </graph-ellipse>
        </div>
        <br/>
    </section>

    <h2>矢印を描こうぜ（＾▽＾）！</h2>
    <section
        class="sec-2"
        style="position: relative; left:0; top:0;">
        Grok にコードを書いてもらいながら矢印を作ってみたけど、線に太さがあってはみ出てしまうぜ、難し～（＾▽＾）！<br/>
        <br/>

        <div
            :style="`width: ${10 * cellWidth}px; height: ${10 * cellHeight}px;`"
            style="position: relative; left:0; top:0; border: dashed 4px lightgray;">

            <!-- 0 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="0 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff0000"/>

            <!-- 1 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="2.5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff4000"/>

            <!-- 2 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff8000"/>

            <!-- 3 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="-2.5 * cellHeight"
                :stroke-width="8"
                color="#ffc000"/>

            <!-- 4 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="0 * cellHeight"
                :stroke-width="8"
                color="#ffff00"/>

            <!-- 5 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="2.5 * cellHeight"
                :stroke-width="8"
                color="#c0ff00"/>

            <!-- 6 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#80ff00"/>

            <!-- 7 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="2.5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#40ff00"/>

            <!-- 8 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="0 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#00ff00"/>

            <!-- 9 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-2.5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#00ff80"/>

            <!-- 10 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#00ffff"/>

            <!-- 11 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="2.5 * cellHeight"
                :stroke-width="8"
                color="#0080ff"/>

            <!-- 12 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="0 * cellHeight"
                :stroke-width="8"
                color="#0000ff"/>

            <!-- 13 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="-2.5 * cellHeight"
                :stroke-width="8"
                color="#8000ff"/>

            <!-- 14 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff00ff"/>

            <!-- 15 -->
            <graph-arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-2.5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff0080"/>

            <div
                v-for="index in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
                :key="index"
                :style="hitboxPositions[index] + ' ' +  hitboxStyles[index]"
                style="position: absolute; border: solid 4px gray;">{{ index }}</div>

        </div>
        <br/>

        <p>👇 下のラジオボタンをクリックすると、だいたいの位置に枠が出るぜ（＾▽＾）！</p>
        <!-- Tauri ではラジオボタンが描画されない？ opacity が 0 になってる？ -->
        
        <v-checkbox
            v-for="index in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
            :key="index"
            v-model="hitboxCheckboxes"
            :value="`${index}`"
            :label="`矢印${index}の位置表示`"
            density="compact"
            :style="checkboxStyles[index]"
            style="position:relative; left:0px; top:0px; display: inline-block;"></v-checkbox>
    </section>

    <h2>じゃあ、グラフを描くぜ（＾▽＾）！</h2>
    <section
        class="sec-2"
        style="position: relative; left:0; top:0;">
        直線、矩形、矢印を引けるようになったから、簡単なグラフが描けるな（＾▽＾）！<br/>
        タグ打つの結構大変だけど……（＾～＾）<br/>
        調整は他の人頑張ってくれだぜ（＾▽＾）！<br/>

        <div
            :style="`width: ${10 * cellWidth}px; height: ${10 * cellHeight}px;`"
            style="position: relative; left:0; top:0; border: dashed 4px lightgray;">

            <!-- 始まり箱 -->
            <graph-ellipse
                :left="1 * cellWidth"
                :top="1 * cellHeight"
                :width="4 * cellWidth"
                :height="3 * cellHeight"
                :stroke-width="8"
                color="#3333ff"
                class="d-flex align-center justify-center">
                はじまり
            </graph-ellipse>

            <!-- 直線 -->
            <graph-line
                :startX="3 * cellWidth"
                :startY="4 * cellHeight"
                :width="0 * cellWidth"
                :height="3 * cellHeight"
                :stroke-width="8"
                color="#8000ff"/>

            <graph-arrow
                :startX="3 * cellWidth"
                :startY="7 * cellHeight"
                :width="3 * cellWidth"
                :height="0 * cellHeight"
                :stroke-width="8"
                color="#ff00ff"/>

            <!-- 終わり箱 -->
            <graph-rectangle
                :left="6 * cellWidth"
                :top="5 * cellHeight"
                :width="3 * cellWidth"
                :height="4 * cellHeight"
                :stroke-width="8"
                color="#cc0066"
                class="d-flex align-center justify-center">
                おわり
            </graph-rectangle>
        </div>
        <br/>
    </section>

    <h2>ソースコード</h2>
    <section class="sec-2">
        <source-link/>
    </section>

    <button-to-back-to-top class="sec-0 pt-6"/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { ref, watch } from 'vue';

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++
    //
    // Tauri なら明示的にインポートを指定する必要がある。 Nuxt なら自動でインポートしてくれる場合がある。
    //

    import GraphArrow from '@/components/GraphArrow.vue';
    import GraphEllipse from '@/components/GraphEllipse.vue';
    import GraphLine from '@/components/GraphLine.vue';
    import GraphRectangle from '@/components/GraphRectangle.vue';
    import SourceLink from '@/components/SourceLink.vue';

    // ++++++++++++++++++++++++++
    // + インポート　＞　ページ +
    // ++++++++++++++++++++++++++

    import ButtonToBackToContents from '@/components/ButtonToBackToContents.vue';
    import ButtonToBackToTop from '@/components/ButtonToBackToTop.vue';
    import TheAppHeader from '../../the-app-header.vue';


    // ##############
    // # 共有データ #
    // ##############

    // 盤データ
    const cellWidth = 32;
    const cellHeight = 32;

    // 当たり判定
    const startX = 5;
    const startY = 5;
    const hitboxCheckboxes = ref<string[]>([]);
    const hitboxStyles = ref<string[]>([
        "visibility: hidden;",
        "visibility: hidden;",
        "visibility: hidden;",
        "visibility: hidden;",
        "visibility: hidden;",
        "visibility: hidden;",
        "visibility: hidden;",
        "visibility: hidden;",
        "visibility: hidden;",
        "visibility: hidden;",
        "visibility: hidden;",
        "visibility: hidden;",
        "visibility: hidden;",
        "visibility: hidden;",
        "visibility: hidden;",
        "visibility: hidden;",
    ]);
    const hitboxPositions : string[] = [
        `left: ${( startX + 0   - 0.5) * cellWidth}px; top: ${(  startY - 5   + 0  ) * cellHeight}px; width: ${(0   + 1  ) * cellWidth}px; height: ${(5   + 0.5) * cellHeight}px;`,    // 0
        `left: ${( startX + 0   - 0.5) * cellWidth}px; top: ${(  startY - 5   + 0  ) * cellHeight}px; width: ${(2.5 + 0.5) * cellWidth}px; height: ${(5   + 0.5) * cellHeight}px;`,    // 1
        `left: ${( startX + 0   - 0.5) * cellWidth}px; top: ${(  startY - 5   + 0  ) * cellHeight}px; width: ${(5   + 0.5) * cellWidth}px; height: ${(5   + 0.5) * cellHeight}px;`,    // 2
        `left: ${( startX + 0   - 0.5) * cellWidth}px; top: ${(  startY - 2.5 + 0  ) * cellHeight}px; width: ${(5   + 0.5) * cellWidth}px; height: ${(2.5 + 0.5) * cellHeight}px;`,    // 3
        `left: ${( startX + 0   - 0.5) * cellWidth}px; top: ${(  startY - 0   - 0.5) * cellHeight}px; width: ${(5   + 0.5) * cellWidth}px; height: ${(0   + 1  ) * cellHeight}px;`,    // 4
        `left: ${( startX + 0   - 0.5) * cellWidth}px; top: ${(  startY - 0   - 0.5) * cellHeight}px; width: ${(5   + 0.5) * cellWidth}px; height: ${(2.5 + 0.5) * cellHeight}px;`,    // 5
        `left: ${( startX + 0   - 0.5) * cellWidth}px; top: ${(  startY - 0   - 0.5) * cellHeight}px; width: ${(5   + 0.5) * cellWidth}px; height: ${(5   + 0.5) * cellHeight}px;`,    // 6
        `left: ${( startX + 0   - 0.5) * cellWidth}px; top: ${(  startY - 0   - 0.5) * cellHeight}px; width: ${(2.5 + 0.5) * cellWidth}px; height: ${(5   + 0.5) * cellHeight}px;`,    // 7
        `left: ${( startX + 0   - 0.5) * cellWidth}px; top: ${(  startY - 0   - 0.5) * cellHeight}px; width: ${(0   + 1  ) * cellWidth}px; height: ${(5   + 0.5) * cellHeight}px;`,    // 8
        `left: ${( startX - 2.5      ) * cellWidth}px; top: ${(  startY - 0   - 0.5) * cellHeight}px; width: ${(2.5 + 0.5) * cellWidth}px; height: ${(5   + 0.5) * cellHeight}px;`,    // 9
        `left: ${( startX - 5        ) * cellWidth}px; top: ${(  startY - 0   - 0.5) * cellHeight}px; width: ${(5   + 0.5) * cellWidth}px; height: ${(5   + 0.5) * cellHeight}px;`,    // 10
        `left: ${( startX - 5        ) * cellWidth}px; top: ${(  startY - 0   - 0.5) * cellHeight}px; width: ${(5   + 0.5) * cellWidth}px; height: ${(2.5 + 0.5) * cellHeight}px;`,    // 11
        `left: ${( startX - 5        ) * cellWidth}px; top: ${(  startY - 0   - 0.5) * cellHeight}px; width: ${(5   + 0.5) * cellWidth}px; height: ${(0   + 1  ) * cellHeight}px;`,    // 12
        `left: ${( startX - 5        ) * cellWidth}px; top: ${(  startY - 2.5 + 0  ) * cellHeight}px; width: ${(5   + 0.5) * cellWidth}px; height: ${(2.5 + 0.5) * cellHeight}px;`,    // 13
        `left: ${( startX - 5        ) * cellWidth}px; top: ${(  startY - 5   + 0  ) * cellHeight}px; width: ${(5   + 0.5) * cellWidth}px; height: ${(5   + 0.5) * cellHeight}px;`,    // 14
        `left: ${( startX - 2.5      ) * cellWidth}px; top: ${(  startY - 5   + 0  ) * cellHeight}px; width: ${(2.5 + 0.5) * cellWidth}px; height: ${(5   + 0.5) * cellHeight}px;`,    // 15
    ];
    watch(hitboxCheckboxes, (newValue:string[]) => {
        console.log(`newValue: ${newValue}`);

        for (let i = 0; i < hitboxPositions.length; i++) {
            if (newValue.includes(`${i}`)) {
                hitboxStyles.value[i] = `visibility: visible;`;
            } else {
                hitboxStyles.value[i] = "visibility: hidden;";
            }
        }
    });

    // チェックボックス
    const checkboxStyles = ref<string[]>([
        "color: #ff0000;",  // 0
        "color: #ff4000;",  // 1
        "color: #ff8000;",  // 2
        "color: #ffc000;",  // 3
        "color: #ffff00;",  // 4
        "color: #c0ff00;",  // 5
        "color: #80ff00;",  // 6
        "color: #40ff00;",  // 7
        "color: #00ff00;",  // 8
        "color: #00ff80;",  // 9
        "color: #00ffff;",  // 10
        "color: #0080ff;",  // 11
        "color: #0000ff;",  // 12
        "color: #8000ff;",  // 13
        "color: #ff00ff;",  // 14
        "color: #ff0080;",  // 15
    ]);
</script>
