<template>
    <the-parent-header/>

    <h2>ブログ</h2>
    <section class="sec-2">
        上の方の記事が新しいぜ（＾▽＾）！<br/>
    </section>

    <h3>[2025-07-25_Fri]</h3>
    <section class="sec-3">
        <a target="_blank" href="/img/journal/202507/202507__warabenture__25--1412-csvCleaning2OnTauri-o1o0.png">
            <img class="scr-shot" src="/img/journal/202507/202507__warabenture__25--1412-csvCleaning2OnTauri-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>Vuetify3 に置き換え中なんだが、レイアウトがスカスカになってしまう……
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                じゃあ、画面に合わせてきっちり詰めるのは、できないんだろ。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202507/202507__warabenture__25--1437-csvCleaning2OnTauri-o1o0.png">
            <img class="scr-shot" src="/img/journal/202507/202507__warabenture__25--1437-csvCleaning2OnTauri-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>がんばって隙間を詰めてもこれぐらい。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                勝手にスマホにも対応しようとされるから、デスクトップ画面にピッタリ調整しようとすることはできないんじゃないの？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                次は、さっきのアプリをコピーして、わらシティを作ろう。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202507/202507__warabenture__25--1749-waraCity-o1o0.png">
            <img class="scr-shot" src="/img/journal/202507/202507__warabenture__25--1749-waraCity-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                何だぜ、これ？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                スーパー・ファミコン版のシム・シティのパクリを作るんだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                さっそくこれを、ワラベンチャーのホームページ、つまりここにも移植しよう。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                あれっ？　画像が表示されない？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                なんで同じ Vue 3 なのに、そのまんま移植できないの？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                HTML のソースに &ltv-img&gt タグがそのまんま出力されてる……、<br/>
                Nuxt に Vuetify3 が連携されていないんだ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                じゃあ、連携しろだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👇</span>以下の記事を頼りに Nuxt と Vuetify3 を連携する。<br/>
                <br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://note.com/doui_lab/n/n37a67a01981a">Vue3 + Nuxt3 + Vuetify3 のクイックスタート</a>
            </div>
        </div>
        <pre class="code-b">
pnpm remove vuetify
pnpm add vuetify@next sass @mdi/font
pnpm add -D vite-plugin-vuetify</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                📄 <span class="code-w">nuxt.config.ts</span> を編集。<br/>
                以下は追加部分。
            </div>
        </div>
        <pre class="code-b">
export default defineNuxtConfig({
    css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
    build: {
        transpile: ["vuetify"],
    },
})</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                📁 <span class="code-w">plugins</span> フォルダーを作成。<br/>
                📄 <span class="code-w">vuetify.ts</span> ファイルを作成。<br/>
            </div>
        </div>
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
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                以下のコマンドを打鍵。
            </div>
        </div>
        <pre class="code-b">
