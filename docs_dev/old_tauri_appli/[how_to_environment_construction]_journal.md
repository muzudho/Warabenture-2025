# ［環境構築する方法］ジャーナル

## [2025-06-02_Mon]

👇 インストールできているか確認。  

📖 [Microsoft C++ Build Tools](https://v2.tauri.app/start/prerequisites/#microsoft-c-build-tools)  

ダウンロードはしてあったが、インストールと再起動はされてなかった？  

WebView2 はインストール済み。  

Rust もインストール済みだが、以下のコマンド打鍵は必要そう。  

```shell
rustup default stable-msvc
    info: using existing install for 'stable-x86_64-pc-windows-msvc'
    info: default toolchain set to 'stable-x86_64-pc-windows-msvc'

    stable-x86_64-pc-windows-msvc unchanged - rustc 1.87.0 (17067e9ac 2025-05-09)
```

既にやっていたか。  

Node もインストール済み。

（パワーシェルではなく）コマンドプロンプトを使う：  

```shell
node -v
    v22.16.0

# npm ではなく pnpm を使う。
pnpm -v
    10.11.0
```

プロジェクトの作成は、以下のコマンドを打鍵する：  

```shell
pnpm create tauri-app
```

開発モードでサーバーを起動するには、以下のコマンドを打鍵する：  

```shell
cd tauri-app
pnpm install
pnpm tauri dev
```

👆 デスクトップアプリの方はこれで動く。  

フロントエンドを Tauri とする場合（デスクトップアプリ）、以下の構成となる：  

* 静的サイト生成（SSG）。
* シングル・ページ・アプリケーション（SPA）または、マルチ・ページ・アプリケーション（MPA）。
* サーバーベースの代替手段、例えばサーバー・サイド・レンダリング（SSR）などはサポートしていません。
* モバイル開発の場合、内部 IP でフロントエンドをホストできる何らかの開発サーバーが必要。
* アプリと API の間に適切なクライアント／サーバー関係を使用。

また、  

Tauri のフレームワークには Vite を推奨。  


## ダイアログを使えるようにするために

```shell
pnpm tauri add dialog
```

👇 以下のようなエラーが出る。  

```
> warabenture-2025-remake@0.1.0 tauri C:\Users\muzud\OneDrive\ドキュメント\GitHub\Warabenture-2025-pnpm
> tauri "add" "dialog"

        Info Installing Cargo dependency "tauri-plugin-dialog"...
    Updating crates.io index
      Adding tauri-plugin-dialog v2 to dependencies
        Info Installing NPM dependency "@tauri-apps/plugin-dialog@~2"...
Already up to date
Progress: resolved 108, reused 54, downloaded 0, added 0, done
Done in 811ms using pnpm v10.11.0
       Added permission `dialog:default` to `default` at C:\Users\muzud\OneDrive\ドキュメント\GitHub\Warabenture-2025-pnpm\src-tauri\capabilities\default.json
        Info Plugin initialization code already found on C:\Users\muzud\OneDrive\ドキュメント\GitHub\Warabenture-2025-pnpm\src-tauri\src/lib.rs

C:\Users\muzud\OneDrive\ドキュメント\GitHub\Warabenture-2025-pnpm>~dp0\..\.pnpm\@tauri-apps+cli@2.5.0\node_modules\@tauri-apps\cli\tauri.js" "add" "dialog"
指定されたパスが見つかりません。
 ELIFECYCLE  Command failed with exit code 1.
```

👇 `src-tauri/capabilities/default.json` で論理エラー。  

```json
  "permissions": [
    "core:default",
    "opener:default",
    "dialog:default",
    "dialog:default"    🌟重複
  ]
```

`"dialog:default"` のところは両方消してからコマンドを打鍵すると直る。  
