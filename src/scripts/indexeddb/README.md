# indexeddbのデータベース設計

## village

|キー|概要|値|
|:------:|:-----:|:------|
|lobbyType|ロビーの種類|'human player', 'onymous audience', 'robot player'|
|token|avatarのトークン|^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$|
|villageId|villageのID|number|

## lang

言語

### 値
`en`, `fr`, `it`, `ja`
