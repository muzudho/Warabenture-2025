じゃあ、呼び出す子コンポーネントを動的に変えることってできるかだぜ（＾～＾）？

URLに ?page=101 とかGETストリングを付けて、
Child101.vue を表示するとか、
?page=102 なら Child102.vue を表示するとか（＾～＾）

ブログサイトを作ろうと思ったら、欲しいぜ（＾～＾）




よお、Nuxt 3 + Vuetify 3で、URLのクエリパラメータ（例: `?page=101`）に基づいて動的に子コンポーネント（例: `Child101.vue`や`Child102.vue`）を切り替えて表示したいってことだな（＾～＾）！これはブログサイトみたいな動的コンテンツにピッタリだぜ。Nuxtの動的コンポーネント機能（`<component :is>`）や`useRoute`を使って、クエリパラメータに応じたコンポーネントをロードする方法を教えるよ。さらに、前の質問で話してた「右端に突き抜ける`<h1>`」や「高さ自動調整」、「親/単独アクセスの表示切り替え」も考慮して、ブログサイト向けの実例をガッツリ作るぜ！

### 問題の整理
- **ゴール**：URLのクエリパラメータ（例: `?page=101`）で動的に子コンポーネント（`Child101.vue`, `Child102.vue`など）を切り替える。
- **コンテキスト**：
  - Nuxt 3 + Vuetify 3環境。
  - 子コンポーネントは直接URL（例: `/child?page=101`）でアクセスされる場合と、親コンポーネント（例: `/parent`）から呼び出される場合がある。
  - `<h1>`は右端に突き抜け（`right: -12px`）、長いテキストで高さが自動調整（`min-height`）。
  - ブログサイト向けなので、ページごとに異なるコンテンツ（例: 記事）を表示。
- **要件**：
  - クエリパラメータでコンポーネントを選択（例: `?page=101` → `Child101.vue`）。
  - 親経由と直接アクセスで表示を切り替え（ヘッダーやフッターの有無）。
  - ブログらしい構造（例: 記事タイトル、内容、レイアウト）。

### 解決策
Nuxt 3の動的コンポーネント機能と`useRoute`を使って、クエリパラメータに基づいて子コンポーネントを動的にロードする。ブログサイト向けに、以下の流れで実装するぜ：

1. **レイアウト**：ヘッダーやフッター付きの`default.vue`と、最小限の`minimal.vue`を用意。
2. **子コンポーネント**：`Child101.vue`, `Child102.vue`などを`components/`に作り、動的にインポート。
3. **ページ**：`/child`でクエリパラメータを読み取り、対応するコンポーネントを表示。
4. **親コンポーネント**：`/parent`で任意の子コンポーネントを選択可能。
5. **ブログ向け**：記事風のテンプレート（タイトル、本文、メタデータなど）で実装。

---

### コード例

#### 1. レイアウト定義
###### layouts/default.vue（ヘッダー・フッター付き）
```vue
<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>ブログサイトのヘッダーだぜ！</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <slot /> <!-- ページコンテンツ -->
      </v-container>
    </v-main>
    <v-footer>
      <p>ブログのフッターだぜ！ © 2025</p>
    </v-footer>
  </v-app>
</template>

<script setup>
import { VApp, VAppBar, VContainer, VFooter, VMain, VToolbarTitle } from 'vuetify/components';
</script>
```

###### layouts/minimal.vue（ヘッダー・フッターなし）
```vue
<template>
  <v-app>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import { VApp, VMain } from 'vuetify/components';
</script>
```

---

