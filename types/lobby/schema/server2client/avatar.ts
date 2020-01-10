/*
  'https://werewolf.world/lobby/schema/0.3/server2client/avatar.json'
*/
import {
  Language,
  Token
} from '../..'
import {PayloadType} from '../../payload'

export interface Avatar {
  image: string
  language: Language
  name: string
  token: Token
  type: PayloadType.avatar
}
