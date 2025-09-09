<template>

    <!-- デバイス互換機能 -->
    <compatible-device ref="compatibleDevice1Ref"/>

    <h3><router-link to="/blog/2025-07/25-fri">[2025-07-25_Fri]</router-link></h3>
    <section class="sec-3">


        <talk-image
            href="/img/journal/2025-07/202507__warabenture__25-1412-csvCleaning2OnTauri-o1o0.png"
            alt="レイアウトがスカスカなデスクトップ・アプリの画面"
        />


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👆</span>Vuetify3 に置き換え中なんだが、レイアウトがスカスカになってしまう……
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                じゃあ、画面に合わせてきっちり詰めるのは、できないんだろ。
        </talk-balloon>


        <talk-image
            href="/img/journal/2025-07/202507__warabenture__25-1437-csvCleaning2OnTauri-o1o0.png"
            alt="頑張って隙間を詰めたデスクトップ・アプリの画面"
        />


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👆</span>がんばって隙間を詰めてもこれぐらい。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                勝手にスマホにも対応しようとされるから、デスクトップ画面にピッタリ調整しようとすることはできないんじゃないの？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                次は、さっきのアプリをコピーして、わらシティを作ろう。
        </talk-balloon>


        <talk-image
            href="/img/journal/2025-07/202507__warabenture__25-1749-waraCity-o1o0.png"
            alt="わらシティの画面"
        />


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                何だぜ、これ？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                スーパー・ファミコン版のシム・シティのパクリを作るんだぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                さっそくこれを、ワラベンチャーのホームページ、つまりここにも移植しよう。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                あれっ？　画像が表示されない？
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                なんで同じ Vue 3 なのに、そのまんま移植できないの？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                HTML のソースに &ltv-img&gt タグがそのまんま出力されてる……、<br/>
                Nuxt に Vuetify3 が連携されていないんだ。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                じゃあ、連携しろだぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👇</span>以下の記事を頼りに Nuxt と Vuetify3 を連携する。<br/>
                <br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://note.com/doui_lab/n/n37a67a01981a">Vue3 + Nuxt3 + Vuetify3 のクイックスタート</a>
        </talk-balloon>


        <pre class="code-b">
pnpm remove vuetify
pnpm add vuetify@next sass @mdi/font
pnpm add -D vite-plugin-vuetify</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                📄 <span class="code-w">nuxt.config.ts</span> を編集。<br/>
                以下は追加部分。
        </talk-balloon>


        <pre class="code-b">
export default defineNuxtConfig({
    css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
    build: {
        transpile: ["vuetify"],
    },
})</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                📁 <span class="code-w">plugins</span> フォルダーを作成。<br/>
                📄 <span class="code-w">vuetify.ts</span> ファイルを作成。<br/>
        </talk-balloon>


        <pre class="code-b">
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                以下のコマンドを打鍵。
        </talk-balloon>


        <pre class="code-b">
pnpm install</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👇</span>連携できてるかな？<br/>
                <br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://warabenture.com/wara-city/map">わらシティ</a>
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                サイトが落ちてるぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                モジュールのバージョンが合ってないと Nuxt は容赦なく落とすらしい。<br/>
                📄 <span class="code-w">package.json</span> ファイルの中のバージョン指定を修正するぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                なんか sudo で build コマンドを叩いてしまったからか、ディレクトリーのパーミッションが<span class="code-w">root</span>になってて、<br/>
                アクセス権限がないとかいうエラーが出てた。<br/>
                ディレクトリーのパーミッションを<span class="code-w">ubuntu</span>に直すぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="code-w">http://localhost:3000/wara-city/map</span>というパスでは表示されて、<br/>
                <span class="code-w">https://warabenture.com/wara-city/map</span>というパスでは表示されない、<br/>
                Nuxt はなんかルーティングに流儀があんのかな？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="code-w">https://warabenture.com/wara-city/map</span>では表示されないが、<br/>
                <span class="code-w">http://warabenture.com/wara-city/map/</span>なら表示された……。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                なんでリンクをクリックしたら、<span class="code-w">http</span>を勝手に<span class="code-w">https</span>に変えられてしまうの？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                さくらインターネットで簡単に https に対応してくれるサービスとかないかなあ……。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👇</span>これを読めだぜ。<br/>
                <br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://manual.sakura.ad.jp/vps/startupscript/letsencrypt.html">Let's Encrypt</a>
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                スタートアップ・スクリプトを実行するために、OSの再インストールをしなければならないみたいだぜ、<br/>
                したくないぜ。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                スタートアップ時でなくても、今スクリプトを実行することはできないの？
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                無い。OSの再インストールは必須。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                Web サーバーを再構築するための手順みたいなものはまとめてないの？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                記憶の中にしかない……。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                ufw によるポートの開放、<br/>
                nginx の設定ファイル、<br/>
                他、何がある？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                SSH 接続のための cert 認証ファイル、<br/>
                ストレージのスケールアップに 5000円ぐらい出した気がするな、そしてそれの設定。<br/>
                nginx の設定。<br/>
                ディレクトリーのパーミッション設定。
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                git のインストールもあるのかしら？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="code-w">/etc/nginx/sites-enabled/default</span> が有効になってるのは問題があったので、<br/>
                unlink したというメモ書きは残っている。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                しゃあない、やるしかない、OS の再インストールを始めるぜ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                あっ！　さくらのVPSは、Ubuntu 用の Let's Encrypt のスタートアップスクリプトが無いぜ！
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                意味無
        </talk-balloon>


        <talk-balloon
            :src="hiyoko2Src"
            :alt="hiyoko2Alt"
            :name="hiyoko2Name"
            :device="compatibleDevice1Ref?.device">
                自力で Let's Encrypt の設定をするにしても、自動更新のスクリプトも書かないといけなくなるのかしら？
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                cron を使えってことだろ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                めんどくさ、 Nuxt の方で https に飛ばないようにする方法はないのかだぜ？
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                その設定はもっとめんどくさい。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                くそっ。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                じゃあ、SSL証明書、自力で取る。
        </talk-balloon>


        <talk-balloon
            :src="kifuwarabe2Src"
            :alt="kifuwarabe2Alt"
            :name="kifuwarabe2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👇</span>これを読めだぜ。<br/>
                <br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://savacan.space-i.com/lets-encrypt%E3%81%A7%E7%84%A1%E6%96%99ssl%E8%A8%BC%E6%98%8E%E6%9B%B8%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B/">Let’s Encryptで無料SSL証明書を取得する</a>
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                Let's encript を入れるには、<span class="code-w">Certbot</span> というツールをインストールしたらいいらしい。<br/>
                <span class="font-x2">👇</span>Certbot のインストール方法。<br/>
                <br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://www.ssdnodes.com/blog/install-lets-encrypt-on-ubuntu-certbot-apache-and-nginx/">How To Install Certbot on Ubuntu 24.04: Set Up Let’s Encrypt for Apache and Nginx</a>
        </talk-balloon>


        <pre class="code-b">
