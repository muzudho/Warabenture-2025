# 作業日誌

## [2025-05-25_Sun]

```shell
node -v
    v22.16.0

# Nuxt.js のインストール
#   npm 使用
#   データを収集しているとのこと。参加にYesと回答。 https://github.com/nuxt/telemetry
#   公式モジュールは何も追加せず。
npx nuxi@latest init .
    nuxi@3.25.1

# ウェブサーバーを開発モードで起動。
npm run dev
    Nuxt 3.17.4 with Nitro 2.11.12
```

http://localhost:3000/

👆 画面が出てきた。


### ローカルPCの公開鍵を作る：

```powershell
ssh-keygen -t rsa -b 4096 -C "muzudho@warabenture-2025"
    Generating public/private rsa key pair.

Enter file in which to save the key (C:\Users\muzud/.ssh/id_rsa):
```

エンター・キーを押下。  

```
📁 `C:\Users\muzud/.ssh/`
    📄 id_rsa
    📄 id_rsa.pub   🌟公開鍵はこっち。
```

これでローカルPCの公開鍵はできた。  


### さくらのVPSサーバーのOSをインストールする：

* OSインストール方法： 標準OS
* OS: Ubuntu
* バージョン： `24.04 amd64`
* サーバーの管理ユーザー情報
    * 管理ユーザー名： `ubuntu`
    * 管理ユーザーのパスワード： `自分で入力したパスワードを使う`
    * SSHキー登録： `追加済みの公開鍵を使ってインストールする`
    * サーバーにインストールしたい公開鍵： 適切に選ぶ。
    * ［パスワードを利用したログインを許可する］にチェック。


### さくらVPSにログインしたい：  

さくらインターネットにログイン。  
VPSを選択。
［SSHキー管理］メニューをクリック　＞　［SSHキー追加］ボタン押下。
名前と、公開鍵の入力を求められる。  

名前を `Muzudho's White PC` とか入れる。  
公開鍵を入れる。


### Visual Studio Code を、SSH 接続できるように設定したい：

Microsoftの［Remote - SSH］エクステンションをインストールする。  

Visual Studio Code で [F1] キーを押下。（コマンドパレットが出る）  
`Remote-SSH: Open SSH Configuration File` を検索。  
`C:Users/Muzud/.ssh/config` を選択、無ければ作成。  

📄 `C:Users/Muzud/.ssh/config`:  

```conf
# Read more about SSH config files: https://linux.die.net/man/5/ssh_config
Host alias
    HostName hostname
    User user
```

以下のように変更。

```conf
# Read more about SSH config files: https://linux.die.net/man/5/ssh_config
Host sakura-vps
    HostName ＜IPアドレスを入れる＞
    User ubuntu
    IdentityFile ~/.ssh/id_rsa
    Port 22
```

VSCode のサイドバーの［Remote Explorer］から、［SSH Targets］＞［sakura-vps］にマウスカーソルを合わせ、［Connect in New Window］アイコンをクリック。  
（Ubuntu 24.02を入れたはずだから、［Linux］を選択）  
初回は［Continue］を選択。  
ルート権限を持ったユーザー（ubuntu）のパスワードが求められるので入れる。  

`/home/ubuntu` フォルダーを開けてみる。  


### VNCコンソールからも入れる。  

ユーザー名： ubuntu
パスワード： ワラベンチャーメインのパスワード。

#### Ubuntu の状態を確認：

```bash
sudo apt update

sudo systemctl status ssh
    動いてそう。

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    🌟 ubuntuユーザーのパスワード入力

sudo apt install -y nodejs

node -v
    v18.20.8

npm -v
    10.8.2

git --version
    git version 2.43.0
```


### リポジトリーをクローン

さくらのVPSに 📁 `/home/ubuntu/warabenture-2025` を置きたい。  

```shell
mkdir -p /home/ubuntu/warabenture-2025
cd /home/ubuntu/warabenture-2025
git clone https://github.com/muzudho/Warabenture-2025.git .
```

これでクローン完了。  


## さくらのVPSのスケールアップ

Grok に尋ねると、Nuxt + Vue を動かそうと思うと、メモリーは 4GB は欲しいらしい。  
年額 41,400円。月にすると 3,450円。ゲロ高。  

しかし、払わないとウェブ・アプリケーションの練習が進まない。  
払う方向で。  

* 以下の作業をこれから行う：
    * https://manual.sakura.ad.jp/vps/server/disk-expansion/ubuntu-24.04.html

VNCコンソール：

```shell
dpkg -l gdisk
    ※gdiskはインストールされているよう。

sudo gdisk -l /dev/vda
    ※情報が出てくる

lsblk /dev/vda
    ※情報が出てくる

sudo sgdisk -s /dev/vda
    ※なんかソートされる

sudo gdisk -l /dev/vda
    ※ Total free space が増えるはず。

sudo gdisk /dev/vda
    ※ 質問が出てくるので、以下を入力。 n は新しいパーティションを作るという意味。
n
    ※ Partition number はデフォルトのまま使うので、そのままエンター。

    ※ First sector もデフォルトのまま使うので、そのままエンター。

    ※ Last sector もデフォルトのまま使うので、そのままエンター。

    ※ Partition Type もデフォルトの［Linux filesystem］で問題がなければ、そのままエンター。

    ※ 以下のコマンドで、パーティション・テーブルを確認できる。
p
    ※ 問題がなければ、以下のコマンドを打鍵。
w
    ※ 最終確認。ディスクの書き換えが始まる。
y
```

以上はパーティションの作成。以下はファイルシステムの作成。

```shell
ls /dev/vda3
    ※ まだ存在しない場合、以下のコマンドでOSを再起動。
sudo reboot
    ※ 管理者のユーザー名、パスワードを再入力。
ls /dev/vda3
    ※ vda3 がデバイスとして認識されているはず。
sudo mkfs.ext4 /dev/vda3
    ※ フォーマットがされるはず。
sudo mkdir /data
sudo mount /dev/vda3 /data
    ※ /dev/vda3 を /data にマウントした。
mount | grep vda3
    ※ マウントされていることを確認できるはず。
lsblk /dev/vda
    ※ 確認。
id=$(sudo blkid -o value -s UUID /dev/vda3)
echo "UUID=${id} /data  ext4  defaults 0 2" | sudo tee -a /etc/fstab
    ※ OSを再起動してもマウントされるように設定した。
sudo reboot
    ※ サーバーを再起動。
    ※ 管理者のユーザー名、パスワードを再入力。
sudo gdisk -l /dev/vda
    ※ マウントされているか確認する。
```


### Nuxt をビルド：

```shell
npm install
npm run generate
```