pnpm install</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👇</span>連携できてるかな？<br/>
                <br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://warabenture.com/wara-city/map">わらシティ</a>
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                サイトが落ちてるぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                モジュールのバージョンが合ってないと Nuxt は容赦なく落とすらしい。<br/>
                📄 <span class="code-w">package.json</span> ファイルの中のバージョン指定を修正するぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                なんか sudo で build コマンドを叩いてしまったからか、ディレクトリーのパーミッションが<span class="code-w">root</span>になってて、<br/>
                アクセス権限がないとかいうエラーが出てた。<br/>
                ディレクトリーのパーミッションを<span class="code-w">ubuntu</span>に直すぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="code-w">http://localhost:3000/wara-city/map</span>というパスでは表示されて、<br/>
                <span class="code-w">https://warabenture.com/wara-city/map</span>というパスでは表示されない、<br/>
                Nuxt はなんかルーティングに流儀があんのかな？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="code-w">https://warabenture.com/wara-city/map</span>では表示されないが、<br/>
                <span class="code-w">http://warabenture.com/wara-city/map/</span>なら表示された……。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                なんでリンクをクリックしたら、<span class="code-w">http</span>を勝手に<span class="code-w">https</span>に変えられてしまうの？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                さくらインターネットで簡単に https に対応してくれるサービスとかないかなあ……。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👇</span>これを読めだぜ。<br/>
                <br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://manual.sakura.ad.jp/vps/startupscript/letsencrypt.html">Let's Encrypt</a>
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                スタートアップ・スクリプトを実行するために、OSの再インストールをしなければならないみたいだぜ、<br/>
                したくないぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                スタートアップ時でなくても、今スクリプトを実行することはできないの？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                無い。OSの再インストールは必須。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                Web サーバーを再構築するための手順みたいなものはまとめてないの？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                記憶の中にしかない……。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                ufw によるポートの開放、<br/>
                nginx の設定ファイル、<br/>
                他、何がある？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                SSH 接続のための cert 認証ファイル、<br/>
                ストレージのスケールアップに 5000円ぐらい出した気がするな、そしてそれの設定。<br/>
                nginx の設定。<br/>
                ディレクトリーのパーミッション設定。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                git のインストールもあるのかしら？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="code-w">/etc/nginx/sites-enabled/default</span> が有効になってるのは問題があったので、<br/>
                unlink したというメモ書きは残っている。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                しゃあない、やるしかない、OS の再インストールを始めるぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                あっ！　さくらのVPSは、Ubuntu 用の Let's Encrypt のスタートアップスクリプトが無いぜ！
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                意味無
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                自力で Let's Encrypt の設定をするにしても、自動更新のスクリプトも書かないといけなくなるのかしら？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                cron を使えってことだろ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                めんどくさ、 Nuxt の方で https に飛ばないようにする方法はないのかだぜ？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                その設定はもっとめんどくさい。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                くそっ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                じゃあ、SSL証明書、自力で取る。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👇</span>これを読めだぜ。<br/>
                <br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://savacan.space-i.com/lets-encrypt%E3%81%A7%E7%84%A1%E6%96%99ssl%E8%A8%BC%E6%98%8E%E6%9B%B8%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B/">Let’s Encryptで無料SSL証明書を取得する</a>
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                Let's encript を入れるには、<span class="code-w">Certbot</span> というツールをインストールしたらいいらしい。<br/>
                <span class="font-x2">👇</span>Certbot のインストール方法。<br/>
                <br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://www.ssdnodes.com/blog/install-lets-encrypt-on-ubuntu-certbot-apache-and-nginx/">How To Install Certbot on Ubuntu 24.04: Set Up Let’s Encrypt for Apache and Nginx</a>
            </div>
        </div>
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
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👇</span>ここで nginx の設定ファイルを書くところだが、既存の設定ファイルは以下の通り。
                <br/>
                <span class="font-x2">📄</span><span class="code-w">/etc/nginx/sites-enabled/warabenture-2025</span>
            </div>
        </div>
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
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👇</span>記事のサンプルは以下の通りだが、既存の設定もあるし……。
            </div>
        </div>
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
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👇</span>こうすればいいのか？<br/>
                <br/>
                <span class="font-x2">📄</span><span class="code-w">/etc/nginx/sites-enabled/warabenture-2025</span>
            </div>
        </div>
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
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                📄 <span class="code-w">fullchain.pem</span> ファイルとか置いてないけど……、<br/>
                もう作られてるのか？ 次へ。
            </div>
        </div>
        <pre class="code-b">
sudo nginx -t
sudo systemctl restart nginx

Step 4: Verifying Your Let's Encrypt Certificate Information</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                これで Let's encrypt の設定が終わってるはずだが、<br/>
                別に何も変わってるようには見えないな……。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                TCPポート80（HTTP）と、443（HTTPS）を開けておく必要があるようだが、<br/>
                さくらのVPSのコントロールパネルのパケットフィルターを見ると、どちらも全て許可している。<br/>
                じゃあ、開いてないのは Ubuntu の方か？<br/>
                <span class="code-b">ufw</span> コマンドを使って開けてみるか？
            </div>
        </div>
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
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                これでポートは開いてると思うが、まだダメか。
            </div>
        </div>
        <pre class="code-b">
sudo certbot certonly --webroot --webroot-path /var/www/html -m ＜🌟メールアドレス＞ -d warabenture.com --agree-tos -n
    Saving debug log to /var/log/letsencrypt/letsencrypt.log
    Certificate not yet due for renewal

    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    Certificate not yet due for renewal; no action taken.
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>上のコマンドを入力すると、<br/>
                📄<span class="code-w">privkey.pem</span>や 📄<span class="code-w">fullchain.pem</span> が作られるらしい。
            </div>
        </div>
        <pre class="code-b">
