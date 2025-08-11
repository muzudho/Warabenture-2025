<template>
    <h3>[2025-07-12_Sat]</h3>
    <section class="sec-3">
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
        <a target="_blank" href="/img/journal/2025-07/202507__warabenture__12--1713-csvCleaningOnTauri-o1o0.png">
            <img class="scr-shot" src="/img/journal/2025-07/202507__warabenture__12--1713-csvCleaningOnTauri-o1o0.png">
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
    </section>
</template>
