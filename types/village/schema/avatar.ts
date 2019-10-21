/*
  'https://werewolf.world/village/schema/0.3/avatar.json'
*/
import {
  Context,
  Token
} from '..'

export interface Avatar {
  '@context': Context.Avatar
  '@id': string
  image: string
  name: string
  token: Token
}