sudo systemctl restart nginx</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                変わらん。次は Grok に聞いてみるか……。
            </div>
        </div>
        <pre class="code-b">
sudo apt update && sudo apt upgrade -y
sudo apt install certbot python3-certbot-nginx -y

sudo certbot --nginx -d warabenture.com     🌟このコマンドは２回目だからか失敗した
    🌟 /etc/letsencrypt/live/example.com/ ディレクトリーの下にはファイルが作られている。

sudo systemctl status certbot.timer
sudo certbot renew --dry-run
sudo ufw status
    🌟 80 と 443 が開いていることを確認する</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👇</span>設定は以上なので、設定できているか確認する。<br/>
                <br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://www.whynopadlock.com/">https://www.whynopadlock.com/</a><br/>
                <span class="font-x2">📖</span><a target="_blank" href="https://www.ssllabs.com/ssltest/">https://www.ssllabs.com/ssltest/</a><br/>
                <br/>
                設定できてないな。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                Grok に聞いてみるか。
            </div>
        </div>
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
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                通った。nginxの設定は、80 と 443 の２つ書く必要があったのか。
            </div>
        </div>
    </section>

    <h3>[2025-07-12_Sat]</h3>
    <section class="sec-3">
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="code-w">csv-cleaning-2-on-tauri</span>リポジトリーのパッケージ依存関係がおかしいらしい。<br/>
                📄<span class="code-w">cargo.toml</span>ファイルから、<span class="code-w">api-all</span>フィーチャーを除去。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                👇 次に、<span class="code-w">cargo</span>を更新。
            </div>
        </div>
        <pre class="code-b">
cd src-tauri
cargo update
cargo clean
pnpm install
pnpm dev

cd ..
pnpm add @tauri-apps/cli@latest @tauri-apps/api@latest

pnpm tauri info</pre><br/>
        <pre class="code-b">
&gt; notepad-on-tauri@0.1.0 tauri C:\Users\muzud\OneDrive\ドキュメント\GitHub\csv-cleaning-2-on-tauri
&gt; tauri "info"


[✔] Environment
    - OS: Windows 10.0.26100 x86_64 (X64)
    ✔ WebView2: 138.0.3351.77
    ✔ MSVC:
        - Visual Studio Build Tools 2022
        - Visual Studio Community 2022
    ✔ rustc: 1.87.0 (17067e9ac 2025-05-09)
    ✔ cargo: 1.87.0 (99624be96 2025-05-06)
    ✔ rustup: 1.28.2 (e4f3ad6f8 2025-04-28)
    ✔ Rust toolchain: stable-x86_64-pc-windows-msvc (default)
    - node: 22.16.0
    - pnpm: 10.11.0
    - npm: 10.8.2

[-] Packages
    - tauri 🦀: 2.6.2
    - tauri-build 🦀: 2.3.0
    - wry 🦀: 0.52.1
    - tao 🦀: 0.34.0
    - @tauri-apps/api : 2.6.0
    - @tauri-apps/cli : 2.6.2

[-] Plugins
    - tauri-plugin-dialog 🦀: 2.3.0
    - @tauri-apps/plugin-dialog : 2.2.2 (outdated, latest: 2.3.0)
    - tauri-plugin-fs 🦀: 2.4.0
    - @tauri-apps/plugin-fs : 2.3.0 (outdated, latest: 2.4.0)
    - tauri-plugin-opener 🦀: 2.4.0
    - @tauri-apps/plugin-opener : 2.2.7 (outdated, latest: 2.4.0)

[-] App
    - build-type: bundle
    - CSP: unset
    - frontendDist: ../dist
    - devUrl: http://localhost:1420/
    - framework: Vue.js
    - bundler: Vite</pre><br/>
        <pre class="code-b">
rustup update</pre><br/>
        <pre class="code-b">
cd src-tauri
cargo add tauri-plugin-fs
pnpm add @tauri-apps/plugin-fs

cd ..
pnpm dev</pre><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                直らん。 📁<span class="code-w">node_modules</span> フォルダーを削除して、<span class="code-w">pnpm tauri dev</span>を打鍵。<br/>
                コンパイル・エラーの数はだいぶ減った。
            </div>
        </div>
        <pre class="code-b">
