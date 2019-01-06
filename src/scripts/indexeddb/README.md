# indexeddbのデータベース設計

## lobby

|キー|概要|値|
|:------:|:-----:|:------|
|lobbyType|ロビーの種類|'human player', 'onymous audience', 'robot player'|
|token|avatarのトークン|^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$|

## village

|キー|値（例）|概要|
|:------:|:-----:|:------|
|a|b|c|
