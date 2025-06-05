# ［環境構築する方法］ログブック

📖 [What is Tauri?](https://v2.tauri.app/start/)  

👆 公式ページを読むのがよい。  

パワーシェルではなく、コマンドプロンプトを使う。  

```shell
# C:\Users\muzud\OneDrive\ドキュメント\GitHub\Warabenture-2025-pnpm>

# npm を使って、 pnpm をインストール。
npm install -g pnpm

# pnpm を使って、tauri-app テンプレートをベースにプロジェクトを作成。
pnpm create tauri-app
    * プロジェクト名を `warabenture-2025-remake` にする。
    * Identifier （URLを逆順にしたようなやつ）を設定。
    * フロントエンドの言語を `TypeScript / JavaScript` に設定。
    * パッケージ・マネージャーを `pnpm` に設定。
    * UI テンプレートを `Vue` に設定。
    * UI フレーバーを `TypeScript` に設定。
```

以下のようなメッセージが表示される。  

```
Template created! To get started run:
  cd warabenture-2025-remake
  pnpm install
  pnpm tauri android init

For Desktop development, run:
  pnpm tauri dev

For Android development, run:
  pnpm tauri android dev
```

👇 以下のコマンドを打鍵。  

```shell
pnpm tauri dev
```

👇 以下のエラーが出る。  

```
error: unknown start of token: \u{0}
 --> C:\Users\muzud\.cargo\registry\src\index.crates.io-1949cf8c6b5b557f\cc-1.2.25\src\lib.rs:1:1
  |
1 | ␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀...␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀␀
  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^...^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  |
  = help: source files must contain UTF-8 encoded text, unexpected null bytes might occur when a different encoding is used
  = note: character appears 173041 more times

error: could not compile `cc` (lib) due to 1 previous error
warning: build failed, waiting for other jobs to finish...
 ELIFECYCLE  Command failed with exit code 101.
```

示されている 📄 `lib.rs` ファイルが、どうもバイナリ・ファイルになっているようだ。破損しているのだろう。  
仕方ないので 📁 `cc-1.2.25` ディレクトリーごと削除してみる。  

👇 再度、以下のコマンドを打鍵。  

```shell
pnpm tauri dev
```

すると上手くコンパイルが完了した。  

## Nuxt

先に Nuxt を環境構築した方がよかったか？  

```shell
npx nuxi@latest init my-tauri-app
  * パッケージ・マネージャーは `pnpm` を選択。
  * git リポジトリーの初期化は `Yes` を選択。
  * 公式モジュールで欲しいものはスペースキーで選択。とりあえず全部不要で。
```

これで 📁 `my-tauri-app` フォルダーができた。  

📄 `nuxt.config.ts` を以下のように設定。  

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr : false   // 追加。Tauri はサーバー・サイド・レンダリング（SSR）をサポートしないから。
})
```


## Nuxt と Tauri の連携

📄 `src-tauri/tauri.conf.json` を編集。  

```json
{
  "$schema": "https://schema.tauri.app/config/2",
  "productName": "warabenture-2025-remake",
  "version": "0.1.0",
  "identifier": "com.warabenture-2025-remake.app",
  "build": {
    "beforeDevCommand": "pnpm dev",
    "devUrl": "http://localhost:1420",
    "beforeBuildCommand": "pnpm build",
    "frontendDist": "../dist"
  },
  "app": {
    "windows": [
      {
        "title": "warabenture-2025-remake",
        "width": 800,
        "height": 600
      }
    ],
    "security": {
      "csp": null
    }
  },
  "bundle": {
    "active": true,
    "targets": "all",
    "icon": [
      "icons/32x32.png",
      "icons/128x128.png",
      "icons/128x128@2x.png",
      "icons/icon.icns",
      "icons/icon.ico"
    ]
  }
}
```
