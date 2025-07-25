# インストール方法

## pnpm のインストール

`npm` より `pnpm` の方が最近のお勧めらしいんで、 `pnpm` を積極的に使っていくことにする。  

📖 [pnpm は npm と何が違うのか](https://azukiazusa.dev/blog/pnpm-npm/)  

`pnpm` は、 `npm` を使ってインストールできる。  

```shell
npm install -g pnpm
# sudo はいらないはず。`ubuntu` ユーザーでアクセスできるパーミッションにしてあるはず。
```

## Nuxt と Vuetify 3 の連携

* [Vue3 + Nuxt3 + Vuetify3 のクイックスタート](https://note.com/doui_lab/n/n37a67a01981a)

```shell
# pnpm remove vuetify
pnpm add vuetify@next sass @mdi/font
pnpm add -D vite-plugin-vuetify
```

* `vuetify` - Vuetify 2 になってしまう
* `vuetify@next` - Vuetify 3 の本体
* `sass` - Vuetify のスタイルに必要
* `@mdi/font` - Material Design Icons （<v-icon> などに使う）
* `vite-plugin-vuetify` - Nuxt 3 で Vuetify コンポーネントを自動インポートするためのプラグイン

### 📄 `nuxt.config.ts` を編集

追加部分：  

```ts
export default defineNuxtConfig({
    css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
    build: {
        transpile: ["vuetify"],
    },
})
```

### 📁 `plugins` フォルダーを作成

📄 `vuetify.ts` ファイルを作成：

```ts
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});
```

## node_modules フォルダーの作成

（パワーシェルではなく）コマンドプロンプトを使う。  

```shell
pnpm install
# sudo はいらないはず。`ubuntu` ユーザーでアクセスできるパーミッションにしてあるはず。
```
