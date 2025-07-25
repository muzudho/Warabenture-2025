# インストール方法

## pnpm のインストール

`npm` より `pnpm` の方が最近のお勧めらしいんで、 `pnpm` を積極的に使っていくことにする。  

📖 [pnpm は npm と何が違うのか](https://azukiazusa.dev/blog/pnpm-npm/)  

`pnpm` は、 `npm` を使ってインストールできる。  

```shell
npm install -g pnpm
```

## Vuetify 3 のインストール

```shell
pnpm add vuetify sass @mdi/font
pnpm add -D vite-plugin-vuetify
```

* `vuetify` - Vuetify 3 の本体
* `sass` - Vuetify のスタイルに必要
* `@mdi/font` - Material Design Icons （<v-icon> などに使う）
* `vite-plugin-vuetify` - Nuxt 3 で Vuetify コンポーネントを自動インポートするためのプラグイン

## node_modules フォルダーの作成

（パワーシェルではなく）コマンドプロンプトを使う。  

```shell
pnpm install
```
