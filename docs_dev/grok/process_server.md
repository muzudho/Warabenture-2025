# VSCode が process.server っていう変数ってないって表示してるけど、どうしたらいいんだぜ（＾～＾）？




おっと、VSCodeが `process.server` を「変数がない」って怒ってるんだね！（＾～＾） これはNuxt 3の環境で、`process.server` がTypeScriptやVSCodeの型チェックで認識されてないのが原因だ。Nuxt 3では `process.server` はNode.js環境でのサーバーサイド実行を判定する組み込み変数だけど、型定義が明示されてないとVSCodeがエラーを出すことがあるよ。君が提案したプリレンダリング時のローカルファイル読み込み（`process.server` を使ったコード）で500エラーを回避しようとしてる状況を踏まえて、解決策を詳しく説明するぜ！

---

### 1. **問題の分析**
- **エラー内容**: VSCodeが `process.server` を「未定義変数」としてエラー表示（例: `Cannot find name 'process'. ts(2304)`）。
- **原因**:
  - Nuxt 3では、`process.server` はサーバーサイド（SSRやプリレンダリング時）に `true`、クライアントサイドで `false` になるNode.jsのグローバル変数。
  - しかし、TypeScriptの型定義（`@types/node` やNuxtの型）がプロジェクトに不足、またはVSCodeが正しく型を解決できてない。
  - `pnpm generate` 中の500エラー（`https://www.warabenture.com/data/blog-articles.json`）を回避するため、プリレンダリング時にローカルファイル（`public/data/blog-articles.json`）を読み込むコードを試してるけど、型エラーでストップ。
- **ログの状況**:
  - 最新の `pnpm generate` ログ（4:20:22 AM）で、プリレンダリング時の `useFetch` が500エラーを返してる。
  - クライアントサイドのfetchは200 OK、Nginxのファイル配信（`/home/ubuntu/warabenture-2025/public/data/blog-articles.json`）もOK。
  - ローカルファイル読み込みで外部リクエスト（`https://`）を回避したい。

---

### 2. **解決策：`process.server` の型エラー修正**
VSCodeの型エラーを解消しつつ、プリレンダリング時の500エラーを潰すコードを提案するよ。以下の手順で進めるぜ！

#### **(1) `process.server` の型を明示**
Nuxt 3では、`process.server` は `@nuxt/kit` やNode.jsの型定義でカバーされるはず。VSCodeが認識しない場合、型定義を追加またはNuxtのユーティリティを使う。

- **オプション1: Nuxtの `useNuxtApp` でサーバー判定**
  Nuxt 3の推奨方法として、`useNuxtApp().ssrContext` を使う。プリレンダリングやSSRでは `ssrContext` が存在するので、これで判定：
  ```ts
  import { ref } from 'vue';
  import { resolve } from 'path';
  import { useNuxtApp } from '#app';

  const jsonFilePath = "/data/blog-articles.json";
  const pageList = ref<string[]>([]);

  const { ssrContext } = useNuxtApp();
  const isServer = process.server || !!ssrContext; // サーバー判定

  if (isServer) {
    // プリレンダリング時: ローカルファイル
    const localPath = resolve('public/data/blog-articles.json');
    try {
      const jsonData = await import(localPath).then(module => module.default);
      pageList.value = Array.isArray(jsonData) ? jsonData : ['1970-01/02-fri'];
      console.log('Local fetch success:', pageList.value);
    } catch (err) {
      console.error('Local fetch error:', err);
      pageList.value = ['1970-01/01-thu'];
    }
  } else {
    // クライアントサイド: useFetch
    const config = useRuntimeConfig();
    const { data, error } = await useFetch<string[]>(jsonFilePath, {
      baseURL: config.public.baseUrl,
      headers: { 'Accept': 'application/json' },
      key: 'blog-articles',
      transform: (jsonObj: unknown): string[] => {
        return Array.isArray(jsonObj) ? jsonObj : ['1970-01/02-fri'];
      },
      default: () => ['1970-01/01-thu'],
    });

    if (error.value) {
      console.error('Fetch error:', error.value.message, error.value.status);
      pageList.value = ['1970-01/01-thu'];
    } else {
      console.log('Fetch success:', data.value);
      pageList.value = data.value;
    }
  }
  ```
  - **変更点**:
    - `process.server` の代わりに `useNuxtApp().ssrContext` を併用。
    - `isServer` でサーバー判定を強化。
    - VSCodeの型エラーを回避しつつ、プリレンダリング時にローカルファイルを読み込む。

