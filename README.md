
# Discord Demo
## Setup
### 1. Discord App / Botの作成
1. https://discordapp.com/developers/applications/ で適当なApplicationを作成
2. Settings > Bot から適当なBotを作成
3. Settings > OAuth2 の「OAUTH2 URL GENERATOR」でBot追加用のURLを作成
  - 「SCOPES」の「bot」にチェック
  - 「BOT PERMISSIONS」の「TEXT PERMISSIONS」にすべてチェック
  - ほかも任意でチェックを入れる
4. 表示されたURLをコピーしてブラウザに入れる
5. 任意のサーバーにBotを追加する
※自分が管理権限を持っているサーバーしか追加できない

### 2.ファイルの準備
```bash
$ git clone https://github.com/kecbigmt/discord-demo
$ cd discord-demo
$ npm install
```

### 3. 環境変数にChannel IDとBot Tokenを追加
```bash
$ export DISCORD_CHANNEL_ID=<channel_id>
$ export DISCORD_BOT_TOKEN=<bot_token>
```

### 4. 実行
```bash
$ npm run start
```

## Reference
* 公式APIドキュメント：https://discordapp.com/developers/docs/intro
* discord.jsドキュメント：https://discord.js.org/#/docs/main/stable/general/welcome
* discord.jsガイド：https://discordjs.guide
