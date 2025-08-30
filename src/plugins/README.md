# plugins フォルダー

バックエンドが Nuxt か、 Tauri かで少し違う。  

* 最初は plugins フォルダーは無いので、作る。
* 📄 `plugins/vuetify.ts` ファイル作成。

📄 `src/main.ts` 抜粋:

```ts
import { createApp } from "vue";
import App from "./App.vue";

import 'vuetify/styles'; // VuetifyのCSSをインポート
import pluginsVuetify from '../plugins/vuetify'; // さっきのプラグインファイルをインポート


createApp(App)
    .use(pluginsVuetify)   // VueアプリにVuetifyを登録
    .mount("#app");
```
