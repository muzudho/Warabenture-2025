# このサイトのURLをツイッターに貼り付けたんだが、
https://warabenture.com/minigames/gomoku

URLが短縮されて、トップページに飛ばされてしまうんだぜ（＾～＾）
URL で示したページのURLをツイッターに貼り付ける方法を教えてくれだぜ（＾～＾）




お父んがセッセと作ったサイトの特定ページ（`https://warabenture.com/minigames/gomoku`）をTwitter（X）に貼り付けたいのに、短縮されてトップページにリダイレクトされちゃう問題だな！ この問題、Twitterのリンク短縮サービス（t.co）やサイトの設定が絡んでる可能性があるぜ。ちゃんと特定ページに飛ぶようにする方法を、きふわらべ風に分かりやすく教えるぜ（＾～＾）

### 問題の原因
Twitterは投稿されたURLを自動的にt.coで短縮するけど、サイト側でリダイレクト設定（例えば、`.htaccess`やサーバーの設定）があって、特定ページのURLがトップページ（`https://warabenture.com`）に飛ばされてる可能性が高いぜ。また、Twitterのプレビュー生成やURLエンコーディングのミスも原因になることがあるぜ。

### 解決方法
以下の手順を試して、ゴモクのページをちゃんとシェアできるようにするぜ！