# Ubuntu 24.04
# Update packages and install Certbot
sudo apt update

# Step 1: Install Certbot on Ubuntu 24.04
sudo apt install -y certbot

# For Nginx users
sudo apt install -y python3-certbot-nginx

# Step 2: Install a Let’s Encrypt Certificate Using Certbot
sudo certbot --nginx -d example.com     🌟example.com のところには、SSL証明したいドメインを入れること。

# Step 3: Configuring Nginx with Let's Encrypt Certificates
sudo nano /etc/nginx/sites-enabled/default
</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👇</span>ここで nginx の設定ファイルを書くところだが、既存の設定ファイルは以下の通り。
                <br/>
                <span class="font-x2">📄</span><span class="code-w">/etc/nginx/sites-enabled/warabenture-2025</span>
        </talk-balloon>


        <pre class="code-b">
server {
    listen 80;
    server_name ＜🌟IPアドレス＞ ＜🌟ドメイン＞;
    root /home/ubuntu/warabenture-2025/dist;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👇</span>記事のサンプルは以下の通りだが、既存の設定もあるし……。
        </talk-balloon>


        <pre class="code-b">
server {
    listen 80;
    listen [::]:80;
    server_name www.example.com;
    access_log off;
    location / {
        rewrite ^ https://$host$request_uri? permanent;
    }
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name www.example.com;    🌟
    root /var/www/html;
    index index.php index.html index.htm index.nginx-debian.html;
    autoindex off;
    ssl_certificate /etc/letsencrypt/live/www.example.com/fullchain.pem;        🌟
    ssl_certificate_key /etc/letsencrypt/live/www.example.com/privkey.pem;      🌟
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👇</span>こうすればいいのか？<br/>
                <br/>
                <span class="font-x2">📄</span><span class="code-w">/etc/nginx/sites-enabled/warabenture-2025</span>
        </talk-balloon>


        <pre class="code-b">
server {
    listen 80;
    server_name ＜🌟IPアドレス＞ ＜🌟ドメイン＞;
    root /home/ubuntu/warabenture-2025/dist;
    index index.html;
    ssl_certificate /etc/letsencrypt/live/warabenture.com/fullchain.pem;        🌟
    ssl_certificate_key /etc/letsencrypt/live/warabenture.com/privkey.pem;      🌟

    location / {
        try_files $uri $uri/ /index.html;
    }
}</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                📄 <span class="code-w">fullchain.pem</span> ファイルとか置いてないけど……、<br/>
                もう作られてるのか？ 次へ。
        </talk-balloon>


        <pre class="code-b">
sudo nginx -t
sudo systemctl restart nginx

Step 4: Verifying Your Let's Encrypt Certificate Information</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                これで Let's encrypt の設定が終わってるはずだが、<br/>
                別に何も変わってるようには見えないな……。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                TCPポート80（HTTP）と、443（HTTPS）を開けておく必要があるようだが、<br/>
                さくらのVPSのコントロールパネルのパケットフィルターを見ると、どちらも全て許可している。<br/>
                じゃあ、開いてないのは Ubuntu の方か？<br/>
                <span class="code-b">ufw</span> コマンドを使って開けてみるか？
        </talk-balloon>


        <pre class="code-b">
sudo ufw status
    Status: inactive

sudo ufw allow 22
    Rules updated
    Rules updated (v6)

sudo ufw enable
    Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
    Firewall is active and enabled on system startup

sudo ufw status
Status: active

To                         Action      From
--                         ------      ----
80                         ALLOW       Anywhere                  
443/tcp                    ALLOW       Anywhere                  
22                         ALLOW       Anywhere                  
80 (v6)                    ALLOW       Anywhere (v6)             
443/tcp (v6)               ALLOW       Anywhere (v6)             
22 (v6)                    ALLOW       Anywhere (v6)</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                これでポートは開いてると思うが、まだダメか。
        </talk-balloon>


        <pre class="code-b">
sudo certbot certonly --webroot --webroot-path /var/www/html -m ＜🌟メールアドレス＞ -d warabenture.com --agree-tos -n
    Saving debug log to /var/log/letsencrypt/letsencrypt.log
    Certificate not yet due for renewal

    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Certificate not yet due for renewal; no action taken.
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👆</span>上のコマンドを入力すると、<br/>
                📄<span class="code-w">privkey.pem</span>や 📄<span class="code-w">fullchain.pem</span> が作られるらしい。
        </talk-balloon>


        <pre class="code-b">
sudo systemctl restart nginx</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                変わらん。次は Grok に聞いてみるか……。
        </talk-balloon>


        <pre class="code-b">
sudo apt update && sudo apt upgrade -y
sudo apt install certbot python3-certbot-nginx -y

sudo certbot --nginx -d warabenture.com     🌟このコマンドは２回目だからか失敗した
    🌟 /etc/letsencrypt/live/example.com/ ディレクトリーの下にはファイルが作られている。

sudo systemctl status certbot.timer
sudo certbot renew --dry-run
sudo ufw status
    🌟 80 と 443 が開いていることを確認する</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                <span class="font-x2">👇</span>設定は以上なので、設定できているか確認する。<br/>
                <br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://www.whynopadlock.com/">https://www.whynopadlock.com/</a><br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://www.ssllabs.com/ssltest/">https://www.ssllabs.com/ssltest/</a><br/>
                <br/>
                設定できてないな。
        </talk-balloon>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                Grok に聞いてみるか。
        </talk-balloon>


        <pre class="code-b">
🌟80の分から、SSLの記述を削除。
server {
    listen 80;
    server_name 49.212.140.81 os3-288-33577.vs.sakura.ne.jp warabenture.com www.warabenture.com;    🌟ドメイン追加。
    root /home/ubuntu/warabenture-2025/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}

🌟80の分を丸ごとコピーして、少し変えて、443の分を作る。
server {
    listen 443 ssl;
    server_name 49.212.140.81 os3-288-33577.vs.sakura.ne.jp warabenture.com www.warabenture.com;
    root /home/ubuntu/warabenture-2025/dist;
    index index.html;
    ssl_certificate /etc/letsencrypt/live/warabenture.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/warabenture.com/privkey.pem;

    location / {
        try_files $uri $uri/ /index.html;
    }
}</pre><br/>


        <pre class="code-b">
sudo nginx -t
sudo systemctl reload nginx
sudo certbot install --cert-name warabenture.com --nginx
sudo certbot --nginx -d warabenture.com -d www.warabenture.com
    🌟 質問されるのでとりあえず 1 を選ぶ</pre>


        <talk-balloon
            :src="oton2Src"
            :alt="oton2Alt"
            :name="oton2Name"
            :device="compatibleDevice1Ref?.device">
                通った。nginxの設定は、80 と 443 の２つ書く必要があったのか。
        </talk-balloon>

    </section>
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++++++++++++++++++
    // + インポート　＞　コンポーネント +
    // ++++++++++++++++++++++++++++++++++

    import CompatibleDevice from '@/components/CompatibleDevice.vue'
    import TalkBalloon from '@/components/TalkBalloon.vue';
    import TalkImage from '@/components/TalkImage.vue';


    // ##########
    // # コモン #
    // ##########
    //
    // よく使う設定をまとめたもの。特に不変のもの。
    //

    import oton2Src from "@/assets/img/talk/202506__character__01-1951-kifuwarabeNoOton-o1o2o0.png";
    const oton2Alt = "きふわらべのお父ん２";
    const oton2Name = "きふわらべのお父ん";
    import kifuwarabe2Src from "@/assets/img/talk/202506__character__01-2013-kifuwarabe-o1o1o0.png";
    const kifuwarabe2Alt = "きふわらべ２";
    const kifuwarabe2Name = "きふわらべ";
    import hiyoko2Src from "@/assets/img/talk/202506__character__01-2025-hiyoko-o1o1o0.png";
    const hiyoko2Alt = "ひよこ２";
    const hiyoko2Name = "ひよこ";


    // ################
    // # オブジェクト #
    // ################

    // ++++++++++++++++++++++++++++++++++
    // + オブジェクト　＞　装置の互換性 +
    // ++++++++++++++++++++++++++++++++++

    const compatibleDevice1Ref = ref<InstanceType<typeof CompatibleDevice> | null>(null);

</script>
