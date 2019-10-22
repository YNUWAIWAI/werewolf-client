/*
  'https://werewolf.world/lobby/schema/0.3/server2client/avatar.json'
*/
import {
  Language,
  PayloadType,
  Token
} from '..'

export interface Avatar {
  image: string
  lang: Language
  name: string
  token: Token
  type: PayloadType.avatar
}
