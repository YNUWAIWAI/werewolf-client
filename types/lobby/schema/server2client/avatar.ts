/*
  'https://werewolf.world/lobby/schema/0.3/server2client/avatar.json'
*/
import {
  Language,
  PayloadBase,
  PayloadType,
  Token
} from '../..'

export interface Avatar extends PayloadBase {
  image: string
  lang: Language
  name: string
  token: Token
  type: PayloadType.avatar
}
