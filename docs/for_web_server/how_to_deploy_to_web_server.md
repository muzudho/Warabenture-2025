# ウェブ・サーバーへのデプロイ方法

```bash
# ウェブアプリケーション側で、リポジトリーをクローンするなら：
cd warabenture-2025
git pull origin main

# ウェブアプリケーション形式のファイルを出力する：
npm run generate
# これをしてはいけない： npm run build # 403 Forbidden になる
# sudo はいらないはず。`ubuntu` ユーザーでアクセスできるパーミッションにしてあるはず。
```
