<template>
    <the-header/>

    <h3>グラフを描こうぜ！</h3>
    <section
        class="sec-3">
        画面上に矢印を描いてみようぜ（＾▽＾）！<br/>
        <br/>
    </section>

    <h4>まず、直線を引こうぜ（＾▽＾）！</h4>
    <section
        class="sec-4"
        style="position: relative; left:0; top:0;">
        線には太さがあって、角が飛び出てしまうぜ（＾▽＾）<br/>
        中心がちょっとずれたり、右側と下側はちょっと食み出るけど、調整は他の人頑張ってくれだぜ（＾▽＾）！<br/>

        <div
            :style="`width: ${10 * cellWidth}px; height: ${10 * cellHeight}px;`"
            style="position: relative; left:0; top:0; border: dashed 4px lightgray;">

            <!-- 0 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="0 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff0000"/>

            <!-- 1 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="2.5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff4000"/>

            <!-- 2 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff8000"/>

            <!-- 3 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="-2.5 * cellHeight"
                :stroke-width="8"
                color="#ffc000"/>

            <!-- 4 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="0 * cellHeight"
                :stroke-width="8"
                color="#ffff00"/>

            <!-- 5 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="2.5 * cellHeight"
                :stroke-width="8"
                color="#c0ff00"/>

            <!-- 6 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#80ff00"/>

            <!-- 7 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="2.5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#40ff00"/>

            <!-- 8 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="0 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#00ff00"/>

            <!-- 9 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-2.5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#00ff80"/>

            <!-- 10 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#00ffff"/>

            <!-- 11 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="2.5 * cellHeight"
                :stroke-width="8"
                color="#0080ff"/>

            <!-- 12 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="0 * cellHeight"
                :stroke-width="8"
                color="#0000ff"/>

            <!-- 13 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="-2.5 * cellHeight"
                :stroke-width="8"
                color="#8000ff"/>

            <!-- 14 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff00ff"/>

            <!-- 15 -->
            <Line
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-2.5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff0080"/>
        </div>
        <br/>
    </section>

    <h4>矩形も引こうぜ（＾▽＾）！</h4>
    <section
        class="sec-4"
        style="position: relative; left:0; top:0;">
        角は丸く処理していないし、回転もできないぜ（＾▽＾）<br/>
        調整は他の人頑張ってくれだぜ（＾▽＾）！<br/>

        <div
            :style="`width: ${10 * cellWidth}px; height: ${10 * cellHeight}px;`"
            style="position: relative; left:0; top:0; border: dashed 4px lightgray;">

            <!-- 0 -->
            <Rectangle
                :left="startX * cellWidth"
                :top="(startY + 1) * cellHeight"
                :width="4 * cellWidth"
                :height="3 * cellHeight"
                :stroke-width="8"
                color="#ff3300"/>

            <!-- 0 -->
            <Rectangle
                :left="(startX - 3) * cellWidth"
                :top="(startY - 4) * cellHeight"
                :width="3 * cellWidth"
                :height="4 * cellHeight"
                :stroke-width="8"
                color="#00ff33"/>
        </div>
        <br/>
    </section>

    <h4>楕円も引こうぜ（＾▽＾）！</h4>
    <section
        class="sec-4"
        style="position: relative; left:0; top:0;">
        角は丸く処理していないし、回転もできないぜ（＾▽＾）<br/>
        調整は他の人頑張ってくれだぜ（＾▽＾）！<br/>

        <div
            :style="`width: ${10 * cellWidth}px; height: ${10 * cellHeight}px;`"
            style="position: relative; left:0; top:0; border: dashed 4px lightgray;">

            <!-- 0 -->
            <Ellipse
                :left="startX * cellWidth"
                :top="(startY + 1) * cellHeight"
                :width="4 * cellWidth"
                :height="3 * cellHeight"
                :stroke-width="8"
                color="#ff3300"
                class="d-flex align-center justify-center">
                １番
            </Ellipse>

            <!-- 0 -->
            <Ellipse
                :left="(startX - 3) * cellWidth"
                :top="(startY - 4) * cellHeight"
                :width="3 * cellWidth"
                :height="4 * cellHeight"
                :stroke-width="8"
                color="#00ff33"
                class="d-flex align-center justify-center">
                ２番
            </Ellipse>
        </div>
        <br/>
    </section>

    <h4>矢印を描こうぜ（＾▽＾）！</h4>
    <section
        class="sec-4"
        style="position: relative; left:0; top:0;">
        Grok にコードを書いてもらいながら矢印を作ってみたけど、線に太さがあってはみ出てしまうぜ、難し～（＾▽＾）！<br/>
        <br/>

        <div
            :style="`width: ${10 * cellWidth}px; height: ${10 * cellHeight}px;`"
            style="position: relative; left:0; top:0; border: dashed 4px lightgray;">

            <!-- 0 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="0 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff0000"/>

            <!-- 1 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="2.5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff4000"/>

            <!-- 2 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff8000"/>

            <!-- 3 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="-2.5 * cellHeight"
                :stroke-width="8"
                color="#ffc000"/>

            <!-- 4 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="0 * cellHeight"
                :stroke-width="8"
                color="#ffff00"/>

            <!-- 5 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="2.5 * cellHeight"
                :stroke-width="8"
                color="#c0ff00"/>

            <!-- 6 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#80ff00"/>

            <!-- 7 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="2.5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#40ff00"/>

            <!-- 8 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="0 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#00ff00"/>

            <!-- 9 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-2.5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#00ff80"/>

            <!-- 10 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="5 * cellHeight"
                :stroke-width="8"
                color="#00ffff"/>

            <!-- 11 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="2.5 * cellHeight"
                :stroke-width="8"
                color="#0080ff"/>

            <!-- 12 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="0 * cellHeight"
                :stroke-width="8"
                color="#0000ff"/>

            <!-- 13 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="-2.5 * cellHeight"
                :stroke-width="8"
                color="#8000ff"/>

            <!-- 14 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff00ff"/>

            <!-- 15 -->
            <Arrow
                :startX="startX * cellWidth"
                :startY="startY * cellHeight"
                :width="-2.5 * cellWidth"
                :height="-5 * cellHeight"
                :stroke-width="8"
                color="#ff0080"/>

            <div
                v-for="index in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]" :key="index"
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

    <h4>じゃあ、グラフを描くぜ（＾▽＾）！</h4>
    <section
        class="sec-4"
        style="position: relative; left:0; top:0;">
        直線、矩形、矢印を引けるようになったから、簡単なグラフが描けるな（＾▽＾）！<br/>
        タグ打つの結構大変だけど……（＾～＾）<br/>
        調整は他の人頑張ってくれだぜ（＾▽＾）！<br/>

        <div
            :style="`width: ${10 * cellWidth}px; height: ${10 * cellHeight}px;`"
            style="position: relative; left:0; top:0; border: dashed 4px lightgray;">

            <!-- 始まり箱 -->
            <Ellipse
                :left="1 * cellWidth"
                :top="1 * cellHeight"
                :width="4 * cellWidth"
                :height="3 * cellHeight"
                :stroke-width="8"
                color="#3333ff"
                class="d-flex align-center justify-center">
                はじまり
            </Ellipse>

            <!-- 直線 -->
            <Line
                :startX="3 * cellWidth"
                :startY="4 * cellHeight"
                :width="0 * cellWidth"
                :height="3 * cellHeight"
                :stroke-width="8"
                color="#8000ff"/>

            <Arrow
                :startX="3 * cellWidth"
                :startY="7 * cellHeight"
                :width="3 * cellWidth"
                :height="0 * cellHeight"
                :stroke-width="8"
                color="#ff00ff"/>

            <!-- 終わり箱 -->
            <Rectangle
                :left="6 * cellWidth"
                :top="5 * cellHeight"
                :width="3 * cellWidth"
                :height="4 * cellHeight"
                :stroke-width="8"
                color="#cc0066"
                class="d-flex align-center justify-center">
                おわり
            </Rectangle>
        </div>
        <br/>
    </section>

    <the-footer/>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    import { ref, watch } from 'vue';

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import Arrow from '../../components/Arrow.vue'; // Tauri だと明示的にインポートを指定する必要がある。
    import Ellipse from '../../components/Ellipse.vue';
    import Line from '../../components/Line.vue';
    import Rectangle from '../../components/Rectangle.vue';
    import TheFooter from './the-footer.vue';
    import TheHeader from './the-header.vue';


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
