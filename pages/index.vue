<template>
    <h1># ワラベンチャー</h1>
    <div class="div1">
        今さら、手作りのホームページ。（Created by むずでょ）<br>
        <NuxtLink to="/team-mirai-volunteer">チームみらいボランティア</NuxtLink>のリンクはこちら。
    </div>

    <h2>## [2025-07-25_Fri]</h2>
    <div class="div2">
        <a target="_blank" href="/img/journal/202507/202507__warabenture__25--1412-csvCleaning2OnTauri-o1o0.png">
            <img class="scr-shot" src="/img/journal/202507/202507__warabenture__25--1412-csvCleaning2OnTauri-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>Vuetify3 に置き換え中なんだが、レイアウトがスカスカになってしまう……
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                じゃあ、画面に合わせてきっちり詰めるのは、できないんだろ。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202507/202507__warabenture__25--1437-csvCleaning2OnTauri-o1o0.png">
            <img class="scr-shot" src="/img/journal/202507/202507__warabenture__25--1437-csvCleaning2OnTauri-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>がんばって隙間を詰めてもこれぐらい。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                勝手にスマホにも対応しようとされるから、デスクトップ画面にピッタリ調整しようとすることはできないんじゃないの？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                次は、さっきのアプリをコピーして、わらシティを作ろう。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202507/202507__warabenture__25--1749-waraCity-o1o0.png">
            <img class="scr-shot" src="/img/journal/202507/202507__warabenture__25--1749-waraCity-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                何だぜ、これ？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                スーパー・ファミコン版のシム・シティのパクリを作るんだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                さっそくこれを、ワラベンチャーのホームページ、つまりここにも移植しよう。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                あれっ？　画像が表示されない？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                なんで同じ Vue 3 なのに、そのまんま移植できないの？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                HTML のソースに &ltv-img&gt タグがそのまんま出力されてる……、<br/>
                Nuxt に Vuetify3 が連携されていないんだ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                じゃあ、連携しろだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👇</span>以下の記事を頼りに Nuxt と Vuetify3 を連携する。<br/>
                <br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://note.com/doui_lab/n/n37a67a01981a">Vue3 + Nuxt3 + Vuetify3 のクイックスタート</a>
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👇</span>連携できてるかな？<br/>
                <br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://warabenture.com/wara-city/map">わらシティ</a>
            </div>
        </div>
    </div>

    <h2>## [2025-07-12_Sat]</h2>
    <div class="div2">
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="code-w">csv-cleaning-2-on-tauri</span>リポジトリーのパッケージ依存関係がおかしいらしい。<br/>
                📄<span class="code-w">cargo.toml</span>ファイルから、<span class="code-w">api-all</span>フィーチャーを除去。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                👇 次に、<span class="code-w">cargo</span>を更新。
            </div>
        </div>
        <pre class="code-b">
cd src-tauri
cargo update
cargo clean
pnpm install
pnpm dev

cd ..
pnpm add @tauri-apps/cli@latest @tauri-apps/api@latest

pnpm tauri info</pre><br/>
        <pre class="code-b">
&gt; notepad-on-tauri@0.1.0 tauri C:\Users\muzud\OneDrive\ドキュメント\GitHub\csv-cleaning-2-on-tauri
&gt; tauri "info"


[✔] Environment
    - OS: Windows 10.0.26100 x86_64 (X64)
    ✔ WebView2: 138.0.3351.77
    ✔ MSVC:
        - Visual Studio Build Tools 2022
        - Visual Studio Community 2022
    ✔ rustc: 1.87.0 (17067e9ac 2025-05-09)
    ✔ cargo: 1.87.0 (99624be96 2025-05-06)
    ✔ rustup: 1.28.2 (e4f3ad6f8 2025-04-28)
    ✔ Rust toolchain: stable-x86_64-pc-windows-msvc (default)
    - node: 22.16.0
    - pnpm: 10.11.0
    - npm: 10.8.2

