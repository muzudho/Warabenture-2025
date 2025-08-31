# クリーンアップ

npm, pnpm の両方のバージョンアップ：  

```shell
sudo npm install -g npm
# ubuntu ユーザーのパスワード入力

sudo npm install -g pnpm
# ubuntu ユーザーのパスワード入力
```

キャッシュ・クリアー：  

```shell
pnpm store prune
# （pnpm ではなく npm が悪さをしてるなら） npm cache clean --force
```

削除するフォルダーとファイル：  

```plaintext
📁 /
├─ 📁 .nuxt 削除
├─ 📁 .output 削除
├─ 📁 node_modules 削除
└─ 📄 pnpm-lock.yaml 削除
```

構築：  

```shell
pnpm install

# Nuxt のために
pnpm build
```

実行：  

```shell
pnpm dev
```
