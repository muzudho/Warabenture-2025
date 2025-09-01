<template>

    <!-- デバイス互換機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <h3>[2025-06-19_Thu]</h3>
    <section class="sec-3">


        <talker-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                CSV ファイルを読み込んだら、表形式のコントロールで表示してくれだぜ。
        </talker-balloon>


        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                データテーブルは HTML にないので、<br>
                データテーブルのある<span class="code-w">Vuetify 3</span>をフロントエンドに使ってみるかな。
            </div>
        </div>


        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="code-w">csv-cleaning-on-tauri</span>リポジトリーから、自動生成したフォルダーを除いた部分をコピーして、<br>
                <span class="code-w">csv-cleaning-2-on-tauri</span>リポジトリーを作成するぜ。
            </div>
        </div>


        <pre class="code-b">
pnpm install</pre>


        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>いつも通りのコマンド。
            </div>
        </div>


        <pre class="code-b">
pnpm add vuetify</pre>


        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>Grok に聞いた、Vuetify 3 をインストールするコマンドを打鍵。
            </div>
        </div>


        <pre class="code-b">
import { createApp } from 'vue';
import App from './App.vue';
import 'vuetify/styles'; // VuetifyのCSSをインポート
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Vuetifyインスタンスを作成
const vuetify = createVuetify({
  components,
  directives,
  theme: { defaultTheme: 'light' }, // テーマ設定（任意）
});

// VueアプリにVuetifyを登録
createApp(App).use(vuetify).mount('#app');</pre>


        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                これも<span class="font-x2">👆</span>Grok に聞いたやつで、📄<span class="code-w">src/main.ts</span>を上記のように編集すればいいらしい。
            </div>
        </div>


        <pre class="code-b">
pnpm add @tauri-apps/api</pre>


        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>さらにコマンド打鍵。
            </div>
        </div>


        <pre class="code-b">
cd src-tauri
cargo clean
※targetフォルダーがあれば削除。 rm -rf target
pnpm install
pnpm tauri dev</pre>


        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>リポジトリーをコピーしたからか、わけわからんエラーが出たので、<br>
                キャッシュをクリアーしてやり直し。
            </div>
        </div>


    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TalkerBalloon from '../../../components/TalkerBalloon.vue';

    // ++++++++++++++++++++++++++++++++++
    // + コンポーネント　＞　互換性対応 +
    // ++++++++++++++++++++++++++++++++++

    import CompatibleDevice from '../../../components/CompatibleDevice.vue'


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //

    import oton1Src from "@/assets/img/202101__character__24-o2o2o3o0.png";
    const oton1Alt = "きふわらべのお父ん１";
    const oton1Name = "きふわらべのお父ん";
    import oton2Src from "@/assets/img/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png";
    const oton2Alt = "きふわらべのお父ん２";
    const oton2Name = "きふわらべのお父ん";
    import kifuwarabe1Src from "@/assets/img/202101__character__28-kifuwarabe-futsu-o2o0.png";
    const kifuwarabe1Alt = "きふわらべ１";
    const kifuwarabe1Name = "きふわらべ";
    import kifuwarabe2Src from "@/assets/img/202506__character__01-2013-kifuwarabe-o1o1o0.png";
    const kifuwarabe2Alt = "きふわらべ２";
    const kifuwarabe2Name = "きふわらべ";
    import hiyoko1Src from "@/assets/img/202108__character__12-ohkina-hiyoko-futsu2-o2o0.png";
    const hiyoko1Alt = "ひよこ１";
    const hiyoko1Name = "ひよこ";
    import hiyoko2Src from "@/assets/img/202506__character__01-2025-hiyoko-o1o1o0.png";
    const hiyoko2Alt = "ひよこ２";
    const hiyoko2Name = "ひよこ";


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

</script>