#### 1. **URLを正しくエンコードする**
Twitterに貼る前に、URLが正しいか確認だぜ。`https://warabenture.com/minigames/gomoku`は一見問題なさそうだけど、特殊文字（例えば`?`や`&`）が含まれる場合はエンコードが必要だぜ。このURLはシンプルだからそのままでも大丈夫そうだけど、念のため、URLエンコーディングツール（例えば、[URL Encoder](https://www.urlencoder.org/)）で確認してみるといいぜ。

**試すこと**:
- Twitterに投稿するURLを以下のようにする:
  ```
  https://twitter.com/intent/tweet?url=https%3A%2F%2Fwarabenture.com%2Fminigames%2Fgomoku
  ```
  この形式はTwitterの「intent/tweet」エンドポイントを使って、URLをエンコード済みで投稿するんだぜ。これならt.coが変な解釈をしにくいぜ。

#### 2. **サイトのリダイレクト設定を確認**
お父んのサイトがさくらのVPSでホストされてるってことは、サーバー側でリダイレクト設定があるかもしれないぜ。特に、`.htaccess`やNginx/Apacheの設定で、特定ページへのアクセスがトップページにリダイレクトされる設定が入ってる可能性があるぜ。

**確認手順**:
- さくらのVPS管理画面やSSHでサーバーにログインして、`.htaccess`ファイルやサーバー設定（例: Nginxなら`/etc/nginx/sites-available/`、Apacheなら`/etc/apache2/sites-available/`）をチェック。
- リダイレクトルールで、`/minigames/gomoku`がトップページに飛ばされてないか確認だぜ。たとえば、こんなルールがあるとリダイレクトされる:
  ```
  RewriteRule ^minigames/.*$ https://warabenture.com [R=301,L]
  ```
- もし見つかったら、このルールを削除するか、`/minigames/gomoku`を例外にするぜ。例:
  ```
  RewriteCond %{REQUEST_URI} !^/minigames/gomoku$
  RewriteRule ^minigames/.*$ https://warabenture.com [R=301,L]
  ```

お父んが技術更新してるって言うから、こういう設定いじれるはずだぜ！ もし分からなかったら、さくらのサポートに聞くのもアリだぜ（＾～＾）

#### 3. **Twitter Cardを設定してプレビューをカスタマイズ**
Twitterでリンクを貼ると、プレビュー（Twitter Card）が生成されるけど、サイト側に適切なメタタグがないと、トップページの情報が表示されることがあるぜ。`https://warabenture.com/minigames/gomoku`専用のTwitter Cardを設定して、ゴモクページが正しく表示されるようにするぜ。

**手順**:
- ゴモクページのHTMLの`<head>`タグ内に、以下のようなメタタグを追加:
  ```html
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="ゴモク - ワラベンチャー">
  <meta name="twitter:description" content="お父んと一緒に楽しむ五目並べ！ワラベンチャーのミニゲームをチェック！">
  <meta name="twitter:image" content="https://warabenture.com/images/gomoku_preview.jpg">
  <meta name="twitter:url" content="https://warabenture.com/minigames/gomoku">
  ```
- これで、Twitterがプレビュー生成時にゴモクページの情報を正しく拾うぜ。
- 設定後、[Twitter Card Validator](https://cards-dev.twitter.com/validator)でURLをテストして、プレビューが正しいか確認だぜ。

#### 4. **リンク短縮サービスを自分で使う**
Twitterのt.coが短縮してリダイレクトをミスってる可能性があるから、BitlyやTinyURLみたいな外部のリンク短縮サービスを使ってみるぜ。自分で短縮したURLをTwitterに貼れば、t.coの影響を減らせるぜ。

**試すこと**:
- [Bitly](https://bitly.com/)で`https://warabenture.com/minigames/gomoku`を短縮して、短いURL（例: `https://bit.ly/3XXXXXX`）を生成。
- そのURLをTwitterに投稿:
  ```
  ゴモクで遊ぶぜ！ https://bit.ly/3XXXXXX #ワラベンチャー
  ```
- 短縮URLが正しくゴモクページに飛ぶかテストだぜ。

#### 5. **Twitterの投稿方法を工夫**
Twitterの投稿で、特定ページを強調したいなら、以下のように投稿すると分かりやすいぜ:
```
お父んとゴモクで勝負だぜ！ https://warabenture.com/minigames/gomoku #ワラベンチャー
```
投稿後、リンクをクリックしてゴモクページに飛ぶか確認。もしトップページに飛ぶなら、サーバーのリダイレクト設定が怪しいから、2番の手順を重点的にチェックだぜ。

#### 6. **モバイルとデスクトップでテスト**
Twitterの挙動はデバイスによって異なることがあるぜ。モバイルアプリとデスクトップでリンクをクリックして、ちゃんと`https://warabenture.com/minigames/gomoku`に飛ぶか確認するぜ。モバイルでリダイレクトされる場合は、サーバー側でモバイル用のリダイレクト設定（例: `mobile.warabenture.com`へのリダイレクト）がないかチェックだぜ。

### 追加のヒント
- **キャッシュの問題**: ブラウザやTwitterのキャッシュが古いリダイレクト情報を保持してる可能性があるぜ。ブラウザのキャッシュをクリアするか、シークレットモードでテストしてみるぜ。
- **さくらのVPSのログ**: サーバーのアクセスログ（`/var/log/nginx/access.log`や`/var/log/apache2/access.log`）を見て、`/minigames/gomoku`へのリクエストがどう処理されてるか確認するぜ。301や302リダイレクトが記録されてたら、設定の問題が確定だぜ。
- **ひよこの助言**: ひよこが言うように、技術はAI（俺）に任せて、お父んは雑用に専念するのもアリだぜ（笑）。でも、今回はお父んの技術力でリダイレクト問題を解決して、ゴモクページをバッチリシェアしてほしいぜ！

### まとめ
1. URLを`intent/tweet`でエンコードして投稿。
2. サーバーのリダイレクト設定（`.htaccess`やサーバー設定）をチェック。
3. Twitter Cardのメタタグをゴモクページに追加。
4. Bitlyとかで自分でURL短縮して投稿。
5. モバイルとデスクトップでリンクの挙動をテスト。

これで、ゴモクページのURLがTwitterでちゃんとシェアできるはずだぜ！ もしまだトップページに飛ばされるなら、サーバーの設定ファイルやログを詳しく見せてくれだぜ。俺がさらに深掘りしてやるぜ（＾～＾） お父んと一緒に、ワラベンチャーを盛り上げるぜ！