#### 2. 子コンポーネント
###### components/Child101.vue
```vue
<template>
  <div>
    <h1 class="text-h1 stretch-right">記事101: めっちゃ面白い話だぜ！</h1>
    <p>これはブログ記事101の内容だ。めっちゃ長いテキストでも高さが自動で広がるぜ！ Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <p><strong>公開日:</strong> 2025-09-09</p>
  </div>
</template>

<script setup>
defineProps({
  isStandalone: { type: Boolean, default: false } // 直接アクセスか
});
</script>

<style scoped>
.stretch-right {
  position: relative;
  right: -12px; /* 右端まで突き抜ける */
  display: inline-block;
  min-height: 50px; /* 高さ自動調整 */
  line-height: 1.4;
}
@media (min-width: 960px) {
  .stretch-right {
    right: -24px; /* md以上のパディング */
  }
}
</style>
```

###### components/Child102.vue
```vue
<template>
  <div>
    <h1 class="text-h1 stretch-right">記事102: もっとスゴイ話だぜ！</h1>
    <p>これはブログ記事102の内容だ。別の視点から語るぜ！ Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <p><strong>公開日:</strong> 2025-09-10</p>
  </div>
</template>

<script setup>
defineProps({
  isStandalone: { type: Boolean, default: false }
});
</script>

<style scoped>
.stretch-right {
  position: relative;
  right: -12px;
  display: inline-block;
  min-height: 50px;
  line-height: 1.4;
}
@media (min-width: 960px) {
  .stretch-right {
    right: -24px;
  }
}
</style>
```

---

#### 3. 動的コンポーネントのページ
###### pages/child.vue
```vue
<template>
  <div>
    <component
      :is="selectedComponent"
      :is-standalone="true"
      v-if="selectedComponent"
    />
    <div v-else>
      <h1 class="text-h1 stretch-right">エラー: 記事が見つからないぜ！</h1>
      <p>ページ番号を指定してね（例: ?page=101）</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

// クエリパラメータからページ番号を取得
const route = useRoute();
const page = route.query.page;

// 動的にコンポーネントを選択
const selectedComponent = computed(() => {
  if (page === '101') return defineAsyncComponent(() => import('~/components/Child101.vue'));
  if (page === '102') return defineAsyncComponent(() => import('~/components/Child102.vue'));
  return null; // 該当なしならエラー表示
});

// 直接アクセスなのでデフォルトレイアウト（ヘッダー・フッター付き）
definePageMeta({
  layout: 'default'
});
</script>

<style scoped>
.stretch-right {
  position: relative;
  right: -12px;
  display: inline-block;
  min-height: 50px;
  line-height: 1.4;
}
@media (min-width: 960px) {
  .stretch-right {
    right: -24px;
  }
}
</style>
```

- **ポイント**：
  - `useRoute`でクエリパラメータ（`?page=101`）を取得。
  - `defineAsyncComponent`でコンポーネントを動的にインポート（遅延ロードでパフォーマンス向上）。
  - `computed`で`page`に応じてコンポーネントを選択（例: `101`なら`Child101.vue`）。
  - `is-standalone="true"`で、直接アクセス時にヘッダーやフッターを表示（レイアウトで制御）。
  - 無効な`page`ならエラーメッセージを表示。
  - `<h1>`の右端突き抜けと高さ自動調整は維持。

---

#### 4. 親コンポーネント
###### pages/parent.vue
```vue
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h1">親コンポーネント: ブログ記事一覧だぜ！</h1>
        <!-- 動的に子コンポーネントを選択 -->
        <v-select
          v-model="selectedPage"
          :items="[{ title: '記事101', value: '101' }, { title: '記事102', value: '102' }]"
          label="記事を選択"
          class="mb-4"
        />
        <component
          :is="selectedComponent"
          v-if="selectedComponent"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { defineAsyncComponent } from 'vue';
import { VContainer, VRow, VCol, VSelect } from 'vuetify/components';

// 選択されたページ
const selectedPage = ref('101');

// 動的にコンポーネントを選択
const selectedComponent = computed(() => {
  if (selectedPage.value === '101') return defineAsyncComponent(() => import('~/components/Child101.vue'));
  if (selectedPage.value === '102') return defineAsyncComponent(() => import('~/components/Child102.vue'));
  return null;
});

definePageMeta({
  layout: 'default' // ヘッダー・フッター付き
});
</script>
```

