# Web サーバーの起動方法

## nginx の再起動方法

nginx の設定ファイルにミスがないかチェック：  

```shell
sudo nginx -t
```

再起動：  

```shell
sudo systemctl restart nginx
```

成功したかチェック：  

```shell
sudo systemctl status nginx
```

サーバーが落ちた原因を調べるとき：  

```shell
sudo tail -n 50 /var/log/nginx/error.log
```