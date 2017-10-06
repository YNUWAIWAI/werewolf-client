# werewolf-client

人狼知能の人間側のインターフェース．
生成物は`docs/`にある．

## 必要なもの

今のところCSSを編集しないなら必要ない．

- Node.js v8.5.0
- npm 5.3.0 または yarn 1.1.0

最新のものであればいい．

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
