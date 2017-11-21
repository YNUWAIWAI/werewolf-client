# werewolf-client

人狼知能の人間側のインターフェース．
生成物は`docs/`にある．

## 必要なもの

今のところCSSを編集しないなら必要ない．

- Node.js (latest stable)
- npm (latest stable) または yarn (latest stable)

バージョンはそのうち固定する．

## コマンド

`package.json`のscriptsのところに書いてある．

### `yarn build`

`src/`のCSSとHTMLをビルドし，`dest/`に吐く．

### `yarn build:watch`

`yarn build`のwatchできるver

### `yarn build:docs`

`src/`のCSSとHTMLをビルドし，`docs/`に吐く．
GitHub Pagesが使える．

## LICENCE

MIT