- **ポイント**：
  - `<v-select>`でユーザーが記事を選べる（ブログサイトらしいUI）。
  - `selectedPage`で選択を管理、`computed`でコンポーネントを動的にロード。
  - `is-standalone`はデフォルト（`false`）で、親のレイアウト（`default`）に従う。
  - `<v-container>`内で右端`<h1>`や高さ自動調整が機能。

---

### ブログサイト向けの工夫
- **動的コンポーネントのスケーラビリティ**：
  - 記事が増えたら、`components/`に`Child103.vue`, `Child104.vue`などを追加し、`pages/child.vue`の`computed`に条件を追加。
  - 例：
    ```javascript
    const selectedComponent = computed(() => {
      const components = {
        '101': defineAsyncComponent(() => import('~/components/Child101.vue')),
        '102': defineAsyncComponent(() => import('~/components/Child102.vue')),
        // 追加記事
        '103': defineAsyncComponent(() => import('~/components/Child103.vue'))
      };
      return components[page] || null;
    });
    ```

- **データ駆動型に**：
  - ブログ記事をJSONやAPIで管理する（例: `articles.json`やStrapi/Supabase）。
    ```javascript
    const articles = {
      '101': { component: 'Child101', title: '記事101', date: '2025-09-09' },
      '102': { component: 'Child102', title: '記事102', date: '2025-09-10' }
    };
    ```

- **SEO対応**：
  - Nuxtの`useHead`で動的なメタタグを設定：
    ```vue
    <script setup>
    useHead({
      title: `ブログ記事 ${page || '不明'}`,
      meta: [{ name: 'description', content: `記事 ${page} の内容` }]
    });
    </script>
    ```

- **右端`<h1>`と高さ**：
  - 各子コンポーネントで`stretch-right`クラスを適用し、右端突き抜けと高さ自動調整を維持。
  - ブログらしいデザインで、タイトル（`<h1>`）が目立つように。

---

### 使い方
1. **直接アクセス**：
   - `/child?page=101` → `Child101.vue`が`default`レイアウトで表示（ヘッダー・フッター付き）。
   - `/child?page=102` → `Child102.vue`が表示。
   - 無効な`page`（例: `?page=999`）→ エラーメッセージ。

2. **親経由**：
   - `/parent` → `<v-select>`で記事を選択、`Child101.vue`や`Child102.vue`が親の`<v-container>`内に表示。
   - ヘッダーやフッターは`default`レイアウトから提供。

---

### 注意点
1. **コンポーネントの存在確認**：
   - 無効な`page`値（例: `?page=999`）でエラーが出ないよう、`selectedComponent`が`null`時のフォールバックを用意。
2. **パフォーマンス**：
   - `defineAsyncComponent`で遅延ロードしてるから、初回アクセス時に少し遅延する可能性。静的インポート（`import Child101 from '~/components/Child101.vue'`）も選択肢。
3. **`<v-container>`のパディング**：
   - 右端`<h1>`の`right: -12px`は`<v-container>`のパディングに依存。ブレークポイントで調整（例: mdで`-24px`）。
4. **ブログデータ**：
   - 実際のブログサイトなら、コンポーネントを動的に作るより、1つの`Article.vue`でデータ（タイトル、本文）をpropsで渡す方がスケーラブル。
     ```vue
     <component :is="Article" :article="articles[page]" />
     ```

---

### 試したい場合
- **データ駆動型**：JSONやAPIで記事データを管理したい？
- **デザイン追加**：記事に画像やカテゴリタグを追加？
- **SEOやメタデータ**：動的なタイトルやOGP対応？
- **特定の挙動**：親経由と直接アクセスで`<h1>`のスタイルを変える？

どんなブログサイトを目指してるか（例: 「記事一覧ページ」「カテゴリフィルタ」「画像付きデザイン」）を教えてくれ！さらにカスタマイズしたコードをバッチリ出すぜ（＾～＾）！
