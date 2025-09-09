<template>

    <!-- デバイス互換機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <h3><router-link to="/blog/2025-07/12-sat">[2025-07-12_Sat]</router-link></h3>
    <section class="sec-3">


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="code-w">csv-cleaning-2-on-tauri</span>リポジトリーのパッケージ依存関係がおかしいらしい。<br/>
                📄<span class="code-w">cargo.toml</span>ファイルから、<span class="code-w">api-all</span>フィーチャーを除去。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👇 次に、<span class="code-w">cargo</span>を更新。
        </talk-balloon>


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


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                直らん。 📁<span class="code-w">node_modules</span> フォルダーを削除して、<span class="code-w">pnpm tauri dev</span>を打鍵。<br/>
                コンパイル・エラーの数はだいぶ減った。
        </talk-balloon>


        <pre class="code-b">
pnpm install
pnpm tauri dev</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                コンパイル・エラーの数はさらに減った。
        </talk-balloon>


        <pre class="code-b">
cd src-tauri
cargo add csv

cd ..
pnpm tauri dev</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                コンパイル・エラーは取れて、ウィンドウも表示されたけど、ウィンドウの内側は真っ白だ……。
        </talk-balloon>


        <TalkScreenShot
            :href="journal1Png"
            alt="デスクトップ・アプリケーションの画面"
        />


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                👆 シュリンクして、テキストだけ表示できるように直した。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                逐次的に<span class="code-w">&lt;main class="container"&gt;</span>なんてコツコツ書かずに、<br/>
                構造的に<span class="code-w">&lt;v-app&gt;&lt;v-main&gt;</span>を使うみたいだぜ？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                そうか、自動的にレスポンシブ・デザインに対応してもらうには、Ｗｅｂサイトに特化したフレームワークに丸投げした方がいいのか……。
        </talk-balloon>

    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++
    // + インポート　＞　公開画像 +
    // ++++++++++++++++++++++++++++

    import journal1Png from "/img/journal/2025-07/202507__warabenture__12-1713-csvCleaningOnTauri-o1o0.png";

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    import CompatibleDevice from '@/components/CompatibleDevice.vue'
    import TalkBalloon from '@/components/TalkBalloon.vue';
    import TalkScreenShot from '@/components/TalkScreenShot.vue';


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //

    import oton2Src from "@/assets/img/talk/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png";
    const oton2Alt = "きふわらべのお父ん２";
    const oton2Name = "きふわらべのお父ん";
    import kifuwarabe2Src from "@/assets/img/talk/202506__character__01-2013-kifuwarabe-o1o1o0.png";
    const kifuwarabe2Alt = "きふわらべ２";
    const kifuwarabe2Name = "きふわらべ";


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

</script>