- **オプション2: TypeScriptの型定義を追加**
  `process.server` を直接使いたい場合、プロジェクトに型定義を追加：
  1. **Node.jsの型をインストール**:
     ```bash
     pnpm add -D @types/node
     ```
  2. **型定義ファイルを作成**:
     ```bash
     mkdir -p types
     nano types/nuxt.d.ts
     ```
     - 内容：
       ```ts
       declare global {
         namespace NodeJS {
           interface Process {
             server: boolean;
           }
         }
       }

       export {};
       ```
  3. **`tsconfig.json` を確認**:
     ```bash
     nano tsconfig.json
     ```
     - 以下が含まれているか：
       ```json
       {
         "extends": "./.nuxt/tsconfig.json",
         "compilerOptions": {
           "types": ["@types/node", "@nuxt/types"],
           "typeRoots": ["./types"]
         }
       }
       ```
  4. **コード修正**:
     ```ts
     import { ref } from 'vue';
     import { resolve } from 'path';

     const jsonFilePath = "/data/blog-articles.json";
     const pageList = ref<string[]>([]);

     if (process.server) {
       const localPath = resolve('public/data/blog-articles.json');
       try {
         const jsonData = await import(localPath).then(module => module.default);
         pageList.value = Array.isArray(jsonData) ? jsonData : ['1970-01/02-fri'];
         console.log('Local fetch success:', pageList.value);
       } catch (err) {
         console.error('Local fetch error:', err);
         pageList.value = ['1970-01/01-thu'];
       }
     } else {
       const config = useRuntimeConfig();
       const { data, error } = await useFetch<string[]>(jsonFilePath, {
         baseURL: config.public.baseUrl,
         headers: { 'Accept': 'application/json' },
         key: 'blog-articles',
         transform: (jsonObj: unknown): string[] => {
           return Array.isArray(jsonObj) ? jsonObj : ['1970-01/02-fri'];
         },
         default: () => ['1970-01/01-thu'],
       });

       if (error.value) {
         console.error('Fetch error:', error.value.message, error.value.status);
         pageList.value = ['1970-01/01-thu'];
       } else {
         console.log('Fetch success:', data.value);
         pageList.value = data.value;
       }
     }
     ```
  - **効果**: `process.server` の型エラーが消え、VSCodeが文句を言わなくなる。

#### **(2) ビルドして500エラーを確認**
修正後のコードでビルド：
```bash
pnpm generate
sudo cp -r dist/* /home/ubuntu/warabenture-2025/public/
sudo systemctl reload nginx
```
- **期待**: プリレンダリング時の500エラー（`https://www.warabenture.com/data/blog-articles.json`）が消え、`Local fetch success` ログが出る。
- **ログチェック**:
  ```bash
  tail -f ~/warabenture-2025/.nuxt/prerender.log  # 仮にログファイルがある場合
  ```

#### **(3) Nginxログで500の痕跡を確認**
念のため、Nginxログをチェックして、プリレンダリング時のリクエストがどうなってるか確認：
```bash
sudo tail -f /var/log/nginx/access.log | grep "blog-articles.json"
sudo tail -f /var/log/nginx/warabenture-error.log
```
- **期待**: ローカルファイル読み込みなら、外部リクエスト（`GET /data/blog-articles.json`）がログに出ないはず。