[-] Packages
    - tauri 🦀: 2.6.2
    - tauri-build 🦀: 2.3.0
    - wry 🦀: 0.52.1
    - tao 🦀: 0.34.0
    - @tauri-apps/api : 2.6.0
    - @tauri-apps/cli : 2.6.2

[-] Plugins
    - tauri-plugin-dialog 🦀: 2.3.0
    - @tauri-apps/plugin-dialog : 2.2.2 (outdated, latest: 2.3.0)
    - tauri-plugin-fs 🦀: 2.4.0
    - @tauri-apps/plugin-fs : 2.3.0 (outdated, latest: 2.4.0)
    - tauri-plugin-opener 🦀: 2.4.0
    - @tauri-apps/plugin-opener : 2.2.7 (outdated, latest: 2.4.0)

[-] App
    - build-type: bundle
    - CSP: unset
    - frontendDist: ../dist
    - devUrl: http://localhost:1420/
    - framework: Vue.js
    - bundler: Vite</pre><br/>
        <pre class="code-b">
rustup update</pre><br/>
        <pre class="code-b">
cd src-tauri
cargo add tauri-plugin-fs
pnpm add @tauri-apps/plugin-fs

cd ..
pnpm dev</pre><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                直らん。 📁<span class="code-w">node_modules</span> フォルダーを削除して、<span class="code-w">pnpm tauri dev</span>を打鍵。<br/>
                コンパイル・エラーの数はだいぶ減った。
            </div>
        </div>
        <pre class="code-b">
pnpm install
pnpm tauri dev</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                コンパイル・エラーの数はさらに減った。
            </div>
        </div>
        <pre class="code-b">
cd src-tauri
cargo add csv

