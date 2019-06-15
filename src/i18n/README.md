# i18n

## Message Syntax

https://formatjs.io/guides/message-syntax/

## id

`()`内の値は実行時に決定されることを示す．


## Crowdin [![Crowdin](https://d322cqt584bo4o.cloudfront.net/licos/localized.svg)](https://crowdin.com/project/licos)

- `*/en.json`を編集した場合は[アップロード](#upload)と[ダウンロード](#download)をすること．
- ファイルは`/client`にある．
- `*/ja.json`など，英語（`en`）以外の翻訳ファイルは直接編集せず，[Crowdin](https://crowdin.com/project/licos)上で編集すること．

### 編集上の注意

- 上の[Message Syntax](#message-syntax)を読んでからやること．
- `{}`で囲まれた部分に注意すればよい．

### upload

```bash
crowdin upload sources -b client
```

### download

```bash
crowdin download -b client
```

