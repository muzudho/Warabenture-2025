# 起動方法

（パワーシェルではなく）コマンドプロンプトを使う。  

```shell
# ローカルPCで動作確認するなら：
npm run dev

## ウェブアプリケーション形式のファイルを出力するなら：
#npm run generate
```

## さくらのVPS の仮想マシンでは：

```shell
# ウェブアプリケーション側で、リポジトリーをクローンするなら：
cd warabenture-2025
git pull origin main

# ウェブアプリケーション形式のファイルを出力する：
npm run generate
# これをしてはいけない： npm run build # 403 Forbidden になる
```