pnpm install
pnpm tauri dev</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                コンパイル・エラーの数はさらに減った。
            </div>
        </div>
        <pre class="code-b">
cd src-tauri
cargo add csv

cd ..
pnpm tauri dev</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                コンパイル・エラーは取れて、ウィンドウも表示されたけど、ウィンドウの内側は真っ白だ……。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202507/202507__warabenture__12--1713-csvCleaningOnTauri-o1o0.png">
            <img class="scr-shot" src="/img/journal/202507/202507__warabenture__12--1713-csvCleaningOnTauri-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                👆 シュリンクして、テキストだけ表示できるように直した。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                逐次的に<span class="code-w">&lt;main class="container"&gt;</span>なんてコツコツ書かずに、<br/>
                構造的に<span class="code-w">&lt;v-app&gt;&lt;v-main&gt;</span>を使うみたいだぜ？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                そうか、自動的にレスポンシブ・デザインに対応してもらうには、Ｗｅｂサイトに特化したフレームワークに丸投げした方がいいのか……。
            </div>
        </div>
    </section>

    <h3>[2025-06-19_Thu]</h3>
    <section class="sec-3">
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                CSV ファイルを読み込んだら、表形式のコントロールで表示してくれだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                データテーブルは HTML にないので、<br>
                データテーブルのある<span class="code-w">Vuetify 3</span>をフロントエンドに使ってみるかな。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="code-w">csv-cleaning-on-tauri</span>リポジトリーから、自動生成したフォルダーを除いた部分をコピーして、<br>
                <span class="code-w">csv-cleaning-2-on-tauri</span>リポジトリーを作成するぜ。
            </div>
        </div>
        <pre class="code-b">
pnpm install</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>いつも通りのコマンド。
            </div>
        </div>
        <pre class="code-b">
pnpm add vuetify</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>Grok に聞いた、Vuetify 3 をインストールするコマンドを打鍵。
            </div>
        </div>
        <pre class="code-b">
import { createApp } from 'vue';
import App from './App.vue';
import 'vuetify/styles'; // VuetifyのCSSをインポート
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Vuetifyインスタンスを作成
const vuetify = createVuetify({
  components,
  directives,
  theme: { defaultTheme: 'light' }, // テーマ設定（任意）
});

// VueアプリにVuetifyを登録
createApp(App).use(vuetify).mount('#app');</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                これも<span class="font-x2">👆</span>Grok に聞いたやつで、📄<span class="code-w">src/main.ts</span>を上記のように編集すればいいらしい。
            </div>
        </div>
        <pre class="code-b">
pnpm add @tauri-apps/api</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>さらにコマンド打鍵。
            </div>
        </div>
        <pre class="code-b">