cd ..
pnpm tauri dev</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                コンパイル・エラーは取れて、ウィンドウも表示されたけど、ウィンドウの内側は真っ白だ……。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202507/202507__warabenture__12--1713-csvCleaningOnTauri-o1o0.png">
            <img class="scr-shot" src="/img/journal/202507/202507__warabenture__12--1713-csvCleaningOnTauri-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                👆 シュリンクして、テキストだけ表示できるように直した。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                逐次的に<span class="code-w">&lt;main class="container"&gt;</span>なんてコツコツ書かずに、<br/>
                構造的に<span class="code-w">&lt;v-app&gt;&lt;v-main&gt;</span>を使うみたいだぜ？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                そうか、自動的にレスポンシブ・デザインに対応してもらうには、Ｗｅｂサイトに特化したフレームワークに丸投げした方がいいのか……。
            </div>
        </div>
    </div>

    <h2>## [2025-06-19_Thu]</h2>
    <div class="div2">
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                CSV ファイルを読み込んだら、表形式のコントロールで表示してくれだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                データテーブルは HTML にないので、<br>
                データテーブルのある<span class="code-w">Vuetify 3</span>をフロントエンドに使ってみるかな。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
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
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
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
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
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
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
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
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
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
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>リポジトリーをコピーしたからか、わけわからんエラーが出たので、<br>
                キャッシュをクリアーしてやり直し。
            </div>
        </div>
    </div>

    <h2>## [2025-06-15_Sun]</h2>
    <div class="div2">
        <a target="_blank" href="/img/journal/202506/202506__tauri__15--0059-CsvCleaningOnTauri-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__tauri__15--0059-CsvCleaningOnTauri-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>前（2025-06-12_Thu）言ってたツールを作ったぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                おつ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                じゃあ次の課題だぜ。<br>
                埼玉県新座市内の丁目、番地の形を図形として切り出して表示するソフトを作ってくれだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                Grok に尋ねてみると、日本の地図データを無料公開しているのは以下の２つで、<br>
                <ul>
                    <li><a target="_blank" href="https://www.geospatial.jp/">G空間情報センター</a></li>
                    <li><a target="_blank" href="https://www.gsi.go.jp/">国土地理院の電子国土基本図</a></li>
                </ul>
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                ［国土地理院］の方は丁目の精度までだから、残るのは［G空間情報センター］の一択だぜ。<br>
                ［G空間情報センター］の地図データは、精度や形式が揃ったものではなく、バラバラだそうだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                この <span class="code-w">.geojson</span> ってファイルは、どんなアプリで開けるの？<br>
                <a target="_blank" href="https://www.geospatial.jp/ckan/dataset/aigid-moj-11230/resource/00e54419-fb2a-4ea1-aac1-00c8675d9787">11230_新座市_公共座標9系_筆R_2022.geojson</a>
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                Grok がいくつか知ってたが、とりあえず <a target="_blank" href="https://qgis.org/">QGIS</a> を使ってみるかだぜ。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__screenshot__15--1901-QGIS-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__screenshot__15--1901-QGIS-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>あれっ、思ったような地図と違う……。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                不動産屋が登記した土地しか入ってないんじゃないの？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                使えねー。じゃあ［国土地理院］の方を見てみるか……。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__screenshot__15--1928-国土地理院-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__screenshot__15--1928-国土地理院-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>この地図をどうやって <span class="code-w">.geojson</span> 形式に変換するんだぜ？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                とりあえず左のサイドメニューの保存ボタンを押してみろだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="code-w">.json</span> 形式では保存できるが、<span class="code-w">.geojson</span> 形式ではなかったぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                じゃあ地図表示は諦めて、データ・クリーニングの方に重点的に取り掛かるかだぜ。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__screenshot__15--2046-埼玉県_市区町村別_世帯数-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__screenshot__15--2046-埼玉県_市区町村別_世帯数-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>左の表は令和7年5月1日現在の［埼玉県］の<a target="_blank" href="https://www.pref.saitama.lg.jp/a0206/03suikei/index.html">市区町村別世帯数・人口</a>だぜ。<br>
                右の表はお父んが［国勢調査］から持ってきて編集している表だぜ。<br>
                <br>
                このように、カテゴリー分けや、個々の項目名が揃っていないが、同じものを表しているはずの２つの表を、<br>
                行を揃えてデータを見せてくれるツールを作ってくれだぜ。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__screenshot__15--2109-２表のJoin-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__screenshot__15--2109-２表のJoin-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>じゃあとりあえず、左表から１列取って［名前2］、右表から１列取って［名前1］として、市区町村名を以下の３つのグループに分けるかだぜ。<br>
                <ul>
                    <li>両表に含まれる市区町村名</li>
                    <li>左表にだけ含まれる市区町村名</li>
                    <li>右表にだけ含まれる市区町村名</li>
                </ul>
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__screenshot__15--2113-２表のJoin2-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__screenshot__15--2113-２表のJoin2-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>２列を独立して昇順ソートするかだぜ。<br>
                浦和の浦がひらがなより文字コードが小さいのが意味わからんが……。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__screenshot__15--2121-２表のJoin3-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__screenshot__15--2121-２表のJoin3-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>手で振り分けたぜ。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__screenshot__15--2128-２表のJoin4-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__screenshot__15--2128-２表のJoin4-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>手で名前の表記揺れを修正して２行を１行にまとめたりして、<br>
                そして、［二表仮番］という名前で列を作って、連番を振るぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                変更前の列名は残しておかないと、あとでどの行だったのかわからなくなるんじゃないの？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                そうか、古い列名は残しておいてくれだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                じゃあ、今回手で行った操作を自動化するアプリを作ってくれだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                アプリケーションの名前は <span class="code-w">column-names-sync-on-tauri</span> とかでいいかな。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                あれっ？ Cドライブの残り容量が 5 GB しかない！？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                Tauri は debug フォルダーがバカでかいそうだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                Grok に対策を聞いてみるか。<br>
                以下のコードをさくっと実行。
            </div>
        </div>
        <div class="code-b">
