# Botti
botと会話するプロぼっちの鏡

## インストール方法
### node.jsのインストール及び設定
node.jsをインストールしてください。
その後、
```
npm install
```
を実行してください

### DocomoAPIの設定
新規アカウント登録
[https://dev.smt.docomo.ne.jp/?p=account.input](https://dev.smt.docomo.ne.jp/?p=account.input)
から登録し、API KEYを取得してください。

取得したAPIを `config.json.default` の apiKeyの項目に記述し、
`config.json.default`を`config.json`にリネームしてください。

## 使い方

以下のコマンドで実行できます。文字を打ち込んでEnterを押せば返事を返してくれます。
```
node ./botti.js
```