cd src-tauri
cargo clean
※targetフォルダーがあれば削除。 rm -rf target
pnpm install
pnpm tauri dev</pre>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>リポジトリーをコピーしたからか、わけわからんエラーが出たので、<br>
                キャッシュをクリアーしてやり直し。
            </div>
        </div>
    </section>

    <h3>[2025-06-15_Sun]</h3>
    <section class="sec-3">
        <a target="_blank" href="/img/journal/202506/202506__tauri__15--0059-CsvCleaningOnTauri-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__tauri__15--0059-CsvCleaningOnTauri-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>前（2025-06-12_Thu）言ってたツールを作ったぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                おつ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                じゃあ次の課題だぜ。<br>
                埼玉県新座市内の丁目、番地の形を図形として切り出して表示するソフトを作ってくれだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                Grok に尋ねてみると、日本の地図データを無料公開しているのは以下の２つで、<br>
                <ul>
                    <li><a target="_blank" href="https://www.geospatial.jp/">G空間情報センター</a></li>
                    <li><a target="_blank" href="https://www.gsi.go.jp/">国土地理院の電子国土基本図</a></li>
                </ul>
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                ［国土地理院］の方は丁目の精度までだから、残るのは［G空間情報センター］の一択だぜ。<br>
                ［G空間情報センター］の地図データは、精度や形式が揃ったものではなく、バラバラだそうだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                この <span class="code-w">.geojson</span> ってファイルは、どんなアプリで開けるの？<br>
                <a target="_blank" href="https://www.geospatial.jp/ckan/dataset/aigid-moj-11230/resource/00e54419-fb2a-4ea1-aac1-00c8675d9787">11230_新座市_公共座標9系_筆R_2022.geojson</a>
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                Grok がいくつか知ってたが、とりあえず <a target="_blank" href="https://qgis.org/">QGIS</a> を使ってみるかだぜ。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__screenshot__15--1901-QGIS-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__screenshot__15--1901-QGIS-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>あれっ、思ったような地図と違う……。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                不動産屋が登記した土地しか入ってないんじゃないの？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                使えねー。じゃあ［国土地理院］の方を見てみるか……。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__screenshot__15--1928-国土地理院-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__screenshot__15--1928-国土地理院-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>この地図をどうやって <span class="code-w">.geojson</span> 形式に変換するんだぜ？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                とりあえず左のサイドメニューの保存ボタンを押してみろだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="code-w">.json</span> 形式では保存できるが、<span class="code-w">.geojson</span> 形式ではなかったぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                じゃあ地図表示は諦めて、データ・クリーニングの方に重点的に取り掛かるかだぜ。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__screenshot__15--2046-埼玉県_市区町村別_世帯数-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__screenshot__15--2046-埼玉県_市区町村別_世帯数-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>左の表は令和7年5月1日現在の［埼玉県］の<a target="_blank" href="https://www.pref.saitama.lg.jp/a0206/03suikei/index.html">市区町村別世帯数・人口</a>だぜ。<br>
                右の表はお父んが［国勢調査］から持ってきて編集している表だぜ。<br>
                <br>
                このように、カテゴリー分けや、個々の項目名が揃っていないが、同じものを表しているはずの２つの表を、<br>
                行を揃えてデータを見せてくれるツールを作ってくれだぜ。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__screenshot__15--2109-２表のJoin-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__screenshot__15--2109-２表のJoin-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>じゃあとりあえず、左表から１列取って［名前2］、右表から１列取って［名前1］として、市区町村名を以下の３つのグループに分けるかだぜ。<br>
                <ul>
                    <li>両表に含まれる市区町村名</li>
                    <li>左表にだけ含まれる市区町村名</li>
                    <li>右表にだけ含まれる市区町村名</li>
                </ul>
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__screenshot__15--2113-２表のJoin2-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__screenshot__15--2113-２表のJoin2-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>２列を独立して昇順ソートするかだぜ。<br>
                浦和の浦がひらがなより文字コードが小さいのが意味わからんが……。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__screenshot__15--2121-２表のJoin3-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__screenshot__15--2121-２表のJoin3-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>手で振り分けたぜ。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__screenshot__15--2128-２表のJoin4-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__screenshot__15--2128-２表のJoin4-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span>手で名前の表記揺れを修正して２行を１行にまとめたりして、<br>
                そして、［二表仮番］という名前で列を作って、連番を振るぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                変更前の列名は残しておかないと、あとでどの行だったのかわからなくなるんじゃないの？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                そうか、古い列名は残しておいてくれだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                じゃあ、今回手で行った操作を自動化するアプリを作ってくれだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                アプリケーションの名前は <span class="code-w">column-names-sync-on-tauri</span> とかでいいかな。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                あれっ？ Cドライブの残り容量が 5 GB しかない！？
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                Tauri は debug フォルダーがバカでかいそうだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                Grok に対策を聞いてみるか。<br>
                以下のコードをさくっと実行。
            </div>
        </div>
        <div class="code-b">
