/*
  'https://werewolf.world/lobby/schema/0.3/server2client/avatar.json'
*/
import {
  Language,
  Token
} from '../..'
import {
  PayloadBase,
  PayloadType
} from '../../payload'

export interface Avatar extends PayloadBase {
  image: string
  lang: Language
  name: string
  token: Token
  type: PayloadType.avatar
}
