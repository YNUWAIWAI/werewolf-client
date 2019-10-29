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

## buildVillagePayload

buildVillageをしたときにサーバーに送られるJSON

### 値

schema:
https://werewolf.world/lobby/schema/0.3/client2server/buildVillage.json

example:
https://werewolf.world/lobby/example/0.3/client2server/buildVillage.json

## nextGameVillageId

次の村のID

### 値

number

## isHost

プレイヤーがホストかそうでないか

### 値

boolean

## whatToDoNextInLobby

`/lobby`にアクセスしたときにすること

### 値

`leaveWaitingPage`, `nothing`, `selectNextVillage`, `selectVillage`,

値が設定されてないときは`nothing`として扱う