<pre>
cd src-tauri
cargo clean
</pre>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                リリースもデバッグもどちらも含めて 14.3 GiB もファイルが消えた……。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                Tauri 恐ろしいな……。
            </div>
        </div>
    </section>

    <h3>[2025-06-12_Thu]</h3>
    <section class="sec-3">
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                データをクリーニングするツールが欲しいぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                全くだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                文字列を入力し、［埼玉県新座市］という文字列があれば［埼玉県,新座市］と分割するような、<br>
                ４７都道府県に対応した変換アプリを作ってくれだぜ。
            </div>
        </div>
        <a target="_blank" href="/img/journal/202506/202506__tauri__12--2156-csvCleaning-o1o0.png">
            <img class="scr-shot" src="/img/journal/202506/202506__tauri__12--2156-csvCleaning-o1o0.png">
        </a><br/>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">👆</span> じゃあ 📄<span class="code-w">file-list-on-tauri</span>リポジトリーから自動生成ファイルを削除して、それ以外をコピーした、<br>
                📄<span class="code-w">csv-cleaning-on-tauri</span>リポジトリーを作るぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="code-b">git init</span>コマンドを使った操作は、[2025-06-03_Tue] の日記を読んでくれだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                今日は途中で終了。
            </div>
        </div>
    </section>

    <h3>[2025-06-05_Thu]</h3>
    <section class="sec-3">
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                今日は、家の掃除をしたいぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                じゃあ、風呂桶を掃除してくれだぜ。
            </div>
        </div>
        <div class="talk">
            <div class="face-container">
                <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
            </div>
            <div class="baloon-tail"></div>
            <div class="baloon">
                <span class="font-x2">✅</span> 風呂と洗面所、便器を拭き掃除したぜ。
            </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            じゃあ、お父んはその風呂に入れだぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            <span class="font-x2">✅</span>風呂に入ってサッパリしたぜ。<br>
            <span class="font-x2">❌</span>お湯を入れていたはずなのに、ぬるま湯になっていたが……
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ガス代の支払いが滞っているのかしらねえ？
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            じゃあ次は、お父んは昼飯を食べろだぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            <span class="font-x2">✅</span> 昼飯を食べたぜ。<br>
            １時間ぐらいかかった。わりと時間かかるな。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            生命の維持に必要な活動ですからね。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            じゃあ次は、コーヒーを飲んで、歯を磨けだぜ。歯間ブラシも使えよ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            <span class="font-x2">✅</span> コーヒーを飲んで歯を磨いたぜ。歯間ブラシも使った。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            じゃあ次は、フィットネスジムに行けだぜ。行きしなには漫画本をBook-Offに売ってきてくれだぜ。<br>
            帰りには明日の飯２食分を買ってこいだぜ。<br>
            余裕があればズボンの裾上げのための裁縫セットを買ってこいだぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ズボンの裾上げのための裁縫セットってどこに売ってんの？
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            セブンイレブンや、ダイソーなどに売ってるだろ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            分かったぜ。行ってくるぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            帰宅なう。<br>
            <span class="font-x2">✅</span>フィットネスジムに行ってきたぜ。<br>
            <span class="font-x2">✅</span>行きしなに漫画本を売ってきたぜ。３０冊ぐらいで 2000 円ぐらいになったぜ。<br>
            <span class="font-x2">🤔</span>しかし、何巻まで買ったかのメモ書きをどこに保管しておくかが問題だぜ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            <span class="font-x2">✅</span>帰り際にはソーイングセットを買ってきたぜ。<br>
            ユザワヤでスヌーピーの絵柄が入ったやつだぜ、６，０００円。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ６，０００円は高いなあ。元を取るために何本のズボンの裾を上げるつもりだぜ？
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--1951-kifuwarabeNoOton-o1o2o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            ３本ぐらい……。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2025-hiyoko-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            １本２，０００円の裾上げねえ。
        </div>
        </div>
        <div class="talk">
        <div class="face-container">
            <img src="@/assets/img/202506__character__01--2013-kifuwarabe-o1o1o0.png" />
        </div>
        <div class="baloon-tail"></div>
        <div class="baloon">
            夜は集中力が落ちているんで、ズボンの裾上げは明日の朝にしろだぜ。<br>
            ひとまず、カフェインレス・ブラックコーヒーでも飲んで休めだぜ。
        </div>
        </div>
    </section>

    <Blog20250604Wed />

    <Blog20250603Tue />

    <Blog20250602Mon />

    <Blog20250601Sun />

    <Blog20250524Sat />
</template>

<script setup lang="ts">

    // ##############
    // # インポート #
    // ##############

    // ++++++++++++++++++
    // + コンポーネント +
    // ++++++++++++++++++

    import TheParentHeader from '../the-header.vue';
    import Blog20250524Sat from './2025-05/24-sat.vue';
    import Blog20250601Sun from './2025-06/01-sun.vue';
    import Blog20250602Mon from './2025-06/02-mon.vue';    
    import Blog20250603Tue from './2025-06/03-tue.vue';
    import Blog20250604Wed from './2025-06/04-wed.vue';

</script>