<pre>
cd src-tauri
cargo clean
</pre>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                リリースもデバッグもどちらも含めて 14.3 GiB もファイルが消えた……。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                Tauri 恐ろしいな……。
            </div>
        </div>
    </div>

    <h2>## [2025-06-12_Thu]</h2>
    <div class="div2">
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                データをクリーニングするツールが欲しいぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                全くだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                文字列を入力し、［埼玉県新座市］という文字列があれば［埼玉県,新座市］と分割するような、<br>
                ４７都道府県に対応した変換アプリを作ってくれだぜ。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__tauri__12--2156-csvCleaning-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__tauri__12--2156-csvCleaning-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span> じゃあ 📄<span class="code-w">file-list-on-tauri</span>リポジトリーから自動生成ファイルを削除して、それ以外をコピーした、<br>
                📄<span class="code-w">csv-cleaning-on-tauri</span>リポジトリーを作るぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="code-b">git init</span>コマンドを使った操作は、[2025-06-03_Tue] の日記を読んでくれだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                今日は途中で終了。
            </div>
        </div>
    </div>

    <h2>## [2025-06-05_Thu]</h2>
    <div class="div2">
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                今日は、家の掃除をしたいぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                じゃあ、風呂桶を掃除してくれだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">✅</span> 風呂と洗面所、便器を拭き掃除したぜ。
            </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            じゃあ、お父んはその風呂に入れだぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            <span class="font-x2">✅</span>風呂に入ってサッパリしたぜ。<br>
            <span class="font-x2">❌</span>お湯を入れていたはずなのに、ぬるま湯になっていたが……
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ガス代の支払いが滞っているのかしらねえ？
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            じゃあ次は、お父んは昼飯を食べろだぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            <span class="font-x2">✅</span> 昼飯を食べたぜ。<br>
            １時間ぐらいかかった。わりと時間かかるな。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            生命の維持に必要な活動ですからね。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            じゃあ次は、コーヒーを飲んで、歯を磨けだぜ。歯間ブラシも使えよ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            <span class="font-x2">✅</span> コーヒーを飲んで歯を磨いたぜ。歯間ブラシも使った。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            じゃあ次は、フィットネスジムに行けだぜ。行きしなには漫画本をBook-Offに売ってきてくれだぜ。<br>
            帰りには明日の飯２食分を買ってこいだぜ。<br>
            余裕があればズボンの裾上げのための裁縫セットを買ってこいだぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ズボンの裾上げのための裁縫セットってどこに売ってんの？
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            セブンイレブンや、ダイソーなどに売ってるだろ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            分かったぜ。行ってくるぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            帰宅なう。<br>
            <span class="font-x2">✅</span>フィットネスジムに行ってきたぜ。<br>
            <span class="font-x2">✅</span>行きしなに漫画本を売ってきたぜ。３０冊ぐらいで 2000 円ぐらいになったぜ。<br>
            <span class="font-x2">🤔</span>しかし、何巻まで買ったかのメモ書きをどこに保管しておくかが問題だぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            <span class="font-x2">✅</span>帰り際にはソーイングセットを買ってきたぜ。<br>
            ユザワヤでスヌーピーの絵柄が入ったやつだぜ、６，０００円。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ６，０００円は高いなあ。元を取るために何本のズボンの裾を上げるつもりだぜ？
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ３本ぐらい……。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            １本２，０００円の裾上げねえ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            夜は集中力が落ちているんで、ズボンの裾上げは明日の朝にしろだぜ。<br>
            ひとまず、カフェインレス・ブラックコーヒーでも飲んで休めだぜ。
        </div>
        </div>
    </div>

    <h2>## [2025-06-04_Wed]</h2>
    <div class="div2">
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                👇 今日は Grok に聞いて、コードのワーニングを掃除しただけだぜ。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__04--2248-tauri-o2oA15o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__program__04--2248-tauri-o2oA15o0.png">
        </a><br/>
        <a target="_blank" href="/img/journal/202506/202506__program__04--2249-tauri-o2oA16o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__04--2249-tauri-o2oA16o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 変数名、関数名を<span class="code-b">snake_case</span>から<span class="code-b">camelCase</span>に変えたぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 Rust で作った関数の戻り値を、TypeScript 側できっちり受け取れるように修正したぜ。
        </div>
        </div>
    </div>

    <h2>## [2025-06-03_Tue]</h2>
    <div class="div2">
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            昨日と話しは変わって、課題No.2だぜ。<br>
            ディレクトリーを指定したら、その直下のファイル名を一覧してくれるアプリを作ってくれだぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            じゃあ、ファイルパスを入れるテキストボックスと、ファイル選択ダイアログボックスを開くボタン、<br>
            ［ファイルの一覧］と、その表示を更新する［表示］ボタンがあればいいかだぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            今日のキャパシティ（作業に使える時間）は 6 とするぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            昨日作ったアプリから［Save］機能を削除して、テキストボックスをリストボックスへ付け替え、<br>
            あとは、ファイル名を一覧する機能が作れるかどうかの調査と実装だから、<br>
            調査を重めに見て、エフォート（作業にかかる時間見積）は 2 ってところねえ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__03--1049-tauri-o2o1o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1049-tauri-o2o1o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 昨日作ったプログラムから、<span class="code-b">.git</span>と<span class="code-b">node_modules</span>以外のフォルダーとファイルをコピーするぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__03--1056-tauri-o2o2o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1056-tauri-o2o2o0-mark.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 📁<span class="code-b">file-list-on-tauri</span>を作って、中身を貼り付け。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__03--1109-tauri-o2o3o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1109-tauri-o2o3o0-mark.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 そのフォルダーを VSCode で開くぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__03--1127-tauri-o2o4o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1127-tauri-o2o4o0-mark.png">
        </a><br/>
        <div class="code-b">git init</div><br>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 （パワーシェルではなくて）コマンドプロンプトを開いて、上記のコマンドを打鍵するぜ。<br>
            これにより、カレントディレクトリーに 📁<span class="code-b">.git</span>っていう隠しフォルダーが作成されるぜ。<br>
            これでローカルＰＣに［ローカル・リポジトリー］を作った。
        </div>
        </div>
        <div class="code-b">git add .</div><br>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 続いて、上記のコマンドを打鍵するぜ。<br>
            LF を CRLF に変更するぞ、とか改行の変更の警告も出ているがまあいいだろう。<br>
            これで、全てのファイルを［ステージ］に上げた。
        </div>
        </div>
        <div class="code-b">git commit -m "Initial commit"</div><br>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 続いて、上記のコマンドを打鍵するぜ。<br>
            ［ステージ］にあったファイルを［ローカル・リポジトリー］へコミットした。<br>
            コミットってのはファイルを置いたぐらいの感覚を持っていればいい。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__03--1140-tauri-o2o5o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1140-tauri-o2o5o0-mark.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 続いて、Git Hub で、初期ファイルは何もなしで<span class="code-w">file-list-on-tauri</span>リモート・リポジトリーを新規作成、<br>
            ［ローカル・リポジトリー］との紐付け方法の説明が書いてあるぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__03--1146-tauri-o2o6o0-mark.png">
            <img class="scr-shot" src="/img/journal/202506/202506__program__03--1146-tauri-o2o6o0-mark.png">
        </a><br/>
        <div class="code-b">
            git remote add origin https://github.com/muzudho/file-list-on-tauri.git<br>
            git branch -M main<br>
            git push -u origin main<br>
        </div><br>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                👆 上記のコマンドを打鍵するぜ。［ローカル・リポジトリー］に［リモート・リポジトリー］の場所を教えて、<br>
                ［ブランチ］を選び、そこへ［ローカル・リポジトリー］のファイルをプッシュしたぜ。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__03--1150-tauri-o2o7o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1150-tauri-o2o7o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 これで、［リモート・リポジトリー］にソースコードを置けたぜ。
        </div>
        </div>
        <div class="code-b">
        pnpm install
        </div><br>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 続いて、上記のコマンドを打鍵。<br>
            📁<span class="code-b">node_modules</span> が自動生成されるぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__03--1215-tauri-o2o8o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1215-tauri-o2o8o0-mark.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 続いて、📄<span class="code-w">src-tauri/tauri.conf.json</span>ファイルの内容を編集するぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            また、 📄<span class="code-w">src/App.vue</span>ファイルから［Save］機能を削除し、<br>
            ［Load］ボタンは［Refresh］とラベルを変えておくぜ。
        </div>
        </div>
        <div class="code-b">
        pnpm tauri dev
        </div><br>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 続いて、上記のコマンドを打鍵。<br>
            数分待てだぜ。<br>
            開発モードでデスクトップアプリが起動するぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__03--1221-tauri-o2o9o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1221-tauri-o2o9o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 こんな感じで、デスクトップアプリのベースをコピーする方法は確立できたな。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            じゃあ、とりあえず、そのテキストボックスに<br>
            指定のディレクトリーの直下にあるファイル名を一覧してくれだぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ファイル名を調べるのとか、フロントの機能じゃないだろうから、<br>
            バックエンドの Tauri フレームワークを使うんだろな、なら言語は Rust か？
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__03--1922-tauri-o2oA10o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1922-tauri-o2oA10o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 とりあえず、テンプレートを上記のように変更。<br>
            Rust で定義している、ファイル一覧を読取る<span class="code-b">get_file_names</span>関数を TpyeScript 側から呼び出しているぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__03--1928-tauri-o2oA11o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1928-tauri-o2oA11o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 Rust 言語の方に、ファイル名一覧を読取る関数を追加。<br>
            <span class="code-b">invoke_handler</span>ってあたりに関数の名前を追加するのを忘れてはいけないぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__03--1937-tauri-o2oA12o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--1937-tauri-o2oA12o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 ファイル名の一覧をカンマ区切りで取れたぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            リストボックスに入れてくれだぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            キャパシティ（作業に使える時間）をもう 4 は消費してるわよ。<br>
            残りは 2 よ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            なんでそんなに速く消費してしまったんだぜ？
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            まあ、コード書いたが動かないとか、動かない理由の調査とか、思ったよりしてるしな。
        </div>
        </div>
        <div class="code-b">
        &lt;script setup lang="ts"&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;const itemsVM = ref(["apple", "banana", "cherry"]);<br>
        &lt;/script&gt;<br>
        <br>
        &lt;template&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;select size="5"&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option v-for="item in itemsVM" :key="item" :value="item"&gt;&lbrace;&lbrace; item &rbrace;&rbrace;&lt;/option&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/select&gt;<br>
        &lt;/template&gt;<br>
        </div><br>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 リストボックスに項目を並べる考え方は、上記のコードで示したぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__03--2035-tauri-o2oA13o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--2035-tauri-o2oA13o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 じゃあ、ソースコードは上記な感じで更新。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__03--2049-tauri-o2oA14o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__03--2049-tauri-o2oA14o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 よし、リストボックスにファイル名が入ったぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            やったな！　これで課題No.2 もクリアーだぜ！
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            かかった時間は 5 ってところねえ。<br>
            見積りでは 2 ぐらいだったから、調査に 1.5 倍は取られるってとこねえ。
        </div>
        </div>
    </div>


    <h2>## [2025-06-02_Mon]</h2>
    <div class="div2">
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            フロントエンドに Vue、バックエンドに Tauri を使って、デスクトップアプリ制作を練習してみようぜ？<br>
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            さっそく、このブログを有効的に使い始めたか。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            これはブログじゃないのよ。<br>
            タグの直打ちで、文章載せるだけにしてはすごい労力……。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            プログラミング練習の最初の課題でよくあるのはメモ帳だな。<br>
            テキストボックスに文章を入力して、［保存］ボタンを押したらファイルに保存できて、<br>
            ［読込］ボタンを押したらテキストファイルを読込むんだぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            Tauri の公式ホームページはここにあるぜ。<br>
            📖 <a target="_blank" href="https://v2.tauri.app/">Tauri 2.0</a><br>
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            Tauri の Get Started を読んでいけだぜ。<br>
            インストールの説明は省くからな。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--1159-tauri-o1o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1159-tauri-o1o0.png">
        </a><br/>
        <div class="code-b">pnpm create tauri-app</div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 こんな感じでコマンドを打鍵すればいいはず。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--1205-tauri-o1o1o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1205-tauri-o1o1o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 色々尋ねられるので、こんな感じで進めたぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--1209-tauri-o1o2o0.png">
        <img src="/img/journal/202506/202506__program__02--1209-tauri-o1o2o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 Git Hub と連携しておいた。フォルダーの中身はこうなった。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--1212-tauri-o1o3o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1212-tauri-o1o3o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 VSCode で開く。 下側のステータスバーを見ると cargo がディレクトリーをチェックしてるので<br>
            わたしの PC はCPU処理がビジーだとフリーズすることがあるので、終わるまで待って……。<br>
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--1216-tauri-o1o4o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1216-tauri-o1o4o0.png">
        </a><br/>
        <div class="code-b">pnpm install</div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 （パワーシェルではなく）コマンドプロンプトで開いて、<br>
            上記のコマンドを打鍵。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--1220-tauri-o1o5o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1220-tauri-o1o5o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 📁［node_modules］というバカでかいフォルダーが自動生成される。  
        </div>
        </div>
        <div class="code-b">pnpm tauri dev</div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            上記のコマンドを打鍵。<br>
            わたしのケースでは、 379 個の大量のプログラムのコンパイルが走るので数分かかる。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--1225-tauri-o1o6o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1225-tauri-o1o6o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 途中で［http://localhost:1420/］という URL が出てくるが、気にしないでほしい。<br>
            ウェブブラウザーでは、フロントエンドの画面表示のテストはできるが、バックエンドのテストはできない。<br>
            動作確認に使うには不完全。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--1229-tauri-o1o7o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1229-tauri-o1o7o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 コンパイルが終わると、デスクトップアプリが出てくる。<br>
            動作確認はこれに対して行う。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            じゃあ、テキストボックスと、［保存］ボタン、［開く］ボタンを置いてくれだぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--1847-tauri-o1o8o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--1847-tauri-o1o8o0-mark.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 📄 <span class="code-w">src/App.vue</span>ファイルの <span class="code-b">&lt;template&gt;</span>タグの中に、いわゆる HTMLタグを打ち込んでいけばいいはずだぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--2004-tauri-o1o9o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2004-tauri-o1o9o0-mark.png">
        </a><br/>      
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 ひとまず、こんな感じか。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--2010-tauri-o1oA10o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2010-tauri-o1oA10o0.png">
        </a><br/>      
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 スタイルを除くと、ソースはたったの 24 行だぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ファイルパスを入れるテキストボックスと、ファイルを選択するダイアログボックスが出てくるボタンが欲しいぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--2024-tauri-o1oA11o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2024-tauri-o1oA11o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 テキストボックスと、ボタンの見た目に違いが小さいのイケてないが、<br>
            スタイルの修正は後回しにしよう。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ダイアログボックスを出すには、何か設定が要るんだよな。<br>
            調べるか。<br>
            📖 <a target="_blank" href="https://v2.tauri.app/plugin/dialog/">TAURI　＞　Dialog</a>
        </div>
        </div>
        <div class="code-b">pnpm tauri add dialog</div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--2116-tauri-o1oA12o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2116-tauri-o1oA12o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 なんか知らんけどエラー出た。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--2119-tauri-o1oA13o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2119-tauri-o1oA13o0-mark.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 えーと、つまり、<span class="code-b">"permissions": []</span>に<span class="code-b">"dialog:default"</span>を追加しようとしたら、<br>
            もう追加されてたからエラーってことかだぜ？<br>
            じゃあ<span class="code-b">"dialog:default"</span>を消しといたれ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--2124-tauri-o1oA14o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2124-tauri-o1oA14o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 多分、通ったか？
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--2135-tauri-o1oA15o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2135-tauri-o1oA15o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 こんな感じで改造して……。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--2142-tauri-o1oA16o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2142-tauri-o1oA16o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 ファイル選択ダイアログボックスが出たぜ、オッケー。<br>
            アンドロイドやアイフォンでは、ファイル選択ダイアログボックスは出せないそうだぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ファイル選択ダイアログボックスで最初に開いているフォルダーは、<br>
            テキストボックスに書いてあったパスにしてくれだぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👇 API は以下のページに書いてあるから……。<br>
            📖 <a target="_blank" href="https://v2.tauri.app/reference/javascript/dialog/#opendialogoptions">OpenDialogOptions</a><br>
            これ読んで直しておくかだぜ。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--2148-tauri-o1oA17o0-mark.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2148-tauri-o1oA17o0-mark.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 １行追加するだけでいけた。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            あとは、ファイルの書込みと読込みねぇ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👇 ファイルの読み書きの API は以下のページに書いてあるから……。<br>
            📖 <a target="_blank" href="https://v2.tauri.app/plugin/file-system/">File System</a><br>
            ページの上から順番に読んで実装しようぜ。
        </div>
        </div>
        <div class="code-b">pnpm tauri add fs</div><br>
        <a target="_blank" href="/img/journal/202506/202506__program__02--2212-tauri-o1oA18o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2212-tauri-o1oA18o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 テキストを読み込む方は上記の通りでいけた。
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--2309-tauri-o1oA19o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2309-tauri-o1oA19o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 テキストを書き込む方はイケてない。何かパーミッション設定でも足りてないのか？
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👇 説明書はあるけど。<br>
            📖 <a target="_blank" href="https://tauri.app/plugin/file-system/#examples">Examples</a>
        </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__program__02--2342-tauri-o1oA20o0.png">
        <img class="scr-shot" src="/img/journal/202506/202506__program__02--2342-tauri-o1oA20o0.png">
        </a><br/>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            👆 なんか分かってないけど、このように書いたらファイルへのテキスト書き込みはでけた。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            やったな！　微速微進、遅々前進だぜ！
        </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                Git Hub のリポジトリーへのリンクも貼っておきましょう。<br>
                📖 <a target="_blank" href="https://github.com/muzudho/notepad-on-tauri">muzudho / notepad-on-tauri</a>
            </div>
        </div>
    </div>

    <h2>## [2025-06-01_Sun]</h2>
    <div class="div2">
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202101__character__24-o2o2o3o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                文字は出せるかだぜ？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202101__character__28--kifuwarabe-futsu-o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                出せてるぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202108__character__12--ohkina-hiyoko-futsu2-o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                なんか画像がボヤけてない？<br/>サイズもマチマチだし。<br/>グレードダウンしてない？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                まあ、そこはゆくゆくは修正だな。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                さっそくイラストを新調したか、<br/>
                グレードダウンしてないかだぜ？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                Grok に描かせようと、Super Grok にプラン変更しようとしたら、<br/>
                クレジットカードを拒否されたので、あんたのお父んの手描きになったのよ。<br/>
                何でクレジットカードが拒否されたのか知らんけど。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                このトップページは近況を書く日記かだぜ？<br/>
                メインのコンテンツは何かないのかだぜ？
            </div>
        </div>
    </div>

    <h2>## [2025-05-24_Sat]</h2>
    <div class="div2">
        Grok の助けを得て、ホームページ作成中（＾ｑ＾）<br/>
        <img src="@/assets/img/202505__grok__25-warabenture-2.png" />
        <img src="@/assets/img/202505__grok__25-warabenture-1.png" /><br/>
    </div>
</template>