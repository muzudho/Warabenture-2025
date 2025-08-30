# クリーンアップ

キャッシュ・クリアー：  

```shell
pnpm store prune
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
