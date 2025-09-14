# 作業日誌

## [2025-09-15_Mon]

* 📄 `.env` ファイルを追加。開発環境と本番環境で URL を分けるため。

```shell
ubuntu@os3-288-33577:~$ free -h
               total        used        free      shared  buff/cache   available
Mem:           3.8Gi       3.0Gi       350Mi       1.0Mi       777Mi       874Mi
Swap:             0B          0B          0B
```

```
3. 対策：メモリ不足を解消
メモリ不足を解消してpnpm generateのハングを防ぐ具体的な手順を提案するよ！
(1) Swapを有効化
Swapがないのは致命的なので、すぐに設定しよう。4GB RAMなら1～2GBのSwapで十分。
```

```shell
# 1GBのSwapファイルを作成
sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# 永続化（再起動後も有効）
sudo nano /etc/fstab
# 末尾に以下を追加
/swapfile none swap sw 0 0

# 確認
free -h
```

```shell
ubuntu@os3-288-33577:~$ free -h
               total        used        free      shared  buff/cache   available
Mem:           3.8Gi       1.4Gi       1.9Gi       1.0Mi       783Mi       2.4Gi
Swap:          1.0Gi          0B       1.0Gi
```

```
(2) メモリキャッシュを解放
buff/cacheの777MiBを解放して、availableを増やす：
```

```shell
sudo sync; echo 3 | sudo tee /proc/sys/vm/drop_caches
free -h  # 確認
```

```
ubuntu@os3-288-33577:~$ free -h
               total        used        free      shared  buff/cache   available
Mem:           3.8Gi       2.7Gi       1.1Gi       1.0Mi       267Mi       1.2Gi
Swap:          1.0Gi          0B       1.0Gi
```

これでavailableが1.5GBくらいになれば、ビルドが安定する可能性アップ。  

(3) Nitroのプリレンダリングを軽量化  
プリレンダリングがメモリを食いすぎてるので、nuxt.config.tsを調整：  

```ts
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: false, // クローラー無効化
      routes: ['/', '/about', '/contact'], // 必要なルートだけ指定
      failOnError: false, // エラーで止まらない
    },
  },
});
```