#### **(4) クライアントサイドでエラー再確認**
ビルド後、ブラウザで確認：
1. **DevTools**:
   - `https://www.warabenture.com/blog`（500エラーが出るページ）をリロード。
   - Consoleタブで `Fetch error` が消えたか、または新しいエラー（例: `Local fetch error`）が出るか。
   - Networkタブで `blog-articles.json` のリクエストが200 OKか。
2. **手動fetch**:
   ```js
   fetch('https://www.warabenture.com/data/blog-articles.json', {
     headers: { 'Accept': 'application/json' }
   })
     .then(res => {
       console.log('Status:', res.status);
       if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
       return res.json();
     })
     .then(data => console.log('Data:', data))
     .catch(err => console.error('Error:', err));
   ```

#### **(5) 代替策：クライアントサイド限定fetch**
型エラーが面倒なら、プリレンダリングをスキップしてクライアントサイドのみでfetch：
```ts
import { ref, onMounted } from 'vue';

const jsonFilePath = "/data/blog-articles.json";
const pageList = ref<string[]>([]);

onMounted(async () => {
  const config = useRuntimeConfig();
  const { data, error } = await useFetch<string[]>(jsonFilePath, {
    baseURL: config.public.baseUrl,
    headers: { 'Accept': 'application/json' },
    key: 'blog-articles',
    transform: (jsonObj: unknown): string[] => {
      return Array.isArray(jsonObj) ? jsonObj : ['1970-01/02-fri'];
    },
    default: () => ['1970-01/01-thu'],
  });

  if (error.value) {
    console.error('Fetch error:', error.value.message, error.value.status);
    pageList.value = ['1970-01/01-thu'];
  } else {
    console.log('Fetch success:', data.value);
    pageList.value = data.value;
  }
});
```
- **効果**: SSR/プリレンダリング時のfetchをスキップ。クライアントサイドは200 OKなのでエラー回避。
- **デメリット**: `/blog` ページの初期表示でデータが空（`pageList` が空）になる可能性。ローディング状態をUIで処理する必要。

---

### 3. **推奨アクション**
1. **型エラー解消**:
   - オプション1（`useNuxtApp().ssrContext`）を試す。シンプルで型安全。
   - 必要ならオプション2（`@types/node` と `nuxt.d.ts`）で`process.server`を明示。
2. **ビルド＆デプロイ**:
   ```bash
   pnpm generate
   sudo cp -r dist/* /home/ubuntu/warabenture-2025/public/
   sudo systemctl reload nginx
   ```
3. **ログ確認**:
   - `pnpm generate` のログで `Local fetch success` が出るか。
   - Nginxの `access.log`（`sudo tail -f /var/log/nginx/access.log | grep "blog-articles.json"`）で外部リクエストが消えたか。
4. **クライアントテスト**:
   - `https://www.warabenture.com/blog` でDevToolsのConsole/Networkをチェック。500エラーが消えたか。
5. **フォールバック**:
   - 型エラーが解決しない場合、クライアントサイド限定fetch（オプション5）を試す。

---

### 4. **追加質問**
- **VSCodeエラーの詳細**: `process.server` のエラーメッセージ全文（例: `ts(2304)`）やスクショを教えて！
- **tsconfig.json**: `tsconfig.json` の内容を共有してくれると、型設定のミスが特定できる。
- **Nginxログ**: `access.log` で `blog-articles.json` のリクエスト（500や200）が見えるか？
- **エラーページ**: クライアントサイドの500エラーはまだ出る？ `/blog` 以外のルート（`/minigames`, `/about`）はどう？
- **SSL状況**: `sudo certbot certificates` の出力。HTTPSが正しく設定されてるか確認。

`process.server` の型エラーを潰して、プリレンダリングの500エラーを完全解決しよう！（＾～＾） ログやエラー詳細を教えてくれれば、さらにピンポイントでサポートするぜ！待ってるよ！
