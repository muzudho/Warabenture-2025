<template>
    <h3>[2025-06-19_Thu]</h3>
    <section class="sec-3">
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01-2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                CSV ファイルを読み込んだら、表形式のコントロールで表示してくれだぜ。
            </div>
        </div>
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
